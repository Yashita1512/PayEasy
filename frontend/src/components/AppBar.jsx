import { Avatar } from "./Avatar"

export const AppBar = ({
    label,
    greetMessage,
    firstNameInitial
}) =>{
    return <div className="flex justify-between shadow-md h-14 p-3">
            <div className="text-lg">
                {label}
            </div>
            <div className="flex items-center">
                <div className="px-4">
                    {greetMessage}
                </div> 
                <Avatar firstNameInitial={"Y"}/>
            </div>
    </div>
}