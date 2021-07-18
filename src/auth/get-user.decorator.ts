import { User } from './user.entity';
import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';

export const GetUser = createParamDecorator((data, ctx: ExecutionContext):User => {
  const req = ctx.switchToHttp().getRequest();
  if(!req.user.hasAccess) throw new UnauthorizedException('Head Quarters has blocked your access.')
  return req.user;
})