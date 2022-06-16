import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<Menu inverted>
			<Container>
				<Link to="/">
				  <Menu.Item name="star wars API" />
				</Link>
				<Link to="/People">
					<Menu.Item name="people" />
				</Link>
				<Link to="/Planets">
					<Menu.Item name="planets" />
				</Link>
			</Container>
		</Menu>
	);
};

export default Navbar;