import { ReactNode } from "react";
import { GENERAL_COTENT } from "../content/general";

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
      {/* first check loading then check dataLength */}
      {loading ? (
        <>{loadingComponent}</>
      ) : hasData ? (
        <>{children}</>
      ) : (
        <span className="text-[30px] text-white text-center">
          {GENERAL_COTENT.DATA_NOT_FOUND}
        </span>
      )}
    </>
  );
};

export default LoadingWrapper;
