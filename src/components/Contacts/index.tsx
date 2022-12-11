import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useViewportScroll } from "framer-motion";

import {
	ContactSection,
	ContactSectionContent,
	ContactSectionText,
	ContactsCards,
	ContactCard,
	ContactCardImage,
	ContactCardContent,
} from "./style";

import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { userData } from "@/utils/userData";
import { Action, Translate } from "@/utils/translateData";

export const Contacts = () => {
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

	const ref = useRef(null);

	const { scrollYProgress } = useViewportScroll();

	return (
		<ContactSection id="contact">
			<Container>
				<ContactSectionContent ref={ref}>
					<motion.div style={{ opacity: scrollYProgress }}>
						<ContactSectionText>
							<Action lang={lang} />
						</ContactSectionText>
					</motion.div>
					<ContactsCards>
						<ContactCard>
							<ContactCardImage className="wpp">
								<FaWhatsapp color="#fff" size={24} />
							</ContactCardImage>
							<ContactCardContent>
								<Text type="heading4" color="grey4">
									{lang === "PT"
										? Translate.whatsApp.PT
										: Translate.whatsApp.EN}
								</Text>
								<Text color="grey2" type="body2">
									{lang === "PT"
										? Translate.whatsAppDesc.PT
										: Translate.whatsAppDesc.EN}
								</Text>
								<Text
									as="a"
									color="grey2"
									type="body2"
									target="_blank"
									href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
								>
									{lang === "PT"
										? Translate.talk.PT
										: Translate.talk.EN}
								</Text>
							</ContactCardContent>
						</ContactCard>

						<ContactCard>
							<ContactCardImage className="email">
								<FaEnvelopeOpen color="#fff" size={24} />
							</ContactCardImage>
							<ContactCardContent>
								<Text type="heading4" color="grey4">
									{lang === "PT"
										? Translate.email.PT
										: Translate.email.EN}
								</Text>
								<Text color="grey2" type="body2">
									{lang === "PT"
										? Translate.emailDesc.PT
										: Translate.emailDesc.EN}
								</Text>
								<Text
									as="a"
									color="grey2"
									type="body2"
									target="_blank"
									href={`mailto=${userData.emailUser}`}
								>
									{lang === "PT"
										? Translate.send.PT
										: Translate.send.EN}
								</Text>
							</ContactCardContent>
						</ContactCard>
						<ContactCard>
							<ContactCardImage className="linkedin">
								<FaLinkedin color="#fff" size={24} />
							</ContactCardImage>
							<ContactCardContent>
								<Text type="heading4" color="grey4">
									{lang === "PT"
										? Translate.linkedIn.PT
										: Translate.linkedIn.EN}
								</Text>
								<Text color="grey2" type="body2">
									{lang === "PT"
										? Translate.linkedInDesc.PT
										: Translate.linkedInDesc.EN}
								</Text>
								<Text
									as="a"
									color="grey2"
									type="body2"
									target="_blank"
									href={
										"https://www.linkedin.com/in/" +
										userData.linkedinUser
									}
								>
									{lang === "PT"
										? Translate.profile.PT
										: Translate.profile.EN}
								</Text>
							</ContactCardContent>
						</ContactCard>
					</ContactsCards>
				</ContactSectionContent>
			</Container>
		</ContactSection>
	);
};
