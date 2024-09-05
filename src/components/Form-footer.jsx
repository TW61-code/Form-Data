import React from 'react';

function FormFooter({text, type}) {
    return (
        <p className='form-footer'>
            {/* REMEMBER TO SET THIS A TAG */}
            {text} <span className='form-footer-span'><a>{type}</a></span>
        </p>
    );
}

export default FormFooter;