import { useState} from "react";
import { Avatar } from "../components/Avatar"
import { useParams,  useNavigate } from "react-router-dom";
import axios from "axios"

export const SendMoney=()=>{
    const {id, name} = useParams();
    const [amount, setAmount]=useState(0);
    const [transferSuccess, setTransferSuccess] = useState(false)
    const navigate = useNavigate();
    const BACKEND_URL = "http://localhost:3000";

    return <div className="flex justify-center items-center bg-slate-100 h-screen">
        <div className="bg-white p-6">
            <div className="mb-12 text-center text-2xl font-semibold">
                Send Money
            </div>
            <div className="flex items-center">
                <Avatar firstNameInitial={name[0]}/> 
                <div className="ml-4">
                    {name}
                </div>
            </div>
            <div className="text-sm text-blue-800">
                Amount (in Rs.)
            </div>
            <div>
                <input onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount" className="border border-slate-200 rounded w-80 pl-2 mt-2"/>
            </div>
            <button onClick={async()=>{
                await axios.post(BACKEND_URL + "/account/transfer",{
                    to: id,
                    amount
                }, {
                    headers:{
                        Authorization : "Bearer " + localStorage.getItem("token")
                    }
                })
                setTransferSuccess(true)
                setTimeout(() => {
            navigate("/dashboard");
        }, 2000);
            }} type="button" className="mt-4 w-80 text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-6 py-2.5 me-2 mb-2">Initialize Transfer
            </button>
            {transferSuccess && <div className="text-center"> ✅ Money Transferred</div>}
        </div>
    </div>
}