import React, {useState} from "react";
import {useFormik} from 'formik'
import axios from "axios";
import styled from 'styled-components'
import { FormSchema } from "./FormSchema";
import './footerContact.css'
import CircleLoader from '../../../../components/Loader/CircleLoader'
/* SubscriptionForm */
const LoaderWrap = styled.div`
    text-align: center;
`

const SubscriptionForm = () => {

  const initialValues = { email: "" }

  const [feedback, setFeedback] = useState({
      hasFeed: false,
      cssClass: '',
      message: ''
  });

const removeFeed = ()=>{
    setTimeout(()=>{
        setFeedback({...feedback, hasFeed: false})
    }, 3000)
}

const [hasPendingRequest, setHasPendingRequest] = useState(false)

const apiroot = process.env.REACT_APP_API_ROOT
const {values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({

    initialValues,
    validationSchema: FormSchema,
    onSubmit: ( formValues , actions )=>{
        
        setHasPendingRequest(true)

        axios.post( `${apiroot}/api/emailsubscription` , {
            token: process.env.REACT_APP_API_TOKEN,
            email: formValues.email
        }).then( ( response ) => {
            if(response.data.status === 200 ){
                setFeedback({
                    hasFeed: true,
                    cssClass: 'alert-success',
                    message: 'Subscription is started successfully!.'
                })
            }else{
                setFeedback({
                    hasFeed: true,
                    cssClass: 'alert-error',
                    message: 'Something went wrong. Please try again.'
                })
            }
            resetForm();
            setHasPendingRequest(false)
            removeFeed()
        }).catch( (error)=> {
            if(error){
                setFeedback({
                    hasFeed: true,
                    cssClass: 'alert-error',
                    message: 'Something went wrong. Please try again.'
                })
            }
            setHasPendingRequest(false)
            removeFeed()
        });
    }

  })
    return (
      <div className="w-full flex subscription">
        <div className="subscription-form" >
            { feedback.hasFeed ? (
                <div className={ feedback.cssClass} >{feedback.message}</div>
            ) : '' }   
            { ! hasPendingRequest ? (
              <form onSubmit={handleSubmit} >
                <input 
                  type="text" 
                  placeholder="Enter your email" 
                  name="email" 
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                { touched.email && errors.email ? (<p className = "form-error" >{errors.email}</p>) : "" }
                <button type="submit" >
                    <img src="images/home/imgnew/search-button.png" alt="" />
                </button>
            </form>
            ) : (
              <LoaderWrap>
                  <CircleLoader width="100" />    
              </LoaderWrap>
            )}
            
        </div>
      </div>
    );
  };
  
  export default SubscriptionForm;