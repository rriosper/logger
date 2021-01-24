import { resolve } from 'path';
import {
  createLogger as createWinstonLogger,
  format,
  Logger,
  LoggerOptions,
  transports,
} from 'winston';

export type CreateLoggerInputProps = {
  level?: LoggerOptions['level'];
  dir?: string;
  meta?: Record<string, string>;
  development?: boolean;
};

const getFileLogPath = (dir: string, fileName: string) => resolve(dir, `${fileName}.log`);

const consoleFormat = format(({ message, ...rest }) => ({
  ...rest,
  message:
    typeof message === 'object' && message !== null
      ? JSON.stringify(message)
      : message,
}));

export const createLogger = ({
  meta,
  dir,
  development = false,
  level = 'info',
}: CreateLoggerInputProps = {}): Logger => {
  const logger = createWinstonLogger({
    level,
    format: format.json(),
    defaultMeta: meta,
    transports:
      dir && !development
        ? [
          new transports.File({
            filename: getFileLogPath(dir, 'error'),
            level: 'error',
          }),
          new transports.File({ filename: getFileLogPath(dir, 'combined') }),
        ]
        : [],
  });

  if (development) {
    logger.add(
      new transports.Console({
        format: format.combine(
          format.colorize(),
          consoleFormat(),
          format.simple(),
        ),
        level,
      }),
    );
  }

  return logger;
};
