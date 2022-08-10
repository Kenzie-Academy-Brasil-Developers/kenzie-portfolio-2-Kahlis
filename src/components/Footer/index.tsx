import { Container, Flex, Box } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Footer as FooterWrapper } from "./style";
import { UserImage } from "@/pages/home/style";
import { userData } from "@/utils/userData";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Button } from "@/styles/Buttons";
import { HandEffect } from "../HandEffect";
import { Translate } from "@/utils/translateData";
import { useEffect, useState } from "react";

export const Footer = (): JSX.Element => {
    const [lang, setLang] = useState(localStorage.getItem("lang"));
    useEffect(() => {
        const changeLang = (event: Event) => {
            const item = localStorage.getItem("lang");
            if (item) setLang(item);
        };

        window.addEventListener("setLang", changeLang);

        return () => {
            window.removeEventListener("setLang", changeLang);
        };
    }, []);
    return (
        <FooterWrapper id="social-media">
            <Container>
                <Flex>
                    <UserImage
                        src={`https://github.com/${userData.githubUser}.png`}
                        alt={userData.nameUser}
                        title={userData.nameUser}
                        width={"70px"}
                        height={"70px"}
                    />
                    <Box css={{ marginLeft: "$2" }}>
                        <Text
                            type="heading4"
                            color="grey5"
                            css={{ marginBottom: "$2" }}
                        >
                            {lang === "PT"
                                ? Translate.thankYou.PT
                                : Translate.thankYou.EN}{" "}
                            <HandEffect />
                        </Text>
                        <Text type="body1" color="grey2">
                            {lang === "PT"
                                ? Translate.follow.PT
                                : Translate.follow.EN}
                        </Text>
                    </Box>
                </Flex>
                <Flex>
                    <Button
                        className="instagram"
                        type="circle"
                        as="a"
                        target="_blank"
                        href={`https://instagram.com/${userData.instagramUser}`}
                    >
                        <FaInstagram />
                    </Button>
                    <Button
                        className="facebook"
                        type="circle"
                        as="a"
                        target="_blank"
                        href={`https://fb.com/${userData.facebookUser}`}
                    >
                        <FaFacebookF />
                    </Button>
                    <Button
                        className="linkedin"
                        type="circle"
                        as="a"
                        target="_blank"
                        href={`https://linkedin.com/in/${userData.linkedinUser}`}
                    >
                        <FaLinkedinIn />
                    </Button>
                </Flex>
            </Container>
        </FooterWrapper>
    );
};
