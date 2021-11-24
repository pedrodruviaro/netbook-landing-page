import React from "react";
import { Container, CustomForm, Wrapper } from "./styles.jsx";

export const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <div>
                    <h4>Subscribe Circle Newsletter</h4>
                    <p>
                        Subscribe to be the first one to know about updates.
                        Enter your email
                    </p>
                    <CustomForm>
                        <input type="email" placeholder="Email Address" />
                        <button type="submit">Subscribe</button>
                    </CustomForm>
                </div>

                <nav>
                    <div>
                        <h4>Home</h4>
                        <a href="/">Home</a>
                        <a href="/">Community</a>
                        <a href="/">Events</a>
                        <a href="/">Contact</a>
                    </div>

                    <div>
                        <h4>Resources</h4>
                        <a href="/">Blog</a>
                        <a href="/">News</a>
                        <a href="/">Guides</a>
                        <a href="/">Help Center</a>
                    </div>

                    <div>
                        <h4>Community</h4>
                        <a href="/">NewsFeed</a>
                        <a href="/">Profile</a>
                        <a href="/">Friends</a>
                        <a href="/">Forum</a>
                    </div>

                    <div>
                        <h4>Main links</h4>
                        <a href="/">Members</a>
                        <a href="/">Activity</a>
                        <a href="/">Groups</a>
                        <a href="/">Private Group</a>
                    </div>
                </nav>
            </Container>
        </Wrapper>
    );
};
