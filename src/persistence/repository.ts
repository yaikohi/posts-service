import { IPostEntity } from './entity';
import { postStorage } from '../infrastructure/database';

interface ICommentRepository {
    getPosts: () => IPostEntity[]
    savePost: (post: IPostEntity) => void
    findPostById: (postId: string) => IPostEntity | undefined
}

const findPostById = (postId: string): IPostEntity | undefined => {
    return postStorage.find((post, _) => post.id === postId)
}

const savePost = (post: IPostEntity) => {
    postStorage.push(post)
}

const getPosts = (): IPostEntity[] => {
    return postStorage
}

export const postRepository: ICommentRepository = {
    getPosts,
    savePost,
    findPostById,
}