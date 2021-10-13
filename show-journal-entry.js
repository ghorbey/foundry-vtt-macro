function getOptions() {
    let options = {};
    const ravensPurgeFolderId = 'ZmKAmxpjcONV465i';
    const gamemasterGuideFolderId = 'KikCOJfchl7sNDEl';
    const bitterReachFolderId = 'pzjt6L1TkWLMqPb6';
    const excludedIdList = [
        '9BfSFxclQ7MxX3Ko',
        'VLtaLLi4bogEVl4v',
        'aiU0I4bEm4jWgzYu',
        'p9siaFU9DkJzcVO3'
    ];
    const displayableEntries = game.journal.contents.filter(content => content.name.endsWith(' - Intro')
        && (content.folder.data.parent === ravensPurgeFolderId || content.folder.data.parent === gamemasterGuideFolderId)
        && excludedIdList.indexOf(content._id) < 0);
    displayableEntries.forEach(entry => {
        const option = [`<option value="${entry.name}">${entry.name}</option>`];
        if (options[entry.name]) {
            options[entry.name] += option;
        } else {
            options[entry.name] = option;
        }
    });
    return options;
};

function showJournalEntry(html) {
    if (html) {
        const entry = html.find(`select#selectedEntry`).val();
        if (!entry) return ui.notifications.error("No entry selected.");
        game.journal.getName(entry).sheet.render(true);
    }
}

function journalEntriesDialog() {
    const options = getOptions();
    const title = `Getting here entries`;
    const content = `
            <form style="display: flex; flex-direction: column; align-content: center; margin: 5px 0;">
            <div style="display: block; margin: 5px 0 2px;">
                <label>Table: </label>
                <select id="selectedEntry" style="border-color: #aaa;"/>
                    <option value="" disabled selected>--Please choose an entry--</option>
                    ${Object.values(options)}
                </select>
            </div>
        `;
    const label = `Display`;
    const callback = showJournalEntry;
    return {
        title: title,
        content: content,
        label: label,
        callback: callback
    };
}

Dialog.prompt(journalEntriesDialog());