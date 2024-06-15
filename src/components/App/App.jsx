import { useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Reader from "./Reader/Reader";

const ClickCounter = ({value, onCount }) => {   
    return <button onClick={onCount}>clicks: {value}</button>;
};

export default function App() {
    // const startFeedback = { good: 0, neutral: 0, bad: 0 };
    
    let state = {
	good: 0,
	neutral: 0,
	bad: 0
    };

    const [clicks, setClicks] = useState(0);
    

    const handleClick = () => {
        setClicks(clicks + 1)
    }

    const handleReset = () => {
        setClicks(0);
    }

//     const [states, setStates] = useState(() => {
//         const savedStates = window.localStorage.getItem('saved-states');
//         if (savedStates !== null) {
//             return JSON.parse(savedStates);
//         }
//         return { good: 0, neutral: 0, bad: 0 };
//     });
    
//       const updateFeedback = feedbackType => {

//  }
    return (
        <>
            <Description />
            <Options />
            <Feedback
                good={state.good}
                neutral={state.neutral}
                bad={state.bad}
            />
            <ClickCounter value={clicks} onCount={ handleClick }/>
            <ClickCounter value={clicks} onCount={handleClick} />
            <button onClick={handleReset}>reset</button>


            
            <Reader />
        </>
    );
}