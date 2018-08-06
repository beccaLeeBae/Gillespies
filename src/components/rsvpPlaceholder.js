import React, { Component } from "react";
import "../App.css";

class RsvpPlaceholder extends Component {
	render() {
		return (
			<div className="row rsvp-content h-75 d-flex flex-column justify-content-start align-items-center">
				<p className="copy-header-p">Coming in August.</p>
				<div className="things-circle d-flex justify-content-center align-items-center rounded-circle">
					<i className="far fa-envelope" />
				</div>
			</div>
		);
	}
}

export default RsvpPlaceholder;