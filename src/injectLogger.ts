import { Logger } from 'winston';
import { createLogger, CreateLoggerInputProps } from './createLogger';

const makeLogger = (
  logger: Logger['info'] | Logger['debug'] | Logger['error'] | Logger['warn'],
) => (p1: unknown, ...rest: Array<unknown>) => {
  if (typeof p1 === 'string') {
    logger(p1, ...rest);
  } else {
    logger(p1);
  }
};

export const injectLogger = (props?: CreateLoggerInputProps) => {
  const logger = createLogger(props);
  console.log = makeLogger(logger.info);
  console.debug = makeLogger(logger.debug);
  console.error = makeLogger(logger.error);
  console.warn = makeLogger(logger.warn);
};

const makeBrowserLogger = (
  logger:
    | typeof console.log
    | typeof console.debug
    | typeof console.warn
    | typeof console.error,
  development: boolean,
) => (...args: Array<unknown>) => {
  if (development) {
    logger(...args);
  }
};

type InjectBrowserLoggerProps = {
  development?: boolean;
};

export const injectBrowserLogger = ({
  development = false,
}: InjectBrowserLoggerProps = {}) => {
  console.log = makeBrowserLogger(console.log, development);
  console.debug = makeBrowserLogger(console.debug, development);
  console.error = makeBrowserLogger(console.error, development);
  console.warn = makeBrowserLogger(console.warn, development);
};
