import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Slide } from "react-reveal"

export const About = ({ siteTitle}) => {
	return (
		<div className="about-page" id="about">
			<div className="about-page__container _container">
				<div className="about-page__row" id="off">
						<div className="row__image">
							<Slide left duration={2000}><StaticImage src="../../../images/about/fella.svg" alt="fella" height={500} width={402} layout="fixed" placeholder="blurred" quality={100} className="row__image_img" /></Slide>
						</div>
						<div className="row__descriptions">
							<h1 className="about-page__header header-text" data-aos="fade-up">OUR VALUES</h1>
							<div className="about-page__description">
								<p className="description_text"><Slide right duration={2000}>The $NAFO token has been created to raise money for Ukrainian Armed Forces and civilians affected by the russian aggression. We are a team of Ukrainian patriots who want to free their homeland and make Ukraine peaceful and prosperous again.</Slide></p>
								<p className="description_text"><Slide right duration={2000}>Our goal is to maximize trading volumes of the $NAFO token, sending 4% from every transaction to the needs of Ukrainian people. The tax transfer is integrated into our smart contract and can be easily tracked on the blockchain explorer. The project team, nor anyone else, does not take any additional fees from trading $NAFO.</Slide></p>
								<p className="description_text"><Slide right duration={2000}>The donations will be sent to the most trusted and efficient funds raising money for Ukraine, such as Serhiy Prytula Foundation or SaveLife.in.ua.</Slide></p>
							</div>
						</div>
					</div>
			</div>
		</div>
	)
}
