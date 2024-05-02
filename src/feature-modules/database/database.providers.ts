import { Sequelize } from 'sequelize-typescript';
import { User } from "../../feature-modules/users/user.model";
import { Todo } from "../../feature-modules/todo/todo.model";

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: +process.env.POSTGRES_PORT,
        database: process.env.POSTGRES_DB,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        schema: process.env.POSTGRES_SCHEMA,
      });
      const allSchemas = await sequelize.showAllSchemas({logging: false}) as unknown as string[];
      if (!allSchemas.includes(process.env.POSTGRES_SCHEMA)) {
        sequelize.createSchema(process.env.POSTGRES_SCHEMA, {logging: false});
      }
      sequelize.addModels([User, Todo]);
      await sequelize.sync();
      return sequelize;
    },
  },
];