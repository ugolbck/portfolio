import { Link } from 'react-router-dom';

export default function MoreInfoButton({ sectionRefList }) {
    return (
        <>
            <Link to={"/"} className="cta-more-info-button">More Info</Link>
        </>
    )
}