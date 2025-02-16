import { useEffect, useState } from "react"
import {AppBar} from "../components/AppBar"
import { BalanceComponent } from "../components/BalanceComponent"
import { Users } from "../components/Users"
import axios from "axios"

export const Dashboard=()=>{
    const BACKEND_URL = "https://pay-easy-backend.vercel.app"
    const [balance, setBalance] = useState(0)
    const [nameInitials, setNameInitials] = useState("");

    useEffect(()=>{
        axios.get(BACKEND_URL + "/account/balance", {
            headers:{
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response=>setBalance(response.data.balance))
        setNameInitials(localStorage.getItem("userName").toUpperCase())
    },[])

    
    return <div>
        <AppBar label={"PayEasy App"} greetMessage={"Hello"} nameInitials={nameInitials}/>
        <div className="m-8 md:mx-48 md:my-8">
            <BalanceComponent balance={balance}/>
            <Users/>
            <div className="flex justify-end pt-10">
        </div>
        </div> 
    </div>
}