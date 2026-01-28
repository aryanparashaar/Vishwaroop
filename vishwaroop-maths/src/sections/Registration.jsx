import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Registration() {
  return (
    <Section
      id="registration"
      className="bg-brand-soft/80 border-b border-slate-200/80"
    >
      <SectionHeader
        eyebrow="Registration"
        title="Register for Vishwaroop International Relay"
        subtitle="Registration is open for all government, Private, and aided Schools and independent teams. A team leader can complete the registration on behalf of all three students."
        align="left"
      />

      <div className="grid gap-8 md:grid-cols-[1.4fr,1.1fr]">
        {/* Left: eligibility + fees */}
        <Card className="p-6 md:p-7">
          <h3 className="text-sm font-semibold text-brand-navy">
            Eligibility & Fee Structure
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Registration is open for all{" "}
            <span className="font-medium">
              Government, Private,</span> and <span className="font-medium">Aided schools</span> as well as <span className="font-medium">independent teams
            </span>
            . Teams must have three students who meet the class / level criteria
            specified by Vishwaroop Education.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <FeeCard
              title="Students in schools within India"
              currency="INR"
              amountPerStudent="150"
              amountPerTeam="450"
              note="Per student / per team"
              highlight="Most participants"
            />
            <FeeCard
              title="Students in schools outside India"
              currency="USD"
              amountPerStudent="5"
              amountPerTeam="15"
              note="Per student / per team"
              highlight="International category"
            />
          </div>

          <p className="mt-4 text-[11px] leading-relaxed text-slate-600">
            Important: Registrations are considered valid only upon receipt of
            the prescribed fee within the stipulated time frame. Teams are
            encouraged to register early to secure participation and avail full
            preparation support.
          </p>
        </Card>

        {/* Right: process + CTA (placeholder) */}
        <Card className="flex flex-col justify-between p-6 md:p-7">
          <div>
            <h3 className="text-sm font-semibold text-brand-navy">
              Simple Registration Process
            </h3>
            <ol className="mt-3 space-y-2 text-xs md:text-sm leading-relaxed text-slate-700">
              <li>
                <span className="font-semibold">1.</span> Teams shall be constituted
                 only by Vishwaroop’s management
              </li>
              <li>
                <span className="font-semibold">2.</span> Team details, school details,
                 and all other required information shall be submitted accurately 
                 by the students.
              </li>
              <li>
                <span className="font-semibold">3.</span> The registration fee shall be
                 paid only through the specified payment mode.
              </li>
              <li>
                <span className="font-semibold">4.</span> An official confirmation
                 email/message will be sent upon successful registration.
              </li>
            </ol>
          </div>

          <div className="mt-5 space-y-3">
            <Button
              className="w-full justify-center text-xs uppercase tracking-[0.18em]"
              onClick={() => {
                // later: open Google Form / custom form / payment page
                alert(
                  "In production, this button will open the official registration form."
                );
              }}
            >
              Open Registration Form
            </Button>
            <p className="text-[11px] text-slate-600">
              For now this button is a placeholder on the front-end. Once the
              final registration method is decided (Google Form, custom
              backend, etc.), it can be linked here.
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
}

function FeeCard({
  title,
  currency,
  amountPerStudent,
  amountPerTeam,
  note,
  highlight,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
      <p className="text-xs font-semibold text-slate-700">
        {title}
      </p>
      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
            Per student
          </p>
          <p className="text-base font-semibold text-brand-navy">
            {currency} {amountPerStudent}
          </p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
            Per team
          </p>
          <p className="text-base font-semibold text-brand-navy">
            {currency} {amountPerTeam}
          </p>
        </div>
      </div>
      <p className="mt-2 text-[11px] text-slate-600">{note}</p>
      {highlight && (
        <p className="mt-2 inline-flex rounded-full bg-brand-cream px-2.5 py-1 text-[10px] font-medium text-slate-700">
          {highlight}
        </p>
      )}
    </div>
  );
}
