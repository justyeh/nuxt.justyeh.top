import Nuxt from 'nuxt'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Import Routes
let api = require('./api/index')(app);

// Start nuxt.js
async function start() {
  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(process.env.NODE_ENV === 'production')
  // Instanciate nuxt.js
  const nuxt = new Nuxt(config)
  // Add nuxt.js middleware
  app.use(nuxt.render)
  // Listen the server
  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
