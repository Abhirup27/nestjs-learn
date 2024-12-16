import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  );

  /**
 * swagger configuration
 * 
 */

  const config = new DocumentBuilder()
    .setTitle('NestJS web app API')
    .setDescription('Use the base API URL as http://localhost:3000/')
    .setTermsOfService('http://localhost:3000/terms-of-service')
    .setLicense('MIT License', 'https://opensource.org/license/MIT')
    .addServer('http://localhost:3000')
    .setVersion('1.0').build();
  //instance doc
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

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