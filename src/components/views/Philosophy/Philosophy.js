import React, { Component } from 'react';
import PageHeader from '../../common/PageHeader/PageHeader';
import './Philosophy.css';

class About extends Component {
    render() {
        return (
            <div>
                <PageHeader title="Philosophy" />
                <div className="general">
                    <p>
                        My general code philosophy is to write code that is easy to read and easy to change. Even better
                        if it can be done quickly. Everything is nuanced, almost every pricipal has an exception at the
                        extremes.
                    </p>
                </div>
                <div className="principals-wrapper">
                    <div className="principals-panel">
                        <h2>Code Pricipals</h2>
                        <ul>
                            <li>
                                <h3>Prioritize Readability </h3>
                                <p>
                                    Ultimately we all want these projects to grow and to last for a while. That results
                                    in large code bases, often maintained by a few people. As someone who has had to
                                    jump aound large code bases, written by people who are no longer at the company,
                                    understanding a function in 3 seconds vs 30 seconds adds up quickly.
                                </p>
                            </li>
                            <li>
                                <h3>Use libraries when possible </h3>
                                <p>
                                    Nothing is worse than trying to maintain a bespoke solution to a solved problem.
                                    When we write code that has on open source solution, we are often just adding un
                                    needed complexity and tech debt. There are times when a custom solution is needed,
                                    but I need to be convinced it is worth the time and maintainence cost.
                                </p>
                            </li>
                            <li>
                                <h3>Go with popular over trendy </h3>
                                <p>
                                    When choosing technolgies I tend to lean on choosing the more popular solution.
                                    Often it is "better" but just as importantly it is maintainable. Once a technology
                                    hits a critical mass all kinds of benifits come with it. There are more people who
                                    know it, more people willing to update and maintain the open source project, more
                                    people to hire down the road with little onboarding.
                                </p>
                            </li>
                            <li>
                                <h3>Consistency is valuable</h3>
                                <p>
                                    This goes along with Readability, if there are consistent styles and patterns,
                                    maintainence becomes the job of a junior instead of a senior or staff engineer. I
                                    generally don't care what the style is, as long as it is consistent.
                                </p>
                            </li>
                            <li>
                                <h3>Keep it Simple Stupid</h3>
                                <p>
                                    Sometimes it is hard to recognize good code because it is so simple it feels
                                    obvious.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="principals-panel">
                        <h2>Management Pricipals</h2>
                        <ul>
                            <li>
                                <h3>Most people want to be good at their job</h3>
                                <p>I see the Engineering Manager's job as helping people accomplish this goal.</p>
                            </li>
                            <li>
                                <h3>Meetings should be in blocks</h3>
                                <p>
                                    There is a substantial amount of build up time when a developer is working on a
                                    story. Once the developer is taken out of that groove, they need to spend that time
                                    again. A day with 30 minutes of meetings followed by 30 minutes of coding might as
                                    well be a half day of meetings with the rest of the day off.
                                </p>
                            </li>
                            <li>
                                <h3>Meetings should have an objective</h3>
                                <p>
                                    Meetings should have a clear objective and should be ended when that objective is
                                    met. (github co pilot wrote that last sentence, clearly other people feel the same
                                    way). That is not to say all scheduled Scrum ceramony meetings are worthless, they
                                    just need a purpose worthy of recurring. I actually love daily standups because a
                                    surprisinge amount of collaboration can happen in a well run standup.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
