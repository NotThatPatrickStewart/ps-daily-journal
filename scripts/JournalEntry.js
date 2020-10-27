/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
    <div class="entry">    
    <p class="note__timestamp"> Date: ${new Date(entry.timestamp).toLocaleDateString('en-US')}</p> 
    <p class="entry__journalConcepts"> Concept: ${entry.journalConcepts}</p>
    <p class="entry__journalEntry"> Entry: ${entry.journalEntry}</p>
    <p class="entry__moodDropdown"> Mood: ${entry.moodDropdown}</p>
    </div>
    `
}
