import { comments } from '$lib/comments.js'
import { json } from '@sveltejs/kit'

export async function PATCH(requestEvent){
    const {params, request} = requestEvent
    const { commentId } = params
    const { text } = await request.json()

    const comment = comments.find((comment) => comment.id === parseInt(commentId))

    if(comment){
        comment.text = text
        return json(comment)
    }
    else{
        return json({}, {status:404})
    }
}

export function DELETE(requestEvent){
    const {params} = requestEvent
    const { commentId } = params

    const deletedComment = comments.find((comment) => comment.id === parseInt(commentId))
    if(deletedComment){
        const index = comments.indexOf(deletedComment)
        if(deletedComment){
            comments.splice(index, 1)
        }
        return json(deletedComment)
    }
    else{
        return json({}, {status:404})
    }
}