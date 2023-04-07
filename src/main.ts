import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  /**create nest application just like express */
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
