"use client";

import React, { useState } from "react";
import Image from "next/image";

const SiriusWebsiteDesign: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full overflow-x-hidden bg-[#090D12]">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen md:h-[768px] bg-[#090D12] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/background.svg"
            alt="Background"
            fill
            className="object-cover scale-150 md:scale-100 -translate-x-1/4 md:translate-x-0"
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="relative z-20 px-4 sm:px-6 lg:px-10 py-6 lg:py-8">
          <div className="max-w-[1280px] mx-auto flex items-center justify-between">
            {/* Logo */}
            <Image
              src="/sirius_logo.svg"
              alt="Sirius Logo"
              width={131.51}
              height={35.38}
              className="w-24 sm:w-[131.51px] h-auto"
            />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-9">
              <a href="#" className="text-base xl:text-lg font-['Space_Grotesk'] font-medium text-[#F0F2F7] hover:opacity-80 transition">
                About
              </a>
              <a href="#" className="text-base xl:text-lg font-['Space_Grotesk'] font-medium text-[#F0F2F7] hover:opacity-80 transition">
                Products & Services
              </a>
              <a href="#" className="text-base xl:text-lg font-['Space_Grotesk'] font-medium text-[#F0F2F7] hover:opacity-80 transition">
                Team
              </a>
              <div className="relative w-[121.24px] h-[40.07px] rounded-lg border border-[rgba(240,242,247,0.53)]">
                <div className="absolute inset-0 flex items-center justify-center gap-2">
                  <p className="text-base xl:text-lg font-['Space_Grotesk'] font-medium text-[#F0F2F7]">
                    English
                  </p>
                  <Image
                    src="/dropdown_arrow.svg"
                    alt="Dropdown"
                    width={16.89}
                    height={16.89}
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#F0F2F7]"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-[#090D12] border-t border-[rgba(240,242,247,0.1)] px-4 py-6">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-lg font-['Space_Grotesk'] font-medium text-[#F0F2F7]">
                  About
                </a>
                <a href="#" className="text-lg font-['Space_Grotesk'] font-medium text-[#F0F2F7]">
                  Products & Services
                </a>
                <a href="#" className="text-lg font-['Space_Grotesk'] font-medium text-[#F0F2F7]">
                  Team
                </a>
                <div className="relative w-full h-10 rounded-lg border border-[rgba(240,242,247,0.53)]">
                  <div className="absolute inset-0 flex items-center justify-center gap-2">
                    <p className="text-lg font-['Space_Grotesk'] font-medium text-[#F0F2F7]">
                      English
                    </p>
                    <Image
                      src="/dropdown_arrow.svg"
                      alt="Dropdown"
                      width={16.89}
                      height={16.89}
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-20 pb-20 lg:pb-0">
          <div className="flex flex-col items-center text-center">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] leading-tight xl:leading-[1.03em] uppercase font-['Space_Mono'] font-bold text-[#F0F2F7] mb-6 sm:mb-8 lg:mb-10 max-w-full lg:max-w-[708px]">
              Microelectronics
              <br />
              technological hub
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] leading-relaxed xl:leading-[1.39em] font-['Space_Mono'] font-normal text-[#F0F2F7] mb-8 sm:mb-10 lg:mb-12 max-w-full sm:max-w-xl lg:max-w-[686px]">
              We are all about microelectronics.
              <br />
              With time-2-market & price-2-quality competitive advantages for our customers
            </p>

            {/* CTA Button */}
            <button className="bg-[#F0F2F7] text-[#1B232F] px-6 sm:px-8 lg:px-[19px] py-3 sm:py-4 lg:py-[15.56px] rounded-lg text-base sm:text-lg lg:text-[22px] font-['Space_Grotesk'] font-bold hover:opacity-90 transition">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Cards Section - Desktop shows below hero, mobile shows in next section */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 px-10 pb-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex justify-between gap-5">
              {/* Turnkey solutions card */}
              <div className="flex-1 max-w-[388px] bg-[#F0F2F7] rounded-xl p-6 lg:p-8 border border-[rgba(0,0,0,0.1)]">
                <h3 className="text-xl lg:text-2xl xl:text-[30px] leading-tight xl:leading-[1.23em] tracking-tight uppercase text-center font-['IBM_Plex_Mono'] font-semibold text-[#1B232F] mb-4">
                  Turnkey solutions
                </h3>
                <p className="text-base lg:text-lg xl:text-[22px] leading-relaxed xl:leading-[1.4em] tracking-tight text-center font-['IBM_Plex_Mono'] font-normal text-[rgba(27,35,47,0.7)]">
                  Ready-made IP blocks and IC blueprints
                </p>
              </div>

              {/* Customization card */}
              <div className="flex-1 max-w-[388px] bg-[#F0F2F7] rounded-xl p-6 lg:p-8 border border-[rgba(0,0,0,0.1)]">
                <h3 className="text-xl lg:text-2xl xl:text-[30px] leading-tight xl:leading-[1.23em] tracking-tight uppercase text-center font-['IBM_Plex_Mono'] font-semibold text-[#1B232F] mb-4">
                  Customization
                </h3>
                <p className="text-base lg:text-lg xl:text-[22px] leading-relaxed xl:leading-[1.4em] tracking-tight text-center font-['IBM_Plex_Mono'] font-normal text-[rgba(27,35,47,0.7)]">
                  Proven remedies adjusted to your application
                </p>
              </div>

              {/* R&D card */}
              <div className="flex-1 max-w-[388px] bg-[#F0F2F7] rounded-xl p-6 lg:p-8 border border-[rgba(0,0,0,0.1)]">
                <h3 className="text-xl lg:text-2xl xl:text-[30px] leading-tight xl:leading-[1.23em] tracking-tight uppercase text-center font-['IBM_Plex_Mono'] font-semibold text-[#1B232F] mb-4">
                  R&D
                </h3>
                <p className="text-base lg:text-lg xl:text-[22px] leading-relaxed xl:leading-[1.4em] tracking-tight text-center font-['IBM_Plex_Mono'] font-normal text-[rgba(27,35,47,0.7)]">
                  Unique keys based on many years of experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Cards Section */}
      <section className="lg:hidden bg-[#090D12] py-12 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Turnkey solutions card */}
          <div className="bg-[#F0F2F7] rounded-xl p-6 border border-[rgba(0,0,0,0.1)]">
            <h3 className="text-xl leading-tight tracking-tight uppercase text-center font-['IBM_Plex_Mono'] font-semibold text-[#1B232F] mb-4">
              Turnkey solutions
            </h3>
            <p className="text-base leading-relaxed tracking-tight text-center font-['IBM_Plex_Mono'] font-normal text-[rgba(27,35,47,0.7)]">
              Ready-made IP blocks and IC blueprints
            </p>
          </div>

          {/* Customization card */}
          <div className="bg-[#F0F2F7] rounded-xl p-6 border border-[rgba(0,0,0,0.1)]">
            <h3 className="text-xl leading-tight tracking-tight uppercase text-center font-['IBM_Plex_Mono'] font-semibold text-[#1B232F] mb-4">
              Customization
            </h3>
            <p className="text-base leading-relaxed tracking-tight text-center font-['IBM_Plex_Mono'] font-normal text-[rgba(27,35,47,0.7)]">
              Proven remedies adjusted to your application
            </p>
          </div>

          {/* R&D card */}
          <div className="bg-[#F0F2F7] rounded-xl p-6 border border-[rgba(0,0,0,0.1)]">
            <h3 className="text-xl leading-tight tracking-tight uppercase text-center font-['IBM_Plex_Mono'] font-semibold text-[#1B232F] mb-4">
              R&D
            </h3>
            <p className="text-base leading-relaxed tracking-tight text-center font-['IBM_Plex_Mono'] font-normal text-[rgba(27,35,47,0.7)]">
              Unique keys based on many years of experience
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative w-full min-h-[500px] md:h-[700px] bg-[#090D12] py-12 lg:py-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-6">
            {/* Frame 304 Image */}
            <div className="w-full lg:w-auto flex-shrink-0">
              <Image
                src="/frame_304.svg"
                alt="Services"
                width={388}
                height={503.74}
                className="w-full max-w-[388px] mx-auto lg:mx-0 h-auto"
              />
            </div>

            {/* Services Cards */}
            <div className="w-full lg:flex-1 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
              {/* Turnkey solutions */}
              <div className="text-center lg:text-left">
                <h3 className="text-xl lg:text-2xl xl:text-[28px] leading-tight uppercase font-['IBM_Plex_Mono'] font-semibold text-[#F0F2F7] mb-3 lg:mb-4">
                  Turnkey solutions
                </h3>
                <p className="text-base lg:text-lg xl:text-[22px] leading-relaxed font-['Space_Grotesk'] font-normal text-[#B8BECF]">
                  Ready-made IP blocks and IC blueprints
                </p>
              </div>

              {/* Customization */}
              <div className="text-center lg:text-left">
                <h3 className="text-xl lg:text-2xl xl:text-[28px] leading-tight uppercase font-['Space_Mono'] font-bold text-[#F0F2F7] mb-3 lg:mb-4">
                  Customization
                </h3>
                <p className="text-base lg:text-lg xl:text-[22px] leading-relaxed font-['Space_Grotesk'] font-normal text-[#B8BECF]">
                  Proven remedies adjusted to your application
                </p>
              </div>

              {/* R&D */}
              <div className="text-center lg:text-left">
                <h3 className="text-xl lg:text-2xl xl:text-[28px] leading-tight uppercase font-['Space_Mono'] font-bold text-[#F0F2F7] mb-3 lg:mb-4">
                  R&D
                </h3>
                <p className="text-base lg:text-lg xl:text-[22px] leading-relaxed font-['Space_Grotesk'] font-normal text-[#B8BECF]">
                  Unique keys based on many years of experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative w-full min-h-[500px] md:h-[700px] bg-[#090D12] py-12 lg:py-20 px-4 sm:px-6 lg:px-10 overflow-hidden">
        {/* Ellipse decorations - hidden on mobile, visible on desktop */}
        <div className="hidden lg:block absolute -left-[308.7px] -top-[110.19px] w-[1388.07px] h-[1164.74px] rounded-full border border-[rgba(255,255,255,0.07)] border-dashed"></div>
        <div className="hidden lg:block absolute -left-[50.31px] top-[166.15px] w-[1388.07px] h-[1164.74px] rounded-full border border-[rgba(255,255,255,0.07)]"></div>

        <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center text-center pt-12 lg:pt-20">
          <h2 className="text-xs sm:text-sm lg:text-lg uppercase font-['Space_Mono'] font-normal text-[#3E4855] mb-4 lg:mb-6 opacity-40">
            MISSION
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-tight xl:leading-[1.26em] font-['IBM_Plex_Mono'] font-semibold text-[#3E4855] max-w-full sm:max-w-2xl lg:max-w-[962.69px]">
            Sirius Semiconductors was established to reach an ambitious target to turn Vietnam into a technological powerhouse
          </p>
        </div>
      </section>

      {/* Products & Services Section */}
      <section className="relative w-full bg-[#090D12] py-12 lg:py-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-xs sm:text-sm lg:text-lg uppercase font-['Space_Mono'] font-bold text-[#3E4855] mb-8 lg:mb-12 opacity-40">
            Products&Services
          </h2>

          <div className="space-y-8 lg:space-y-12">
            {/* IC Design */}
            <div className="bg-[#24364E] rounded-lg lg:rounded-none p-6 lg:p-10">
              <h3 className="text-xl lg:text-2xl xl:text-[28px] font-['Space_Grotesk'] font-medium text-[#F0F2F7] mb-4 lg:mb-6">
                IC Design
              </h3>
              <p className="text-base lg:text-lg xl:text-[20px] leading-relaxed font-['IBM_Plex_Mono'] font-normal text-[#B8BECF] max-w-full lg:max-w-[631.55px]">
                We provide a full stack of Semiconductors Design & Programming services for FPGA, ASIC, Structures ASIC solutions for Digital, Analogue, Radio Frequency (RF) & Photonic applications.
              </p>
            </div>

            {/* IP-Blocks */}
            <div className="bg-[#182434] rounded-lg lg:rounded-none p-6 lg:p-10 shadow-lg">
              <h3 className="text-xl lg:text-2xl xl:text-[28px] font-['Space_Grotesk'] font-medium text-[#F0F2F7] mb-6 lg:mb-8 opacity-20">
                IP-Blocks
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="space-y-4">
                  <p className="text-base lg:text-lg xl:text-[22px] leading-relaxed font-['Space_Grotesk'] font-normal text-[#1B232F]">
                    RISC-V core. Open standard instruction set architecture with full dev toolkit and debug printed circuit
                  </p>
                  <h4 className="text-base lg:text-lg xl:text-[22px] font-['IBM_Plex_Mono'] font-medium text-[#F0F2F7]">
                    DMA-controller
                  </h4>
                  <p className="text-base lg:text-lg xl:text-[22px] leading-relaxed font-['Space_Grotesk'] font-normal text-[#1B232F]">
                    SRAM. AXI4 to memory bridge with SECDEC and exclusive access support
                  </p>
                  <p className="text-base lg:text-lg xl:text-[22px] leading-relaxed font-['Space_Grotesk'] font-normal text-[#1B232F]">
                    GPIO with APB/AXI interface. GPIO controller with AXI4/ APB interfaces
                  </p>
                  <p className="text-base lg:text-lg xl:text-[22px] leading-relaxed font-['Space_Grotesk'] font-normal text-[#EEF5FF]">
                    AXI interconnect. System Interconnect with support of AXI3/ AXI4/ AHB/ APB interfaces
                  </p>
                  <p className="text-base lg:text-lg xl:text-[22px] leading-relaxed font-['Space_Grotesk'] font-normal text-[#1B232F]">
                    SPI master interface. SPI master controller with AXI4 interface
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-base lg:text-lg xl:text-[22px] leading-relaxed font-['Space_Grotesk'] font-normal text-[#EEF5FF]">
                    I2C master interface. I2C master controller with AXI4 interface
                  </p>
                  <p className="text-base lg:text-lg xl:text-[22px] leading-relaxed font-['Space_Grotesk'] font-normal text-[#1B232F]">
                    UART interface. UART controller with AXI4/APB interfaces
                  </p>
                  <p className="text-base lg:text-lg xl:text-[22px] leading-relaxed font-['Space_Grotesk'] font-normal text-[#1B232F]">
                    GPT. General purpose timer with AXI4/ APB interfaces
                  </p>
                  <p className="text-base lg:text-lg xl:text-[22px] leading-relaxed font-['Space_Grotesk'] font-normal text-[#1B232F]">
                    Analog PLL. PLL with frequency up to 5 GHz (TSMC 28 HPC+)
                  </p>
                  <p className="text-base lg:text-lg xl:text-[22px] leading-relaxed font-['Space_Grotesk'] font-normal text-[#1B232F]">
                    LVDS RX. LVDS RX up to 600MT/s (TSMC 28 HPC+)
                  </p>
                </div>
              </div>
            </div>

            {/* Software & Technologies */}
            <div className="bg-[#101823] rounded-lg lg:rounded-none p-6 lg:p-10">
              <h3 className="text-xl lg:text-2xl xl:text-[28px] font-['IBM_Plex_Mono'] font-bold text-[#FBFBFB] mb-4 lg:mb-6 opacity-20">
                Software & Technologies
              </h3>
              <p className="text-base lg:text-lg xl:text-[22px] leading-relaxed font-['IBM_Plex_Mono'] font-normal text-[#B8BECF] max-w-full lg:max-w-[694px]">
                Sirius also develops a stack of Microelectronics design technologies, including Electronics Design Automation (EDA) software which secures time-2-market & price-2-quality competitive advantages for its customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative w-full min-h-[600px] lg:h-[720px] bg-[#090D12] py-12 lg:py-20 px-4 sm:px-6 lg:px-10 overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] uppercase font-['Space_Mono'] font-bold text-[#3E4855] text-center mb-12 lg:mb-20">
            Industries
          </h2>

          {/* Industries Grid */}
          <div className="relative min-h-[400px] lg:min-h-[504.67px]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {/* Telecom */}
              <div className="bg-[#101823] rounded-lg p-4 lg:p-5 border border-[rgba(255,255,255,0.2)] text-center">
                <p className="text-lg lg:text-xl xl:text-[24px] font-['Space_Grotesk'] font-normal text-[#08A4FF]">
                  Telecom
                </p>
              </div>

              {/* AI */}
              <div className="bg-[#101823] rounded-lg p-4 lg:p-5 border border-[rgba(255,255,255,0.2)] text-center">
                <p className="text-lg lg:text-xl xl:text-[24px] font-['Space_Grotesk'] font-normal text-[#00A1FF]">
                  AI
                </p>
              </div>

              {/* Cloud-service */}
              <div className="bg-[#101823] rounded-lg p-4 lg:p-5 border border-[rgba(255,255,255,0.2)] text-center lg:col-span-2">
                <p className="text-lg lg:text-xl xl:text-[24px] font-['Space_Grotesk'] font-normal text-[#08A4FF]">
                  Cloud-service
                </p>
              </div>

              {/* Engineering */}
              <div className="bg-[#101823] rounded-lg p-4 lg:p-5 border border-[rgba(255,255,255,0.2)] text-center">
                <p className="text-lg lg:text-xl xl:text-[24px] font-['Space_Grotesk'] font-normal text-[rgba(240,242,247,0.7)]">
                  Engineering
                </p>
              </div>

              {/* Robotics */}
              <div className="bg-[#101823] rounded-lg p-4 lg:p-5 border border-[rgba(4,117,208,1)] text-center">
                <p className="text-lg lg:text-xl xl:text-[24px] font-['Space_Grotesk'] font-normal text-[#08A4FF]">
                  Robotics
                </p>
              </div>

              {/* IoT */}
              <div className="bg-[rgba(16,24,35,0.95)] rounded-lg p-4 lg:p-5 border border-[rgba(255,255,255,0.2)] text-center">
                <p className="text-lg lg:text-xl xl:text-[24px] font-['Space_Grotesk'] font-normal text-[#08A4FF]">
                  IoT
                </p>
              </div>

              {/* Security systems */}
              <div className="bg-[#101823] rounded-lg p-4 lg:p-5 border border-[rgba(4,117,208,1)] text-center">
                <p className="text-lg lg:text-xl xl:text-[24px] font-['Space_Grotesk'] font-normal text-[rgba(240,242,247,0.7)]">
                  Security systems
                </p>
              </div>

              {/* Blockchain */}
              <div className="bg-[#101823] rounded-lg p-4 lg:p-5 border border-[rgba(4,117,208,1)] text-center lg:col-span-2">
                <p className="text-lg lg:text-xl xl:text-[24px] font-['Space_Grotesk'] font-normal text-[rgba(240,242,247,0.7)]">
                  Blockchain
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative w-full bg-[#182434] py-12 lg:py-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-xs sm:text-sm lg:text-lg uppercase font-['Space_Mono'] font-normal text-[#3E4855] mb-8 lg:mb-12 opacity-40">
            TEAM
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Column - Title */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl lg:text-[45px] leading-tight font-['IBM_Plex_Mono'] font-bold text-[#F2F2F2] mb-8 lg:mb-0">
                Lead by the ones who got something to brag on.
                <br />
                But they don't
              </h2>
            </div>

            {/* Right Column - Team Members */}
            <div className="lg:w-1/2 space-y-6">
              {/* Alex Drozdov */}
              <div className="bg-[rgba(255,255,255,0.05)] rounded-3xl p-6">
                <div className="flex gap-4">
                  <Image
                    src="/alex_drozdov.svg"
                    alt="Alex Drozdov"
                    width={109.27}
                    height={110}
                    className="w-20 h-20 lg:w-[109.27px] lg:h-[110px] rounded-full flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl lg:text-2xl xl:text-[28px] font-['Space_Mono'] font-bold text-[#F2F2F2] mb-2">
                      Alex Drozdov
                    </h3>
                    <p className="text-sm lg:text-base xl:text-[20px] leading-relaxed font-['Space_Grotesk'] font-normal text-[#B8BECF] opacity-70">
                      Former Executive of one of the Intel local RnD centers, ex-vice president of Soft Machines Ltd, PhD in computer science, previously launched the microelectronics technological companies in Russia
                    </p>
                  </div>
                </div>
              </div>

              {/* Van Nguyen */}
              <div className="bg-[rgba(255,255,255,0.05)] rounded-3xl p-6">
                <div className="flex gap-4">
                  <Image
                    src="/van_nguyen.png"
                    alt="Van Nguyen"
                    width={109.27}
                    height={110}
                    className="w-20 h-20 lg:w-[109.27px] lg:h-[110px] rounded-full flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl lg:text-2xl xl:text-[28px] font-['Space_Mono'] font-bold text-[#F2F2F2] mb-2">
                      Van Nguyen
                    </h3>
                    <p className="text-sm lg:text-base xl:text-[20px] leading-relaxed font-['Space_Grotesk'] font-normal text-[#B8BECF] opacity-70">
                      Famous Vietnamese tycoon with a long story of successfully built businesses such as ..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Join Team CTA */}
          <div className="mt-12 lg:mt-20 text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-[45px] font-['Space_Grotesk'] font-medium text-[#F2F2F2] mb-4 lg:mb-6">
              Wanna join the team?
            </h3>
            <p className="text-base lg:text-lg xl:text-[22px] font-['Space_Grotesk'] font-normal text-[#B8BECF] mb-6 lg:mb-8 max-w-2xl mx-auto">
              We are always looking for talented people who find their joy and inspiration in hi-tech. Feel free to reach us and tell your story.
            </p>
            <button className="bg-gradient-to-br from-[rgba(25,171,255,1)] to-[rgba(43,149,255,1)] text-[#1B232F] px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-base lg:text-lg xl:text-[22px] font-['Space_Grotesk'] font-bold hover:opacity-90 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative w-full bg-[#F1F3F8] py-12 lg:py-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-['Space_Grotesk'] font-medium text-[#0F141C] mb-8 lg:mb-12">
            Contact details
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-6">
              <div>
                <p className="text-base lg:text-lg xl:text-[20px] font-['Space_Grotesk'] font-medium text-[#0F141C] mb-2">
                  Office address
                </p>
                <p className="text-base lg:text-lg xl:text-[20px] font-['Space_Grotesk'] font-normal text-[#0F141C] opacity-50">
                  1455 Nguyen Van Linh,<br />
                  My Toan 1-H3 Ward, Tan Phong Ward, District 7, Ho Chi Minh City, Vietnam
                </p>
              </div>
              <div>
                <p className="text-base lg:text-lg xl:text-[20px] font-['Space_Grotesk'] font-medium text-[#0F141C] mb-2">
                  Call us
                </p>
                <p className="text-base lg:text-lg xl:text-[20px] font-['Space_Grotesk'] font-normal text-[#0F141C] opacity-50">
                  (+84) 0868 317 799
                </p>
              </div>
              <div>
                <p className="text-base lg:text-lg xl:text-[20px] font-['Space_Grotesk'] font-medium text-[#0F141C] mb-2">
                  Email us
                </p>
                <p className="text-base lg:text-lg xl:text-[20px] font-['Space_Grotesk'] font-normal text-[#0F141C] opacity-50">
                  info@rise-hi.tech
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-base lg:text-lg xl:text-[20px] font-['Space_Grotesk'] font-medium text-[#0F141C] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[rgba(0,0,0,0.04)] rounded-lg border border-[rgba(15,20,28,0.4)] px-4 py-3 text-[#0F141C] text-base lg:text-lg xl:text-[20px] font-['Space_Grotesk'] font-medium"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-base lg:text-lg xl:text-[20px] font-['Space_Grotesk'] font-medium text-[#0F141C] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[rgba(0,0,0,0.04)] rounded-lg border border-[rgba(15,20,28,0.1)] px-4 py-3 text-[#0F141C] text-base lg:text-lg xl:text-[20px] font-['Space_Grotesk'] font-medium"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-base lg:text-lg xl:text-[20px] font-['Space_Grotesk'] font-medium text-[#0F141C] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-[rgba(0,0,0,0.04)] rounded-lg border border-[rgba(15,20,28,0.1)] px-4 py-3 text-[#0F141C] text-base lg:text-lg xl:text-[20px] font-['Space_Grotesk'] font-medium resize-none"
                    placeholder="Message"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-br from-[rgba(25,171,255,1)] to-[rgba(43,149,255,1)] text-[#F0F0F0] px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-base lg:text-lg xl:text-[22px] font-['Space_Grotesk'] font-bold hover:opacity-90 transition"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full bg-[#090D12] py-12 lg:py-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8 lg:mb-12">
            {/* Logo and Address */}
            <div className="lg:w-1/3 space-y-4">
              <Image
                src="/sirius_logo.svg"
                alt="Sirius Logo"
                width={131.51}
                height={35.38}
                className="w-24 lg:w-[131.51px] h-auto mb-4"
              />
              <p className="text-sm lg:text-base text-[#B8BECF] opacity-50">
                1455 Nguyen Van Linh,<br />
                My Toan 1-H3 Ward, Tan Phong Ward, District 7, Ho Chi Minh City, Vietnam
              </p>
              <p className="text-sm lg:text-base text-[#B8BECF] opacity-50">
                (+84) 0868 317 799
              </p>
              <p className="text-sm lg:text-base text-[#B8BECF] opacity-50">
                info@rise-hi.tech
              </p>
            </div>

            {/* Navigation */}
            <div className="lg:w-1/3">
              <h3 className="text-xs lg:text-sm uppercase font-['Space_Mono'] font-normal text-[#B8BECF] opacity-50 mb-4">
                NAVIGATION
              </h3>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-base lg:text-lg font-['Space_Grotesk'] font-medium text-[#B8BECF] hover:opacity-80 transition">
                  About
                </a>
                <a href="#" className="text-base lg:text-lg font-['Space_Grotesk'] font-medium text-[#B8BECF] hover:opacity-80 transition">
                  Products & Services
                </a>
                <a href="#" className="text-base lg:text-lg font-['Space_Grotesk'] font-medium text-[#B8BECF] hover:opacity-80 transition">
                  Industries
                </a>
                <a href="#" className="text-base lg:text-lg font-['Space_Grotesk'] font-medium text-[#B8BECF] hover:opacity-80 transition">
                  Team
                </a>
                <a href="#" className="text-base lg:text-lg font-['Space_Grotesk'] font-medium text-[#B8BECF] hover:opacity-80 transition">
                  Careers
                </a>
              </div>
            </div>

            {/* Legal */}
            <div className="lg:w-1/3">
              <h3 className="text-xs lg:text-sm uppercase font-['Space_Mono'] font-normal text-[#B8BECF] opacity-50 mb-4">
                LEGAL
              </h3>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-base lg:text-lg font-['Space_Grotesk'] font-medium text-[#B8BECF] hover:opacity-80 transition">
                  Terms & Conditions
                </a>
                <a href="#" className="text-base lg:text-lg font-['Space_Grotesk'] font-medium text-[#B8BECF] hover:opacity-80 transition">
                  Privacy Policy
                </a>
                <a href="#" className="text-base lg:text-lg font-['Space_Grotesk'] font-medium text-[#B8BECF] hover:opacity-80 transition">
                  Cookies
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[rgba(255,255,255,0.07)] pt-6 lg:pt-8">
            <p className="text-sm lg:text-base font-['Space_Grotesk'] font-normal text-[#B8BECF] opacity-25">
              © 2025 Sirius Semiconductors. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiriusWebsiteDesign;
