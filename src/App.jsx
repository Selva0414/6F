import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams
} from "react-router-dom";
import { courses, navLinks, technologyCards } from "./data/siteData";

const revealUp = {
  hidden: { opacity: 0, y: 34, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut" }
  }
};

function Reveal({ children, className = "" }) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function EnquiryPopup({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  return (
    <div
      className="enquiry-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      onClick={onClose}
    >
      <motion.div
        className="enquiry-modal-card"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="enquiry-modal-close" onClick={onClose} aria-label="Close enquiry form">
          Close
        </button>
        <span className="eyebrow">Quick Enquiry</span>
        <h2 id="enquiry-modal-title">Start Your Learning Journey</h2>
        <p className="muted">Share your details and our team will help you choose the right technology track.</p>

        <form
          className="form-grid"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <label>Full Name<input required /></label>
          <label>Phone Number<input required type="tel" /></label>
          <label className="full-span">Preferred Course
            <select defaultValue="AWS & Cloud Computing">
              {courses.map((course) => <option key={course.slug}>{course.title}</option>)}
            </select>
          </label>
          <button className="btn btn-accent" type="submit">Submit Enquiry</button>
          {submitted && <p className="muted full-span">Thanks. Your enquiry is captured in this demo UI.</p>}
        </form>
      </motion.div>
    </div>
  );
}

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(true);
  const location = useLocation();

  return (
    <>
      <div className="bg-glow bg-glow-1" aria-hidden="true" />
      <div className="bg-glow bg-glow-2" aria-hidden="true" />
      <header className="site-header">
        <div className="container nav-wrap">
          <Link className="brand" to="/" aria-label="6F IT School home">
            <span className="brand-logo">6F</span>
            <span className="brand-mark">6F IT School</span>
          </Link>
          <button
            className="menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
          <ul id="mobile-nav" className={`nav-list ${open ? "open" : ""}`}>
            {navLinks.map((item) => (
              <li key={item.to}>
                <NavLink className="nav-link" to={item.to} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link className="btn btn-accent" to="/enquiry" onClick={() => setOpen(false)}>
                Enquire Now
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <EnquiryPopup open={showEnquiryPopup} onClose={() => setShowEnquiryPopup(false)} />

      <main key={location.pathname}>{children}</main>

      <footer className="footer">
        <div className="container footer-grid">
          <section>
            <h3>6F IT School</h3>
            <p className="muted">
              Technology-focused training in AWS, DevOps, Agentic AI and software development with practical project learning.
            </p>
          </section>
          <section>
            <h4>Quick Links</h4>
            <p><Link to="/courses">All Courses</Link></p>
            <p><Link to="/technologies">Technology Stack</Link></p>
            <p><Link to="/enquiry">Apply / Enquire</Link></p>
            <p><Link to="/faq">FAQ</Link></p>
          </section>
          <section>
            <h4>Legal</h4>
            <p><Link to="/privacy">Privacy Policy</Link></p>
            <p><Link to="/terms">Terms & Conditions</Link></p>
            <p><Link to="/contact">Contact Us</Link></p>
          </section>
        </div>
      </footer>
    </>
  );
}

function HeroPipeline() {
  const reduced = useReducedMotion();
  const stages = ["Code", "GitHub", "CI/CD", "Docker", "K8s", "AWS", "Monitor"];

  return (
    <div className="hero-visual">
      <h3>Animated DevOps Workflow</h3>
      <div className="pipeline-track">
        {stages.map((stage, index) => (
          <motion.div
            key={stage}
            className="stage"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1.02 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            {stage}
          </motion.div>
        ))}
      </div>
      {!reduced && (
        <motion.div
          className="runner"
          initial={{ x: "0%" }}
          animate={{ x: "620%" }}
          transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut", repeatType: "reverse" }}
        />
      )}
      <p className="muted">Tap any course section to explore practical learning paths.</p>
    </div>
  );
}

function HomePage() {
  const journey = [
    "Explore Technologies",
    "Learn Fundamentals",
    "Practise in Labs",
    "Build Projects",
    "Develop a Portfolio",
    "Prepare for Interviews"
  ];

  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <Reveal>
            <span className="eyebrow">Technology Training Platform</span>
            <h1>Learn Future-Ready Technologies. Build Real-World Skills.</h1>
            <p className="section-copy">
              Explore AWS, DevOps, Agentic AI and modern software technologies through structured learning, practical projects and guided training at 6F IT School.
            </p>
            <div className="hero-metrics" aria-label="Training highlights">
              <div className="metric-chip">
                <strong>Project-Driven</strong>
                <span>Labs + real implementations</span>
              </div>
              <div className="metric-chip">
                <strong>Career Focused</strong>
                <span>Portfolio and interview readiness</span>
              </div>
              <div className="metric-chip">
                <strong>Modern Stack</strong>
                <span>AWS, DevOps, AI, Full Stack</span>
              </div>
            </div>
            <div className="btn-group">
              <Link className="btn btn-primary" to="/courses">Explore Courses</Link>
              <Link className="btn btn-accent" to="/enquiry">Enquire Now</Link>
            </div>
          </Reveal>
          <Reveal>
            <HeroPipeline />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Course Categories</span>
            <h2 className="section-title">Build Your Path by Technology Domain</h2>
          </Reveal>
          <div className="grid grid-2">
            {courses.map((course) => (
              <Reveal key={course.slug}>
                <motion.article
                  className="card"
                  whileHover={{ y: -7, rotateX: 5, rotateY: -3, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                >
                  <h3>{course.title}</h3>
                  <p className="muted">{course.overview}</p>
                  <div className="tags">
                    {course.tech.slice(0, 4).map((item) => <span className="tag" key={item}>{item}</span>)}
                  </div>
                  <p className="btn-group">
                    <Link className="btn btn-secondary" to={`/courses/${course.slug}`}>View Course</Link>
                    <Link className="btn btn-accent" to="/enquiry">Enquire Now</Link>
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Learning Journey</span>
            <h2 className="section-title">From Curiosity to Career-Ready Portfolio</h2>
          </Reveal>
          <div className="timeline">
            {journey.map((step, i) => (
              <Reveal key={step}>
                <motion.div className="timeline-step" whileHover={{ scale: 1.02 }}>
                  {i + 1}. {step}
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Technology Showcase</span>
            <h2 className="section-title">Interactive Technology Stack</h2>
          </Reveal>
          <div className="tech-grid">
            {technologyCards.map(([name, to], idx) => (
              <Reveal key={name}>
                <motion.article
                  className="tech-card"
                  whileHover={{ y: -8, scale: 1.02 }}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.02 }}
                >
                  <h3>{name}</h3>
                  <p className="desc">Hands-on learning path with project-driven outcomes.</p>
                  <Link to={to}>View syllabus</Link>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card cta-panel">
          <h2 className="section-title">Your Next Career Chapter Starts Here.</h2>
          <p className="section-copy">Explore our technology programs and discover the learning path that fits your goals.</p>
          <div className="btn-group">
            <Link className="btn btn-primary" to="/courses">Explore Courses</Link>
            <Link className="btn btn-accent" to="/enquiry">Enquire Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [level, setLevel] = useState("all");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return courses.filter((c) => {
      const text = `${c.title} ${c.overview} ${c.tech.join(" ")}`.toLowerCase();
      return text.includes(q) && (category === "all" || c.category === category) && (level === "all" || c.level === level);
    });
  }, [search, category, level]);

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">All Courses</span>
          <h1 className="section-title">Discover Approved Technology Programs</h1>
          <p className="section-copy">Use search and filters to find suitable courses. Publish fee and duration only after approval.</p>
        </Reveal>

        <div className="search-row card">
          <label>Search
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by technology or outcomes" />
          </label>
          <label>Category
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="all">All Categories</option>
              <option value="cloud">AWS & Cloud</option>
              <option value="devops">DevOps</option>
              <option value="ai">Agentic AI</option>
              <option value="fullstack">Full Stack</option>
            </select>
          </label>
          <label>Level
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
            </select>
          </label>
        </div>

        <div className="grid grid-2" style={{ marginTop: 16 }}>
          {filtered.map((course) => (
            <Reveal key={course.slug}>
              <article className="card">
                <h2>{course.title}</h2>
                <p className="muted">Level: {course.level}</p>
                <p>{course.overview}</p>
                <div className="tags">{course.tech.slice(0, 5).map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                <p className="btn-group">
                  <Link className="btn btn-secondary" to={`/courses/${course.slug}`}>View Syllabus</Link>
                  <Link className="btn btn-accent" to="/enquiry">Enquire Now</Link>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseDetailPage() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);
  const [openAll, setOpenAll] = useState(false);

  if (!course) return <Navigate to="/courses" replace />;

  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <Reveal>
            <span className="eyebrow">Course Hero</span>
            <h1>{course.title}</h1>
            <p className="section-copy">{course.overview}</p>
            <div className="btn-group">
              <Link className="btn btn-accent" to="/enquiry">Enquire Now</Link>
              <a className="btn btn-secondary" href="#syllabus">View Syllabus</a>
            </div>
          </Reveal>
          <Reveal className="card">
            <h3>Course Snapshot</h3>
            <p><strong>Level:</strong> {course.level}</p>
            <p><strong>Modules:</strong> {course.modules.length}</p>
            <p><strong>Delivery:</strong> Instructor-led practical training</p>
            <div className="tags">{course.tech.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          {course.outcomes.map((item) => (
            <Reveal key={item}><article className="card"><h3>Learning Outcome</h3><p>{item}</p></article></Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <Reveal><article className="card"><h3>Who Should Enrol</h3><p>{course.who}</p></article></Reveal>
          <Reveal><article className="card"><h3>Prerequisites</h3><p>{course.prerequisites}</p></article></Reveal>
        </div>
      </section>

      <section id="syllabus" className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Complete Syllabus</span>
            <h2 className="section-title">Module-Wise Learning Plan</h2>
            <div className="accordion-controls">
              <button className="btn btn-secondary" onClick={() => setOpenAll(true)}>Expand All</button>
              <button className="btn btn-secondary" onClick={() => setOpenAll(false)}>Collapse All</button>
            </div>
          </Reveal>
          <div>
            {course.modules.map((module, index) => (
              <details className="accordion-item" key={module.title} open={openAll ? true : undefined}>
                <summary className="accordion-trigger">Module {index + 1}: {module.title}</summary>
                <div className="accordion-panel panel-open">
                  <ul>
                    {module.topics.map((topic) => <li key={topic}>{topic}</li>)}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <h2 className="section-title">Course Enquiry</h2>
          <p className="section-copy">Share your goals and the team can suggest the most suitable learning track.</p>
          <Link className="btn btn-accent" to="/enquiry">Open Enquiry Form</Link>
        </div>
      </section>
    </>
  );
}

function TechnologiesPage() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Technology Stack</span>
          <h1 className="section-title">Interactive Technology Architecture</h1>
        </Reveal>
        <Reveal className="card">
          <h2>AWS Request Flow Visual</h2>
          <div className="arch-diagram">
            {[
              "User",
              "Load Balancer",
              "Application",
              "Database"
            ].map((n) => <div className="arch-node" key={n}>{n}</div>)}
          </div>
        </Reveal>
        <div className="tech-grid" style={{ marginTop: 22 }}>
          {technologyCards.map(([name, to]) => (
            <motion.article key={name} className="tech-card" whileHover={{ y: -6, scale: 1.01 }}>
              <h3>{name}</h3>
              <p className="desc">Mapped to approved syllabus tracks.</p>
              <Link to={to}>View Syllabus</Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SimpleContentPage({ title, intro, cards = [], cta }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <h1 className="section-title">{title}</h1>
          <p className="section-copy">{intro}</p>
        </Reveal>
        {cards.length > 0 && (
          <div className="grid grid-3">
            {cards.map((card) => (
              <Reveal key={card.title}><article className="card"><h3>{card.title}</h3><p className="muted">{card.text}</p></article></Reveal>
            ))}
          </div>
        )}
        {cta && (
          <section className="section">
            <div className="card">
              <h2>{cta.title}</h2>
              <p className="muted">{cta.text}</p>
              <Link className="btn btn-accent" to={cta.to}>{cta.label}</Link>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

function EnquiryPage() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Enquire / Apply</span>
          <h1 className="section-title">Start Your Learning Conversation</h1>
        </Reveal>
        <Reveal className="card">
          <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
            <label>Full Name<input required /></label>
            <label>Phone Number<input required type="tel" /></label>
            <label>Email Address<input required type="email" /></label>
            <label>Preferred Course<select>{courses.map((c) => <option key={c.slug}>{c.title}</option>)}</select></label>
            <label className="full-span">Career Goal<textarea placeholder="Tell us your goals." /></label>
            <button type="submit" className="btn btn-primary">Submit Enquiry</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function FaqPage() {
  const faqs = [
    ["How do I choose a course?", "Use course filters and submit an enquiry for counselling."],
    ["Are fees and duration final?", "Publish these only after internal confirmation."],
    ["Are projects included?", "Yes, all main tracks include practical projects."],
    ["Can I view syllabus first?", "Yes, each course page includes full module details."]
  ];

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Frequently Asked Questions</h1>
        {faqs.map(([q, a]) => (
          <details key={q} className="accordion-item">
            <summary className="accordion-trigger">{q}</summary>
            <div className="accordion-panel panel-open"><p>{a}</p></div>
          </details>
        ))}
      </div>
    </section>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetailPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route
            path="/success"
            element={<SimpleContentPage title="Student Success Stories" intro="Publish only verified student outcomes with permission-based details." cards={[{ title: "Story Slot 1", text: "Approved profile placeholder." }, { title: "Story Slot 2", text: "Approved profile placeholder." }, { title: "Story Slot 3", text: "Approved profile placeholder." }]} cta={{ title: "Share Your Progress", text: "Talk to the team to feature approved learning milestones.", to: "/enquiry", label: "Enquire Now" }} />}
          />
          <Route
            path="/testimonials"
            element={<SimpleContentPage title="Student Video Testimonials" intro="Embed approved testimonial videos to build trust with future learners." cards={[{ title: "Video Slot A", text: "Awaiting approved video link" }, { title: "Video Slot B", text: "Awaiting approved video link" }, { title: "Video Slot C", text: "Awaiting approved video link" }]} cta={{ title: "Need Course Guidance?", text: "Contact the team for personalized counselling.", to: "/contact", label: "Contact Us" }} />}
          />
          <Route
            path="/projects"
            element={<SimpleContentPage title="Student Projects" intro="Project-based outcomes from cloud, DevOps, AI and software programs." cards={[{ title: "Cloud Deployment Project", text: "Scalable hosting and secure network setup." }, { title: "CI/CD Delivery Project", text: "Automated test and deploy workflows." }, { title: "AI Assistant Project", text: "Retrieval-enabled assistant with controlled actions." }]} cta={{ title: "Build Your Own Project", text: "Join a track that matches your goals.", to: "/courses", label: "Explore Courses" }} />}
          />
          <Route
            path="/about"
            element={<SimpleContentPage title="About 6F IT School" intro="Technology learning focused on practical outcomes, structured support and project confidence." cards={[{ title: "Mission", text: "Build job-relevant technical capabilities." }, { title: "Approach", text: "Fundamentals, labs and practical delivery." }, { title: "Support", text: "Mentor checkpoints and project feedback." }]} cta={{ title: "Ready to Start?", text: "Explore available programs.", to: "/courses", label: "View Courses" }} />}
          />
          <Route
            path="/contact"
            element={<SimpleContentPage title="Contact Us" intro="Connect with the 6F team for course planning, counselling and admissions support." cta={{ title: "Quick Enquiry", text: "Share your goals and preferred course path.", to: "/enquiry", label: "Enquire Now" }} />}
          />
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route
            path="/privacy"
            element={<SimpleContentPage title="Privacy Policy" intro="Draft page: replace with legal-approved policy before production release." />}
          />
          <Route
            path="/terms"
            element={<SimpleContentPage title="Terms and Conditions" intro="Draft page: replace with legal-approved terms before production release." />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}
