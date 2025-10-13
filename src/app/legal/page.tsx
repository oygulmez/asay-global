"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import enMessages from "@/messages/en.json";

export default function LegalPage() {
  const messages = enMessages;
  const t = (key: string) => key.split('.').reduce((o: any, k: string) => o?.[k], messages);

  const [activeSection, setActiveSection] = useState<string>("privacy");

  const sections = [
    { id: "privacy", title: t('legal.privacy.title') },
    { id: "terms", title: t('legal.terms.title') },
    { id: "cookies", title: t('legal.cookies.title') }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Legal Information</h1>
          <p className="text-gray-600 mt-2">Privacy Policy, Terms of Service, and Cookie Policy</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <nav className="sticky top-8">
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                        activeSection === section.id
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              {activeSection === "privacy" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {t('legal.privacy.title')}
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 mb-4">
                      <strong>Last updated:</strong> {t('legal.privacy.last_updated')}
                    </p>
                    
                    <div className="space-y-6">
                      <section>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {t('legal.privacy.introduction.title')}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {t('legal.privacy.introduction.content')}
                        </p>
                      </section>

                      <section>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {t('legal.privacy.data_collection.title')}
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          {t('legal.privacy.data_collection.content')}
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>{t('legal.privacy.data_collection.items.name')}</li>
                          <li>{t('legal.privacy.data_collection.items.email')}</li>
                          <li>{t('legal.privacy.data_collection.items.phone')}</li>
                          <li>{t('legal.privacy.data_collection.items.company')}</li>
                          <li>{t('legal.privacy.data_collection.items.project_details')}</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {t('legal.privacy.data_usage.title')}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {t('legal.privacy.data_usage.content')}
                        </p>
                      </section>

                      <section>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {t('legal.privacy.data_protection.title')}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {t('legal.privacy.data_protection.content')}
                        </p>
                      </section>

                      <section>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {t('legal.privacy.contact.title')}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {t('legal.privacy.contact.content')}
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "terms" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {t('legal.terms.title')}
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 mb-4">
                      <strong>Last updated:</strong> {t('legal.terms.last_updated')}
                    </p>
                    
                    <div className="space-y-6">
                      <section>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {t('legal.terms.acceptance.title')}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {t('legal.terms.acceptance.content')}
                        </p>
                      </section>

                      <section>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {t('legal.terms.services.title')}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {t('legal.terms.services.content')}
                        </p>
                      </section>

                      <section>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {t('legal.terms.liability.title')}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {t('legal.terms.liability.content')}
                        </p>
                      </section>

                      <section>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {t('legal.terms.modifications.title')}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {t('legal.terms.modifications.content')}
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "cookies" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {t('legal.cookies.title')}
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 mb-4">
                      <strong>Last updated:</strong> {t('legal.cookies.last_updated')}
                    </p>
                    
                    <div className="space-y-6">
                      <section>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {t('legal.cookies.what_are_cookies.title')}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {t('legal.cookies.what_are_cookies.content')}
                        </p>
                      </section>

                      <section>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {t('legal.cookies.how_we_use_cookies.title')}
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          {t('legal.cookies.how_we_use_cookies.content')}
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>{t('legal.cookies.how_we_use_cookies.items.essential')}</li>
                          <li>{t('legal.cookies.how_we_use_cookies.items.analytics')}</li>
                          <li>{t('legal.cookies.how_we_use_cookies.items.functionality')}</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {t('legal.cookies.managing_cookies.title')}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {t('legal.cookies.managing_cookies.content')}
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
