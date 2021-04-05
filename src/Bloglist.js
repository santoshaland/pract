import { Link } from "react-router-dom";

const Bloglist = ({blogs,title,handleDelete}) => {

    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
        { blogs.map(blog=>(
            <div className="blog-preview" key={blog.id}>
                 <Link to={`/blog/${blog.id}`}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                 </Link>
                  <button onClick={()=>{ handleDelete(blog.id)}}>Remove Blog</button>
            </div>
        ))}       
    </div>
     );
}
 
export default Bloglist;