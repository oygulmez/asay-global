import React from "react";
import Link from "next/link";
import Image from "next/image";
import { createLocalizedUrl } from "@/lib/slugs";

type Locale = 'en' | 'fr' | 'es' | undefined;

export function Footer({ locale }: { locale?: Locale } = {}) {
  const current = (locale === 'fr' || locale === 'es' || locale === 'en') ? locale : 'en';
  const dict = current === 'fr' ? (require('@/messages/fr.json')) : current === 'es' ? (require('@/messages/es.json')) : (require('@/messages/en.json'))
  const t = (key: string) => key.split('.').reduce((o: any, k: string) => o?.[k], dict)
  
  // Helper function to create locale-aware URLs with localized slugs
  const createUrl = (path: string) => {
    return createLocalizedUrl(path, current);
  };
  return (
    <footer className="bg-[#333333] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href={createUrl("/")} className="inline-flex items-center">
              <img 
                src="/asay-global-logo-white.svg" 
                alt="Asay Global" 
                className="h-12 w-auto" 
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t('footer.company_desc')}
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.services')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={createUrl("/services#decorative")} className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.services_menu.decorative')}
                </Link>
              </li>
              <li>
                <Link href={createUrl("/services#steel-structure")} className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.services_menu.steel')}
                </Link>
              </li>
              <li>
                <Link href={createUrl("/services#aluminum-solutions")} className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.services_menu.aluminum')}
                </Link>
              </li>
              <li>
                <Link href={createUrl("/services#glass-solutions")} className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.services_menu.glass')}
                </Link>
              </li>
                <li>
                  <Link href={createUrl("/services/u-pvc-systems")} className="text-gray-300 hover:text-white transition-colors">
                    {t('nav.services_menu.upvc')}
                  </Link>
                </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.navigation')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={createUrl("/")} className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link href={createUrl("/about")} className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link href={createUrl("/services")} className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.services_link')}
                </Link>
              </li>
              <li>
                <Link href={createUrl("/dealers")} className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.dealers')}
                </Link>
              </li>
              <li>
                <Link href={createUrl("/contact")} className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.contact_link')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.contact')}</h3>
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
              {t('footer.copyright')}
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href={createUrl("/legal#privacy")} className="text-gray-400 hover:text-white transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link href={createUrl("/legal#terms")} className="text-gray-400 hover:text-white transition-colors">
                {t('footer.terms')}
              </Link>
              <Link href={createUrl("/legal#cookies")} className="text-gray-400 hover:text-white transition-colors">
                {t('footer.cookies')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
