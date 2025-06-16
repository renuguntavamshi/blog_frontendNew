import AdminStyles from './admin.module.css';
import axios from 'axios';
import { useState, useRef } from 'react';
import { AddBlogData } from '../services';
function AddBlog() {
  const fileInputRef = useRef(); // reference to clear the file input

  const [img, setImg] = useState(null);
  const [previewImg, setPreviewImg] = useState(null); // For showing preview
  const [blog, setBlog] = useState({
    blogtitle: "",
    description: "",
    publishedBy: "",
    blog_category: ""
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImg(file);
    if (file) {
      setPreviewImg(URL.createObjectURL(file)); // preview URL
    }
  };

  const removeImage = () => {
    setImg(null);
    setPreviewImg(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // clear the file input
    }
  };

  const handleSubmit = async(e) => {
  try{  
    e.preventDefault();
    if (!img) return;

    let formdata = new FormData();
    formdata.append("image", img);
    formdata.append("blogtitle", blog.blogtitle);
    formdata.append("description", blog.description);
    formdata.append("publishedBy", blog.publishedBy);
    formdata.append("blog_category", blog.blog_category);
 let res= await AddBlogData(formdata)
 console.log(res)
if(res.data){
              alert("Image Posted successfully");
        setImg(null);
        setPreviewImg(null);
        setBlog({ blogtitle: "", description: "", publishedBy: "", blog_category: "" });
        if (fileInputRef.current) {
          fileInputRef.current.value = null; // clear after submission
        }
      }
      }
      catch(err){
        console.error(err)
      }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-11 col-md-6 my-2">
          <div className={`${AdminStyles.formBorder} ${AdminStyles.formPadding}`}>
            <div className="row gx-3">
              <div className="col-sm-12 mb-3">
                <input
                  type="file"
                  className="form-control"
                  onChange={handleImageChange}
                  ref={fileInputRef} // apply ref
                />
                {previewImg && (
                  <div style={{ position: 'relative', marginTop: '10px' }}>
                    <img
                      src={previewImg}
                      alt="Preview"
                      style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                    <button
                      onClick={removeImage}
                      style={{
                        position: 'absolute',
                        top: '5px',
                        right: '5px',
                        background: 'rgba(0,0,0,0.6)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        fontSize: '16px',
                        cursor: 'pointer'
                      }}
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>

              <div className="col-sm-12 col-md-6 mb-3">
                <input
                  type="text"
                  name="blog_category"
                  value={blog.blog_category}
                  className="form-control"
                  placeholder="Blog category"
                  onChange={e => setBlog(prev => ({ ...prev, blog_category: e.target.value }))}
                />
              </div>

              <div className="col-sm-12 col-md-6 mb-3">
                <input
                  type="text"
                  name="publishedBy"
                  value={blog.publishedBy}
                  className="form-control"
                  placeholder="Published By"
                  onChange={e => setBlog(prev => ({ ...prev, publishedBy: e.target.value }))}
                />
              </div>

              <div className="col-sm-12 mb-3">
                <input
                  type="text"
                  name="blogtitle"
                  value={blog.blogtitle}
                  className="form-control"
                  placeholder="Blog title"
                  onChange={e => setBlog(prev => ({ ...prev, blogtitle: e.target.value }))}
                />
              </div>

              <div className="col-sm-12 mb-3">
                <textarea
                  rows="6"
                  name="description"
                  value={blog.description}
                  className="form-control"
                  placeholder="Description"
                  onChange={e => setBlog(prev => ({ ...prev, description: e.target.value }))}
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary btn-md"
              >
                Add Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
