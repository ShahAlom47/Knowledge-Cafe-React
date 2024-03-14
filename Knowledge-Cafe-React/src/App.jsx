

import { useEffect, useState } from 'react'
import './App.css'
import BlogCardContainer from './Component/BlogCardContainer'
import BookmarkContaine from './Component/BookmarkContaine'
import Header from './Component/header'


function App() {

  function getLdata(){
    const getData = localStorage.getItem('mark')

    if (getData) {
      return JSON.parse(getData)
    }
    else {
      return []
    }

  }

  const [bookData, setBookData] = useState([])

  const bookMarkHandel = (blog) => {
    const localData = getLdata();


    let chackData = localData.some(data => data.id === blog.id)

    if (chackData) {

      let ll = localData.filter((word) => word.id !== blog.id)

      localStorage.setItem('mark', JSON.stringify(ll))
      setBookData(ll)

    }
    else {

      localData.push(blog)
      localStorage.setItem('mark', JSON.stringify(localData))
      setBookData(localData)
    }

  }
  useEffect(() => {
    setBookData(getLdata())

  }, [])
  
  return (
    <>
      <Header></Header>
      <hr />
      <div className=' my-8 flex lg:flex-row flex-col'>
        <div className=' lg:w-8/12'>
          <BlogCardContainer bookMarkHandel={bookMarkHandel} bookData={bookData} ></BlogCardContainer>
        </div>
        <div className='flex-1 mx-3 border-4 rounded-xl'>
          <BookmarkContaine bookData={bookData}></BookmarkContaine>
        </div>

      </div>

    </>
  )
  
}

export default App

