import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

const htmlContent = `<h1>TEST</h1>`;
// '<div id="rbg-connect"></div><script type="text/javascript">rbgOptions={retreatType: "Retreat", customer: "anandaashram", buttonColor: "", defaultRoute: ""}; !function(){function t(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://s3.amazonaws.com/rbgconnect.retreat.guru/public/rbg-connect.min.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}window.attachEvent?window.attachEvent("onload",t):window.addEventListener("load",t,!1)}();</script>';

export default class RG extends Component {
	render() {
		return (
			<ScrollView style={{ flex: 1 }}>
				<HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
			</ScrollView>
		);
	}
}
