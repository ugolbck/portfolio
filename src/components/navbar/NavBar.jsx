import HomeButton from './TopLeftName';
import NavLinks from './Links';
import Available from './Available';

export default function NavBar({ sectionRefList }) {
    return (
        <div className="nav-bar navbar-height">
            <HomeButton />
            <div className='nav-bar-right-items'>
                <Available />
                <NavLinks mySectionRefList={sectionRefList}/>
            </div>
        </div>
    )
}