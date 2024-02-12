import {PostCard} from "./post_card"
import {useContext, useState} from "react";
import {PostContext} from "../providers/postProvider";
import '../styles/pages.css'

export function PostList() {

    const {posts} = useContext(PostContext);
    const [query, setQuery] = useState('');

    const handleUserInput = (evt) => {
        setQuery(evt.target.value);
    }

    return (
        <div>
            <h4>You can search name here: </h4>
            <input className={"input-bar"} onChange={handleUserInput}/>
            { posts
                .filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
                .map((post) => <PostCard singlePost={post}/>)
            }
        </div>
    )
}
