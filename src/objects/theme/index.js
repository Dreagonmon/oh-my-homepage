/**
 * @typedef {Object} ThemeConfig
 * @property {Record<string, string>} [colors]
 */

/**
 * @param {ThemeConfig} config
 * @returns {string}
 */
export const parseColorVariableStyle = (config) => {
    const styles = [];
    if (config.colors) {
        for (const variable in config.colors) {
            if (Object.hasOwnProperty.call(config.colors, variable)) {
                const value = config.colors[ variable ];
                styles.push(`${variable}: ${value};`);
            }
        }
    }
    return styles.join(" ");
};
