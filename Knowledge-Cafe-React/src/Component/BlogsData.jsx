import { useEffect, useState } from "react";
import PrintBlogs from "./PrintBlogs";
import PropTypes from 'prop-types';

const BlogsData = ({bookMarkHandel,readTimeHandel}) => {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setErro]= useState(false)
    useEffect(() => {
        fetch(`blogData.json`)
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => {
                
                console.error(error);
                setErro(true)
            })
            .finally(() => {
                if (!error) {
                    setLoading(false);
                }
            });

    }, [])
    if(error){
        return(
        <div className=" space-y-4 flex justify-center" >
       <img src="https://cdn.pixabay.com/photo/2013/04/07/06/42/error-101407_1280.jpg" alt="" />

        </div>
        )
    }
    

    if(loading){
        return(
        <div className=" space-y-4 flex justify-center" >
          <span className="loading loading-spinner text-error text-center w-28 "></span>

        </div>
        )
    }
    return (
        <div className="  space-y-4">
            {
                blogs.map(blog =>  <PrintBlogs key={blog.id} blog={blog} bookMarkHandel={bookMarkHandel} readTimeHandel={readTimeHandel}  ></PrintBlogs> )
            }



        </div>
    );
};

BlogsData.propTypes={
    bookMarkHandel:PropTypes.func.isRequired,
    readTimeHandel: PropTypes.func.isRequired,

}
export default BlogsData;