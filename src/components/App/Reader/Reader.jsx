import { useState } from "react";

export default function Reader() {

    const [ articleIdx, setArticleIdx ] = useState(0);

    return (
        <div>
            <div>
            <div>
                <button>prev</button>
                <button>next</button>
            </div>
            <p>{articleIdx + 1}</p>
            </div>
            <article>article???</article>
        </div>
    );
}