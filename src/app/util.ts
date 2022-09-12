export const dateToIso8601DateTime = (date: Date): string => {
  // Date + time should technically be separated by a 'T' but this looks cleaner in the log.
  return `${date.getFullYear()}-${leftPad(date.getUTCMonth() + 1)}-${leftPad(date.getDate())} ${leftPad(date.getHours())}:${leftPad(date.getMinutes())}:${leftPad(date.getSeconds())}:${leftPad(date.getMilliseconds(), 3)}`;
}

export const leftPad = (input: string | number, count: number = 2, char: string = '0'): string => {
  let output = `${input}`;
  if (output.length < count) {
    output = char.repeat(count - output.length / char.length) + output;
  }
  return output;
}
