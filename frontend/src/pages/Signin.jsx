import { Heading } from "../components/Heading";
import {SubHeading} from "../components/SubHeading"
import {InputBox} from "../components/InputBox"
import { BottomButton } from "../components/BottomButton";
import {BottomWarning} from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const Signin = ()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
    
        <div className="flex flex-col justify-center">
            <div className="bg-white rounded-lg w-80 px-5 py-4">
                <Heading label={"Sign in"}/>
                <SubHeading action={"Enter your credentials to access your account"}/>
                <InputBox onChange= {e=>{setUsername(e.target.value)}} inputlabel={"Email"} placeholder={"John@gmail.com"}/>
                <InputBox onChange= {e=>{setPassword(e.target.value)}} inputlabel={"Password"}/>
                <BottomButton label={"Sign in"} onClick={async()=>{
                    const response = await axios.post("https://pay-easy.vercel.app/user/signin",
                    {
                        username,
                        password
                    })
                        localStorage.setItem("token", response.data.token)
                        localStorage.setItem("userId", response.data.signedInUserId);
                        setTimeout(() => {
                            navigate("/dashboard");
                        }, 1000);
                    }
                }/>
                <BottomWarning warning ={"Don't have an account?"} buttonText={"Sign Up"} link={"/signup"}/>
            </div>
        </div>
    </div>
}