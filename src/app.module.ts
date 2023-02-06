import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserController } from "./user/user.controller";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [AppController],
    imports: [
        UserModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'nest_tutorial1',
            entities: [],
            synchronize: true,
          }),
    ]
})
export class AppModule{}