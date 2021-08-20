import React from 'react'
import PropTypes from 'prop-types'
export default function InputBox({ value, type, onChange, className, others } = {}) {
    return (
        <input className={className} value={value} type={type} {...others} onChange={(e) => onChange(e.target.value)} />
    )
}
InputBox.propTypes = {
    valueFromParent: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    others: PropTypes.object,
}