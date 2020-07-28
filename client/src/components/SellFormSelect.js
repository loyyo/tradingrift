import React from 'react'

const SellFormSelect = (props) => {

    let option = props.options
    return(
        <div>
            <div className='sell-title'>
				<p>{props.sectionTitle}</p>
			</div>
			<div className='sell-input'>
				<select>
                   {option}
                </select>
			</div>
        </div>
    )
};

export default SellFormSelect