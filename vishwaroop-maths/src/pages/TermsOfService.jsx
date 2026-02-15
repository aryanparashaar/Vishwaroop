import Section from "../components/Section";

export default function TermsOfService() {
  return (
    <Section background="white">
      <div className="max-w-4xl mx-auto py-20 px-6">

        <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
          Terms of Service
        </h1>

        <p className="text-sm text-slate-500 mb-10">
          Effective Date: 13 February 2026
        </p>

        <div className="space-y-10 text-slate-700 leading-relaxed text-sm md:text-base">

          <p>
            These Terms of Service ("Terms") govern the use of the educational 
            platform operated by Vishwaroop Education at 
            <span className="text-brand-blue font-medium">
              {" "}https://olympiad.vishwaroopedu.com/
            </span>. 
            By registering or participating, you agree to these legally binding Terms.
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              1. Eligibility and Consent
            </h2>
            <p>
              Students participating must provide accurate information. For minors, 
              registration constitutes confirmation that parental or school 
              authorization has been obtained.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              2. Account Responsibility
            </h2>
            <p>
              Users are responsible for safeguarding their login credentials and 
              all activities conducted under their account.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              3. Competition Rules
            </h2>
            <p>
              Participation is subject to published eligibility criteria, timelines, 
              and examination guidelines. Any form of malpractice, cheating, or 
              unfair conduct shall result in immediate disqualification.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              4. Fees and Refund Policy
            </h2>
            <p>
              All payments are processed via Razorpay. Registration fees are 
              non-refundable except where cancellation is initiated by the 
              organizer or required under applicable law.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              5. Intellectual Property Rights
            </h2>
            <p>
              All examination content, branding, logos, study materials, digital 
              assets, and competition structure are proprietary to Vishwaroop 
              Education and protected under Indian intellectual property laws.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              6. Limitation of Liability
            </h2>
            <p>
              Vishwaroop Education shall not be liable for indirect, incidental, 
              or consequential damages arising from participation or use of the 
              platform, to the maximum extent permitted by law.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              7. Suspension and Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate accounts that violate 
              these Terms or engage in misconduct.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              8. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by the laws of the Republic of India. 
              Any disputes shall be subject to the exclusive jurisdiction of the 
              Courts of Delhi, India.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-3">
              9. Amendments
            </h2>
            <p>
              We may revise these Terms periodically. Continued use of the 
              platform constitutes acceptance of updated Terms.
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
}
