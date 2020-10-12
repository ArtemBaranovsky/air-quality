import React from 'react';
import './SectorsList.scss';

const SectorsList = ({title, subtitle, items}) => {
	const itemsList = items.map((sector, i) => <div className="sector-list-item" style={{background: `utl(${sector.imgUrl}) center no-repeat / cover`}}>
		<p className="sector-item-name">
			{sector.name}
		</p>
		<p className="sector-item-tooltip">
			{sector.description}
		</p>
	</div>)
	return (
		<section className="sectors container">
			<h2 className="sectors-title">{title}</h2>
			<p className="sectors-subtitle">{subtitle}</p>
			<div className="sectors-list">
				<div className="sectors-list-item">
					{itemsList}
				</div>
			</div>
		</section>
	);
};

export default SectorsList;