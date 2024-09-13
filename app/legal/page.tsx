import React from 'react'

const page = () => {
  return (
    <>
      <div className="w-full h-[102px] bg-[#d9d9d9]">
        <div className="text-center text-black text-lg md:text-xl font-medium font-['Nunito'] justify-center px-4 sm:px-8">
          Legal Terms and Policy
        </div>
      </div>
      
      <div className="w-full max-w-[1310px] mx-auto px-4 py-8">
        {/* Introduction */}
        <h2 className="text-black text-xl font-medium font-['Nunito'] mb-4">Introduction</h2>
        <p className="text-black text-base font-medium font-['Nunito'] mb-6">
          Welcome to SUMR. This Legal Notice outlines the terms and conditions that govern the use of our website and services. 
          By accessing or using our platform, you agree to comply with these terms. If you do not agree, please refrain from using 
          our site. SUMR reserves the right to modify these terms at any time, and your continued use of the site constitutes acceptance 
          of any changes.
        </p>

        {/* Disclaimer */}
        <h2 className="text-black text-xl font-medium font-['Nunito'] mb-4">Disclaimer</h2>
        <p className="text-black text-base font-medium font-['Nunito'] mb-6">
          SUMR is designed to support healthcare professionals by providing AI-driven summaries and insights based on clinical data. 
          However, SUMR does not provide medical advice, diagnosis, or treatment. The information on our platform is intended as a tool 
          to aid healthcare professionals in their decision-making processes and should not replace professional judgment. Users are solely 
          responsible for verifying the accuracy and suitability of the information provided.
        </p>

        {/* Intellectual Property */}
        <h2 className="text-black text-xl font-medium font-['Nunito'] mb-4">Intellectual Property</h2>
        <p className="text-black text-base font-medium font-['Nunito'] mb-6">
          All content, including but not limited to text, graphics, logos, and software, is the intellectual property of SUMR or its licensors 
          and is protected by applicable copyright, trademark, and intellectual property laws. Unauthorized use of our content is prohibited. 
          Users may not copy, distribute, or modify any part of our website or services without prior written consent from SUMR.
        </p>

        {/* Privacy Policy */}
        <h2 className="text-black text-xl font-medium font-['Nunito'] mb-4">Privacy Policy</h2>
        <p className="text-black text-base font-medium font-['Nunito'] mb-6">
          SUMR is committed to protecting the privacy of our users. Please refer to our Privacy Policy for detailed information on how we collect, 
          use, and safeguard your personal data.
        </p>

        {/* Limitation of Liability */}
        <h2 className="text-black text-xl font-medium font-['Nunito'] mb-4">Limitation of Liability</h2>
        <p className="text-black text-base font-medium font-['Nunito'] mb-6">
          While we strive to provide accurate and reliable information, SUMR does not warrant that our platform will be free from errors, interruptions, 
          or inaccuracies. To the fullest extent permitted by law, SUMR disclaims all liability for any direct, indirect, or consequential damages resulting 
          from the use or inability to use our platform, including but not limited to errors in data or decisions made based on information provided by our 
          AI systems.
        </p>

        {/* User Conduct */}
        <h2 className="text-black text-xl font-medium font-['Nunito'] mb-4">User Conduct</h2>
        <p className="text-black text-base font-medium font-['Nunito'] mb-6">
          By using SUMR, you agree not to:
          <ul className="list-disc ml-5">
            <li>Violate any applicable laws or regulations</li>
            <li>Submit false, misleading, or incomplete information</li>
            <li>Engage in any unauthorized access, use, or interference with our systems</li>
            <li>Transmit malicious software or viruses</li>
          </ul>
        </p>

        {/* Governing Law */}
        <h2 className="text-black text-xl font-medium font-['Nunito'] mb-4">Governing Law</h2>
        <p className="text-black text-base font-medium font-['Nunito'] mb-6">
          This Legal Notice and any disputes arising from the use of our platform are governed by and construed in accordance with the laws of [Insert Jurisdiction]. 
          By using our services, you agree to submit to the exclusive jurisdiction of the courts in this location.
        </p>

        {/* Contact Information */}
        <h2 className="text-black text-xl font-medium font-['Nunito'] mb-4">Contact Information</h2>
        <p className="text-black text-base font-medium font-['Nunito']">
          If you have any questions or concerns about these terms or the use of our platform, please contact us at [Insert Contact Information].
        </p>
      </div>
      <div className="w-full max-w-[1312px] h-0 border border-black"></div>
        <div className="w-full max-w-[1310px] text-black text-lg md:text-xl font-medium font-['Nunito']">
            Effective Date: 5 Sept 2024<br/>
            This Legal Notice is effective as of the date posted. Please review it regularly for updates.
        </div>
        <div className="w-full max-w-[1440px] h-[200px] md:h-[250px] lg:h-[318px] bg-[#d9d9d9]" />
    </>
  )
}

export default page