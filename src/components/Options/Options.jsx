

export default function Options({ updateFeedback, reset }) {
    return (
        <div>
            <button onClick={() => { updateFeedback('good') }} type="button">Good</button>
            <button onClick={() => { updateFeedback('neutral') }} type="button">Neutral</button>
            <button onClick={() => { updateFeedback('bad') }} type="button">Bad</button>
            <button onClick={ reset } type="button">Reset</button> 
        </div>
    )
}