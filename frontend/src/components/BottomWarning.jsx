import {Link} from "react-router-dom";

export const BottomWarning =({warning, buttonText, link} )=>{
    return <div className="text-sm text-slate-950 text-center">
        {warning} 
        <Link className="pointer underline cursor:pointer pl-1" to={link}>
            {buttonText}
        </Link>
    </div>
}