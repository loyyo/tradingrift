import React from 'react'

const SellFormTextarea = (props) => {
    return(
        <div>
            <div className='sell-title'>
				<p>{props.sectionTitle}</p>
			</div>
			<div className='sell-input'>
				<textarea type={props.inputType} name={props.inputName} />
			</div>
        </div>
    )
};

export default SellFormTextarea