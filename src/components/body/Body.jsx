import LandingBloc from "./LandingBloc"
import AboutBloc from "./AboutBloc"

export default function Body() {

    return (
        <div className='body'>
            <div className="landing-bloc navbar-height">
                <LandingBloc />
            </div>
            <div className="about-bloc">
                <AboutBloc />
            </div>
        </div>
    )
}