export class PostulacionDTO {
    readonly servicioId: string;
    readonly usuarioId: string;
    readonly mensaje: string;
    readonly fechaSolicitada: string; // Formato 'YYYY-MM-DD'
    readonly horarioSolicitado: string; // Formato 'HH:mm'
  }