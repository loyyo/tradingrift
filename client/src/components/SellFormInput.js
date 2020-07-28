import React from 'react'

const SellFormInput = (props) => {
    return(
        <div>
            <div className='sell-title'>
				<p>{props.sectionTitle}</p>
			</div>
			<div className='sell-input'>
				<input type={props.inputType} name={props.inputName} />
			</div>
        </div>
    )
};

export default SellFormInput