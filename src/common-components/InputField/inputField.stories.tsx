import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import InputField, { InputFieldProps } from '.'
import {IoAttach, IoSend} from "react-icons/io5";

export default {
    title: 'Core/Data Input/InputField',
    component: InputField,
    args: {
        placeholder: 'Type here',
        className: 'w-full',
        disabled: false,
    },
} as Meta

export const Default: Story<InputFieldProps> = (args) => {
    return (
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <InputField {...args} />
        </div>
    )
}

export const WithIcons: Story<InputFieldProps> = (args) => {
    return (

        <InputField
            {...args}
            // className="w-full"
            startIcon={<IoAttach size={24} />}
            endIcon={<IoSend size={24} />}
        />
    )
}