import InputWrapper from '@/components/InputWrapper';
import { formSchema } from '@/components/schema';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { TextInput, SelectOptions, Textarea } from '@/components/ui/Common';
import { get } from 'lodash';
import { languageOptions, lengthOptions, toneOptions } from './helper';
import { postRequest } from '@/services/api';
import Loader from '@/components/Loader/Loader';
import { Toast } from '@/components/ui/alert';

const ComposeNewEmail = (selectProps: any) => {

    const { setResponse, response, setLoading, loading } = selectProps || {}

    async function onSubmit(data: any) {
<Toast title='hi' description="hi" />
        setLoading(true)
        const payload = {
            type: "new",
            subject: data?.emailSubject,
            length_of_email: data?.length,
            tone: data?.tone,
            language: data?.language,
        }
        try {
            const res = await postRequest({ data: { ...payload }, url: "/api/emails" })
            if (res) {
                setResponse(res?.data)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            emailSubject: "",
            length: "Short",
            tone: "Casual",
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
                                name="emailSubject"
                                placeholder='Example: I am writing to propose a new marketing campaign that I believe will be effective for your business.'
                                renderComponent={(props: any) => (
                                    <Textarea rows={8} {...props} />
                                )}
                                title="Email Subject"
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
                                renderComponent={(props: any) => (
                                    // <Slider defaultValue={[0]} max={300} step={1} onChange={props.onChange}  />
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
                                    // <SelectOptions
                                    //     menuOptions={languageOptions}
                                    //     selectLabel={"Select Language"}
                                    //     textKey="name"
                                    //     valueKey="value"
                                    //     isDisabled={true}
                                    //     className={props.className}
                                    //     onChange={props.onChange}
                                    //     value={props.value}
                                    // />
                                    <TextInput value="English" onChange={undefined} />
                                )}
                                title="Language"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-dark hover:bg-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-24 text-center flex justify-center"
                            >
                                {loading ? <Loader /> : "Submit"}
                            </button>
                        </div>
                    </form>
                </Form>
            </div>
            
        </div>
    )
}

export default ComposeNewEmail
