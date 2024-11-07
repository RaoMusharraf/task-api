// src/tasks/dto/create-task.dto.ts
import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { Status } from '@prisma/client';

export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsEnum(Status)
    status: Status;
}