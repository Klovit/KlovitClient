const fetch = require('node-fetch');
const settings = require('../settings.json')

module.exports.load = async function (app, db) {
  const lpcodes = {};
  const cooldowns = {};

  function generateUserCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }

  app.get(`/earn/lp/gen`, async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect("/login");

    if (cooldowns[req.session.userinfo.id] && cooldowns[req.session.userinfo.id] > Date.now()) {
      return res.redirect(`/earn`);
    } else if (cooldowns[req.session.userinfo.id]) {
      delete cooldowns[req.session.userinfo.id];
    }

    const dailyTotal = await db.get(`dailylinkpays-${req.session.userinfo.id}`);
    if (dailyTotal && dailyTotal >= settings.linkpays.dailyLimit) {
      return res.redirect(`/earn?err=REACHEDDAILYLIMIT`);
    }

    const userCode = generateUserCode();
    lpcodes[req.session.userinfo.id] = {
      code: userCode,
      generated: Date.now(),
      redeemed: false,
    };
    
    let referer = req.headers.referer
    if (!referer) return res.send('An error occured with your browser!')
    referer = referer.toLowerCase()


    const link =  referer + `/lp/redeem/${userCode}`;
    const api = settings.linkpays.apikey
    try {
      const response = await fetch(`https://linkpays.in/api?api=${api}&url=${encodeURIComponent(link)}`);
      const data = await response.json();
      if (response.ok) {
        res.json({ link: data.shortenedUrl });
        console.log(`${req.session.userinfo.username} generated a ATGLinks link: `, data.shortenedUrl);
      } else {
        console.error('Error generating ATGLinks link:', data);
        res.status(500).json({ error: 'lplinkERROR' });
      }
    } catch (error) {
      console.error('Error generating linkpays link:', error);
      res.status(500).json({ error: 'ATGLINKSERROR' });
    }
  });

  app.get(`/lp/redeem/:code`, async (req, res) => {
    if (!req.session.pterodactyl) return res.redirect("/");

    if (cooldowns[req.session.userinfo.id] && cooldowns[req.session.userinfo.id] > Date.now()) {
        return res.redirect(`/earn`)
    } else if (cooldowns[req.session.userinfo.id]) {
        delete cooldowns[req.session.userinfo.id]
    }

    const code = req.params.code

    const usercode = lpcodes[req.session.userinfo.id]
    if (!usercode) return res.redirect(`/earn`)
    if (usercode.code !== code) return res.redirect(`/earn`)
    delete lpcodes[req.session.userinfo.id]

    // Checking at least the minimum allowed time passed between generation and completion
    if (((Date.now() - usercode.generated) / 1000) < settings.linkpays.minTimeToComplete) {
        return res.send('<p>Hm... our systems detected something going on! Please make sure you are not using an ad blocker (or linkvertise bypasser). <a href="/lv">Generate another link</a></p> <img src="https://i.imgur.com/lwbn3E9.png" alt="robot" height="300">')
    }

    cooldowns[req.session.userinfo.id] = Date.now() + (settings.linkpays.cooldown * 1000)

    // Adding to daily total
    const dailyTotal = await db.get(`dailylinkpays-${req.session.userinfo.id}`)
    if (dailyTotal && dailyTotal >= settings.linkvertise.dailyLimit) {
        return res.redirect(`/earn?err=REACHEDDAILYLIMIT`)
    }
    if (dailyTotal) await db.set(`dailylinkpays-${req.session.userinfo.id}`, dailyTotal + 1)
    else await db.set(`dailylinkpays-${req.session.userinfo.id}`, 1)
    if (dailyTotal + 1 >= settings.linkvertise.dailyLimit) {
        await db.set(`lplimitdate-${req.session.userinfo.id}`, Date.now(), 43200000)
    }

    // Adding coins
    const coins = await db.get(`coins-${req.session.userinfo.id}`)
    await db.set(`coins-${req.session.userinfo.id}`, coins + settings.linkpays.coins)

    res.redirect(`/earn?success=true`)
})
};
