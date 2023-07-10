import CTAButton from "./CTAButton"
import MoreInfoButton from "./MoreInfoButton"

export default function Buttons({ sectionRefList }) {
    return (
        <div className="cta-buttons">
            <CTAButton />
            <MoreInfoButton sectionRefList={sectionRefList}/>
        </div>
    )
}