import { Module } from '@nestjs/common';
import { CrimeController } from './crime.controller';
import { CrimeService } from './crime.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrimeRepository } from './crime.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CrimeRepository],),
    AuthModule
  ],
  controllers: [CrimeController],
  providers: [CrimeService]
})
export class CrimeModule {}
