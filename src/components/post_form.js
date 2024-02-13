import {useContext} from "react";
import {PostContext} from "../providers/postProvider";
import {useForm} from "react-hook-form";
import {v4 as uuidv4 } from "uuid";
import {UserContext} from "../providers/userProvider";
import {useNavigate} from "react-router-dom";

export function PostForm() {

    const {addPost} = useContext(PostContext);
    const {user} = useContext(UserContext);
    const {register,handleSubmit, formState: {errors}, reset} = useForm();
    const navigate = useNavigate()

    // When the admin create a new post here we create an object that handle
    // the new properties of the new post
    const handleNewPost = (newPost) => {
        addPost({
            id: uuidv4(),
            title: newPost.title,
            body: newPost.body,
            date: newPost.date,
            posted_by: user.name,
        })
        navigate("/posts");
    }

    return (
        <div>
            {/*we want to check if the user is admin, if not he can't edit a post*/}
            {!user ? (<p className="subtitle">You must sign in to edit a post</p>) :
            <form onSubmit={handleSubmit(handleNewPost)}>
                <>
                    {/* The input for the title of the new post */}
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
                    {/* The input for the content of the new post */}
                    <label htmlFor="content">Post Content: </label>
                    <textarea {...register('body', {required: "The content is required"})}></textarea>

                    {/* Message to the user about the error */}
                    <p style={{color: 'red'}}>{errors.body?.message}</p>
                    <br/><br/>
                </>

                <>
                    {/* The input for the date of the new post */}
                    <label>Date: </label>
                    <input type="date" {...register('date',{
                        required: "Please enter the post date",
                    })} />
                </><br/>

                {/* Message to the user about the error */}
                {errors.date && <span style={{color: 'red'}}>{errors.date.message}</span>}
                <br/>

                <button type="submit" >Create Post</button>
            </form>
            }
        </div>
    )
}