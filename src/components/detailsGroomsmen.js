import React, { Component } from "react";
import "../App.css";

class DetailsGroomsmen extends Component {
	render() {
		return (
			<div className="row d-flex flex-column justify-content-center align-items-center">
				<p className="section-header-p m-5">The Groomsmen</p>
				<div className="row w-100">
				{this.props.renderGroomsmen()}
				</div>
			</div>
		);
	}
}

export default DetailsGroomsmen;