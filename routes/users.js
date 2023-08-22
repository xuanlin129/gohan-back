import express from 'express'
import contentType from '../middlewares/contentType.js'
import { create, login, logout, extend, getProfile, getCart, editCart, getAll, editUser } from '../controllers/users.js'
import * as auth from '../middlewares/auth.js'
import admin from '../middlewares/admin.js'
import upload from '../middlewares/upload.js'

const router = express.Router()

router.post('/', contentType('application/json'), create)
router.post('/login', contentType('application/json'), auth.login, login)
router.delete('/logout', auth.jwt, logout)
router.patch('/extend', auth.jwt, extend)
router.get('/me', auth.jwt, getProfile)
router.get('/cart', auth.jwt, getCart)
router.post('/cart', contentType('application/json'), auth.jwt, editCart)
router.get('/all', auth.jwt, admin, getAll)
router.patch('/me', auth.jwt, contentType('multipart/form-data'), upload, editUser)

export default router
