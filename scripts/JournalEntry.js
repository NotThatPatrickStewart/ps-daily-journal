/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p class="entry__date">${entry.date}</p>
            <p class="entry__concept">${entry.concept}</p>
            <p class="entry__entry">${entry.entry}</p>
            <p class="entry__mood">${entry.mood}</p>
            concept 
        </section>
    `
}
