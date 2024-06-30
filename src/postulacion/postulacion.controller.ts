import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PostulacionDTO } from './dto/postulacion.dto';
import { PostulacionService } from './postulacion.service';
import { PostulacionMsg } from 'src/common/constants'; // Asegúrate de tener este import correcto

@Controller()
export class PostulacionController {
  private readonly logger = new Logger(PostulacionController.name);
  constructor(private readonly postulacionService: PostulacionService) {}

  @MessagePattern(PostulacionMsg.CREATE)
  async create(@Payload() payload: { postulacionDTO: PostulacionDTO, usuarioId: String, servicioId : String}) {
    const { postulacionDTO, servicioId,usuarioId } = payload;

    try {
        const createdPostulacion = await this.postulacionService.create(postulacionDTO, servicioId, usuarioId);
        return { message: 'POstulacion created successfully', Postulacion: createdPostulacion };
    } catch (error) {
        this.logger.error(`Error creating Postulacion: ${error.message}`);
        throw error; // Propagate the error to handle it properly
    }
  }

  @MessagePattern(PostulacionMsg.FIND_ALL)
  async findAll() {
    return await this.postulacionService.findAll();
  }

  @MessagePattern(PostulacionMsg.FIND_ONE)
  async findOne(@Payload() id: string) {
    return await this.postulacionService.findOne(id);
  }

  @MessagePattern(PostulacionMsg.UPDATE)
  async update(@Payload() payload: any) {
    const { id, postulacionDTO } = payload;
    return await this.postulacionService.update(id, postulacionDTO);
  }

  @MessagePattern(PostulacionMsg.DELETE)
  async delete(@Payload() id: string) {
    return await this.postulacionService.delete(id);
  }

 // @MessagePattern(PostulacionMsg.BUSCAR_HORARIOS_DISPONIBLES)
  //async buscarHorariosDisponibles(@Payload() payload: any) {
   // const { servicioId, fechaSolicitada } = payload;
   // return await this.postulacionService.buscarHorariosDisponibles(servicioId, fechaSolicitada);
  //}
}