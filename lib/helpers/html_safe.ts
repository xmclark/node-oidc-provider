function isString(input: string | number | boolean): input is string {
  return typeof input === "string"
}

function isNumber(input: string | number | boolean): input is number {
  return typeof input === "number"
}

function isBoolean(input: string | number | boolean): input is boolean {
  return typeof input === "boolean"
}

export function htmlSafe(input: string | number | boolean) {
  if (isString(input)) {
    return input.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
  else if (isNumber(input)) {
    return `${input}`;
  }
  else if (isBoolean(input)) {
    return input.toString();
  }
  else {
    return '';
  }
};
