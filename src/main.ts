import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * This function initializes the NestJS app, can be named anything other than bootstrap. 
 */
async function bootstrap() {
  /**
   * The NestFactory class creates an instance of the entry point of the application,in most cases it is AppModule. 
   */
  const app = await NestFactory.create(AppModule);
  /**
   * This function call creates a default ValidationPipe and the configuration everytime we use a DTO. whitelist removes the properties that are not defined in the DTO for the specific method and route.
   * forbidNonWhitelisted makes the app drop requests which include such properties not defined in the DTO.
   * transform makes the ValidationPipe convert the string values to their specified type in the DTO using the Type or transform decorator.
   */
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