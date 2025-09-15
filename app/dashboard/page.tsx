import { GovernmentHeader } from "@/components/government-header"
import { GovernmentFooter } from "@/components/government-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  FileText,
  CheckCircle,
  AlertCircle,
  Building,
  Calendar,
  IndianRupee,
  Download,
  Edit,
  Bell,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"

export default function DashboardPage() {
  const userProfile = {
    name: "Rahul Kumar",
    email: "rahul.kumar@email.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    profileImage: "/young-professional-man-glasses.png",
    completionPercentage: 85,
  }

  const applications = [
    {
      id: 1,
      company: "Tata Consultancy Services",
      role: "Software Development Intern",
      appliedDate: "2024-12-01",
      status: "Under Review",
      statusColor: "bg-yellow-100 text-yellow-800",
      location: "Mumbai, Maharashtra",
    },
    {
      id: 2,
      company: "HDFC Bank",
      role: "Banking Operations Intern",
      appliedDate: "2024-11-28",
      status: "Shortlisted",
      statusColor: "bg-green-100 text-green-800",
      location: "Delhi, NCR",
    },
    {
      id: 3,
      company: "Wipro Limited",
      role: "Digital Marketing Intern",
      appliedDate: "2024-11-25",
      status: "Interview Scheduled",
      statusColor: "bg-blue-100 text-blue-800",
      location: "Bangalore, Karnataka",
    },
  ]

  const notifications = [
    {
      id: 1,
      title: "Interview Scheduled",
      message: "Your interview with Wipro Limited is scheduled for Dec 20, 2024 at 2:00 PM",
      time: "2 hours ago",
      type: "interview",
      unread: true,
    },
    {
      id: 2,
      title: "Application Status Update",
      message: "Your application for HDFC Bank has been shortlisted. Congratulations!",
      time: "1 day ago",
      type: "status",
      unread: true,
    },
    {
      id: 3,
      title: "Profile Completion",
      message: "Complete your profile to increase your chances of selection",
      time: "3 days ago",
      type: "profile",
      unread: false,
    },
  ]

  const documents = [
    { name: "Aadhaar Card", status: "Verified", uploaded: "2024-11-15" },
    { name: "Educational Certificate", status: "Verified", uploaded: "2024-11-15" },
    { name: "Bank Account Details", status: "Pending", uploaded: "2024-11-20" },
    { name: "Income Certificate", status: "Verified", uploaded: "2024-11-18" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <GovernmentHeader />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, {userProfile.name}!</h1>
              <p className="text-gray-600 mt-1">Track your internship applications and manage your profile</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="bg-transparent">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
                <Badge className="ml-2 bg-red-500 text-white">3</Badge>
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Applications</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Interviews</p>
                  <p className="text-2xl font-bold text-gray-900">1</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Profile</p>
                  <p className="text-2xl font-bold text-gray-900">{userProfile.completionPercentage}%</p>
                </div>
                <User className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Stipend</p>
                  <p className="text-2xl font-bold text-gray-900">₹5000</p>
                </div>
                <IndianRupee className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="applications" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="internship">My Internship</TabsTrigger>
          </TabsList>

          {/* Applications Tab */}
          <TabsContent value="applications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  My Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.map((application) => (
                    <div key={application.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">{application.role}</h3>
                          <p className="text-primary font-medium">{application.company}</p>
                        </div>
                        <Badge className={application.statusColor}>{application.status}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {application.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Applied: {application.appliedDate}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="bg-transparent">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          Withdraw
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-6 mb-6">
                  <Image
                    src={userProfile.profileImage || "/placeholder.svg"}
                    alt="Profile"
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{userProfile.name}</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {userProfile.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {userProfile.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {userProfile.location}
                      </div>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Profile Completion</span>
                    <span className="text-sm text-gray-600">{userProfile.completionPercentage}%</span>
                  </div>
                  <Progress value={userProfile.completionPercentage} className="w-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Personal Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date of Birth:</span>
                        <span>15/08/2001</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Gender:</span>
                        <span>Male</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Category:</span>
                        <span>General</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Educational Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Qualification:</span>
                        <span>B.Tech Computer Science</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Institution:</span>
                        <span>Mumbai University</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Year:</span>
                        <span>2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Document Verification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-gray-400" />
                        <div>
                          <h4 className="font-medium text-gray-900">{doc.name}</h4>
                          <p className="text-sm text-gray-600">Uploaded: {doc.uploaded}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          className={
                            doc.status === "Verified" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {doc.status}
                        </Badge>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-primary" />
                  Recent Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 border rounded-lg ${
                        notification.unread ? "bg-blue-50 border-blue-200" : "bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          {notification.type === "interview" && <Calendar className="w-5 h-5 text-blue-600" />}
                          {notification.type === "status" && <CheckCircle className="w-5 h-5 text-green-600" />}
                          {notification.type === "profile" && <AlertCircle className="w-5 h-5 text-orange-600" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{notification.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                        </div>
                        {notification.unread && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Internship Tab */}
          <TabsContent value="internship" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-primary" />
                  Current Internship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Building className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Active Internship</h3>
                  <p className="text-gray-600 mb-6">
                    You don't have an active internship yet. Keep applying to available positions!
                  </p>
                  <Button className="bg-primary hover:bg-primary/90">Browse Internships</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <GovernmentFooter />
    </div>
  )
}
