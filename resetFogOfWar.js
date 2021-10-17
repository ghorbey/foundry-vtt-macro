// From resetdoorsandfog module by wsaunders1014
async function resetFog(isCurrentScene, id = null) {
    if (isCurrentScene) {
        canvas.sight.resetFog();
    } else {
        const response = await SocketInterface.dispatch("modifyDocument", {
            type: "FogExploration",
            action: "delete",
            data: { scene: id },
            options: { reset: true }
        });
        ui.notifications.info(`Fog of War exploration progress was reset.`);
    }
}
resetFog(true);