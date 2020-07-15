import React from "react";
import "./style.css";

const Form = () => (
    <form className="form">
        <input type="text" className="form__item" placeholder="Co jest do zrobienia?"/>
        <button className="form__button">Dodaj zadanie</button>
    </form>
)
export default Form;