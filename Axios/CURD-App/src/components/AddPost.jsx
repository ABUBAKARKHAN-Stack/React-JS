import React, { useEffect, useState } from 'react'
import Input from './Input'
import Button from './Button'
import { addPost } from '../API/PostApi'

function AddPost({ post, onNewPost, editPost, setEditPost }) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    async function addPostData(data) {
        try {
            const res = await addPost(data)
            if (res.status === 201) {
                onNewPost(data)
                setTitle("")
                setBody("")
            }
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        editPost && setTitle(editPost.title) || setBody(editPost.body)
    }, [editPost])


    const isEmpty = Object.keys(editPost).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const action = e.nativeEvent.submitter.value;
        if (action === "Edit") {
            
        }

        // Compute the ID here instead of using useState
        const newId = post.length + 1

        const data = {
            title: title,
            body: body,
            id: newId, // Use the computed ID
        }

        addPostData(data)
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-wrap justify-center items-center mt-10 w-fit mx-auto p-4 items-center gap-2 bg-gray-800'>
            <Input
                name="title"
                placeholder="Enter Your title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}

            />
            <Input
                name="post"
                placeholder="Enter Your post"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <Button type='submit' value={isEmpty ? "Add" : "Edit"} className='bg-teal-300 shadow-sm shadow-teal-300 uppercase'>
                {isEmpty ? "Add" : "Edit"}
            </Button>
        </form>
    )
}


export default AddPost
