/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const contentTarget = document.querySelector(".container__left")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("entryStateChanged", () => EntryListComponent())

export const EntryListComponent = () => {
    getEntries().then(() => {
        const allEntries = useJournalEntries()
        render(allEntries)
    })
}

const render = entriesCollection => {
    let entryHTMLRepresentation = ""
    for (const entry of entriesCollection) {
        entryHTMLRepresentation += JournalEntryComponent(entry)
    }
    contentTarget.innerHTML += `
    ${entryHTMLRepresentation}
    `
}