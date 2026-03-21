import type { CookieOptions } from 'express'
import ms from 'ms'

const cookieConfig: CookieOptions = {
  sameSite: 'lax',
  httpOnly: process.env.NODE_ENV !== 'development',
  path: '/',
  secure: process.env.COOKIE_SECURE === 'true',
  domain: process.env.COOKIE_DOMAIN || undefined,
  maxAge: ms(process.env.COOKIE_MAXAGE || '7d')
}

export default cookieConfig
