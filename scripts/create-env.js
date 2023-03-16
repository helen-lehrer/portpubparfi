const fs = require('fs')
fs.writeFileSync('./.env', `BEARER_TOKEN_EB=${process.env.BEARER_TOKEN_EB}\n`)

const fs2 = require('fs2')
fs2.writeFileSync('./.env', `ACCESS_TOKEN_PHQ=${process.env.ACCESS_TOKEN_PHQ}\n`)

