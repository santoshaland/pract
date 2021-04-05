import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";
import useFetch  from "./useFetch";

const Home = () => {

    // const handleDelete=(id)=>{
    //     const myBlog=blogs.filter(blog=> id !== blog.id);
    //     setBlogs(myBlog);
    // }

    const {data:blogs,isPending,error}= useFetch('http://localhost:8000/blogs');
  


    return ( 
        <div className="home">
          { error && <div>{error}</div>}
          { isPending && <div>Loading....</div>}
          { blogs && <Bloglist blogs={blogs} title="All blogs !! " />}
          {/* <Bloglist blogs={blogs.filter(blog=> blog.author === "mario")} title="All blogs !! " /> */}
        </div>
     );
}
 
export default Home;