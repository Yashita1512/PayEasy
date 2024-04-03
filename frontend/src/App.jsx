import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Home} from "./pages/Home"
import {Signup} from "./pages/Signup"
import {Signin} from "./pages/Signin"
import {Dashboard} from "./pages/Dashboard"
import {SendMoney} from "./pages/SendMoney"

function App() {
  const basename = process.env.PUBLIC_URL || '/';

  return (
    <>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path ="/" element={<Home/>}/>
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
