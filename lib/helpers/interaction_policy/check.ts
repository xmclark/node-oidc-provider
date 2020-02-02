/* istanbul ignore file */
/* eslint-disable no-param-reassign */

export class Session {
  promptedClaimsFor(id: string): Set<string> {
    return new Set();
  }
}

export class Client {
  clientId: string = "";
}

export class Oidc {
  client: Client = new Client();
  session: Session = new Session();
  requestParamClaims: string[] = [];
}

export class Context {
  oidc: Oidc = new Oidc();
}

export class Check {
  private reason: string;
  private description: string;
  private error: (ctx: Context) => boolean | undefined;
  private check: (ctx: Context) => boolean;
  private details: () => void;
  constructor(reason: string, description: string, error: (ctx: Context) => boolean, check: (ctx: Context) => boolean = (_ctx: Context) => false, details = () => {}) {
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
