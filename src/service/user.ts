import { collection, getDocs } from 'firebase/firestore/lite'
import { db, FIREBASE_COLLECTION } from 'service/firebase'

async function getLoginUser() {
    try {
        const user = collection(db, FIREBASE_COLLECTION.LOGIN_USER)
        const userCheck = await getDocs(user)
        const userInfo = userCheck.docs.map(doc => doc.data())
        return userInfo[0]
    }
    catch (error) {
        console.error('getLoginUser error', getLoginUser)
    }

}


export { getLoginUser }