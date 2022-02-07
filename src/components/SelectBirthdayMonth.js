import React from 'react'
import { Select } from '../styles/Select'

const SelectBirthdayMonth = ({ birthMonthRef }) => {
  return (
    <Select month name="birthday_month" id="month" ref={birthMonthRef}>
      <option value="January">Jan</option>
      <option value="February">Feb</option>
      <option value="March">Mar</option>
      <option value="April">Apr</option>
      <option value="May">May</option>
      <option value="June">Jun</option>
      <option value="July">Jul</option>
      <option value="August">Aug</option>
      <option value="September">Sep</option>
      <option value="October">Oct</option>
      <option value="November">Nov</option>
      <option value="December">Dec</option>
    </Select>
  )
}

export default SelectBirthdayMonth
