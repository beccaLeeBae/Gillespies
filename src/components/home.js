import React, { Component } from "react";
import NavBar from "./nav";
import Footer from "./footer";
import ProgressiveImage from "react-progressive-image";
import "../App.css";

class Home extends Component {
	render() {
		return (
			<div className="container-fluid">
				<NavBar />
				<div className="row d-flex flex-column justify-content-center align-items-center mb-1">
					<p className="section-header-p m-0 mt-5 pt-5">
						Introducing The Gillespies
					</p>
					<p className="copy-p pb-5 mb-5">est. October 20, 2018</p>
				</div>
				<div className="row d-flex flex-column justify-content-center align-items-center mb-1">
					<div
						id="gdphotocarousel"
						className="carousel slide"
						data-ride="carousel"
					>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<ProgressiveImage
									src="https://i.imgur.com/jP9AJ50.jpg"
									placeholder="https://i.imgur.com/eNDv9Uk.jpg"
								>
									{(src, loading) => (
										<img
											style={{ opacity: loading ? 0.5 : 1 }}
											src={src}
											alt="Grace & Damon"
											className="d-block w-100"
										/>
									)}
								</ProgressiveImage>
							</div>
							{this.props.renderCarousel()}
						</div>
						<a
							className="carousel-control-prev"
							href="#gdphotocarousel"
							role="button"
							data-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href="#gdphotocarousel"
							role="button"
							data-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
				<div className="row d-flex flex-column justify-content-center align-items-center mb-1">
					<p className="section-header-p mt-5">The Proposal</p>
				</div>
				<div className="row d-flex justify-content-center align-items-center mb-1">
					<div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-5">
						<p className="copy-header-p">Her Side</p>
						<p className="copy-p">
							The week leading up to the proposal, Damon had been acting very
							weird; weirder than usual. The morning of the proposal, Damon
							asked if I could be a background extra on his show and told me to
							wear my lucky pants. My little brother was in town and my friend,
							Cara, took off of work to be on the RISE set (for several
							exhausting hours). I had a feeling of what was to come when he
							jumped off the stage, came towards me, and said our favorite
							Bachelor catchphrase: “Can I steal you for a second?”. He brought
							me onto the stage, trembling and struggling for the right words
							(but he seemed very excited too!). Even though I didn’t wear my
							lucky pants, it was still a lucky day!
						</p>
					</div>
					<div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-5">
						<p className="copy-header-p">His Side</p>
						<p className="copy-p">
							I was so excited for this day, I’d told basically everyone in my
							life except Grace. The RISE shuttle car picked us up around 5:45pm
							and we went straight to Brooklyn for hair and make up. Once we got
							to set, I introduced Grace, her friend, Cara, and her brother,
							Rowdy, to the RISE crew and did two very dramatic scenes (so I was
							extremely raw with emotion). After filming, the assistant director
							told us we were “turning the cameras around for a crowd reaction
							shots”, which was the cue for me to get ready! My heart jumped as
							I went upstairs to grab my mom, niece, and the ring. I ran back to
							set as Rosemary (our assistant director) was filming me. The rest
							was awesome chaos.
						</p>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Home;