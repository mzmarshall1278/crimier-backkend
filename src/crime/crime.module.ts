import { Module } from '@nestjs/common';
import { CrimeController } from './crime.controller';
import { CrimeService } from './crime.service';

@Module({
  controllers: [CrimeController],
  providers: [CrimeService]
})
export class CrimeModule {}
