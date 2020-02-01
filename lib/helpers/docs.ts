const { homepage, version } = require('../../package.json');
export const docs = (anchor: string) => `${homepage}/tree/v${version}/docs/README.md#${anchor}`;
