import { Module } from '@nestjs/common';
import { CrimeActService } from './crime-act.service';
import { CrimeActController } from './crime-act.controller';

@Module({
  providers: [CrimeActService],
  controllers: [CrimeActController]
})
export class CrimeActModule {}
