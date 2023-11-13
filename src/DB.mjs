import { readFileSync, writeFileSync } from 'node:fs';

class DB {
  static #filePath = new URL('./db.json', import.meta.url);
  static #fileJSON = JSON.parse(readFileSync(this.#filePath, 'utf8'));

  static lastUpdated = this.#fileJSON.lastUpdated;
  static output = this.#fileJSON.output;

  static get output() {
    return this.output;
  }

  static isCurrent(now) {
    /**
     * @param {Date} now - Date object returned from `new Date()`.
     */
    return this.lastUpdated === now.toISOString().slice(0, 10);
  }

  static update(now, content) {
    /**
     * @description Update `lastUpdated` and `output` properties and cache them.
     * @param {Date} now - Date object returned from `new Date()`.
     * @param {string} content - string to set as output.
     */
    this.lastUpdated = now.toISOString().slice(0, 10);
    this.output = content;

    this.#write();
  }

  static #write() {
    /**
     * @description Write `lastUpdated` and `output` to the json store.
     */
    writeFileSync(
      this.#filePath,
      JSON.stringify(
        {
          lastUpdated: this.lastUpdated,
          output: this.output
        },
        null,
        2
      )
    );
  }
}

export default DB;
