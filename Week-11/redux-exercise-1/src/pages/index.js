import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { lightDim, lightFull, lightOff } from "../actions/lightAction";

const Index = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log("store", state);
        return (
        <>
                <button
                    className="m-5"
                    onClick={() => {
                        dispatch(lightDim());
                    }}
                    style={{backgroundColor:state.colorShade === '#F0FFFF' ? 'green':'white'}}
                >
                    Dim Light
                </button>
                <button
                   className="m-5"
                    onClick={() => {
                        dispatch(lightOff());
                    }}
                    style={{backgroundColor:state.colorShade === '#000000' ? 'green':'white'}}
                    >
                    Light Off
                </button>
                <button
                className="m-5"
                    onClick={() => {
                        dispatch(lightFull());
                    }}
                    style={{backgroundColor:state.colorShade === '#FFFFFF' ? 'green':'white'}}
                    >
                    Let there be light!
                </button>
        </>
    );
}
export default Index