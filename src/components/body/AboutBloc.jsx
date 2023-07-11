import { forwardRef } from "react"

const AboutBloc = forwardRef((props, ref) => {
    return (
        <section className="about-bloc" ref={ref}>
            <span>About me...</span>
        </section>
    );
});

export default AboutBloc;