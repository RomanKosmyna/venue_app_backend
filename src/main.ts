import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  console.log(`Starting server on ${port} port`);
  await app.listen(port);
}
bootstrap();
