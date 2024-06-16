import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";



export default function App() {
    const startFeedback = { good: 0, neutral: 0, bad: 0 };

    useEffect(() => {
        console.log('CLICKS'), ;
    }, []);


    const [states, setStates] = useState({ good: 0, neutral: 0, bad: 0 });
//     const [states, setStates] = useState(() => {
//         const savedStates = window.localStorage.getItem('saved-states');
//         if (savedStates !== null) {
//             return JSON.parse(savedStates);
//         }
//         return { good: 0, neutral: 0, bad: 0 };
    //     });

    const { good, neutral, bad } = states;
    
    const updateFeedback = feedbackType => {
    setStates({
      ...states,
      [feedbackType]: states[feedbackType] + 1,
    });
    };

    const resetFeedback = () => {
        setStates(startFeedback)
    };

    const totalFeedback = good + neutral + bad;
    const positiveFeedback = Math.round((good / totalFeedback) * 100)


    return (
        <>
            <Description />
            <Options
                updateFeedback={updateFeedback}
                reset={resetFeedback}
                total={totalFeedback} />
            {totalFeedback > 0 ? (
                <Feedback
                good={states.good}
                neutral={states.neutral}
                bad={states.bad}
                total={totalFeedback}
                positive={positiveFeedback}
            /> 
            ) : (
                <Notification />
            )}
        </>
    );
}