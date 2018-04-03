import React, { Component } from "react";
import VenueImg from "../assets/turnbull.jpg";
import VenuePlaceHolder from '../assets/turnbullSmall.jpg';
import Dwell from "../assets/dwell.jpg";
import ProgressiveImage from "react-progressive-image";
import NavBar from "./nav";
import "../App.css";

class Details extends Component {
	render() {
		return (
			<div className="container-fluid">
				<NavBar />
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
						Please join us for the ceremony on October 20th, followed
						by a cocktail hour and reception.
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
				<hr />
				<div className="row d-flex flex-column justify-content-center align-items-center mb-5">
					<p className="section-header-p m-5">Accommodations</p>
					<p className="copy-p pl-4 pr-4">
						For our out of town guests, a select number of rooms have been blocked off at The Dwell Hotel.
						<br />
						<small><i>
							Please call and reference 'Kling/Gillespie Wedding' to receive a
							discount on your booking.
						</i></small>
					</p>
					<br />
					<img src={Dwell} alt="The Dwell Hotel" className="accom m-2" />
					<p className="copy-header-p">The Dwell Hotel</p>
					<p className="copy-p">
						120 E. 10th St.
						<br />
						Chattanooga, TN 37402
						<br />
						432 &middot; 267 &middot; 7866
					</p>
					<a
						href="http://www.thedwellhotel.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Book Online
					</a>
				</div>
				<hr />
				<div className="row d-flex flex-column justify-content-center align-items-center mb-5">
					<p className="section-header-p m-5">Things To Do in Chattanooga</p>
					<div className="row d-flex flex-column justify-content-center align-items-center mb-5">
						<div className="things-circle d-flex justify-content-center align-items-center rounded-circle">
							<i className="fas fa-utensils" />
						</div>
						<a href="https://urbanstack.com/">
							<p className="copy-header-p things-to-do mt-4">Urban Stack</p>
						</a>
						<p className="copy-p">
							<small>Burger Joint</small>
							<br />
							<br />
							12 W. 13th St.
							<br />
							Chattanooga, TN 37402
						</p>
					</div>
					<div className="row d-flex flex-column justify-content-center align-items-center mb-5">
						<div className="things-circle d-flex justify-content-center align-items-center rounded-circle">
							<i className="fas fa-utensils" />
						</div>
						<a href="https://publichousechattanooga.com">
							<p className="copy-header-p things-to-do mt-4">
								Public House Chattanooga
							</p>
						</a>
						<p className="copy-p">
							<small>American Restaurant</small>
							<br />
							<br />
							1110 Market St.
							<br />
							Chattanooga, TN 37402
						</p>
					</div>
					<div className="row d-flex flex-column justify-content-center align-items-center mb-5">
						<div className="things-circle d-flex justify-content-center align-items-center rounded-circle">
							<i className="fas fa-utensils" />
						</div>
						<a href="https://www.eatatgooddog.com/">
							<p className="copy-header-p things-to-do mt-4">Good Dog</p>
						</a>
						<p className="copy-p">
							<small>Hot Dog Joint</small>
							<br />
							<br />
							34 Frazier Ave.
							<br />
							Chattanooga, TN 37405
						</p>
					</div>
					<div className="row d-flex flex-column justify-content-center align-items-center mb-5">
						<div className="things-circle d-flex justify-content-center align-items-center rounded-circle">
							<i className="fas fa-utensils" />
						</div>
						<a
							href="https://www.yelp.com/biz/sluggos-vegetarian-cafe-chattanooga"
							rel="noopener noreferrer"
							target="_blank"
						>
							<p className="copy-header-p things-to-do mt-4">
								Sluggo's Vegetarian Cafe
							</p>
						</a>
						<p className="copy-p">
							<small>Vegetarian/Vegan Restaurant</small>
							<br />
							<br />
							505 Cherokee Blvd.
							<br />
							Chattanooga, TN 37405
						</p>
					</div>
					<div className="row d-flex flex-column justify-content-center align-items-center mb-5">
						<div className="things-circle d-flex justify-content-center align-items-center rounded-circle">
							<i className="fas fa-glass-martini" />
						</div>
						<a
							href="http://www.easybistro.com/"
							rel="noopener noreferrer"
							target="_blank"
						>
							<p className="copy-header-p things-to-do mt-4">
								Easy Bistro & Bar
							</p>
						</a>
						<p className="copy-p">
							<small>Cocktail Bar/Southern Restaurant</small>
							<br />
							<br />
							203 Broad St.
							<br />
							Chattanooga, TN 37402
						</p>
					</div>
					<div className="row d-flex flex-column justify-content-center align-items-center mb-5">
						<div className="things-circle d-flex justify-content-center align-items-center rounded-circle">
							<i className="fas fa-glass-martini" />
						</div>
						<a
							href="http://www.flyingsquirrelbar.com/phone/cocktails.html"
							rel="noopener noreferrer"
							target="_blank"
						>
							<p className="copy-header-p things-to-do mt-4">Flying Squirrel</p>
						</a>
						<p className="copy-p">
							<small>Cocktail Bar</small>
							<br />
							<br />
							55 Johnson St.
							<br />
							Chattanooga, TN 37408
						</p>
					</div>
				</div>
				<footer className="nav navbar-fixed-bottom d-flex flex-column align-items center justify-content-center">
					<p className="copy-p m-0">
						Made with &hearts; by{" "}
						<a
							href="http://www.beccaleebae.com"
							rel="noopener noreferrer"
							target="_blank"
						>
							Becca Lee Bae
						</a>
					</p>
					<p className="copy-p">Copyright &copy; 2018 Grace Kling & Damon Gillespie. All Rights Reserved.</p>
				</footer>
			</div>
		);
	}
}

export default Details;