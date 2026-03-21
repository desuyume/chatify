import { Inject, Injectable } from '@nestjs/common'
import { User, users, type Database } from '@chatify/database'

import { DB_TOKEN } from '../database/database.module'

@Injectable()
export class UsersService {
  constructor(@Inject(DB_TOKEN) private readonly db: Database) {}

  async getAll(): Promise<User[]> {
    return await this.db.query.users.findMany()
  }

  async create(): Promise<User | null> {
    const createdUsers = await this.db
      .insert(users)
      .values({
        email: 'fdsfsd',
        name: 'fdsfsdf',
        password: 'fdsfsdf',
        username: 'fdsfsdf'
      })
      .returning()
    return createdUsers.length ? createdUsers[0] : null
  }
}
