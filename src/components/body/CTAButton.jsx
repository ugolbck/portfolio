import { Link } from 'react-router-dom';

export default function CTAButton() {
    return (
        <>
            <Link to="https://www.malt.fr/profile/ugoloobuyck">
                <button className="cta-main-button">Hire Me</button>
            </Link>
        </>
    )
}