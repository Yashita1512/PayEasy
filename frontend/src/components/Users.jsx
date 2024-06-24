import { useEffect, useState } from "react";
import { OneUserBar } from "./OneUserBar";
import axios from "axios"

export const Users = ()=>{
    const BACKEND_URL = "https://pay-easy.vercel.app";
    const [users, setUsers] = useState([]);
    const [searchFilter, setsearchFilter] = useState([]);

    const signedInUserId = localStorage.getItem("userId")

    useEffect(()=>{
        axios.get(BACKEND_URL + "/user/bulk?filter=" + searchFilter)
        .then(response=>{
            setUsers(response.data.user)
        })
    }, [searchFilter])
    return <div>
        <div className="font-medium mt-6">
            Users
        </div>
        <div >
            <input onChange={(e)=>{setsearchFilter(e.target.value)}} placeholder="Search Users" className="border w-full px-2 py-1 my-2 border-slate-20"/>
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