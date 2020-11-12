/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry, entryMood) => {
    return `
    <div class="entry">    
    <p class="note__timestamp"> Date: ${new Date(entry.date).toLocaleDateString('en-US')}</p> 
    <p class="entry__journalConcepts"> Concept: ${entry.concepts}</p>
    <p class="entry__journalEntry"> Entry: ${entry.entry}</p>
    <p class="entry__moodDropdown"> Mood: ${entryMood.label}</p>
    </div>
    `
}
