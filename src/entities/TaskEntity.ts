
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('tasks')
export default class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({ type: 'varchar' })
    content: string

  @Column({ type: 'boolean' })
    finished: boolean

  @Column({ type: 'boolean' })
    active: boolean

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date
}
