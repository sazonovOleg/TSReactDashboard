import { collection, getDocs } from 'firebase/firestore/lite'
import { db, FIREBASE_COLLECTION } from 'service/firebase'

async function getTasks() {
    try {
        const tasks = collection(db, FIREBASE_COLLECTION.TASKS)
        const tasksCheck = await getDocs(tasks)
        const tasksMaps = tasksCheck.docs.map(doc => doc.data())
        return tasksMaps
    }
    catch (error) {
        console.error('getProjects error', getTasks)
    }
}

export { getTasks }