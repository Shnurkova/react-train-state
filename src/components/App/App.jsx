// import { useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";

export default function App() {
    let state =  {
	good: 0,
	neutral: 0,
	bad: 0
    };
    
//     const updateFeedback = feedbackType => {

// }


    return (
        <>
            <Description />
            <Options />
            <Feedback
                good={state.good}
                neutral={state.neutral}
                bad={state.bad}
            />
        </>
    );
}