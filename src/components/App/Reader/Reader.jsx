import { useState } from "react";

export default function Reader({articles}) {

    const [ articleIdx, setArticleIdx ] = useState(0);


    const handlePrev = () => {
        if (articleIdx === 0) return;
        setArticleIdx(articleIdx - 1)
    }

    const handleNext = () => {
        if (articleIdx === articles.length - 1) return;
        setArticleIdx(articleIdx + 1)
    }

    const currentArticles = articles[articleIdx];
    console.log(currentArticles);

    return (
        <div>
            <div>
            <div>
                <button onClick={handlePrev}>prev</button>
                <button onClick={handleNext}>next</button>
            </div>
                <p>{articleIdx + 1}/{ articles.length }</p>
            </div>
            <article>
                <h2>{currentArticles.topic}</h2>
                <p>{ currentArticles.text }</p>
            </article>
        </div>
    );
}