import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { CrimeModule } from './crime/crime.module';
import { SuspectModule } from './suspect/suspect.module';
import { CrimeActModule } from './crime-act/crime-act.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    CrimeModule,
    SuspectModule,
    CrimeActModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
