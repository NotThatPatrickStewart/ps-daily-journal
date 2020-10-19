/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "10/10/2020",
        concept: "Data Provider",
        entry: "I learned how to create a data provider file in js to hold the data I want to show as HTML in the DOM.",
        mood: "Overwhelmed"
    },
    {
        id: 3,
        date: "10/15/2020",
        concept: "List Files",
        entry: "I learned how to create a list file in js to hold the HTML representatins of the js that I want to show",
        mood: "Stressed"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}