import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  
  constructor(private readonly appService: AppService) {}

//@Get('api') //GET Request created, router will be "/api"

  @Get() //GET Request creted,nothing is there then router will be "/"
  getHello(): string {
    return this.appService.getHello(); //here we are calling appservice
  }
}
