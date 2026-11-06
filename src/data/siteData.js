export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/technologies", label: "Technologies" },
  { to: "/success", label: "Student Success" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" }
];

export const courses = [
  {
    slug: "aws-cloud-computing",
    title: "AWS & Cloud Computing",
    category: "cloud",
    level: "beginner",
    overview:
      "Learn cloud fundamentals, core AWS services, secure networking and practical application deployment patterns.",
    tech: ["AWS IAM", "EC2", "S3", "VPC", "Lambda", "RDS", "CloudWatch", "AWS CLI"],
    who: "Aspiring cloud engineers, developers and operations learners.",
    prerequisites: "Basic computer usage and interest in cloud technologies.",
    outcomes: [
      "Understand cloud models and AWS global infrastructure",
      "Deploy applications on core AWS services",
      "Apply basic cloud security and monitoring practices",
      "Document architecture and deployment decisions"
    ],
    modules: [
      { title: "Cloud Computing Fundamentals", topics: ["Cloud concepts", "Public/private/hybrid cloud", "IaaS/PaaS/SaaS", "Deployment models"] },
      { title: "AWS Fundamentals", topics: ["AWS account and console", "Regions and AZ", "IAM users, roles and policies", "Security basics"] },
      { title: "Compute Services", topics: ["EC2 instance setup", "Security groups", "Key pairs", "Application deployment"] },
      { title: "Storage Services", topics: ["S3 buckets and objects", "Permissions", "Storage classes", "Static hosting fundamentals"] },
      { title: "Networking", topics: ["VPC", "Subnets", "Route tables", "Internet gateways"] },
      { title: "Databases and Serverless", topics: ["RDS fundamentals", "Connectivity", "Lambda basics", "Event-driven concepts"] },
      { title: "Deployment and Monitoring", topics: ["Load balancing", "CloudWatch", "Logs and metrics", "Troubleshooting"] },
      { title: "Practical Project", topics: ["Deploy a sample app", "Security documentation", "Testing and validation"] }
    ]
  },
  {
    slug: "devops-engineering",
    title: "DevOps Engineering",
    category: "devops",
    level: "beginner",
    overview:
      "Master automation and delivery workflows connecting development, testing, deployment and operations.",
    tech: ["Linux", "GitHub", "Jenkins", "GitHub Actions", "Docker", "Kubernetes", "Terraform", "Ansible", "Prometheus", "Grafana"],
    who: "Students and professionals targeting DevOps and platform roles.",
    prerequisites: "Basic programming familiarity is helpful.",
    outcomes: [
      "Set up CI/CD pipelines",
      "Containerize and orchestrate applications",
      "Provision infrastructure as code",
      "Monitor system health with dashboards and alerts"
    ],
    modules: [
      { title: "Linux Fundamentals", topics: ["Commands", "Permissions", "Processes", "Shell scripting"] },
      { title: "Git and GitHub", topics: ["Version control", "Branching", "Pull requests", "Collaboration"] },
      { title: "CI/CD Fundamentals", topics: ["Pipeline concepts", "Jenkins basics", "GitHub Actions", "Automated checks"] },
      { title: "Docker", topics: ["Images and containers", "Dockerfiles", "Compose", "Networking"] },
      { title: "Kubernetes", topics: ["Pods and deployments", "Services", "ConfigMaps and secrets", "Scaling"] },
      { title: "AWS Integration", topics: ["Deployment on AWS", "IAM basics", "Networking", "Monitoring"] },
      { title: "Infrastructure as Code", topics: ["Terraform", "State concepts", "Variables", "Ansible fundamentals"] },
      { title: "Monitoring and Observability", topics: ["Prometheus", "Grafana", "Metrics", "Alerts"] },
      { title: "Capstone Project", topics: ["GitHub repo", "CI/CD", "Container deployment", "Monitoring and documentation"] }
    ]
  },
  {
    slug: "agentic-ai-automation",
    title: "Agentic AI & AI Automation",
    category: "ai",
    level: "intermediate",
    overview:
      "Build practical AI systems with LLM integration, retrieval, tool-calling and safe workflow orchestration.",
    tech: ["Python", "LLM APIs", "Prompt Engineering", "Structured Outputs", "RAG", "Embeddings", "Vector DB", "LangChain/LangGraph"],
    who: "Developers and learners building AI-powered business workflows.",
    prerequisites: "Basic Python and API familiarity.",
    outcomes: [
      "Integrate LLM APIs with robust error handling",
      "Design tool-using multi-step agents",
      "Implement retrieval-augmented generation",
      "Evaluate and monitor AI output quality"
    ],
    modules: [
      { title: "Python Fundamentals", topics: ["Syntax", "Data structures", "Functions", "API handling"] },
      { title: "Generative AI Fundamentals", topics: ["LLM concepts", "Prompting", "Limitations", "Responsible AI"] },
      { title: "LLM API Integration", topics: ["Authentication", "Requests", "Structured responses", "Rate limits"] },
      { title: "AI Tools and Agents", topics: ["Tool calling", "State", "Human approval", "Error handling"] },
      { title: "RAG and Knowledge Systems", topics: ["Ingestion", "Chunking", "Embeddings", "Vector search"] },
      { title: "AI Frameworks", topics: ["LangChain/LangGraph basics", "Workflow building", "Testing"] },
      { title: "Deployment and Evaluation", topics: ["Logging", "Monitoring", "Quality checks", "Cost optimization"] },
      { title: "Practical Project", topics: ["Assistant or workflow agent", "Access control", "Human oversight"] }
    ]
  },
  {
    slug: "full-stack-development",
    title: "Full Stack Development",
    category: "fullstack",
    level: "beginner",
    overview:
      "Build production-ready web applications across frontend, backend and data layers.",
    tech: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Node.js", "Express", "PostgreSQL/MongoDB"],
    who: "Learners preparing for software development roles.",
    prerequisites: "Basic logical problem solving.",
    outcomes: [
      "Build responsive frontend interfaces",
      "Create secure backend APIs",
      "Integrate databases with application logic",
      "Deploy and monitor web applications"
    ],
    modules: [
      { title: "Web Fundamentals", topics: ["HTML", "CSS", "Responsive layouts", "JavaScript basics"] },
      { title: "Frontend Development", topics: ["React components", "State", "Hooks", "API integration"] },
      { title: "Backend Development", topics: ["Node", "Express", "Routing", "Middleware"] },
      { title: "Databases", topics: ["Schema basics", "Queries", "Integration"] },
      { title: "Authentication and Security", topics: ["Auth workflows", "Access control", "Validation"] },
      { title: "Deployment", topics: ["Env config", "Hosting", "Basic monitoring"] },
      { title: "Final Project", topics: ["End-to-end app build", "Deployment", "Documentation"] }
    ]
  }
];

export const technologyCards = [
  ["AWS", "/courses/aws-cloud-computing"],
  ["Linux", "/courses/devops-engineering"],
  ["GitHub", "/courses/devops-engineering"],
  ["Jenkins", "/courses/devops-engineering"],
  ["Docker", "/courses/devops-engineering"],
  ["Kubernetes", "/courses/devops-engineering"],
  ["Terraform", "/courses/devops-engineering"],
  ["Ansible", "/courses/devops-engineering"],
  ["Prometheus", "/courses/devops-engineering"],
  ["Grafana", "/courses/devops-engineering"],
  ["Python", "/courses/agentic-ai-automation"],
  ["React", "/courses/full-stack-development"],
  ["Node.js", "/courses/full-stack-development"],
  ["LLM APIs", "/courses/agentic-ai-automation"],
  ["Vector Databases", "/courses/agentic-ai-automation"]
];
