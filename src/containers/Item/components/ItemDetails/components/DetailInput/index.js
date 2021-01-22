import React from 'react'

import { StyledInput } from './styles'

const DetailInput = ({
  label,
  max,
  min,
  name,
  placeholder,
  setValue,
  type,
  value,
}) => {
  const handleChange = e => {
    if (type) {
      if (e.target.value === '') {
        setValue({ [name]: '' })
        return
      }
      setValue({
        [name]: Math.max(
          Number(min),
          Math.min(Number(max), Number(e.target.value)),
        ),
      })
      return
    }
    setValue({ [name]: e.target.value })
  }

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <StyledInput
        name={name}
        type={type}
        label={label}
        max={max}
        min={min}
        maxlength="250"
        value={value[name]}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </>
  )
}

export default DetailInput
