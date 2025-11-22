import { useRef, useState, useEffect } from 'react'
import './App.css'
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaAws,
} from 'react-icons/fa'
import { SiSpringboot, SiMysql } from 'react-icons/si'
import { TbCloudComputing } from 'react-icons/tb'
import profileImage from '../Images/Naveen.jpg'

function App() {
  const formRef = useRef(null)
  const [isSending, setIsSending] = useState(false)
  const [formStatus, setFormStatus] = useState({ type: 'idle', message: '' })
  const [visibleSections, setVisibleSections] = useState(new Set())

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set([...prev, entry.target.id]))
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('section, .stat-card, .skill-card, .project-card')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const contactLinks = [
    {
      icon: <FaPhoneAlt />,
      label: 'Phone',
      value: '6382775512',
      href: 'tel:6382775512',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'naveent1905@gmail.com',
      href: 'mailto:naveent1905@gmail.com',
    },
    {
      icon: <FaLinkedinIn />,
      label: 'LinkedIn',
      value: 'naveen-thiagarajan',
      href: 'https://linkedin.com/in/naveen-thiagarajan-534b2821b/',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'Naveenthiagarajan',
      href: 'https://github.com/Naveenthiagarajan',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Madurai-19, India',
    },
  ]

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Sri Krishna College of Technology',
      details: 'CGPA: 7.79 / 10 (up to 4th semester)',
      timeline: '2023 — Present',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Jayaraj Nadar Higher Secondary School',
      details: 'Percentage: 91.8%',
    },
  ]

  const skills = [
    {
      category: 'Programming Languages',
      items: ['Java', 'C++', 'Python'],
    },
    {
      category: 'Web Development',
      items: ['React', 'HTML', 'CSS (Responsive Design)', 'JavaScript', 'jQuery'],
    },
    {
      category: 'Backend Development',
      items: ['Spring Boot', 'REST APIs', 'Swagger'],
    },
    {
      category: 'Databases',
      items: ['MySQL'],
    },
    {
      category: 'Data Engineering & Analytics',
      items: [
        'Snowflake',
        'Microsoft Fabric',
        'Power BI (Data Visualization)',
        'EDA (Exploratory Data Analysis)',
      ],
    },
    {
      category: 'Cloud & Tools',
      items: [
        'AWS (S3, Lambda basics, EC2, CloudFront, VPC)',
        'CI/CD Pipeline',
        'Git',
        'GitHub',
      ],
    },
    {
      category: 'Core CS Concepts',
      items: [
        'Data Structures & Algorithms (DSA)',
        'Object-Oriented Programming (OOP)',
        'REST APIs',
        'Software Development Lifecycle',
      ],
    },
  ]

  const projects = [
    {
      title: 'E-Commerce Admin Panel',
      type: 'Full Stack Application · College Project',
      description:
        'Full-stack web application for managing products, orders, and users with role-based access and a comprehensive admin dashboard.',
      highlights: [
        'Designed an intuitive admin dashboard for real-time product and order management.',
        'Implemented REST APIs with Spring Boot and documented workflows using Swagger for maintainability.',
        'Ensured reliable data persistence with MySQL and secure role-based access control.',
      ],
      technologies: [
        { label: 'Frontend', value: 'React (responsive UI, dynamic components)' },
        { label: 'Backend', value: 'Spring Boot (REST APIs), Swagger' },
        { label: 'Database', value: 'MySQL' },
      ],
    },
    {
      title: 'Construction Management Application',
      type: 'Responsive Web Application · Personal Project',
      description:
        'Responsive web platform enabling construction teams to manage dynamic forms, interactive UI elements, and cross-device collaboration.',
      highlights: [
        'Crafted mobile-first layouts with CSS flexbox and media queries for seamless device compatibility.',
        'Developed interactive UI components using vanilla JavaScript and jQuery.',
        'Streamlined form handling and status tracking for efficient project oversight.',
      ],
      technologies: [
        { label: 'Frontend', value: 'HTML, CSS (flexbox, media queries), JavaScript, jQuery' },
      ],
    },
  ]

  const softSkills = [
    'Teamwork',
    'Time Management',
    'Leadership',
    'Critical Thinking',
    'Effective Communication',
    'Problem Solving',
  ]

  const achievements = [
    'Selected for Smart India Hackathon at college level (internal hackathon), showcasing problem-solving and collaboration skills.',
    'Attended Data Engineering workshop conducted by CDW.',
  ]

  const quickStats = [
    {
      icon: <TbCloudComputing />,
      label: 'Cloud Enthusiast',
      detail: 'Hands-on with AWS services and CI/CD pipelines.',
    },
    {
      icon: <SiSpringboot />,
      label: 'Backend Developer',
      detail: 'Experienced in building RESTful APIs with Spring Boot.',
    },
    {
      icon: <SiMysql />,
      label: 'Database Design',
      detail: 'Comfortable modeling relational schemas in MySQL.',
    },
    { icon: <FaAws />, label: 'DevOps Mindset', detail: 'Understands deployment workflows and cloud tooling.' },
  ]

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formRef.current) return

    // Get Formspree endpoint from environment variable
    // Sign up at https://formspree.io to get your endpoint
    // Add VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID to your .env file
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID'

    if (formspreeEndpoint.includes('YOUR_FORM_ID')) {
      setFormStatus({
        type: 'error',
        message:
          'Please configure Formspree endpoint. Sign up at formspree.io and add VITE_FORMSPREE_ENDPOINT to your .env file.',
      })
      return
    }

    try {
      setIsSending(true)
      setFormStatus({ type: 'pending', message: 'Sending message...' })

      const formData = new FormData(formRef.current)
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Thanks for reaching out! I will get back to you shortly.',
        })
        formRef.current.reset()
      } else {
        const data = await response.json()
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message:
          'Oops! Something went wrong. Please try again in a moment or contact me directly via email.',
      })
      console.error('Form submission error:', error)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="portfolio">
      <nav className="nav">
        <div className="nav__brand">Naveen T</div>
        <div className="nav__links">
          <a href="#summary">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Highlights</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="hero__main">
          <div className="hero__content">
            <p className="hero__subtitle">Pre Final-Year Computer Science Student</p>
            <h1 className="hero__title">
              <span className="hero__title-greeting">
                Hi, I&apos;m <span className="hero__title-accent">Naveen</span>
              </span>
              <span className="hero__title-role">Aspiring Software Engineer</span>
              <span className="hero__title-focus">
                passionate about <strong>Web Development</strong> & <strong>Cloud</strong>.
              </span>
            </h1>
            <p className="hero__summary">
              I design engaging web products, wire up reliable backend services, and love working
              with teams that ship purposeful solutions.
            </p>
            <div className="hero__cta">
              <a className="button button--primary" href="#projects">
                View Projects
              </a>
              <a
                className="button button--secondary"
                href="mailto:naveent1905@gmail.com"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </div>
        <div className="hero__aside">
          <div className="hero__image">
            <img src={profileImage} alt="Naveen T" />
          </div>
          <div className="hero__badge">
            <p>Actively seeking internships & entry-level software development roles.</p>
            <span>Ready to collaborate on impactful projects.</span>
          </div>
        </div>
      </header>

      <section className="stats" id="experience">
        {quickStats.map((item, index) => (
          <div
            className={`stat-card ${visibleSections.has(`stat-${index}`) ? 'stat-card--visible' : ''}`}
            key={item.label}
            id={`stat-${index}`}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <span className="stat-card__icon">{item.icon}</span>
            <div>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="section" id="summary">
        <div className="section__title">
          <h2>Executive Summary</h2>
          <p>Continuous learner with a strong foundation in systems thinking and teamwork.</p>
        </div>
        <div className="section__content">
          <div className="summary-card">
            <p>
              I am a pre-final year Computer Science and Engineering student focused on building
              scalable web applications and cloud-native solutions. I am seeking opportunities to
              apply my technical skills through internships or entry-level engineering roles where I
              can contribute to real-world projects, master problem-solving, and grow alongside a
              collaborative team.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="education">
        <div className="section__title">
          <h2>Education</h2>
          <p>Academic journey that fuels my technical curiosity.</p>
        </div>
        <div className="timeline">
          {education.map((item) => (
            <div className="timeline__item" key={item.degree}>
              <span className="timeline__dot" />
              <div className="timeline__content">
                <h3>{item.degree}</h3>
                <p className="timeline__institution">{item.institution}</p>
                <p className="timeline__details">{item.details}</p>
                <span className="timeline__time">{item.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section__title">
          <h2>Technical Skills</h2>
          <p>Tools and concepts I leverage to deliver robust software.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className={`skill-card ${visibleSections.has(`skill-${index}`) ? 'skill-card--visible' : ''}`}
              key={skill.category}
              id={`skill-${index}`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <h3>{skill.category}</h3>
              <div className="skill-card__chips">
                {skill.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section__title">
          <h2>Projects</h2>
          <p>Selected work that showcases my full-stack capabilities.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card ${visibleSections.has(`project-${index}`) ? 'project-card--visible' : ''}`}
              key={project.title}
              id={`project-${index}`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div>
                <h3>{project.title}</h3>
                <p className="project-card__type">{project.type}</p>
                <p className="project-card__description">{project.description}</p>
                <ul className="project-card__list">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="project-card__tech">
                {project.technologies.map((tech) => (
                  <div key={tech.label}>
                    <span className="tech-label">{tech.label}</span>
                    <p>{tech.value}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="achievements">
        <div className="section__title">
          <h2>Achievements & Hackathons</h2>
        </div>
        <div className="section__content">
          <ul className="list">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="soft-skills">
        <div className="section__title">
          <h2>Soft Skills</h2>
        </div>
        <div className="section__content">
          <div className="skill-card skill-card--inline">
            {softSkills.map((skill) => (
              <span className="chip chip--accent" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="languages">
        <div className="section__title">
          <h2>Languages</h2>
        </div>
        <div className="section__content">
          <div className="skill-card skill-card--inline">
            <span className="chip">English</span>
            <span className="chip">Tamil</span>
          </div>
        </div>
      </section>

      <section className="section section--contact" id="contact">
        <div className="section__title">
          <h2>Let&apos;s Work Together</h2>
          <p>Open to internships, freelance collaborations, and entry-level opportunities.</p>
        </div>
        <div className="contact-layout">
          <div className="contact-grid">
            {contactLinks.map((link) => {
              const Wrapper = link.href ? 'a' : 'div'
              const wrapperProps = link.href
                ? {
                    href: link.href,
                    target: link.href.startsWith('http') ? '_blank' : undefined,
                    rel: link.href.startsWith('http') ? 'noreferrer' : undefined,
                  }
                : {}

              return (
                <Wrapper
                  className={`contact-card ${link.href ? 'contact-card--link' : ''}`}
                  key={link.label}
                  {...wrapperProps}
                >
                  <span className="contact-card__icon">{link.icon}</span>
                  <div>
                    <span className="contact-card__label">{link.label}</span>
                    <span className="contact-card__value">{link.value}</span>
                  </div>
                </Wrapper>
              )
            })}
          </div>

          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <h3>Send me a message</h3>
            <p className="contact-form__hint">
              Share a quick intro and how I can help. I&apos;ll respond via email.
            </p>
            <label className="contact-form__label">
              Your Name
              <input name="name" type="text" placeholder="abcd" required />
            </label>
            <label className="contact-form__label">
              Your Email
              <input
                name="email"
                type="email"
                placeholder="xyz@gmail.com"
                required
              />
            </label>
            <label className="contact-form__label">
              Message
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </label>
            <button
              className="button button--primary contact-form__submit"
              type="submit"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
            {formStatus.type !== 'idle' && (
              <p className={`contact-form__status contact-form__status--${formStatus.type}`}>
                {formStatus.message}
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Naveen T · Built with React & Vite</p>
      </footer>
    </div>
  )
}

export default App
