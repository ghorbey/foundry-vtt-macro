async function displayTokenNames() {
    canvas.scene.data.tokens.forEach(token => {
        const update = {
            displayName: CONST.TOKEN_DISPLAY_MODES.ALWAYS
        };
        token.update(update);
        token.actor.update({ token: update });
    });
}
displayTokenNames();