import * as path from 'path'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const ormOptions : TypeOrmModuleOptions = {
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "senha",
    database: "yt",
    entities: [path.resolve(__dirname, '..', 'db', 'models', '*')],
    migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')]
}

module.exports = ormOptions;
