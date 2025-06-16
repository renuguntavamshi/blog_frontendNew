import {NavLink} from "react-router-dom"
import HeaderStyles from './header.module.css'
//    import MediLife from "./MediLife.png";
function Header(){
    return(
        <>
         <header className={` ${HeaderStyles.header}`} >
     <nav className="navbar py-3 navbar-expand-lg bg-body-tertiary">
     
     <div className="container">
       <NavLink className="navbar-brand" to="/">
        </NavLink>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
         <ul className="navbar-nav mb-2  mb-md-0">
           <li className="nav-item">
             <NavLink className={({isActive})=>isActive?`${HeaderStyles['active']}`:`${HeaderStyles['inactive']}`} to="/">Home</NavLink>
           </li>
           <li className="nav-item">
             <NavLink className={({isActive})=>isActive?`${HeaderStyles['active']}`:`${HeaderStyles['inactive']}`} to="/blogs">Blogs</NavLink>
           </li> 
           <li className="nav-item">
             <NavLink className={({isActive})=>isActive?`${HeaderStyles['active']}`:`${HeaderStyles['inactive']}`} to="/login">Login</NavLink>
           </li>
           <li className="nav-item">
             <NavLink className={({isActive})=>isActive?`${HeaderStyles['active']}`:`${HeaderStyles['inactive']}`} to="/register">Register</NavLink>
           </li>
         </ul>
   
       </div>


     </div>
   </nav>
       </header>
</>
    )
}
export default Header;