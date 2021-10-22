function showJournalEntry(journalEntry) {
    if (!journalEntry) return ui.notifications.error("No matching entry.");
    game.journal.getName(journalEntry).sheet.render(true);
}

async function rollEntry() {
    const table = game.tables.getName('Adventure site leads');
    if (!table) return ui.notifications.error("Table doesn't exist.");
    const { results } = await table.draw({
        displayChat: false
    });
    results.forEach(async (r) => {
        showJournalEntry(r.data.text + ' - Intro');
    });
}
rollEntry();