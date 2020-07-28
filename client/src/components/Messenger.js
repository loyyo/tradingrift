import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Messenger = () => {
	return (
		<>
			<MessengerCustomerChat
				pageId='983211351870651'
				// appId='777868586355506'
				appId=''
				htmlRef={window.location.pathname}
				version='v7.0'
				themeColor='#355a9f'
			/>
		</>
	);
};

export default Messenger;
