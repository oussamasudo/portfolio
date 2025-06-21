"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const feedbackTypes = [
    { id: "improvement", label: "Portfolio Improvement", color: "bg-blue-500/20 text-blue-400" },
    { id: "project", label: "Project Idea", color: "bg-green-500/20 text-green-400" },
    { id: "collaboration", label: "Collaboration", color: "bg-purple-500/20 text-purple-400" },
    { id: "question", label: "Technical Question", color: "bg-yellow-500/20 text-yellow-400" },
    { id: "other", label: "Other", color: "bg-gray-500/20 text-gray-400" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleTypeSelect = (type: string) => {
    setFormData((prev) => ({ ...prev, type }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulating submission (replace with your actual submission logic)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you can integrate with your preferred email service
      // For example: EmailJS, Formspree, or your own API

      console.log("Form submitted:", formData)
      setSubmitStatus("success")

      // Reset form
      setFormData({
        name: "",
        email: "",
        type: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }
  }

  return (
    <Card className="bg-card border-primary/20">
      <CardHeader>
        <CardTitle className="font-mono text-primary">{"// Contact Form"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-primary mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-secondary border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-primary mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-secondary border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Feedback Type */}
          <div>
            <label className="block text-sm font-mono text-primary mb-3">Message Type *</label>
            <div className="flex flex-wrap gap-2">
              {feedbackTypes.map((type) => (
                <Badge
                  key={type.id}
                  variant={formData.type === type.id ? "default" : "outline"}
                  className={`cursor-pointer transition-all hover:scale-105 ${
                    formData.type === type.id
                      ? "bg-primary text-white"
                      : `${type.color} border-primary/30 hover:border-primary/50`
                  }`}
                  onClick={() => handleTypeSelect(type.id)}
                >
                  {type.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-mono text-primary mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 bg-secondary border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm"
              placeholder="Message subject"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-mono text-primary mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-3 py-2 bg-secondary border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm resize-none"
              placeholder="Share your thoughts, feedback, or questions..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <div className="text-xs text-muted-foreground font-mono">* Required fields</div>
            <Button
              type="submit"
              disabled={
                isSubmitting ||
                !formData.name ||
                !formData.email ||
                !formData.type ||
                !formData.subject ||
                !formData.message
              }
              className="bg-primary hover:bg-primary/80 font-mono animate-glow"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </>
              )}
            </Button>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="flex items-center space-x-2 text-green-400 bg-green-500/10 border border-green-500/20 rounded-md p-3">
              <CheckCircle className="h-5 w-5" />
              <span className="font-mono text-sm">Message sent successfully! Thank you for your feedback.</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center space-x-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-md p-3">
              <AlertCircle className="h-5 w-5" />
              <span className="font-mono text-sm">Error sending message. Please try again.</span>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
