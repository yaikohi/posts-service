import { IPostEntity } from "../persistence/entity"

export interface Post {
  id: string,
  title: string,
  content: string,
  // author: string
  create: (post: IPostEntity) => IPostEntity
  update: ({ id, title, content }: IPostEntity) => void
  delete: ({ id }: { id: string }) => void
}