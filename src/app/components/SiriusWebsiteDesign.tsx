import React from "react";

const SiriusWebsiteDesign: React.FC = () => {
  // Нестандартные значения из Figma:
  // - Отсутствует tailwind.config.js, поэтому все значения, не соответствующие стандартным классам Tailwind, будут задокументированы.

  // Список изображений, которые не удалось скачать автоматически (так как папка 'public' не существует):
  // - Необходимо вручную создать папку 'public' в корне проекта, а затем загрузить следующие файлы:
  //   - '/public/background.svg' (nodeId: 1:38)
  //   - '/public/dropdown_arrow.svg' (nodeId: 1:64)
  //   - '/public/frame_304.svg' (nodeId: 1:250)
  //   - '/public/rectangle_8139.svg' (nodeId: 1:169)
  //   - '/public/rectangle_8138.svg' (nodeId: 1:173)
  //   - '/public/group_2087328961.svg' (nodeId: 1:176)
  //   - '/public/rectangle_8137.svg' (nodeId: 1:198)
  //   - '/public/sirius_logo.svg' (nodeId: 1:66, 4:2815)
  //   - '/public/alex_drozdov.svg' (nodeId: 1:107)
  //   - '/public/van_nguyen.png' (nodeId: 1:115)
  //   - '/public/group_2087328977_1.png' (nodeId: 1:137)
  //   - '/public/group_2087328977_2.png' (nodeId: 1:138)

  return (
    <div className="relative w-[1280px] flex flex-col items-center gap-[202px]">
      {/* Frame 314 */}
      <section className="relative w-full h-[768px] bg-[#090D12]">
        {/* background (IMAGE-SVG) */}
        <img
          src="/public/background.svg"
          alt="Background"
          className="absolute left-[-863.28px] top-[-2.15px] w-[3006.56px] h-[1745.15px]"
        />
        {/* We are all about microelectronics... */}
        <p className="absolute left-[297.03px] top-[383.82px] w-[685.93px] h-[117px] text-[28px] leading-[1.39em] tracking-[-2%] text-center font-['Space Mono'] font-normal text-[#F0F2F7]">
          We are all about microelectronics.
          <br />
          With time-2-market & price-2-quality competitive advantages for our
          customers
        </p>
        {/* Contact Sales (Group 1321315921) */}
        <div className="absolute left-[546.94px] top-[535.75px] w-[186.12px] h-[55.35px] rounded-[9px]">
          {/* Rectangle 4 */}
          <div className="w-[186.12px] h-[55.35px] bg-[#F0F2F7] rounded-[9px]"></div>
          {/* Title */}
          <p className="absolute left-[19px] top-[15.56px] w-[148.11px] h-[24.23px] text-[22px] leading-[1.11em] tracking-[-2%] text-center font-['Space Grotesk'] font-bold text-[#1B232F]">
            Contact Sales
          </p>
        </div>
        {/* header (Group) */}
        <nav className="absolute left-[745.76px] top-[30.92px] w-[496.24px] h-[40.07px]">
          {/* Frame 126 */}
          <div className="flex justify-end items-center gap-[37px] h-[40.07px]">
            {/* About */}
            <a
              href="#"
              className="text-[18px] leading-[1.33em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#F0F2F7]"
            >
              About
            </a>
            {/* Products & Services */}
            <a
              href="#"
              className="text-[18px] leading-[1.33em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#F0F2F7]"
            >
              Products & Services
            </a>
            {/* Team */}
            <a
              href="#"
              className="text-[18px] leading-[1.33em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#F0F2F7]"
            >
              Team
            </a>
            {/* Group 2087328960 (English) */}
            <div className="relative w-[121.24px] h-[40.07px] rounded-[7px] border border-[rgba(240,242,247,0.53)]">
              {/* Frame 131 */}
              <div className="absolute left-[17.18px] top-[10.04px] flex items-center gap-[9px]">
                {/* Title */}
                <p className="text-[18px] leading-[1.11em] tracking-[-2%] text-center font-['Space Grotesk'] font-medium text-[#F0F2F7]">
                  English
                </p>
                {/* Vector (IMAGE-SVG) */}
                <img
                  src="/public/dropdown_arrow.svg"
                  alt="Dropdown arrow"
                  className="w-[16.89px] h-[16.89px] stroke-[#F0F2F7] stroke-[1.4px]"
                />
              </div>
            </div>
          </div>
        </nav>
        {/* Microelectronics technological hub */}
        <h1 className="absolute left-[286px] top-[218.9px] w-[708px] h-[140px] text-[68px] leading-[1.03em] uppercase text-center font-['Space Mono'] font-bold text-[#F0F2F7]">
          Microelectronics
          <br />
          technological hub
        </h1>
        {/* Group 2087328963 (IMAGE-SVG) */}
        <img
          src="/public/sirius_logo.svg"
          alt="Sirius Logo"
          className="absolute left-[38px] top-[29.25px] w-[131.51px] h-[35.38px]"
        />
        {/* Group 2087328972 (Cards) */}
        <div className="absolute left-[38px] top-[851.42px] w-[1204px] h-[183.96px] flex justify-between gap-[20px] rounded-[11px]">
          {/* Turnkey solutions card */}
          <div className="relative w-[388px] h-[183.96px] bg-[#F0F2F7] rounded-[11px] border border-[rgba(0,0,0,0.1)]">
            <h3 className="absolute left-[48px] top-[37px] w-[292px] h-[37px] text-[30px] leading-[1.23em] tracking-[-2%] uppercase text-center font-['IBM Plex Mono'] font-semibold text-[#1B232F]">
              Turnkey solutions
            </h3>
            <p className="absolute left-[48.27px] top-[84.96px] w-[278.06px] h-[62px] text-[22px] leading-[1.4em] tracking-[-2%] text-center font-['IBM Plex Mono'] font-normal text-[rgba(27,35,47,0.7)]">
              Ready-made IP blocks and IC blueprints
            </p>
          </div>
          {/* Customization card */}
          <div className="relative w-[388px] h-[183.96px] bg-[#F0F2F7] rounded-[11px] border border-[rgba(0,0,0,0.1)]">
            <h3 className="absolute left-[488.85px] top-[37px] w-[227px] h-[37px] text-[30px] leading-[1.23em] tracking-[-2%] uppercase text-center font-['IBM Plex Mono'] font-semibold text-[#1B232F]">
              Customization
            </h3>
            <p className="absolute left-[446.31px] top-[84.96px] w-[311.08px] h-[62px] text-[22px] leading-[1.4em] tracking-[-2%] text-center font-['IBM Plex Mono'] font-normal text-[rgba(27,35,47,0.7)]">
              Proven remedies adjusted to your application
            </p>
          </div>
          {/* R&D card */}
          <div className="relative w-[388px] h-[183.96px] bg-[#F0F2F7] rounded-[11px] border border-[rgba(0,0,0,0.1)]">
            <h3 className="absolute left-[983.5px] top-[37px] w-[53px] h-[37px] text-[30px] leading-[1.23em] tracking-[-2%] uppercase text-center font-['IBM Plex Mono'] font-semibold text-[#1B232F]">
              R&D
            </h3>
            <p className="absolute left-[855.83px] top-[84.96px] w-[308.35px] h-[62px] text-[22px] leading-[1.4em] tracking-[-2%] text-center font-['IBM Plex Mono'] font-normal text-[rgba(27,35,47,0.7)]">
              Unique keys based on many years of experience
            </p>
          </div>
        </div>
      </section>

      {/* Frame 315 */}
      <section className="relative w-full h-[700px] bg-[#090D12]">
        {/* noise (RECTANGLE) */}
        <div className="absolute left-0 top-[-0.15px] w-[1280px] h-[1745.15px] bg-[#F0F2F7] opacity-[0.01]"></div>
        {/* Group 2087329006 */}
        <div className="absolute left-[38px] top-[98.13px] w-[1204px] h-[503.74px]">
          {/* Frame 304 (IMAGE-SVG) */}
          <img
            src="/public/frame_304.svg"
            alt="Frame 304"
            className="w-[388px] h-[503.74px]"
          />
          {/* Group 2087328972 (Cards) */}
          <div className="absolute left-[41.57px] top-[368.34px] w-[1122.6px] h-[107.97px] flex justify-between rounded-[0px]">
            {/* Turnkey solutions card */}
            <div className="relative w-[292px] h-[34px]">
              <h3 className="absolute left-0 top-0 w-[292px] h-[34px] text-[28px] leading-[1.23em] tracking-[-2%] uppercase text-center font-['IBM Plex Mono'] font-semibold text-[#F0F2F7]">
                Turnkey solutions
              </h3>
              <p className="absolute left-[22.22px] top-[45.97px] w-[247.56px] h-[62px] text-[22px] leading-[1.4em] tracking-[-2%] text-center font-['Space Grotesk'] font-normal text-[#B8BECF]">
                Ready-made IP blocks and IC blueprints
              </p>
            </div>
            {/* Customization card */}
            <div className="relative w-[223px] h-[34px]">
              <h3 className="absolute left-[449.43px] top-0 w-[223px] h-[34px] text-[28px] leading-[1.23em] tracking-[-2%] uppercase text-center font-['Space Mono'] font-bold text-[#F0F2F7]">
                Customization
              </h3>
              <p className="absolute left-[418.06px] top-[45.97px] w-[284.73px] h-[62px] text-[22px] leading-[1.4em] tracking-[-2%] text-center font-['Space Grotesk'] font-normal text-[#B8BECF]">
                Proven remedies adjusted to your application
              </p>
            </div>
            {/* R&D card */}
            <div className="relative w-[52px] h-[34px]">
              <h3 className="absolute left-[942.43px] top-0 w-[52px] h-[34px] text-[28px] leading-[1.23em] tracking-[-2%] uppercase text-center font-['Space Mono'] font-bold text-[#F0F2F7]">
                R&D
              </h3>
              <p className="absolute left-[814.26px] top-[45.97px] w-[308.35px] h-[62px] text-[22px] leading-[1.4em] tracking-[-2%] text-center font-['Space Grotesk'] font-normal text-[#B8BECF]">
                Unique keys based on many years of experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frame 311 */}
      <section className="relative w-full h-[700px] bg-[#090D12]">
        {/* Ellipse 153 (stroke) */}
        <div className="absolute left-[-308.7px] top-[-110.19px] w-[1388.07px] h-[1164.74px] rounded-full border border-[rgba(255,255,255,0.07)] border-dashed"></div>
        {/* Ellipse 154 (stroke) */}
        <div className="absolute left-[-50.31px] top-[166.15px] w-[1388.07px] h-[1164.74px] rounded-full border border-[rgba(255,255,255,0.07)]"></div>
        {/* noise (RECTANGLE) */}
        <div className="absolute left-0 top-[-0.15px] w-[1280px] h-[1745.15px] bg-[#F0F2F7] opacity-[0.01]"></div>
        {/* Sirius Semiconductors was established... */}
        <p className="absolute left-[158.65px] top-[222px] w-[962.69px] h-[284px] text-[56px] leading-[1.26em] tracking-[-2%] text-center font-['IBM Plex Mono'] font-semibold text-[#3E4855] drop-shadow-[0px_4.325632572174072px_4.325632572174072px_rgba(13,18,26,1)]">
          Sirius Semiconductors was established to reach an ambitious target to
          turn Vietnam into a technological powerhouse
        </p>
        {/* MISSION */}
        <h2 className="absolute left-[601px] top-[166.15px] w-[78px] h-[26px] text-[18px] leading-[1.47em] uppercase text-center font-['Space Mono'] font-normal text-[#3E4855] drop-shadow-[0px_4px_4px_rgba(13,18,26,1)] opacity-40">
          MISSION
        </h2>
      </section>

      {/* Frame 183 */}
      <section className="relative w-full h-[541px] bg-[#090D12]">
        {/* noise (RECTANGLE) */}
        <div className="absolute left-0 top-[-16.15px] w-[1280px] h-[1745.15px] bg-[#F0F2F7] opacity-[0.01]"></div>
        {/* Group 2087328951 (IC Design) */}
        <div className="absolute left-[-0.6px] top-[139.33px] w-[1280.76px] h-[1532.79px]">
          {/* Rectangle 8139 (IMAGE-SVG) */}
          <img
            src="/public/rectangle_8139.svg"
            alt="Rectangle 8139"
            className="w-[1280.76px] h-[1532.79px] bg-[#24364E] rounded-[0px]"
          />
          <h3 className="absolute left-[38.46px] top-[26.02px] w-[120px] h-[36px] text-[28px] leading-[1.3em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#F0F2F7]">
            IC Design
          </h3>
          <p className="absolute left-[38.6px] top-[84.02px] w-[631.55px] h-[89px] text-[20px] leading-[1.5em] tracking-[-1%] font-['IBM Plex Mono'] font-normal text-[#B8BECF]">
            We provide a full stack of Semiconductors Design & Programming
            services for FPGA, ASIC, Structures ASIC solutions for Digital,
            Analogue, Radio Frequency (RF) & Photonic applications.
          </p>
        </div>

        {/* Group 2087328952 (IP-Blocks) */}
        <div className="absolute left-[-0.6px] top-[355.2px] w-[1280.76px] h-[1259.17px]">
          {/* Rectangle 8138 (IMAGE-SVG) */}
          <img
            src="/public/rectangle_8138.svg"
            alt="Rectangle 8138"
            className="w-[1280.76px] h-[1259.17px] bg-[#182434] drop-shadow-[0px_2px_3.4px_rgba(0,0,0,0.25)] rounded-[0px]"
          />
          <h3 className="absolute left-[37.98px] top-[29.38px] w-[123px] h-[36px] text-[28px] leading-[1.3em] tracking-[-1%] font-['Space Grotesk'] font-medium text-[#F0F2F7] opacity-20">
            IP-Blocks
          </h3>
          {/* Group 2087328971 (IP Block List) */}
          <div className="absolute left-[37.98px] top-[100.07px] w-[1205.07px] h-[750.13px] rounded-[17px]">
            {/* Group 2087328961 (IMAGE-SVG) */}
            <img
              src="/public/group_2087328961.svg"
              alt="Group 2087328961"
              className="w-[1205.07px] h-[750.13px] opacity-30 rounded-[17px]"
            />

            {/* RISC-V core. Open standard instruction set architecture... */}
            <p className="absolute left-[26.48px] top-[19.23px] w-[495.97px] h-[87px] text-[22px] leading-[1.3em] tracking-[-2%] font-['Space Grotesk'] font-normal text-[#1B232F]">
              RISC-V core. Open standard instruction set architecture with full
              dev toolkit and debug printed circuit
            </p>
            {/* DMA-controller */}
            <h4 className="absolute left-[26.48px] top-[172.34px] w-[284.7px] h-[29px] text-[22px] leading-[1.3em] tracking-[-2%] font-['IBM Plex Mono'] font-medium text-[#F0F2F7]">
              DMA-controller
            </h4>
            {/* SRAM. AXI4 to memory bridge... */}
            <p className="absolute left-[26.48px] top-[283.81px] w-[495.97px] h-[58px] text-[22px] leading-[1.3em] tracking-[-2%] font-['Space Grotesk'] font-normal text-[#1B232F]">
              SRAM. AXI4 to memory bridge with SECDEC and exclusive access
              support
            </p>
            {/* GPIO with APB/AXI interface... */}
            <p className="absolute left-[26.48px] top-[406.63px] w-[479.49px] h-[58px] text-[22px] leading-[1.3em] tracking-[-2%] font-['Space Grotesk'] font-normal text-[#1B232F]">
              GPIO with APB/AXI interface. GPIO controller with AXI4/ APB
              interfaces
            </p>
            {/* AXI interconnect. System Interconnect... */}
            <p className="absolute left-[26.48px] top-[517.6px] w-[495.32px] h-[87px] text-[22px] leading-[1.3em] tracking-[-2%] font-['Space Grotesk'] font-normal text-[#EEF5FF]">
              AXI interconnect. System Interconnect with support of AXI3/ AXI4/
              AHB/ APB interfaces
            </p>
            {/* SPI master interface... */}
            <p className="absolute left-[26.48px] top-[655.57px] w-[418.55px] h-[58px] text-[22px] leading-[1.3em] tracking-[-2%] font-['Space Grotesk'] font-normal text-[#1B232F]">
              SPI master interface. SPI master controller with AXI4 interface
            </p>
            {/* I2C master interface... */}
            <p className="absolute left-[629.57px] top-[33.73px] w-[423.41px] h-[58px] text-[22px] leading-[1.3em] tracking-[-2%] font-['Space Grotesk'] font-normal text-[#EEF5FF]">
              I2C master interface. I2C master controller with AXI4 interface
            </p>
            {/* UART interface... */}
            <p className="absolute left-[629.57px] top-[157.84px] w-[403.98px] h-[58px] text-[22px] leading-[1.3em] tracking-[-2%] font-['Space Grotesk'] font-normal text-[#1B232F]">
              UART interface. UART controller with AXI4/APB interfaces
            </p>
            {/* GPT. General purpose timer... */}
            <p className="absolute left-[629.57px] top-[282.01px] w-[445.83px] h-[58px] text-[22px] leading-[1.3em] tracking-[-2%] font-['Space Grotesk'] font-normal text-[#1B232F]">
              GPT. General purpose timer with AXI4/ APB interfaces
            </p>
            {/* Analog PLL. PLL with frequency... */}
            <p className="absolute left-[632.02px] top-[406.63px] w-[408.31px] h-[58px] text-[22px] leading-[1.3em] tracking-[-2%] font-['Space Grotesk'] font-normal text-[#1B232F]">
              Analog PLL. PLL with frequency up to 5 GHz (TSMC 28 HPC+)
            </p>
            {/* LVDS RX. LVDS RX up to 600MT/s... */}
            <p className="absolute left-[629.57px] top-[532.1px] w-[402.72px] h-[58px] text-[22px] leading-[1.3em] tracking-[-2%] font-['Space Grotesk'] font-normal text-[#1B232F]">
              LVDS RX. LVDS RX up to 600MT/s (TSMC 28 HPC+)
            </p>
          </div>
        </div>

        {/* Group 2087328953 (Software & Technologies) */}
        <div className="absolute left-[-0.6px] top-[450.52px] w-[1280.76px] h-[340.57px]">
          {/* Rectangle 8137 (IMAGE-SVG) */}
          <img
            src="/public/rectangle_8137.svg"
            alt="Rectangle 8137"
            className="w-[1280.76px] h-[340.57px] bg-[#101823] rounded-[0px]"
          />
          <h3 className="absolute left-[38px] top-[29.23px] w-[427.32px] h-[31px] text-[28px] leading-[1.12em] tracking-[-1%] font-['IBM Plex Mono'] font-bold text-[#FBFBFB] opacity-20">
            Software & Technologies
          </h3>
          <p className="absolute left-[38px] top-[92.48px] w-[694px] h-[165px] text-[22px] leading-[1.5em] tracking-[-1%] font-['IBM Plex Mono'] font-normal text-[#B8BECF]">
            Sirius also develops a stack of Microelectronics design
            technologies, including Electronics Design Automation (EDA) software
            which secures time-2-market & price-2-quality competitive advantages
            for its customers.
          </p>
        </div>
        {/* Products&Services */}
        <h2 className="absolute left-[37.62px] top-[82.49px] w-[199px] h-[26px] text-[18px] leading-[1.47em] uppercase text-center font-['Space Mono'] font-bold text-[#3E4855] drop-shadow-[0px_4px_4px_rgba(13,18,26,1)] opacity-40">
          Products&Services
        </h2>
      </section>

      {/* Frame 189 */}
      <section className="relative w-full h-[720px] bg-[#090D12]">
        {/* Group 2087328977 1 (IMAGE) */}
        <img
          src="/public/group_2087328977_1.png"
          alt="Group 2087328977 1"
          className="absolute left-0 top-[1.37px] w-[636.61px] h-[762.25px] opacity-7"
        />
        {/* Group 2087328977 2 (IMAGE) */}
        <img
          src="/public/group_2087328977_2.png"
          alt="Group 2087328977 2"
          className="absolute left-[643.39px] top-[1.37px] w-[636.61px] h-[762.25px] opacity-7"
        />
        {/* Rectangle 8178 (noise) */}
        <div className="absolute left-[-217.88px] top-[620.65px] w-[1715.76px] h-[198.7px] bg-[#F0F2F7] blur-[102.9px]"></div>
        {/* Rectangle 8179 (noise) */}
        <div className="absolute left-[-217.88px] top-[-95.27px] w-[1715.76px] h-[190.55px] bg-[#F0F2F7] blur-[102.9px]"></div>
        {/* noise (RECTANGLE) */}
        <div className="absolute left-0 top-[-125px] w-[1280px] h-[1870px] bg-[#F0F2F7] opacity-[0.01]"></div>
        {/* Group 2087329007 (Industries) */}
        <div className="absolute left-[121px] top-[110.43px] w-[1033.39px] h-[504.67px]">
          {/* Engineering */}
          <div className="absolute left-[860.39px] top-[191.33px] flex justify-center items-center gap-[10px] px-[20px] py-[10px] bg-[#101823] rounded-[9px] border border-[rgba(255,255,255,0.2)]">
            <p className="text-[24px] leading-[1.47em] tracking-[-2%] text-center font-['Space Grotesk'] font-normal text-[rgba(240,242,247,0.7)]">
              Engineering
            </p>
          </div>
          {/* Robotics */}
          <div className="absolute left-0 top-[251.54px] flex justify-center items-center gap-[10px] px-[20px] py-[10px] bg-[#101823] rounded-[9px] border border-[rgba(4,117,208,1)]">
            <p className="text-[24px] leading-[1.47em] tracking-[-2%] text-center font-['Space Grotesk'] font-normal text-[#08A4FF]">
              Robotics
            </p>
          </div>
          {/* IoT */}
          <div className="absolute left-[946.89px] top-[304.04px] flex justify-center items-center gap-[10px] px-[20px] py-[10px] bg-[rgba(16,24,35,0.95)] rounded-[9px] border border-[rgba(255,255,255,0.2)]">
            <p className="text-[24px] leading-[1.47em] tracking-[-2%] text-center font-['Space Grotesk'] font-normal text-[#08A4FF]">
              IoT
            </p>
          </div>
          {/* Security systems */}
          <div className="absolute left-[594.63px] top-[449.67px] flex justify-center items-center gap-[10px] px-[20px] py-[10px] bg-[#101823] rounded-[9px] border border-[rgba(4,117,208,1)]">
            <p className="text-[24px] leading-[1.47em] tracking-[-2%] text-center font-['Space Grotesk'] font-normal text-[rgba(240,242,247,0.7)]">
              Security systems
            </p>
          </div>
          {/* Cloud-service */}
          <div className="absolute left-[418.89px] top-[62.94px] w-[512.47px] h-[55px] rounded-[9px]">
            <div className="absolute left-[155.73px] top-0 flex justify-center items-center gap-[10px] px-[20px] py-[10px] bg-[#101823] rounded-[9px] border border-[rgba(255,255,255,0.2)] drop-shadow-[inset_0px_0px_33.3px_rgba(4,117,208,0.6)]">
              <p className="text-[24px] leading-[1.47em] text-center font-['Space Grotesk'] font-normal text-[#08A4FF]">
                Cloud-service
              </p>
            </div>
            {/* Rectangle 8171 */}
            <div className="absolute left-[356.73px] top-[27.11px] w-[155.73px] h-[1.99px] bg-[linear-gradient(270deg,rgba(30,164,255,0)_0%,rgba(30,164,255,1)_100%)]"></div>
            {/* Rectangle 8172 */}
            <div className="absolute left-0 top-[27.11px] w-[155.73px] h-[1.99px] bg-[linear-gradient(270deg,rgba(30,164,255,0)_0%,rgba(30,164,255,1)_100%)]"></div>
          </div>
          {/* Telecom */}
          <div className="absolute left-[262.21px] top-0 flex justify-center items-center gap-[10px] px-[20px] py-[10px] bg-[#101823] rounded-[9px] border border-[rgba(255,255,255,0.2)]">
            <p className="text-[24px] leading-[1.47em] tracking-[-2%] text-center font-['Space Grotesk'] font-normal text-[#08A4FF]">
              Telecom
            </p>
          </div>
          {/* AI */}
          <div className="absolute left-[108.96px] top-[136.33px] flex justify-center items-center gap-[10px] px-[20px] py-[10px] bg-[#101823] rounded-[9px] border border-[rgba(255,255,255,0.2)]">
            <p className="text-[24px] leading-[1.47em] tracking-[-2%] text-center font-['Space Grotesk'] font-normal text-[#00A1FF]">
              AI
            </p>
          </div>
          {/* Blockchain */}
          <div className="absolute left-[20px] top-[423.17px] w-[474.47px] h-[55px] rounded-[9px]">
            <div className="absolute left-[155.73px] top-0 flex justify-center items-center gap-[10px] px-[20px] py-[10px] bg-[#101823] rounded-[9px] border border-[rgba(4,117,208,1)] drop-shadow-[inset_0px_0px_33.3px_rgba(4,117,208,0.6)]">
              <p className="text-[24px] leading-[1.47em] tracking-[-2%] text-center font-['Space Grotesk'] font-normal text-[rgba(240,242,247,0.7)]">
                Blockchain
              </p>
            </div>
            {/* Rectangle 8173 */}
            <div className="absolute left-[318.73px] top-[25.51px] w-[155.73px] h-[1.99px] bg-[linear-gradient(270deg,rgba(30,164,255,0)_0%,rgba(30,164,255,1)_100%)]"></div>
            {/* Rectangle 8174 */}
            <div className="absolute left-0 top-[25.51px] w-[155.73px] h-[1.99px] bg-[linear-gradient(270deg,rgba(30,164,255,0)_0%,rgba(30,164,255,1)_100%)]"></div>
          </div>
        </div>
        {/* Industries */}
        <h2 className="absolute left-[419.82px] top-[323px] w-[392px] h-[74px] text-[68px] leading-[1.09em] tracking-[-4%] uppercase text-center font-['Space Mono'] font-bold text-[#3E4855]">
          Industries
        </h2>
      </section>

      {/* Frame 312 */}
      <section className="relative w-full h-[1013px] bg-[#182434]">
        {/* noise (RECTANGLE) */}
        <div className="absolute left-0 top-[-0.15px] w-[1280px] h-[1745.15px] bg-[#FFFFFF] opacity-[0.11]"></div>
        {/* Group 2087329012 (Team members) */}
        <div className="absolute left-[38px] top-[110.07px] w-[1174.05px] h-[447px] rounded-[97px]">
          {/* Group 2087328950 */}
          <div className="absolute left-[658.94px] top-[12.24px] w-[515.11px] h-[434.76px] rounded-[97px]">
            {/* Group 2087328974 (Alex Drozdov) */}
            <div className="absolute left-[1.06px] top-0 w-[514.05px] h-[235px] rounded-[97px]">
              {/* Group 1321315923 (IMAGE-SVG) */}
              <img
                src="/public/alex_drozdov.svg"
                alt="Alex Drozdov"
                className="w-[109.27px] h-[110px] rounded-[97px]"
              />
              <h3 className="absolute left-[137.46px] top-[7px] w-[235px] h-[36px] text-[28px] leading-[1.3em] tracking-[-2%] font-['Space Mono'] font-bold text-[#F2F2F2]">
                Alex Drozdov
              </h3>
              <p className="absolute left-[137.46px] top-[55px] w-[376.59px] h-[180px] text-[20px] leading-[1.52em] tracking-[-1%] font-['Space Grotesk'] font-normal text-[#B8BECF] opacity-70">
                Former Executive of one of the Intel local RnD centers, ex-vice
                president of Soft Machines Ltd, PhD in computer science,
                previously launched the microelectronics technological companies
                in Russia
              </p>
            </div>
            {/* Group 2087329008 (Van Nguyen) */}
            <div className="absolute left-0 top-[289.76px] w-[513.94px] h-[145px] rounded-[97px]">
              <h3 className="absolute left-[137.46px] top-[7px] w-[172px] h-[36px] text-[28px] leading-[1.3em] tracking-[-2%] font-['Space Mono'] font-bold text-[#F2F2F2]">
                Van Nguyen
              </h3>
              <p className="absolute left-[137.46px] top-[55px] w-[376.48px] h-[90px] text-[20px] leading-[1.5em] tracking-[-1%] font-['Space Grotesk'] font-normal text-[#B8BECF] opacity-70">
                Famous Vietnamese tycoon with a long story of successfully built
                businesses such as ..
              </p>
              {/* bento-sky-2880 2 (IMAGE) */}
              <img
                src="/public/van_nguyen.png"
                alt="Van Nguyen"
                className="w-[109.27px] h-[110px] rounded-[97px]"
              />
            </div>
          </div>
          {/* Lead by the ones who got something to brag on. But they don’t */}
          <h2 className="absolute left-0 top-0 w-[457.03px] h-[200px] text-[45px] leading-[1.12em] tracking-[-2%] font-['IBM Plex Mono'] font-bold text-[#F2F2F2]">
            Lead by the ones who got something to brag on.
            <br />
            But they don’t
          </h2>
        </div>
        {/* TEAM */}
        <h2 className="absolute left-[38px] top-[58.42px] w-[45px] h-[26px] text-[18px] leading-[1.47em] uppercase text-center font-['Space Mono'] font-normal text-[#3E4855] opacity-40">
          TEAM
        </h2>
        {/* Group 2087329013 (Wanna join the team?) */}
        <div className="absolute left-[282.85px] top-[705.93px] w-[714.3px] h-[226.29px] rounded-[9px]">
          <h3 className="absolute left-[77.85px] top-0 w-[558.6px] h-[54px] text-[45px] leading-[1.19em] tracking-[-2%] text-center font-['Space Grotesk'] font-medium text-[#F2F2F2]">
            Wanna join the team?
          </h3>
          <p className="absolute left-0 top-[74.91px] w-[714.3px] h-[62px] text-[22px] leading-[1.39em] tracking-[-2%] text-center font-['Space Grotesk'] font-normal text-[#B8BECF]">
            We are always looking for talented people who find their joy and
            inspiration in hi-tech. Feel free to reach us and tell your story.
          </p>
          {/* Group 1321315921 (Contact Us button) */}
          <button className="absolute left-[275.58px] top-[170.93px] w-[163.14px] h-[55.35px] rounded-[9px] bg-[linear-gradient(207deg,rgba(25,171,255,1)_0%,rgba(43,149,255,1)_100%)]">
            <p className="absolute left-[24.51px] top-[15.56px] w-[114px] h-[24px] text-[22px] leading-[1.11em] tracking-[-2%] text-center font-['Space Grotesk'] font-bold text-[#1B232F]">
              Contact Us
            </p>
          </button>
        </div>
        {/* Line 57 (stroke) */}
        <div className="absolute left-0 top-[627.38px] w-[1280px] h-0 border-t border-[rgba(255,255,255,0.07)]"></div>
      </section>

      {/* Frame 320 */}
      <section className="relative w-[1280px] h-[691px] bg-[#F1F3F8]">
        {/* noise (RECTANGLE) */}
        <div className="absolute left-0 top-[-52.32px] w-[1280px] h-[1768.32px] bg-[#FFFFFF] opacity-[0.01]"></div>
        {/* Line 57 (stroke) */}
        <div className="absolute left-0 top-[1.03px] w-[1280px] h-0 border-t border-[rgba(255,255,255,0.07)]"></div>
        {/* Group 2087329013 (Contact details) */}
        <div className="absolute left-[38px] top-[73.92px] w-[323px] h-[54px]">
          <h2 className="absolute left-0 top-0 w-[323px] h-[54px] text-[45px] leading-[1.19em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#0F141C]">
            Contact details
          </h2>
        </div>
        {/* Group 2087329016 (Contact Form) */}
        <div className="absolute left-[652px] top-[169.24px] w-[590px] h-[443.84px] rounded-[9px]">
          {/* Rectangle 8180 (Name Input) */}
          <input
            type="text"
            placeholder="Name"
            className="absolute left-0 top-[35.5px] w-[590px] h-[56.31px] bg-[rgba(0,0,0,0.04)] rounded-[9px] border border-[rgba(15,20,28,0.4)] text-[#0F141C] text-[20px] font-['Space Grotesk'] font-medium leading-[1.46em] tracking-[-2%] px-4"
          />
          {/* Rectangle 8181 (Email Input) */}
          <input
            type="email"
            placeholder="Email"
            className="absolute left-0 top-[145.77px] w-[590px] h-[55.35px] bg-[rgba(0,0,0,0.04)] rounded-[9px] border border-[rgba(15,20,28,0.1)] text-[#0F141C] text-[20px] font-['Space Grotesk'] font-medium leading-[1.46em] tracking-[-2%] px-4"
          />
          {/* Rectangle 8182 (Message Textarea) */}
          <textarea
            placeholder="Message"
            className="absolute left-0 top-[256.04px] w-[590px] h-[113.98px] bg-[rgba(0,0,0,0.04)] rounded-[9px] border border-[rgba(15,20,28,0.1)] text-[#0F141C] text-[20px] font-['Space Grotesk'] font-medium leading-[1.46em] tracking-[-2%] px-4 py-2 resize-none"
          ></textarea>
          {/* Group 1321315921 (Send Button) */}
          <button className="absolute left-0 top-[388.49px] w-[109.98px] h-[55.35px] rounded-[9px] bg-[linear-gradient(207deg,rgba(25,171,255,1)_0%,rgba(43,149,255,1)_100%)]">
            <p className="absolute left-[27px] top-[15.68px] w-[53px] h-[24px] text-[22px] leading-[1.11em] tracking-[-2%] text-center font-['Space Grotesk'] font-bold text-[#F0F0F0]">
              Send
            </p>
          </button>
          {/* Name label */}
          <label
            htmlFor="name"
            className="absolute left-[1px] top-0 w-[53px] h-[29px] text-[20px] leading-[1.46em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#0F141C]"
          >
            Name
          </label>
          {/* Email label */}
          <label
            htmlFor="email"
            className="absolute left-[1px] top-[110.27px] w-[49px] h-[29px] text-[20px] leading-[1.46em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#0F141C]"
          >
            Email
          </label>
          {/* Message label */}
          <label
            htmlFor="message"
            className="absolute left-[1px] top-[220.54px] w-[84px] h-[29px] text-[20px] leading-[1.46em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#0F141C]"
          >
            Message
          </label>
        </div>
        {/* Group 2087329017 (Contact Info) */}
        <div className="absolute left-[40px] top-[169.24px] w-[353.01px] h-[336.24px]">
          {/* Address */}
          <p className="absolute left-0 top-[37.77px] w-[353.01px] h-[87px] text-[20px] leading-[1.46em] tracking-[-2%] font-['Space Grotesk'] font-normal text-[#0F141C] opacity-50">
            1455 Nguyen Van Linh, <br />
            My Toan 1-H3 Ward, Tan Phong Ward, District 7, Ho Chi Minh City,
            Vietnam
          </p>
          {/* Phone */}
          <p className="absolute left-0 top-[199.51px] w-[353.01px] h-[29px] text-[20px] leading-[1.46em] tracking-[-2%] font-['Space Grotesk'] font-normal text-[#0F141C] opacity-50">
            (+84) 0868 317 799
          </p>
          {/* Email */}
          <p className="absolute left-0 top-[307.24px] w-[353.01px] h-[29px] text-[20px] leading-[1.46em] tracking-[-2%] font-['Space Grotesk'] font-normal text-[#0F141C] opacity-50">
            info@rise-hi.tech
          </p>
          {/* Office address label */}
          <p className="absolute left-0 top-0 w-[140px] h-[58px] text-[20px] leading-[1.46em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#0F141C]">
            Office address
          </p>
          {/* Call us label */}
          <p className="absolute left-0 top-[165.73px] w-[140px] h-[29px] text-[20px] leading-[1.46em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#0F141C]">
            Call us
          </p>
          {/* Email us label */}
          <p className="absolute left-0 top-[273.47px] w-[140px] h-[29px] text-[20px] leading-[1.46em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#0F141C]">
            Email us
          </p>
        </div>
        {/* Line 92 (stroke) */}
        <div className="absolute left-[671.23px] top-[219.42px] w-0 h-[26.95px] border-l border-[rgba(15,20,28,0.4)]"></div>
      </section>

      {/* Frame 316 (Footer) */}
      <footer className="relative w-[1280px] h-[360px] bg-[#090D12]">
        {/* noise (RECTANGLE) */}
        <div className="absolute left-0 top-[-55.32px] w-[1280px] h-[1768.32px] bg-[#FFFFFF] opacity-[0.01]"></div>
        {/* Group 2087329018 */}
        <div className="absolute left-[38px] top-[296.75px] w-[1204px] h-[40.67px]">
          {/* Line 56 (stroke) */}
          <div className="absolute left-0 top-0 w-[1204px] h-0 border-t border-[rgba(255,255,255,0.07)]"></div>
          {/* Group 2087329011 (Copyright) */}
          <p className="absolute left-0 top-[20.67px] w-[371px] h-[20px] text-[16px] leading-[1.22em] tracking-[-2%] font-['Space Grotesk'] font-normal text-[#B8BECF] opacity-25">
            © 2025 Sirius Semiconductors. All Rights Reserved
          </p>
        </div>
        {/* Group 2087329010 (Navigation) */}
        <div className="absolute left-[754px] top-[45.53px] w-[185px] h-[172.71px]">
          <h3 className="absolute left-0 top-0 w-[84px] h-[17px] text-[14px] leading-[1.22em] tracking-[-2%] uppercase font-['Space Mono'] font-normal text-[#B8BECF] opacity-50">
            NAVIGATION
          </h3>
          {/* Frame 322 (Navigation Links) */}
          <div className="flex flex-col gap-[6px] absolute left-0 top-[27.71px] w-[185px]">
            <a
              href="#"
              className="text-[18px] leading-[1.37em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#B8BECF]"
            >
              About
            </a>
            <a
              href="#"
              className="text-[18px] leading-[1.33em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#B8BECF]"
            >
              Products & Services
            </a>
            <a
              href="#"
              className="text-[18px] leading-[1.33em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#B8BECF]"
            >
              Industries
            </a>
            <a
              href="#"
              className="text-[18px] leading-[1.33em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#B8BECF]"
            >
              Team
            </a>
            <a
              href="#"
              className="text-[18px] leading-[1.33em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#B8BECF]"
            >
              Careers
            </a>
          </div>
        </div>
        {/* Group 2087329009 (Legal) */}
        <div className="absolute left-[1012px] top-[45.53px] w-[185px] h-[112.71px]">
          <h3 className="absolute left-0 top-0 w-[42px] h-[17px] text-[14px] leading-[1.22em] tracking-[-2%] uppercase font-['Space Mono'] font-normal text-[#B8BECF] opacity-50">
            LEGAL
          </h3>
          {/* Frame 323 (Legal Links) */}
          <div className="flex flex-col gap-[6px] absolute left-0 top-[27.71px] w-[185px]">
            <a
              href="#"
              className="text-[18px] leading-[1.37em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#B8BECF]"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-[18px] leading-[1.33em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#B8BECF]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[18px] leading-[1.33em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#B8BECF]"
            >
              Cookies
            </a>
          </div>
        </div>
        {/* Line 57 (stroke) */}
        <div className="absolute left-0 top-[1px] w-[1280px] h-0 border-t border-[rgba(255,255,255,0.07)]"></div>
        {/* Group 2087329015 (Address & Contact) */}
        <div className="absolute left-[38px] top-[96.4px] w-[311.64px] h-[133.84px]">
          {/* Address */}
          <p className="absolute left-[2px] top-0 w-[309.64px] h-[74px] text-[16px] leading-[1.46em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#B8BECF] opacity-50">
            1455 Nguyen Van Linh, <br />
            My Toan 1-H3 Ward, Tan Phong Ward, District 7, Ho Chi Minh City,
            Vietnam
          </p>
          {/* Group 2087329014 (Phone & Email) */}
          <div className="absolute left-0 top-[85.84px] w-[185px] h-[48px]">
            {/* Phone */}
            <p className="absolute left-0 top-0 w-[185px] h-[22px] text-[16px] leading-[1.37em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#B8BECF] opacity-50">
              (+84) 0868 317 799
            </p>
            {/* Email */}
            <p className="absolute left-0 top-[24px] w-[185px] h-[24px] text-[16px] leading-[1.5em] tracking-[-2%] font-['Space Grotesk'] font-medium text-[#B8BECF] opacity-50">
              info@rise-hi.tech
            </p>
          </div>
        </div>
        {/* Group 2087328963 (IMAGE-SVG) */}
        <img
          src="/public/sirius_logo.svg"
          alt="Sirius Logo"
          className="absolute left-[41px] top-[43.53px] w-[131.51px] h-[35.38px]"
        />
      </footer>
    </div>
  );
};

export default SiriusWebsiteDesign;
