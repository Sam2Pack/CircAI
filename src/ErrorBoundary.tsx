import React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  error: any;
};

class ErrorBoundary extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("FULL ERROR:", error);
    console.error(errorInfo);
  }

  render() {

    if (this.state.hasError) {

      return (
        <div className="min-h-screen flex items-center justify-center p-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold mb-4 text-red-500">
              App Crashed
            </h1>

            <pre className="whitespace-pre-wrap text-sm">
              {String(this.state.error)}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;