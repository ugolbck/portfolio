import PicAndDesc from "./body/about/PicAndDesc"
import ExpAndProj from "./body/about/ExpAndProj"
import Values from "./body/about/Values"

export default function About() {
    return (
        <div className="about-block">
            <PicAndDesc />
            <Values />
            <ExpAndProj />
        </div>
    )
};