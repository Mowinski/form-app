import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { ErrorMessage, Field } from "formik";

export default () => { 

    return (
        <>
                <Field
                id="pesel"
                name="pesel"
                type="number"
                placeholder="PESEL"
                />
                <ErrorMessage name="pesel" className="error-box" component="div"/>

                <Field
                id="nip"
                name="nip"
                type="number"
                placeholder="NIP"
                />
                <ErrorMessage name="nip" className="error-box" component="div"/>
            <Link to="/first">Previous</Link>
            <Link to="/third">Next</Link>
                
           
        </>

    );


}