import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import FetchingItems from "../components/FetchingItems"
import LoadingSpinner from "../components/LoadingSpinner"
import { useSelector } from "react-redux"


function App() {
  const fetching=useSelector((store)=> store.fetchStatus)
  return (
    <>
   <body>
  
    <Header/>
    {fetching.currentlyFetching ?   <LoadingSpinner/> : <Outlet/>}
   < FetchingItems/>
   
    <Footer/>
   
</body>
    </>
  )
}

export default App
