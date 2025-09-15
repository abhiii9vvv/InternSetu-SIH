import { GovernmentHeader } from "@/components/government-header"
import { GovernmentFooter } from "@/components/government-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, User, GraduationCap, MapPin, FileText, CheckCircle, Clock, Building } from "lucide-react"

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-background">
      <GovernmentHeader />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Apply for PM Internship Scheme</h1>
          <p className="text-lg text-gray-600">Complete your application in simple steps</p>
        </div>

        <Tabs defaultValue="register" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="register">Register</TabsTrigger>
            <TabsTrigger value="profile">Complete Profile</TabsTrigger>
            <TabsTrigger value="browse">Browse Internships</TabsTrigger>
          </TabsList>

          {/* Registration Tab */}
          <TabsContent value="register" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Mobile Registration
                </CardTitle>
                <p className="text-gray-600">Register with your mobile number to get started</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input id="mobile" placeholder="+91 XXXXX XXXXX" type="tel" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Send OTP</Button>

                <div className="space-y-2">
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input id="otp" placeholder="Enter 6-digit OTP" maxLength={6} />
                </div>
                <Button className="w-full bg-transparent" variant="outline">
                  Verify OTP
                </Button>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the Terms and Conditions and Privacy Policy
                  </Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Profile Completion</span>
                <span className="text-sm text-gray-600">60%</span>
              </div>
              <Progress value={60} className="w-full" />
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Educational Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="qualification">Highest Qualification</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select qualification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12th">12th Pass</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                      <SelectItem value="graduate">Graduate</SelectItem>
                      <SelectItem value="postgraduate">Post Graduate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution Name</Label>
                    <Input id="institution" placeholder="Enter institution name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year of Completion</Label>
                    <Input id="year" placeholder="2023" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Address Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Complete Address</Label>
                  <Textarea id="address" placeholder="Enter your complete address" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="mumbai">Maharashtra</SelectItem>
                        <SelectItem value="bangalore">Karnataka</SelectItem>
                        <SelectItem value="chennai">Tamil Nadu</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Enter city" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pincode">PIN Code</Label>
                    <Input id="pincode" placeholder="000000" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full bg-primary hover:bg-primary/90">Save Profile & Continue</Button>
          </TabsContent>

          {/* Browse Internships Tab */}
          <TabsContent value="browse" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-primary" />
                  Available Internships
                </CardTitle>
                <p className="text-gray-600">Browse and apply for internships that match your profile</p>
              </CardHeader>
              <CardContent>
                {/* Search and Filters */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <Input placeholder="Search internships..." />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="chennai">Chennai</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it">Information Technology</SelectItem>
                      <SelectItem value="banking">Banking & Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-primary hover:bg-primary/90">Search</Button>
                </div>

                {/* Internship Cards */}
                <div className="space-y-4">
                  {[
                    {
                      company: "Tata Consultancy Services",
                      role: "Software Development Intern",
                      location: "Mumbai, Maharashtra",
                      duration: "12 months",
                      stipend: "₹5000/month",
                      sector: "Information Technology",
                      status: "Open",
                    },
                    {
                      company: "HDFC Bank",
                      role: "Banking Operations Intern",
                      location: "Delhi, NCR",
                      duration: "12 months",
                      stipend: "₹5000/month",
                      sector: "Banking & Finance",
                      status: "Open",
                    },
                    {
                      company: "Apollo Hospitals",
                      role: "Healthcare Administration Intern",
                      location: "Chennai, Tamil Nadu",
                      duration: "12 months",
                      stipend: "₹5000/month",
                      sector: "Healthcare",
                      status: "Open",
                    },
                  ].map((internship, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{internship.role}</h3>
                            <p className="text-primary font-medium">{internship.company}</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800">{internship.status}</Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {internship.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {internship.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="w-4 h-4" />
                            {internship.sector}
                          </div>
                          <div className="font-medium text-primary">{internship.stipend}</div>
                        </div>

                        <div className="flex gap-3">
                          <Button className="bg-primary hover:bg-primary/90">Apply Now</Button>
                          <Button variant="outline">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Button variant="outline" className="px-8 bg-transparent">
                    Load More Internships
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Application Status */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Application Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Mobile Verification</span>
                </div>
                <Badge className="bg-green-100 text-green-800">Completed</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <span className="font-medium">Profile Completion</span>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="font-medium">Document Verification</span>
                </div>
                <Badge variant="secondary">Pending</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <GovernmentFooter />
    </div>
  )
}
