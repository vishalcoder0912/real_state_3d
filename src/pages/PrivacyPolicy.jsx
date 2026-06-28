import SectionHeader from "../components/SectionHeader.jsx";

const sections = [
  ["Information We Collect", "We may collect contact details, enquiry preferences, budget range, plot interest, and message details submitted through forms."],
  ["How We Use Information", "Information is used to respond to property enquiries, coordinate callbacks, support site visits, and improve buyer communication."],
  ["Sharing", "We do not sell personal information. Details may be shared only with internal team members or service partners required to support the enquiry."],
  ["Data Accuracy", "Buyers should verify final property documentation, approvals, pricing, and availability before making any decision."],
  ["Contact", "For privacy questions, contact customercare@omanaprojects.com."],
];

const PrivacyPolicy = () => {
  return (
    <section className="section-y bg-white">
      <div className="container-pad max-w-4xl">
        <SectionHeader align="left" eyebrow="Legal" title="Privacy Policy" text="A clear overview of how OMANA PROJECTS handles enquiry information and buyer communication data." />
        <div className="mt-10 space-y-5">
          {sections.map(([title, text]) => (
            <article key={title} className="rounded-[14px] border border-black/5 bg-mist p-6">
              <h2 className="font-display text-2xl font-bold text-navy">{title}</h2>
              <p className="mt-3 leading-8 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
