import React, {Component} from "react";
import icon from "./rs_school_js.svg";

export default class Footer extends Component {
render() {
    return (
        <footer className="footer">
        <div className="footer-author">
            <span>by</span>
            <a
            href="https://github.com/korytsa"
            className="footer__link"
            >
            Anna Korytko
            </a>
            <span>2021</span>
        </div>
        <a href="https://rs.school/react/" className="footer-rsschool">
            <img
            src={icon}
            alt="rs school"
            className="footer-rsschool__img"
            />
            <span className="footer-rsschool__link footer__link">RS School</span>
        </a>
        </footer>
        );
    }
}