import { Table, Column, Model, DataType } from 'sequelize-typescript';
@Table
export class Place extends Model {
  @Column({
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    type: DataType.UUID,
  })
  id: string;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  category: string;

  @Column
  gmaps_url: string;

  @Column
  likes: number;

  @Column
  rating: number;
}
