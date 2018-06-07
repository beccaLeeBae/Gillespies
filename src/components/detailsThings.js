import React, { Component } from "react";
import "../App.css";

class DetailsThings extends Component {
	render() {
		return (
			<div className="row d-flex flex-column justify-content-center align-items-center mb-5">
				<p className="section-header-p mt-5 mr-5 ml-5 mb-3">
					{this.props.title}
				</p>
				<div className="row-100 d-flex flex-row mb-3">
					{this.props.renderThingsNav()}
				</div>
				<div className="row w-100 things-row">
					{this.props.renderThings(this.props.currentThings)}
				</div>
			</div>
		);
	}
}

export default DetailsThings;