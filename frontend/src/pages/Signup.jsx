import { Heading } from "../components/Heading";
import {SubHeading} from "../components/SubHeading"
import {InputBox} from "../components/InputBox"
import { BottomButton } from "../components/BottomButton";
import {BottomWarning} from "../components/BottomWarning";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const Signup = ()=>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const BACKEND_URL = "https://pay-easy.vercel.app";

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white rounded-lg w-80 px-5 py-4">
                <Heading label={"Signup"}/>
                <SubHeading action={"Enter your information to create an account"}/>
                <InputBox onChange={e=>setFirstName(e.target.value)} inputlabel={"First Name"} placeholder={"John"}/>
                <InputBox onChange={e=>setLastName(e.target.value)} inputlabel={"Last Name"} placeholder={"Doe"}/>
                <InputBox onChange={e=>setUsername(e.target.value)} inputlabel={"Email"} placeholder={"John@gmail.com"}/>
                <InputBox onChange={e=>setPassword(e.target.value)} inputlabel={"Password"}/>
                <BottomButton label={"Sign Up"} onClick={async ()=>{
                    const response = await axios.post(BACKEND_URL+"/user/signup",
                    {
                        firstName,
                        lastName,
                        username,
                        password
                    })
                    localStorage.setItem("token",response.data.token)
                    localStorage.setItem("userId", response.data.signedInUserId);
                    setTimeout(() => {
                            navigate("/dashboard");
                        }, 1000);
                }}/>
                <BottomWarning warning ={"Already have an account?"} buttonText={"Sign in"} link={"/signin"}/>
            </div>
        </div>
    </div>
}