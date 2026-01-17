import SubjectLayout from "../../../layouts/SubjectLayout";

export default function PhysicsAbout() {
  return (
    <SubjectLayout
      subject="Physics"
      title="About Physics Olympiad"
      description="The Physics Olympiad at Vishwaroop International Relay is designed to test conceptual clarity, analytical thinking and real-world application of physics principles."
    >
      <div className="space-y-6 text-sm leading-relaxed text-slate-700">
        <p>
          The Physics Olympiad focuses on developing a deep understanding of
          physical laws rather than rote memorisation. Problems are structured
          to evaluate how students apply concepts to unfamiliar situations.
        </p>

        <p>
          The relay format introduces a collaborative dimension where each
          student contributes a part of the solution. Accuracy, clarity of
          reasoning and time management are essential for success.
        </p>

        <div className="rounded-xl bg-brand-cream/60 p-4">
          <h3 className="text-sm font-semibold text-brand-navy">
            What students gain
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Strong conceptual foundation in Physics</li>
            <li>Improved analytical and problem-solving skills</li>
            <li>Experience of competitive yet collaborative learning</li>
            <li>Preparation for higher-level national and international exams</li>
          </ul>
        </div>
      </div>
    </SubjectLayout>
  );
}
