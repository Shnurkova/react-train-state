export default function Feedback({ good, neutral, bad, total}) {
    return (
        <ul>
            <li><p>Good: { good }</p></li>
            <li><p>Neutral: { neutral }</p></li>
            <li><p>Bad: {bad}</p></li>
            <li><p>Total: { total }</p></li>
        </ul>
    );
}