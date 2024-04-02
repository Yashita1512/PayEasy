export const InputBox = ({inputlabel, placeholder, onChange})=>{
    return <div>
        <div className="font-bold text-sm py-3">
            {inputlabel}
        </div>
        <input onChange= {onChange} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200"></input>
    </div>
}