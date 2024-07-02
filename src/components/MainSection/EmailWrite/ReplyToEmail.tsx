import InputWrapper from '@/components/InputWrapper';
import { replyMailSchema } from '@/components/schema';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { TextInput, SelectOptions, Textarea } from '@/components/ui/Common';
import { get } from 'lodash';
import { languageOptions, lengthOptions, toneOptions } from './helper';
import { Slider } from '@/components/ui/slider';
import { postRequest } from '@/services/api';

const ReplyToEmail = (props:any) => {

    async function onSubmit(data: any) {
        const payload = {
            type: "reply",
            subject: data?.emailSubject,
            length_of_email: data?.length,
            tone: data?.tone,
            language: data?.language,
            original_email : data?.receivedEmail,
        }
        const res = await postRequest({ data: { ...payload }, url: "/api/emails" })
        props.setResponse(res?.data)
    };

    const form = useForm<z.infer<typeof replyMailSchema>>({
        resolver: zodResolver(replyMailSchema),
        defaultValues: {
            replySubject: "",
            receivedEmail: "",
            length: "",
            tone: "",
            language: "English",
        },
    });

    const {
        formState: { errors },
        setValue,
        handleSubmit,
        register,
    } = form;

    return (
        <div>
            <div className="p-4">
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <InputWrapper
                                required
                                className={`rounded-lg border border-solid ${get(errors, "name", false)
                                    ? "border-2 border-destructive"
                                    : "border-input"
                                    }  p-3`}
                                form={form}
                                name="replySubject"
                                renderComponent={(props: any) => (
                                    <Textarea rows={4} {...props}  />
                                )}
                                title="Reply Subject"
                            />
                        </div>
                        <div className="mb-4">
                            <InputWrapper
                                required
                                className={`rounded-lg border border-solid ${get(errors, "name", false)
                                    ? "border-2 border-destructive"
                                    : "border-input"
                                    }  p-3`}
                                form={form}
                                name="receivedEmail"
                                renderComponent={(props: any) => (
                                    <Textarea rows={4} {...props}  />
                                )}
                                title="Received Email"
                            />
                        </div>
                        <div className="mb-4">
                            <InputWrapper
                                required
                                className={`rounded-lg border border-solid ${get(errors, "name", false)
                                    ? "border-2 border-destructive"
                                    : "border-input"
                                    }  p-3`}
                                form={form}
                                name="length"
                                placeholder=""
                                renderComponent={(props: any) => (
                                    <SelectOptions
                                        menuOptions={lengthOptions}
                                        selectLabel={"Select Length"}
                                        textKey="name"
                                        valueKey="value"
                                        className={props.className}
                                        onChange={props.onChange}
                                        value={props.value}
                                    />
                                )}
                                title="Length"
                            />

                        </div>
                        <div className="mb-4">
                            <InputWrapper
                                required
                                className={`rounded-lg border border-solid ${get(errors, "name", false)
                                    ? "border-2 border-destructive"
                                    : "border-input"
                                    }  p-3`}
                                form={form}
                                name="tone"
                                placeholder=""
                                renderComponent={(props: any) => (
                                    <>
                                        <SelectOptions
                                            menuOptions={toneOptions}
                                            selectLabel={"Select Tone"}
                                            textKey="name"
                                            valueKey="value"
                                            className={props.className}
                                            onChange={props.onChange}
                                            value={props.value}
                                        />
                                    </>
                                )}
                                title="Tone"
                            />

                        </div>
                        <div className="mb-4">
                            <InputWrapper
                                required
                                className={`rounded-lg border border-solid ${get(errors, "name", false)
                                    ? "border-2 border-destructive"
                                    : "border-input"
                                    }  p-3`}
                                form={form}
                                name="language"
                                // placeholder="Enter language Name.."
                                renderComponent={(props: any) => (
                                    <SelectOptions
                                        menuOptions={languageOptions}
                                        selectLabel={"Select Language"}
                                        textKey="name"
                                        valueKey="value"
                                        className={props.className}
                                        onChange={props.onChange}
                                        value={props.value}
                                    />
                                )}
                                title="Language"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-dark hover:bg-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default ReplyToEmail

