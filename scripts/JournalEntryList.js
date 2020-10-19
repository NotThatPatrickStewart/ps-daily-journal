/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
export const EntryListComponent = () => {
    const entryLog = document.querySelector(".journal__entry")

    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    let entryHTMLRepresentations = ""
    for (const entry of entries) {
        entryHTMLRepresentations += JournalEntryComponent(entry)
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
    }

        entryLog.innerHTML += `
        <section class="entry"
        <h2>Recent Entries</h2>
        <div class="entryContainer">
        ${entryHTMLRepresentations}
        </div>
        </section<
        `
}