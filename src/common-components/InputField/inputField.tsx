import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";
import clsx from 'clsx'
import Input, {InputProps} from "../Input";
import {Button} from "../index";

import './inputField.css';

export type inputFieldProps = InputProps & {
    startIcons?: Array<ReactNode>
    endIcons?: Array<ReactNode>
    inputProps?: InputProps
    className?: string,
    disabled?: boolean
}

const IconsList = ({icons, end, className, disable}: {icons?: Array<ReactNode>, end?: boolean, className?: string, disable?: boolean}) => {
    if (!icons) return '';
    const classes = twMerge(
        'flex absolute',
        className,
        clsx({
            'right-0 pr-4': end,
            'left-0 pl-2': !end
        })
    )
    return (
        <div className={classes}>
            {icons.map((icon, ind) => (
                <Button key={`icon-${ind}`} className="input-field-button p-0" disabled={disable}>
                    {icon}
                </Button>
            ))}
        </div>
    )
};

function InputField({startIcons, endIcons, inputProps, className, disabled}: inputFieldProps) {
    return (
        <div className={`relative w-full flex items-center ${className}`}>
            <IconsList icons={startIcons} disable={disabled} />
            <Input
                disabled={disabled}
                type="search"
                className={`block w-full p-4 ps-10 ${endIcons ? 'input-field-x-padding' :''}`}
                {...inputProps}
            />
            <IconsList icons={endIcons} end disable={disabled} />
        </div>
    )
}

export default InputField;