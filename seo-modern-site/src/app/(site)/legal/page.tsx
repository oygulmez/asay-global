"use client";
/* eslint-disable react/no-unescaped-entities */

import React, { useState } from "react";
// import Link from "next/link";

export const metadata = {
  title: "Legal | Asay Global",
  description:
    "Privacy Policy, Terms of Service and Cookie Policy for Asay Global.",
  keywords: [
    "privacy policy",
    "terms of service",
    "cookie policy",
    "legal",
  ],
  alternates: { canonical: "/legal" },
  openGraph: {
    title: "Legal | Asay Global",
    description:
      "Review Asay Global's Privacy Policy, Terms of Service and Cookie Policy.",
    url: "/legal",
    type: "website",
  },
};

export default function LegalPage() {
  const [activeSection, setActiveSection] = useState("privacy");

  const sections = [
    { id: "privacy", title: "Privacy Policy" },
    { id: "terms", title: "Terms of Service" },
    { id: "cookies", title: "Cookie Policy" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Sticky Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h1 className="text-xl font-semibold mb-6">Legal</h1>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-3">
            <div className="prose prose-gray max-w-none">
              {/* Privacy Policy */}
              {activeSection === "privacy" && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Privacy Policy</h2>
                  <div className="space-y-8 text-sm leading-relaxed">
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <p className="text-muted-foreground mb-4">
                        <strong>Last Updated:</strong> January 1, 2025
                      </p>
                      <p className="text-muted-foreground">
                        This Privacy Policy describes how Asay Global (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, 
                        and shares your personal information when you visit our website or use our services.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4 text-primary">1. Information We Collect</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-medium mb-2">Personal Information</h4>
                          <p className="text-muted-foreground mb-3">
                            We collect information you provide directly to us, including:
                          </p>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>Name, email address, phone number, and mailing address</li>
                            <li>Company information and job title</li>
                            <li>Project specifications and requirements</li>
                            <li>Payment and billing information</li>
                            <li>Communications with our customer service team</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-2">Automatically Collected Information</h4>
                          <p className="text-muted-foreground mb-3">
                            When you visit our website, we automatically collect certain information:
                          </p>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>IP address and device information</li>
                            <li>Browser type and version</li>
                            <li>Pages visited and time spent on our site</li>
                            <li>Referring website information</li>
                            <li>Cookies and similar tracking technologies</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4 text-primary">2. How We Use Your Information</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Service Delivery</h4>
                            <p className="text-sm text-muted-foreground">
                              Process orders, provide customer support, and deliver our building materials and services.
                            </p>
                          </div>
                          <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Communication</h4>
                            <p className="text-sm text-muted-foreground">
                              Send updates about your orders, respond to inquiries, and provide technical support.
                            </p>
                          </div>
                          <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Marketing</h4>
                            <p className="text-sm text-muted-foreground">
                              Send promotional materials, newsletters, and information about new products and services.
                            </p>
                          </div>
                          <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Analytics</h4>
                            <p className="text-sm text-muted-foreground">
                              Analyze website usage, improve user experience, and optimize our services.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4 text-primary">3. Information Sharing and Disclosure</h3>
                      <div className="space-y-4">
                        <div className="border-l-4 border-primary pl-4">
                          <h4 className="font-medium mb-2">We may share your information with:</h4>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li><strong>Service Providers:</strong> Third-party companies that help us operate our business</li>
                            <li><strong>Business Partners:</strong> Manufacturers and suppliers for order fulfillment</li>
                            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                            <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                          </ul>
                        </div>
                        <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <strong>Important:</strong> We do not sell, rent, or trade your personal information to third parties 
                            for their marketing purposes without your explicit consent.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4 text-primary">4. Data Security and Protection</h3>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          We implement comprehensive security measures to protect your personal information:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-muted/30 rounded-lg">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                            <h4 className="font-medium mb-2">Encryption</h4>
                            <p className="text-sm text-muted-foreground">SSL/TLS encryption for data transmission</p>
                          </div>
                          <div className="text-center p-4 bg-muted/30 rounded-lg">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <h4 className="font-medium mb-2">Access Control</h4>
                            <p className="text-sm text-muted-foreground">Restricted access to personal data</p>
                          </div>
                          <div className="text-center p-4 bg-muted/30 rounded-lg">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                            </div>
                            <h4 className="font-medium mb-2">Monitoring</h4>
                            <p className="text-sm text-muted-foreground">24/7 security monitoring</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4 text-primary">5. Your Rights and Choices</h3>
                      <div className="space-y-4">
                        <p className="text-muted-foreground mb-4">
                          You have certain rights regarding your personal information:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-primary">1</span>
                              </div>
                              <div>
                                <h4 className="font-medium">Access</h4>
                                <p className="text-sm text-muted-foreground">Request a copy of your personal data</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-primary">2</span>
                              </div>
                              <div>
                                <h4 className="font-medium">Correction</h4>
                                <p className="text-sm text-muted-foreground">Update or correct inaccurate information</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-primary">3</span>
                              </div>
                              <div>
                                <h4 className="font-medium">Deletion</h4>
                                <p className="text-sm text-muted-foreground">Request deletion of your personal data</p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-primary">4</span>
                              </div>
                              <div>
                                <h4 className="font-medium">Portability</h4>
                                <p className="text-sm text-muted-foreground">Receive your data in a portable format</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-primary">5</span>
                              </div>
                              <div>
                                <h4 className="font-medium">Objection</h4>
                                <p className="text-sm text-muted-foreground">Object to certain processing activities</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-primary">6</span>
                              </div>
                              <div>
                                <h4 className="font-medium">Restriction</h4>
                                <p className="text-sm text-muted-foreground">Limit how we process your data</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4 text-primary">6. International Data Transfers</h3>
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg">
                        <p className="text-muted-foreground mb-4">
                          As a global company serving customers worldwide, we may transfer your personal information 
                          to countries outside your country of residence. We ensure appropriate safeguards are in place 
                          for such transfers, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                          <li>Standard contractual clauses approved by relevant authorities</li>
                          <li>Adequacy decisions by competent data protection authorities</li>
                          <li>Certification schemes and codes of conduct</li>
                          <li>Binding corporate rules for intra-group transfers</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4 text-primary">7. Data Retention</h3>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          We retain your personal information for as long as necessary to fulfill the purposes 
                          outlined in this Privacy Policy, unless a longer retention period is required or 
                          permitted by law. Our retention periods are:
                        </p>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-border">
                            <thead>
                              <tr className="bg-muted">
                                <th className="border border-border p-3 text-left font-medium">Data Type</th>
                                <th className="border border-border p-3 text-left font-medium">Retention Period</th>
                                <th className="border border-border p-3 text-left font-medium">Purpose</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-border p-3">Customer Account Data</td>
                                <td className="border border-border p-3">7 years after account closure</td>
                                <td className="border border-border p-3">Legal compliance, customer service</td>
                              </tr>
                              <tr>
                                <td className="border border-border p-3">Transaction Records</td>
                                <td className="border border-border p-3">10 years</td>
                                <td className="border border-border p-3">Financial reporting, tax compliance</td>
                              </tr>
                              <tr>
                                <td className="border border-border p-3">Marketing Data</td>
                                <td className="border border-border p-3">3 years after last interaction</td>
                                <td className="border border-border p-3">Marketing communications</td>
                              </tr>
                              <tr>
                                <td className="border border-border p-3">Website Analytics</td>
                                <td className="border border-border p-3">2 years</td>
                                <td className="border border-border p-3">Website improvement</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4 text-primary">8. Children's Privacy</h3>
                      <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg">
                        <p className="text-muted-foreground">
                          Our services are not directed to children under 16 years of age. We do not knowingly 
                          collect personal information from children under 16. If you are a parent or guardian 
                          and believe your child has provided us with personal information, please contact us 
                          immediately.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4 text-primary">9. Changes to This Privacy Policy</h3>
                      <p className="text-muted-foreground mb-4">
                        We may update this Privacy Policy from time to time. We will notify you of any changes 
                        by posting the new Privacy Policy on this page and updating the "Last Updated" date. 
                        We encourage you to review this Privacy Policy periodically for any changes.
                      </p>
                      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Material Changes:</strong> For material changes, we will provide notice through 
                          email or prominent notice on our website at least 30 days before the changes take effect.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4 text-primary">10. Contact Information</h3>
                      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
                        <p className="text-muted-foreground mb-4">
                          If you have any questions about this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium mb-2">Data Protection Officer</h4>
                            <p className="text-sm text-muted-foreground mb-1">Asay Global Data Protection Team</p>
                            <p className="text-sm text-muted-foreground mb-1">
                              <a href="mailto:privacy@asayglobal.com" className="text-primary hover:underline">
                                privacy@asayglobal.com
                              </a>
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <a href="tel:+905352026877" className="text-primary hover:underline">
                                +90 535 202 68 77
                              </a>
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Mailing Address</h4>
                            <p className="text-sm text-muted-foreground">
                              Atatürk Mahallesi Ertuğrul Gazi Street<br />
                              Metropol Istanbul, Block C No:2/131<br />
                              Ataşehir Istanbul TR
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Terms of Service */}
              {activeSection === "terms" && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Terms of Service</h2>
                  <div className="space-y-6 text-sm leading-relaxed">
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <p className="text-muted-foreground mb-4">
                        <strong>Last Updated:</strong> January 1, 2025
                      </p>
                      <p className="text-muted-foreground">
                        These Terms of Service ("Terms") govern your use of Asay Global's website and services. 
                        By accessing or using our services, you agree to be bound by these Terms.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">1. Acceptance of Terms</h3>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          By accessing and using our website, services, or purchasing our products, you acknowledge 
                          that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <strong>Important:</strong> If you do not agree to these Terms, you must not use our 
                            website or services. Your continued use constitutes acceptance of any modifications to these Terms.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">2. Description of Services</h3>
                      <div className="space-y-4">
                        <p className="text-muted-foreground mb-4">
                          Asay Global provides the following services:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Building Materials Supply</h4>
                            <p className="text-sm text-muted-foreground">
                              High-quality building materials including steel structures, aluminum solutions, 
                              glass systems, and decorative products.
                            </p>
                          </div>
                          <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Consultation Services</h4>
                            <p className="text-sm text-muted-foreground">
                              Professional consultation for construction projects, material selection, 
                              and technical support.
                            </p>
                          </div>
                          <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Global Distribution</h4>
                            <p className="text-sm text-muted-foreground">
                              Worldwide shipping and distribution services to 38 countries across 5 continents.
                            </p>
                          </div>
                          <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Project Management</h4>
                            <p className="text-sm text-muted-foreground">
                              End-to-end project management for large-scale construction and building projects.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">3. Orders and Payment Terms</h3>
                      <div className="space-y-4">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-medium mb-2">Order Process</h4>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                              <div className="text-center p-3 bg-muted/30 rounded-lg">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <span className="text-sm font-bold text-primary">1</span>
                                </div>
                                <h5 className="font-medium text-sm">Quote Request</h5>
                                <p className="text-xs text-muted-foreground">Submit project requirements</p>
                              </div>
                              <div className="text-center p-3 bg-muted/30 rounded-lg">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <span className="text-sm font-bold text-primary">2</span>
                                </div>
                                <h5 className="font-medium text-sm">Quote Review</h5>
                                <p className="text-xs text-muted-foreground">Review and approve pricing</p>
                              </div>
                              <div className="text-center p-3 bg-muted/30 rounded-lg">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <span className="text-sm font-bold text-primary">3</span>
                                </div>
                                <h5 className="font-medium text-sm">Payment</h5>
                                <p className="text-xs text-muted-foreground">Secure payment processing</p>
                              </div>
                              <div className="text-center p-3 bg-muted/30 rounded-lg">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <span className="text-sm font-bold text-primary">4</span>
                                </div>
                                <h5 className="font-medium text-sm">Delivery</h5>
                                <p className="text-xs text-muted-foreground">Global shipping & delivery</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">4. Contact Information</h3>
                      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
                        <p className="text-muted-foreground mb-4">
                          For questions about these Terms of Service, please contact us:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium mb-2">Legal Department</h4>
                            <p className="text-sm text-muted-foreground mb-1">Asay Global Legal Team</p>
                            <p className="text-sm text-muted-foreground mb-1">
                              <a href="mailto:legal@asayglobal.com" className="text-primary hover:underline">
                                legal@asayglobal.com
                              </a>
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <a href="tel:+905352026877" className="text-primary hover:underline">
                                +90 535 202 68 77
                              </a>
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Mailing Address</h4>
                            <p className="text-sm text-muted-foreground">
                              Atatürk Mahallesi Ertuğrul Gazi Street<br />
                              Metropol Istanbul, Block C No:2/131<br />
                              Ataşehir Istanbul TR
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Cookie Policy */}
              {activeSection === "cookies" && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Cookie Policy</h2>
                  <div className="space-y-8 text-sm leading-relaxed">
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <p className="text-muted-foreground mb-4">
                        <strong>Last Updated:</strong> January 1, 2025
                      </p>
                      <p className="text-muted-foreground">
                        This Cookie Policy explains what cookies are, how we use them on our website, 
                        and your choices regarding cookies.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">1. What Are Cookies?</h3>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Cookies are small text files that are stored on your device when you visit a website. 
                          They help websites remember information about your visit, making your next visit easier 
                          and the site more useful to you.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-muted/30 rounded-lg">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <h4 className="font-medium mb-2">Small Files</h4>
                            <p className="text-sm text-muted-foreground">Tiny text files stored on your device</p>
                          </div>
                          <div className="text-center p-4 bg-muted/30 rounded-lg">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <h4 className="font-medium mb-2">Fast Access</h4>
                            <p className="text-sm text-muted-foreground">Quick retrieval of stored information</p>
                          </div>
                          <div className="text-center p-4 bg-muted/30 rounded-lg">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <h4 className="font-medium mb-2">Personalization</h4>
                            <p className="text-sm text-muted-foreground">Customize your browsing experience</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">2. Types of Cookies We Use</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Essential Cookies</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              These cookies are necessary for the website to function properly:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                              <li>Session management</li>
                              <li>Security features</li>
                              <li>Basic functionality</li>
                              <li>Form submissions</li>
                            </ul>
                          </div>
                          <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Analytics Cookies</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Help us understand how visitors use our website:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                              <li>Page views and visits</li>
                              <li>User behavior patterns</li>
                              <li>Popular content</li>
                              <li>Performance metrics</li>
                            </ul>
                          </div>
                          <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Functional Cookies</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Remember your preferences and settings:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                              <li>Language preferences</li>
                              <li>Display settings</li>
                              <li>User preferences</li>
                              <li>Customization options</li>
                            </ul>
                          </div>
                          <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Marketing Cookies</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Used to deliver relevant advertisements:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                              <li>Targeted advertising</li>
                              <li>Campaign tracking</li>
                              <li>Conversion measurement</li>
                              <li>Remarketing</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">3. Managing Your Cookie Preferences</h3>
                      <div className="space-y-4">
                        <p className="text-muted-foreground mb-4">
                          You have several options for managing cookies:
                        </p>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold text-primary">1</span>
                            </div>
                            <div>
                              <h4 className="font-medium">Browser Settings</h4>
                              <p className="text-sm text-muted-foreground">
                                Most browsers allow you to refuse or accept cookies. You can usually find 
                                these settings in the "Privacy" or "Security" section of your browser.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold text-primary">2</span>
                            </div>
                            <div>
                              <h4 className="font-medium">Cookie Consent Banner</h4>
                              <p className="text-sm text-muted-foreground">
                                When you first visit our website, you'll see a cookie consent banner where 
                                you can choose which types of cookies to accept.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold text-primary">3</span>
                            </div>
                            <div>
                              <h4 className="font-medium">Opt-Out Links</h4>
                              <p className="text-sm text-muted-foreground">
                                You can opt out of specific third-party cookies using the links provided 
                                in our cookie management tool.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <strong>Note:</strong> Disabling certain cookies may affect the functionality 
                            of our website and your user experience.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">4. Contact Us About Cookies</h3>
                      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
                        <p className="text-muted-foreground mb-4">
                          If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium mb-2">Data Protection Team</h4>
                            <p className="text-sm text-muted-foreground mb-1">Asay Global Privacy Team</p>
                            <p className="text-sm text-muted-foreground mb-1">
                              <a href="mailto:privacy@asayglobal.com" className="text-primary hover:underline">
                                privacy@asayglobal.com
                              </a>
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <a href="tel:+905352026877" className="text-primary hover:underline">
                                +90 535 202 68 77
                              </a>
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Mailing Address</h4>
                            <p className="text-sm text-muted-foreground">
                              Atatürk Mahallesi Ertuğrul Gazi Street<br />
                              Metropol Istanbul, Block C No:2/131<br />
                              Ataşehir Istanbul TR
                            </p>
                          </div>
                        </div>
                      </div>
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
