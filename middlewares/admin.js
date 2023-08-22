import { StatusCodes } from 'http-status-codes'
import UserRole from '../enums/UserRole.js'

export default (req, res, next) => {
  if (req.user.role === UserRole.USER) {
    return res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      message: '沒有權限'
    })
  } else {
    next()
  }
}
