import { collection, getDocs } from 'firebase/firestore/lite'
import { db, FIREBASE_COLLECTION } from 'service/firebase'

async function getLoginUser() {
    // try catch
    const user = collection(db, FIREBASE_COLLECTION.USER_LOGIN)
    const userCheck = await getDocs(user)
    const userInfo = userCheck.docs.map(doc => doc.data())
    return userInfo[0]
}


export { getLoginUser }