
import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';

const PrintBlogs = ({ blog, bookMarkHandel }) => {
    // const blogD = blog.blog


    // console.log(blog.id);

    const { author, author_img, id, cover, hashtags, posted_date, reading_time, title } = blog;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl px-10">

                <img
                    src={cover}
                    alt={'Cover Photo  ' + title}
                />

                <div className="card-body m-4">
                    <div className=" flex justify-between ">

                        <div className="flex  gap-3 items-center">
                            <img className="h-10" src={author_img} alt="" />
                            <div>
                                <h1 className="card-title" >{author}</h1>
                                <p>{posted_date}</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <p className="font-bold"><span>{reading_time}</span> min read </p>
                            <button onClick={() => bookMarkHandel(blog)} className="text-xl btn btn-link"><CiBookmark /></button>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold ">{title}</h1>

                    <p className="flex gap-4 text-lg text-gray-500 font-semibold">
                        {
                            hashtags.map((hash, indx) => <span key={indx}># {hash}</span>)
                        }
                    </p>
                    <button className="text-start underline text-lg font-semibold text-blue-600 btn btn-link text-start inline p-0">Mark as Read</button>

                </div>
            </div>


        </div>
    );
};


PrintBlogs.propTypes = {

    bookMarkHandel: PropTypes.func.isRequired,
    blog: PropTypes.object.isRequired
};
export default PrintBlogs;