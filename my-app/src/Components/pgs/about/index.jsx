import React, { useEffect, useRef } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';

// Styles
import localStyles from './style.module.css';
import globalStyles from '../global.module.css'
import underline from '../resources/imgs/heading_underline.png';

const About = (props) => {
	const location = useLocation();
	const match = useRouteMatch();
	let aboutRef = useRef(null);

	useEffect(() => {
		if (location.state)
			if (match.isExact && location.state.scrollTo)
				aboutRef.current.scrollIntoView({
					behavior: "smooth"
				});
	});
	const styles = {
		height:"25rem"
	}
	return (
		<div ref={aboutRef} className={ globalStyles.section } id="about" style={styles}>
			<h2 className={ localStyles.aboutHeader }>About</h2>
			<img src={ underline } alt="underline" className={ globalStyles.headerUnderline } />
			<section className={ localStyles.aboutSection }>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel lacus nec magna gravida pellentesque 
					in sed ligula. Nullam tincidunt lectus ac arcu laoreet elementum. Mauris tempus accumsan odio eu euismod. 
					Vivamus lorem ligula, porta eu lobortis mollis, euismod in nulla. Maecenas convallis lectus tellus, sed 
					suscipit diam sollicitudin id. Maecenas iaculis pellentesque leo, id imperdiet enim vehicula et. Maecenas 
					sed velit ut elit dapibus dignissim. Nam finibus lacinia magna ac gravida. Nulla non convallis leo. Nunc 
					non rutrum felis, ac accumsan nibh. Nullam aliquam mi et dignissim porta. Suspendisse efficitur purus ex, 
					a consequat lectus rhoncus quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
					cubilia curae; Sed sodales metus eu mi viverra, ac maximus enim tristique. In hac habitasse platea dictumst.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel lacus nec magna gravida pellentesque 
					in sed ligula. Nullam tincidunt lectus ac arcu laoreet elementum. Mauris tempus accumsan odio eu euismod. 
					Vivamus lorem ligula, porta eu lobortis mollis, euismod in nulla. Maecenas convallis lectus tellus, sed 
					suscipit diam sollicitudin id. Maecenas iaculis pellentesque leo, id imperdiet enim vehicula et. Maecenas 
					sed velit ut elit dapibus dignissim. Nam finibus lacinia magna ac gravida. Nulla non convallis leo. Nunc 
					non rutrum felis, ac accumsan nibh. Nullam aliquam mi et dignissim porta. Suspendisse efficitur purus ex, 
					a consequat lectus rhoncus quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
					cubilia curae; Sed sodales metus eu mi viverra, ac maximus enim tristique. In hac habitasse platea dictumst.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel lacus nec magna gravida pellentesque 
					in sed ligula. Nullam tincidunt lectus ac arcu laoreet elementum. Mauris tempus accumsan odio eu euismod. 
					Vivamus lorem ligula, porta eu lobortis mollis, euismod in nulla. Maecenas convallis lectus tellus, sed 
					suscipit diam sollicitudin id. Maecenas iaculis pellentesque leo, id imperdiet enim vehicula et. Maecenas 
					sed velit ut elit dapibus dignissim. Nam finibus lacinia magna ac gravida. Nulla non convallis leo. Nunc 
					non rutrum felis, ac accumsan nibh. Nullam aliquam mi et dignissim porta. Suspendisse efficitur purus ex, 
					a consequat lectus rhoncus quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
					cubilia curae; Sed sodales metus eu mi viverra, ac maximus enim tristique. In hac habitasse platea dictumst.
				</p>
			</section>
		</div>
	);
}

export { About }