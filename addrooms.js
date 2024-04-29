import { db } from "./firebaseconfig.js"
import { getFirestore, doc, addDoc, setDoc, getDoc, getDocs, query, where, orderBy, collection } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js"

async function addRoom(roomNo, floor, roomType, noOfBeds, isAvailable){
    await setDoc(
        doc(db, "rooms", roomNo), {
            floor: floor,
            roomType: roomType,
            noOfBeds: noOfBeds,
            isAvailable: isAvailable
        }
    )
}

addRoom("101", 1, "single", 1, true);
addRoom("102", 1, "double", 2, true);
addRoom("201", 2, "suite", 5, false);