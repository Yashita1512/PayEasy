export const Avatar = ({
    nameInitials,
    logOut
})=>{
    return <div className=" bg-gray-400 rounded-full h-12 w-12 flex justify-center">
    <button  title="Log Out" onClick={logOut}>{nameInitials}</button>
</div>
}