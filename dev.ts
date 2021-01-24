import { injectLogger } from './src';

injectLogger({ development: true, dir: `${__dirname}/logs` });
