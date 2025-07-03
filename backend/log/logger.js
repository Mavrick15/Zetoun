const fs = require('node:fs');
const path = require('node:path');

class Logger {
  constructor() {
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir);
    }
    this.logFile = path.join(logsDir, 'app.log');
  }

  writeLog(level, message, meta) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      ...(meta && { meta })
    };

    // Console
    console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`);

    // Fichier
    fs.appendFileSync(this.logFile, JSON.stringify(logEntry) + '\n');
  }

  info(message, meta) {
    this.writeLog('info', message, meta);
  }

  error(message, meta) {
    this.writeLog('error', message, meta);
  }

  warn(message, meta) {
    this.writeLog('warn', message, meta);
  }
}

module.exports = { logger: new Logger() };
