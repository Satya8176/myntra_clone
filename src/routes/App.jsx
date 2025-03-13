import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FetchItem from "../components/fetchItem"




function App() {
 
  return (<>
   <Header></Header>
   <FetchItem></FetchItem>
    <Outlet/>
    <Footer></Footer>
    
    </>)
}

export default App
