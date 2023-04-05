import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const PORT = config.get<number>('PORT');

  await app.listen(PORT || 3000, () => {
    console.log('App is running on port:', PORT);
  });
}

start();
