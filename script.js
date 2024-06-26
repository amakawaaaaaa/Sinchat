const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyAd-MvBpHpjNh2mSrhYv204CFr5DS7UuyU",
  authDomain: "chatttt-64a19.firebaseapp.com",
  databaseURL: "https://chatttt-64a19-default-rtdb.firebaseio.com",
  projectId: "chatttt-64a19",
  storageBucket: "chatttt-64a19.appspot.com",
  messagingSenderId: "641553449502",
  appId: "1:641553449502:web:c8d837c0ab93a0e1d1640f",
  measurementId: "G-0RW78LR627"
};
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const chatMessagesRef = database.ref('messages');

chatMessagesRef.on('child_added', (snapshot) => {
  const messageData = snapshot.val();
  const messageElement = document.createElement('div');
  messageElement.id = 'chat-message';
  messageElement.textContent = `${messageData.sender}: ${messageData.message}`;
  chatMessages.appendChild(messageElement);
});

const chatMessageInput = document.getElementById('chat-message-input');
const chatSendButton = document.getElementById('chat-send-button');

chatSendButton.addEventListener('click', () => {
  const message = chatMessageInput.value;
  if (message) {
    const sender = 'あなた';
    const timestamp = Date.now();
    chatMessagesRef.push({
      sender,
      message,
      timestamp
    });
    chatMessageInput.value = '';
  }
});
