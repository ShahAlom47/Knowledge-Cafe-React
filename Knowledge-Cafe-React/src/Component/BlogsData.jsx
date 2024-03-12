import { useEffect, useState } from "react";
import PrintBlogs from "./PrintBlogs";

const BlogsData = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`blogData.json`)
            .then(res => res.json())
            .then(data => setBlogs(data))


    }, [])

    return (
        <div className=" w-8/12 space-y-4">
            {
                blogs.map(blog =>  <PrintBlogs key={blog.id} blog={blog} ></PrintBlogs> )
            }



        </div>
    );
};

export default BlogsData;