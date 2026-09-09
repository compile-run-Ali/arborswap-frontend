import React, { useState } from "react";
import styled from 'styled-components'
import axios from 'axios'
import {useFormik} from 'formik'

import {
    Flex
} from '@arborswap/uikit'

import { useTranslation } from 'contexts/Localization'
import './listingForm.css';
import { FormSchema } from "./FormSchema";
// eslint-disable-next-line import/extensions
import CircleLoader from '../../../../components/Loader/CircleLoader'

const ListingWrap = styled.div`
    padding: 20px;
`
const ListingHeader = styled.div`
    width: 800px;
    margin: 0 auto;
    text-align:center;
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        width: 100%;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        width: 100%;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
    }
`
const ListingTitle = styled.h1`
    font-family: GilroyHome;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 150%;
    letter-spacing: 0.02em;
    color: #464754;
    padding-top:100px;
    padding-bottom: 5px;
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        width: 100%;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        width: 100%;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
    }
`
const ListingSubTitle = styled.p`
    font-family: GilroyHome;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #807373;
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        width: 100%;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        width: 100%;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
    }
`
const FormWrapper = styled.div`
    width: 800px;
    margin: 0 auto;
    background: #FFFFFF;
    border-radius: 20px;
    margin-top: 60px;
    padding: 20px;
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        width: 100%;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        width: 100%;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
    }
`
const FormContent = styled.div`
    margin: 0 auto;
`
const LoaderWrap = styled.div`
    position: relative;
    top: 200px;
    min-height: 400px;
    text-align: center;
`

const ListingForm = ()=>{
    const { t } = useTranslation();
    
    const initialValues = {
        project_name:   "",
        website:        "",
        description:    "",
        name:           "",
        email:          "",
        phone:          "",
        telegram:       "",
        message:        "",
    }

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
            window.scrollTo(0, 0)

            axios.post( `${apiroot}/api/applylisting` , {
                token:          process.env.REACT_APP_API_TOKEN,
                project_name:   formValues.project_name,
                website:        formValues.website,
                description:    formValues.description,
                name:           formValues.name,
                email:          formValues.email,
                phone:          formValues.phone,
                telegram:       formValues.telegram,
                message:        formValues.message

            }).then( ( response ) => {
                if(response.data.status === 200 ){
                    setFeedback({
                        hasFeed: true,
                        cssClass: 'alert-success',
                        message: 'Data submitted successfully!.'
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
        <>
            <ListingWrap>
                <ListingHeader>
                    <ListingTitle>{t('Apply For Listing')}</ListingTitle>
                    <ListingSubTitle>{t('Fill the form below carefully to apply.')}</ListingSubTitle>
                </ListingHeader>
                <FormWrapper>
                    <FormContent>
                    { feedback.hasFeed ? (
                        <div className={ feedback.cssClass} >{feedback.message}</div>
                    ) : '' }    
                    { ! hasPendingRequest ? (
                        <div className="wrapper">
                        <form onSubmit={handleSubmit} >
                            <div className="user-details">
                                <div className="title">Project Details</div>
                                <div className="input-box">
                                    <span className="details">{t('Name')} *</span>
                                    <input 
                                        type="text" 
                                        name="project_name" 
                                        value={values.project_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    { touched.project_name && errors.project_name ? (<p className = "form-error" >{errors.project_name}</p>) : "" }
                                </div>
                                <div className="input-box">
                                    <span className="details"> {t('Website URL (optional )')} </span>
                                    <input 
                                        type="text" 
                                        name="website" 
                                        value={values.website}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                    { touched.website && errors.website ? (<p className = "form-error" >{errors.website}</p>) : "" }
                                </div>
                                <div className="input-box-full">
                                    <span className="details">{t('Description')} * </span>
                                    <input 
                                        type="text" 
                                        name="description"
                                        value={values.description}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                    { touched.description && errors.description ? (<p className = "form-error" >{errors.description}</p>) : "" }
                                </div>
                                
                                <div className="title mt40">{t('Contact Info')}</div>

                                <div className="input-box">
                                    <span className="details">{t('Name')} *</span>
                                    <input 
                                        type="text" 
                                        placeholder="E.g James Joe" 
                                        name="name" 
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                    { touched.name && errors.name ? (<p className = "form-error" >{errors.name}</p>) : "" }
                                </div>
                                <div className="input-box">
                                    <span className="details">{t('Email Address')} *</span>
                                    <input 
                                        type="text" 
                                        placeholder="Enter email" 
                                        name="email" 
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                    { touched.email && errors.email ? (<p className = "form-error" >{errors.email}</p>) : "" }
                                </div>
                                <div className="input-box">
                                    <span className="details">{t('Telegram Handle')} *</span>
                                    <input 
                                        type="text" 
                                        placeholder="E.g @larry" 
                                        name="telegram"
                                        value={values.telegram}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                    { touched.telegram && errors.telegram ? (<p className = "form-error" >{errors.telegram}</p>) : "" }
                                </div>
                                <div className="input-box">
                                    <span className="details">{t('Phone Number (optional)')}</span>
                                    <input 
                                        type="text" 
                                        placeholder="E.g +147" 
                                        name="phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                    { touched.phone && errors.phone ? (<p className = "form-error" >{errors.phone}</p>) : "" }
                                </div>
                                <div className="input-box-full">
                                    <span className="details">{t('Message / Comments')}</span>
                                    <textarea 
                                        id="comment" 
                                        name="message"
                                        value={values.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                    { touched.message && errors.message ? (<p className = "form-error" >{errors.message}</p>) : "" }
                                </div>

                            </div>

                            <div className="button">
                                <input type="submit" className={errors ? 'submitDisable' : 'submitActive' } value="Apply" />
                            </div>
                        </form>
                    </div>
                    ) : (
                        <LoaderWrap>
                            <CircleLoader width="100" />    
                        </LoaderWrap>
                    )}
                    
                    </FormContent>
                </FormWrapper>
            </ListingWrap>
        </>
    );
}

export default ListingForm;
