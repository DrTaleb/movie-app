import { ReactNode } from "react";

interface Props {
  loading: boolean;
  loadingMessage?: string;
  hasData: boolean;
  children: ReactNode;
  loadingComponent: ReactNode;
}

const LoadingWrapper = ({
  loading,
  hasData,
  children,
  loadingComponent,
}: Props) => {
  return (
    <>
      {loading ? (
        <>{loadingComponent}</>
      ) : hasData ? (
        <>{children}</>
      ) : (
        <p>nononono</p>
      )}
    </>
  );
};

export default LoadingWrapper;
