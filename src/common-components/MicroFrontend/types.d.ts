import { ComponentType } from "react";

export interface RemoteComponentProps extends DynamicModuleProps {
  [key: string]: any;
}
export type RemoteComponentType = ComponentType<RemoteComponentProps>;
export type DynamicModuleProps = {
  remoteName: string;
  remoteEntry: string;
  remoteComponent: string;
};

export type lazyLoadType = () => Promise<{default: RemoteComponentType}>;