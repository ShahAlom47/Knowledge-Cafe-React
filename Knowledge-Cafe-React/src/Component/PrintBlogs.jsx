
import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

const PrintBlogs = ({ blog, bookMarkHandel,bookData }) => {

    const { author, author_img, cover, hashtags, posted_date, reading_time, title } = blog;

   

    const [isMarkd, setMarkd] = useState(false)
  useEffect(()=>{
   
        const localData= localStorage.getItem('book') ?JSON.parse(localStorage.getItem('book')) : [];
        const bookMData = localData.some(item=>item.id===blog.id);
        console.log(bookMData);
        bookMData?setMarkd(true):setMarkd(false)
        

  },[blog])

    const bookMarkBtn = (blog) => {
        const xx= localStorage.getItem('book')
        const localData= xx ?JSON.parse(localStorage.getItem('book')) : [];
        const bookMData = localData.some(item=>item.id===blog.id);

        if(bookMData){
            const updateData = localData.filter(item => item.id !== blog.id)
            localStorage.setItem('book',JSON.stringify(updateData))
            setMarkd(false);

        }
        else{
            localData.push(blog)
            localStorage.setItem('book', JSON.stringify(localData));
            setMarkd(true);
           
           
         
        }
    }

    // ==================


    
    // ==================
  

    return (
        <div>
            <div className="card bg-base-100 shadow-xl px-10">

                <img
                    // src={cover}
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
                            <button onClick={() => { bookMarkBtn(blog); bookMarkHandel(blog); }} className={isMarkd ? 'text-xl btn btn-link bg-green-400' : 'text-xl btn btn-link bg-none'}><CiBookmark /></button>

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