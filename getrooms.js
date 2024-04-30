import { db } from "./firebaseconfig.js"
import { getFirestore, doc, addDoc, setDoc, getDoc, getDocs, query, where, orderBy, collection } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js"

var allRooms = document.querySelector(".hotelRooms");

var FloorFilter = document.querySelector("#FloorFilter")
var BedsFilter = document.querySelector("#BedsFilter")
var AvailableRoom = document.querySelector("#AvailableRoomFilter")

var selectedfloor = "none";
var selectedroomType = "none";
var selectednoOfBeds = "none";
var selectedisAvailable = "none";

var i = 0;

document.getElementById("ApplyFilters").addEventListener("click", function() {
    selectedfloor = FloorFilter.value;
    selectedroomType = TypeFilter.value;
    selectednoOfBeds = BedsFilter.value;
    selectedisAvailable = AvailableRoom.checked;
    reloadRooms(allRooms)
})

async function getRooms() {
    const rooms = await getDocs(query(collection(db, "rooms")));

    rooms.forEach((room) => {
        i++;

        if (
            (room.data().floor == selectedfloor || selectedfloor == "none") &&
            (room.data().roomType == selectedroomType || selectedroomType == "none") &&
            (room.data().noOfBeds == selectednoOfBeds || selectednoOfBeds == "none") &&
            (room.data().isAvailable == selectedisAvailable || selectedisAvailable == "none")
        ) {
            var roomDiv = document.createElement("div");
            roomDiv.id = "room" +i;
            roomDiv.className = "hotelRoomDiv"
            allRooms.appendChild(roomDiv);

            var roomFloor = document.createElement("p");
            roomFloor.textContent = "Etasje: " + room.data().floor;
            document.getElementById(roomDiv.id).appendChild(roomFloor);

            var Type = document.createElement("p");
            Type.textContent = "Rom type: " + room.data().roomType;
            document.getElementById(roomDiv.id).appendChild(Type);

            var roomBeds = document.createElement("p");
            roomBeds.textContent = "Senge plasser: " + room.data().noOfBeds;
            document.getElementById(roomDiv.id).appendChild(roomBeds);

            var roomAvailable = document.createElement("p");
            if (room.data().isAvailable == true) {roomAvailable.textContent = "Ledig"}
            else {roomAvailable.textContent = "Opptatt"}
            document.getElementById(roomDiv.id).appendChild(roomAvailable);

            console.log(room.data());
        }
    });
    i = 0;
}

function reloadRooms(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    getRooms()
}
getRooms();
