import {
    Project as ProjectWrapper,
    ProjectTitle,
    ProjectStack,
    ProjectStackTech,
    ProjectLink,
    ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";
import { Translate } from "@/utils/translateData";

interface ReposType {
    id: number;
    name: string;
    language: string;
    description: string;
    git_url: string;
    homepage: string;
}

export const Project = (): JSX.Element => {
    const [lang, setLang] = useState("");
    const [repositories, setRepositories] = useState<ReposType[]>([]);

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

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(
                `https://api.github.com/users/${userData.githubUser}/repos`
            );
            const json = await data.json();
            setRepositories(json);
            return json;
        };
        fetchData();
    }, []);

    return (
        <>
            {repositories?.map((repository) => (
                <ProjectWrapper key={repository.id}>
                    <ProjectTitle
                        as="h2"
                        type="heading3"
                        css={{ marginBottom: "$3" }}
                        color="grey4"
                    >
                        {repository.name}
                    </ProjectTitle>

                    <ProjectStack>
                        <Text type="body2" color="grey2">
                            {lang === "PT"
                                ? Translate.codeLang.PT
                                : Translate.codeLang.EN}
                        </Text>
                        {repository.language ? (
                            <ProjectStackTech>
                                <Text color="grey2" type="body2">
                                    {repository.language}
                                </Text>
                            </ProjectStackTech>
                        ) : (
                            <ProjectStackTech>
                                <Text color="grey2" type="body2">
                                    {lang === "PT"
                                        ? Translate.notIdentified.PT
                                        : Translate.notIdentified.EN}
                                </Text>
                            </ProjectStackTech>
                        )}
                    </ProjectStack>

                    <Text type="body1" color="grey2">
                        {repository.description &&
                            repository.description.substring(0, 129)}
                    </Text>
                    <ProjectLinks>
                        <ProjectLink target="_blank" href={repository.git_url}>
                            <FaGithub />
                            {lang === "PT"
                                ? Translate.code.PT
                                : Translate.code.EN}
                        </ProjectLink>
                        {repository.homepage && (
                            <ProjectLink
                                target="_blank"
                                href={repository.homepage}
                            >
                                <FaShare />
                                {lang === "PT"
                                    ? Translate.app.PT
                                    : Translate.app.EN}
                            </ProjectLink>
                        )}
                    </ProjectLinks>
                </ProjectWrapper>
            ))}
        </>
    );
};
