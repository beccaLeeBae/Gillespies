import React, { Component } from "react";
import VenueImg from "../assets/turnbull.jpg";
import VenuePlaceHolder from "../assets/turnbullSmall.jpg";
import ProgressiveImage from "react-progressive-image";
import "../App.css";

class DetailsVenue extends Component {
	render() {
		return (
			<div className="row d-flex flex-column justify-content-center align-items-center">
				<p className="section-header-p m-5">The Ceremony</p>

				<ProgressiveImage src={VenueImg} placeholder={VenuePlaceHolder}>
					{(src, loading) => (
						<img
							style={{ opacity: loading ? 0.5 : 1 }}
							src={src}
							alt=""
							className="w-75 mb-5"
						/>
					)}
				</ProgressiveImage>
				<p className="copy-p mb-5 pl-4 pr-4">
					Please join us for the ceremony on October 20th, followed by a
					cocktail hour and reception.
				</p>
				<p className="copy-header-p">The Turnbull Building</p>
				<p className="copy-p">
					1400 Fort St.
					<br />
					Chattanooga, TN 37402
				</p>
				<a
					href="https://goo.gl/maps/eNkeqcSPsLy"
					target="_blank"
					rel="noopener noreferrer"
					className="mb-5"
				>
					View On Map
				</a>
			</div>
		);
	}
}

export default DetailsVenue;