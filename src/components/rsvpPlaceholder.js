import React, { Component } from "react";
import "../App.css";

class RsvpPlaceholder extends Component {
	render() {
		return (
			<div className="row rsvp-content h-75 d-flex flex-column justify-content-center align-items-center">
				<div className="things-circle d-flex justify-content-center align-items-center rounded-circle">
					<i className="far fa-envelope" />
				</div>
				<p className="mt-4 copy-p">
					The RSVP portal is closed as of August 31, 2018.
				</p>
				<p className="copy-p ml-2 mr-2">
					Due to obligations to our venue/caterer, we are unable to
					accommodate further guests.
				</p>
			</div>
		);
	}
}

export default RsvpPlaceholder;