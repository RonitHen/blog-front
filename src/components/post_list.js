import {PostCard} from "./post_card"
import {useContext, useState} from "react";
import {PostContext} from "../providers/postProvider";
import '../styles/post_list.css'

export function PostList() {

    const {posts} = useContext(PostContext);
    const [query, setQuery] = useState('');

    const handleUserInput = (evt) => {
        setQuery(evt.target.value);
    }

    return (
        <div>
            <div id="posts-list-container" className="posts-list-container">
                <h3>You can search name here: </h3>
                <input className={"input-bar"} onChange={handleUserInput}/>
                <div className={"posts-list"}>
                    <div className="post-item">
                    { posts
                        .filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
                        .map((post) => <PostCard singlePost={post}/>)
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
