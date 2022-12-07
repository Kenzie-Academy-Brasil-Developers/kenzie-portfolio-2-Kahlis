import { Text } from "@/styles/Text";

export const Translate = {
    follow: {
        PT: "Siga-me nas minha redes sociais e vamos bater um papo",
        EN: "Follow me on my social networks and let's talk",
    },
    hello: {
        PT: "Olá Mundo! Meu nome é Matheus de Souza Arruda",
        EN: "Hello World! My name is Matheus de Souza Arruda",
    },
    discover: {
        PT: "Sou apaixonado por programação desde a infância, acredito que o limite de uma aplicação é apenas a curiosidade do programador. Seja bem-vindo ao meu porfolio!",
        EN: "I'm in love with programming since my childhood, I believe the application limit is only the creativity of the programmer, welcome to my portfolio!",
    },
    seeProjects: {
        PT: "Ver Projetos",
        EN: "See Projects",
    },
    myProjects: {
        PT: "Meus projetos",
        EN: "My projects",
    },
    codeLang: {
        PT: "Linguagem: ",
        EN: "Language: ",
    },
    linkedIn: {
        PT: "Meu LinkedIn",
        EN: "My LinkedIn",
    },
    linkedInDesc: {
        PT: "Podemos estar em constante contato um com o outro e ao mesmo tempo desenvolver nosso networking",
        EN: "We can create more constant interactions as well as a sharing network",
    },
    whatsApp: {
        PT: "Meu WhatsApp",
        EN: "My WhatsApp",
    },
    whatsAppDesc: {
        PT: "Estou disponível para chamadas de voz, bora desenvolver um projeto juntos?",
        EN: "I'm available for a voice chat, let's about creativity together?",
    },
    email: {
        PT: "Meu email",
        EN: "My email",
    },
    emailDesc: {
        PT: "Me envie um e-mail com feedbacks, sugestões ou ideias para novos projetos",
        EN: "Send me an email reporting feedbacks, suggestions and ideas",
    },
    talk: {
        PT: "Conversar",
        EN: "Talk Now",
    },
    send: {
        PT: "Enviar email",
        EN: "Send email now",
    },
    profile: {
        PT: "Acessar perfil",
        EN: "Go to profile now",
    },
    thankYou: {
        PT: "Obrigado!",
        EN: "Thank you!",
    },
    createdAt: {
        PT: "Projetos criados em",
        EN: "Projects created at",
    },
    home: {
        PT: "Início",
        EN: "Home",
    },
    projects: {
        PT: "Projetos",
        EN: "Projects",
    },
    contact: {
        PT: "Contato",
        EN: "Contact",
    },
    social: {
        PT: "Redes Sociais",
        EN: "Social Media",
    },
    notIdentified: {
        PT: "Não identificado",
        EN: "Not identified",
    },
    code: {
        PT: "Código Fonte",
        EN: "GitHub Code",
    },
    app: {
        PT: "Aplicação",
        EN: "Application",
    },
    preview: {
        PT: "Visualizar",
        EN: "Preview",
    },
};

interface IPresentation {
    lang: string;
}

export const Presentation = ({ lang }: IPresentation) => {
    return lang === "PT" ? (
        <Text as="h1" type="heading1" color="grey5">
            Minha paixão é desenvolver com{" "}
            <Text as="span" type="heading1" color="brand1">
                criatividade
            </Text>{" "}
            e{" "}
            <Text as="span" type="heading1" color="brand1">
                inovação.
            </Text>
        </Text>
    ) : (
        <Text as="h1" type="heading1" color="grey5">
            I love develop with{" "}
            <Text as="span" type="heading1" color="brand1">
                creativity
            </Text>{" "}
            and{" "}
            <Text as="span" type="heading1" color="brand1">
                innovation
            </Text>
        </Text>
    );
};

export const Action = ({ lang }: IPresentation) => {
    return lang === "PT" ? (
        <Text type="heading2" color="grey4">
            Vamos bater um bapo e{" "}
            <Text as="span" type="heading2" color="brand1">
                desenvolver um projeto
            </Text>{" "}
            juntos?
        </Text>
    ) : (
        <Text type="heading2" color="grey4">
            Let's set up a conversation and{" "}
            <Text as="span" type="heading2" color="brand1">
                develop our creativity
            </Text>{" "}
            together?
        </Text>
    );
};
