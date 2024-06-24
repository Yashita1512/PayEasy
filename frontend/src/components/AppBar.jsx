import { Avatar } from "./Avatar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppBar = ({
    label,
    greetMessage,
    nameInitials,
}) => {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="sticky top-0 z-50 bg-white border-b-2 px-8 py-2">
            <div className="flex justify-between items-center">
                <div className="text-lg">
                    {label}
                </div>
                <div className="flex items-center relative">
                    <div className="px-4">
                        {greetMessage}
                    </div> 
                    <div onClick={() => setClicked(prevClicked => !prevClicked)}>
                        <Avatar nameInitials={nameInitials} />
                    </div>
                </div>
            </div>
            {clicked && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 p-2 text-lg font-semibold bg-slate-300 w-24 text-center">
                    <button
                        onClick={() => {
                            navigate('/signin');
                            localStorage.clear();
                        }}
                        className="w-full"
                    >
                        Log out
                    </button>
                </div>
            )}
        </div>
    );
};
