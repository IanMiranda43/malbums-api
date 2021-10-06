import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Album extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  name: string;

  @Column()
  artist: string;

  @Column()
  year: number;

  @Column()
  genre: string;

  @Column()
  total_time: number;

  @Column('uuid')
  user_id: string;

  @ManyToOne(() => User)
  userId: User;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
