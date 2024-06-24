import { Avatar } from "./Avatar"
// import { useState } from "react";

export const AppBar = ({
    label,
    greetMessage,
    nameInitials,
}) =>{

    // const [clicked, setClicked] = useState(false);

    return <div className="flex justify-between shadow-md h-14 p-3">
            <div className="text-lg">
                {label}
            </div>
            <div className="flex items-center">
                <div className="px-4">
                    {greetMessage}
                </div> 
                <Avatar nameInitials={nameInitials}/>
             
                  
            </div>
    </div>
}

//<button onClick={setClicked((prevClicked)=>!prevClicked)}></button>
//   {clicked? <button onClick={()=>{
//     navigate('/signin');
//     localStorage.clear();
//   }} className="absolute top-0 p-2 text-lg font-semibold bg-slate-300 w-24 text-center mt-4">
//             Log out
//           </button>: null}