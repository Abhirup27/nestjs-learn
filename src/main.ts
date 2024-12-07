import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  )
  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
// class User {

//   constructor()
//   {
//     console.log('User created');

//   }
//   public first = 'j';
// }

// class Post {
//   constructor(private u:User)
//   {
//     console.log('Post created');
//     u.first = 'a';
//   }
// }

// const user = new User();
// const post = new Post(user);