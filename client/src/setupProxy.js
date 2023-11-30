module.exports = function (app) {
    app.use((req, res, next) => {
      // Enable CORS for specific hosts
      const allowedHosts = ['localhost', 'https://karston-algo-vis.onrender.com/', '127.0.0.1:80'];
      const origin = req.get('origin');
      if (allowedHosts.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
      }
      next();
    });
  };
  