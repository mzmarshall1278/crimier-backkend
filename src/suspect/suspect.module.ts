import { Module } from '@nestjs/common';
import { SuspectService } from './suspect.service';
import { SuspectController } from './suspect.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuspectRepository } from './suspect.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SuspectRepository]),
    AuthModule
  ],
  providers: [SuspectService],
  controllers: [SuspectController]
})
export class SuspectModule {}
