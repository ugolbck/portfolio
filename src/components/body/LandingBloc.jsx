import MainBloc from "./MainBloc"
import NavBar from "../navbar/NavBar"

export default function LandingBloc() {
    return (
        <div className="landing-bloc">
            <NavBar/>
            <MainBloc/>
        </div>
    )
}