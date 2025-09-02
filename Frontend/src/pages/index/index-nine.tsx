import React from 'react'

import bg from '../../assets/img/new-banner.jpg'

import Navbar from '../../components/navbar/navbar'
import ExplorePropertyOne from '../../components/explore-property-one'
import PropertySlider from '../../components/property-slider'
import SellPropertyOne from '../../components/sell-property-one'
import TeamOne from '../../components/team-one'
import ClientOne from '../../components/client-one'
import PricingOne from '../../components/Pricing'
import AppDownload from '../../components/app-download'
import FooterTop from '../../components/footer-top'
import Footer from '../../components/footer'
import FormTwo from '../../components/form-two'
import ScrollToTop from '../hooks/ScrollToTop'

export default function IndexNine() {
  return (
    <>
	<Navbar transparent={true}/>

	<div className="image-bottom hero-banner" style={{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat', backgroundColor:'#2540a2'}}data-overlay="7">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-9 col-md-11 col-sm-12">
					<div className="inner-banner-text text-center">
						<p className="lead-i">Amet consectetur adipisicing <span className="badge badge-success">New</span></p>
						<h2><span className="font-normal">Find Your</span> Perfect Place.</h2>
					</div>
					<FormTwo/>
				</div>
			</div>
		</div>
	</div>

	<section>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-7 col-md-10 text-center">
					<div className="sec-heading center">
						<h2>Explore Properties in Best Places</h2>
						<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
					</div>
				</div>
			</div>
			<ExplorePropertyOne/>
		</div>	
	</section>
	
	<hr className="opacity-25"></hr>

	<section>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-7 col-md-10 text-center">
					<div className="sec-heading center">
						<h2>Recent Property For Rent</h2>
						<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
					</div>
				</div>
			</div>
			<PropertySlider/>
		</div>
	</section>

	<section className="bg-light">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-7 col-md-10 text-center">
					<div className="sec-heading center">
						<h2>Featured Property For Sale</h2>
						<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
					</div>
				</div>
			</div>
			<SellPropertyOne border={false}/>
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 text-center mt-4">
					<a href="listings-list-with-sidebar.html" className="btn btn-primary px-lg-5 rounded">Browse More Properties</a>
				</div>
			</div>
		</div>		
	</section>

	<section>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-7 col-md-10 text-center">
					<div className="sec-heading center">
						<h2>Explore Featured Agents</h2>
						<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
					</div>
				</div>
			</div>
			<TeamOne/>
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
					<a href="listings-list-with-sidebar.html" className="btn btn-primary px-lg-5 rounded">Explore More Agents</a>
				</div>
			</div>
		</div>
	</section>
	<div className="clearfix"></div>

	<section className="gray-bg">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-7 col-md-10 text-center">
					<div className="sec-heading center">
						<h2>Good Reviews by Customers</h2>
						<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
					</div>
				</div>
			</div>
			<ClientOne/>
		</div>
	</section>

	<section>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-7 col-md-10 text-center">
					<div className="sec-heading center">
						<h2>See our packages</h2>
						<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
					</div>
				</div>
			</div>
			<PricingOne/>
		</div>	
	</section>

	<AppDownload/>

	<FooterTop bg="theme-bg"/>

	<Footer/>

	
    </>
  )
}
