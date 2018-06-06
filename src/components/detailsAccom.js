import React, { Component } from "react";
import "../App.css";

class DetailsAccom extends Component {
	render() {
		return (
			<div className="row d-flex flex-column justify-content-center align-items-center mb-5">
				<p className="section-header-p mt-5 ml-5 mr-5 mb-1">Accommodations</p>
				<p className="copy-p col-md-6 mb-5 pl-4 pr-4">
					For our out of town guests, we've blocked off a select number of rooms
					at the Staybridge Suites in Downtown Chattanooga (which is
					conveniently located a block away from the venue).
					<br />
					<small>
						<i>
							Please call and reference 'Kling/Gillespie Wedding' to receive a
							discount on your booking.
						</i>
					</small>
				</p>
				<div className="things-circle d-flex justify-content-center align-items-center rounded-circle">
					<i className="far fa-building" />
				</div>
				<p className="copy-header-p mt-4 pl-4 pr-4">Staybridge Suites</p>
				<p className="copy-p">
					1300 Carter St.
					<br />
					Chattanooga, TN 37402
					<br />
					423 &middot; 267 &middot; 0900
				</p>
				<a
					href="https://goo.gl/maps/udgf95BVeTK2"
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

export default DetailsAccom;