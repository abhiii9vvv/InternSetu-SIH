import { GovernmentHeader } from "@/components/government-header"
import { GovernmentFooter } from "@/components/government-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Phone,
  Mail,
  MessageCircle,
  HelpCircle,
  FileText,
  Clock,
  MapPin,
  Send,
  Search,
  BookOpen,
  Users,
  AlertCircle,
} from "lucide-react"

export default function SupportPage() {
  const faqs = [
    {
      category: "Application Process",
      questions: [
        {
          question: "How do I apply for the PM Internship Scheme?",
          answer:
            "To apply, first register on the portal with your mobile number and OTP verification. Complete your profile with personal, educational, and address details. Then browse available internships and apply for positions that match your qualifications and interests.",
        },
        {
          question: "What documents are required for application?",
          answer:
            "You need Aadhaar Card, Educational Certificates, Bank Account Details, Income Certificate (family income proof), and a recent passport-size photograph. All documents should be uploaded in PDF or JPG format.",
        },
        {
          question: "Can I apply for multiple internships?",
          answer:
            "Yes, you can apply for multiple internships across different companies and sectors. However, you can only accept one internship offer at a time.",
        },
        {
          question: "Is there an application fee?",
          answer:
            "No, there is no application fee for the PM Internship Scheme. The entire application process is completely free of cost.",
        },
      ],
    },
    {
      category: "Eligibility",
      questions: [
        {
          question: "What is the age limit for PM Internship Scheme?",
          answer:
            "Applicants must be between 21-24 years of age at the time of application. This age limit is strictly enforced and cannot be waived.",
        },
        {
          question: "Can employed individuals apply?",
          answer:
            "No, individuals who are currently employed full-time are not eligible. You should not be engaged in any full-time employment or full-time education at the time of application.",
        },
        {
          question: "What is the family income criteria?",
          answer:
            "The combined annual income of your family (self, spouse, parents) should not exceed ₹8 lakhs per annum. Additionally, no family member should have a government job.",
        },
        {
          question: "Is this scheme only for graduates?",
          answer:
            "No, the scheme is open to candidates who have completed 12th grade, diploma, graduation, or post-graduation. The specific requirements may vary by internship position.",
        },
      ],
    },
    {
      category: "Internship Details",
      questions: [
        {
          question: "What is the duration of the internship?",
          answer:
            "All internships under the PM Internship Scheme are for a duration of 12 months. This is a fixed duration and cannot be extended or reduced.",
        },
        {
          question: "How much stipend will I receive?",
          answer:
            "Interns receive ₹5000 per month - ₹4500 from the Government of India and ₹500 from the host company. Additionally, there's a one-time grant of ₹6000 for incidentals.",
        },
        {
          question: "Will I get a certificate after completion?",
          answer:
            "Yes, upon successful completion of the 12-month internship, you will receive an official certificate from the Government of India, which will be valuable for your career.",
        },
        {
          question: "What sectors are available for internships?",
          answer:
            "Internships are available across various sectors including Information Technology, Banking & Finance, Healthcare, Manufacturing, Retail, Telecommunications, and many more.",
        },
      ],
    },
    {
      category: "Technical Issues",
      questions: [
        {
          question: "I'm not receiving OTP for registration. What should I do?",
          answer:
            "Ensure your mobile number is correct and has good network coverage. Wait for 2-3 minutes before requesting a new OTP. If the issue persists, try using a different browser or contact technical support.",
        },
        {
          question: "My application status is not updating. Why?",
          answer:
            "Application status updates may take 24-48 hours to reflect on the portal. If there's no update after 48 hours, please contact support with your application reference number.",
        },
        {
          question: "I'm unable to upload documents. What's the issue?",
          answer:
            "Ensure your documents are in PDF or JPG format and each file is less than 2MB in size. Clear your browser cache and try again. Use a stable internet connection for uploading.",
        },
        {
          question: "How do I reset my password?",
          answer:
            "Click on 'Forgot Password' on the login page, enter your registered mobile number, and follow the OTP verification process to reset your password.",
        },
      ],
    },
  ]

  const supportChannels = [
    {
      title: "Helpline Number",
      description: "Call our dedicated helpline for immediate assistance",
      contact: "1800-XXX-XXXX",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      icon: Phone,
    },
    {
      title: "Email Support",
      description: "Send us your queries via email",
      contact: "support@pminternship.gov.in",
      hours: "Response within 24 hours",
      icon: Mail,
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available on portal",
      hours: "Mon-Fri: 10:00 AM - 5:00 PM",
      icon: MessageCircle,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <GovernmentHeader />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support & Help Center</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get help with your PM Internship Scheme application and find answers to common questions
          </p>
        </div>

        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="faq" className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              FAQs
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Contact Us
            </TabsTrigger>
            <TabsTrigger value="guides" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Guides
            </TabsTrigger>
            <TabsTrigger value="feedback" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Feedback
            </TabsTrigger>
          </TabsList>

          {/* FAQ Tab */}
          <TabsContent value="faq">
            <div className="mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Input placeholder="Search FAQs..." className="w-full" />
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              {faqs.map((category, categoryIndex) => (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      {category.category}
                      <Badge variant="secondary">{category.questions.length} questions</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Support Channels */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                {supportChannels.map((channel, index) => {
                  const Icon = channel.icon
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-2">{channel.title}</h3>
                            <p className="text-gray-600 mb-3">{channel.description}</p>
                            <div className="space-y-1">
                              <p className="font-medium text-primary">{channel.contact}</p>
                              <p className="text-sm text-gray-500 flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {channel.hours}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}

                {/* Office Address */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Office Address</h3>
                        <p className="text-gray-600">
                          Ministry of Corporate Affairs
                          <br />
                          Shastri Bhawan, Dr. Rajendra Prasad Road
                          <br />
                          New Delhi - 110001, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="Enter your full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Mobile Number *</Label>
                        <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Query Category *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="application">Application Process</SelectItem>
                            <SelectItem value="eligibility">Eligibility Criteria</SelectItem>
                            <SelectItem value="technical">Technical Issues</SelectItem>
                            <SelectItem value="internship">Internship Details</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="Brief subject of your query" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" placeholder="Describe your query in detail..." className="min-h-[120px]" />
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Guides Tab */}
          <TabsContent value="guides">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Application Guide",
                  description: "Step-by-step guide to complete your application",
                  icon: FileText,
                  downloadUrl: "#",
                },
                {
                  title: "Eligibility Checker",
                  description: "Check if you meet all eligibility criteria",
                  icon: Users,
                  downloadUrl: "#",
                },
                {
                  title: "Document Requirements",
                  description: "List of all required documents and formats",
                  icon: FileText,
                  downloadUrl: "#",
                },
                {
                  title: "Interview Preparation",
                  description: "Tips and guidelines for internship interviews",
                  icon: BookOpen,
                  downloadUrl: "#",
                },
                {
                  title: "Technical Support",
                  description: "Troubleshooting common technical issues",
                  icon: AlertCircle,
                  downloadUrl: "#",
                },
                {
                  title: "Internship Guidelines",
                  description: "Complete guidelines for selected interns",
                  icon: BookOpen,
                  downloadUrl: "#",
                },
              ].map((guide, index) => {
                const Icon = guide.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{guide.title}</h3>
                      <p className="text-gray-600 mb-4">{guide.description}</p>
                      <Button variant="outline" className="w-full bg-transparent">
                        Download Guide
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Share Your Feedback</CardTitle>
                  <p className="text-gray-600">
                    Help us improve the PM Internship Scheme by sharing your experience and suggestions
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="feedbackName">Full Name *</Label>
                      <Input id="feedbackName" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="feedbackEmail">Email Address *</Label>
                      <Input id="feedbackEmail" type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="feedbackType">Feedback Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select feedback type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="suggestion">Suggestion</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="appreciation">Appreciation</SelectItem>
                        <SelectItem value="bug-report">Bug Report</SelectItem>
                        <SelectItem value="feature-request">Feature Request</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rating">Overall Experience Rating</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Rate your experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">⭐⭐⭐⭐⭐ Excellent</SelectItem>
                        <SelectItem value="4">⭐⭐⭐⭐ Good</SelectItem>
                        <SelectItem value="3">⭐⭐⭐ Average</SelectItem>
                        <SelectItem value="2">⭐⭐ Poor</SelectItem>
                        <SelectItem value="1">⭐ Very Poor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="feedbackMessage">Your Feedback *</Label>
                    <Textarea
                      id="feedbackMessage"
                      placeholder="Share your detailed feedback, suggestions, or concerns..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Feedback
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <GovernmentFooter />
    </div>
  )
}
