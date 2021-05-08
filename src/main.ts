import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // validation Middleware(pipe) 사용하기 (whitelist 추가할수도있음. 아니면 whitelist아닌건 아예 막아버릴수도)
  app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // 받은 값을 dto 형식으로 변경해준다.
    }),
  );

  await app.listen(3000);
}
bootstrap();
