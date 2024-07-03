export enum RabbitMQ {
    PostulacionQueue = 'postulaciones',
  }
  
 
export enum PostulacionMsg {
  CREATE = 'CREATE_POSTULACION',
  FIND_ALL = 'FIND_POSTULACIONES',
  FIND_ONE = 'FIND_POSTULACION',
  UPDATE = 'UPDATE_POSTULACION',
  DELETE = 'DELETE_POSTULACION',
  FIND_BY_USER = 'FIND_POSTULACION_USER',
}