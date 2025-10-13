"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Shield, FileText, Cookie, ArrowRight, CheckCircle } from "lucide-react";
import enMessages from "@/messages/en.json";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyContactButtons } from "@/components/sticky-contact-buttons";

export default function LegalPage() {
  const messages = enMessages;
  const t = (key: string) => key.split('.').reduce((o: any, k: string) => o?.[k], messages);

  const [activeSection, setActiveSection] = useState<string>("privacy");

  const sections = [
    { 
      id: "privacy", 
      title: t('legal.privacy.title'),
      icon: Shield,
      description: "How we protect and use your personal information"
    },
    { 
      id: "terms", 
      title: t('legal.terms.title'),
      icon: FileText,
      description: "Terms and conditions for using our services"
    },
    { 
      id: "cookies", 
      title: t('legal.cookies.title'),
      icon: Cookie,
      description: "Our cookie policy and data collection practices"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale="en" />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Link 
                href="/" 
                className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Legal Information
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Privacy Policy, Terms of Service, and Cookie Policy for Asay Global
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8">
                    <div className="bg-white rounded-xl shadow-sm border p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal Documents</h3>
                      <nav className="space-y-2">
                        {sections.map((section) => {
                          const Icon = section.icon;
                          return (
                            <button
                              key={section.id}
                              onClick={() => setActiveSection(section.id)}
                              className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                                activeSection === section.id
                                  ? 'bg-[#333333] text-white shadow-md'
                                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                                  activeSection === section.id ? 'text-white' : 'text-gray-500'
                                }`} />
                                <div>
                                  <div className="font-medium">{section.title}</div>
                                  <div className={`text-sm mt-1 ${
                                    activeSection === section.id ? 'text-gray-200' : 'text-gray-500'
                                  }`}>
                                    {section.description}
                                  </div>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </nav>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#333333] to-gray-800 px-8 py-6">
                      <div className="flex items-center space-x-3">
                        {(() => {
                          const activeSectionData = sections.find(s => s.id === activeSection);
                          const Icon = activeSectionData?.icon;
                          return Icon ? <Icon className="w-6 h-6 text-white" /> : null;
                        })()}
                        <h2 className="text-2xl font-bold text-white">
                          {sections.find(s => s.id === activeSection)?.title}
                        </h2>
                      </div>
                      <p className="text-gray-200 mt-2">
                        Last updated: {t(`legal.${activeSection}.last_updated`)}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {activeSection === "privacy" && (
                        <div className="space-y-8">
                          <div className="prose prose-lg max-w-none">
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                {t('legal.privacy.introduction.title')}
                              </h3>
                              <p className="text-blue-800 leading-relaxed">
                                {t('legal.privacy.introduction.content')}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-lg">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                {t('legal.privacy.data_collection.title')}
                              </h3>
                              <p className="text-gray-700 mb-4">
                                {t('legal.privacy.data_collection.content')}
                              </p>
                              <ul className="space-y-2">
                                {Object.values(t('legal.privacy.data_collection.items')).map((item: any, index: number) => (
                                  <li key={index} className="flex items-center text-gray-700">
                                    <ArrowRight className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <Shield className="w-5 h-5 text-blue-500 mr-2" />
                                {t('legal.privacy.data_protection.title')}
                              </h3>
                              <p className="text-gray-700">
                                {t('legal.privacy.data_protection.content')}
                              </p>
                            </div>
                          </div>

                          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                            <h3 className="text-lg font-semibold text-green-900 mb-2">
                              {t('legal.privacy.data_usage.title')}
                            </h3>
                            <p className="text-green-800 leading-relaxed">
                              {t('legal.privacy.data_usage.content')}
                            </p>
                          </div>

                          <div className="bg-gray-100 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {t('legal.privacy.contact.title')}
                            </h3>
                            <p className="text-gray-700">
                              {t('legal.privacy.contact.content')}
                            </p>
                          </div>
                        </div>
                      )}

                      {activeSection === "terms" && (
                        <div className="space-y-8">
                          <div className="prose prose-lg max-w-none">
                            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                                {t('legal.terms.acceptance.title')}
                              </h3>
                              <p className="text-amber-800 leading-relaxed">
                                {t('legal.terms.acceptance.content')}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-lg">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                {t('legal.terms.services.title')}
                              </h3>
                              <p className="text-gray-700">
                                {t('legal.terms.services.content')}
                              </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                {t('legal.terms.liability.title')}
                              </h3>
                              <p className="text-gray-700">
                                {t('legal.terms.liability.content')}
                              </p>
                            </div>
                          </div>

                          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                            <h3 className="text-lg font-semibold text-red-900 mb-2">
                              {t('legal.terms.modifications.title')}
                            </h3>
                            <p className="text-red-800 leading-relaxed">
                              {t('legal.terms.modifications.content')}
                            </p>
                          </div>
                        </div>
                      )}

                      {activeSection === "cookies" && (
                        <div className="space-y-8">
                          <div className="prose prose-lg max-w-none">
                            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                                {t('legal.cookies.what_are_cookies.title')}
                              </h3>
                              <p className="text-purple-800 leading-relaxed">
                                {t('legal.cookies.what_are_cookies.content')}
                              </p>
                            </div>
                          </div>

                          <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                              {t('legal.cookies.how_we_use_cookies.title')}
                            </h3>
                            <p className="text-gray-700 mb-4">
                              {t('legal.cookies.how_we_use_cookies.content')}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {Object.values(t('legal.cookies.how_we_use_cookies.items')).map((item: any, index: number) => (
                                <div key={index} className="bg-white p-4 rounded-lg border">
                                  <div className="flex items-center mb-2">
                                    <Cookie className="w-4 h-4 text-purple-500 mr-2" />
                                    <span className="text-sm font-medium text-gray-900">
                                      {index === 0 ? 'Essential' : index === 1 ? 'Analytics' : 'Functionality'}
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-600">{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                            <h3 className="text-lg font-semibold text-blue-900 mb-2">
                              {t('legal.cookies.managing_cookies.title')}
                            </h3>
                            <p className="text-blue-800 leading-relaxed">
                              {t('legal.cookies.managing_cookies.content')}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="en" />
      <StickyContactButtons />
    </div>
  );
}
