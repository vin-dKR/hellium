"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BorderBeam } from "@/components/ui/border-beam";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/schemas/contact";
import { submitContact } from "@/actions/contact";
import interest from "@/constants/contact";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    //form-hook
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema)
    })

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true)

        try {
            const result = await submitContact(data)
            if (result.success) {
                setSubmitted(true)
            } else {
                console.log(result.error)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsSubmitting(false)
            setSubmitted(true)
        }
    }

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center p-4">
            <BackgroundBeams />

            <motion.div
                initial="initial"
                animate="animate"
                className="w-full max-w-2xl z-10"
            >
                <Card className="p-8 backdrop-blur-sm bg-black/50 dark:border-gray border-brown-200">
                    <BorderBeam />
                    <motion.div {...fadeIn} className="space-y-6">
                        <div className="text-center">
                            <motion.h1
                                className="text-3xl font-bold text-brown-800 dark:text-white mb-2"
                                {...fadeIn}
                            >
                                Let&apos;s Talk Business
                            </motion.h1>
                            <motion.p
                                className="text-brown-600 dark:text-gray-400"
                                {...fadeIn}
                            >
                                Transform your business with our AI-powered solutions
                            </motion.p>
                        </div>
                        {!submitted ? (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-cream">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <motion.div {...fadeIn}>
                                        <Input
                                            {...register("name")}
                                            placeholder="Name"
                                            className="bg-gray-900/50 border-gray-800"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                        )}
                                    </motion.div>
                                </div>

                                <motion.div {...fadeIn}>
                                    <Input
                                        {...register("email")}
                                        type="email"
                                        placeholder="Business Email"
                                        className="bg-gray-900/50 border-gray-800"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                    )}
                                </motion.div>

                                <motion.div {...fadeIn}>
                                    <Select onValueChange={(value: ContactFormData['interest']) => setValue('interest', value)}>
                                        <SelectTrigger className="bg-gray-900/50 border-gray-800">
                                            <SelectValue placeholder="I'm interested in..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {interest.map((interest) => (
                                                <SelectItem key={interest} value={interest}>{interest}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.interest && (
                                        <p className="text-red-500 text-sm mt-1">{errors.interest.message}</p>
                                    )}
                                </motion.div>

                                <motion.div {...fadeIn}>
                                    <Textarea
                                        {...register("message")}
                                        placeholder="Tell us about your project..."
                                        className="bg-gray-900/50 border-gray-800 min-h-[120px]"
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                    )}
                                </motion.div>

                                <motion.div {...fadeIn}>
                                    <Button
                                        type="submit"
                                        className="w-full bg-theme-gradient text-brown"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Sending..." : "Let's Connect"}
                                    </Button>
                                </motion.div>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-8"
                            >
                                <h3 className="text-2xl font-semibold text-white mb-2">
                                    Thank you for reaching out!
                                </h3>
                                <p className="text-gray-400">
                                    We&apos;ll get back to you within 24 hours.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </Card>
            </motion.div>
        </div>
    );
}
