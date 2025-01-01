// File: /lib/auth.ts
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAsVuVtY-ZgNfqTZ2Wfe4aGKdmN-kQqZjE",
  authDomain: "hasan-8466d.firebaseapp.com",
  projectId: "hasan-8466d",
  storageBucket: "hasan-8466d.firebasestorage.app",
  messagingSenderId: "1037187451735",
  appId: "1:1037187451735:web:b4b1f403667bb6c9ebcc12",
  measurementId: "G-Z9PXNQ2FH8"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
