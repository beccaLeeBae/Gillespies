import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Landing extends Component {
	render() {
		return (
			<div className="container-fluid landingPage">
			<div className="row h-100">
			<div className="col d-flex flex-column align-items-center justify-content-center">
			<p>Grace
			<br/>
			&amp;
			<br/>Damon</p>
			<p>10 &middot; 20 &middot; 2018</p>
			<Link to="/home"><button>Enter</button></Link>
			</div>
			<div className="col landingImg">
			</div>
			</div>
			</div>
			)
		// return (
		// 	<div className="container-fluid p-0 d-flex align-items-center justify-content-center landing-page">
		// 		<img
		// 			src="https://i.imgur.com/omyvkcT.jpg"
		// 			className="w-100"
		// 			id="landing-hero"
		// 		/>
		// 		<div id="landing-text">
		// 			<h1>Grace &amp; Damon</h1>
		// 			<p id="landing-date">10 &middot; 20 &middot; 2018</p>
		// 			<Link to="/home">
		// 				<button>Enter</button>
		// 			</Link>
		// 		</div>
		// 	</div>
		// );
	}
}

export default Landing;