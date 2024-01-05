import Elysia from "elysia";
import { postService } from "../application/service";
import { PostBodySchema, PostParamsSchema, PostResponseSchema } from "./schemas";

export const postsRouter = new Elysia()
    .model({
        postresponse: PostResponseSchema,
        postparams: PostParamsSchema,
        postbody: PostBodySchema
    })
    .get('/posts', () => {
        return "posts"
    })
    .post('/posts', ({ body, set }) => {
        const id = crypto.randomUUID();
        const { title, content } = body

        const newPost = { id, title, content }
        postService.createPost(newPost)

        set.status = 201;
        return {
            success: true,
            message: `Comment was succesfully posted.`,
            content: newPost
        }
    }, {
        body: 'postbody',
        params: 'postparams',
        response: 'postresponse',
    })