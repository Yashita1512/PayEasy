export const BottomButton = ({label, onClick})=>{
    return <div className="py-4">
    <button onClick={onClick} type="button" className="w-full text-white hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 bg-stone-950">{label}</button>
    </div>
}