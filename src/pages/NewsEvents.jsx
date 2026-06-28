import BlogCard from "../components/BlogCard.jsx";
import CTASection from "../components/CTASection.jsx";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {blogs} from "../data/blogs.js";
import {images} from "../data/site.js";

const NewsEvents = () => {
  return (
    <>
      <PageHero
        title="News & Events"
        text="Industry updates, buyer education, and practical insights for people exploring Dholera and plot investments."
        image={blogs[0].image}
      />
      <section className="section-y bg-white">
        <div className="container-pad">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <article className="premium-card image-zoom overflow-hidden">
                <img src={blogs[0].image} alt={blogs[0].title} className="h-[420px] w-full object-cover" />
                <div className="p-8">
                  <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold">Featured article</p>
                  <h2 className="mt-3 font-display text-4xl font-bold text-navy">{blogs[0].title}</h2>
                  <p className="mt-4 leading-8 text-muted">{blogs[0].summary}</p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[8px] bg-mist p-6">
                <SectionHeader align="left" eyebrow="Search & filter" title="Browse latest insights" />
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <input aria-label="Search news" placeholder="Search articles" className="rounded-[8px] border border-black/10 px-4 py-3 outline-none focus:border-gold" />
                  <select aria-label="Filter category" className="rounded-[8px] border border-black/10 px-4 py-3 outline-none focus:border-gold">
                    <option>All categories</option>
                    <option>Dholera Insights</option>
                    <option>Buyer Guide</option>
                    <option>Due Diligence</option>
                  </select>
                </div>
                <div className="mt-8 grid gap-4">
                  {blogs.slice(1).map((post) => (
                    <div key={post.title} className="rounded-[8px] bg-white p-5 shadow-soft">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">{post.category}</p>
                      <h3 className="mt-2 font-display text-2xl font-bold text-navy">{post.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {blogs.slice(0, 3).map((post, index) => (
              <Reveal key={post.title} delay={index * 0.05}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default NewsEvents;
