import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../providers/userProvider";
import '../styles/header.css';

export function Header() {
    const {user, signIn, signOut} = useContext(UserContext);

    return(
        <header>
            <nav>
                <Link to="/" className="logo">| RH |</Link>

                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        {user && (<li><Link to="/admin">Admin</Link></li>)}
                    </ul>

                {/*
                        We check if user sign in to let him Admin permissions.
                    */}
                <a className="navbar-brand" href="#">{
                    user ? <button onClick={signOut}>Sign Out</button> : <button onClick={signIn}>Sign In</button>
                }</a>
            </nav>
        </header>
    )
}
