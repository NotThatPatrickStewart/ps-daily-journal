import { saveEntry } from './JournalDataProvider.js'

const contentTarget = document.querySelector(".container__left")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
    <h2>Today's Concepts</h2>
        <textarea id="journalConcepts" placeholder="What concepts did you cover?" cols="50" rows="3"></textarea>
    <h2>Today's Entry</h2>
        <textarea id="journalEntry" placeholder="Let's go into a little more detail" cols="100" rows="20"></textarea>
    <h2>Today's Mood</h2>
        <select class="dropdown" id="moodDropdown">
            <option value="pickOne">Please Select a Mood</option>
            <option value="Stressed">Stressed</option>
            <option value="Anxious">Anxious</option>
            <option value="Overwhelmed">Overwhelmed</option>
            <option value="Freaking Out">Freaking Out</option>
            <option value="Actually Not That Bad!">Actually Not That Bad!</option>
        </select>
    <button id="saveEntry">Yeet</button>
    <button id="editEntry">Edit</button>
    <button id="deleteEntry">Delete</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveEntry") {
    console.log("clickEvent", clickEvent)

    const timestamp = Date.now()
    const journalConcepts = document.querySelector("#journalConcepts").value
    const journalEntry = document.querySelector("#journalEntry").value
    const moodDropdown = document.querySelector("#moodDropdown").value
    
    const newEntry = {
        timestamp,
        journalConcepts,
        journalEntry,
        moodDropdown
    }

    saveEntry(newEntry)
}
})

export const JournalForm = () => {
    render()
}
