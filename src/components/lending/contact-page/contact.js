import * as React from "react"
import Icon from '../../icons/icon';
import { StaticImage } from "gatsby-plugin-image";
import { Slide, Fade } from "react-reveal";

export const Contact = ({ siteTitle, isMobile }) => {
	return (
		<div class="contact-page">
			<div class="contact-page__container _container">
				<div class="contact-page__row">
					<div class="row__image">
						{isMobile ? (<StaticImage src="../../../images/contact/meme.png" alt="meme" layout="fixed" placeholder="blurred" />) : (<Slide left duration={2000}><StaticImage src="../../../images/contact/meme.png" alt="meme" layout="fixed" placeholder="blurred" /></Slide>)}
					</div>
					<div class="row__contents">
						<h1 class="contact-page__header header-text" data-aos="fade-up">CONTACT</h1>
						<ul class="contact-page__socials" data-aos="fade-up">
							<Fade duration={2500}>
								<li>
									<a href="https://t.me/nafovip"><Icon name="tg" fould="contact" width={52} height={52} /></a>
								</li>
								<li>
									<a href="https://twitter.com/nafovip"><Icon name="tw" fould="contact" width={52} height={52} /></a>
								</li>
								<li>
									<a href="https://discord.gg/4EkR6ENvaE"><Icon name="disc" fould="contact" width={61} height={61} /></a>
								</li>
							</Fade>
						</ul>
					</div>
				</div>
			</div>
			<div class="contact-page__border"></div>
			<div class="contact-page__descriptions _container">
				<Fade duration={2500}>
					<div>
						<p class="contact-page__descriptions_text0">Disclamer</p>
						<p class="contact-page__descriptions_text">The $NAFO token has no affiliation with the Serhiy Prytula Charity Foundation, the NAFO meme or its creator, Kamil Dyszewski. The project does not constitute financial advice. The $NAFO team takes no responsibility for the token price action or security breaches that may occur during the use of the $NAFO token. Please be reminded that cryptocurrency trading is a high-risk activity and invest only the amount of money you are prepared to lose.</p>
					</div>
				</Fade>
			</div>
		</div>
	)
}