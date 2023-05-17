import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Slide } from "react-reveal"

export const Tokenomic = ({ siteTitle, isMobile }) => {
	return (
		<div class="tokenomic-page">
			<div class="tokenomic-page__line"></div>
			<div class="tokenomic-page__container _container" id="tokenomic">
				<div class="tokenomic-page__row">
					<div class="row__image">
						{isMobile ? (<StaticImage src="../../../images/tokenomic/info.svg" alt="info" placeholder="blurred" />) : (<Slide left duration={2000}><StaticImage src="../../../images/tokenomic/info.svg" alt="info" placeholder="blurred" /></Slide>)}
					</div>
					<div class="row__description">
						<h1 class="tokenomic-page__header header-text" data-aos="fade-up">TOKENOMICS</h1>
						{isMobile ? (<div>
							<h5 class="row__description_head">Token supply - 199 124 800 000 000</h5>
							<div class="row__descriptions">
								<p class="row__descriptions_text">The whole supply is generated at the token launch and is locked into the Uniswap v2 liquidity via <a href="https://uncx.network/" class="_line">Uncx</a> for 2 years.</p>
								<p class="row__descriptions_text">The tax profits are accumulated on the $NAFO treasury and periodically sent to the official charity addresses. The $NAFO team will provide transaction proofs for every donation.</p>
								<p class="row__descriptions_text">The $NAFO token also has an anti-whale protection, which limits all transactions (including buying or selling) to 1% of the total supply.</p>
							</div>
						</div>) : (<Slide right duration={2000}>
							<div>
								<h5 class="row__description_head">Token supply - 199 124 800 000 000</h5>
								<div class="row__descriptions">
									<p class="row__descriptions_text">The whole supply is generated at the token launch and is locked into the Uniswap v2 liquidity via <a href="https://uncx.network/" class="_line">Uncx</a> for 2 years.</p>
									<p class="row__descriptions_text">The tax profits are accumulated on the $NAFO treasury and periodically sent to the official charity addresses. The $NAFO team will provide transaction proofs for every donation.</p>
									<p class="row__descriptions_text">The $NAFO token also has an anti-whale protection, which limits all transactions (including buying or selling) to 1% of the total supply.</p>
								</div>
							</div>
						</Slide>)}
					</div>
				</div>
			</div>
		</div>
	)
}