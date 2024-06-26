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

// ログインおよびサインアップボタンのイベントリスナー
document.getElementById('login-button').addEventListener('click', login);
document.getElementById('signup-button').addEventListener('click', signup);

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // ログイン成功
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('chat-container').style.display = 'block';
            loadMessages();
        })
        .catch((error) => {
            console.error('ログインエラー:', error);
        });
}

function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // サインアップ成功
            login();
        })
        .catch((error) => {
            console.error('サインアップエラー:', error);
        });
}

// ユーザーの認証状態を監視
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // ユーザーがサインインしている場合
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('chat-container').style.display = 'block';
        loadMessages();
    } else {
        // ユーザーがサインアウトしている場合
        document.getElementById('login-container').style.display = 'block';
        document.getElementById('chat-container').style.display = 'none';
    }
});

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
function loadMessages() {
    db.on('child_added', (snapshot) => {
        const messageData = snapshot.val();
        const messageElement = document.createElement('div');
        messageElement.textContent = messageData.message;
        document.getElementById('messages').appendChild(messageElement);
    });
}
console.log('main.js is loaded');

// Firebaseの設定を貼り付ける
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Firebaseを初期化
firebase.initializeApp(firebaseConfig);
console.log('Firebase initialized');

// Firebaseのデータベース参照を取得
const db = firebase.database().ref('messages');
console.log('Database reference acquired');

document.getElementById('login-button').addEventListener('click', () => {
    console.log('Login button clicked');
    login();
});

document.getElementById('signup-button').addEventListener('click', () => {
    console.log('Signup button clicked');
    signup();
});

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Attempting to login with email:', email);

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // ログイン成功
            console.log('Login successful:', userCredential);
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('chat-container').style.display = 'block';
            loadMessages();
        })
        .catch((error) => {
            console.error('Login error:', error);
            alert('Login error: ' + error.message);  // エラーをアラートで表示
        });
}

function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Attempting to signup with email:', email);

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // サインアップ成功
            console.log('Signup successful:', userCredential);
            login();
        })
        .catch((error) => {
            console.error('Signup error:', error);
            alert('Signup error: ' + error.message);  // エラーをアラートで表示
        });
}

// ユーザーの認証状態を監視
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // ユーザーがサインインしている場合
        console.log('User is signed in:', user);
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('chat-container').style.display = 'block';
        loadMessages();
    } else {
        // ユーザーがサインアウトしている場合
        console.log('User is signed out');
        document.getElementById('login-container').style.display = 'block';
        document.getElementById('chat-container').style.display = 'none';
    }
});

document.getElementById('send-button').addEventListener('click', () => {
    const message = document.getElementById('message-input').value;
    if (message) {
        console.log('Sending message:', message);
        db.push().set({
            message: message,
            timestamp: Date.now()
        });
        document.getElementById('message-input').value = '';
    }
});

// メッセージをリアルタイムで受信
function loadMessages() {
    db.on('child_added', (snapshot) => {
        const messageData = snapshot.val();
        console.log('New message received:', messageData);
        const messageElement = document.createElement('div');
        messageElement.textContent = messageData.message;
        document.getElementById('messages').appendChild(messageElement);
    });
}
