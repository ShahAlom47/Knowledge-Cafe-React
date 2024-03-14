import BlogsData from "./BlogsData";
import PropTypes from 'prop-types';
const BlogCardContainer = ({bookMarkHandel, readTimeHandel }) => {
    
    return (
        <div>
            <BlogsData bookMarkHandel={bookMarkHandel} readTimeHandel={readTimeHandel} ></BlogsData>
            
        </div>
    );
};

BlogCardContainer.propTypes={
    bookMarkHandel:PropTypes.func.isRequired,
    readTimeHandel:PropTypes.func.isRequired,

}
export default BlogCardContainer;