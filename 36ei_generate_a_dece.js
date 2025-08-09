const notifierConfig = {
  // Web3 provider setup
  web3Provider: {
    type: 'infura',
    projectId: 'YOUR_INFURA_PROJECT_ID',
    projectSecret: 'YOUR_INFURA_PROJECT_SECRET',
  },

  // Contract setup
  contract: {
    address: '0x...YourContractAddress...',
    abi: [... contract ABI array ...],
  },

  // Event listener setup
  eventListener: {
    eventName: 'NewNotification',
    eventParams: ['uint256', 'string'],
  },

  // Decentralized storage setup
  ipfs: {
    node: 'https://ipfs.infura.io:5001',
    files: [
      {
        name: 'notification.json',
        description: 'Notification data',
      },
    ],
  },

  // Frontend setup
  frontend: {
    notificationTemplate: './notification-template.html',
    notificationContainer: '#notification-container',
  },

  // Optional: custom notification handlers
  customHandlers: {
    handleNewNotification: (notificationData) => {
      console.log(`New notification: ${notificationData.title}`);
    },
  },
};