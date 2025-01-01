import settings from './settings.js';
import logger from './logger.js';

// CONFIG.debug.hooks = true;

Hooks.once('init', async function() {
    settings.init();
});

Hooks.once('ready', async function() {
    // Do stuff
});
