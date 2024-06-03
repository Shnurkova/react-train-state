import { useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";

export default function App() {
    const startFeedback = { good: 0, neutral: 0, bad: 0 }


    return (
        <>
            <Description />
            <Options />
            <Feedback />
        </>
    );
}