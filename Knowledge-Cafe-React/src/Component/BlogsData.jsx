import { useEffect, useState } from "react";
import PrintBlogs from "./PrintBlogs";
import PropTypes from 'prop-types';

const BlogsData = ({bookMarkHandel}) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`blogData.json`)
            .then(res => res.json())
            .then(data => setBlogs(data))


    }, [])

    return (
        <div className="  space-y-4">
            {
                blogs.map(blog =>  <PrintBlogs key={blog.id} blog={blog} bookMarkHandel={bookMarkHandel} ></PrintBlogs> )
            }



        </div>
    );
};

BlogsData.propTypes={
    bookMarkHandel:PropTypes.func.isRequired

}
export default BlogsData;