export enum RabbitMQ {
    PostulacionQueue = 'postulaciones',
  }
  
  export enum PostulacionMsg {
    CREATE = 'CREATE_POSTULACION',
    FIND_ALL = 'FIND_POSTULACIONES',
    FIND_ONE = 'FIND_POSTULACION',
    UPDATE = 'UPDATE_POSTULACION',
    DELETE = 'DELETE_POSTULACION',
    BUSCAR_HORARIOS_DISPONIBLES = 'BUSCAR_HORARIOS_DISPONIBLES',
  }