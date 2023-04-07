import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

/***
 * *your-domain.com/ --> all it ends with / is recevied in the below controller
 * *@Controller('products') --> recevies all with /products
 */

@Controller()
export class AppController {
  /**create appservice instance */
  constructor(private readonly appService: AppService) {}

  /**
   * *only empty path --> /
   * *@Get('users') --> /users
   * ?: Nestjs sets header automatically can be seen in inspect.
   * ?: In the below it is string aka html/text
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * *set manual headers
   */
  @Get('user')
  @Header('Content-Type', 'application/json')
  getUser(): { name: string } {
    return { name: 'nav' };
  }
}
