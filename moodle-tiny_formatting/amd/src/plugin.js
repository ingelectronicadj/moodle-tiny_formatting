import {pluginName} from './common';

// Setup the tiny_formatting Plugin.
const configureMenu = (menu) => {
    //window.console.log(`Starting menu management for ${menu.format.items}`);
    if (menu.format.items.match(/\bblocks\b/)) {
        menu.format.items = menu.format.items.replace(
            /(\bblocks\b)/,
            ' styles $1 fontfamily fontsize',
        );
    } else {
        menu.format.items = `${menu.format.items} | fontfamily fontsize`;
    }

    if (menu.format.items.match(/\blanguage\b/)) {
        menu.format.items = menu.format.items.replace(
            /(\blanguage\b)/,
            ' forecolor backcolor | $1',
        );
    } else {
        menu.format.items = `${menu.format.items} | forecolor backcolor`;
    }
    //window.console.log(`Finished menu management for ${menu.format.items}`);
    return menu;
};

// eslint-disable-next-line no-async-promise-executor
export default new Promise(async (resolve) => {
    resolve([pluginName, {
        configure: (instanceConfig) => ({
            menu: configureMenu(instanceConfig.menu),
        }),
    }]);
});
