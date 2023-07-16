import HomeButton from './TopLeftName';
import NavLinks from './Links';
import Available from './Available';
import bvb from '../../bvb.png';

export default function NavBar({ sectionRefList }) {
    return (
        <div className="nav-bar">
            <img src={bvb} alt="logo" className="logo-top-left"/>
            <HomeButton />
            <div className='nav-bar-right-items'>
                <Available />
                <NavLinks mySectionRefList={sectionRefList}/>
            </div>
        </div>
    )
}