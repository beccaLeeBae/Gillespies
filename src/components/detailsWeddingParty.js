import React, { Component } from "react";
import "../App.css";

class DetailsWeddingParty extends Component {
	render() {
		return (
			<div className="row d-flex flex-column justify-content-center align-items-center">
				<p className="section-header-p m-5">The {this.props.title}</p>
				<div className="row w-100">
				{this.props.renderParty(this.props.side)}
				</div>
			</div>
		);
	}
}

export default DetailsWeddingParty;