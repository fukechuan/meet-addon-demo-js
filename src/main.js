import { meet } from '@googleworkspace/meet-addons/meet.addons';

const CLOUD_PROJECT_NUMBER = '你的项目编号';

const MAIN_STAGE_URL =
    window.location.origin + '/MainStage.html';

/**
 * Side Panel 初始化
 */
export async function setUpAddon() {

    const session =
        await meet.addon.createAddonSession({
            cloudProjectNumber:
            CLOUD_PROJECT_NUMBER,
        });

    const sidePanelClient =
        await session.createSidePanelClient();

    document
        .getElementById('start-activity')
        .addEventListener('click', async () => {

            await sidePanelClient.startActivity({
                mainStageUrl:
                MAIN_STAGE_URL
            });

        });
}

/**
 * Main Stage 初始化
 */
export async function initializeMainStage() {

    const session =
        await meet.addon.createAddonSession({
            cloudProjectNumber:
            CLOUD_PROJECT_NUMBER,
        });

    await session.createMainStageClient();

}