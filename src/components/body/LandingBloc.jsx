import MainBloc from "./MainBloc"
import NavBar from "../navbar/NavBar"

export default function LandingBloc({ sectionRefList }) {
    return (
        <div className="landing-bloc">
            <NavBar sectionRefList={sectionRefList}/>
            <div className="main-bloc">
                <MainBloc sectionRefList={sectionRefList}/>
            </div>  
        </div>
    )
}