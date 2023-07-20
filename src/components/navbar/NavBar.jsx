import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavBar() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
    });
    }, []);

    return (
        <div className={`nav-bar ${scroll ? "nav-bar-border": ""}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}