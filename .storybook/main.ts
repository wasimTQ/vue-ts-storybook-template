import type {StorybookConfig} from '@storybook/core-common';
import {mergeConfig} from "vite";
import {resolve} from "path";

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions"
    ],
    framework: "@storybook/vue3",
    "core": {
        "builder": "@storybook/builder-vite"
    },
    "features": {
        "storyStoreV7": true
    },
    // @ts-ignore
    async viteFinal(config, options) {
        return mergeConfig(config, {
            root: resolve(__dirname, '../src/frontend'),
            resolve: {
                alias: {
                    '~': `${resolve(__dirname, 'src/frontend')}/`,
                    '@': `${resolve(__dirname, 'src/frontend')}/`,
                },
            },
        })
    },
}

module.exports = config