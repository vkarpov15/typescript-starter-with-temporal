import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CounterService } from './counter.service';
import { temporalProviders } from './temporal.providers';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [...temporalProviders, CounterService],
})
export class AppModule {}
