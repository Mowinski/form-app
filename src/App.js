
import './App.css';
import React from 'react';
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import First from './First';
import Second from './Second';
import Third from './Third';
import {BrowserRouter as Router, Switch, Redirect, Route, Link} from 'react-router-dom';
import logo from './img/nyc.jpg';



class App extends React.Component {

  handleSubmit(values) {
    alert(JSON.stringify(values, null, 2));
  }

  render() {
    
    return (
      <div className="App">
       
          <h1>Address and Personal Data Form</h1>
        <Formik
          initialValues={{
            name: '',
            surname: '',
            pesel: "",
            nip: "",
            street: "",
            city: "",
            zipCode: "",
          }}
          onSubmit= {this.handleSubmit}
          validationSchema ={Yup.object().shape({
            name: Yup.string()
              .min(2, 'One letter name? That`s unusual man!')
              .max(10, 'You have really long name!')
              .required('Required'),
            surname: Yup.string()
              .min(2, 'Too Short!')
              .max(50, 'Very long surname!')
              .required('Required'),
            pesel: Yup.string()
              .required()
              .matches(/^[0-9]+$/, "Must be only digits")
              .min(11, 'Must be exactly 11 digits')
              .max(11, 'Must be exactly 11 digits')
              .test('test-name','Bad check sum of PESEL', (value) => {
                    if(!value) return false;
                    const weight = [1,3,7,9,1,3,7,9,1,3];
                    let sum = 0;
                    let m;
                    let checkSum;
                    let controlDigit;
                    for(let i=0; i < 10; i++) {
                      sum += value[i] * weight[i] 
                    }
                    console.log(sum);
                    m = sum % 10;
                    return (10 - m) % 10 == value[10];
              }),
            nip: Yup.string()
              .required()
              .matches(/^[0-9]+$/, "Must be only digits")
              .min(10, 'Must be exactly 10 digits')
              .max(10, 'Must be exactly 10 digits'),
            street: Yup.string()
              .min(2, 'Not to short street name?')
              .max(25, 'You live on looooong street')
              .required('Required'),
            city: Yup.string()
              .required(),
            zipCode: Yup.string()
              .min(6, 'Must be like this: XX-XXX')
              .max(6, 'Must be like this: XX-XXX')
              .required('Required'),
          })
          
          } 
        >
          {formik => {
            return (
            <Form className="form">
              <Switch>
                <Redirect from="/" exact to="/first" />
                <Route path="/first">
                  <First/>
                </Route>
                <Route path="/second" component={Second} />
                <Route path="/third">
                  <Third formik = {formik}/>
                </Route>
              </Switch>
            </Form>
            )

          }}
          </Formik> 
         

      </div>
    );
  
  }
}
export default App;
