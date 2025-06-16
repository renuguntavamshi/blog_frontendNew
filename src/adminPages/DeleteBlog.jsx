import "datatables.net-dt/css/dataTables.dataTables.min.css";
import { Link } from "react-router-dom";
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import "jquery/dist/jquery.min.js";
import { useEffect,useState } from "react";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DeleteBlogData,GetAllBlogData } from "../services";
import AdminStyles from './admin.module.css';
function DeleteBlog(){
let [data,setData]=useState([])
DataTable.use(DT);

const getBlogData=async()=>{
    try{
let result=  await GetAllBlogData();
// if(result){
//         setData(res.data);
//           setTimeout(() => {
//         $('#example').DataTable(); // Initialize after DOM is ready
//       }, 0); // or useEffect dependency on `data`
// }
// else{
//     alert("No data present")
// }
    }
    catch(err){
        console.error(err)
    }
}
useEffect(()=>{
    axios.get("https://blog-backendnew-1.onrender.com/blog")
    .then(res=>{console.log(res.data);
        setData(res.data);
        console.log(res.data)
        setTimeout(() => {
        $('#example').DataTable(); // Initialize after DOM is ready
      }, 0); // or useEffect dependency on `data`


    })
    .catch(err=>console.log(err))


},[])

async function DeleteBlog(id){
try {
    await DeleteBlogData(id);
    alert("Blog Deleted Successfully");
    const newData = data.filter(item => item._id !== id);
    setData(newData);
  } catch (err) {
    console.log(err);
    alert("Error in Deleting Blog");
  }    
}

    return(
      <div>
        <section className="py-0">
           
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
{data.length>0?
<table id="example" className="display" style={{width:"100%"}}>
        <thead>
            <tr>
            <th style={{width:"5%"}}>S.No</th>
            <th style={{width:"15%"}}>Image</th>
                <th style={{width:"15%"}}>Blog Title</th>
                <th style={{width:"40%"}}>Blog Description</th>
                <th style={{width:"10%"}}>Published By</th>
              <th >Category</th>
              
                <th>Operations</th>
            </tr>
        </thead>
       <tbody>
        {data.map((item,index)=>{
            return(
                <tr key={index} >
                   <td>{index+1}</td> 
                    
                   <td><img src={`https://blog-backendnew-1.onrender.com/uploads/${item.filename}`} width="100px" height="60px" alt={`${item.filename}`}/></td>
                   <td>{item.blogtitle}</td>
                   <td>{item.description}</td>
                   <td>{item.publishedBy}</td>
                   <td>{item.blog_category}</td>

                <td>
                   <DeleteIcon color="error" onClick={()=>DeleteBlog(item._id)}/> 
                   <Link to={`/adminDashboard/Edit single Blog/${item._id} `}><EditIcon color="success" /></Link>
                   </td>

                </tr>
            )
        })}
       </tbody>
       
    </table>:<p className="text-center">No Data Found</p>}

                </div>
            </div>
        </div>
        </section>
      </div>
    )
}
export default DeleteBlog;