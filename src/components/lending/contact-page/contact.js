import * as React from "react"
import Icon from '../../icons/icon';
import { StaticImage } from "gatsby-plugin-image";
import { Slide, Fade } from "react-reveal";

export const Contact = ({ siteTitle }) => {
	return (
		<div className="contact-page">
			<div className="contact-page__container _container">
				<div className="contact-page__row">
					<div className="row__image" id="off">
						<Slide left duration={2000}><StaticImage src="../../../images/contact/meme.png" alt="meme" layout="fixed" placeholder="blurred" quality={100} /></Slide>
					</div>
					<div className="row__contents">
						<h1 className="contact-page__header header-text" data-aos="fade-up">CONTACT</h1>
						<ul className="contact-page__socials">
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
			<div className="contact-page__border"></div>
			<div className="contact-page__descriptions _container">
				<Fade duration={2500}>
					<div>
						<p className="contact-page__descriptions_text0">Disclamer</p>
						<p className="contact-page__descriptions_text">The $NAFO token has no affiliation with the Serhiy Prytula Charity Foundation, the NAFO meme or its creator, Kamil Dyszewski. The project does not constitute financial advice. The $NAFO team takes no responsibility for the token price action or security breaches that may occur during the use of the $NAFO token. Please be reminded that cryptocurrency trading is a high-risk activity and invest only the amount of money you are prepared to lose.</p>
					</div>
				</Fade>
			</div>
		</div>
	)
}