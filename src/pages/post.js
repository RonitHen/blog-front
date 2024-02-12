import {useParams} from "react-router-dom";
import {useContext} from "react";
import {PostContext} from "../providers/postProvider";

export function Post() {
    const { id } = useParams();
    const {getPost} = useContext(PostContext);
    const post = getPost(id);

    return (

        <div>
            <div className="flag-container"></div>
            <div className={"title-area"}>
                <div className="title-box">
                    { post ? (
                        <div>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
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