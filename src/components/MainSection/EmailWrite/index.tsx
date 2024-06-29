import React from 'react';
import { useForm } from 'react-hook-form';
import { cn } from "@/lib/utils";
import { TextInput } from '@/components/ui/Common';
import { formSchema } from '@/components/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod"
import { Form } from '@/components/ui/form';
import InputWrapper from '@/components/InputWrapper';
import { get } from 'lodash';
import { LuMail } from 'react-icons/lu';
import { SelectOptions } from '@/components/ui/select';
import { toneOptions } from './helper';

const EmailWrite = () => {

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            sender: "",
            receiver: "",
            purpose: "",
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
        <div className='py-6'>
            <div className=" mx-3 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="border-b-2 border-gray-300 p-4">
                    <h2 className="text-large justify-center items-center font-bold text-dark flex"> <LuMail className='mr-2 text-xl' /> Email Generator</h2>
                </div>
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
                                    name="sender"
                                    placeholder="Enter Sender Name.."
                                    renderComponent={(props: any) => (
                                        <TextInput {...props} type="text" />
                                    )}
                                    title="Sender"
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
                                    name="receiver"
                                    placeholder="Enter Receiver Name.."
                                    renderComponent={(props: any) => (
                                        <TextInput {...props} type="text" />
                                    )}
                                    title="Receiver"
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
                                    name="purpose"
                                    placeholder="Enter Purpose Name.."
                                    renderComponent={(props: any) => (
                                        <TextInput {...props} type="text" />
                                    )}
                                    title="Purpose"
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
                                        <TextInput {...props} type="text" />
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
                                            menuOptions={[{name:"English",value:"English"}]}
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
        </div>
    );
};

export default EmailWrite;
