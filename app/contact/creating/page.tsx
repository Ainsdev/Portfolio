"use client"

import { useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import CardWithGlow from "@/components/widgets/card"

const FormSchema = z.object({
  email: z.string().email({ message: "Email Invalido" }),
  message: z.string().min(7, { message: "Mensaje muy corto" }),
  focus: z.string().min(1, { message: "Selecciona una opcion" }),
  phone: z.string().min(9, { message: "Telefono invalido" }),
  name: z.string().min(3, { message: "Nombre invalido" }),
  // Boolean Pricings
  basic: z.boolean().default(false).optional(),
  premium: z.boolean().default(false).optional(),
  //Checkbox personalization
  logo: z.boolean().default(false).optional(),
  solution: z.boolean().default(false).optional(),
  colors: z.boolean().default(false).optional(),
})

const pricingData1 = (
  <div>
    <h3 className="text-base font-semibold leading-7 text-sky-500">Plus+</h3>
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
      <li>
        SEO Avanzado + Google Analytics
        <span className="text-xs font-extralight"> (Incluye Metricas)</span>
      </li>
      <li>
        Atrae Clientes
        <span className="text-xs font-extralight">
          {" "}
          (De forma personalizada)
        </span>
      </li>
      <li>CopyWriting Avanzado</li>
      <li>
        Soluciones Personalizadas
        <span className="text-xs font-extralight"> (Contacta para mas)</span>
      </li>
      <li>Imagenes Optimizadas</li>
      <li>Dominio</li>
      <li>Soporte y Asistencia prioritaria</li>
    </ul>
  </div>
)

const pricingData2 = (
  <div>
    <h3 className="text-base font-semibold leading-7 text-sky-500">Simple</h3>
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
      <li>
        SEO{" "}
        <span className="text-xs font-extralight">
          (Optimización para motores de búsqueda)
        </span>
      </li>
      <li>
        Captacion Clientes
        <span className="text-xs font-extralight">
          {" "}
          (Formulario de contacto)
        </span>
      </li>
      <li>
        Dominio
        <span className="text-xs font-extralight"> (Solo Instalacion)</span>
      </li>
      <li>Soporte y Asistencia</li>
    </ul>
  </div>
)
const CreatingPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const json = await response.json()
      alert(JSON.stringify(json))
    } catch (error) {
      alert(error)
    }
  }
  // checked Pricings
  const [checked, setChecked] = useState([false, false])

  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-2 p-2">
      <p className="pb-2 text-center text-base font-light ">
        La clave del éxito online comienza con un sitio web de calidad
      </p>
      <p className="pb-2 text-center text-2xl font-bold">
        ¿Que tipo de web necesitas?
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <div className="flex flex-col gap-2 sm:flex-row">
            <FormField
              control={form.control}
              name="basic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <div
                      onClick={() => {
                        field.onChange(!field.value)
                        setChecked([!checked[0], false])
                      }}
                    >
                      <CardWithGlow checked={checked[0]}>
                        {pricingData2}
                      </CardWithGlow>
                    </div>
                  </FormControl>
                  <FormDescription>*Uso limitado</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="premium"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <div
                      onClick={() => {
                        field.onChange(!field.value)
                        setChecked([false, !checked[1]])
                      }}
                    >
                      <CardWithGlow checked={checked[1]}>
                        {pricingData1}
                      </CardWithGlow>
                    </div>
                  </FormControl>
                  <FormDescription>*El precio puede variar</FormDescription>
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border-secondary">
                      <SelectValue placeholder="Select una opcion..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="business">Mi Negocio</SelectItem>
                    <SelectItem value="product">Un Producto</SelectItem>
                    <SelectItem value="personal">Mi Marca Personal</SelectItem>
                    <SelectItem value="all">Todas las anteriores</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Cual es el enfoque de tu futura web?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mail para cosas Tecnicas</FormLabel>
                <FormControl>
                  <Input
                    className="border-secondary"
                    placeholder="mailtecnico@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Se usara para cosas tecnicas o contactarte</FormDescription>
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
                  <Textarea
                    className="border-secondary"
                    placeholder="Hola, me gustaria una pagina que..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Escribe las Caracteristicas que te gustaria que tuviera tu web
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input
                    className="border-secondary"
                    placeholder="Juan Perez"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Como te llamas?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefono</FormLabel>
                <FormControl>
                  <Input
                    className="border-secondary"
                    placeholder="+569 1234 5678"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-start gap-2">
            <FormField
              control={form.control}
              name="logo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tengo un Logo</FormLabel>
                  <FormControl>
                    <Checkbox
                      className="ml-2"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="solution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Necesito una solucion personalizada</FormLabel>
                  <FormControl>
                    <Checkbox
                      className="ml-2"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full justify-center pb-5">
            <Button
              variant="default"
              size="lg"
              className="text-center"
              type="submit"
            >
              Enviar
            </Button>
          </div>
        </form>
      </Form>
    </section>
  )
}

export default CreatingPage
