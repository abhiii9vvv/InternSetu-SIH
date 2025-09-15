import { GovernmentHeader } from "@/components/government-header"
import { GovernmentFooter } from "@/components/government-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Building, IndianRupee, Users, Filter } from "lucide-react"

export default function InternshipsPage() {
  const internships = [
    {
      id: 1,
      company: "Tata Consultancy Services",
      role: "Software Development Intern",
      location: "Mumbai, Maharashtra",
      duration: "12 months",
      stipend: "₹5000",
      sector: "Information Technology",
      description: "Work on cutting-edge software projects and gain hands-on experience in full-stack development.",
      requirements: ["Graduate in Computer Science", "Basic programming knowledge", "Good communication skills"],
      status: "Open",
      applicants: 245,
    },
    {
      id: 2,
      company: "HDFC Bank",
      role: "Banking Operations Intern",
      location: "Delhi, NCR",
      duration: "12 months",
      stipend: "₹5000",
      sector: "Banking & Finance",
      description:
        "Learn banking operations, customer service, and financial products in India's leading private bank.",
      requirements: ["Graduate in any discipline", "Interest in banking sector", "Customer service orientation"],
      status: "Open",
      applicants: 189,
    },
    {
      id: 3,
      company: "Apollo Hospitals",
      role: "Healthcare Administration Intern",
      location: "Chennai, Tamil Nadu",
      duration: "12 months",
      stipend: "₹5000",
      sector: "Healthcare",
      description: "Support healthcare administration and learn about hospital management systems.",
      requirements: ["Graduate in any discipline", "Interest in healthcare", "Good organizational skills"],
      status: "Open",
      applicants: 156,
    },
    {
      id: 4,
      company: "Mahindra & Mahindra",
      role: "Manufacturing Operations Intern",
      location: "Pune, Maharashtra",
      duration: "12 months",
      stipend: "₹5000",
      sector: "Manufacturing",
      description: "Gain experience in automotive manufacturing processes and quality control systems.",
      requirements: ["Engineering graduate", "Interest in manufacturing", "Safety consciousness"],
      status: "Open",
      applicants: 203,
    },
    {
      id: 5,
      company: "Wipro Limited",
      role: "Digital Marketing Intern",
      location: "Bangalore, Karnataka",
      duration: "12 months",
      stipend: "₹5000",
      sector: "Information Technology",
      description: "Work on digital marketing campaigns and learn about online brand management.",
      requirements: ["Graduate in Marketing/Mass Comm", "Social media knowledge", "Creative thinking"],
      status: "Closing Soon",
      applicants: 312,
    },
    {
      id: 6,
      company: "Reliance Industries",
      role: "Business Development Intern",
      location: "Mumbai, Maharashtra",
      duration: "12 months",
      stipend: "₹5000",
      sector: "Business Development",
      description: "Support business development initiatives and market research activities.",
      requirements: ["MBA/Graduate", "Analytical skills", "Business acumen"],
      status: "Open",
      applicants: 278,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <GovernmentHeader />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Available Internships</h1>
          <p className="text-lg text-gray-600">Discover opportunities with India's top companies</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              Search & Filter Internships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <Input placeholder="Search by company or role..." className="md:col-span-2" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="delhi">Delhi NCR</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                  <SelectItem value="pune">Pune</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sectors</SelectItem>
                  <SelectItem value="it">Information Technology</SelectItem>
                  <SelectItem value="banking">Banking & Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="business">Business Development</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-primary hover:bg-primary/90">Search</Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{internships.length}</span> internships
          </p>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="company">Company Name</SelectItem>
              <SelectItem value="location">Location</SelectItem>
              <SelectItem value="applicants">Least Applicants</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Internship Cards */}
        <div className="space-y-6">
          {internships.map((internship) => (
            <Card key={internship.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{internship.role}</h3>
                    <p className="text-primary font-medium text-lg">{internship.company}</p>
                  </div>
                  <div className="text-right">
                    <Badge
                      className={
                        internship.status === "Open" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                      }
                    >
                      {internship.status}
                    </Badge>
                    <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {internship.applicants} applicants
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{internship.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-primary" />
                    {internship.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-primary" />
                    {internship.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Building className="w-4 h-4 text-primary" />
                    {internship.sector}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <IndianRupee className="w-4 h-4" />
                    {internship.stipend}/month
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {internship.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button className="bg-primary hover:bg-primary/90">Apply Now</Button>
                  <Button variant="outline">View Full Details</Button>
                  <Button variant="ghost" className="text-primary">
                    Save for Later
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 bg-transparent">
            Load More Internships
          </Button>
        </div>
      </div>

      <GovernmentFooter />
    </div>
  )
}
