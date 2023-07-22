import ValueCard from "./ValueCard"

export default function Values() {
    return (
        <div className="values">
            <ValueCard props={{title: "Honesty", description: "Good programming work takes honesty between the stakeholder and the worker. Working with me means receiving continous honest feedback during your project."}}/>
            <ValueCard props={{title: "Professionalism", description: "A professional attitude towards the company, coworkers and mission is, in my opinion, essential to enjoy our collaboration."}}/>
            <ValueCard props={{title: "Curiosity", description: "Curiosity is the value that, I believe, is the most important in the tech world. It is what drives me towards good work."}}/>
            <ValueCard props={{title: "Passion", description: "Whether it is a desire to make a specific industry better or simply to produce clean and useful work, passion is what makes people do great things. Working with me means working with someone who is passionate about quality applications."}}/>
        </div>
    )
};