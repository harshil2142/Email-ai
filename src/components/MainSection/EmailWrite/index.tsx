import React from 'react';
import { cn } from "@/lib/utils"
import { LuMail } from 'react-icons/lu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ComposeNewEmail from './ComposeNewEmail';
import ReplyToEmail from './ReplyToEmail';

const EmailWrite = (props:any) => {

    const { response , setResponse } = props || {}

    return (
        <div className='py-6'>
            <div className=" mx-3 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="border-b-2 border-gray-300 p-4">
                    <h2 className="text-large justify-center items-center font-bold text-dark flex"> <LuMail className='mr-2 text-xl' /> Email Generator</h2>
                </div>
                <Tabs defaultValue={"composeNewEmail"} className={cn("w-full")}>
                    <TabsList className='w-full'>
                        <TabsTrigger value="composeNewEmail">Compose New Email</TabsTrigger>
                        <TabsTrigger value="replyToEmail">Reply To Email</TabsTrigger>
                    </TabsList>
                    <TabsContent value="composeNewEmail">
                        <ComposeNewEmail setResponse={setResponse} response={response} />
                    </TabsContent>
                    <TabsContent value="replyToEmail">
                        <ReplyToEmail setResponse={setResponse} response={response} />
                    </TabsContent>
                </Tabs>
               
            </div>
        </div>
    );
};

export default EmailWrite;
