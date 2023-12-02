//@ts-check
import { readFileSync, writeFileSync } from 'node:fs';

class DB {
  static #filePath = new URL('./db.json', import.meta.url);
  static #fileJSON = JSON.parse(readFileSync(this.#filePath, 'utf8'));

  static lastUpdated = this.#fileJSON.lastUpdated;
  static output = this.#fileJSON.output;

  /**
   * @param {Date} now - Date object returned from `new Date()`.
   */
  static isCurrent(now) {
    return this.lastUpdated === now.toISOString().slice(0, 10);
  }

  /**
   * @description Update `lastUpdated` and `output` properties and cache them.
   * @param {Date} now - Date object returned from `new Date()`.
   * @param {string} content - string to set as output.
   */
  static update(now, content) {
    this.lastUpdated = now.toISOString().slice(0, 10);
    this.output = content;

    this.#write();
  }

  /**
   * @description Write `lastUpdated` and `output` to the json store.
   */
  static #write() {
    const content = `${JSON.stringify(
      {
        lastUpdated: this.lastUpdated,
        output: this.output
      },
      null,
      2
    )}\n`;

    writeFileSync(this.#filePath, content);
  }
}

export default DB;
