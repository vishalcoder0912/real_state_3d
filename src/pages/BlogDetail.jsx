import {ArrowLeft, CalendarDays} from "lucide-react";
import {Link, useParams} from "react-router-dom";
import CTASection from "../components/CTASection.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {blogs} from "../data/blogs.js";

const BlogDetail = () => {
  const {slug} = useParams();
  const post = blogs.find((blog) => blog.slug === slug) || blogs[0];

  return (
    <>
      <section className="section-y bg-navy text-white">
        <div className="container-pad max-w-4xl">
          <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-gold">
            <ArrowLeft className="size-4" aria-hidden="true" /> Back to Blog
          </Link>
          <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white/60">
            <CalendarDays className="size-4" aria-hidden="true" /> {post.category || "Dholera insight"}
          </p>
          <h1 className="font-display text-5xl font-extrabold leading-tight">{post.title}</h1>
          <p className="mt-6 text-lg leading-8 text-white/75">{post.summary}</p>
        </div>
      </section>

      <section className="section-y bg-white">
        <article className="container-pad max-w-4xl leading-8 text-muted">
          <SectionHeader align="left" eyebrow="Insight" title="What Buyers Should Understand" />
          <p className="mt-8">
            Dholera-related plot decisions should be evaluated through location context, infrastructure progress, legal documentation, usage category, budget alignment, and site visit clarity. OMANA PROJECTS focuses on helping buyers compare these factors responsibly before making a decision.
          </p>
          <p className="mt-6">
            Always review final property documents, approvals, payment terms, and actual availability before committing to any plot opportunity.
          </p>
        </article>
      </section>
      <CTASection />
    </>
  );
};

export default BlogDetail;
