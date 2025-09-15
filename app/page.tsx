"use client"

import { useState } from "react"
import { GovernmentHeader } from "@/components/government-header"
import { GovernmentFooter } from "@/components/government-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Building, Award, Shield, GraduationCap, IndianRupee } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState("en")
  const t = useTranslation(currentLang as any)

  return (
    <div className="min-h-screen bg-background">
      <GovernmentHeader />

      {/* Notification Banner */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm">
        <div className="max-w-7xl mx-auto">
          <span className="font-medium">Latest Update:</span> Internship Screening & Selection Ongoing! Check your
          dashboard, email, and SMS regularly. Confirm joining the Internship tile on your dashboard.
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-blue-800">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-balance text-white">{t.stayProtected}</h1>
            <p className="text-xl leading-relaxed text-white">{t.completeInsurance}</p>
            <p className="text-lg leading-relaxed text-blue-100">{t.almostThere}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                onClick={() => (window.location.href = "/insurance")}
              >
                <Shield className="w-5 h-5 mr-2" />
                {t.completeProcess}
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/pm-hero.png"
              alt="Prime Minister - PM Internship Scheme"
              width={500}
              height={400}
              className="rounded-lg shadow-2xl"
              priority
            />
            <div className="absolute -bottom-4 -left-4 rounded-lg p-4 bg-black/80">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-300" />
                <div className="text-sm">
                  <div className="font-semibold text-white">Government Protection</div>
                  <div className="text-blue-200">Secure & Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Hero Section - PM Internship */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="space-y-6 mb-12">
            <Badge className="bg-orange-500 text-white px-4 py-2 text-sm font-medium">{t.empoweringYouth}</Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 text-balance">{t.pmInternshipScheme}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.paidInternship}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                onClick={() => (window.location.href = "/apply")}
              >
                {t.applyNow}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-3 bg-transparent"
                onClick={() => (window.location.href = "/about")}
              >
                {t.learnMore}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">118K+</div>
              <div className="text-gray-600">{t.internshipOpportunities}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">25</div>
              <div className="text-gray-600">{t.sectors}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">36</div>
              <div className="text-gray-600">{t.statesUTs}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">734</div>
              <div className="text-gray-600">{t.districts}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits for PM Internship Scheme */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.coreBenefits}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience real-world work environment while earning and learning from India's top companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">{t.realExperience}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.realExperienceDesc}</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IndianRupee className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">{t.monthlyStipend}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.monthlyStipendDesc}</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">{t.oneTimeGrant}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.oneTimeGrantDesc}</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">{t.sectorSelection}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.sectorSelectionDesc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download PMIS Mobile Application */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.downloadApp}</h2>
              <p className="text-lg text-gray-600 mb-8">{t.appDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                  onClick={() => window.open("https://play.google.com/store", "_blank")}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  {t.googlePlayStore}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-3 bg-transparent"
                  onClick={() => (window.location.href = "/download-apk")}
                >
                  {t.downloadApk}
                </Button>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/mobile-app-mockup-pm-internship.jpg"
                alt="PM Internship Mobile App"
                width={300}
                height={400}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.howItWorks}</h2>
            <p className="text-lg text-gray-600">{t.simpleSteps}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: t.register, desc: t.registerDesc, icon: Users },
              { step: "2", title: t.completeProfile, desc: t.completeProfileDesc, icon: GraduationCap },
              { step: "3", title: t.browseInternships, desc: t.browseInternshipsDesc, icon: Building },
              { step: "4", title: t.apply, desc: t.applyDesc, icon: ArrowRight },
              { step: "5", title: t.startWorking, desc: t.startWorkingDesc, icon: Award },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  {index < 4 && (
                    <ArrowRight className="w-6 h-6 text-orange-500 absolute top-8 -right-3 hidden md:block" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.readyToStart}</h2>
          <p className="text-xl mb-8 text-orange-100">{t.joinThousands}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3"
              onClick={() => (window.location.href = "/apply")}
            >
              {t.applyNow}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 bg-transparent"
              onClick={() => (window.location.href = "/eligibility")}
            >
              {t.checkEligibility}
            </Button>
          </div>
        </div>
      </section>

      <GovernmentFooter />
    </div>
  )
}
