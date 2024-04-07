import {feedbackConfigType} from "../../FeedbackHandler.types";
import SuccessIcon from '../../../../assets/images/icons/success-icon.svg?react';
import WarningIcon from '../../../../assets/images/icons/warning-icon.svg?react';
import ErrorIcon from '../../../../assets/images/icons/error-icon.svg?react';
import InfoIcon from '../../../../assets/images/icons/info-icon.svg?react';
import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";


const TMCloseIcon = ()  => {
    return (
      <div className="cursor-pointer active:bg-[#E9F1F9] hover:text-[#003E7F] p-[2px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7.6025 13.1367C7.4105 13.1367 7.2185 13.0637 7.0725 12.9167C6.7795 12.6237 6.7795 12.1497 7.0725 11.8567L11.8645 7.06469C12.1575 6.77169 12.6315 6.77169 12.9245 7.06469C13.2175 7.35769 13.2175 7.83169 12.9245 8.12469L8.1325 12.9167C7.9865 13.0637 7.7945 13.1367 7.6025 13.1367Z"/>
              <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.3965 13.1396C12.2045 13.1396 12.0125 13.0666 11.8665 12.9196L7.07049 8.12261C6.77749 7.82961 6.77749 7.35562 7.07049 7.06261C7.36449 6.76961 7.83849 6.76961 8.13049 7.06261L12.9265 11.8596C13.2195 12.1526 13.2195 12.6266 12.9265 12.9196C12.7805 13.0666 12.5875 13.1396 12.3965 13.1396Z"/>
              <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.665 1.5C3.135 1.5 1.5 3.233 1.5 5.916V14.084C1.5 16.767 3.135 18.5 5.665 18.5H14.333C16.864 18.5 18.5 16.767 18.5 14.084V5.916C18.5 3.233 16.864 1.5 14.334 1.5H5.665ZM14.333 20H5.665C2.276 20 0 17.622 0 14.084V5.916C0 2.378 2.276 0 5.665 0H14.334C17.723 0 20 2.378 20 5.916V14.084C20 17.622 17.723 20 14.333 20Z"/>
          </svg>
      </div>
    )
}


 type toastProps = feedbackConfigType & {
    onClose: ()=> void
}
export default function ToastFeedback({title,message,type,onClose, timeout} : toastProps){
    let toid:  NodeJS.Timeout;
    if (timeout) {
        toid = setTimeout(() => onClose(), timeout);
    }
    const handleHover = () => {
        if (toid) {
            clearTimeout(toid);
        }
    }

    const handleBlur = () => {
        if (timeout) {
            toid = setTimeout(() => onClose(), timeout);
        }
    }
    const alertClasses = twMerge(
      "alert flex items-start justify-between text-[#FFF] px-[32px] py-[24px] border-0 rounded-[24px]",
      clsx({
          "bg-error": type === "error",
          "bg-warning": type === "warning",
          "bg-success": type === "success",
          "bg-info": type === "info",
      }),
    );
    return (<div onMouseOver={handleHover} onMouseLeave={handleBlur}>
        <div className="toast  toast-top flex toast-center pt-[167px] z-[1000] w-[576px]">
            <div className={alertClasses}>
                {type === 'success' && <SuccessIcon />}
                {type === 'error' && <ErrorIcon />}
                {type === 'warning' && <WarningIcon />}
                {type === 'info' && <InfoIcon />}
                <div className="flex flex-1 gap-[20px]">
                    <div className="flex flex-col gap-[20px]">
                        <h2 className="text-xl leading-none">{title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: message }} className="text-normal" />
                    </div>

                </div>
                <div onClick={onClose} className="text-[#FFF]">
                    <TMCloseIcon />
                </div>
            </div>
        </div>
    </div>)
}
