const fs = require('fs')
fs.writeFileSync('./.env', `BEARER_TOKEN_EB=${process.env.BEARER_TOKEN_EB}\nACCESS_TOKEN_PHQ=${process.env.ACCESS_TOKEN_PHQ}`)

