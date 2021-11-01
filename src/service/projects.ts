import { collection, getDocs } from 'firebase/firestore/lite'
import { db, FIREBASE_COLLECTION } from 'service/firebase'

async function getProjects() {
    try {
        const projects = collection(db, FIREBASE_COLLECTION.PROJECTS)
        const projectsCheck = await getDocs(projects)
        const projectsList = projectsCheck.docs.map(doc => doc.data())
        return projectsList
    }
    catch (error) {
        console.error('getProjects error', getProjects)
    }

}


export { getProjects }