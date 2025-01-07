'use client';

import React from 'react'
import * as Yup from 'yup';
import {Formik, Form, ErrorMessage, Field} from 'formik';
import { BackgroundBeams } from '@/components/ui/background-beams';

interface formData{
    email: string;
    message: string;
}

const page:React.FC = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid Email").required('Email is required'),
        message: Yup.string().required('Message is required'),
    })

    const submitHandler = (values:formData) => {
        console.log(values);
    }

  return (
    // <div className='"min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative' >

    <div className='"min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 ' >
        <div className="max-w-2xl h-100 mx-auto p-4 relative z-10">
        
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <div className='mt-20 h-[42vh]' >
            <Formik
            initialValues={{
                email: '',
                message: '',
                }}
                validationSchema={validationSchema}
                onSubmit={submitHandler}>
                    {()=>(
                        <Form className="flex flex-col space-y-4 mx-10 ">
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm text-gray-400" htmlFor="email">Email</label>
                                <Field
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full p-2 text-sm text-gray-600 border border-gray-300 rounded"
                                />
                                <ErrorMessage name="email" component="div" className="text-sky-500" />
                            </div>
                            <div className="flex flex-col space-y-2 " >
                                <label className="text-sm text-gray-400" htmlFor="message">Message</label>
                                <Field
                                type="textarea"
                                name="message"
                                placeholder="Message"
                                className="w-full p-2 text-sm text-gray-600 border border-gray-300 rounded"
                                />
                                <ErrorMessage name="message" component="div" className="text-sky-500" />
                            </div>
                            <br /><br />
                            <button className='bg-white text-black w-36 p-2 rounded btn btn' type='submit'  >Submit</button>
                        </Form>
                    )}

            </Formik>
        </div>
        </div>
        <BackgroundBeams />
    </div>
  )
}

export default page