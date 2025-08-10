"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send } from "lucide-react"

interface NilsyAssistantProps {
  language: "sv" | "en"
}

const translations = {
  sv: {
    title: "Nilsy - AI Assistent",
    placeholder: "Skriv ditt meddelande...",
    welcome:
      "Välkommen till Nils Holger! Jag är Nilsy, din AI-assistent. Jag kan hjälpa dig att hitta information om våra tjänster, utforska våra produktkategorier, eller svara på frågor om våra referensprojekt. Du kan också be mig hjälpa dig att boka en konsultation. Hur kan jag assistera dig?",
  },
  en: {
    title: "Nilsy - AI Assistant",
    placeholder: "Type your message...",
    welcome:
      "Welcome to Nils Holger! I'm Nilsy, your AI assistant. I can help you find information about our services, explore our product categories, or answer questions about our reference projects. You can also ask me to help you book a consultation. How can I assist you?",
  },
}

export default function NilsyAssistant({ language }: NilsyAssistantProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([])
  const t = translations[language]

  const handleSend = () => {
    if (!message.trim()) return

    setMessages((prev) => [
      ...prev,
      { text: message, isUser: true },
      {
        text: "Tack för ditt meddelande! Jag hjälper dig gärna med frågor om våra produkter och tjänster.",
        isUser: false,
      },
    ])
    setMessage("")
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary-brown hover:bg-dark-grey text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-xl border border-stone-200 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-stone-200 bg-primary-brown text-white rounded-t-lg">
            <h3 className="font-semibold">{t.title}</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-amber-200">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="text-gray-600 text-sm">{t.welcome}</div>
            ) : (
              <div className="space-y-3">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg text-sm ${
                      msg.isUser ? "bg-primary-brown text-white ml-4" : "bg-stone-100 text-gray-800 mr-4"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-stone-200">
            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.placeholder}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 text-sm"
              />
              <Button onClick={handleSend} size="sm" className="bg-primary-brown hover:bg-dark-grey">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
