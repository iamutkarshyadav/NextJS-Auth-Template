"use client";
import * as z from "zod";
import { CardWrapper } from "./card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import {Input} from "@/components/ui/input";
import { 
    Form,
    FormControl,
    FormLabel,
    FormItem,
    FormMessage, 
    FormField
} from "@/components/ui/form"

import { useForm } from "react-hook-form";


export const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "" ,  
        },
    });
    return (
        
        <CardWrapper
            headerLabel="Welcome Back!"
            backButtonLabel="Create an account"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(() => { })}
                className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel >Email</FormLabel>
                                    <Input {...field}
                                        placeholder="john.doe@example.com"
                                        type="email"
                                    />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel >Password</FormLabel>
                                    <Input {...field}
                                        placeholder="********"
                                        type="password"
                                    />
                                </FormItem>
                            )}
                        />
                    </div>
                </form> 
            </Form>
        </CardWrapper>
    )
}

