import { collection, getDocs } from 'firebase/firestore/lite'
import { db, FIREBASE_COLLECTION } from 'service/firebase'

async function getTeams() {
    try {
        const teams = collection(db, FIREBASE_COLLECTION.TEAMS)
        const teamsCheck = await getDocs(teams)
        const teamsList =teamsCheck.docs.map(doc => doc.data())
        return teamsList
    }
    catch (error) {
        console.error('getTeams error', getTeams)
    }

}


export { getTeams }