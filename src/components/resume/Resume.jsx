import React, { useState } from "react";
import "./Resume.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";

// Work Experience Data
const WorkExperience = [
    {
        id: 1,
        title: "UI/UX Design Intern",
        company: "Twisty Design",
        yearsActive: "June 2024 - July 2024",
        information: [
            "I honed my user interface design skills while also contributing to projects involving brand identity development, illustration, and content creation.",
        ],
    },
    {
        id: 2,
        title: "Web & Graphic Designer",
        company: "Adore Global",
        yearsActive: "July 2024 - Aug 2024",
        information: [
            "Contributed to Adore's mission by designing marketing posters, developing and maintaining their website, and exploring font development to enhance their visual communication and brand identity.",
        ],
    },
    {
        id: 3,
        title: "UI/UX Designer",
        company: "EazyByts Infotech",
        yearsActive: "Aug 2024 - Sep 2024",
        information: [
            "I worked on a variety of UI/UX design projects for diverse clients across multiple industries, focusing on user-centered solutions tailored to each client's specific needs.",
        ],
    },
    {
        id: 4,
        title: "Placement Coordinator",
        company: "World University Of Design",
        yearsActive: "October 2023 - Present",
        information: [
            "I am the placement coordinator of the UI/UX department at WUD, where I reach out to companies and build connections to gain more industry knowledge.",
        ],
    },
    {
        id: 5,
        title: "User Experience Designer Intern",
        company: "LNA INFRAPROJECTS PVT. LTD",
        yearsActive: "June 2025 - August 2025",
        information: [
            "Through my work, the organization benefited from a more refined and cohesive digital experience, with better usability standards and improved interface clarity. This helped strengthen their online presence and ensured that their platforms were aligned with modern UI/UX practices.",
        ],
    },
    {
        id: 6,
        title: "User Interface Designer Intern",
        company: "Maharishi Arvind Institute of Science & Managment",
        yearsActive: "December 2025 - January 2026",
        information: [
            " I worked closely with different departments to understand their requirements and translate them into effective digital solutions, ensuring the website aligned with the institution’s branding and communication goals. My presence added value by streamlining the website’s usability, making it more intuitive for users such as students and faculty, and strengthening the institute’s digital identity. The improvements I implemented helped create a more professional and cohesive online experience, supporting better engagement and accessibility.",
        ],
    },
    
    {
        id: 7,
        title: "UI/UX Deigner Intern",
        company: "KPMG",
        yearsActive: "May 2026 - August 2026",
        information: [
            "I worked closely with different departments to understand their requirements and translate them into effective digital solutions, ensuring the website aligned with the institution’s branding and communication goals. My presence added value by streamlining the website’s usability, making it more intuitive for users such as students and faculty, and strengthening the institute’s digital identity. The improvements I implemented helped create a more professional and cohesive online experience, supporting better engagement and accessibility.",
        ],
    },
];

// Education Data
const Education = [
    {
        id: 1,
        Course: "UI/UX & Digital Product Design",
        Institution: "World University Of Design, Sonepat",
        yearsActive: "July 2023 - Present",
        information: [
            "The World University of Design (WUD), situated in Sonepat, Haryana, is a premier institution specializing in design education.",
        ],
    },
    {
        id: 2,
        Course: "Secondary Education",
        Institution: "St. Wilfred's Sr. Sec. School, Jaipur",
        yearsActive: "2020 - 2022",
        information: [
            "St. Wilfred's Senior Secondary School, located in Mansarovar, Jaipur, focuses on providing high-quality education in a safe and inclusive environment.",
        ],
    },
    {
        id: 3,
        Course: "Primary Education",
        Institution: "St. Xavier's School, Nevta",
        yearsActive: "2007 - 2019",
        information: [
            "St. Xavier's School in Nevta, Jaipur, is a co-educational institution emphasizing holistic education embedded in values and competence.",
        ],
    },
];

const Resume = () => {
    // ✅ Separate states for Work Experience and Education
    const [workTabIndex, setWorkTabIndex] = useState(0);
    const [eduTabIndex, setEduTabIndex] = useState(0);

    return (
        <section className="resume container section" id="resume">
            {/* Work Experience Section */}
            <h2 className="section__title">Work Experience</h2>
            <div className="resume__container">
                <Tabs
                    className="tabs"
                    selectedIndex={workTabIndex}
                    onSelect={(index) => setWorkTabIndex(index)}
                    selectedTabClassName="is-active"
                    selectedTabPanelClassName="is-active"
                >
                    <TabList className="tab__list">
                        {WorkExperience.map(({ id, company }) => (
                            <Tab className="tab" key={`company-${id}`}>
                                <Button>{company}</Button>
                            </Tab>
                        ))}
                    </TabList>

                    {WorkExperience.map(({ id, company, yearsActive, title, information }) => (
                        <TabPanel className="tab__panel" key={`panel-${id}`}>
                            <h2 className="tab__panel-title">
                                {title} @ {company}
                            </h2>
                            <p className="tab__panel-subtitle">{yearsActive}</p>
                            <ul className="tab__panel-list">
                                {information.map((info, index) => (
                                    <li key={`info-${index}`}>{info}</li>
                                ))}
                            </ul>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>

            {/* Education Section */}
            <h2 className="section__title education__title">Education</h2>
            <div className="resume__container">
                <Tabs
                    className="tabs"
                    selectedIndex={eduTabIndex}
                    onSelect={(index) => setEduTabIndex(index)}
                    selectedTabClassName="is-active"
                    selectedTabPanelClassName="is-active"
                >
                    <TabList className="tab__list">
                        {Education.map(({ id, Institution }) => (
                            <Tab className="tab education-tab" key={`education-${id}`}>
                                <Button>{Institution}</Button>
                            </Tab>
                        ))}
                    </TabList>

                    {Education.map(({ id, Course, Institution, yearsActive, information }) => (
                        <TabPanel className="tab__panel education-panel" key={`panel-edu-${id}`}>
                            <h2 className="tab__panel-title">{Course}</h2>
                            <h4 className="tab__panel-subtitle">{Institution}</h4>
                            <p className="tab__panel-years">{yearsActive}</p>
                            <ul className="tab__panel-list">
                                {information.map((info, index) => (
                                    <li key={`edu-info-${index}`}>{info}</li>
                                ))}
                            </ul>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default Resume;
