import firebase from "firebase";

class Fire {
    constructor() {
        this.init();
        this.checkAuth();
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyDkw76rWXTSl3Q0FIZ9Xegur-wbqz4Mb4M",
                authDomain: "hello-firebase-world-b44ea.firebaseapp.com",
                projectId: "hello-firebase-world-b44ea",
                storageBucket: "hello-firebase-world-b44ea.appspot.com",
                messagingSenderId: "306893049138",
                appId: "1:306893049138:web:e4a797b512423f9dbf1b2b"
            });
        }
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }
            this.db.push(message);
        });

    };

    parse = message => {
        const { text, timestamp, user } = message.val();
        const { key: _id } = message;
        const createdAt = new Date(timestamp);
        // console.log(_id, createdAt, text, user);
        return {
            _id, createdAt, text, user
        };
    };

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off();
    }

    get db() {
        return firebase.database().ref('messages');
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
}

export default new Fire();