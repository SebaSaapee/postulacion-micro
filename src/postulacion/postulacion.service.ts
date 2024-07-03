import { Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { POSTULACION, SERVICE } from 'src/common/models/models';
import { PostulacionDTO } from './dto/postulacion.dto';
import { IPostulacion } from 'src/common/interfaces/postulacion.interface';
import { IService } from 'src/common/interfaces/services.interface';

@Injectable()
export class PostulacionService {
  constructor(@InjectModel(POSTULACION.name) private readonly model: Model<IPostulacion>,
  @InjectModel(SERVICE.name) private readonly modelService:Model<IService>) {}

  async create( postulacionDTO: PostulacionDTO, servicioId: String, usuarioId: String ): Promise<IPostulacion> {
    const nuevaPostulacion = new this.model({
      ...postulacionDTO,
      servicioId,
      usuarioId,
    });
    await this.modelService.findByIdAndUpdate(servicioId, { $inc: { contadorSolicitudes: 1 } }).exec();
    
    return await nuevaPostulacion.save();
  }

  async findAll(): Promise<IPostulacion[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<IPostulacion> {
    return await this.model.findById(id).exec();
  }

  async update(id: string, postulacionDTO: PostulacionDTO): Promise<IPostulacion> {
    return await this.model.findByIdAndUpdate(id, postulacionDTO, { new: true }).exec();
  }

  async delete(id: string): Promise<{ status: number, msg: string }> {
    await this.model.findByIdAndDelete(id).exec();
    return { status: HttpStatus.OK, msg: 'Deleted' };
  }

  async findByUser(userId: string): Promise<IPostulacion[]> {
    return await this.model.find({ usuarioId: userId }).exec();
  }

}
