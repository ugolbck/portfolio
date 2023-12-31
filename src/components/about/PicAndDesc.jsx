import photo from "../../photo.jpeg"
import Values from "./Values"

export default function PicAndDesc() {
    return (
        <div className="pic-and-desc">
            <span className="main-title">I'm Ugo.</span>
            <img src={photo} className="profile-pic" alt="Me as a young and innocent student"></img>
            <div className="about-desc">
                <span className="main-subtitle-about"><b>2016</b> was the year I started programming in <b>Python</b>. My goal was to leverage my <b>knowledge of linguistics</b> to <b>build useful apps</b>.</span>
                <span className="main-subtitle-about">In <b>2023</b>, and after more than three years of professionnal <b>Python</b>, <b>Machine Learning</b> and <b>Natural Language Processing</b> programming, I have decided to become a freelancer and provide backend programming services to companies who share my <b>core values</b>:</span>
            </div>
            <Values />
        </div>
    )
};