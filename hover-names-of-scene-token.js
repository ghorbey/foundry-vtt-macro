async function hoverTokenNames() {
    canvas.scene.data.tokens.forEach(token => {
        const update = {
            displayName: CONST.TOKEN_DISPLAY_MODES.HOVER
        };
        token.update(update);
        token.actor.update({ token: update });
    });
}
hoverTokenNames();