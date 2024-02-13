import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {PostContext} from "../providers/postProvider";
import '../styles/post.css'
export function Post() {
    const { id } = useParams();
    const {getPost} = useContext(PostContext);
    const [post, setPost] = useState();
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postById = await getPost(id);
                setPost(postById);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        }; fetchPost();}, [id]);

    return (

        <div>
            <div className="flag-container"></div>
            <div className={"title-area"}>
                <div className="title-box">
                    { post ? (
                        <div className={"post-page"}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                            <img className={"post-img"} src={post.img_url} alt="post-picture"/>
                        </div>
                    ):(
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}