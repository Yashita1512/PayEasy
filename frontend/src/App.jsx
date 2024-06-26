import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Suspense } from "react"
import {Home} from "./pages/Home"
import {Signup} from "./pages/Signup"
import {Signin} from "./pages/Signin"
import {Dashboard} from "./pages/Dashboard"
import {SendMoney} from "./pages/SendMoney"

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Suspense fallback={"Loading..."}><Home/></Suspense>}/>
        <Route path ="/signup" element={<Signup/>}/>
        <Route path ="/signin" element={<Signin/>}/>
        <Route path ="/dashboard" element={<Dashboard/>}/>
        <Route path ="/sendmoney/:id/:name" element={<SendMoney/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
