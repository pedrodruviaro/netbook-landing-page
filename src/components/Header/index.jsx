import React, { useState } from "react";
import { Container, MenuToggle, Wrapper } from "./styles.jsx";
import { Button } from "../Button";

import { useClickOutside } from "../../hooks/useClickOutside";

export const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const domNode = useClickOutside(() => {
        setNavbarOpen(false);
    });

    return (
        <Wrapper>
            <Container active={navbarOpen}>
                <div>
                    <img src="/assets/icons/logo.svg" alt="Netbook" />
                </div>

                <nav ref={domNode}>
                    <div>
                        <a href="/">Home</a>
                        <a href="/">Community</a>
                        <a href="/">Blog</a>
                        <a href="/">Events</a>
                    </div>

                    <div>
                        <div>
                            <img src="/assets/icons/search.svg" alt="Search" />
                            <input type="text" placeholder="Search Here..." />
                        </div>
                        <Button>Log in</Button>
                    </div>
                </nav>

                <MenuToggle
                    active={navbarOpen}
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    <span></span>
                </MenuToggle>
            </Container>
        </Wrapper>
    );
};
