export const IconWrapper = ({children, setMenuOpen}) => {
    return <button onClick={()=>{setMenuOpen()}} type="button" >
{children}
    </button>
}