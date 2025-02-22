import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RabbitMQ } from './common/constants';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.AMQP_URL],
      queue: RabbitMQ.PostulacionQueue,
    },
  });
  await app.listen();
  console.log('Microservice Postulaciones is listening');
}
bootstrap();
