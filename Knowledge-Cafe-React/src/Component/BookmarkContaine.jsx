import PrintBookM from "./PrintBookM";
import PropTypes from 'prop-types';
const BookmarkContaine = ({bookData}) => {
   
    return (
        <div>
            <div className="readTimeContainer p-3 rounded-lg  bg-slate-200 mb-3">
                <p className="text-2xl text-center font-bold text-blue-600">Spent time on read <span>{ }</span>Min</p>
            </div>
            <div className="listContainer p-5 rounded-xl bg-slate-200">
                <h1 className="mb-4 text-2xl font-bold">Bookmarked Blogs :{bookData.length} <span></span></h1>

                <div>
                    {
                     bookData.map((item,index)=> <PrintBookM key={index} data={item} > </PrintBookM>)
                    }
                  
                </div>
            </div>

        </div>
    );
};
BookmarkContaine.propTypes={
    bookData:PropTypes.object.isRequired

}
export default BookmarkContaine;