import BlogCard from "../components/BlogCard.jsx";
import CTASection from "../components/CTASection.jsx";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {blogs} from "../data/blogs.js";
import {images} from "../data/site.js";

const filters = ["All", "Dholera Insights", "Buyer Guide", "Due Diligence", "Site Visit"];

const Blog = () => {
  return (
    <>
      <PageHero
        title="Blog"
        text="Clear, practical real estate guidance for buyers comparing residential, industrial, and mixed-use plot opportunities."
        image={images.planning}
      />
      <section className="section-y bg-white">
        <div className="container-pad">
          <SectionHeader eyebrow="Knowledge hub" title="Learn before you invest" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {filters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={`rounded-full px-5 py-3 text-sm font-extrabold transition ${
                  index === 0 ? "bg-navy text-white" : "bg-beige text-navy hover:bg-gold"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {blogs.map((post, index) => (
              <Reveal key={post.title} delay={index * 0.05}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-y bg-beige">
        <div className="container-pad grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <SectionHeader
              align="left"
              eyebrow="Popular articles"
              title="Buyer questions worth asking early"
              text="The strongest property decisions often begin with practical questions about usage, documents, access, location, budget, and long-term holding goals."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <form className="rounded-[8px] bg-white p-6 shadow-premium">
              <h3 className="font-display text-3xl font-bold text-navy">Newsletter subscribe</h3>
              <p className="mt-3 text-sm leading-7 text-muted">Receive practical property insights and Dholera updates.</p>
              <label htmlFor="blogEmail" className="sr-only">
                Email address
              </label>
              <input id="blogEmail" type="email" placeholder="Email address" className="mt-6 w-full rounded-[8px] border border-black/10 px-4 py-3 outline-none focus:border-gold" />
              <button type="submit" className="btn-primary mt-4 w-full">
                Subscribe
              </button>
            </form>
          </Reveal>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default Blog;
