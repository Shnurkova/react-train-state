import { useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";



export default function App() {
    // const startFeedback = { good: 0, neutral: 0, bad: 0 };

    const [states, setStates] = useState({ good: 0, neutral: 0, bad: 0 });
//     const [states, setStates] = useState(() => {
//         const savedStates = window.localStorage.getItem('saved-states');
//         if (savedStates !== null) {
//             return JSON.parse(savedStates);
//         }
//         return { good: 0, neutral: 0, bad: 0 };
//     });
    
    const updateFeedback = feedbackType => {
    setStates({
      ...states,
      [feedbackType]: states[feedbackType] + 1,
    });
    };

    return (
        <>
            <Description />
            <Options updateFeedback={ updateFeedback } />
            <Feedback
                good={states.good}
                neutral={states.neutral}
                bad={states.bad}
            />
        </>
    );
}