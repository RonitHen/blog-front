import './App.css';
import {Header} from "./components/header";
import {Outlet} from "react-router-dom";

export function App() {

    return (

        <div>
            <Header/>
            <Outlet/>
        </div>

    );
}




