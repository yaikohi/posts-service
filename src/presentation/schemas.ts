import { t } from "elysia"

export const PostResponseSchema = t.Object({
    success: t.Boolean(),
    message: t.String(),
    content: t.Object({
        id: t.String(),
        title: t.String(),
        content: t.String()
    })
})

export const PostParamsSchema = t.Object({
    id: t.String()
})

export const PostBodySchema = t.Object({
    title: t.String(),
    content: t.String(),
})
