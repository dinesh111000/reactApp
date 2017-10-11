import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';

class App extends Component {
    constructor(){
		super();
		this.state ={};
	}
	componentWillMount(){
	   
		
	}
	componentDidMount(){
		 var response = require('./words.json');
		var responseData = response.words;
		var arrayResponse = responseData.filter(function(responseData){
			return responseData.ratio >= 0
		});
		this.setState({
				movies : arrayResponse
			});
	}
	updateSearch(){
		var search = this.refs.query.value;
		var response = require('./words.json');
		var responseData = response.words;
		
		var arrayResponse = responseData.filter(function(responseData){
			return responseData.ratio >= 0
		});
		
		arrayResponse = arrayResponse.filter(function(responseData){
			return responseData.word.indexOf(search) !== -1
		});
		
		this.setState({
				movies : arrayResponse
			});
	}
    render() {
		var movies = _.map(this.state.movies,(movies)=>{
			return <div className="col-md-4">
								<div className="a">
									<a href={"#" + movies.id} className="open-popup-link">
										<img src={"http://appsculture.com/vocab/images/"+ movies.id +".png"}  className="img-responsive" alt="Responsive image"/>
										<div className="img-hover hand-parts">
											<div className="c-table">
												<div className="ct-cell">
													<h3 className="img-title">{movies.word}</h3>
												</div>
											</div>
										</div>
									</a>
								</div>
								<div id={movies.id} className="white-popup mfp-hide">
									<div className="container-fluid">
										<div className="row">
											<div className="pop-up-color">
												<div className="col-md-8 p-l-0 p-r-0">
													<img src={"http://appsculture.com/vocab/images/"+ movies.id +".png"} className="img-responsive" alt="Responsive image"/>
												</div>
												<div className="col-md-4">
													<div>
														<h2 className="popup-head">{movies.word}</h2>
													</div>
													<div>
														<p className="popup-parapraph">
														{movies.meaning}
														</p>
													</div> 
												</div>
											</div>
										</div>
									</div>
								</div>
							</div> 
		});
		console.log('movies render ', movies);
		
			return (
			<div className="main-body">
				<div className="container">
					<div className="row">
						<div className="col-md-9">
							<input type="text" className="form-control gt" ref="query" onChange={(e)=>{this.updateSearch();}} placeholder="Search"/>
						</div>
					</div>
					<div className="tiles">
						 
						<div className="row">
						
						{movies}
							
						</div>
					</div>
				</div>
			</div>
			); 
    }
}

export default App;