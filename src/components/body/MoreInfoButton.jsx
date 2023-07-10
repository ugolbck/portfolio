import scrollDownTo from "../scrollDownTo"

export default function MoreInfoButton({ sectionRefList }) {
    return (
        <>
            <button onClick={() => scrollDownTo(sectionRefList[0])} className="cta-more-info-button">More Info</button>
        </>
    )
}