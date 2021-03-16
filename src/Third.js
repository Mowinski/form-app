import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { ErrorMessage, Field } from "formik";


export default (props) => { 
    console.log(props.formik)
    return (
        <>
             <Field
                id="street"
                name="street"
                type="text"
                placeholder="street"
                />
               <ErrorMessage name="street" className="error-box" component="div"/>
                <Field
                id="city"
                name="city"
                type="city"
                placeholder="city"
                />
                <ErrorMessage name="city" className="error-box" component="div"/>
                <Field
                id="zipCode"
                name="zipCode"
                type="text"
                placeholder="zip code"
                />
                <ErrorMessage name="zipCode" className="error-box" component="div"/>

                <button disabled={!(props.formik.isValid && props.formik.dirty)} type="submit">Submit</button>
                
            <Link to="/second">Previous</Link>
        </>

    );


}