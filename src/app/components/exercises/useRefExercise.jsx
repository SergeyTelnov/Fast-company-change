import React, { useRef, useState, useEffect } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const text = useRef("");
    const size = useRef("");
    const [block, setBlock] = useState("Блок");
    const toggleBlockState = () => {
        setBlock((prevState) => (prevState === "Блок" ? "text" : "Блок"));
        size.current.style.width = "80px";
        size.current.style.height = "150px";
    };
    useEffect(() => {
        text.current = block;
    }, [block]);
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={size}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>{block}</small>
            </div>
            <button onClick={toggleBlockState}>button text</button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
