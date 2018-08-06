import React, { Component } from "react";
import NavBar from "./nav";
import Placeholder from "./rsvpPlaceholder";
import Portal from './rsvpPortal';
import "../App.css";

class RSVP extends Component {
	render() {
		return (
			<div className="container-fluid">
				<NavBar />
				{this.props.rsvpReady ? <Portal changeInput={this.props.changeInput} sendRsvp={this.props.sendRsvp} admitText0={this.props.admitText0} admitText1={this.props.admitText1} admitNum={this.props.admitNum} changeAdmitNum={this.props.changeAdmitNum}/> : <Placeholder />}
				<footer className="nav navbar-fixed-bottom d-flex flex-column align-items-center justify-content-center mt-2">
					<p className="copy-p m-0">
						Made with &hearts; by{" "}
						<a
							href="http://www.beccaleebae.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Becca Lee Bae
						</a>
					</p>
					<p className="copy-p">
						Copyright &copy; 2018 Grace Kling & Damon Gillespie. All Rights
						Reserved.
					</p>
				</footer>
			</div>
		);
	}
}

export default RSVP;