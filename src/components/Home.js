import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import Header from "./Header";
import { Sidebar } from "./sidebar";

const Home = () => {
    // const { setAuth } = useContext(AuthContext);
    // const navigate = useNavigate();

    // const logout = async () => {

    //     setAuth({});
    //     navigate('/linkpage');
    // }

    return (<div className="page-header-fixed sidemenu-closed-hidelogo page-content-white page-md header-white white-sidebar-color logo-indigo">
            <div  className="page-wrapper">
            <Header/>
            <div class="page-container">
            <Sidebar/>
            <div class="page-content-wrapper">
				<div class="page-content">
               
              
               </div>
               </div> 
            </div>
            </div></div>

        //     <section>
        //      <h1>Homerdgvfdcf</h1>
        //     <br />
        //     <p>You are logged in!</p>
        //     <br />
        //     <Link to="/editor">Go to the Editor page</Link>
        //     <br />
        //     <Link to="/admin">Go to the Admin page</Link>
        //     <br />
        //     <Link to="/lounge">Go to the Lounge</Link>
        //     <br />
        //     <Link to="/linkpage">Go to the link page</Link>
        //     <div className="flexGrow">
        //         <button onClick={logout}>Sign Out</button>
        //     </div> 
           
        // </section>
    )
}

export default Home
