import { Module } from '@nestjs/common';
import { TasksService } from './app.service';
import { TasksController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class AppModule { }