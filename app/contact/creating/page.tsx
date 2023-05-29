'use client'
import CardWithGlow from "@/components/widgets/card";
import { useState } from 'react';
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
const FormSchema = z.object({
    email: z.string().email({ message: "Email Invalido" }),
    message: z.string().min(7, { message: "Mensaje muy corto" }),
    focus: z.string().min(1, { message: "Selecciona una opcion" }),
    phone: z.string().min(9, { message: "Telefono invalido" }),
    name: z.string().min(3, { message: "Nombre invalido" }),
    // Boolean Pricings
    basic: z.boolean().default(false).optional(),
    premium: z.boolean().default(false).optional(),
})

export default function CreatingPage() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })
    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log
    }
    // checked Pricings
    const [checked, setChecked] = useState([false, false]);
    return (
        <section className="flex h-full w-full flex-col items-center justify-center gap-2 px-2">
            <p className="pb-2 text-center text-base font-light text-white">La clave del éxito online comienza con un sitio web de calidad</p>
            <p className="pb-2 text-center text-2xl font-bold text-white">¿Que tipo de web necesitas?</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                    <div className="flex flex-col gap-2 sm:flex-row">
                        <FormField
                            control={form.control}
                            name='basic'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div onClick={() => setChecked([!checked[0], false])}>
                                            <CardWithGlow checked={checked[0]} >
                                                <div>
                                                    <h3 className="text-base font-semibold leading-7 text-sky-500">
                                                        Simple
                                                    </h3>
                                                    <div className="mt-2 flex items-center gap-x-2">
                                                        <span className="text-5xl font-bold tracking-tight text-white">
                                                            49.000CLP
                                                        </span>
                                                    </div>
                                                    <ul className="mt-6 list-disc text-base leading-7 text-gray-300	">
                                                        <li>Diseño Simple y Adaptable</li>
                                                        <li>Paginas Limitadas</li>
                                                        <li>CopyWriting</li>
                                                        <li>Max de Imagenes</li>
                                                        <li>SEO <span className="text-xs font-extralight">(Optimización para motores de búsqueda)</span></li>
                                                        <li>Captacion Clientes<span className="text-xs font-extralight"> (Formulario de contacto)</span></li>
                                                        <li>Dominio<span className="text-xs font-extralight"> (Solo Instalacion)</span></li>
                                                        <li>Soporte y Asistencia</li>
                                                    </ul>
                                                </div>
                                            </CardWithGlow>
                                        </div>

                                    </FormControl>
                                    <FormDescription>
                                        <span className="text-xs font-extralight">*Limites de uso</span>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='basic'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div onClick={() => setChecked([false, !checked[1]])}>
                                            <CardWithGlow checked={checked[1]} >
                                                <div>
                                                    <h3 className="text-base font-semibold leading-7 text-sky-500">
                                                        Plus+
                                                    </h3>
                                                    <div className="mt-2 flex flex-col-reverse items-center gap-x-2 sm:flex-row">
                                                        <span className="text-5xl font-bold tracking-tight text-white">
                                                            67.500CLP
                                                        </span>
                                                        <span className="text-sm font-bold tracking-tight text-white line-through decoration-red-500 sm:text-xl">
                                                            80.000CLP
                                                        </span>
                                                    </div>
                                                    <ul className="mt-6 list-disc text-base leading-7 text-gray-300	">
                                                        <li>Diseño 100% Personalizado y Unico</li>
                                                        <li>SEO Avanzado + Google Analytics<span className="text-xs font-extralight"> (Incluye Metricas)</span></li>
                                                        <li>Atrae Clientes<span className="text-xs font-extralight"> (De forma personalizada)</span></li>
                                                        <li>CopyWriting Avanzado</li>
                                                        <li>Soluciones Personalizadas<span className="text-xs font-extralight"> (Contacta para mas)</span></li>
                                                        <li>Imagenes Optimizadas</li>
                                                        <li>Dominio</li>
                                                        <li>Soporte y Asistencia prioritaria</li>
                                                    </ul>
                                                </div>
                                            </CardWithGlow>
                                        </div>
                                    </FormControl>
                                    <FormDescription>
                                        <span className="text-xs font-extralight">*El precio esta sujeto a cambios</span>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="focus"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Enfoque</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a verified email to display" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="m@example.com">Mi Negocio</SelectItem>
                                        <SelectItem value="m@google.com">Un Producto</SelectItem>
                                        <SelectItem value="m@support.com">Mi Marca Personal</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Cual es el enfoque de tu futura web?
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </section>
    )
}