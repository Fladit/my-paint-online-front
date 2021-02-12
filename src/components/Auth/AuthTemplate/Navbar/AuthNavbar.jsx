import React from 'react';
import "../../../../styles/navbar.scss"
import {Link} from "react-router-dom";
import {authLinks} from "../../../../api/NavbarLinks"
import NavbarLink from "../../../../utils/NavbarLink/NavbarLink";


const AuthNavbar = ({headerLabel}) => {
    return (
        <div className={"navbar navbar-flex-end"}>
            {headerLabel === "Регистрация" ?
                <NavbarLink path={authLinks.LOGIN} label={"Авторизация"}/>
                :
                <NavbarLink path={authLinks.REGISTRATION} label={"Регистрация"}/>
            }
        </div>
    );
};

export default AuthNavbar;
