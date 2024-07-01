export class PostulacionDTO {
    readonly servicioId: string;
    readonly usuarioId: string;
    readonly mensaje: string;
    readonly fechaSolicitada: Date; // Formato 'YYYY-MM-DD'
    readonly horarioSolicitado: string; // Formato 'HH:mm'
  }