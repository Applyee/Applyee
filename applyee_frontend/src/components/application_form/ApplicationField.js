import React from 'react';
import {Field} from 'redux-form';

const renderField = ({ input, type, htmlFor, placeholder, labelText, size, meta: { touched } }) => (
    <div>
        <div className='inputgroup'>
            <input
                {...input}
                placeholder={placeholder}
                className='applicationinput'
                style={{width: '100%', fontSize: size, lineHeight: size}}
                type={type}
                />
            <span className="bar" style={{width: '100%'}} />
        </div>
    </div>
)
const ApplicationField = ({name, type, labelText, placeholder, size}) => (
    <Field
        name={name}
        placeholder={placeholder}
        component={renderField}
        htmlFor={name}
        type={type}
        size={size}
    />
)

export default ApplicationField;
