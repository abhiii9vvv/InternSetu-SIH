import { GovernmentHeader } from "@/components/government-header"
import { GovernmentFooter } from "@/components/government-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Calendar,
  Briefcase,
  GraduationCap,
  Users,
  IndianRupee,
  Shield,
  Award,
  Target,
} from "lucide-react"

export default function EligibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <GovernmentHeader />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Eligibility & Benefits</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check if you qualify for the PM Internship Scheme and discover the comprehensive benefits package
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Eligibility Section */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">Are you Eligible?</h2>
              <p className="text-gray-600">Check all criteria below to confirm your eligibility</p>
            </div>

            <div className="space-y-6">
              {/* Age Criteria */}
              <Card className="border-l-4 border-l-primary">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-primary">Age</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">21-24 Years</div>
                    <p className="text-gray-600">You must be between 21 to 24 years old</p>
                  </div>
                </CardContent>
              </Card>

              {/* Job Status */}
              <Card className="border-l-4 border-l-primary">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-primary">Job Status</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900 mb-2">Not Employed Full Time</div>
                    <p className="text-gray-600">You should not be in full-time employment</p>
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="border-l-4 border-l-primary">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-primary">Education</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900 mb-2">Not Enrolled Full Time</div>
                    <p className="text-gray-600">Should not be pursuing full-time education</p>
                  </div>
                </CardContent>
              </Card>

              {/* Family Income */}
              <Card className="border-l-4 border-l-primary">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-primary">Family (Self/ Spouse / Parents)</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">No one is Earning more than ₹8 Lakhs PA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">No Member has a Govt. Job</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Check My Eligibility
              </Button>
            </div>
          </div>

          {/* Benefits Section */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">Core Benefits for PM Internship Scheme</h2>
              <p className="text-gray-600">Comprehensive package for your career development</p>
            </div>

            <div className="space-y-6">
              {/* Professional Experience */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Professional Experience</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">12 months real-life experience in India's top companies</p>
                </CardContent>
              </Card>

              {/* Monthly Stipend */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <IndianRupee className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">Monthly Stipend</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Monthly assistance of ₹4500 by Government of India and ₹500 by Industry
                  </p>
                  <Badge className="bg-green-100 text-green-800">₹5000/month guaranteed</Badge>
                </CardContent>
              </Card>

              {/* One-time Grant */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-yellow-600" />
                    </div>
                    <CardTitle className="text-lg">One-time Grant</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">One-time Grant of ₹6000 for incidentals</p>
                </CardContent>
              </Card>

              {/* Diverse Opportunities */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">Diverse Opportunities</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Select from Various Sectors and from top Companies of India</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 bg-transparent"
              >
                View All Benefits
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Benefits Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Additional Benefits & Support</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Government Certificate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Official completion certificate from Government of India for career advancement
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive training programs and skill development workshops throughout the internship
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dedicated mentors from industry experts to guide your professional journey
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary rounded-lg p-8 text-center text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="text-lg mb-6 text-primary-foreground/90">
            If you meet all eligibility criteria, start your application process today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Start Application
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 bg-transparent"
            >
              Download Guidelines
            </Button>
          </div>
        </div>
      </div>

      <GovernmentFooter />
    </div>
  )
}
