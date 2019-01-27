import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/landing";
import Home from "./components/home";
import Details from "./components/details";
import Registry from "./components/registry";
import RSVP from "./components/rsvp";
import LandingImg from "./assets/main.jpg";

import bridesmaidsList from './utilities/bridesmaids.json';
import groomsmenList from './utilities/groomsmen.json';
import thingsToDoList from './utilities/thingsToDo.json';
import carouselPhotosList from './utilities/carouselPhotos.json';
import axios from "axios";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "https://graceanddamon.herokuapp.com",
			rsvpReady: false,
			admitNum: 0,
			admitText0: "First Name",
			admitText1: "Last Name",
			inputs: {
				first_name: null,
				last_name: null,
				rsvp_status: false
			},
			rsvpSending: false,
			currentThings: "food",
			carouselPhotos: carouselPhotosList,
			bridesmaids: bridesmaidsList,
			groomsmen: groomsmenList,
			thingsToDo: thingsToDoList,
			thingsNav: [
				{
					name: "food",
					icon: "utensils"
				},
				{
					name: "drinks",
					icon: "glass-martini"
				},
				{
					name: "fun",
					icon: "ticket-alt"
				}
			]
		};
		this.changeInput = this.changeInput.bind(this);
		this.sendRsvp = this.sendRsvp.bind(this);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.renderParty = this.renderParty.bind(this);
		this.renderThings = this.renderThings.bind(this);
		this.toggleThings = this.toggleThings.bind(this);
		this.renderThingsNav = this.renderThingsNav.bind(this);
	}
	// Mouseover event to show baby photo of wedding party member
	handleMouseEnter(i, p) {
		p[i].hoverStatus = true;
		this.setState({ p });
	}
	// Mouseover event to return to current photo of wedding party member
	handleMouseLeave(i, p) {
		p[i].hoverStatus = false;
		this.setState({ p });
	}
	// Engagement photos carousel
	renderCarousel() {
		return this.state.carouselPhotos.map((photo, index) => {
			return (
				<div className="carousel-item" key={index}>
					<img className="d-block w-100" src={photo.src} alt="Grace & Damon" />
				</div>
			);
		});
	}
	// Render wedding party info
	renderParty(side) {
		let party = "";
		if (side === "gr") {
			party = this.state.groomsmen;
		} else {
			party = this.state.bridesmaids;
		}

		return party.map((p, index) => {
			const i = index;
			return (
				<div key={index} className="col-md-6 col-lg-4 p-4">
					<img
						src={party[i].hoverStatus ? party[i].babyImg : party[i].currentImg}
						className="bridal-party rounded-circle mb-2"
						alt={p.name}
						onMouseEnter={() => this.handleMouseEnter(i, party)}
						onMouseLeave={() => this.handleMouseLeave(i, party)}
					/>
					<p className="copy-header-p m-0">{p.name}</p>
					<p className="copy-p">{p.title}</p>
					<p className="copy-p mb-5 pl-4 pr-4">{p.bio}</p>
				</div>
			);
		});
	}
	// Toggle things to do (click event to set item as the current tab)
	toggleThings(type) {
		this.setState({ currentThings: type });
	}
	// Render things to do nav bar
	// Highlight current type
	renderThingsNav() {
		return this.state.thingsNav.map((thing, index) => {
			const icon = `fas fa-${thing.icon}`;
			const t = thing.name;
			return (
				<button
					key={index}
					className={
						this.state.currentThings === t
							? "thing-button active-thing mr-2 p-2"
							: "thing-button mr-2 p-2"
					}
					onClick={() => this.toggleThings(t)}
				>
					<i className={icon} /> {t}
				</button>
			);
		});
	}
	// Render things to do
	renderThings(type) {
		return this.state.thingsToDo.map((place, index) => {
			if (place.type === type) {
				return (
					<div className="col-sm-6 col-md-4" key={index}>
						<div className="card m-3">
							<div className="card-body">
								<h5 className="card-title copy-header-p">{place.name}</h5>
								<h6 className="copy-p mb-2 small text-muted">{place.desc}</h6>
								<br />
								<p className="copy-p">
									{place.street}
									<br />Chattanooga, TN {place.zip}
								</p>
								<a href={place.url} rel="noopener noreferrer" target="_blank">
									Visit
								</a>
							</div>
						</div>
					</div>
				);
			} else {
				return null;
			}
		});
	}
	// Change numbers of guests
	changeAdmitNum(num) {
		if (num === 1) {
			this.setState({ admitNum: num });
		} else if (num === 2) {
			this.setState({
				admitNum: num,
				admitText0: "Guest 1",
				admitText1: "Guest 2"
			});
		} else {
			this.setState({
				admitNum: num,
				admitText0: "All First Names",
				admitText1: "Last Name"
			});
		}
	}
	// Grab RSVP input data
	changeInput(e, input) {
		const val = e.target.value;
		this.setState(prev => {
			prev.inputs[input] = val;
			return prev;
		});
	}
	// Post RSVP input data
	sendRsvp(e) {
		e.preventDefault();

		let alertMsg;

		if (this.state.inputs.rsvp_status === "ATTENDING") {
			alertMsg =
				"Your RSVP has been successfully recorded. We look forward to sharing our special day with you on October 20th!\n\nGrace & Damon";
		} else {
			alertMsg =
				"Thank you for confirming that you can't attend, we're sorry you won't be able to make it to our special day. We hope to see you very soon!\n\nGrace & Damon";
		}

		this.setState({ rsvpSending: true });

		axios
			.post(`${this.state.url}/guests`, this.state.inputs)
			.then(res => {
				alert(alertMsg);
				this.setState({ admitNum: 0, rsvpSending: false });
			})
			.catch(err => {
				alert(
					"We've encountered an error while trying to record your RSVP. Please try again later or send an email to admin@graceanddamon.com."
				);
				console.log("Error: ", err);
			});
	}
	// Render routes for landing, home, details, RSVP
	render() {
		return (
			<Switch>
				<Route
					exact
					path="/"
					render={props => <Landing {...props} landingImg={LandingImg} />}
				/>
				<Route
					path="/home"
					render={props => (
						<Home
							{...props}
							renderCarousel={this.renderCarousel.bind(this)}
						/>
					)}
				/>
				<Route
					path="/details"
					render={props => (
						<Details
							renderParty={this.renderParty}
							renderThings={this.renderThings}
							renderThingsNav={this.renderThingsNav}
							currentThings={this.state.currentThings}
							{...props}
						/>
					)}
				/>
				<Route
					path="/rsvp"
					render={props => (
						<RSVP
							{...props}
							rsvpReady={this.state.rsvpReady}
							admitNum={this.state.admitNum}
							admitText0={this.state.admitText0}
							admitText1={this.state.admitText1}
							changeAdmitNum={this.changeAdmitNum.bind(this)}
							changeInput={(e, input) => this.changeInput(e, input)}
							sendRsvp={e => {
								this.sendRsvp(e);
							}}
							rsvpSending={this.state.rsvpSending}
						/>
					)}
				/>
				<Route path="/registry" render={props => <Registry />} />
			</Switch>
		);
	}
}

export default App;