// src/tasks/dto/update-task.dto.ts
import { IsString, IsEnum, IsOptional } from 'class-validator';
import { Status } from '@prisma/client';

export class UpdateTaskDto {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsEnum(Status)
    status?: Status;
}
