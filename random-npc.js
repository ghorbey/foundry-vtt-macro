async function randomNPC() {
    const occupationTable = game.tables.getName('NPC Occupation');
    const characteristicTable = game.tables.getName('NPC Characteristic');
    const quirkTable = game.tables.getName('NPC Quirk');
    if (!occupationTable || !characteristicTable || !quirkTable) return ui.notifications.error("Table(s) doesn't exist.");
    const occupationResult = await occupationTable.draw({ displayChat: false })
    const characteristicResult = await characteristicTable.draw({ displayChat: false });
    const quirkResult = await quirkTable.draw({ displayChat: false });

    const occupation = occupationResult.results[0].data.text;
    const characteristic = characteristicResult.results[0].data.text;
    const quirk = quirkResult.results[0].data.text;
    const message = `${occupation} - ${characteristic} - ${quirk}`;
    ChatMessage.create({
        content: message,
        whisper: [game.user]
    });
}
randomNPC();