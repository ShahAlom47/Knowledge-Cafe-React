

import { useState } from 'react'
import './App.css'
import BlogCardContainer from './Component/BlogCardContainer'
import BookmarkContaine from './Component/BookmarkContaine'
import Header from './Component/header'

function App() {


  const [bookData, setBookData] = useState([])
  const bookMarkHandel = (blog) => {
setBookData([...bookData,blog])
    const dataSearch = bookData.some(item => item.id === blog.id)

    if (dataSearch) {
      const removeList = bookData.filter(item => item.id !== blog.id)
      setBookData(removeList)
    }
    else {
      
      setBookData([...bookData,blog])

    }

  }

  console.log(bookData);
  return (
    <>
      <Header></Header>
      <hr />
      <div className=' my-8 flex lg:flex-row flex-col'>
        <div className=' lg:w-8/12'>
          <BlogCardContainer bookMarkHandel={bookMarkHandel} ></BlogCardContainer>
        </div>
        <div className='flex-1 mx-3 border-4 rounded-xl'>
          <BookmarkContaine bookData={bookData}></BookmarkContaine>
        </div>

      </div>

    </>
  )
}

export default App
