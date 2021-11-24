import React, { useState } from "react";
import { SectionHeader } from "../imports.js";
import { Container, CustomButton } from "./styles.jsx";
import { members } from "./data";
import { MemberDisplay } from "../../components/MemberDisplay/index.jsx";

export const Members = () => {
    const [selected, setSelected] = useState("Active");

    function handleSelected(e) {
        setSelected(e.target.innerText);
    }

    return (
        <Container>
            <SectionHeader
                center
                span="Valuable Team"
                title="Our Active Members"
                text="When an unknown printer took a galley of type and meeting fari scrambled it."
            />

            <div>
                <CustomButton
                    active={selected === "Newst" ? true : false}
                    onClick={handleSelected}
                >
                    Newst
                </CustomButton>
                <CustomButton
                    active={selected === "Popular" ? true : false}
                    onClick={handleSelected}
                >
                    Popular
                </CustomButton>
                <CustomButton
                    active={selected === "Active" ? true : false}
                    onClick={handleSelected}
                >
                    Active
                </CustomButton>
            </div>

            <ul>
                {members.map((member) => (
                    <MemberDisplay key={member.name} {...member} />
                ))}
            </ul>
        </Container>
    );
};
