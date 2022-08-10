// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
    Header,
    HeaderContent,
    HeaderButtonsArea,
    UserImage,
    StackCards,
    ProjectsArea,
    ProjectsAreaSocialMediaMessage,
    ProjectAreaWrapperColumns,
    ProjectsAreaContent,
} from "./style";
import { HandEffect } from "@/components/HandEffect";
import { useEffect, useState } from "react";
import { Presentation, Translate } from "@/utils/translateData";

export const Home = (): JSX.Element => {
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
        <main id="home">
            <Header>
                <Container>
                    <HeaderContent>
                        <Flex>
                            <UserImage
                                src={`https://github.com/${userData.githubUser}.png`}
                                alt={userData.nameUser}
                                title={userData.nameUser}
                                width={"48px"}
                                height={"48px"}
                            />
                            <Text color="grey4" css={{ marginLeft: "$2" }}>
                                {lang === "PT"
                                    ? Translate.hello.PT
                                    : Translate.hello.EN}{" "}
                                <HandEffect />
                            </Text>
                        </Flex>
                        <Presentation lang={lang} />
                        <Text type="body1" color="grey2">
                            {lang === "PT"
                                ? Translate.discover.PT
                                : Translate.discover.EN}
                        </Text>
                        <HeaderButtonsArea>
                            <Button as="a" type="primary" href="#projects">
                                {lang === "PT"
                                    ? Translate.seeProjects.PT
                                    : Translate.seeProjects.EN}
                            </Button>
                            <Button
                                as="a"
                                type="circle"
                                target="_blank"
                                href={userData.githubUser}
                            >
                                <FaGithub />
                            </Button>
                        </HeaderButtonsArea>
                        <StackCards>
                            {stackData.map((stack, index) => (
                                <Stack
                                    key={index}
                                    title={stack.title}
                                    icon={stack.img}
                                />
                            ))}
                        </StackCards>
                    </HeaderContent>
                </Container>
            </Header>
            <ProjectsArea id="projects">
                <Container>
                    <ProjectAreaWrapperColumns>
                        <ProjectsAreaSocialMediaMessage>
                            <Text as="h2" type="heading4" color="grey4">
                                {lang === "PT"
                                    ? Translate.myProjects.PT
                                    : Translate.myProjects.EN}
                            </Text>
                            <Text as="p" type="body1" color="grey2">
                                {lang === "PT"
                                    ? Translate.createdAt.PT
                                    : Translate.createdAt.EN}{" "}
                                <Text as="span" color="brand5">
                                    Kenzie Academy
                                </Text>
                            </Text>
                        </ProjectsAreaSocialMediaMessage>
                        <ProjectsAreaContent>
                            <Project />
                        </ProjectsAreaContent>
                    </ProjectAreaWrapperColumns>
                </Container>
            </ProjectsArea>
            <Contacts />
        </main>
    );
};
