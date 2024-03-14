import BlogsData from "./BlogsData";
import PropTypes from 'prop-types';
const BlogCardContainer = ({bookMarkHandel,bookData}) => {
    
    return (
        <div>
            <BlogsData bookMarkHandel={bookMarkHandel} bookData={bookData}></BlogsData>
            
        </div>
    );
};

BlogCardContainer.propTypes={
    bookMarkHandel:PropTypes.func.isRequired

}
export default BlogCardContainer;