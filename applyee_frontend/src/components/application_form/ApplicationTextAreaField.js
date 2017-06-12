import React from 'react';
import {Field} from 'redux-form';
import TextareaAutosize from 'react-autosize-textarea';

const renderField = ({ input, placeholder, rows, meta: { touched } }) => (
    <div>
        <TextareaAutosize
            {...input}
            rows={rows}
            style={{border: 'none', width: '100%'}}
            placeholder={placeholder}/>
    </div>
)
const ApplicationTextAreaField = ({name, placeholder, rows}) => (
    <Field
        name={name}
        placeholder={placeholder}
        component={renderField}
        htmlFor={name}
        rows={rows}
    />
)

export default ApplicationTextAreaField;
