import React, {useState} from 'react';
import './SectorsList.scss';

const SectorItem = ({sector, number}) => {
	const [isTooltipShowing, setTooltipShowing] = useState(false);
	const [isDirectionSwitched, setDirectionSwitched] = useState(false)
	const toggleTooltip = (newValue) => {
		setDirectionSwitched(number % 3 === 0)
		setTooltipShowing(newValue)
	}
	// const toggleTooltip = () => {
	// 	setTooltipShowing(
	// 		!isTooltipShowing
	// 	)
	// }

	return (
		<div className="sectors-list-item"
				 // onClick={toggleTooltip}
				 // onMouseEnter={() => setTooltipShowing(true)}
				 // onMouseLeave={() => setTooltipShowing(false)}
				 onMouseEnter={() => toggleTooltip(true)}
				 onMouseLeave={() => toggleTooltip(false)}
				 style={{
								 background: `url(${sector.imgUrl}) center no-repeat`,
								 backgroundSize: 'cover'
	 	}}>
		<p className="sectors-list-item-name">
			{sector.name}
		</p>
		{
			// isTooltipShowing && <p className="sectors-list-item-tooltip"
			isTooltipShowing && <p className={`sectors-list-item-tooltip ${
				isDirectionSwitched ? 'sectors-list-item-tooltip-switched' : ''
			}`}
														 // style={{
														 // 	left: isDirectionSwitched ? '-100%' : null
														 // }}
				>
				{sector.description}
			</p>
		}
	</div>
	);
};

export default SectorItem;