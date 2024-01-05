import { IPostEntity } from "../persistence/entity"
import { postRepository } from "../persistence/repository"

interface IPostService {
    createPost: (post: IPostEntity) => void
    getPosts: () => IPostEntity[] | undefined
    getPostById: (id: string) => IPostEntity | undefined
}

const createPost = (post: IPostEntity): void => {
    postRepository.savePost(post)
}

const getPosts = (): IPostEntity[] | undefined => {
    return postRepository.getPosts()
}

const getPostById = (id: string): IPostEntity | undefined => {
    const post = postRepository.findPostById(id)

    if (!post) {
        // TODO
        return
    }

    return post
}

export const postService: IPostService = {
    createPost,
    getPosts,
    getPostById
}
