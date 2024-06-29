"use client";

import SlideMenu from '@/components/SlideMenu/SlideMenu'
import React, { useState } from 'react'
import {Button, TextInput} from "../components/ui/Common"
import { SubmitHandler, useForm } from 'react-hook-form';
import InputWrapper from '@/components/InputWrapper';
import { formSchema } from '@/components/schema';
import { zodResolver } from "@hookform/resolvers/zod";
import { get } from "lodash";
import { z } from "zod";
import { Form } from '@/components/ui/form';
import MainSection from '@/components/MainSection';

const page = () => {

  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // email: "",
    },
  });

  const {
    formState: { errors },
    setValue,
  } = form;

  async function onSubmit (data: z.infer<typeof formSchema>){
    console.log(data,"data")
  }

  return ( 
    <div className=" min-h-screen bg-gray-100 relative">
      <SlideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`transition-all duration-300 ${
          isOpen ? 'md:ml-64' : 'ml-0'
        } ${isOpen ? 'opacity-30 md:opacity-100' : 'opacity-100'}`}
      >
        <MainSection setIsOpen={setIsOpen} />
        {/* <TextInput
         type='text' 
         placeholder='Enter your email'
         {...register("email", { required: true })}
         
          />
          <Button type='submit' className='mt-10' onClick={handleSubmit(onSubmit)} >
            Submit
            </Button> */}
            {/* <Form {...form} >

            <InputWrapper
                      required
                      className={`rounded-lg border border-solid ${
                        get(errors, "name", false)
                          ? "border-2 border-destructive"
                          : "border-input"
                      }  p-3`}
                      form={form}
                      name="email"
                      placeholder="john@gmail.com"
                      renderComponent={(props: any) => (
                        <TextInput {...props} type="email" />
                      )}
                      title="User Email"
                      />
                      <Button onClick={form.handleSubmit(onSubmit)} type="submit"  className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                      Submit
                      </Button>
                      </Form> */}
      </div>
    </div>
  )
}

export default page
