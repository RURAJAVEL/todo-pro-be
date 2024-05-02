import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Todo extends Model {

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  label: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category: string;

  @Column({defaultValue: "false"})
  done: string;

}