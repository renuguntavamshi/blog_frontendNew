import { useLocation } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';

function IndividualBlog() {
  const location = useLocation();
  const blog = location.state;

  if (!blog) return <Typography>No Blog Data Found</Typography>;

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={`https://blog-backendnew-1.onrender.com/uploads/${blog.filename}`}
          alt={blog.blogtitle}
        />
        <CardContent>
          <Chip label={blog.blog_category} color="secondary" sx={{ mb: 2 }} />

          <Typography variant="h4" gutterBottom>
            {blog.blogtitle}
          </Typography>

          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
            ~ {blog.publishedBy}
          </Typography>

          <Typography variant="body1" sx={{ whiteSpace: "pre-line", textAlign:"justify" }}>
            {blog.description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default IndividualBlog;
