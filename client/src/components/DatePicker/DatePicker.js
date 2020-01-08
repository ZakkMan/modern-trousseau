import React from 'react'
import './DatePicker.css'
import imageFile from '../../images/Search Icon_outlined.svg'


const DatePicker = (props) => 
<div>
<label className="date-picker" for='requested-date-input'>{props.label}</label>
<input type="date" className="requested-date-input" name='Requested Date' value={props.value} min={props.min} step="1" max={props.max}/>
</div>  

export default DatePicker
