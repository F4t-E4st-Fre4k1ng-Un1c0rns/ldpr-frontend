import { DisplayError, ERROR_EMOJIS } from "../types/ErrorDisplay";

export interface ErrorDisplayProps {
  readonly error: DisplayError;
}

const ErrorDisplay = ({ error }: ErrorDisplayProps) => {
  const emoji = ERROR_EMOJIS[error.type];
  const errorMessage = error instanceof Error ? error.message : error;

  return (
    <div className="container mx-auto p-4 w-100 max-w-ww">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body items-center text-center">
          <div className="text-9xl mb-4">{emoji}</div>
          <h2 className="text-lg mb-4">{errorMessage}</h2>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;
