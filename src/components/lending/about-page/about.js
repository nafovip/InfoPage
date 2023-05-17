import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Slide } from "react-reveal"

export const About = ({ siteTitle, isMobile }) => {
	return (
		<div class="about-page" id="about">
			<div class="about-page__container _container">
				{isMobile ? (
					<div class="about-page__row">
						<div class="row__image">
							<StaticImage src="../../../images/about/fella.svg" alt="fella" height={500} width={402} layout="fixed" placeholder="blurred" className="row__image_img" />
						</div>
						<div class="row__descriptions">
							<h1 class="about-page__header header-text" data-aos="fade-up">OUR VALUES</h1>
							<div class="about-page__description">
								<p class="description_text">The $NAFO token has been created to raise money for Ukrainian Armed Forces and civilians affected by the russian aggression. We are a team of Ukrainian patriots who want to free their homeland and make Ukraine peaceful and prosperous again.</p>
								<p class="description_text">Our goal is to maximize trading volumes of the $NAFO token, sending 4% from every transaction to the needs of Ukrainian people. The tax transfer is integrated into our smart contract and can be easily tracked on the blockchain explorer. The project team, nor anyone else, does not take any additional fees from trading $NAFO.</p>
								<p class="description_text">The donations will be sent to the most trusted and efficient funds raising money for Ukraine, such as Serhiy Prytula Foundation or SaveLife.in.ua.</p>
							</div>
						</div>
					</div>
				) : (
					<div class="about-page__row">
						<div class="row__image">
							<Slide left duration={2000}><StaticImage src="../../../images/about/fella.svg" alt="fella" height={500} width={402} layout="fixed" placeholder="blurred" className="row__image_img" /></Slide>
						</div>
						<div class="row__descriptions">
							<h1 class="about-page__header header-text" data-aos="fade-up">OUR VALUES</h1>
							<div class="about-page__description">
								<p class="description_text"><Slide right duration={2000}>The $NAFO token has been created to raise money for Ukrainian Armed Forces and civilians affected by the russian aggression. We are a team of Ukrainian patriots who want to free their homeland and make Ukraine peaceful and prosperous again.</Slide></p>
								<p class="description_text"><Slide right duration={2000}>Our goal is to maximize trading volumes of the $NAFO token, sending 4% from every transaction to the needs of Ukrainian people. The tax transfer is integrated into our smart contract and can be easily tracked on the blockchain explorer. The project team, nor anyone else, does not take any additional fees from trading $NAFO.</Slide></p>
								<p class="description_text"><Slide right duration={2000}>The donations will be sent to the most trusted and efficient funds raising money for Ukraine, such as Serhiy Prytula Foundation or SaveLife.in.ua.</Slide></p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}