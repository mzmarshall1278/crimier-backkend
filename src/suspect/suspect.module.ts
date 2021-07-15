import { Module } from '@nestjs/common';
import { SuspectService } from './suspect.service';
import { SuspectController } from './suspect.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuspectRepository } from './suspect.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([SuspectRepository])
  ],
  providers: [SuspectService],
  controllers: [SuspectController]
})
export class SuspectModule {}
