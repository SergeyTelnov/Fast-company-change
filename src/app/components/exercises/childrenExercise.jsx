import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const FormComponent = ({ children }) => {
    return React.Children.map(children, (child) => {
        const config = { ...child.props, number: child.props.number };
        return React.cloneElement(child, config);
    });
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <FormComponent>
                <Component number={1} />
                <Component number={2} />
                <Component number={3} />
            </FormComponent>
        </CollapseWrapper>
    );
};

const Component = ({ number }) => {
    return <div>Компонент списка {number}</div>;
};
Component.propTypes = {
    number: PropTypes.number
};

export default ChildrenExercise;
