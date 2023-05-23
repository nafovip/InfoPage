import React, { useEffect, useState } from 'react';
import mylogo from "../../../images/header/logo.svg";
import { Slide } from "react-reveal"

const Header = ({ siteTitle }) => {

	return (
		<header className="header">
			<div className="_container" id="off">
				<Slide up duration={2000}>
					<div className="header__container">
						<a className="header__logo" href="#"><img src={mylogo} alt="logo" className="logo__image" /></a>
						<nav className="header__menu">
							<ul className="menu__items">
								<li className="menu__item"><a href="#home" className="menu__link">HOME</a></li>
								<li className="menu__item"><a href="#about" className="menu__link">OUR VALUES</a></li>
								<li className="menu__item"><a href="#buy" className="menu__link">HOW TO BUY</a></li>
								<li className="menu__item"><a href="#tokenomic" className="menu__link">TOKENOMICS</a></li>
								<li className="menu__item"><a href="#faq" className="menu__link">FAQ</a></li>
							</ul>
						</nav>
						<a className="header__button" href="https://app.uniswap.org/#/swap?outputCurrency=0xaf59f6613920d98ef64a133b21b28495a63e808f"><p className="button__text">buy now</p></a>
					</div>
				</Slide>
			</div>
		</header>
	)
}

export default Header
