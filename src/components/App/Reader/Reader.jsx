import { useState } from "react";

export default function Reader({articles}) {

    const [ articleIdx, setArticleIdx ] = useState(0);


    const handlePrev = () => {
        setArticleIdx(articleIdx - 1)
    }

    const handleNext = () => {
        setArticleIdx(articleIdx + 1)
    }

    const currentArticles = articles[articleIdx];
    const isFirst = articleIdx === 0;
    const isLast = articleIdx === articles.length - 1;

    return (
        <div>
            <div>
            <div>
                <button onClick={handlePrev} disabled={isFirst}>prev</button>
                <button onClick={handleNext} disabled={isLast}>next</button>
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