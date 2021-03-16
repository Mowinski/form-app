import React from 'react';
import { ErrorMessage, Field } from "formik";
import * as Yup from 'yup';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Second from './Second';



export default (props) => { 
    console.log(props.formik)
    return (
        <>
                <Field
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                />
                <ErrorMessage name="name" className="error-box" component="div"/>

                <Field
                id="surname"
                name="surname"
                type="text"
                placeholder="Surname"
                />
                <ErrorMessage name="surname" className="error-box" component="div"/>
                       
                <Link to="/second">Next</Link>
   
        </>

    );


}