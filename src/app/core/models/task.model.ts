export interface TaskItem{
    id:number,
    title:string,
    description:string
    etat:string
}

export interface TaskCreate{
  id?:any,
  title?:string | null,
  description?:string | null,
  etat?:number | null,
}
