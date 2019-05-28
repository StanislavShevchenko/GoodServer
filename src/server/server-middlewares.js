// @flow
import { Router } from 'express'
import type { $Request, $Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import pino from 'express-pino-logger'
import addLoginMiddlewares from './login/login-middleware'
import { setup as addGunMiddlewares, GunDBPrivate } from './gun/gun-middleware'
import addStorageMiddlewares from './storage/storageAPI'
import addVerificationMiddlewares from './verification/verificationAPI'
import addSendMiddlewares from './send/sendAPI'
import logger from '../imports/pino-logger'
import VerificationAPI from './verification/verification'
import Rollbar from 'rollbar'
export default (app: Router, env: any) => {
  const rollbar = new Rollbar({
    accessToken: '9d72fbbedc434c03995f186846f0a126',
    captureUncaught: true,
    captureUnhandledRejections: true
  })
  // record a generic message and send it to Rollbar

  // parse application/x-www-form-urlencoded
  // for easier testing with Postman or plain HTML forms
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )

  // parse application/json
  app.use(bodyParser.json())

  app.options(cors())
  app.use(cors())

  app.use(pino({ logger }))

  addLoginMiddlewares(app)
  addGunMiddlewares(app)
  addStorageMiddlewares(app, GunDBPrivate)
  addVerificationMiddlewares(app, VerificationAPI, GunDBPrivate)
  addSendMiddlewares(app)

  app.use(rollbar.errorHandler())

  app.use((error, req, res, next: NextFunction) => {
    const log = req.log.child({ from: 'errorHandler' })
    log.error(error)
    res.status(400).json({ message: error.message })
  })
}
