import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column('json', { nullable: true })
  colors: string[];
}
