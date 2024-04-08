const config = {};

config.APP_NAME = process.env.APP_NAME;
config.APP_ENV = process.env.APP_ENV;
config.APP_VERSION = process.env.APP_VERSION;
config.APP_PORT = process.env.APP_PORT;
config.APP_URL = process.env.APP_URL;

config.DB_URL = process.env.DB_URL;
config.UPLOAD_PATH = process.env.UPLOAD_PATH;

config.DB_HOST = process.env.DB_HOST;
config.DB_PORT = process.env.DB_PORT;
config.DB_DATABASE = process.env.DB_DATABASE;
config.DB_USERNAME = process.env.DB_USERNAME;
config.DB_PASSWORD = process.env.DB_PASSWORD;
config.DB_DIALECT = process.env.DB_DIALECT;

config.MAIL_MAILER = process.env.MAIL_MAILER;
config.MAIL_HOST = process.env.MAIL_HOST;
config.MAIL_PORT = process.env.MAIL_PORT;
config.MAIL_USERNAME = process.env.MAIL_USERNAME;
config.MAIL_PASSWORD = process.env.MAIL_PASSWORD;
config.MAIL_ENCRYPTION = process.env.MAIL_ENCRYPTION;
config.MAIL_FROM_ADDRESS = process.env.MAIL_FROM_ADDRESS;
config.SEND_EMAIL = process.env.SEND_EMAIL;
config.OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY;

export default config;
