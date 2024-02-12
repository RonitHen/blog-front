import {useContext, useEffect, useState} from "react";
import {PostContext} from "../providers/postProvider";
import {useForm} from "react-hook-form";
import {UserContext} from "../providers/userProvider";
import {useParams, useNavigate} from "react-router-dom";
import '../styles/pages.css'
export function EditPost() {

    const {posts, setEditPosts, getPost: getPost} = useContext(PostContext);
    const {user} = useContext(UserContext);
    const {id} = useParams();
    const originalPost = getPost(id);
    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        defaultValues: originalPost
    });

    /*
     When the admin edited a post here we update the properties of the object that
     handle the edited post
     */
    const handelEditPost = (dataToEdit) => {
        const editedPost = {
            title: dataToEdit.title,
            body: dataToEdit.body,
            id: id,
            date: dataToEdit.date,
        }

        const updatePosts = posts.map((post) => String(post.id) === id ? editedPost : post)
        setEditPosts(updatePosts)

        reset();
    }


    return (
        <div>
            <div className="flag-container"></div>
            <div className={"title-area"}>
                <div className="title-box">
                    {/*we want to check if the user is admin, if not he can't edit a post*/}
                    {!user ? (<p className="subtitle">You must sign in to edit a post</p>) :

                    <form onSubmit={handleSubmit(handelEditPost)}>
                        <>
                            {/* The input for the new title of the edited post */}
                            <label htmlFor="title">Post Title:  </label>
                            <input type="text" {...register('title', {
                                required: "The title is required",
                                minLength: {value: 3, message: "Minimum length is 3 chars"},
                                pattern: {value: /^[A-Za-z\d']+$/i, message: "Title must include letters and numbers"}
                            })}/>

                            {/* Message to the user about the error */}
                            <p style={{color: 'red'}}>{errors.title?.message}</p>
                            <br/><br/>
                        </>

                        <>
                            {/* The input for the new content of the edited post */}
                            <label htmlFor="content">Post Content: </label>
                            <textarea {...register('body', {required: "The content is required"})}></textarea>

                            {/* Message to the user about the error */}
                            <p style={{color: 'red'}}>{errors.body?.message}</p>
                            <br/><br/>
                        </>

                        <>
                            {/* The input for the new date of the edited post */}
                            <label>Date: </label>
                            <input type="date" {...register('date',{
                                required: "Please enter the post date",
                            })}/>
                        </><br/>

                        {/* Message to the user about the error */}
                        {errors.date && <span style={{color: 'red'}}>{errors.date.message}</span>}
                        <br/>

                        <button type="submit" >Edit Post</button>
                    </form>
                    }
                </div>
            </div>
        </div>
    )
}