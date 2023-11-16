module.exports.load = async function(app, ejs, db) {
  app.get("/leaderboard", async (req, res) => {
      let users = await db.get("userlist") ?? [];
      let leaders = [];
      for (var i = 0; i < users.length; i++) {
        let userid = users[i];
        let usercoins = await db.get(`coins-${userid}`) ?? 0;
        let username = await db.get(`username-${userid}`) ?? "Unknown User.";
        await leaders.push({
          coins: usercoins, 
          username: username
        });
      };
      const sorted = leaders.sort((a, b) => (b.coins > a.coins) ? 1 : -1)
      return res.send(sorted.slice(0, 10));
  })
};