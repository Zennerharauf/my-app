import "../style/header.css";
import Link from "next/link";
function Header (){
    return(
        <div className="header">
            {/*left*/}
            <div>
                <h1 className="logo">ZARQ</h1>
            </div>
            {/*right*/}
            <div className="header-right-div">
                <ul className="header-links">
                    <li>
                        <Link className="nav-link" href={"#home"}>HOME</Link>
                    </li>
                    <li>
                        <Link className="nav-link"  href={"#about"}>ABOUT</Link> 
                    </li>
                    <li>
                        <Link className="nav-link"  href={"#skills"}>SKILLS</Link>
                    </li>
                    <li>
                        <Link className="nav-link"  href={"/"}>PROJECT</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header