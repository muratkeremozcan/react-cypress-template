const cyWatchReload = require('cypress-watch-and-reload/plugins')

/**
 * The collection of plugins to use with Cypress
 * @param on  `on` is used to hook into various events Cypress emits
 * @param config  `config` is the resolved Cypress config
 */
export default function plugins(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
) {
  return {
    // add plugins here
    ...cyWatchReload(on, config),
  }
}
