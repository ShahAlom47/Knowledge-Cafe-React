

import { useEffect, useState } from 'react'
import './App.css'
import BlogCardContainer from './Component/BlogCardContainer'
import BookmarkContaine from './Component/BookmarkContaine'
import Header from './Component/header'
import { array } from 'prop-types'


function App() {

  function getLdata() {
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

  // read time funtionalty
  const [readTime, setReadtime] = useState(0)
  const [timeArr, setTimeArr] = useState([])

  const readTimeHandel = (reading_time, id) => {

    const xx = timeArr.some(item => item === id)

    if (xx === false) {
      setReadtime(readTime + reading_time);
      setTimeArr([...timeArr, id]);
    }
    else {
      setReadtime(readTime);
    }

  }


  return (
    <>
      <Header></Header>
      <hr />
      <div className=' my-8 flex lg:flex-row flex-col'>
        <div className=' lg:w-8/12'>
          <BlogCardContainer bookMarkHandel={bookMarkHandel} readTimeHandel={readTimeHandel}  ></BlogCardContainer>
        </div>
        <div className='flex-1 mx-3 border-4 rounded-xl'>
          <BookmarkContaine bookData={bookData} readTime={readTime}></BookmarkContaine>
        </div>

      </div>

    </>
  )

}

export default App

