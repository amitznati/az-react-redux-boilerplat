import React, {lazy, Suspense} from "react";
import loadRemoteDynamically from "./loadRemoteDynamically";
import {SpinnerWidget} from "@widgets";
import { RemoteComponentProps } from "./types";

const FederationComponent = ({remoteName, remoteComponent, remoteEntry, ...props}: RemoteComponentProps) => {
  const Component = lazy(loadRemoteDynamically({
    remoteName,
    remoteEntry: `${remoteEntry}?dt=${Date.now()}`,
    remoteComponent,
  }));

  return (
    <Suspense fallback={<SpinnerWidget spinnerOn />}>
      <Component {...props}/>
    </Suspense>
  );
}

export default FederationComponent;

