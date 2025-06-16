import AdminStyles from './admin.module.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function EditBlog() {
  const { id } = useParams();
  
  const navigate = useNavigate();

  const [img, setImg] = useState("");
  const [preview, setPreview] = useState("");
  const [blog, setBlog] = useState({
    blogtitle: "",
    description: "",
    publishedBy: "",
    blog_category: ""
  });

  // Fetch the blog by ID on mount
  useEffect(() => {
    axios.get(`https://blog-backendnew-1.onrender.com/blog/${id}`)
      .then(res => {
        const { filename, blogtitle, description, publishedBy, blog_category } = res.data;
        setBlog({ blogtitle, description, publishedBy, blog_category });
        setImg(filename);
        setPreview(`https://blog-backendnew-1.onrender.com/uploads/${filename}`);
      })
      .catch(err => console.log(err));
  }, [id]);

  // Handle blog update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", img);
    formdata.append("blogtitle", blog.blogtitle);
    formdata.append("description", blog.description);
    formdata.append("publishedBy", blog.publishedBy);
    formdata.append("blog_category", blog.blog_category);

    try {
      const response = await axios.put(`https://blog-backendnew-1.onrender.com/blog/${id}`, formdata, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      alert("Blog updated successfully");
      navigate("/adminDashboard/Edit & Delete Blog");
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Failed to update blog");
    }
  };

  return (
    <div className={AdminStyles.body}>
      <section className="py-0">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-11 col-md-6 my-5">
              <div className={`${AdminStyles.formBorder} ${AdminStyles.formPadding}`}>
                <div className="row gx-3">

                  {/* Image Preview & Upload */}
                  <div className="col-sm-12 mb-3">
                    {preview && (
                      <img
                        src={preview}
                        alt="Blog Preview"
                        style={{ width: "100%", maxHeight: "300px", objectFit: "cover", marginBottom: "10px" }}
                      />
                    )}
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setImg(file);
                        setPreview(URL.createObjectURL(file));
                      }}
                    />
                  </div>
                  {/* Blog Category */}
                  <div className="col-sm-12 col-md-6 mb-3">
                    <input
                      type="text"
                      name="blog_category"
                      className="form-control"
                      value={blog.blog_category}
                      placeholder="Blog Category"
                      onChange={(e) => setBlog(prev => ({ ...prev, blog_category: e.target.value }))}
                    />
                  </div>
                   {/* Published By */}
                  <div className="col-sm-12 col-md-6 mb-3">
                    <input
                      type="text"
                      name="publishedBy"
                      className="form-control"
                      value={blog.publishedBy}
                      placeholder="Published By"
                      onChange={(e) => setBlog(prev => ({ ...prev, publishedBy: e.target.value }))}
                    />
                  </div>
                </div>


   
                 
               {/* Blog Title */}
                  <div className="col-sm-12  mb-3">
                    <input
                      type="text"
                      name="blogtitle"
                      className="form-control"
                      value={blog.blogtitle}
                      placeholder="Blog Title"
                      onChange={(e) => setBlog(prev => ({ ...prev, blogtitle: e.target.value }))}
                    />
                  </div>


                  {/* Description */}
                  <div className="col-sm-12 mb-3">
                    <textarea
                      rows="6"
                      name="description"
                      className="form-control"
                      value={blog.description}
                      placeholder="Description"
                      onChange={(e) => setBlog(prev => ({ ...prev, description: e.target.value }))}
                    ></textarea>
                  </div>

                {/* Submit Button */}
                <button type="button" onClick={handleSubmit} className="btn btn-primary btn-md">
                  Edit Blog
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EditBlog;
