import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import "./Header.css";

class Header extends Component {
	render() {
		return (
			<div>
				<Jumbotron>
					<h1>Header</h1>
				</Jumbotron>
			</div>
		);
	}
}

export default Header;
