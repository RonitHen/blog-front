import { PostList } from "../components/post_list";
import {useContext, useEffect} from "react";
import { PostContext } from "../providers/postProvider";
import '../styles/pages.css'

export function Posts() {
  const { posts, setPosts, fetchPosts } = useContext(PostContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedPosts = await fetchPosts();
                setPosts(fetchedPosts);

            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchData(); }, []);


        return (
    <div>
        <div className={"title-area"}>
            <div className="title-box">
                <h1>These are our Iron Souls:</h1>
                <PostList />
                <h5>There are {posts.length} Posts</h5>
            </div>
        </div>
    </div>
  );
}
