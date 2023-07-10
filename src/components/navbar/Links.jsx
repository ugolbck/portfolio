import scrollDownTo from "../scrollDownTo"

export default function NavLinks({ mySectionRefList }) {
    return (
        <div className="nav-links">
            <p>Home</p>
            <a href="#" onClick={() => scrollDownTo(mySectionRefList[0])}>About</a>
            <p>Contact</p>
        </div>
    )
}