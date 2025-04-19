export const ERROR_EMOJIS = {
  404: "😢",
  498: "🌐",
  499: "🥺",
  500: "🥺",
} as const;

export type ErrorType = keyof typeof ERROR_EMOJIS;

export class DisplayError extends Error {
  constructor(
    message = "Ошибка (",
    public readonly type: ErrorType = 499,
  ) {
    super(message);
    this.name = message;
  }
}
