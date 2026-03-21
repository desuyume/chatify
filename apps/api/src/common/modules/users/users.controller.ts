import { Controller, Get, Post } from '@nestjs/common'
import { User } from '@chatify/database'

import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.usersService.getAll()
  }

  @Post()
  async create(): Promise<User | null> {
    return await this.usersService.create()
  }
}
