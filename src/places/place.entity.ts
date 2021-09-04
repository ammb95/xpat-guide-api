import { Table, Column, Model } from 'sequelize-typescript';
@Table
export class Place extends Model {
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
