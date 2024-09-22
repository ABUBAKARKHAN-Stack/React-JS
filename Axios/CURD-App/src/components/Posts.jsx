import React, { useState, useEffect } from 'react'
import Button from './Button'
import { deletePost, getPost } from '../API/PostApi'
import AddPost from './AddPost'

function Posts() {
    const [posts, setPosts] = useState([])
    const [editPost, setEditPost] = useState({})

    async function getPostData() {
        try {
            const res = await getPost()
            console.log(res.data);
            setPosts(res.data)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getPostData()
    }, [])


    const handleDeletePost = async (id) => {
        try {
            const res = await deletePost(id)
            console.log(res);
            if (res.status === 200) {
                const updatedPosts = posts.filter((eachVal) => eachVal.id !== id);
                setPosts(updatedPosts);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const onNewPost = (newData) => {
        setPosts((prevPosts) => [...prevPosts, newData])
    }

    const handleEditPost = (currentPost) =>  setEditPost(currentPost)
    return (
        <>
            <AddPost handleEditPost={handleEditPost} post={posts} onNewPost={onNewPost} editPost={editPost} setEditPost={setEditPost} />

            <ol className='grid grid-cols-1 text-white  md:grid-cols-2 xl:grid-cols-3 gap-5 px-8'>
                {
                    posts.map((eachVal) => {
                        const { id, title, body } = eachVal
                        return (
                            <li key={id} className='bg-slate-800 shadow-sm shadow-slate-800 border-l-2 gap-y-4 border-l-white rounded-[2px] font-sans text-white flex py-4 px-2 flex-col mt-10 w-full h-auto' >
                                <p className='text-xs font-thin tracking-wider'>ID: {id}</p>
                                <p className='text-xs font-thin tracking-wider'>Title: {title}</p>
                                <p className='text-[12.5px] font-[350] tracking-wider leading-[1.75]'>Body: {body}</p>
                                <div className='flex gap-x-2'>
                                    <Button onClick={() => handleEditPost(eachVal)} className='bg-green-500 transition-colors duration-300 ease-linear hover:bg-green-700 hover:text-white hover:shadow-lg hover:shadow-green-800 text-sm px-8 text-black'>Edit</Button>
                                    <Button onClick={() => handleDeletePost(id)} className='bg-red-500 transition-colors duration-300 ease-linear hover:bg-red-700 hover:text-white hover:shadow-lg hover:shadow-red-800 text-sm px-8 text-black'>Delete</Button>
                                </div>
                            </li>
                        )
                    })
                }
            </ol >
        </>
    )
}

export default Posts