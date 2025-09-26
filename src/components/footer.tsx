import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center">
              <img 
                src="/asay-global-logo-white.svg" 
                alt="Asay Global" 
                className="h-12 w-auto" 
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              With 22 years of industry experience, Asay Global specializes in the production and supply of high-quality building materials for global markets.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#decorative" className="text-gray-300 hover:text-white transition-colors">
                  Interior and Exterior Decorative Products
                </Link>
              </li>
              <li>
                <Link href="/services#steel-structure" className="text-gray-300 hover:text-white transition-colors">
                  Steel Framings
                </Link>
              </li>
              <li>
                <Link href="/services#aluminum-solutions" className="text-gray-300 hover:text-white transition-colors">
                  Aluminum Architectural Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#glass-solutions" className="text-gray-300 hover:text-white transition-colors">
                  Architectural Glass Solutions
                </Link>
              </li>
                <li>
                  <Link href="/services/u-pvc-systems" className="text-gray-300 hover:text-white transition-colors">
                    u-PVC Systems
                  </Link>
                </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/dealers" className="text-gray-300 hover:text-white transition-colors">
                  Authorized Dealers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>info@asayglobal.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Asay Global. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/legal#privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal#terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal#cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
