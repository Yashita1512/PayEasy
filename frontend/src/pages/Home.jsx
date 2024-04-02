import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { BottomButton } from "../components/BottomButton"
import { BottomWarning } from "../components/BottomWarning"
import { useNavigate } from "react-router-dom"


export const Home = ()=>{

    const navigate = useNavigate();

    return <>
    <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white rounded-lg w-80 px-5 py-4">
                <SubHeading action = {"Hey, there!"}/>
                <div className="pb-5">
                <Heading label = "Welcome to PayEasy"/>
                </div>
                
                <SubHeading action={"Do not have an account? Create one now for easy payments"}/>
                <BottomButton label={"Sign Up"} onClick={async ()=>{
                    navigate("/signup")
                }}/>
                <BottomWarning warning ={"Already have an account?"} buttonText={"Sign in"} link={"/signin"}/>
            </div>
        </div>
    </div>
    </>
}