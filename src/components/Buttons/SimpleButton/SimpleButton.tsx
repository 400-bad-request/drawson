import React from 'react'
import classNames from 'classnames'
import './SimpleButton.scss'

interface IProps {
    active?: boolean
    filled?: boolean
    key?: string
    label: string
    onClick?: () => any
    style?: React.CSSProperties
}

export const SimpleButton = (props: IProps) => {
    const getClassName = () => {
        return classNames('SimpleButton', {
            active: props.active,
            fill: props.filled
        })
    }
    return (
        <div
            className={getClassName()}
            onClick={props.onClick}
            key={props.key}
            style={props.style}
        >
            {props.label}
        </div>
    )
}