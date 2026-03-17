import { ErrorBoundary } from "react-error-boundary";

const ClientErrorBoundary = ErrorBoundary;

const FallbackComponent = () => {
  return <div className="text-red-500">Sorry something went wrong.</div>;
};

export { ClientErrorBoundary, FallbackComponent };
