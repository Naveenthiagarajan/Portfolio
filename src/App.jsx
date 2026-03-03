import { useRef, useState, useEffect } from 'react'
import './App.css'
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaAws,
  FaCode,
  FaRocket,
  FaDownload,
} from 'react-icons/fa'
import { SiSpringboot, SiMysql } from 'react-icons/si'
import { TbCloudComputing } from 'react-icons/tb'
import profileImage from '../Images/Naveen.jpg'
import resumePdf from '../Naveen_Resume.pdf'

function App() {
  const formRef = useRef(null)
  const [isSending, setIsSending] = useState(false)
  const [formStatus, setFormStatus] = useState({ type: 'idle', message: '' })
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [typedText, setTypedText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  const words = ['Frontend Developer', 'React Developer', 'DSA Enthusiast', 'Cloud Learner']

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

  // Mouse tracking for parallax effects
  useEffect(() => {
    const isFinePointer = window.matchMedia?.('(pointer: fine)').matches
    if (!isFinePointer) return

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Typing animation
  useEffect(() => {
    const currentWord = words[currentWordIndex]
    let timeout
    let charIndex = 0

    const type = () => {
      if (charIndex < currentWord.length) {
        setTypedText(currentWord.substring(0, charIndex + 1))
        charIndex++
        timeout = setTimeout(type, 100)
      } else {
        timeout = setTimeout(() => {
          setTypedText('')
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }, 2000)
      }
    }

    type()
    return () => clearTimeout(timeout)
  }, [currentWordIndex])

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
      icon: <FaCode />,
      label: 'LeetCode',
      value: '200+ problems solved',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Madurai-19, India',
    },
  ]

  const education = [
    {
      degree: 'B.E. in Computer Science Engineering',
      institution: 'Sri Krishna College of Technology · Coimbatore, India',
      details: 'CGPA: 7.75 (up to 5th semester)',
      timeline: '2023 — 2027',
    },
  ]

  const skills = [
    {
      category: 'Frontend',
      items: ['HTML', 'CSS', 'React.js', 'JavaScript', 'Bootstrap', 'jQuery'],
    },
    {
      category: 'Programming Languages',
      items: ['Java', 'C', 'C++', 'Python', 'JavaScript', 'SQL'],
    },
    {
      category: 'Backend',
      items: ['Spring Boot', 'REST APIs', 'Swagger'],
    },
    {
      category: 'Testing & Automation',
      items: ['Selenium WebDriver', 'JUnit', 'TestNG', 'Postman (API Testing)', 'Manual Testing'],
    },
    {
      category: 'Database',
      items: ['MySQL'],
    },
    {
      category: 'Core Concepts',
      items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'RESTful APIs', 'SDLC'],
    },
    {
      category: 'Problem Solving',
      items: ['200+ LeetCode problems (Arrays, Linked Lists, Trees, Graphs, DP)'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Docker', 'CI/CD'],
    },
    {
      category: 'Version Control & Collaboration',
      items: ['Git', 'GitHub'],
    },
    {
      category: 'Data Analysis & Visualization',
      items: ['Pandas', 'NumPy', 'Matplotlib', 'EDA', 'Power BI'],
    },
    {
      category: 'AI & Developer Tools',
      items: ['Prompt-based debugging, refactoring, and test-case generation workflows'],
    },
  ]

  const projects = [
    {
      title: 'Construction Management Web Application',
      type: 'Personal Project · Responsive Web App',
      description: 'Responsive construction management web app to streamline data entry and workflow handling.',
      highlights: [
        'Implemented dynamic forms and interactive UI components using JavaScript and jQuery.',
        'Ensured cross-device and cross-browser compatibility with responsive design.',
        'Improved usability and performance by optimizing DOM interactions.',
      ],
      technologies: [
        { label: 'Frontend', value: 'HTML, CSS (Flexbox, Media Queries), JavaScript, jQuery' },
      ],
    },
    {
      title: 'Mobile App Landing Page',
      type: 'Frontend Project · Responsive UI',
      description: 'Responsive landing page with modern sections and clean visual hierarchy.',
      highlights: [
        'Built navigation, hero, feature cards, and call-to-action sections.',
        'Used Bootstrap grid + Flexbox + media queries for responsiveness.',
        'Deployed on Netlify for live hosting.',
      ],
      technologies: [
        { label: 'Frontend', value: 'HTML, CSS, Bootstrap, JavaScript' },
      ],
      links: [{ label: 'Live Demo', href: 'https://mobileappbynaveen.netlify.app' }],
    },
    {
      title: 'Personal Developer Portfolio',
      type: 'Frontend Project · React',
      description: 'Modern responsive portfolio built with React and Vite to showcase projects and skills.',
      highlights: [
        'Added typing animation and scroll-based section reveal using Intersection Observer.',
        'Built reusable UI blocks and rendered data dynamically using React hooks.',
        'Integrated a contact form using Formspree for message submission.',
      ],
      technologies: [{ label: 'Frontend', value: 'React, JavaScript, HTML, CSS, Vite' }],
    },
    {
      title: 'Job Portal REST API',
      type: 'Personal Project · Backend + Auth',
      description: 'Backend system for a job portal with recruiter/job flows and candidate applications.',
      highlights: [
        'Designed REST APIs for job management, authentication, and application tracking.',
        'Implemented JWT authentication with role-based access control.',
        'Optimized MySQL queries with pagination and sorting support.',
      ],
      technologies: [
        { label: 'Backend', value: 'Java, Spring Boot, REST APIs, JWT' },
        { label: 'Database', value: 'MySQL' },
        { label: 'Frontend', value: 'React' },
      ],
    },
    {
      title: 'CodeJudge',
      type: 'Personal Project · Coding Platform',
      description: 'LeetCode-like platform for solving problems and submitting solutions.',
      highlights: [
        'Built REST APIs for problems, submissions, and authentication.',
        'Implemented backend execution flow to validate code against multiple test cases.',
        'Designed MySQL schema for users, problems, submissions, and leaderboards.',
      ],
      technologies: [
        { label: 'Backend', value: 'Java, Spring Boot, REST APIs, JWT' },
        { label: 'Database', value: 'MySQL' },
        { label: 'Frontend', value: 'React, HTML' },
      ],
    },
    {
      title: 'Spam Message Classification (ML)',
      type: 'Personal Project · Machine Learning',
      description: 'ML model to classify SMS messages as spam or ham (not spam).',
      highlights: [
        'Performed text preprocessing and feature extraction (TF-IDF).',
        'Trained models like Naive Bayes and Logistic Regression.',
        'Evaluated results with accuracy, confusion matrix, and precision-recall metrics.',
      ],
      technologies: [{ label: 'Stack', value: 'Python, Pandas, NumPy, Scikit-learn, Matplotlib' }],
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
    'Solved 200+ problems on LeetCode covering Arrays, Linked Lists, Trees, Graphs, and Dynamic Programming.',
    'Hands-on experience building responsive UIs, integrating REST APIs, and collaborating with Git & GitHub in agile teams.',
  ]

  const quickStats = [
    {
      icon: <FaCode />,
      label: '200+ LeetCode',
      detail: 'Consistent problem-solving with strong DSA fundamentals.',
    },
    {
      icon: <FaRocket />,
      label: '6+ Projects',
      detail: 'Frontend, backend APIs, and ML projects shipped end-to-end.',
    },
    {
      icon: <SiSpringboot />,
      label: 'Internships',
      detail: 'Interned in development + testing roles (2025–2026).',
    },
    { icon: <FaAws />, label: 'Cloud & DevOps', detail: 'AWS, Docker, and CI/CD fundamentals.' },
  ]

  const workExperience = [
    {
      role: 'Software Developer Intern',
      company: 'Blue Pearl Technologies',
      location: 'Madurai, India',
      timeline: 'May 2025 — Jun 2025',
      stack: 'Java, Spring Boot, REST APIs, MySQL, React, Git, GitHub',
      bullets: [
        'Contributed to backend API development and database integration in an agile team.',
        'Developed RESTful APIs with Spring Boot to support business logic and data management.',
        'Collaborated with frontend developers to integrate backend services with responsive UI components.',
      ],
    },
    {
      role: 'Manual Software Testing Intern',
      company: 'TheKalki',
      location: 'Madurai, India',
      timeline: 'Dec 2025 — Jan 2026',
      stack: 'Manual Testing, Test Cases, Bug Reporting, SDLC, STLC, Selenium',
      bullets: [
        'Designed and executed test cases and scenarios based on functional requirements.',
        'Identified, reported, and tracked defects to closure with the development team.',
        'Performed functional, regression, and UI testing to validate usability and behavior.',
      ],
    },
  ]

  const workshops = [
    {
      title: 'Data Science Workshop',
      org: 'CDW',
      timeline: 'Oct 2025 — Nov 2025',
      bullets: [
        'Hands-on with data analysis using Pandas and NumPy.',
        'Performed Exploratory Data Analysis (EDA) and visualizations using Matplotlib.',
        'Learned Power BI basics for reporting and dashboards.',
      ],
    },
    {
      title: 'AWS Cloud Workshop',
      org: 'AWS SheTech',
      timeline: 'Jun 2025',
      bullets: [
        'Introduced to core AWS services (EC2, S3, IAM) and cloud fundamentals.',
        'Understood deployment models and security basics.',
        'Explored real-world use cases for scalable infrastructure.',
      ],
    },
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
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
        <div className="bg-shape bg-shape-4"></div>
      </div>

      {/* Custom Cursor Effect */}
      <div 
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
        }}
      ></div>

      <nav className="nav">
        <div className="nav__brand">
          <span className="brand-icon"><FaCode /></span>
          <span>Naveen T</span>
        </div>
        <div className="nav__links">
          <a href="#summary" className="nav-link">
            <span>About</span>
          </a>
          <a href="#skills" className="nav-link">
            <span>Skills</span>
          </a>
          <a href="#work-experience" className="nav-link">
            <span>Experience</span>
          </a>
          <a href="#projects" className="nav-link">
            <span>Projects</span>
          </a>
          <a href="#training" className="nav-link">
            <span>Training</span>
          </a>
          <a href="#experience" className="nav-link">
            <span>Highlights</span>
          </a>
          <a href="#contact" className="nav-link">
            <span>Contact</span>
          </a>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="hero__floating-elements">
          <div className="floating-icon floating-icon-1"><FaCode /></div>
          <div className="floating-icon floating-icon-2"><FaRocket /></div>
          <div className="floating-icon floating-icon-3"><TbCloudComputing /></div>
        </div>
        <div className="hero__main">
          <div className="hero__content">
            <div className="hero__badge-top">
              <span className="badge-dot"></span>
              <span>Pre-Final Year Computer Science Engineering Student</span>
            </div>
            <h1 className="hero__title">
              <span className="hero__title-greeting">
                Hi, I&apos;m <span className="hero__title-accent">Naveen</span>
              </span>
              <span className="hero__title-role">
                Aspiring <span className="typing-text">{typedText}</span>
                <span className="cursor-blink">|</span>
              </span>
              <span className="hero__title-focus">
                passionate about <strong>Web Development</strong> & <strong>Cloud</strong>.
              </span>
            </h1>
            <p className="hero__summary">
              Pre-final year student with strong problem-solving skills and hands-on experience in
              frontend development. I enjoy building clean, responsive UIs and integrating REST APIs
              to deliver great user experiences.
            </p>
            <div className="hero__cta">
              <a className="button button--primary" href="#projects">
                <span>View Projects</span>
                <FaRocket className="button-icon" />
              </a>
              <a
                className="button button--secondary"
                href="mailto:naveent1905@gmail.com"
              >
                <span>Let&apos;s Connect</span>
                <FaEnvelope className="button-icon" />
              </a>
              <a className="button button--secondary" href={resumePdf} download>
                <span>Download Resume</span>
                <FaDownload className="button-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="hero__aside">
          <div className="hero__image-wrapper">
            <div className="hero__image-glow"></div>
            <div className="hero__image">
              <img src={profileImage} alt="Naveen T" />
              <div className="image-overlay"></div>
            </div>
            <div className="hero__image-decoration"></div>
          </div>
          <div className="hero__badge">
            <div className="badge-icon"><FaRocket /></div>
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
          <h2>Summary</h2>
          <p>Focused on building responsive UI and reliable web software.</p>
        </div>
        <div className="section__content">
          <div className="summary-card">
            <p>
              Pre-final year Computer Science student with strong problem-solving skills and hands-on
              experience in frontend development. Proficient in JavaScript, React.js, HTML, and CSS
              for building responsive and interactive web applications. Experienced in integrating
              REST APIs with frontend interfaces and collaborating in agile teams using Git and
              GitHub. Passionate about creating clean UI, scalable web applications, and delivering
              great user experiences.
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
              <div className="skill-card__header">
                <h3>{skill.category}</h3>
                <div className="skill-card__progress-bar">
                  <div 
                    className="skill-card__progress-fill"
                    style={{
                      width: visibleSections.has(`skill-${index}`) ? '100%' : '0%',
                      transition: 'width 1s ease',
                    }}
                  ></div>
                </div>
              </div>
              <div className="skill-card__chips">
                {skill.items.map((item, itemIndex) => (
                  <span 
                    className="chip" 
                    key={item}
                    style={{
                      animationDelay: `${itemIndex * 0.05}s`,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="work-experience">
        <div className="section__title">
          <h2>Work Experience</h2>
          <p>Internships that strengthened my engineering and testing fundamentals.</p>
        </div>
        <div className="timeline">
          {workExperience.map((item) => (
            <div className="timeline__item" key={`${item.role}-${item.company}`}>
              <span className="timeline__dot" />
              <div className="timeline__content">
                <h3>{item.role}</h3>
                <p className="timeline__institution">
                  {item.company} · {item.location}
                </p>
                <p className="timeline__details">{item.stack}</p>
                <ul className="list list--tight">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <span className="timeline__time">{item.timeline}</span>
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
              <div className="project-card__inner">
                <div className="project-card__front">
                  <div className="project-card__number">0{index + 1}</div>
                  <h3>{project.title}</h3>
                  <p className="project-card__type">{project.type}</p>
                  <div className="project-card__flip-hint">
                    <span>Hover to explore</span>
                    <span className="flip-arrow">→</span>
                  </div>
                </div>
                <div className="project-card__back">
                  <p className="project-card__description">{project.description}</p>
                  <ul className="project-card__list">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>
                        <span className="list-icon">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="project-card__tech">
                    {project.technologies.map((tech) => (
                      <div key={tech.label} className="tech-item">
                        <span className="tech-label">{tech.label}</span>
                        <p>{tech.value}</p>
                      </div>
                    ))}
                  </div>
                  {project.links?.length ? (
                    <div className="project-card__links">
                      {project.links.map((link) => (
                        <a
                          className="chip chip--link"
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          key={link.href}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="training">
        <div className="section__title">
          <h2>Workshops & Training</h2>
          <p>Hands-on learning that expanded my cloud and data skills.</p>
        </div>
        <div className="section__content">
          <div className="timeline">
            {workshops.map((item) => (
              <div className="timeline__item" key={`${item.title}-${item.org}`}>
                <span className="timeline__dot" />
                <div className="timeline__content">
                  <h3>{item.title}</h3>
                  <p className="timeline__institution">{item.org}</p>
                  <ul className="list list--tight">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <span className="timeline__time">{item.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="achievements">
        <div className="section__title">
          <h2>Achievements</h2>
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
