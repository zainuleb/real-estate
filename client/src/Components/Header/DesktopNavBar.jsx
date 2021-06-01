import React from "react";
import logo from "../../images/logo.png";
import "../../StyleSheet/DesktopNav.css";

const DesktopNavBar = () => {
	return (
		<div className="DesktopNav_container">
			<div className="DesktopNavLeft_container">
				<img className="logo" src={logo} alt="logo.png" />
			</div>
			<div className="DesktopNavRight_container">
				<h3>To Rent</h3>
				<h3>Contact Us</h3>
			</div>
		</div>
	);
};

export default DesktopNavBar;
