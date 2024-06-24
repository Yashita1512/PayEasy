import { Avatar } from "./Avatar"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppBar = ({
    label,
    greetMessage,
    nameInitials,
}) =>{

    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    return (
    <div className="relative flex justify-between shadow-md h-14 p-3">
        <div className="text-lg">
            {label}
        </div>
        <div className="flex items-center">
            <div className="px-4">
                {greetMessage}
            </div> 
            <div onClick={() => setClicked(prevClicked => !prevClicked)}>
                <Avatar nameInitials={nameInitials} />
            </div>
            {clicked && <button onClick={()=>{
                    navigate('/signin');
                    localStorage.clear();
                }} className="absolute top-0 p-2 text-lg font-semibold bg-slate-300 w-24 text-center mt-4 left-1/2 transform -translate-x-1/2">
                            Log out
                        </button>}
        </div>
    </div>
)}

