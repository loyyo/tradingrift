import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Messenger = () => {
	return (
		<>
			<MessengerCustomerChat
				pageId='983211351870651'
				appId=''
				version='v8.0'
				themeColor='#355b9b'
				loggedInGreeting='Cześć! Czy możemy w czymś Tobie pomóc?'
				loggedOutGreeting='Cześć! Czy możemy w czymś Tobie pomóc?'
			/>
		</>
	);
};

export default Messenger;
