import ExperienceCard from "./ExperienceCard"

export default function ExperienceCards() {
    return (
        <div className="experience-cards">
            <ExperienceCard props={{
                job_title: "Python & ML programmer",
                company: "SEOQuantum",
                job_type: "Full-Time / Freelance",
                company_link: "/about",
                start_date: "Feb 2023",
                end_date: "Present",
                description: [
                    "Being the only back-end engineer in the company, I am responsible for the development and maintenance of the company's web applications.",
                    "I am also responsible for the development of the company's machine learning and NLP models.",
                    "SEOQuantum is an SEO company that leverages machine learning to help its clients rank better on Google, so I had to learn everything about this very niche industry, as well as prompting generative AIs efficiently.",
                    "Daily tasks include: API development, database management, web scraping, and DevOps."
                ],
                skills: [
                    "Python",
                    "Django",
                    "Django REST Framework",
                    "PostgreSQL",
                    "Docker"
                ]
            }}/>
            <ExperienceCard props={{
                job_title: "Python & NLP programmer",
                company: "EarlyTracks",
                job_type: "Full-Time",
                company_link: "/about",
                start_date: "Aug 2020",
                end_date: "Sept 2022",
                description: [
                    "Starting off as a Python backend programmer, I quickly moved to the Natural Language Processing team in order to fully leverage my newly acquired master's degree in NLP.",
                    "For two years, I was responsible for the development and maintenance of the company's NLP models, Python libraries and data annotation campaigns.",
                    "EarlyTracks is a tech scale-up that works closely with hospitals, meaning that additional responsibilities included careful handling of sensitive data and compliance with GDPR regulations.",
                ],
                skills: [
                    "Python",
                    "AWS",
                    "Docker",
                    "PyTorch",
                    "Flask",
                    "Django",
                    "MongoDB",
                    "Redis",
                    "Celery",
                    "Elasticsearch"
                ]
            }}/>
            <ExperienceCard props={{
                job_title: "Python programmer",
                company: "Covage Networks",
                job_type: "Apprenticeship",
                company_link: "/about",
                start_date: "Sept 2017",
                end_date: "Aug 2018",
                description: [
                    "As an apprentice, I was responsible for the development and maintenance of a some custom Python scripts and web applications.",
                    "My mission was to automate the monitoring of the company's country-wide network, constituted of thousands of optic fiber devices, in real time.",
                    "This opportunity allowed me to learn a lot about the telecom industry, as well as working in a team of experienced engineers."
                ],
                skills: [
                    "Python",
                    "jQuery",
                    "HTML",
                    "CSS",
                    "SQL",
                    "Networks"
                ]
            }}/>
        </div>
    )
}