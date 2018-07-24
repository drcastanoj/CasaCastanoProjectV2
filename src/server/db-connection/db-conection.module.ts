import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
    ],
})
export class DbConnectionModule {
    constructor(private readonly connection: Connection) { }
}
