"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Shield, FileText, Cookie } from "lucide-react";
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
      icon: Shield
    },
    { 
      id: "terms", 
      title: t('legal.terms.title'),
      icon: FileText
    },
    { 
      id: "cookies", 
      title: t('legal.cookies.title'),
      icon: Cookie
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale="en" />
      
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto">
              <Link 
                href="/" 
                className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Home
              </Link>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Legal Information
              </h1>
              <p className="text-lg text-gray-600">
                Privacy Policy, Terms of Service, and Cookie Policy
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal Documents</h3>
                    <nav className="space-y-2">
                      {sections.map((section) => {
                        const Icon = section.icon;
                        return (
                          <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                              activeSection === section.id
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <Icon className="w-5 h-5" />
                              <span className="font-medium">{section.title}</span>
                            </div>
                          </button>
                        );
                      })}
                    </nav>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white border rounded-lg overflow-hidden">
                  {/* Content Header */}
                  <div className="bg-gray-50 px-8 py-6 border-b">
                    <div className="flex items-center space-x-3">
                      {(() => {
                        const activeSectionData = sections.find(s => s.id === activeSection);
                        const Icon = activeSectionData?.icon;
                        return Icon ? <Icon className="w-6 h-6 text-gray-700" /> : null;
                      })()}
                      <h2 className="text-2xl font-bold text-gray-900">
                        {sections.find(s => s.id === activeSection)?.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Last updated: {t(`legal.${activeSection}.last_updated`)}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {activeSection === "privacy" && (
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            {t('legal.privacy.introduction.title')}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {t('legal.privacy.introduction.content')}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            {t('legal.privacy.data_collection.title')}
                          </h3>
                          <p className="text-gray-700 mb-4">
                            {t('legal.privacy.data_collection.content')}
                          </p>
                          <ul className="space-y-2">
                            {Object.values(t('legal.privacy.data_collection.items')).map((item: any, index: number) => (
                              <li key={index} className="flex items-start text-gray-700">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            {t('legal.privacy.data_usage.title')}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {t('legal.privacy.data_usage.content')}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            {t('legal.privacy.data_protection.title')}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {t('legal.privacy.data_protection.content')}
                          </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
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
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            {t('legal.terms.acceptance.title')}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {t('legal.terms.acceptance.content')}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            {t('legal.terms.services.title')}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {t('legal.terms.services.content')}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            {t('legal.terms.liability.title')}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {t('legal.terms.liability.content')}
                          </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            {t('legal.terms.modifications.title')}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {t('legal.terms.modifications.content')}
                          </p>
                        </div>
                      </div>
                    )}

                    {activeSection === "cookies" && (
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            {t('legal.cookies.what_are_cookies.title')}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {t('legal.cookies.what_are_cookies.content')}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            {t('legal.cookies.how_we_use_cookies.title')}
                          </h3>
                          <p className="text-gray-700 mb-4">
                            {t('legal.cookies.how_we_use_cookies.content')}
                          </p>
                          <div className="space-y-4">
                            {Object.values(t('legal.cookies.how_we_use_cookies.items')).map((item: any, index: number) => (
                              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                  <Cookie className="w-4 h-4 text-gray-600 mr-2" />
                                  <span className="font-medium text-gray-900">
                                    {index === 0 ? 'Essential' : index === 1 ? 'Analytics' : 'Functionality'}
                                  </span>
                                </div>
                                <p className="text-gray-700 text-sm">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            {t('legal.cookies.managing_cookies.title')}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
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
      </main>

      <Footer locale="en" />
      <StickyContactButtons />
    </div>
  );
}
