/* istanbul ignore file */
/* eslint-disable no-param-reassign */

export class Check {
  private reason: string;
  private description: string;
  private error: string;
  private check: () => void;
  private details: () => void;
  constructor(reason: string, description: string, error: string, check = () => {}, details = () => {}) {
    // if (typeof error === 'function') {
    //   details = check;
    //   check = error;
    //   error = undefined;
    // }
    this.reason = reason;
    this.description = description;
    this.error = error;
    this.details = details;
    this.check = check;
  }
}
