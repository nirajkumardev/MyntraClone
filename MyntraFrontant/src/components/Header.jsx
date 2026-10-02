import { BsPersonFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header=()=>{
    // for bag count show in  value bag item
    const bagItem=useSelector((store)=>store.Bag);

  return (
    <>
    <header>
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src="../images/myntra_logo.webp" alt="Myntra Home"/></Link>
        </div>
        <nav className="nav_bar">
            <Link to="/">Men</Link>
            <Link to="/">Women</Link>
            <Link to="/">Kids</Link>
            <Link to="/">Home & Living</Link>
           <Link to="/">Beauty</Link>
            <Link to="/">Studio <sup>New</sup></Link>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
                <BsPersonFill />
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
                <FaHeart />
                <span className="action_name">Wishlist</span>
            </div>

            <Link to="/bag" className="action_container">
               
                <IoBagAdd />
            
                <span className="action_name">Bag</span>
            
                <span className="bag-item-count">{bagItem.length}</span>
              
            </Link>
        </div>
    </header>
    </>
  )
}

export default Header;