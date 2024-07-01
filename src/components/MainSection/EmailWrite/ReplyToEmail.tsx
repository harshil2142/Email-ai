import InputWrapper from '@/components/InputWrapper';
import { replyMailSchema } from '@/components/schema';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { TextInput, SelectOptions } from '@/components/ui/Common';
import { get } from 'lodash';
import { toneOptions } from './helper';
import { Slider } from '@/components/ui/slider';

const ReplyToEmail = () => {

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const form = useForm<z.infer<typeof replyMailSchema>>({
        resolver: zodResolver(replyMailSchema),
        defaultValues: {
            sender: "",
            receiver: "",
            purpose: "",
            length: "",
            tone: "",
            receivedEmail : "",
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
                                name="receivedEmail"
                                // placeholder="Enter Receiver Name.."
                                renderComponent={(props: any) => (
                                    <TextInput {...props} type="text" />
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
                                    <Slider defaultValue={[0]} max={300} step={1} onChange={props.onChange}  />
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
                                        menuOptions={[{ name: "English", value: "English" }]}
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

