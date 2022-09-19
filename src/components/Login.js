import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import {employee} from '../database/Data'
import { ErrorMessage, Field } from 'formik'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Errortext from './Errortext'
import {pojectlist} from '../database/ProjectData'

let initialValues = {
    // esme key ka name input value m string k name se same hona chaiye
    password: '',
    email: ''
}

let onSubmit = (values) => {
    console.log("values",values);
   let filterlogindata = employee.filter((e)=>e.gmail===values.email && e.password === values.password)
   console.log("filter chalu h",filterlogindata[0].role);
   if(filterlogindata){
             if(filterlogindata[0].role==="mentor")
             {
                console.log("mentor data aayega");
             }
   }

}
const validationSchema = Yup.object({
    password: Yup.string().required('required'),
    email: Yup.string().email('invalid input').required('required')
})

function Login() {
    const[mentordata,setMentordata] = useState([{}])
    
    const[uservalue,setUservalue] =useState('')
    function handlelogindata(){
        console.log("user value is",uservalue);
        pojectlist.map((e)=>{
           let arr = e.access ;
         arr.map((ele)=>{
            if(ele==="ajay"){
                // console.log("e data is",e);
                setMentordata([{...mentordata,...e}])
            }
         })
        })
        console.log("mentor data", mentordata);
         
   }

    return (
        <Formik initialValues={ initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
        >
            {
                formik => {
                    // console.log("formik is here", formik);
                    return (

                        <Form  className='form'>
                            
                            <div className='action'>
                                <div><h3>Login Here</h3></div>
                            <div className='form-control'>
                                <Field type="email" id="email" name="email" placeholder='Enter Your Mail' />
                                <ErrorMessage name='email' component={Errortext} />                               
                            </div>
                            <div className='form-control'>
                                <Field type="password" id="password" name="password" placeholder='Enter Your Password' />

                                <ErrorMessage name='password' component={Errortext} />
                            </div>
                            <div className='radio'>
                                <select onChange={(e)=>setUservalue(e.target.value)}>
                                    <option value='employee'>Employee</option>
                                    <option value='mentor'>Mentor</option>
                                </select>
                            </div>
                            <button type='submit' onClick={handlelogindata}>Login</button>
                            <div className='span'>Don't Have Account? <Link to='/signup'><span>Signup</span></Link></div>
                            </div>
                           
                        </Form>
                    )
                }
            }

        </Formik>
    )
}

export default Login
