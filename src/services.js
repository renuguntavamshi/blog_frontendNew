import axios from "axios"
const baseURL="https://blog-backendnew-1.onrender.com"
export const LogintoDashboard=(body)=>{
let result=axios.post(`${baseURL}/login`,body) 
return result;
}

export const RegisterUser=(body)=>{
let result=axios.post(`${baseURL}/signup`,body) 
return result;
}

export const AddBlogData=(formData)=>{
    let result=axios.post(`${baseURL}/blog`,formData)
    return result;
}
export const GetAllBlogData=()=>{
    let result=axios.get(`${baseURL}/blog`)
    return result;
}

export const DeleteBlogData=(id)=>{
    let result =axios.delete(`${baseURL}/blog/${id}`)
    return result
}

// export const validateToken=(headers)=>{
// axios.get()
// }



