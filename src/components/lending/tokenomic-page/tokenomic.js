import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Slide } from "react-reveal"

export const Tokenomic = ({ siteTitle }) => {
	return (
		<div className="tokenomic-page">
			<div className="tokenomic-page__line"></div>
			<div className="tokenomic-page__container _container" id="tokenomic">
				<div className="tokenomic-page__row" id="off">
					<div className="row__image">
						<Slide left duration={2000}><StaticImage src="../../../images/tokenomic/info.svg" alt="info" placeholder="blurred" quality={100} /></Slide>
					</div>
					<div className="row__description">
						<h1 className="tokenomic-page__header header-text" data-aos="fade-up">TOKENOMICS</h1>
						<Slide right duration={2000}>
							<div>
								<h5 className="row__description_head">Token supply - 199 124 800 000 000</h5>
								<div className="row__descriptions">
									<p className="row__descriptions_text">The whole supply is generated at the token launch and is locked into the Uniswap v2 liquidity via <a href="https://uncx.network/" className="_line">Uncx</a> for 2 years.</p>
									<p className="row__descriptions_text">The tax profits are accumulated on the $NAFO treasury and periodically sent to the official charity addresses. The $NAFO team will provide transaction proofs for every donation.</p>
									<p className="row__descriptions_text">The $NAFO token also has an anti-whale protection, which limits all transactions (including buying or selling) to 1% of the total supply.</p>
								</div>
							</div>
						</Slide>
					</div>
				</div>
			</div>
		</div>
	)
}