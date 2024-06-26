// Firebaseの設定を貼り付ける
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd-MvBpHpjNh2mSrhYv204CFr5DS7UuyU",
  authDomain: "chatttt-64a19.firebaseapp.com",
  databaseURL: "https://chatttt-64a19-default-rtdb.firebaseio.com",
  projectId: "chatttt-64a19",
  storageBucket: "chatttt-64a19.appspot.com",
  messagingSenderId: "641553449502",
  appId: "1:641553449502:web:c8d837c0ab93a0e1d1640f",
  measurementId: "G-0RW78LR627"
};

// Firebaseを初期化
firebase.initializeApp(firebaseConfig);

// Firebaseのデータベース参照を取得
const db = firebase.database().ref('messages');

// メッセージ送信
document.getElementById('send-button').addEventListener('click', () => {
    const message = document.getElementById('message-input').value;
    if (message) {
        db.push().set({
            message: message,
            timestamp: Date.now()
        });
        document.getElementById('message-input').value = '';
    }
});

// メッセージをリアルタイムで受信
db.on('child_added', (snapshot) => {
    const messageData = snapshot.val();
    const messageElement = document.createElement('div');
    messageElement.textContent = messageData.message;
    document.getElementById('messages').appendChild(messageElement);
});
