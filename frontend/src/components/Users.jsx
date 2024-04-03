import { useEffect, useState } from "react";
import { Avatar } from "./Avatar"
import {BottomButton} from "./BottomButton"
import { OneUserBar } from "./OneUserBar";
import axios from "axios"

export const Users = ()=>{
    const BACKEND_URL = "https://pay-easy.vercel.app";
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState([]);

    const signedInUserId = localStorage.getItem("userId")

    useEffect(()=>{
        axios.get(BACKEND_URL + "/user/bulk?filter=" + filter)
        .then(response=>{
            setUsers(response.data.user)
        })
    }, [filter])
    return <div>
        <div className="font-medium mt-6">
            Users
        </div>
        <div >
            <input onChange={(e)=>{setFilter(e.target.value)}} placeholder="Search Users" className="border w-full px-2 py-1 my-2 border-slate-20"/>
        </div>
        <div className="mt-4 flex flex-col gap-3">
        {users
            .filter(user => user._id !== signedInUserId)
            .map(user=>(
            <OneUserBar key = {user._id} showButton = {true} user={user}/>
        ))}
        </div>
        </div>
}