import { useEffect, useState } from "react";
import useMedia from "use-media";
import { userData } from "@/utils/userData";

import {
    Navbar as NavbarWrapper,
    LogoTipo,
    LogoTipoText,
    NavbarLinks,
    NavbarMobileArea,
} from "./style";

import { FaGithub, FaLinkedinIn, FaBars, FaLastfmSquare } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container } from "@/styles/Global";
import ReactSwitch from "react-switch";
import { Translate } from "@/utils/translateData";

export interface ISignUpData {
    check: Boolean;
}

export const NavBar = (): JSX.Element => {
    const langEvent = new Event("setLang");
    const isWide = useMedia({ maxWidth: "991px" });

    document.title = userData.nameUser;

    const [open, setOpen] = useState(false);
    const [check, setCheck] = useState(false);

    const OpenMenu = () => {
        setOpen(!open);
    };

    const HandleChange = (checked: boolean) => {
        setCheck(checked);
        localStorage.setItem("lang", checked ? "EN" : "PT");
        window.dispatchEvent(langEvent);
    };

    useEffect(() => {
        if (!localStorage.getItem("lang")) localStorage.setItem("lang", "PT");
        else setCheck(localStorage.getItem("lang") === "PT" ? false : true);
    }, []);

    return (
        <NavbarWrapper>
            <Container>
                <NavbarMobileArea>
                    <LogoTipo>
                        <LogoTipoText>{check ? "EN-US" : "PT-BR"}</LogoTipoText>{" "}
                        <ReactSwitch
                            checked={check}
                            onChange={HandleChange}
                            onHandleColor="#181a1b"
                            offHandleColor="#181a1b"
                            offColor="#009c3b"
                            onColor="#003cff"
                            handleDiameter={30}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            height={20}
                            width={48}
                            className="react-switch"
                            id="material-switch"
                        />
                    </LogoTipo>
                    {isWide && (
                        <Button
                            type="icon"
                            onClick={OpenMenu}
                            aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
                        >
                            {!open ? <FaBars /> : <IoClose />}
                        </Button>
                    )}
                </NavbarMobileArea>
                {isWide ? open && <NavLinks /> : <NavLinks />}
            </Container>
        </NavbarWrapper>
    );
};

export const NavLinks = (): JSX.Element => {
    const [lang, setLang] = useState("");
    useEffect(() => {
        const changeLang = () => {
            const item = localStorage.getItem("lang");
            if (item) setLang(item);
        };

        window.addEventListener("setLang", changeLang);

        changeLang();
        return () => {
            window.removeEventListener("setLang", changeLang);
        };
    }, []);

    return (
        <NavbarLinks>
            <Button type="btLink" as="a" color="grey4" href={`#home`}>
                {lang === "PT" ? Translate.home.PT : Translate.home.EN}
            </Button>
            <Button type="btLink" as="a" color="grey4" href={`#projects`}>
                {lang === "PT" ? Translate.projects.PT : Translate.projects.EN}
            </Button>
            <Button type="btLink" as="a" color="grey4" href={`#contact`}>
                {lang === "PT" ? Translate.contact.PT : Translate.contact.EN}
            </Button>
            <Button type="btLink" as="a" color="grey4" href={`#social-media`}>
                {lang === "PT" ? Translate.social.PT : Translate.social.EN}
            </Button>
        </NavbarLinks>
    );
};
