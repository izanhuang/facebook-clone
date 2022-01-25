import React from 'react'
import { Select } from '../styles/Select'

const SelectBirthdayMonth = () => {
  return (
    <Select month name="birthday_month" id="month">
      <option value="1">Jan</option>
      <option value="2">Feb</option>
      <option value="3">Mar</option>
      <option value="4">Apr</option>
      <option value="5">May</option>
      <option value="6">Jun</option>
      <option value="7">Jul</option>
      <option value="8">Aug</option>
      <option value="9">Sep</option>
      <option value="10">Oct</option>
      <option value="11">Nov</option>
      <option value="12">Dec</option>
    </Select>
  )
}

export default SelectBirthdayMonth