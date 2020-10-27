const dispatchStateChangeEvent = () => {
    const entryStateChangeEvent = new CustomEvent("entryStateChanged")

    eventHub.dispatchEvent(entryStateChangeEvent)
}

const eventHub = document.querySelector(".container")
/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
let journal = []

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
  return journal.slice()
}

export const getEntries = () => {
    return fetch("http://localhost:8088/journal")
    .then(response => response.json())
    .then(parsedEntries => {
        journal = parsedEntries
    })
}

//create copy of the array (useJournalEntries)
export const saveEntry = entry => {
    return fetch("http://localhost:8088/journal", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}