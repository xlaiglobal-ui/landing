"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Send, Loader2 } from "lucide-react"

interface Message {
  id: string
  role: "user" | "agent"
  content: string
  timestamp: Date
}

interface ExtractedData {
  company_name?: string
  company_stage?: string
  product_description?: string
  company_website?: string
  biggest_challenge?: string
  current_sales_process?: string
  sales_team_size?: string
  average_deal_size?: string
  decision_maker?: string
  target_monthly_meetings?: string
  success_metrics?: string
  timeline?: string
  [key: string]: any
}

interface Question {
  question: string
  type: "text" | "select" | "multiselect"
  extractKey: string
  options?: string[]
}

const allQuestions: Question[] = [
  {
    question: "What's your company name?",
    type: "text",
    extractKey: "company_name",
  },
  {
    question: "What stage is your company at?",
    type: "select",
    extractKey: "company_stage",
    options: ["Pre-revenue", "Early revenue ($0-100K ARR)", "Growth ($100K-1M ARR)", "Scale ($1M+ ARR)", "Other"],
  },
  {
    question: "What does your company do? (Brief description of your product/service)",
    type: "text",
    extractKey: "product_description",
  },
  {
    question: "What's your website URL? (Leave blank if you don't have one)",
    type: "text",
    extractKey: "company_website",
  },
  {
    question: "What's your biggest sales challenge right now?",
    type: "text",
    extractKey: "biggest_challenge",
  },
  {
    question: "How does your sales team currently find and reach prospects?",
    type: "text",
    extractKey: "current_sales_process",
  },
  {
    question: "How many people are on your sales/business development team?",
    type: "select",
    extractKey: "sales_team_size",
    options: ["No sales team", "1 person", "2-5 people", "6-10 people", "10-20 people", "20+ people", "Other"],
  },
  {
    question: "What's your average deal size (ACV)?",
    type: "select",
    extractKey: "average_deal_size",
    options: ["$0-10K", "$10K-50K", "$50K-100K", "$100K-500K", "$500K+", "Not determined yet", "Other"],
  },
  {
    question: "Who makes the final decision on sales tools and processes at your company?",
    type: "text",
    extractKey: "decision_maker",
  },
  {
    question: "How many qualified meetings do you want per month?",
    type: "select",
    extractKey: "target_monthly_meetings",
    options: ["5-10 meetings/month", "10-20 meetings/month", "20-50 meetings/month", "50-100 meetings/month", "100+ meetings/month", "Not sure yet", "Other"],
  },
  {
    question: "What would success look like for you? (What metrics matter most?)",
    type: "text",
    extractKey: "success_metrics",
  },
  {
    question: "When do you need to see results?",
    type: "select",
    extractKey: "timeline",
    options: ["ASAP (next 30 days)", "Within 60 days", "Within 90 days", "Within 6 months", "No specific timeline", "Other"],
  },
]

export function AIChatIntake() {
  const [mode, setMode] = useState<"choice" | "chat" | "manual">("choice")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "agent",
      content: allQuestions[0].question,
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [extractedData, setExtractedData] = useState<ExtractedData>({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showSummary, setShowSummary] = useState(false)
  const [showOtherInput, setShowOtherInput] = useState(false)
  const [otherValue, setOtherValue] = useState("")
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [aiHelpQuestion, setAiHelpQuestion] = useState<Question | null>(null)
  const [aiHelpMessages, setAiHelpMessages] = useState<Message[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const aiHelpEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    aiHelpEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, aiHelpMessages])

  const currentQuestion = allQuestions[currentQuestionIndex]

  const handleSelectOption = async (option: string) => {
    if (option === "Other") {
      setShowOtherInput(true)
      return
    }

    // For multiselect, toggle the option
    if (currentQuestion.type === "multiselect") {
      setSelectedOptions((prev) =>
        prev.includes(option)
          ? prev.filter((item) => item !== option)
          : [...prev, option]
      )
      return
    }

    // For single select, send immediately
    await sendResponse(option)
  }

  const handleOtherSubmit = async () => {
    if (otherValue.trim()) {
      await sendResponse(otherValue)
      setOtherValue("")
      setShowOtherInput(false)
    }
  }

  const handleMultiselectSubmit = async () => {
    if (selectedOptions.length > 0) {
      await sendResponse(selectedOptions.join(", "))
      setSelectedOptions([])
    }
  }

  const sendResponse = async (response: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: response,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Extract data
    const extracted: Partial<ExtractedData> = {}
    extracted[currentQuestion.extractKey] = 
      currentQuestion.type === "multiselect" 
        ? response.split(", ")
        : response

    setExtractedData((prev) => ({ ...prev, ...extracted }))

    // Simulate AI response delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    let agentResponse = ""
    const nextQuestionIndex = currentQuestionIndex + 1

    if (nextQuestionIndex < allQuestions.length) {
      agentResponse = allQuestions[nextQuestionIndex].question
      setCurrentQuestionIndex(nextQuestionIndex)
    } else {
      agentResponse =
        "Perfect! I have all the information I need. Here's a summary of your profile:"
      setShowSummary(true)
    }

    const agentMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "agent",
      content: agentResponse,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, agentMessage])
    setIsLoading(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleOtherSubmit()
    }
  }

  const startAiHelp = (question: Question) => {
    setAiHelpQuestion(question)
    setAiHelpMessages([
      {
        id: "1",
        role: "agent",
        content: question.question,
        timestamp: new Date(),
      },
    ])
  }

  const closeAiHelp = () => {
    setAiHelpQuestion(null)
    setAiHelpMessages([])
  }

  const completionPercentage = Math.round((currentQuestionIndex / allQuestions.length) * 100)

  // Mode choice screen
  if (mode === "choice") {
    return (
      <div className="rounded-3xl border border-border bg-card p-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">Let's Get Your Profile Set Up</h2>
          <p className="text-muted-foreground mb-8">Choose how you'd like to provide your company information:</p>
          
          <div className="space-y-4">
            <button
              onClick={() => setMode("chat")}
              className="w-full p-6 rounded-xl border-2 border-border bg-background hover:border-primary hover:bg-primary/5 transition-all text-left"
            >
              <div className="font-bold text-foreground mb-2">💬 Chat with AI</div>
              <p className="text-sm text-muted-foreground">Our AI will guide you through questions one at a time. Fast and conversational.</p>
            </button>

            <button
              onClick={() => setMode("manual")}
              className="w-full p-6 rounded-xl border-2 border-border bg-background hover:border-primary hover:bg-primary/5 transition-all text-left"
            >
              <div className="font-bold text-foreground mb-2">📋 Fill Out Form</div>
              <p className="text-sm text-muted-foreground">See all fields at once and fill them in your own pace. AI can help explain any field.</p>
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Manual form mode
  if (mode === "manual") {
    const completedFields = Object.values(extractedData).filter(v => v && v !== "").length
    const formCompletionPercentage = Math.round((completedFields / allQuestions.length) * 100)

    return (
      <div className="rounded-3xl border border-border bg-card p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">Your Company Profile</h2>
          <button
            onClick={() => {
              setMode("choice")
              setExtractedData({})
            }}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Change method
          </button>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold text-foreground">Profile Completion</p>
            <p className="text-sm text-muted-foreground">{formCompletionPercentage}%</p>
          </div>
          <div className="h-2 w-full rounded-full bg-border">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{ width: `${formCompletionPercentage}%` }}
            />
          </div>
        </div>

        {/* AI Help Modal */}
        {aiHelpQuestion && (
          <div className="fixed inset-0 bg-black/50 flex items-end z-50">
            <div className="bg-card rounded-t-3xl w-full max-w-2xl p-6 flex flex-col max-h-96">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-foreground">AI Help: {aiHelpQuestion.question}</h3>
                <button
                  onClick={closeAiHelp}
                  className="text-muted-foreground hover:text-foreground text-xl"
                >
                  ×
                </button>
              </div>

              {/* AI Help Messages */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-3">
                {aiHelpMessages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-xs rounded-lg px-3 py-2 text-sm ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-border text-foreground"
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                <div ref={aiHelpEndRef} />
              </div>

              <button
                onClick={closeAiHelp}
                className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90"
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        )}

        {/* Form Fields */}
        <div className="space-y-6">
          {allQuestions.map((question, idx) => (
            <div key={question.extractKey} className="space-y-2">
              <div className="flex items-start justify-between">
                <label className="text-sm font-semibold text-foreground">
                  {idx + 1}. {question.question}
                </label>
                <button
                  onClick={() => startAiHelp(question)}
                  className="text-xs px-2 py-1 rounded bg-border text-muted-foreground hover:text-foreground hover:bg-primary/20"
                >
                  AI Help
                </button>
              </div>

              {question.type === "text" && (
                <textarea
                  value={(extractedData[question.extractKey] as string) || ""}
                  onChange={(e) => setExtractedData(prev => ({ ...prev, [question.extractKey]: e.target.value }))}
                  placeholder={`Answer to question ${idx + 1}`}
                  rows={3}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground placeholder-muted-foreground transition-colors hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              )}

              {question.type === "select" && (
                <select
                  value={(extractedData[question.extractKey] as string) || ""}
                  onChange={(e) => setExtractedData(prev => ({ ...prev, [question.extractKey]: e.target.value }))}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select an option...</option>
                  {question.options?.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              )}

              {question.type === "multiselect" && (
                <div className="space-y-2">
                  {question.options?.map(opt => (
                    <label key={opt} className="flex items-center gap-3 p-2 rounded hover:bg-background cursor-pointer">
                      <input
                        type="checkbox"
                        checked={(extractedData[question.extractKey] as string[])?.includes(opt) || false}
                        onChange={(e) => {
                          const current = (extractedData[question.extractKey] as string[]) || []
                          setExtractedData(prev => ({
                            ...prev,
                            [question.extractKey]: e.target.checked
                              ? [...current, opt]
                              : current.filter(item => item !== opt)
                          }))
                        }}
                        className="w-4 h-4 rounded border-border"
                      />
                      <span className="text-sm text-foreground">{opt}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary and Submit */}
        <div className="pt-4 space-y-4">
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
            <h3 className="font-bold text-foreground mb-2">Summary</h3>
            <div className="space-y-1 text-sm">
              {Object.entries(extractedData).map(([key, value]) => {
                if (!value || value === "") return null
                const label = key.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())
                return (
                  <div key={key} className="text-muted-foreground">
                    <span className="font-medium text-foreground">{label}:</span> {Array.isArray(value) ? value.join(", ") : String(value)}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => {
                setMode("choice")
                setExtractedData({})
              }}
              className="flex-1"
            >
              Start Over
            </Button>
            <Button
              onClick={() => {
                console.log("Submitting:", extractedData)
              }}
              className="flex-1"
            >
              Confirm & Continue
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Chat mode (default)
  return (
    <div className="rounded-3xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Chat with AI</h2>
        <button
          onClick={() => {
            setMode("choice")
            setMessages([messages[0]])
            setCurrentQuestionIndex(0)
            setExtractedData({})
            setShowSummary(false)
          }}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← Change method
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-semibold text-foreground">Profile Completion</p>
          <p className="text-sm text-muted-foreground">{completionPercentage}%</p>
        </div>
        <div className="h-2 w-full rounded-full bg-border">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      {/* Chat Container */}
      <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-border/50 bg-background p-4" style={{ height: "400px", overflowY: "auto" }}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs rounded-lg px-4 py-2 text-sm ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-border text-foreground"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="bg-border text-foreground px-4 py-2 rounded-lg flex items-center gap-2">
              <Loader2 className="size-4 animate-spin" />
              <span className="text-sm">Next question...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Summary View */}
      {showSummary && (
        <div className="mb-6 rounded-2xl border border-primary/30 bg-primary/5 p-4">
          <h3 className="mb-4 font-bold text-foreground">Your Profile Summary</h3>
          <div className="space-y-2 text-sm max-h-64 overflow-y-auto">
            {Object.entries(extractedData).map(([key, value]) => {
              if (!value) return null
              const label = key
                .replace(/_/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())

              return (
                <div key={key} className="flex justify-between gap-4">
                  <span className="text-muted-foreground">{label}:</span>
                  <span className="font-semibold text-foreground text-right">
                    {Array.isArray(value) ? value.join(", ") : String(value)}
                  </span>
                </div>
              )
            })}
          </div>
          <div className="mt-4 flex gap-3">
            <Button
              variant="outline"
              onClick={() => {
                setMessages([messages[0]])
                setCurrentQuestionIndex(0)
                setExtractedData({})
                setShowSummary(false)
                setSelectedOptions([])
              }}
              className="flex-1"
            >
              Start Over
            </Button>
            <Button
              onClick={() => {
                console.log("Submitting:", extractedData)
              }}
              className="flex-1"
            >
              Confirm & Continue
            </Button>
          </div>
        </div>
      )}

      {/* Answer Options */}
      {!showSummary && (
        <div className="space-y-4">
          {currentQuestion.type === "select" && !showOtherInput && (
            <div className="grid gap-2">
              {currentQuestion.options?.map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  onClick={() => handleSelectOption(option)}
                  className="justify-start text-left h-auto py-2"
                >
                  {option}
                </Button>
              ))}
            </div>
          )}

          {currentQuestion.type === "multiselect" && !showOtherInput && (
            <div>
              <div className="grid gap-2 mb-4">
                {currentQuestion.options?.map((option) => (
                  <Button
                    key={option}
                    variant={selectedOptions.includes(option) ? "default" : "outline"}
                    onClick={() => {
                      if (option !== "Other") {
                        setSelectedOptions((prev) =>
                          prev.includes(option)
                            ? prev.filter((item) => item !== option)
                            : [...prev, option]
                        )
                      } else {
                        setShowOtherInput(true)
                      }
                    }}
                    className="justify-start text-left h-auto py-2"
                  >
                    {option}
                  </Button>
                ))}
              </div>
              {selectedOptions.length > 0 && (
                <Button
                  onClick={handleMultiselectSubmit}
                  className="w-full"
                >
                  Continue
                </Button>
              )}
            </div>
          )}

          {currentQuestion.type === "text" && !showOtherInput && (
            <div className="flex gap-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your response..."
                disabled={isLoading}
                rows={3}
                className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground placeholder-muted-foreground transition-colors hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
              />
              <Button
                onClick={() => sendResponse(input)}
                disabled={isLoading || !input.trim()}
                className="mt-auto"
                size="icon"
              >
                <Send className="size-4" />
              </Button>
            </div>
          )}

          {showOtherInput && (
            <div className="flex gap-3">
              <textarea
                value={otherValue}
                onChange={(e) => setOtherValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Please specify..."
                rows={2}
                className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground placeholder-muted-foreground transition-colors hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button
                onClick={handleOtherSubmit}
                disabled={!otherValue.trim()}
                className="mt-auto"
                size="icon"
              >
                <Send className="size-4" />
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
