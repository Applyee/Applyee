import React from 'react';
import {Field} from 'redux-form';

const renderField = ({ type, htmlFor, placeholder, labelText, size, meta: { touched } }) => (
    <div style={{marginTop: "20px"}}>
        <div className='inputgroup'>
            <input
                placeholder={placeholder}
                className='applicationinput'
                style={{width: '100%', fontSize: size, lineHeight: size}}
                type={type}
                />
            <span className="bar" style={{width: '100%'}} />
        </div>
    </div>
)
const ApplicationField = ({tag, type, labelText, placeholder, size}) => (
    <Field
        name={tag}
        placeholder={placeholder}
        component={renderField}
        htmlFor={tag}
        type={type}
        size={size}
    />
)

export default ApplicationField;
