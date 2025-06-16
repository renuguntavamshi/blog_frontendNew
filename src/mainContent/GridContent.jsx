import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import blog1 from "/src/blog1.jpg"
import { Link } from 'react-router-dom';
import {useState, useEffect } from 'react';
 import axios from 'axios';


 function GridContent(){
const [data,setData]=useState([])
useEffect(()=>{
async function FetchBlogData(){
let result=await axios.get("https://blog-backendnew-1.onrender.com/blog")
setData(result.data.reverse());
// alert(typeof result.data);
}
FetchBlogData()
},[])  


  
  const hanldleReadMore=()=>{

  }
  return(
        <section className='px-4 py-0'>
<h2 className='pb-4 text-primary text-center'>Blogs</h2>
<Grid container spacing={2}  sx={{justifyContent:"center"}}>
  {data.length>6 ?
data.slice(0,6).map((gridItem,index)=>{
  return(<Grid size={{ xs: 12, md: 6 , lg: 4}} key={index}>
 <Card  sx={{minHeight:"300px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          // height="140px"
          image={`https://blog-backendnew-1.onrender.com/${gridItem.path.replace("public\\", "").replace(/\\/g, "/")}`}
          alt={gridItem.blogtitle}
          sx={{ width: '100%', objectFit: 'cover' ,height:"155px"}}
        />
     <CardContent sx={{ position: 'relative' }}>
                  {/* Category as Chip */}
                  <Chip
                    label={gridItem.blog_category}
                    color="teritary"
                    size="small"
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                  />

                  {/* Title */}
                  <Typography gutterBottom variant="h6" component="div"  sx={{paddingTop:"15px",textAlign:"justify",height:"90px",lineHeight:"35px",overflow:"hidden"}}>
                    {gridItem.blogtitle}
                  </Typography>

                  {/* Description */}
                  <Typography variant="body2" sx={{textAlign:"justify",height:"52px",overflow:"hidden"}}>
                    {gridItem.description}
                  </Typography>

                  {/* Author aligned right */}
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', textAlign: 'right', mt: 1 }}
                  >
                    ~ {gridItem.publishedBy}
                  </Typography>
                </CardContent>

      </CardActionArea>
      
         <Link to={`/blog/${gridItem.blogTitle}`} state={gridItem}>
         <Button size="small" color="primary" className='py-0 px-3' onClick={hanldleReadMore}>
         Read More
        </Button>
        </Link>
     
    </Card>

        </Grid>)
}):data.length<=6 ?
data.map((gridItem,index)=>{
  return(<Grid size={{ xs: 12, md: 6 , lg: 4}} key={index}>
 <Card  sx={{minHeight:"300px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          // height="140px"
          image={`https://blog-backendnew-1.onrender.com/${gridItem.path.replace("public\\", "").replace(/\\/g, "/")}`}
          alt={gridItem.blogtitle}
          sx={{ width: '100%', objectFit: 'cover' ,height:"155px"}}
        />
     <CardContent sx={{ position: 'relative' }}>
                  {/* Category as Chip */}
                  <Chip
                    label={gridItem.blog_category}
                    color="teritary"
                    size="small"
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                  />

                  {/* Title */}
                  <Typography gutterBottom variant="h6" component="div"  sx={{paddingTop:"15px",textAlign:"justify",height:"90px",lineHeight:"35px",overflow:"hidden"}}>
                    {gridItem.blogtitle}
                  </Typography>

                  {/* Description */}
                  <Typography variant="body2" sx={{textAlign:"justify",height:"52px",overflow:"hidden"}}>
                    {gridItem.description}
                  </Typography>

                  {/* Author aligned right */}
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', textAlign: 'right', mt: 1 }}
                  >
                    ~ {gridItem.publishedBy}
                  </Typography>
                </CardContent>
      </CardActionArea>
      
         <Link to={`/blogs/${gridItem.blogtitle}`} state={gridItem}>
         <Button size="small" color="primary" className='py-0 px-3' onClick={hanldleReadMore}>
         Read More
        </Button>
        </Link>
     
    </Card>

        </Grid>)
}):

<p className="text-center">No Data Found</p>  
}      
        </Grid>
      

 {Array.isArray(data) && data.length>0?<p>{data.length}</p>:<p>asdsdsdfsdf</p>}     

        </section>
    )
}
export default GridContent;




