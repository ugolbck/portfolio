
export default function ValueCard({props}) {
    return (
        <div className="value-card">
            <span className="value-title">{props.title}</span>
            <span className="value-description"><i>{props.description}</i></span>
        </div>
    )
};