import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PostContext = createContext(null);

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/posts");
      const posts = await res.data;
      posts.forEach((post) => {
        const date = new Date(post.date);
        post.date = formatDateString(date);
      });
      return posts;
    } catch (error) {
      console.error("Error:", error);
      alert("Error fetching posts from the server");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const getPost = async (postId) => {
    try {
      const res = await axios.get(`http://localhost:4000/api/posts/${postId}`);
      const post = res.data;
      const date = new Date(post.date);
      post.date = formatDateString(date);
      return post;
    } catch (error) {
      console.error("Error getting post:", error);
    }
  };

  const addPost = async (post) => {
    try {
      const res = await axios.post("http://localhost:4000/api/posts", post, {
        withCredentials: true,
      });
      await fetchPosts();
      alert(res.data.message);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const updatePost = async (updatedPost) => {
    try {
      const res = await axios.put(
        `http://localhost:4000/api/posts/${updatedPost.id}`,
        updatedPost,
        { withCredentials: true }
      );
      await fetchPosts();
      alert(res.data.message);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const removePost = async (postId) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/posts/${postId}`,
        { withCredentials: true }
      );
      await fetchPosts();
      setPosts(posts.filter((post) => postId !== post.id));
      alert(res.data.message);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const formatDateString = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const values = {
    posts,
    setPosts,
    fetchPosts,
    getPost,
    addPost,
    updatePost,
    removePost,
  };

  return (
      <PostContext.Provider value={values}>
        {children}
      </PostContext.Provider>
  )
}
