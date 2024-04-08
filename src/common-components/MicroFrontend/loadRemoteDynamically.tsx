import React from 'react';
import ReactDOM from "react-dom";
import {Link} from "@common-components";
import { DynamicModuleProps, lazyLoadType } from "./types";

const sharedDependencies = {
  'react':{'18.2.0':{get:() => () => React}},
  'react-dom':{'18.2.0':{get:()=> () => ReactDOM}}
};



const RemoteNotFound = () => {
  return (
    <div className="flex flex-col gap-[16px] items-center">
      <div className="flex flex-col gap-[8px] items-center">
        <div className="text-label-bold">Oops! Something went wrong</div>
        <div className="text-form-label">Remote is unavailable right now. Please refresh to try again.</div>
        <div className="flex gap-[8px] text-form-label">
          <p>
            If the issue persists, please contact support.
          </p>
          <Link to="/contact-support">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function loadRemoteDynamically(
  {
    remoteName,
    remoteEntry,
    remoteComponent,
  }: DynamicModuleProps): lazyLoadType {

  return () => new Promise(async (resolve) => {
    const script = document.createElement('script');
    script.src = remoteEntry;
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      const proxy = window[remoteName];
      proxy.init(sharedDependencies);
      proxy.get(remoteComponent).then((factory: any) => {
        resolve(factory());
      });
    };
    script.onerror = (error) => {
      console.error('Error loading remote', error);
      resolve({default: () => <RemoteNotFound />})
    };
    document.body.appendChild(script);
  });
}