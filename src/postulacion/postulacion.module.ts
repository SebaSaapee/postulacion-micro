import { Module } from '@nestjs/common';
import { PostulacionService } from './postulacion.service';
import { PostulacionSchema } from './schema/postulacion.schema';
import { POSTULACION } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { PostulacionController } from './postulacion.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: POSTULACION.name,
        useFactory: () => PostulacionSchema,
      },
    ]),
  ],
  controllers: [PostulacionController],
  providers: [PostulacionService],
})
export class PostulacionModule {}