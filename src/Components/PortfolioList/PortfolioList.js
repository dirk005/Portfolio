import React from 'react';
import Card from '../Card/Card.js';
import './PortfolioList.css'

const PortfolioList = ({sites}) => {
	return(		
		<div className="listStyle">
			{
				sites.map((siteData, i) =>{
					return (
						<Card		 				
			 				id={i} 
			 				name={siteData.name}
			 				description={siteData.description}
			 				link={siteData.link}
			 				imageLink={siteData.imageLink}
						 />
			 			);
				})
			}
		</div>		
		);
}

export default PortfolioList;