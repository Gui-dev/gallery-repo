import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'

import { firebaseConfig } from './../config/firebase'

const firebaseApp = initializeApp(firebaseConfig)
export const firebaseStorage = getStorage(firebaseApp)
export const firebaseAnalytics = getAnalytics(firebaseApp)
