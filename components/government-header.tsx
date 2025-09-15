"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { User, Menu } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import { useTranslation } from "@/lib/i18n"
import Link from "next/link"

export function GovernmentHeader() {
  const [currentLang, setCurrentLang] = useState("en")
  const t = useTranslation(currentLang as any)

  return (
    <>
      {/* Top Government Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="font-medium">{t.govOfIndia}</span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={setCurrentLang} />
            <span>Screen Reader</span>
            <span>A-</span>
            <span>A</span>
            <span>A+</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-xs text-center">
                    MINISTRY OF
                    <br />
                    CORPORATE
                    <br />
                    AFFAIRS
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-primary font-bold text-2xl">PM</div>
                  <div className="text-primary font-bold text-xl">Internship</div>
                </div>
              </div>
            </Link>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => (window.location.href = "/register")}
              >
                <User className="w-4 h-4 mr-2" />
                {t.youthRegistration}
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                onClick={() => (window.location.href = "/login")}
              >
                <User className="w-4 h-4 mr-2" />
                {t.login}
              </Button>
              <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xs text-center">
                  Digital
                  <br />
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center">
              <Link href="/">
                <Button variant="ghost" className="text-white hover:bg-slate-700 px-4 py-3">
                  <Menu className="w-4 h-4 mr-2" />
                  {t.home}
                </Button>
              </Link>
              <Link href="/guidelines">
                <Button variant="ghost" className="text-white hover:bg-slate-700 px-4 py-3">
                  {t.guidelines}
                </Button>
              </Link>
              <Link href="/gallery">
                <Button variant="ghost" className="text-white hover:bg-slate-700 px-4 py-3">
                  {t.gallery}
                </Button>
              </Link>
              <Link href="/eligibility">
                <Button variant="ghost" className="text-white hover:bg-slate-700 px-4 py-3 bg-slate-700">
                  {t.eligibility}
                </Button>
              </Link>
              <Link href="/mobile-app">
                <Button variant="ghost" className="text-white hover:bg-slate-700 px-4 py-3">
                  {t.mobileApp}
                </Button>
              </Link>
              <Link href="/support">
                <Button variant="ghost" className="text-white hover:bg-slate-700 px-4 py-3">
                  {t.support}
                </Button>
              </Link>
              <Link href="/compendium">
                <Button variant="ghost" className="text-white hover:bg-slate-700 px-4 py-3">
                  {t.compendium}
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
