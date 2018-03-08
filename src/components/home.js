import React, { Component } from "react";
import Main from '../assets/engP-45.jpg';
import NavBar from "./nav";
import "../App.css";

class Home extends Component {
	carouselMapPhotos(){
		return this.props.carouselPhotos.map(photo => {
			return (
							<div className="carousel-item" key={Math.random()}>
								<img
									className="d-block"
									src={photo.src}
									alt="Grace & Damon"
								/>
							</div>
				)
		})
	}
	render() {
		return (
			<div className="container-fluid">
				<NavBar />
				<div className="row d-flex flex-column justify-content-center align-items-center mb-1">
					<p className="section-header-p mt-5">
						Introducing Mr. & Mrs. Gillespie
					</p>
					{this.props.daysUntil > 0 && (
						<p className="copy-p mb-5">in {this.props.daysUntil} days</p>
					)}
					{this.props.daysUntil === 0 && <p className="copy-p mb-5">today!</p>}
					{this.props.daysUntil < 0 && (
						<p className="copy-p mb-5">est. Oct. 20, 2018</p>
					)}
				</div>
				<div className="row d-flex flex-column justify-content-center align-items-center mb-1">
					<div
						id="carouselExampleIndicators"
						className="carousel slide"
						data-ride="carousel"
					>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img
									className="d-block w-100"
									src={Main}
									alt="Grace & Damon"
								/>
							</div>
							{this.carouselMapPhotos()}
						</div>
						<a
							className="carousel-control-prev"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
				<div className="row d-flex flex-column justify-content-center align-items-center mb-1">
					<p className="section-header-p mt-5">Meet The Couple</p>
				</div>
				<div className="row d-flex justify-content-center align-items-center mb-1">
					<div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-5">
						<p className="copy-header-p">Grace Kling</p>
						<p className="copy-p">
							Dr. Tanaka joined the department as an Assistant Professor in
							2017. Before moving to UT, he held a postdoctoral researcher
							position at KTH Royal Institute of Technology, Sweden. From 2012
							to 2015, he was a postdoctoral associate at Massachusetts
							Institute of Technology (MIT), USA. Dr. Tanaka received his M.S.
							and Ph.D. degrees in Aerospace Engineering from the University of
							Illinois at Urbana-Champaign (UIUC), USA, in 2009 and 2012,
							respectively. Prior to his graduate studies, he received his B.S.
							degree in Aerospace Engineering from the University of Tokyo,
							Japan.
						</p>
					</div>
					<div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-5">
						<p className="copy-header-p">Damon Gillespie</p>
						<p className="copy-p">
							Dr. Tanaka joined the department as an Assistant Professor in
							2017. Before moving to UT, he held a postdoctoral researcher
							position at KTH Royal Institute of Technology, Sweden. From 2012
							to 2015, he was a postdoctoral associate at Massachusetts
							Institute of Technology (MIT), USA. Dr. Tanaka received his M.S.
							and Ph.D. degrees in Aerospace Engineering from the University of
							Illinois at Urbana-Champaign (UIUC), USA, in 2009 and 2012,
							respectively. Prior to his graduate studies, he received his B.S.
							degree in Aerospace Engineering from the University of Tokyo,
							Japan.
						</p>
					</div>
				</div>
				<footer className="nav navbar-fixed-bottom justify-content-center">
					<p className="copy-p">
						Made with &hearts; by{" "}
						<a
							href="http://www.beccaleebae.com"
							rel="noopener noreferrer"
							target="_blank"
						>
							Becca Lee Bae
						</a>
					</p>
				</footer>
			</div>
		);
	}
}

export default Home;