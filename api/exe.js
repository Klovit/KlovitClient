const fetch = require('node-fetch');
const settings = require('../settings.json')

module.exports.load = async function (app, db) {
  const execodes = {};
  const cooldowns = {};

  function generateUserCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }

  app.get(`/earn/exeio/gen`, async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect("/login");

    if (cooldowns[req.session.userinfo.id] && cooldowns[req.session.userinfo.id] > Date.now()) {
      return res.redirect(`/earn`);
    } else if (cooldowns[req.session.userinfo.id]) {
      delete cooldowns[req.session.userinfo.id];
    }

    const dailyTotal = await db.get(`dailyexeio-${req.session.userinfo.id}`);
    if (dailyTotal && dailyTotal >= settings.exeio.dailyLimit) {
      return res.redirect(`/earn?err=REACHEDDAILYLIMIT`);
    }

    const userCode = generateUserCode();
    execodes[req.session.userinfo.id] = {
      code: userCode,
      generated: Date.now(),
      redeemed: false,
    };
    
    let referer = req.headers.referer
    if (!referer) return res.send('An error occured with your browser!')
    referer = referer.toLowerCase()


    const link =  referer + `/exeio/redeem/${userCode}`;
    const api = settings.exeio.apikey
    try {
      const response = await fetch(`https://exe.io/api?api=${api}&url=${encodeURIComponent(link)}`);
      const data = await response.json();
      if (response.ok) {
        res.json({ link: data.shortenedUrl });
        console.log(`${req.session.userinfo.username} generated a ExeIO link: `, data.shortenedUrl);
      } else {
        console.error('Error generating ExeIO link:', data);
        res.status(500).json({ error: 'exelinkERROR' });
      }
    } catch (error) {
      console.error('Error generating exeIO link:', error);
      res.status(500).json({ error: 'EXEIOERROR' });
    }
  });

  app.get(`/exeio/redeem/:code`, async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect("/");

    if (cooldowns[req.session.userinfo.id] && cooldowns[req.session.userinfo.id] > Date.now()) {
        return res.redirect(`/earn`)
    } else if (cooldowns[req.session.userinfo.id]) {
        delete cooldowns[req.session.userinfo.id]
    }

    const code = req.params.code

    const usercode = execodes[req.session.userinfo.id]
    if (!usercode) return res.redirect(`/earn`)
    if (usercode.code !== code) return res.redirect(`/earn`)
    delete execodes[req.session.userinfo.id]

    // Checking at least the minimum allowed time passed between generation and completion
    if (((Date.now() - usercode.generated) / 1000) < settings.exelinks.minTimeToComplete) {
        return res.send('<p>Hm... our systems detected something going on! Please make sure you are not using an ad blocker (or linkvertise bypasser). <a href="/lv">Generate another link</a></p> <img src="https://i.imgur.com/lwbn3E9.png" alt="robot" height="300">')
    }

    cooldowns[req.session.userinfo.id] = Date.now() + (settings.exelinks.cooldown * 1000)

    // Adding to daily total
    const dailyTotal = await db.get(`dailyexeio-${req.session.userinfo.id}`)
    if (dailyTotal && dailyTotal >= settings.linkvertise.dailyLimit) {
        return res.redirect(`/earn?err=REACHEDDAILYLIMIT`)
    }
    if (dailyTotal) await db.set(`dailyexelinks-${req.session.userinfo.id}`, dailyTotal + 1)
    else await db.set(`dailyexeio-${req.session.userinfo.id}`, 1)
    if (dailyTotal + 1 >= settings.linkvertise.dailyLimit) {
        await db.set(`dailyexeio-${req.session.userinfo.id}`, Date.now(), 43200000)
    }

    // Adding coins
    const coins = await db.get(`coins-${req.session.userinfo.id}`)
    await db.set(`coins-${req.session.userinfo.id}`, coins + settings.exeio.coins)

    res.redirect(`/earn?success=true`)
})
};
