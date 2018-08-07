import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./landing";
import Home from "./home";
import Details from "./details";
import Registry from './registry';
import RSVP from "./rsvp";
import LandingImg from "../assets/main.jpg";
import moment from "moment";
import axios from "axios";
import "../App.css";

class Router extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "http://localhost:8080",
			today: moment(),
			daysUntil: null,
			rsvpReady: false,
			admitNum: 0,
			admitText0: "First Name",
			admitText1: "Last Name",
			inputs: {
				first_name: null,
				last_name: null,
				rsvp_status: false
			},
			currentThings: "food",
			carouselPhotos: [
				{ src: "https://i.imgur.com/PX6Iq0E.jpg" },
				{ src: "https://i.imgur.com/OhM7cgS.jpg" },
				{ src: "https://i.imgur.com/0n4frhz.jpg" },
				{ src: "https://i.imgur.com/6LMgCBy.jpg" },
				{ src: "https://i.imgur.com/nIGNoZK.jpg" },
				{ src: "https://i.imgur.com/6ANkGFS.jpg" },
				{ src: "https://i.imgur.com/h4DV91W.jpg" },
				{ src: "https://i.imgur.com/w07bJI6.jpg" },
				{ src: "https://i.imgur.com/9ZE4qzQ.jpg" },
				{ src: "https://i.imgur.com/7ZF4pF7.jpg" },
				{ src: "https://i.imgur.com/8I9eMwk.jpg" },
				{ src: "https://i.imgur.com/awrjCia.jpg" },
				{ src: "https://i.imgur.com/HuWHVW6.jpg" },
				{ src: "https://i.imgur.com/qfjqAa8.jpg" },
				{ src: "https://i.imgur.com/sTJQdfq.jpg" },
				{ src: "https://i.imgur.com/AKzl4ZN.jpg" },
				{ src: "https://i.imgur.com/FcC0eep.jpg" },
				{ src: "https://i.imgur.com/SbWMXOu.jpg" },
				{ src: "https://i.imgur.com/OyNcLBL.jpg" },
				{ src: "https://i.imgur.com/sVA6PgJ.jpg" },
				{ src: "https://i.imgur.com/3MafStF.jpg" },
				{ src: "https://i.imgur.com/dcYzLJQ.jpg" },
				{ src: "https://i.imgur.com/CDQiIOU.jpg" },
				{ src: "https://i.imgur.com/OxWXxO3.jpg" },
				{ src: "https://i.imgur.com/uAbP2J6.jpg" },
				{ src: "https://i.imgur.com/XDlI0sx.jpg" },
				{ src: "https://i.imgur.com/W3SBYpT.jpg" },
				{ src: "https://i.imgur.com/wGhVN4t.jpg" },
				{ src: "https://i.imgur.com/zmbzmw2.jpg" },
				{ src: "https://i.imgur.com/Gp6IlEX.jpg" },
				{ src: "https://i.imgur.com/BtfpnlN.jpg" },
				{ src: "https://i.imgur.com/cARUGjP.jpg" },
				{ src: "https://i.imgur.com/4mynReO.jpg" },
				{ src: "https://i.imgur.com/Z5oLsRE.jpg" },
				{ src: "https://i.imgur.com/mqLRlaO.jpg" },
				{ src: "https://i.imgur.com/w52r4Ob.jpg" },
				{ src: "https://i.imgur.com/omyvkcT.jpg" },
				{ src: "https://i.imgur.com/PeLqGNg.jpg" }
			],
			bridesmaids: [
				{
					name: "Becca Bae",
					title: "Maid of Honor",
					hoverStatus: false,
					currentImg: "https://i.imgur.com/cbseNi1.png",
					babyImg: "https://i.imgur.com/Xr2N323.png",
					bio:
						"Grace and Becca started off folding tee-shirts together and even after working 40+ hour weeks, they still found time for tapas and conversation. These two are sisters separated at birth. She is her rock and truly her bae."
				},
				{
					name: "Molly Clark",
					title: "Bridesmaid",
					hoverStatus: false,
					currentImg: "https://i.imgur.com/EioF2Hh.png",
					babyImg: "https://i.imgur.com/KbY2qoY.png",
					bio:
						"Molly was the bride's first real friend. They shared Wayne's World, tea parties, and now they're getting married a month apart! They couldn't have planned this in a Limited Too journal if they tried."
				},
				{
					name: "Georgina DiFrancesco",
					title: "Bridesmaid",
					hoverStatus: false,
					currentImg: "https://i.imgur.com/XClLQvt.png",
					babyImg: "https://i.imgur.com/1dfVr8C.png",
					bio:
						"Georgie met the bride in an acting class. Commenting on each other's accents and fondness for Jersey, the two became fast friends. They couldn't stop talking in class and now they share lattes and monologues."
				},
				{
					name: "Cara Zelaya",
					title: "Bridesmaid",
					hoverStatus: false,
					currentImg: "https://i.imgur.com/oyVImw6.png",
					babyImg: "https://i.imgur.com/uSswOew.png",
					bio:
						"Cara has been the bride's producing and political council ever since they met in the Bronx. They enjoy sharing cheese and philosophy. Grace and Cara are if they remade 'Twins' starring Schwarzeneggar and Devito."
				},
				{
					name: "Dany Vasquez",
					title: "Bridesmaid",
					hoverStatus: false,
					currentImg: "https://i.imgur.com/xnZgDrG.png",
					babyImg: "https://i.imgur.com/uCZYW2K.png",
					bio: `Dany and the bride have been friends ever since she said "Do you want to attend this movie premiere, and also my birthday in Miami" upon their first meeting.`
				},
				{
					name: "Valerie Payne",
					title: "Bridesmaid",
					hoverStatus: false,
					currentImg: "https://i.imgur.com/CuW7dKO.png",
					babyImg: "https://i.imgur.com/6BXgRmc.png",
					bio:
						"Valerie is her number one lady cuzzo. She is a fellow Georgia peach. As they've gotten older they've become even closer and are even harder to tell apart."
				},
				{
					name: "Olivia Gonzalez",
					title: "Junior Bridesmaid",
					hoverStatus: false,
					currentImg: "https://i.imgur.com/yvgeCWL.png",
					babyImg: "https://i.imgur.com/wKSzuj3.png",
					bio:
						"O met the bride when she was only 7 years old and was called her mini me until she outgrew her! Grace still considers her a little sister, and is sorry to her mother she made her such a cheese snob."
				}
			],
			groomsmen: [
				{
					name: "Bobby Burkich",
					title: "Best Man",
					hoverStatus: false,
					currentImg: "https://i.imgur.com/5un7766.png",
					babyImg: "https://i.imgur.com/nwO5fnZ.png",
					bio:
						"Bobby has been Damon's best bro since puberty: they're truly inseparable. Even being on different coasts doesn't keep them from playing Xbox and running lines for scenes together."
				},
				{
					name: "Chris Burkich",
					title: "Groomsman",
					hoverStatus: false,
					currentImg: "https://i.imgur.com/oK9xFC9.png",
					babyImg: "https://i.imgur.com/8gFBe5U.png",
					bio:
						"The best man's little brother doesn't fall far from the tree. These guys have been practically family ever since they all attended the Chattanooga Center for the Arts."
				},
				{
					name: "Davis Wesson",
					title: "Groomsman",
					hoverStatus: false,
					currentImg: "https://i.imgur.com/YD5mLD6.png",
					babyImg: "https://i.imgur.com/dyjO2wb.png",
					bio:
						"These two have been rapping and hanging for years. They grew up in music and haven't stopped making each other laugh."
				},
				{
					name: "David Couter",
					title: "Groomsman",
					hoverStatus: false,
					currentImg: "https://i.imgur.com/T4RXQP1.png",
					babyImg: "https://i.imgur.com/iknQ4cT.png",
					bio:
						"David and Damon have been friends and enemies ever since they learned how to dance, tap, and act together. David is the Genie to his Aladdin, the Tarzan to his Turk."
				},
				{
					name: "Rowdy Zeisig",
					title: "Groomsman",
					hoverStatus: false,
					currentImg: "https://i.imgur.com/POjqO3s.png",
					babyImg: "https://i.imgur.com/iaCor71.jpg",
					bio:
						"The bride's little bro and the groom have been brothers since they first met five years ago. They enjoy memes and nerding out."
				},
				{
					name: "Steven Hullander",
					title: "Groomsman",
					hoverStatus: false,
					currentImg: "https://i.imgur.com/QWgZYue.png",
					babyImg: "https://i.imgur.com/85zVoho.png",
					bio: `Damon's cousin "Boog" has been like a little brother since he was born. They learned how to jump off roofs together and raise hell for their entire family.`
				},
				{
					name: "Benjamin Gonzalez",
					title: "Junior Groomsman",
					hoverStatus: false,
					currentImg: "https://i.imgur.com/uRon8s4.png",
					babyImg: "https://i.imgur.com/68EbcBP.png",
					bio:
						"Ben met the bride when he was 5 years old and has been her other little brother ever since. Ben is amazing in a suit and rivals Damon as a Michael Jackson impersonator."
				},
				{
					name: "Joseph Ferrarelli",
					title: "Officiant",
					hoverStatus: false,
					currentImg: "https://i.imgur.com/n5uHile.png",
					babyImg: "https://i.imgur.com/LuslkZI.png",
					bio:
						"Joe Ferrarelli was an accidental roommate of the bride and groom. The trio's love of discussing film and theatre blossomed, so much so that Grace and Damon they fought over him being on the groom's or bride's side of the wedding party. In the end, they decided to ask him to marry them instead."
				}
			],
			thingsToDo: [
				{
					name: "Urban Stack",
					desc: "Burger Joint",
					url: "https://urbanstack.com/",
					street: "12 W.13th St.",
					zip: 37402,
					type: "food"
				},
				{
					name: "Public House Chattanooga",
					desc: "American Restaurant",
					url: "https://publichousechattanooga.com",
					street: "1110 Market St.",
					zip: 37402,
					type: "food"
				},
				{
					name: "Good Dog",
					desc: "Hot Dog Joint",
					url: "https://www.eatatgooddog.com",
					street: "34 Frazier Ave.",
					zip: 37405,
					type: "food"
				},
				{
					name: "Easy Bistro & Bar",
					desc: "Cocktail Bar",
					url: "http://www.easybistro.com/",
					street: "203 Broad St.",
					zip: 37402,
					type: "drinks"
				},
				{
					name: "Flying Squirrel",
					desc: "Cocktail Bar",
					url: "http://www.flyingsquirrelbar.com/phone/cocktails.html",
					street: "55 Johnson St.",
					zip: 37408,
					type: "drinks"
				},
				{
					name: "Southside Social",
					desc: "Pub & Bowling Alley",
					url: "http://thesouthsidesocial.com/",
					street: "1818 Chestnut St.",
					zip: 37408,
					type: "drinks"
				},
				{
					name: "Hunter Museum",
					desc: "American Art Gallery",
					url: "http://www.huntermuseum.org/",
					street: "10 Bluff View St.",
					zip: 37403,
					type: "fun"
				},
				{
					name: "Tennessee Aquarium",
					desc: "Aquarium",
					url: "https://www.tnaqua.org/",
					street: "1 Broad St.",
					zip: 37402,
					type: "fun"
				},
				{
					name: "Coolidge Park",
					desc: "Park",
					url: "https://www.chattanoogafun.com/listing/coolidge-park/1271/",
					street: "150 River St.",
					zip: 37405,
					type: "fun"
				}
			],
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
	// Set wedding date countdown
	componentDidMount() {
		var weddingDate = moment("2018-10-21");
		var days = weddingDate.diff(this.state.today, "days");
		this.setState({ daysUntil: days });
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
		axios
			.post(`${this.state.url}/guests`, this.state.inputs)
			.then(res => {
				alert(
					"Your RSVP has been successfully recorded. We look forward to sharing our special day with you on October 20th!\n\nGrace & Damon"
				);
				this.setState({ admitNum: 0 });
				window.history.back();
			})
			.catch(err => {
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
							daysUntil={this.state.daysUntil}
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
						/>
					)}
				/>
				<Route path="/registry"
				render={props => (<Registry/>)}/>
			</Switch>
		);
	}
}

export default Router;