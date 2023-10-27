import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <div>
            <button >
            <Link to='/'>Home</Link>
            </button>
            <button>
            <Link to='/contact'>Contact</Link>
            </button>
        </div>
    )
}