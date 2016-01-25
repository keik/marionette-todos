let dev =  {
  HOST: 'localhost:3000'
}

let prod = {
  HOST: 'example.net'
}

module.exports =
  (process.env.NODE_ENV === 'prod') ? prod :
  (process.env.NODE_ENV === 'dev') ? dev :
  undefined
