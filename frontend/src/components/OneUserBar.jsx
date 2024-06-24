import { Avatar } from "./Avatar"
import { BottomButton } from "./BottomButton"
import {useNavigate} from "react-router-dom"

export const OneUserBar = ({
    user,
    showButton
}) => {
    const navigate = useNavigate()
    return <div className="flex items-center justify-between">
        <div className="flex items-center">
            <Avatar firstNameInitial={user.firstName[0].toUpperCase()}/> 
            <div className="ml-4">
                {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
            </div>
        </div>
        {showButton && <BottomButton onClick={()=>navigate("/sendmoney/"+ user._id+ "/"+user.firstName)} label={"Send Money"}/> }
    </div>
}