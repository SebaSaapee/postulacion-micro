import { Module } from '@nestjs/common';
import { PostulacionService } from './postulacion.service';
import { PostulacionSchema } from './schema/postulacion.schema';
import { POSTULACION, SERVICE } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { PostulacionController } from './postulacion.controller';
import { ServiceSchema } from './schema/service.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: POSTULACION.name,
        useFactory: () => PostulacionSchema,
      },{
        name: SERVICE.name,
        useFactory: () => ServiceSchema,
      },
    ]),
  ],
  controllers: [PostulacionController],
  providers: [PostulacionService],
})
export class PostulacionModule {}