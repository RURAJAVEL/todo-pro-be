import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    }
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}