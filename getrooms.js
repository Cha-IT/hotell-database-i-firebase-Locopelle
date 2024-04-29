import { db } from "./firebaseconfig.js"
import { getFirestore, doc, addDoc, setDoc, getDoc, getDocs, query, where, orderBy, collection } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js"

var allRooms = document.querySelector(".hotelRooms")

var selectedfloor = 1;
var selectedroomType = "none";
var selectednoOfBeds = "none";
var selectedisAvailable = "none";

async function getRooms() {
    const rooms = await getDocs(query(collection(db, "room")));

    rooms.forEach((room) => {
        if (
            (room.data().floor == selectedfloor || selectedfloor == "none") &&
            (room.data().roomType == selectedroomType || selectedroomType == "none") &&
            (room.data().noOfBeds == selectednoOfBeds || selectednoOfBeds == "none") &&
            (room.data().isAvailable == selectedisAvailable || selectedisAvailable == "none")
        ) {
        var roomDiv = document.createElement("div");
        roomDiv.id = room.data().room
        allRooms.appendchild(roomDiv)

        var roomFloor = document.createElement("p")
        roomFloor.textContent = room.data().floor;
        document.getElementsByID(roomDiv.id).appendchild(roomFloor);

        console.log(room.data());
        }
    });
}
getRooms()