import React, { useState } from "react";
import { Slide, Fade } from "react-reveal";
import { useInView } from "react-intersection-observer";
import Typist from 'react-typist';
import { Video } from "../../utils";
import { useStaticQuery, graphql } from "gatsby"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css";

export const Buy = ({ siteTitle }) => {

	const { ref, inView } = useInView({ threshold: 0 });
	const [isTypingComplete, setIsTypingComplete] = useState(false);

	const data = useStaticQuery(graphql`
    query {
	  wallet: file(relativePath: { eq: "buy/wallet.svg" }) {
		publicURL
      }
	  eth: file(relativePath: { eq: "buy/eth.svg" }) {
        publicURL
      }
	  uniswap: file(relativePath: { eq: "buy/uniswap.svg" }) {
		publicURL
      }
	  fella: file(relativePath: { eq: "buy/fella.svg" }) {
        publicURL
      }
    }
  `)
	const wallet = data.wallet.publicURL;
	const eth = data.eth.publicURL;
	const uniswap = data.uniswap.publicURL;
	const fella = data.fella.publicURL;



	const handleTypingDone = () => {
		setIsTypingComplete(true);
	};

	return (
		<div className="buy-page" id="buy">
			<div className="buy-page__container _container" ref={ref}>
				<h1 className="buy-page__header header-text" data-aos="fade-up">HOW TO BUY</h1>
				<div className="buy-page__cards">
					<div className="buy-page__card">
						<div className="card__row">
							<div className="row__img" id="off">
								<Slide left duration={1500}>
									<div>
										<LazyLoadImage src={wallet} alt="wallet" width={149} effect="blur" />
									</div>
								</Slide>
							</div>
							<Fade duration={2000}>
								<div className="row__description">
									<p className="row__description_header">Create a Wallet</p>
									<p className="row__description_desc"> {inView && !isTypingComplete ? (
										<Typist avgTypingDelay={15} onTypingDone={handleTypingDone}
											startDelay={100} cursor={{ show: false }}>If you are using a desktop, we suggest visiting <a href="https://metamask.io/" class="_line"> Metamask.io</a> and downloading their browser extension. For mobile, install any Ethereum wallet that can be connected to Uniswap.
										</Typist>) : (<>If you are using a desktop, we suggest visiting <a href="https://metamask.io/" className="_line"> Metamask.io</a> and downloading their browser extension. For mobile, install any Ethereum wallet that can be connected to Uniswap</>)}
									</p>
								</div>
							</Fade>
						</div>
					</div>
					<div className="buy-page__card">
						<div className="card__row">
							<div className="row__img" id="off">
								<Slide left duration={1500}>
									<div>
										<LazyLoadImage src={eth} alt="eth" width={149} effect="blur" />
									</div>
								</Slide>
							</div>
							<Fade duration={2000}>
								<div className="row__description">
									<p className="row__description_header">Get Some ETH</p>
									<p className="row__description_desc"> {inView && !isTypingComplete ? (
										<Typist avgTypingDelay={15} onTypingDone={handleTypingDone}
											startDelay={100} cursor={{ show: false }}>
											You will need ETH to pay for transaction fees when buying $NAFO. You can buy some ETH directly in Metamask or just get it transferred to your wallet from an exchange or your fellas.
										</Typist>) : (<>You will need ETH to pay for transaction fees when buying $NAFO. You can buy some ETH directly in Metamask or just get it transferred to your wallet from an exchange or your fellas.</>)}
									</p>
								</div>
							</Fade>
						</div>
					</div>
					<div className="buy-page__card">
						<div className="card__row">
							<div className="row__img" id="off">
								<Slide left duration={1500}>
									<div>
										<LazyLoadImage src={uniswap} alt="uniswap" width={149} effect="blur" />
									</div>
								</Slide>
							</div>
							<Fade duration={2000}>
								<div className="row__description">
									<p className="row__description_header">Go to Uniswap</p>
									<p className="row__description_desc"> {inView && !isTypingComplete ? (
										<Typist avgTypingDelay={15} onTypingDone={handleTypingDone}
											startDelay={100} cursor={{ show: false }}>
											Open the <a href="https://app.uniswap.org/" className="_line">Uniswap app</a>, connect your wallet, and paste the $NAFO smart contract address. Or simply visit <a href="https://app.uniswap.org/#/swap?outputCurrency=0xaf59f6613920d98ef64a133b21b28495a63e808f" className="_line">this link</a> for a pre-configured setup with $NAFO as received currency.
										</Typist>) : (<>Open the <a href="https://app.uniswap.org/" className="_line">Uniswap app</a>, connect your wallet, and paste the $NAFO smart contract address. Or simply visit <a href="https://app.uniswap.org/#/swap?outputCurrency=0xaf59f6613920d98ef64a133b21b28495a63e808f" className="_line">this link</a> for a pre-configured setup with $NAFO as received currency.</>)}
									</p>
								</div>
							</Fade>
						</div>
					</div>
					<div className="buy-page__card">
						<div className="card__row">
							<div className="row__img" id="off">
								<Slide left duration={1500}>
									<div>
										<LazyLoadImage src={fella} alt="fella" width={149} effect="blur" />
									</div>
								</Slide>
							</div>
							<Fade duration={2000}>
								<div className="row__description">
									<p className="row__description_header">Become a fella</p>
									<p className="row__description_desc"> {inView && !isTypingComplete ? (
										<Typist avgTypingDelay={15} onTypingDone={handleTypingDone} startDelay={100} cursor={{ show: false }}>
											Time to join $NAFO! Set the <a href="https://support.uniswap.org/hc/en-us/articles/8643879653261-What-is-Price-Slippage-"
												className="_line">slippage</a> to at least 4-5%, enter how much $NAFO you want to buy, and press Swap. Pay the gas fee and wait for your transaction to be confirmed. Congratulations, you’re a fella now!
										</Typist>) : (<>Time to join $NAFO! Set the <a href="https://support.uniswap.org/hc/en-us/articles/8643879653261-What-is-Price-Slippage-"
											className="_line">slippage</a> to at least 4-5%, enter how much $NAFO you want to buy, and press Swap. Pay the gas fee and wait for your transaction to be confirmed. Congratulations, you’re a fella now!</>)}
									</p>
								</div>
							</Fade>
						</div>
					</div>
				</div>
				<div className="buy-page__screen">
					<Fade duration={2000}>
						<Video videoSrcURL="https://app.uniswap.org/#/swap?outputCurrency=0xaf59f6613920d98ef64a133b21b28495a63e808f" videoTitle="uniswap" width="100%" height="428" />
					</Fade>
				</div>
			</div>
		</div>
	)
}
