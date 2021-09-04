import { Sequelize } from 'sequelize-typescript';
import { Place } from 'src/places/place.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(`${process.env.DB_URI}`, {
        dialect: 'postgres',
        define: {
          timestamps: false,
        },
      });
      sequelize.addModels([Place]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
