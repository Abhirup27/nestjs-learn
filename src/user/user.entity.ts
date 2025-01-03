import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    fName: string;
    @Column()
    lName: string;
    @Column()
    email: string;
    @Column()
    passwd: string;
}