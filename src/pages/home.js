import '../styles/home.css'
import {Link} from "react-router-dom";

export function Home() {
    return (
        <div>
            <div className={"title-area"}>
                <div className="title-box">
                    <h2>Welcome to</h2>
                    <h1>Iron Souls</h1>
                    <h3>A Community as A Family</h3>
                </div>

                <div className="tabs">
                    <div className="homeTab">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="aboutTab">
                        <Link to="/about">About us</Link>
                    </div>
                    <div className="postsTab">
                        <Link to="/posts">Posts</Link>
                    </div>
                    <div className="contactTab">
                        <Link to="/contact">Contact us</Link>
                    </div>
                </div>

                {/*<div>*/}
                {/*    <ul className="tabs">*/}
                {/*        <li><Link to="/">Home</Link></li>*/}
                {/*        <li><Link to="/about">About</Link></li>*/}
                {/*        <li><Link to="/posts">Posts</Link></li>*/}
                {/*        <li><Link to="/contact">Contact</Link></li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}