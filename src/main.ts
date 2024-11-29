import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log(doubled);

function mult(factor:number):(num: number) => number
{
  return (num: number): number => num * factor;
}
const triple: (num: number) => number = mult(3);

const result: number = triple(5);
console.log(result);
