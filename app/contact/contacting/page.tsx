"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from '@/components/ui/use-toast';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Send } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"



const FormSchema = z.object({
    mail: z.string().email({ message: "Email Invalido" }),
    message: z.string().min(10, { message: "Mensaje muy corto" }),
})

const ContactingPage = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit() {
        console.log(JSON.stringify(form.getValues(), null, 2))
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 text-center">
                <FormField
                    control={form.control}
                    name="mail"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mail</FormLabel>
                            <FormControl>
                                <Input placeholder="contactme@gmail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mensaje</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Hola, me gustaria contactarte..." {...field} />
                            </FormControl>
                            <FormDescription>
                                Gracias por contactarme...
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Enviar
                <Send className="ml-2 h-4 w-4" />
                </Button>
            </form>
        </Form>
    )
}

export default ContactingPage