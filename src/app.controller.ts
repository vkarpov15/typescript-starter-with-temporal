import { Body, Controller, Get, Put } from '@nestjs/common';
import { CounterService } from './counter.service';

@Controller()
export class AppController {
  constructor(private readonly counterService: CounterService) {}

  @Get('counter')
  async getCounter(): Promise<number> {
    return this.counterService.getValue();
  }

  @Put('counter')
  async incrementCounter(@Body() body: { value: number }): Promise<boolean> {
    await this.counterService.increment(body.value);

    return true;
  }
}
