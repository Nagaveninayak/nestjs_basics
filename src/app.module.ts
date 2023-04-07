import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { productModule } from './products/product.module';

/**controllers - handle requests and send back the information */
/**Module is a decorative that attaches to class */
@Module({
  imports: [productModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
