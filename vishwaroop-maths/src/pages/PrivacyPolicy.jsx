import Section from "../components/Section";

export default function PrivacyPolicy() {
  return (
    <Section background="white">
      <div className="max-w-4xl mx-auto py-20 px-6">

        <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
          Privacy Policy
        </h1>

        <p className="text-sm text-slate-500 mb-10">
          Effective Date: 13 February 2026
        </p>

        <div className="space-y-10 text-slate-700 leading-relaxed text-sm md:text-base">

          <p>
            This Privacy Policy is issued in compliance with the Digital Personal Data 
            Protection Act, 2023 (India) and explains how Vishwaroop Education 
            ("we", "our", "us") collects, processes, stores, and protects personal data 
            through our educational platform at 
            <span className="text-brand-blue font-medium"> https://vishwaroop.vercel.app</span>.
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              1. Nature of Platform
            </h2>
            <p>
              Vishwaroop Education operates an international-level educational 
              competition platform for students. Participation requires registration 
              and submission of personal data.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              2. Personal Data We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Student name, class, school name, and academic details</li>
              <li>Parent/guardian contact information (where applicable)</li>
              <li>Email addresses and phone numbers</li>
              <li>Account login credentials (securely encrypted passwords)</li>
              <li>Competition registration details</li>
              <li>
                Payment information processed via Razorpay 
                (we do not store full card details)
              </li>
              <li>Usage data and analytics information</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              3. Lawful Basis for Processing
            </h2>
            <p>
              We process personal data based on consent provided at the time of 
              registration and for legitimate educational purposes. For minors, 
              consent must be provided by parents, guardians, or authorized school 
              representatives as required under applicable law.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              4. Purpose of Processing
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Register and administer competitions</li>
              <li>Process payments</li>
              <li>Communicate examination details and results</li>
              <li>Issue certificates and awards</li>
              <li>Maintain security and prevent fraud</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              5. Data Security Safeguards
            </h2>
            <p>
              We implement reasonable security safeguards including encryption, 
              access controls, and secure hosting to protect personal data from 
              unauthorized access, disclosure, or misuse.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              6. Data Retention
            </h2>
            <p>
              Personal data shall be retained only for as long as necessary to 
              fulfill competition administration, legal compliance, and dispute 
              resolution requirements.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              7. Rights of Data Principals (Under DPDP Act, 2023)
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access information about their personal data</li>
              <li>Request correction or erasure of personal data</li>
              <li>Withdraw consent at any time</li>
              <li>Grievance redressal through designated contact mechanism</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              8. Grievance Redressal
            </h2>
            <p>
              For grievances relating to personal data processing, users may 
              contact Vishwaroop Education through the official contact details 
              provided on the website. Complaints shall be addressed within a 
              reasonable timeframe.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              9. International Participants
            </h2>
            <p>
              As competitions are conducted internationally, personal data may 
              be processed in India. By participating, users consent to such 
              cross-border processing where applicable.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              10. Updates to Policy
            </h2>
            <p>
              We reserve the right to modify this Privacy Policy to ensure 
              ongoing compliance with applicable laws.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              11. Contact Information
            </h2>
            <p>
              For any privacy-related concerns, please contact Vishwaroop 
              Education via the official contact channels listed on the website.
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
}
