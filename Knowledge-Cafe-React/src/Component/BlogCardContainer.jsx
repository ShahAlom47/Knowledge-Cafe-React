import BlogsData from "./BlogsData";
import PropTypes from 'prop-types';
const BlogCardContainer = ({bookMarkHandel}) => {
    
    return (
        <div>
            <BlogsData bookMarkHandel={bookMarkHandel}></BlogsData>
            
        </div>
    );
};

BlogCardContainer.propTypes={
    bookMarkHandel:PropTypes.func.isRequired

}
export default BlogCardContainer;