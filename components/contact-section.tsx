"use client";

import React from "react";

import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SectionHeading } from "./section-heading";

export function EnhancedContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-background/80 backdrop-blur-sm"
      id="contact"
    >
      <div className="container py-12 md:py-16 lg:py-16 relative z-10">
        <div className="mx-auto max-w-4xl space-y-8">
          <SectionHeading
            title="Get In Touch"
            description="Tenés un proyecto en mente o querés hablar sobre posibles oportunidades? Me encantaría saber de vos."
            centered
          />

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6 backdrop-blur-sm bg-secondary/20 p-6 rounded-lg border border-border/50">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Información de contacto</h2>
                <p className="text-muted-foreground">
                  No dudes en comunicarte conmigo a través del formulario o
                  directamente por correo electrónico.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <Link
                    href="mailto:emilianogalegre@gmail.com"
                    className="hover:underline hover:text-primary transition-colors"
                  >
                    emilianogalegre@gmail.com
                  </Link>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Ubicación</h3>
                  <p className="text-muted-foreground">
                    Buenos Aires, Argentina
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Availability</h3>
                  <p className="text-muted-foreground">
                    Abierto a proyectos freelance y oportunidades fulltime.
                  </p>
                </div>
                <div className="flex gap-4 pt-4">
                  <Link
                    href="https://github.com/bk-sin"
                    className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/emilianoalegre/"
                    className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="mailto:emilianogalegre@gmail.com"
                    className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 backdrop-blur-sm bg-secondary/20  p-6 rounded-lg border border-border/50"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Tu email"
                    required
                    className="bg-background/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Motivo
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Motivo"
                  required
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tu mensaje"
                  className="min-h-[120px] bg-background/50"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-light hover:to-accent"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <BackgroundBeams className="opacity-100" />
    </section>
  );
}
