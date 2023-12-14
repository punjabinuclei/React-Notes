import React from "react";
import ReactDOM from "react-dom/client";



const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwOjKV9eQtWi2Nb6qVb3TBw5saiUNZTIxexDGbGySU_URpihw5QGy2YsjxlbkFyx-Z5w" alt="SwiggyLogo" />
                </div>
                <div>
                    <ul className="nav-items">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </>
    );
}


export default Navbar;