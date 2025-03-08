import {signUp, logout, login, onAuthStateChanged} from "./auth"
import { database } from "./config"
import {doc, setDoc, collection, deleteDoc, onSnapshot} from "firebase/firestore"


const saveSong = async function(){
    const songName = document.getElementById("songname").value.trim()
    const artist = document.getElementById("artist").value.trim()
    const releaseDate = document.getElementById("releasedate").value.trim()

    try{
        const songRef = doc(database, "songs", songName.toLowerCase() + "-" + artist.toLowerCase())

        await setDoc(songRef, {
            name: songName,
            artist: artist,
            releaseDate: releaseDate,
            time: new Date()
        })

        console.log("Song successfully added!")
        document.getElementById("songname").value = ""
        document.getElementById("artist").value = ""
        document.getElementById("releasedate").value = ""


    }catch(error){
        console.error("Error saving song: ", error.message)
    }
}

const deleteSong = async function(collection, docID){
    try{
        await deleteDoc(doc(database, collection, docID))
        console.log(`Document with ID ${docID} deleted successfully`)
    }catch(error){
        console.error("Error deleting song: ", error.message)
    }
}

const songCollection = collection(database, "songs")
onSnapshot(songCollection, (snapshot)=>{
    const tableBody = document.getElementById("table-body")
    tableBody.innerHTML = ""

    snapshot.forEach((doc)=>{
        const data = doc.data()
        const row = document.createElement("tr")

        row.innerHTML = `
        <td>${doc.id}</td>
        <td>${data.name}</td>
        <td>${data.artist}</td>
        <td>${data.releaseDate}</td>
        `

        tableBody.appendChild(row)
    })
})

const addSongForm = document.querySelector("#addSong")
addSong.addEventListener("submit", (event)=>{
    event.preventDefault()
    saveSong()
})

const deleteSongForm = document.querySelector("#deleteSong")
deleteSongForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const song = document.getElementById("songID").value
    deleteSong("songs", song)
})

