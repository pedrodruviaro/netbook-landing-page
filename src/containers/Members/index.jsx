import React from "react";
import { SectionHeader } from "../imports.js";
import { Container } from "./styles.jsx";
import { members } from "./data";
import { MemberDisplay } from "../../components/MemberDisplay/index.jsx";

export const Members = () => {
    return (
        <Container>
            <SectionHeader
                center
                span="Valuable Team"
                title="Our Active Members"
                text="When an unknown printer took a galley of type and meeting fari scrambled it."
            />

            <div>
                <button>Newst</button>
                <button>Popular</button>
                <button>Active</button>
            </div>

            <ul>
                {members.map((member) => (
                    <MemberDisplay key={member.name} {...member} />
                ))}
            </ul>
        </Container>
    );
};
