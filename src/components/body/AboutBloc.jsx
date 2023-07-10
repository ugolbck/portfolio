import { forwardRef } from "react"

const AboutBloc = forwardRef((props, ref) => {
    return (
        <section ref={ref}>
            <span>About me...</span>
        </section>
    );
});

export default AboutBloc;