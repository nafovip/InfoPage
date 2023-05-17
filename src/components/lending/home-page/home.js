import * as React from "react"
import Icon from '../../icons/icon';
import { Slide, Fade } from "react-reveal"

export const Home = ({ siteTitle,isMobile }) => {
	return (
		<div class="home-page" id="home">
			<div class="home-page__container _container">
				<div class="home-page__descriptions">
					<h1 class="home-page__header header-text" data-aos="fade-up">$NAFO</h1>
					{isMobile ? (<div>
						<p class="home-page__description">
							The $NAFO token helps Ukrainian people and Ukrainian forces in their fight against the invaders. Buy $NAFO to become a fella and contribute to Ukraine's victory and well-being. Stop wasting your money on useless memecoins and make a real impact instead!
						</p>
						<p class="home-page__info">$NAFO contract adress: <br />0xAF59f6613920D98EF64A133b21B28495A63E808f</p>
					</div>
					) : (<Slide left duration={2000}>
						<div>
							<p class="home-page__description">
								The $NAFO token helps Ukrainian people and Ukrainian forces in their fight against the invaders. Buy $NAFO to become a fella and contribute to Ukraine's victory and well-being. Stop wasting your money on useless memecoins and make a real impact instead!
							</p>
							<p class="home-page__info">$NAFO contract adress: <br />0xAF59f6613920D98EF64A133b21B28495A63E808f</p>
						</div>
					</Slide>)}
				</div>
				<div class="home-page__soc-medias">
					<ul class="soc-medias__links">
						<Fade duration={2500}>
							<li class="soc-medias__link">
								<a href="https://t.me/nafovip" target="_blank"><Icon name="tw" fould="home" width={34} height={34} /></a>
							</li>
							<li class="soc-medias__link">
								<a href="https://discord.gg/UrR7uSNn" target="_blank"><Icon name="tg" fould="home" width={45} height={34} /></a>
							</li>
							<li class="soc-medias__link">
								<a href="https://www.dextools.io/app/en/ether/pair-explorer/0x1e368d14ec562dcc27fad06cdb1a17d6a8facf34" target="_blank"><Icon name="ds" fould="home" width={34} height={34} /></a>
							</li>
							<li class="soc-medias__link">
								<a href="#"><Icon name="dex" fould="home" width={34} height={34} /></a>
							</li>
							<li class="soc-medias__link">
								<a href="https://app.uniswap.org/#/swap?outputCurrency=0xaf59f6613920d98ef64a133b21b28495a63e808f" target="_blank"><Icon name="uni" fould="home" width={34} height={34} /></a>
							</li>
							<li class="soc-medias__link">
								<a href="https://etherscan.io/token/0xaf59f6613920d98ef64a133b21b28495a63e808f" target="_blank"><Icon name="scan" fould="home" width={34} height={34} /></a>
							</li>
						</ Fade>
					</ul>
				</div>
			</div>
		</div>
	)
}
