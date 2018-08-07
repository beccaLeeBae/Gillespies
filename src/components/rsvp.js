import React, { Component } from "react";
import NavBar from "./nav";
import Footer from './footer';
import Placeholder from "./rsvpPlaceholder";
import Portal from './rsvpPortal';
import "../App.css";

class RSVP extends Component {
	render() {
		return (
			<div className="container-fluid">
				<NavBar />
				{this.props.rsvpReady ? <Portal changeInput={this.props.changeInput} sendRsvp={this.props.sendRsvp} admitText0={this.props.admitText0} admitText1={this.props.admitText1} admitNum={this.props.admitNum} changeAdmitNum={this.props.changeAdmitNum}/> : <Placeholder />}
				<Footer/>
			</div>
		);
	}
}

export default RSVP;