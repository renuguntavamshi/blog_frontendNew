import { Route,Routes } from "react-router-dom";
import Home from '../mainContent/Home'
import IndividualBlog from "../mainContent/IndividualBlog";
import Blogs from "../mainContent/Blogs";
import Login from "../adminPages/Login";
import Register from "../adminPages/Register";
 import AdminDashboard from "../adminPages/AdminDashboard";
  import AddBlog from "../adminPages/AddBlog";
  import DeleteBlog from "../adminPages/DeleteBlog";
import EditBlog from "../adminPages/EditBlog";
 
import { useState } from "react";
function RoutingComp(){
let [route,setRoute]=useState("")
console.log(route);
    return(
      <> 
   
       <Routes>
 <Route path="/" element={<Home  setRoute={setRoute}/>}/>
<Route path="/Blogs/:id" element={<IndividualBlog setRoute={setRoute} />}  />
  <Route path="/blogs" element={<Blogs /> }/>
 <Route path="/login" element={<Login />} />
 <Route path="/register" element={<Register />} />
 <Route path="/adminDashboard" element={<AdminDashboard />} >
  <Route path=""  element={<AddBlog /> } />
 <Route path="Edit & Delete Blog" element={<DeleteBlog />} />
 <Route path="Edit Single Blog/:id" element={<EditBlog />} />
 </Route> 
 
 
                    </Routes>
                    </>
    )
}
export default RoutingComp;