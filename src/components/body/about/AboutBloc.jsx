import { forwardRef } from "react"
import photo from "../../../photo.jpeg"
import AboutCards from "./AboutCards";

const AboutBloc = forwardRef((props, ref) => {
    return (
        <section className="about-bloc" ref={ref}>
            <div className="about-header">
                <img src={photo} className="profile-pic"></img>
                <div className="profile-desc">
                    <p>Hi there, my name is Ugo and I am a passionate <b>Python, Natural Language Processing and Machine Learning freelance programmer</b>.</p>
                    <p>I will build <b>SaaS APIs, deployment processes or any ML-related task</b> for your company, it’s gonna be nice mate!</p>
                    <p>Feel free to look at my experience at different tech companies and technical qualifications belows. For more information, contact me at <i>ugo.loobuyck@gmail.com</i></p>
                </div>
            </div>
            <div className="sep-line"></div>
            <AboutCards />
        </section>
    );
});

export default AboutBloc;