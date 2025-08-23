'use client';
import { LockIcon, ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import FlagIcon from '@/components/ui/FlagIcons';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  // Determine text color based on className
  const isBlackText = className.includes('text-black');
  const textColor = isBlackText ? 'text-black' : 'text-white';
  const router = useRouter();
  const hoverColor = isBlackText ? 'hover:text-yellow-600' : 'hover:text-yellow-400';

  const languages = [
    { name: 'English', flag: 'en', code: 'en' },
    { name: 'Swedish', flag: 'se', code: 'sv' },
    { name: 'French', flag: 'fr', code: 'fr' },
  ];

  return (
    <header className={`w-full bg-transparent ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 py-3 lg:px-8">
        {/* Mobile Header */}
        <div className="flex md:hidden justify-between items-center w-full">
          {/* Logo */}
          <div className="w-[140px] h-[60px] grid place-items-center">
            <Image
              src="/sayeslogo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Hamburger Menu Button */}
          <button
            className={`p-2 ${textColor} ${hoverColor} transition-colors`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-between items-center w-full">
          {/* Logo */}
          <div className="w-[200px] h-[80px] grid place-items-center">
            <Image
              src="/sayeslogo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => {
                router.push('/');
              }}
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-row justify-between items-center space-x-6">
            <a
              href="#contact"
              className={`text-[19px] font-medium leading-[20px] ${textColor} cursor-pointer ${hoverColor} transition-colors`}
            >
              Contact us
            </a>
            <a
              href="#offers"
              className={`text-[19px] font-medium leading-[20px] ${textColor} cursor-pointer ${hoverColor} transition-colors`}
            >
              Offers
            </a>
          </div>

          {/* Language & Login Section */}
          <div className="flex flex-row justify-between items-center space-x-6">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className={`flex items-center gap-2 ${textColor} ${hoverColor} transition-colors cursor-pointer`}
              >
                <div className="w-6 h-4 rounded-sm overflow-hidden">
                  <FlagIcon
                    country={
                      languages.find((lang) => lang.name === selectedLanguage)?.flag as
                        | 'en'
                        | 'se'
                        | 'fr'
                    }
                    className="w-full h-full"
                  />
                </div>
                <span className="text-[14px] font-normal leading-[16px]">{selectedLanguage}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${languageOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Language Dropdown */}
              {languageOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 min-w-[120px]">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setSelectedLanguage(language.name);
                        setLanguageOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 transition-colors ${
                        selectedLanguage === language.name ? 'bg-gray-50' : ''
                      }`}
                    >
                      <div className="w-6 h-4 rounded-sm overflow-hidden">
                        <FlagIcon
                          country={language.flag as 'en' | 'se' | 'fr'}
                          className="w-full h-full"
                        />
                      </div>
                      <span className="text-sm text-gray-800">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login Button */}
            <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors p-3 flex items-center gap-2 rounded-[0px]">
              <LockIcon className="w-4 h-4 text-gray-800" />
              <span className="text-gray-800 font-medium">Login</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-80 bg-black bg-opacity-95 backdrop-blur-sm z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col h-full p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-yellow-400 transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-4">
              <a
                href="#contact"
                className="text-[18px] font-medium text-white cursor-pointer hover:text-yellow-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact us
              </a>
              <a
                href="#offers"
                className="text-[18px] font-medium text-white cursor-pointer hover:text-yellow-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Offers
              </a>
            </div>

            {/* Mobile Language & Login */}
            <div className="flex flex-col space-y-4 pt-4 border-t border-white border-opacity-20">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLanguageOpen(!languageOpen)}
                  className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  <div className="w-6 h-4 rounded-sm overflow-hidden">
                    <FlagIcon
                      country={
                        languages.find((lang) => lang.name === selectedLanguage)?.flag as
                          | 'en'
                          | 'se'
                          | 'fr'
                      }
                      className="w-full h-full"
                    />
                  </div>
                  <span className="text-[16px] font-normal">{selectedLanguage}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${languageOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Mobile Language Dropdown */}
                {languageOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 min-w-[120px]">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          setSelectedLanguage(language.name);
                          setLanguageOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 transition-colors ${
                          selectedLanguage === language.name ? 'bg-gray-50' : ''
                      }`}
                      >
                        <div className="w-6 h-4 rounded-sm overflow-hidden">
                          <FlagIcon
                            country={language.flag as 'en' | 'se' | 'fr'}
                            className="w-full h-full"
                          />
                        </div>
                        <span className="text-sm text-gray-800">{language.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Login Button */}
              <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors p-3 flex items-center gap-2 rounded-[0px] w-full justify-center">
                <LockIcon className="w-4 h-4 text-gray-800" />
                <span className="text-gray-800 font-medium">Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
