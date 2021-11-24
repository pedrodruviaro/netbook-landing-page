import React from "react";
import { SectionHeader } from "../imports";
import { Container } from "./styles.jsx";
import { ArticlePreview } from "../../components/ArticlePreview";
import { articles } from "./data";

export const News = () => {
    return (
        <Container>
            <SectionHeader center span="Read More" title="Latest News" />
            <div>
                {articles.map((article) => (
                    <ArticlePreview key={article.title} {...article} />
                ))}
            </div>
        </Container>
    );
};
