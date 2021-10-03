import { collection, getDocs } from 'firebase/firestore/lite'
import { db, FIREBASE_COLLECTION } from 'service/firebase'

async function getAllUsers() {
    try {
        const users = collection(db, FIREBASE_COLLECTION.ALL_USERS)
        const usersCheck = await getDocs(users)
        const usersInfo = usersCheck.docs.map(doc => doc.data())
        return usersInfo[0]
    }
    catch (error) {
        console.error('getAllUsers error', getAllUsers)
    }

}


export { getAllUsers }