import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PhotoModule } from './test/test.module';
import { DbConnectionModule } from './db-connection/db-conection.module';

@Module({
  imports: [
    DbConnectionModule,
    PhotoModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
