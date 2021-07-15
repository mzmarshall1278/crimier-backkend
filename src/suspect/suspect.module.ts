import { Module } from '@nestjs/common';
import { SuspectService } from './suspect.service';
import { SuspectController } from './suspect.controller';

@Module({
  providers: [SuspectService],
  controllers: [SuspectController]
})
export class SuspectModule {}
