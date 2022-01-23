import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef("");
    const handleClick = () => {
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <label htmlFor="email" className="form-lable">
                Email
            </label>
            <input
                type="email"
                ref={inputRef}
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary" onClick={handleClick}>
                Button
            </button>
            <button className="btn btn-danger" onClick={handleClickWidth}>
                Button
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
