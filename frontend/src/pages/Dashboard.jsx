import { useEffect, useState } from "react"
import {AppBar} from "../components/AppBar"
import { BalanceComponent } from "../components/BalanceComponent"
import { Users } from "../components/Users"
import axios from "axios"
import { BottomButton } from "../components/BottomButton"
import { useNavigate } from "react-router-dom"

export const Dashboard=()=>{
    const BACKEND_URL = "https://pay-easy.vercel.app"
    const [balance, setBalance] = useState(0)
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(BACKEND_URL + "/account/balance", {
            headers:{
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response=>setBalance(response.data.balance))
    },[])
    return <div>
        <AppBar label={"PayEasy App"} greetMessage={"Hello"} firstNameInitial={"Y"}/>
        <div className="m-8">
            <BalanceComponent balance={balance}/>
            <Users userName={"Harkirat Singh"}/>
            <div className="flex justify-end pt-10">
        <BottomButton label={"Logout"} onClick={async()=>{
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            navigate("/")
        }}/>
        </div>
        </div> 
    </div>
}