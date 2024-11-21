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

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmitted(true);
        setIsSubmitting(false);
    };

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
                <Card className="p-8 backdrop-blur-sm bg-black/50 border border-gray-800">
                    <motion.div {...fadeIn} className="space-y-6">
                        <div className="text-center">
                            <motion.h1
                                className="text-3xl font-bold text-white mb-2"
                                {...fadeIn}
                            >
                                Let's Talk Business
                            </motion.h1>
                            <motion.p
                                className="text-gray-400"
                                {...fadeIn}
                            >
                                Transform your business with our AI-powered solutions
                            </motion.p>
                        </div>

                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <motion.div {...fadeIn}>
                                        <Input
                                            placeholder="First Name"
                                            className="bg-gray-900/50 border-gray-800"
                                        />
                                    </motion.div>
                                    <motion.div {...fadeIn}>
                                        <Input
                                            placeholder="Last Name"
                                            className="bg-gray-900/50 border-gray-800"
                                        />
                                    </motion.div>
                                </div>

                                <motion.div {...fadeIn}>
                                    <Input
                                        type="email"
                                        placeholder="Business Email"
                                        className="bg-gray-900/50 border-gray-800"
                                    />
                                </motion.div>

                                <motion.div {...fadeIn}>
                                    <Select>
                                        <SelectTrigger className="bg-gray-900/50 border-gray-800">
                                            <SelectValue placeholder="I'm interested in..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="sales-bot">AI Sales Bots</SelectItem>
                                            <SelectItem value="email-marketing">Email Marketing Platform</SelectItem>
                                            <SelectItem value="automation">Business Automation</SelectItem>
                                            <SelectItem value="other">Other Services</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </motion.div>

                                <motion.div {...fadeIn}>
                                    <Textarea
                                        placeholder="Tell us about your project..."
                                        className="bg-gray-900/50 border-gray-800 min-h-[120px]"
                                    />
                                </motion.div>

                                <motion.div {...fadeIn}>
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
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
                                    We'll get back to you within 24 hours.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </Card>
            </motion.div>
        </div>
    );
}