import { BsBoxArrowUpRight } from 'react-icons/bs'
import { IconContext } from "react-icons";

export default function ExperienceCard({props}) {
    return (
        <div className="experience-card about-card">
            <div className="experience-card-header">
                <div className="experience-card-header-left">
                    <h3>{props.job_title}</h3>
                    <IconContext.Provider value={{ size: "0.7rem", style: { verticalAlign: 'baseline' } }}>
                        <a >{props.company} <BsBoxArrowUpRight  className="company-arrow"/></a>
                    </IconContext.Provider>
                    <h5><i>{props.job_type}</i></h5>
                </div>
                <div className="experience-card-header-right">
                    <span><i>{props.start_date}</i></span>
                    <span><i>{props.end_date}</i></span>
                </div>
            </div>
            <div className="experience-card-body">
                {props.description.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
            </div>
        </div>
    )
}