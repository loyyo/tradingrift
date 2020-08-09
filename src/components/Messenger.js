import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Messenger = () => {
	return (
		<>
			<MessengerCustomerChat
				pageId='983211351870651'
				appId='777868586355506'
				htmlRef={window.location.pathname}
				// version='v8.0'
				themeColor='#355b9b'
				loggedInGreeting='Cześć! Czy możemy Tobie w czymś pomóc?'
				loggedOutGreeting='Cześć! Czy możemy Tobie w czymś pomóc?'
			/>
		</>
	);
};

export default Messenger;
