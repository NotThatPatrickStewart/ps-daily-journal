/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"
import { getMood, useMood } from "./MoodProvider.js"

const contentTarget = document.querySelector(".container__left")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("entryStateChanged", () => EntryListComponent())

export const EntryListComponent = () => {
    getEntries()
    .then(getMood)
    .then(() => {
        const allEntries = useJournalEntries()
        const allMoods = useMood()
       
        render(allEntries, allMoods)
    })
}

const render = (entriesCollection, moodsCollection) => {
    let entryHTMLRepresentation = ""
    for (const entry of entriesCollection) {
        const entryMood = moodsCollection.find(mood => mood.id === entry.moodId)
        entryHTMLRepresentation += JournalEntryComponent(entry, entryMood)
    }
    contentTarget.innerHTML += `
    ${entryHTMLRepresentation}
    `
}