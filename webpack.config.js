const Path = require('path');
const packageJson = require('./package.json');

const resourceLib = {
    name: `Kapeta.resourceTypes["[name]"]`,
    type: 'assign',
    export: 'default',
};

const blockLib = {
    name: `Kapeta.blockTypes["[name]"]`,
    type: 'assign',
    export: 'default',
};

module.exports = {
    entry: {
        [`kapeta/resource-type-pubsub-publisher:${packageJson.version}`]: {
            import: Path.resolve(__dirname, './src/web/ProviderConfig.ts'),
            filename: `kapeta/resource-type-pubsub-publisher.js`,
            library: resourceLib,
        },
        [`kapeta/resource-type-pubsub-subscriber:${packageJson.version}`]: {
            import: Path.resolve(__dirname, './src/web/ConsumerConfig.ts'),
            filename: `kapeta/resource-type-pubsub-subscriber.js`,
            library: resourceLib,
        },
        [`kapeta/resource-type-pubsub-topic:${packageJson.version}`]: {
            import: Path.resolve(__dirname, './src/web/TopicConfig.ts'),
            filename: `kapeta/resource-type-pubsub-topic.js`,
            library: resourceLib,
        },
        [`kapeta/resource-type-pubsub-subscription:${packageJson.version}`]: {
            import: Path.resolve(__dirname, './src/web/SubscriptionConfig.ts'),
            filename: `kapeta/resource-type-pubsub-subscription.js`,
            library: resourceLib,
        },
        [`kapeta/block-type-pubsub:${packageJson.version}`]: {
            import: Path.resolve(__dirname, './src/web/OperatorConfig.ts'),
            filename: `kapeta/block-type-pubsub.js`,
            library: blockLib,
        },
    },
    output: {
        path: Path.join(process.cwd(), 'web'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'babel-loader',
                options: {
                    sourceMaps: true,
                    presets: ['@babel/env', '@babel/typescript', '@babel/react'],
                    plugins: [
                        ['@babel/plugin-proposal-decorators', { legacy: true }],
                        ['@babel/plugin-proposal-private-methods', { loose: true }],
                        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],

                        ['@babel/plugin-proposal-class-properties', { loose: true }],
                        '@babel/proposal-object-rest-spread',
                    ],
                },
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
                include: Path.resolve(__dirname, './'),
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                include: Path.resolve(__dirname, './'),
            },
            {
                test: /\.ya?ml$/,
                loader: 'yaml-loader',
                options: {
                    asStream: true,
                },
                include: Path.resolve(__dirname, './'),
            },
        ],
    },
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.less', '.yml', '.yaml'],
        fallback: {
            path: require.resolve('path-browserify'),
        },
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        lodash: '_',
        '@kapeta/ui-web-components': 'Kapeta.Components',
        '@kapeta/ui-web-types': 'Kapeta.Types',
        '@kapeta/ui-web-utils': 'Kapeta.Utils',
        '@kapeta/ui-web-context': 'Kapeta.Context',
    },
};
