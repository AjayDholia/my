import React from 'react'
import { Link } from 'react-router-dom'
import { ErrorMessage, Field, FieldArray } from 'formik'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Errortext from './Errortext'
import './signup.css'
let initialValues = {
    // esme key ka name input value m string k name se same hona chaiye
    firstname: '',
    lastname: '',
    email: '',
    password: ''
}
let onSubmit = (values) => {
    console.log("form data", values);
}
const validationSchema = Yup.object({
    firstname: Yup.string().required('required'),
    lastname: Yup.string().required('required'),
    password: Yup.string().required('required'),
    email: Yup.string().email('invalid input').required('required')
})
function Signup() {
    return (
        <Formik 
        initialValues={ initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
            {
                formik => {
                    return (
                        <Form>
                            <div className="page">
                                <h1>Sign Up</h1>
                                <div className='form-control'>
                                    <Field type="text" placeholder="First Name" name='firstname' className="input" />
                                    <ErrorMessage name='firstname' component={Errortext} />
                                </div>
                                <div className='form-control'>
                                    <Field type="text" placeholder="Last Name" name='lastname' className="input" />
                                    <ErrorMessage name='lastname' component={Errortext} />
                                </div>
                                <div className='form-control'>
                                    <Field type="email"  name="email" placeholder='Enter Your Mail' className='input' />
                                    <ErrorMessage name='email' component={Errortext} />
                                </div>
                                <div className='form-control'>
                                    <Field type="password"  name="password" placeholder='Enter Your Password' className='input'/>
                                    <ErrorMessage name='password' component={Errortext} />
                                </div>

                                <div><p>Already Have a Account <Link to='/'><span>Login</span></Link></p></div>

                                <button type='submit' className='Signbtn'>SignUp</button>

                            </div>
                        </Form>
                    )
                }
            }

        </Formik>
    )
}

export default Signup