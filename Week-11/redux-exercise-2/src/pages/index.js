import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incStep, resetStep } from "../actions/stepAction";

const Index = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log("store", state);
        return (
        <>
                <button
                    className="m-5"
                    onClick={() => {
                        dispatch(incStep());
                    }}
                >
                    Increment Step
                </button>
                <button
                   className="m-5"
                    onClick={() => {
                        dispatch(resetStep());
                    }}
                    >
                   Reset Step
                </button>
                <p>You have walked {state?.steps} steps today</p>
                
        </>
    );
}
export default Index