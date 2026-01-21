"use client";

import { CTASection } from "../../components/CTASection";
import { Footer } from "../../components/Footer";
import Image from "next/image";

export default function PrivacyPage() {
  return (
    <>
      {/* Section 1 */}
      <div 
        className="w-[1440px] h-[637px] bg-[#E5F9E0] relative px-0 max-w-full"
        >
            {/* Text and image side by side */}
            <div className="absolute w-[1342px] h-[477px] gap-[55px] top-[80px] left-[58px] flex flex-row items-center">
                {/* left */}
                <div className="w-[624px] h-[264px] flex flex-col gap-[40px]">
                    <div className="flex flex-col gap-[16px] w-[624px] h-[264px]">
                        <div className="flex flex-col gap-[24px] w-[624px] h-[64px]">
                            <h1 className="w-[624px] h-[64px] text-[#021514] font-poly-sans font-normal text-[57px] leading-[64px] tracking-[-0.25px]">Privacy Policy</h1>
                        </div>
                        <p className="w-[624px] h-[144px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#8CA1A0]">
                          At Sprinten, we take your privacy seriously. Whether you're exploring our website, contacting us, or working with us on a project, we want you to understand how your information is handled. This page explains the types of data we may collect, why we collect it, and how we keep it safe. It’s a straightforward overview designed to match our transparent and human-focused approach.
                        </p>
                        <div className="flex flex-col gap-[24px] w-[624px] h-[24px]">
                            <p className="w-[624px] h-[24px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#2F9C96]">Last Updated December, 2025</p>
                        </div>
                    </div>
                </div>
                {/* right */}
                <Image 
                  src="/conference.png" 
                  alt="Privacy Illustration" 
                  width={663} 
                  height={477} 
                  className="w-[663px] h-[477px] rounded-[16px]"
                />
            </div>
      </div>
      
      {/* Next Section */}
      <div className="w-[1440px] h-[2879px] relative px-0 max-w-full">
        {/* Left sidebar */}
        <div className="absolute w-[384px] h-[684px] top-[59px] left-[62px] border-r border-[#B1BFBF]">
          <div className="absolute w-[348px] h-[560px] left-[18px] top-[38px] flex flex-col gap-[16px]">
            <div className="flex flex-row items-center p-[16px] gap-[8px] w-[348px] h-[56px] bg-[#2F9C96]/10 border-l-4 border-[#2F9C96]">
              <span className="w-[228px] h-[24px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#2F9C96] whitespace-nowrap">
                1. Information We May Collect
              </span>
            </div>
            <div className="flex flex-row items-center p-[16px] gap-[8px] w-[348px] h-[56px]">
              <span className="w-[286px] h-[24px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-black whitespace-nowrap">
                2. How We May Use Your Information
              </span>
            </div>
            <div className="flex flex-row items-center p-[16px] gap-[8px] w-[348px] h-[56px]">
              <span className="w-[316px] h-[24px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-black whitespace-nowrap">
                3. When We May Share Your Information
              </span>
            </div>
            <div className="flex flex-row items-center p-[16px] gap-[8px] w-[348px] h-[56px]">
              <span className="w-[126px] h-[24px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-black whitespace-nowrap">
                4. Data Security
              </span>
            </div>
            <div className="flex flex-row items-center p-[16px] gap-[8px] w-[348px] h-[56px]">
              <span className="w-[194px] h-[24px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-black whitespace-nowrap">
                5. Your Choices & Rights
              </span>
            </div>
            <div className="flex flex-row items-center p-[16px] gap-[8px] w-[348px] h-[56px]">
              <span className="w-[316px] h-[24px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-black">
                6. Cookies & Tracking Technologies
              </span>
            </div>
            <div className="flex flex-row items-center p-[16px] gap-[8px] w-[348px] h-[56px]">
              <span className="w-[316px] h-[24px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-black">
                7. Updates to This Privacy Policy
              </span>
            </div>
            <div className="flex flex-row items-center p-[16px] gap-[8px] w-[348px] h-[56px]">
              <span className="w-[316px] h-[24px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-black">
                8. Contact Us
              </span>
            </div>
          </div>
        </div>
        {/* Right content */}
        <div className="absolute w-[908px] h-[2684px] top-[59px] left-[486px] flex flex-col gap-[80px]">
          {/* Information We May Collect */}
          <div className="flex flex-col gap-[40px] w-[908px] h-[512px]">
            <div className="flex flex-col gap-[16px] w-[908px] h-[104px]">
              <div className="flex flex-col gap-[24px] w-[908px] h-[52px]">
                <h2 className="w-[908px] h-[52px] font-poly-sans font-normal text-[45px] leading-[52px] text-[#021514]">
                  Information We May Collect
                </h2>
                <p className="w-[908px] h-[24px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#8CA1A0]">
                  (The categories below are examples of what we typically handle.)
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px] w-[908px] h-[368px]">
              <div className="flex flex-col gap-[16px] w-[908px] h-[64px]">
                <h3 className="w-[908px] h-[28px] font-poly-sans font-normal text-[22px] leading-[28px] text-[#021514]">
                  Contact Details
                </h3>
                <p className="w-[908px] h-[20px] font-poly-sans font-normal text-[14px] leading-[20px] tracking-[0.25px] text-[#8CA1A0]">
                  Your name, email address, phone number, and business information when you inquire, request a quote, or book a call.
                </p>
              </div>
              <div className="flex flex-col gap-[16px] w-[908px] h-[64px]">
                <h3 className="w-[908px] h-[28px] font-poly-sans font-normal text-[22px] leading-[28px] text-[#021514]">
                  Communication Records
                </h3>
                <p className="w-[908px] h-[20px] font-poly-sans font-normal text-[14px] leading-[20px] tracking-[0.25px] text-[#8CA1A0]">
                  Details shared through emails, contact forms, chats, or project discussions
                </p>
              </div>
              <div className="flex flex-col gap-[16px] w-[908px] h-[84px]">
                <h3 className="w-[908px] h-[28px] font-poly-sans font-normal text-[22px] leading-[28px] text-[#021514]">
                  Website Usage Data
                </h3>
                <p className="w-[908px] h-[40px] font-poly-sans font-normal text-[14px] leading-[20px] tracking-[0.25px] text-[#8CA1A0]">
                  General analytics such as IP address, browser type, time spent on pages, and pages viewed. This helps us understand performance and improve user experience.
                </p>
              </div>
              <div className="flex flex-col gap-[16px] w-[908px] h-[84px]">
                <h3 className="w-[908px] h-[28px] font-poly-sans font-normal text-[22px] leading-[28px] text-[#021514]">
                  Project Assets & Client Files
                </h3>
                <p className="w-[908px] h-[40px] font-poly-sans font-normal text-[14px] leading-[20px] tracking-[0.25px] text-[#8CA1A0]">
                  Any brand materials, documents, or content you share with us for your project. These are treated with strict confidentiality and used solely for delivering your work.
                </p>
              </div>
            </div>
          </div>

          {/* How We May Use Your Information */}
          <div className="flex flex-col gap-[40px] w-[908px] h-[472px]">
            <div className="flex flex-col gap-[16px] w-[908px] h-[104px]">
              <div className="flex flex-col gap-[24px] w-[908px] h-[52px]">
                <h2 className="w-[908px] h-[52px] font-poly-sans font-normal text-[45px] leading-[52px] text-[#021514]">
                  How We May Use Your Information
                </h2>
                <p className="w-[908px] h-[24px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#8CA1A0]">
                  (Examples of how your information supports our services.)
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px] w-[908px] h-[328px]">
              <div className="flex flex-col gap-[16px] w-[908px] h-[64px]">
                <h3 className="w-[908px] h-[28px] font-poly-sans font-normal text-[22px] leading-[28px] text-[#021514]">
                  To Deliver Our Services
                </h3>
                <p className="w-[908px] h-[20px] font-poly-sans font-normal text-[14px] leading-[20px] tracking-[0.25px] text-[#8CA1A0]">
                  Responding to inquiries, providing consultations, carrying out design or development work, and managing ongoing projects.
                </p>
              </div>
              <div className="flex flex-col gap-[16px] w-[908px] h-[64px]">
                <h3 className="w-[908px] h-[28px] font-poly-sans font-normal text-[22px] leading-[28px] text-[#021514]">
                  To Improve Our Platform & Process
                </h3>
                <p className="w-[908px] h-[20px] font-poly-sans font-normal text-[14px] leading-[20px] tracking-[0.25px] text-[#8CA1A0]">
                  Analyzing how visitors use our website, refining user experience, and enhancing service quality.
                </p>
              </div>
              <div className="flex flex-col gap-[16px] w-[908px] h-[64px]">
                <h3 className="w-[908px] h-[28px] font-poly-sans font-normal text-[22px] leading-[28px] text-[#021514]">
                  To Communicate With You
                </h3>
                <p className="w-[908px] h-[20px] font-poly-sans font-normal text-[14px] leading-[20px] tracking-[0.25px] text-[#8CA1A0]">
                  Sharing updates, proposals, invoices, newsletters (if subscribed), or important messages related to your project.
                </p>
              </div>
              <div className="flex flex-col gap-[16px] w-[908px] h-[64px]">
                <h3 className="w-[908px] h-[28px] font-poly-sans font-normal text-[22px] leading-[28px] text-[#021514]">
                  For Security & Legal Compliance
                </h3>
                <p className="w-[908px] h-[20px] font-poly-sans font-normal text-[14px] leading-[20px] tracking-[0.25px] text-[#8CA1A0]">
                  Keeping our systems secure, preventing fraud, and meeting applicable legal requirements
                </p>
              </div>
            </div>
          </div>

          {/* When We May Share Your Information */}
          <div className="flex flex-col gap-[40px] w-[908px] h-[392px]">
            <div className="flex flex-col gap-[16px] w-[908px] h-[92px]">
              <div className="flex flex-col gap-[24px] w-[908px] h-[52px]">
                <h2 className="w-[908px] h-[52px] font-poly-sans font-normal text-[45px] leading-[52px] text-[#021514]">
                  When We May Share Your Information
                </h2>
                <p className="w-[908px] h-[24px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#8CA1A0]">
                  We keep sharing minimal and only when necessary.)
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px] w-[908px] h-[260px]">
              <div className="flex flex-col gap-[16px] w-[908px] h-[84px]">
                <h3 className="w-[908px] h-[28px] font-poly-sans font-normal text-[22px] leading-[28px] text-[#021514]">
                  Trusted Service Providers
                </h3>
                <p className="w-[908px] h-[40px] font-poly-sans font-normal text-[14px] leading-[20px] tracking-[0.25px] text-[#8CA1A0]">
                  Hosting companies, analytics partners, payment processors, and other platforms that support our operations. They are required to protect your data.
                </p>
              </div>
              <div className="flex flex-col gap-[16px] w-[908px] h-[64px]">
                <h3 className="w-[908px] h-[28px] font-poly-sans font-normal text-[22px] leading-[28px] text-[#021514]">
                  Legal Disclosures
                </h3>
                <p className="w-[908px] h-[20px] font-poly-sans font-normal text-[14px] leading-[20px] tracking-[0.25px] text-[#8CA1A0]">
                  If we are required by law to provide certain information to authorities.
                </p>
              </div>
              <div className="flex flex-col gap-[16px] w-[908px] h-[64px]">
                <h3 className="w-[908px] h-[28px] font-poly-sans font-normal text-[22px] leading-[28px] text-[#021514]">
                  Business Transitions
                </h3>
                <p className="w-[908px] h-[20px] font-poly-sans font-normal text-[14px] leading-[20px] tracking-[0.25px] text-[#8CA1A0]">
                  If Sprinten is ever involved in a merger or acquisition, relevant data may transfer as part of the business assets
                </p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="flex flex-col gap-[16px] w-[908px] h-[140px]">
            <div className="flex flex-col gap-[24px] w-[908px] h-[52px]">
              <h2 className="w-[908px] h-[52px] font-poly-sans font-normal text-[45px] leading-[52px] text-[#021514]">
                Data Security
              </h2>
              <p className="w-[908px] h-[72px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#8CA1A0]">
                We apply reasonable technical and organizational safeguards to protect your data from unauthorized access, alteration, or misuse. While no digital system is invincible, we continuously update our security practices to keep your information safe.
              </p>
            </div>
          </div>

          {/* Your Choices & Rights */}
          <div className="flex flex-col gap-[16px] w-[908px] h-[164px]">
            <div className="flex flex-col gap-[24px] w-[908px] h-[52px]">
              <h2 className="w-[908px] h-[52px] font-poly-sans font-normal text-[45px] leading-[52px] text-[#021514]">
                Your Choices & Rights
              </h2>
              <p className="w-[908px] h-[96px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#8CA1A0]">
                Depending on where you live, you may have rights such as accessing, updating, or requesting deletion of your personal data. You can also opt out of marketing communications at any time.  Just reach us at: sprintenagency@gmail.com
              </p>
            </div>
          </div>

          {/* Cookies & Tracking Technologies */}
          <div className="flex flex-col gap-[16px] w-[908px] h-[116px]">
            <div className="flex flex-col gap-[24px] w-[908px] h-[52px]">
              <h2 className="w-[908px] h-[52px] font-poly-sans font-normal text-[45px] leading-[52px] text-[#021514]">
                Cookies & Tracking Technologies
              </h2>
              <p className="w-[908px] h-[48px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#8CA1A0]">
                Our website may use cookies or similar technologies to enhance browsing, understand site performance, and support our marketing efforts. You can disable cookies in your browser settings if you prefer.
              </p>
            </div>
          </div>

          {/* Updates to This Privacy Policy */}
          <div className="flex flex-col gap-[16px] w-[908px] h-[116px]">
            <div className="flex flex-col gap-[24px] w-[908px] h-[52px]">
              <h2 className="w-[908px] h-[52px] font-poly-sans font-normal text-[45px] leading-[52px] text-[#021514]">
                Updates to This Privacy Policy
              </h2>
              <p className="w-[908px] h-[48px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#8CA1A0]">
                This policy may be updated occasionally to reflect improvements to our services or changes in legal requirements. Any updates will be posted on this page with a new date.
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-[16px] w-[908px] h-[212px]">
            <div className="flex flex-col gap-[24px] w-[908px] h-[52px]">
              <h2 className="w-[908px] h-[52px] font-poly-sans font-normal text-[45px] leading-[52px] text-[#021514]">
                Contact Us
              </h2>
              <p className="w-[908px] h-[144px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#8CA1A0]">
                If you have questions about this Privacy Policy or how we handle data, contact us at:  Sprinten Agency   Email: sprintenagency@gmail.com Telegram: @callme_TOC
              </p>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </>
  );
}