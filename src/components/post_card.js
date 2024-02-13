import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../providers/userProvider";
import '../styles/post_card.css';
import {PostContext} from "../providers/postProvider";


export function PostCard({singlePost}) {
    const {user} = useContext(UserContext);
    const {removePost} = useContext(PostContext);

    const handleRemovePost = (event) => {
        removePost(singlePost.id);
    }

    return (
        <div className="post-card">
            <div className="post-content">
                <h2><Link to={`/posts/${singlePost.id}`}>{singlePost.title}</Link></h2>
                <img src={singlePost.img_url} alt="post-picture"/>
                <h6>created: {singlePost.date}</h6>
            </div>

            {/*Only if the user is admin let him edit or delete a post*/}
            {user &&
                // (user.admin &&
                <div className="post-buttons">
                    <button type="button"><Link to={`/editPost/${singlePost.id}`}>Edit</Link></button>
                    <button type="button" onClick={handleRemovePost}>Delete</button>
                </div>
            // )
            }
        </div>
    )
}


// <>
//     <Link to={`/post_edit`}><button>Edit Post</button></Link>
//     <Link to={`#`}><button>Delete Post</button></Link>
// </>