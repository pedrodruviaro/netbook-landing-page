import React from "react";
import { AchievementCard, Container } from "./styles.jsx";
import { SectionHeader } from "../../components/SectionHeader";
import { Button } from "../../components/Button";

export const Achievements = () => {
    return (
        <Container>
            <div>
                <SectionHeader
                    span="Our Achievement"
                    title="We are Connecting You The Digital Life."
                    text="The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants."
                />
                <Button primary>
                    Discover me <img src="/assets/icons/arrow.svg" alt="" />
                </Button>
            </div>

            <div>
                <AchievementCard>
                    <header>
                        <img src="/assets/icons/star.svg" alt="" />
                        <h3>4.8 Rating</h3>
                    </header>
                    <main>
                        <div>
                            <img src="/assets/icons/people.svg" alt="" />
                            <span>
                                <strong>+836k</strong> Members
                            </span>
                        </div>
                        <p>
                            More than 2 billion we people over countries use
                            socibooks we to stay in touch with friends.
                        </p>
                    </main>
                    <footer>
                        <a href="/">
                            Join Our Community{" "}
                            <img src="/assets/icons/arrow-blue.svg" alt="" />
                        </a>
                    </footer>
                </AchievementCard>

                <AchievementCard>
                    <header>
                        <img src="/assets/icons/trophy.svg" alt="" />
                        <h3>Awwwards</h3>
                    </header>
                    <main>
                        <div>
                            <img src="/assets/images/github.png" alt="" />
                            <span>
                                Best of <strong>2021</strong> on Github
                            </span>
                        </div>
                        <p>
                            More than 2 billion we people over countries use
                            socibooks we to stay in touch with friends.
                        </p>
                    </main>
                    <footer>
                        <a href="/">
                            Go To Awards
                            <img src="/assets/icons/arrow-blue.svg" alt="" />
                        </a>
                    </footer>
                </AchievementCard>
            </div>
        </Container>
    );
};
