import {useContext, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useParams, useNavigate} from "react-router-dom";
import {UserContext} from "../providers/userProvider";
import {PostContext} from "../providers/postProvider";

export function EditPost() {
    const navigate = useNavigate()
    const {id} = useParams();
    const {user} = useContext(UserContext);
    const {getPost, updatePost} = useContext(PostContext);
    const {register, handleSubmit, formState, setValue} = useForm();
    const [initialPost, setInitialPost] = useState();

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const originalPost = await getPost(id);
                setInitialPost(originalPost)
                // Set the default values for the form fields using setValue
                setValue("title", originalPost.title);
                setValue("body", originalPost.body);
                setValue("date", originalPost.date);
            } catch (error) {
                console.error("Error fetching post data:", error);
            }
        }; fetchPostData(); }, []);

    if (!user) {
        return <p className="text-center text-red-500 text-2xl mt-3">Only admin can edit posts!</p>
    }

    if (user && !user.admin) {
        return <p className="text-center text-red-500 text-2xl mt-3">Only admin can edit posts!</p>
    }

    const handleEditPostSubmit = (data) => {
        const updatedPost = {
            ...initialPost,
            title: data.title,
            body: data.body,
            date: data.date,
        }
        updatePost(updatedPost);
        navigate("/posts");
    }

    return (<div>
        <h3>Edit post</h3>
        <form onSubmit={handleSubmit(handleEditPostSubmit)}>
            {formState.errors.title &&
                <span>{formState.errors.title.message}</span>}
            <input type="text" placeholder="Post title" {...register('title', {
                required: "Title is required",
                minLength: {value: 3, message: "Title must be at least 3 characters long"},
            })}/>
            {formState.errors.content &&
                <span>{formState.errors.content.message}</span>}
            <textarea placeholder="Post content" {...register('body', {required: "Content is required",})}></textarea>
            {formState.errors.date && (
                <span>{formState.errors.date.message}</span>)}
            <input type="date" {...register('date', {required: "Date is required",})}/>
            <button type="submit">Submit Post</button>
        </form>
    </div>)
}
































// import {useContext, useEffect, useState} from "react";
// import {PostContext} from "../providers/postProvider";
// import {useForm} from "react-hook-form";
// import {UserContext} from "../providers/userProvider";
// import {useParams, useNavigate} from "react-router-dom";
// import '../styles/pages.css'
// import {post} from "axios";
//
// export function EditPost() {
//
//     const {posts, setPosts} = useContext(PostContext);
//     const {user} = useContext(UserContext);
//     const {id} = useParams();
//     const [initialPost, setInitialPost] = useState();
//     const {getPost, updatePost} = useContext(PostContext);
//     const {register, handleSubmit, formState: {errors}, reset} = useForm(defaultValues: originalPost});
//     const navigate = useNavigate()
//
//     useEffect(() => {
//         const fetchPostData = async () => {
//             try {
//                 const originalPost = await getPost(id);
//                 setInitialPost(originalPost)
//                 setValue("title", originalPost.title);
//                 setValue("body", originalPost.body);
//                 setValue("date", originalPost.date);
//                 setValue("created_by", originalPost.created_by);
//             } catch (error) {
//                 console.error("Error fetching post data:", error);
//             }
//         };
//         fetchPostData(); }, []);
//
//             const handelEditPost = (data) => {
//             const editedPost = {
//                 ...initialPost,
//                 title: data.title,
//                 body: data.body,
//                 date: data.date,
//                 created_by: data.created_by
//             }
//             updatePost(editedPost);
//             navigate("/posts");
//         }
//
//     return (
//         <div>
//             <div className="flag-container"></div>
//             <div className={"title-area"}>
//                 <div className="title-box">
//                     {/*we want to check if the user is admin, if not he can't edit a post*/}
//                     {!user ? (<p className="subtitle">You must sign in to edit a post</p>) :
//
//                     <form onSubmit={handleSubmit(handelEditPost)}>
//                         <>
//                             {/* The input for the new title of the edited post */}
//                             <label htmlFor="title">Post Title:  </label>
//                             <input type="text" {...register('title', {
//                                 required: "The title is required",
//                                 minLength: {value: 3, message: "Minimum length is 3 chars"},
//                                 pattern: {value: /^[A-Za-z\d']+$/i, message: "Title must include letters and numbers"}
//                             })}{originalPost.title}/>
//
//                             {/* Message to the user about the error */}
//                             <p style={{color: 'red'}}>{errors.title?.message}</p>
//                             <br/><br/>
//                         </>
//
//                         <>
//                             {/* The input for the new content of the edited post */}
//                             <label htmlFor="content">Post Content: </label>
//                             <textarea {...register('body', {required: "The content is required"})}></textarea>
//
//                             {/* Message to the user about the error */}
//                             <p style={{color: 'red'}}>{errors.body?.message}</p>
//                             <br/><br/>
//                         </>
//
//                         <>
//                             {/* The input for the new date of the edited post */}
//                             <label>Date: </label>
//                             <input type="date" {...register('date',{
//                                 required: "Please enter the post date",
//                             })}/>
//                         </><br/>
//
//                         {/* Message to the user about the error */}
//                         {errors.date && <span style={{color: 'red'}}>{errors.date.message}</span>}
//                         <br/>
//
//                         <button type="submit" >Edit Post</button>
//                     </form>
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }