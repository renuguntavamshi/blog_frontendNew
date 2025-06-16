import Grid from '@mui/material/Grid';
import blogStyles from "./blog.module.css"
import blog1 from "/src/blog1.jpg"
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useEffect,useState } from 'react';
const Blogs=()=>{
const [data,setData]=useState([])
useEffect(()=>{
async function FetchBlogData(){
let result=await axios.get("https://blog-backendnew-1.onrender.com/blog")
setData(result.data.reverse());
// alert(typeof result.data);
}
FetchBlogData()
},[]) 
  
    return(
        <div className="px-4 py-2">
        
        <h4 className={`text-white px-4 pb-2 bg-primary inline-block ${blogStyles.blogTextStyle}`} >Blogs</h4>

{Array.isArray(data) && data.length>0?
<>
{data.map((item,index)=>{return(
<Grid container key={index} spacing={2} className={`border border-secondary mx-2 my-2 p-2 ${blogStyles.blogBorderStyle}`}  >
<Grid size={{xs:12,md:3}} >
<img 
src={blog1} 
width="100%"
 height="100%" 
 alt ="blog Image"/>
</Grid>
<Grid size={{xs:12,md:9}} >
<h4>{item.blogtitle}</h4>
<span className="p-26">~{item.publishedBy}</span>
<br/>
<Typography variant="body2" sx={{textAlign:"justify",height:"52px",overflow:"hidden"}}>
{item.description}
                  </Typography>
         {/* <Link  state={gridItem}> */}
 <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
           <Link to={`/blogs/${item.blogtitle}`} state={item}> <Button size="small" color="primary" className="py-0 px-2">
              Read More
            </Button></Link>
          </Box>
        {/* </Link> */}
</Grid>
                  

</Grid>

)})}
</>
:<p>No data found</p>}



        </div>
    )
}

export default Blogs;