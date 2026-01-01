module.exports = {
    apps : [{
      name   : "OSHXONA",
      cwd: "./",
      script : "./dist/server.js",
      witch: false,
      env_production: {
         NODE_ENV: "production"
      },
      env_development: {
         NODE_ENV: "development"
      },
      instances: 1,
      exec_mode:"cluster"
    }]
  }