

import './App.css'
import BlogCardContainer from './Component/BlogCardContainer'
import BookmarkContaine from './Component/BookmarkContaine'
import Header from './Component/header'

function App() {


  return (
    <>
      <Header></Header>
      <hr />
      <div className=' my-8'>

        <div>
          <BookmarkContaine></BookmarkContaine>
        </div>
        <div>
          <BlogCardContainer></BlogCardContainer>
        </div>
      </div>

    </>
  )
}

export default App
