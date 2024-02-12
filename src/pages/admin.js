
import {PostForm} from "../components/post_form";
import {useContext} from "react";
import {UserContext} from "../providers/userProvider";
import '../styles/pages.css'


export function Admin() {
    const {user} = useContext(UserContext);


    return (
        <div>
            <div className="flag-container"></div>
            <div className={"title-area"}>
                <div className="title-box">
        {
            /*
                we want to check if the user is admin
                and only if he is admin let him add a post
            */

            user ? (
                <div>
                    <h4>Hello Admin!</h4>
                    <h5>Here you can add a new post:</h5>
                    <PostForm/>
                </div>
            ) : (
                <div>
                    <h3>Please sign in first!</h3>
                    <p>Only admin can add a new post</p>
                </div>
            )
        }
                </div>
            </div>
        </div>
    )
}