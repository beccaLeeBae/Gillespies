import React, { Component } from "react";
import "../App.css";

class DetailsThings extends Component {
	render() {
		return (
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
						<p className="copy-header-p things-to-do mt-4">Easy Bistro & Bar</p>
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
		);
	}
}

export default DetailsThings;