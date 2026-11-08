import {
  CleverCy_Github,
  CleverCy_Link,
  Floodium_Github,
  Floodium_Link,
  KantongKu_Github,
  KantongKu_Link,
  KopTrustAI_Github,
  KopTrustAI_Link,
  ResearchPaper_Github,
  ResearchPaper_Link,
  TaherAI_Github,
  TaherAI_Link,
  TimeSeriesForecasting_Github,
  TimeSeriesForecasting_Link
} from '../links';

export const hasLink = (url?: string): url is string => Boolean(url && url.trim());

export interface ContactInfo {
  phone: string;
  personalEmail: string;
  studentEmail: string;
  instagram: string;
  github: string;
  linkedin: string;
  address: string;
}

export interface Profile {
  name: string;
  headline: string;
  tagline: string;
  location: string;
  contact: ContactInfo;
  summary: string[];
  objective: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

export interface Experience {
  organization: string;
  role: string;
  category: 'leadership' | 'program' | 'recognition';
  note: string;
  location: string;
  startDate: string;
  endDate: string;
  duration: string;
  ddescription: string | string[];
}

export type ProjectCategoryId = 'nlp-llm' | 'computer-vision' | 'time-series' | 'leadership';

export const projectCategories: { id: ProjectCategoryId; label: string }[] = [
  { id: 'nlp-llm', label: 'NLP/LLM and Speech Recognition' },
  { id: 'computer-vision', label: 'Computer Vision' },
  { id: 'time-series', label: 'Time-Series Forecasting' },
  { id: 'leadership', label: 'Leadership and Business Modelling' }
];

export interface ProjectLinks {
  github?: string;
  pitchDeck?: string;
}

export interface Project {
  id: string;
  title: string;
  imageName: string;
  yearAccomplished: string;
  role: string;
  projectType: string;
  category: ProjectCategoryId;
  categoryLabel: string;
  description: string;
  keyResponsibilities: string[];
  results: string[];
  links: ProjectLinks;
  technologies: string[];
  highlightMetric?: {
    value: string;
    label: string;
  };
}

export interface Credential {
  id: string;
  name: string;
  issuer: string;
  issued: string;
  expires: string;
  credentialUrl: string;
  verificationCode: string;
}

export interface Skill {
  name: string;
  projects: string[];
}

export interface SkillCategory {
  key: string;
  label: string;
  items: Skill[];
}

export interface PortfolioData {
  profile: Profile;
  skills: Record<string, string[]>;
  skillCategories: SkillCategory[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  credentials: Credential[];
}

const COMPUTER_VISION = ["kantongku", "driver-drowsiness"];
const TIME_SERIES = ["floodium", "crypto-forecasting"];
const DATA_PROJECTS = [...COMPUTER_VISION, ...TIME_SERIES, "taherai", "koptrust-ai", "clevercy"];

export const portfolioData: PortfolioData = {
  profile: {
    name: "Muhammad Rafli Suherlan",
    headline: "Computer Science Undergraduate at BINUS specializing in AI, Machine Learning, and Deep Learning",
    tagline: "Computer Science Undergraduate at BINUS, Bridging Business Problems with Data and AI Solutions",
    location: "Central Jakarta, Jakarta, Indonesia",
    contact: {
      phone: "+62 813-1536-8518",
      personalEmail: "raflisuherlan593@gmail.com",
      studentEmail: "muhammad.suherlan@binus.ac.id",
      instagram: "@suherln._",
      github: "https://github.com/suherln",
      linkedin: "https://linkedin.com/in/suherlan/",
      address: "Jl. Bendungan Hilir No.124, RT.13/RW.6, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta"
    },
    summary: [
      "A driven, detail-oriented Computer Science undergraduate with a strong focus on Artificial Intelligence, Machine Learning, and data analysis. Experienced in data preprocessing, feature engineering, and developing intelligent systems that transform raw data into actionable insights. Combines a solid technical foundation with systems thinking to bridge business problems with data and AI solutions",
      "Experience includes cross-functional collaboration in event operations, administration, strategic planning, and data management. Comfortable coordinating diverse teams, engaging external stakeholders, and designing structured systems that improve efficiency and scalability. Has rebuilt processes into streamlined pipelines and sustainable workflows, supporting organizational growth through improved delivery, regulatory compliance, and interdepartmental collaboration",
      "Believes in aligning technical excellence with clear communication and shared goals. Naturally curious with a deep interest in understanding underlying systems and how they connect to real business needs. Open to meaningful collaborations in AI, machine learning, data analysis, and data-driven innovation to build impactful, sustainable solutions"
    ],
    objective:
      "Driven Computer Science undergraduate at BINUS Kemanggisan specializing in AI, Machine Learning and Deep Learning, seeking opportunities to build intelligent systems and data-driven solutions. Combines technical foundation with cross-functional leadership and systems thinking to drive measurable impact"
  },
  skillCategories: [
    {
      key: "machine_learning",
      label: "Machine Learning",
      items: [
        { name: "TensorFlow", projects: ["kantongku", "crypto-forecasting"] },
        { name: "Keras", projects: ["kantongku", "crypto-forecasting"] },
        { name: "Scikit-learn", projects: ["taherai"] },
        { name: "XGBoost", projects: ["floodium"] },
        { name: "Model Optimization", projects: ["driver-drowsiness", "taherai", "floodium"] }
      ]
    },
    {
      key: "deep_learning",
      label: "Deep Learning Architectures",
      items: [
        { name: "CNN", projects: COMPUTER_VISION },
        { name: "RNN", projects: TIME_SERIES },
        { name: "LSTM", projects: ["crypto-forecasting"] },
        { name: "Custom Neural Networks", projects: ["kantongku", "crypto-forecasting"] },
        { name: "ANN", projects: ["kantongku", "crypto-forecasting"] },
        { name: "Seq2Seq", projects: ["crypto-forecasting"] },
        { name: "Multi-Head Attention", projects: ["crypto-forecasting"] },
        { name: "YOLOv8n Pose", projects: ["driver-drowsiness"] }
      ]
    },
    {
      key: "computer_vision",
      label: "Computer Vision",
      items: [
        { name: "OCR", projects: ["kantongku"] },
        { name: "Pose Estimation", projects: ["driver-drowsiness"] },
        { name: "Edge AI", projects: ["driver-drowsiness"] }
      ]
    },
    {
      key: "nlp_llm",
      label: "NLP/LLM and Speech Recognition",
      items: [
        { name: "Natural Language Processing", projects: ["taherai"] },
        { name: "Logistic Regression", projects: ["taherai"] },
        { name: "TF-IDF", projects: ["taherai"] },
        { name: "RAG", projects: ["koptrust-ai"] },
        { name: "Agentic AI", projects: ["koptrust-ai"] },
        { name: "Speech Transcription", projects: ["koptrust-ai"] }
      ]
    },
    {
      key: "backend_systems",
      label: "Backend and Systems",
      items: [
        { name: "Python", projects: ["kantongku", "floodium", "taherai", "driver-drowsiness", "crypto-forecasting"] },
        { name: "FastAPI", projects: ["kantongku"] },
        { name: "Flask", projects: [] },
        { name: "Docker", projects: ["kantongku"] },
        { name: "Hugging Face Spaces", projects: ["kantongku"] }
      ]
    },
    {
      key: "data_feature_engineering",
      label: "Data and Feature Engineering",
      items: [
        { name: "Pandas", projects: DATA_PROJECTS },
        { name: "NumPy", projects: DATA_PROJECTS },
        { name: "EDA", projects: DATA_PROJECTS },
        { name: "Feature Engineering", projects: DATA_PROJECTS },
        { name: "Time-Series Analysis", projects: TIME_SERIES }
      ]
    },
    {
      key: "leadership_business",
      label: "Leadership and Business Modelling",
      items: [
        { name: "Team Management", projects: ["floodium", "taherai", "youth-career-compass", "global-talent"] },
        { name: "Project Management", projects: ["floodium", "taherai", "driver-drowsiness", "youth-career-compass", "global-talent"] },
        { name: "Stakeholder Management", projects: ["youth-career-compass", "global-talent"] },
        { name: "Strategic Planning", projects: ["youth-career-compass", "clevercy"] },
        { name: "Business Modelling", projects: ["clevercy"] },
        { name: "Agile Workflow", projects: [] }
      ]
    },
    {
      key: "problem_solving_languages",
      label: "Problem Solving and Languages",
      items: [
        { name: "Algorithm Optimization", projects: [] },
        { name: "Debugging", projects: [] },
        { name: "Public Speaking", projects: [] },
        { name: "English (Professional)", projects: [] },
        { name: "Indonesian (Native)", projects: [] }
      ]
    }
  ],
  skills: {
    backend_web_development: ["Python", "FastAPI", "Flask"],
    cross_team_collaboration: ["Agile Workflow"],
    leadership: ["Team Management", "Project Management"],
    intelligent_system_engineering: ["Scikit-learn", "Keras", "TensorFlow"],
    deep_learning: ["CNN", "RNN", "Custom Neural Networks", "ANN"],
    problem_solving: ["Algorithm Optimization", "Debugging"],
    public_speaking: ["English", "Indonesian"],
    stakeholder_management: ["Communication", "Expectation Setting"],
    data_preprocessing_and_analysis: ["Pandas", "NumPy", "EDA"],
    event_management: ["Operations", "Planning"]
  },
  education: [
    {
      institution: "BINUS University",
      degree: "Bachelor of Computer Science",
      field: "Computer Science",
      location: "Jakarta, Indonesia",
      startDate: "September 2024",
      endDate: "June 2028 (Expected)",
      gpa: "3.22 / 4.00"
    }
  ],
  experience: [
    {
      organization: "Kementrian Kooperasi",
      role: "Top 100 teams across Indonesia",
      category: "recognition",
      note: "Hackathon Digital Cooperatives Expo 2026",
      location: "Jakarta, Indonesia",
      startDate: "July 2025",
      endDate: "July 2025",
      duration: "1 day",
      description: [
        "Addressed core accessibility and attention problems through EDA, identifying a critical 24% vs. 76% gap in account ownership across 71,270 members nationwide",
        "Designed for UU PDP compliance and alignment with 4 regulations (Inpres 9/2025, SE Menkop 1/2015, UU 11/2020, draft RUU Perkoperasian).",
        "Architected a dual-agent framework (Text + Voice) to deliver accessible, multimodal user support.",
        "Created an integrated super app bridging the digital divide for elderly cooperative members",
        "Implemented zero hallucination RAG for strict statutory cooperative balance sheet transparency",
      ]
    },
    {
      organization: "Dicoding Indonesia",
      role: "Student of Intensive Coding Camp 2026",
      category: "program",
      note: "Powered by DBS Foundation",
      location: "Jakarta, Indonesia",
      startDate: "February 2026",
      endDate: "July 2026",
      duration: "6 months",
      description: [
        "Completed a 6-month intensive AI curriculum alongside a full academic workload",
        "Progressed through 10/10 courses, from AI fundamentals to building custom deep learning architectures",
        "Passed all course and training assessments with zero remedials or retakes",
        "Implemented learnings into a capstone project and earning a 93/100 final score",
        "Graduated with an average of 88.56/100 across 934 learning hours"
      ]
    },
    {
      organization: "Universitas Udayana",
      role: "Top 10 Finalist of ICT Business Case Competition",
      category: "recognition",
      note: "IT Creative Competition 2025",
      location: "Jakarta, Indonesia",
      startDate: "October 2025",
      endDate: "November 2025",
      duration: "1 month",
      description: [
        "Validated market demand through survey showing 71.79% of respondents rate digital security as critically important",
        "Identified game interactive format as most preferred learning method at 38.46%",
        "Identified leaderboard and competition as most attractive gamification feature at 58.97%",
        "Projected break-even point in the first year with surplus of Rp148.500.000",
        "Proposed accessible pricing at Rp30.000–Rp40.000 per month, substantially cheaper than international alternatives"
      ]
    },
    {
      organization: "AIESEC in BINUS",
      role: "Local Committee Vice President of Program and Delegates",
      category: "leadership",
      note: "Youth Career Compass 2026",
      location: "Jakarta, Indonesia",
      startDate: "March 2025",
      endDate: "July 2025",
      duration: "5 months",
      description: [
        "Led a 3-person team",
        "Coordinated across 5 cross-functional teams",
        "Coordinated with Grab through 2 virtual meetings and continuous chat correspondence",
        "Nurtured 164 participants in a group chat to maintain engagement",
        "Nurtured 101 on-site participants, achieving a 9.5/10 NPS score",
      ]
    },
    {
      organization: "AIESEC in BINUS",
      role: "Team Leader of International Relations and Quality Assurance",
      category: "leadership",
      note: "Global Talent",
      location: "Jakarta, Indonesia",
      startDate: "February 2025",
      endDate: "January 2026",
      duration: "1 year",
      description: [
        "Led a 3-person team",
        "Coordinated across 2 cross-functional teams",
        "Managed 37 international partners (11 Europe, 19 Asia, 7 Middle East/Africa)",
        "Facilitated and sent 2 participants abroad (Germany, Malaysia), excluding 1 participant from prior-term (Malaysia)",
        "Nurtured 3 participants abroad, achieving a 9.8/10 satisfaction score",
        "Fulfilled 100% of AIESEC Exchange Standards set by AIESEC International",
        "Passed all ECB audits with zero sanctions"
      ]
    },
    {
      organization: "BINUS University",
      role: "Selected Student of S-Class",
      category: "program",
      note: "Computer Science Program",
      location: "Jakarta, Indonesia",
      startDate: "January 2025",
      endDate: "January 2026",
      duration: "1 year 1 month",
      description: [
        "Participated in weekly training sessions to build technical skills",
        "Competed in external competitions representing BINUS, driving personal growth",
        "Supported the computer science club in creating value for the student community"
      ]
    }
  ],
  projects: [
    {
      id: "kantongku",
      title: "KantongKu",
      imageName: "kantongku.png",
      yearAccomplished: "June 2026",
      role: "Artificial Intelligence Engineer",
      projectType: "Financial Management Platform with Receipt Scanning Feature",
      category: "computer-vision",
      categoryLabel: "Computer Vision",
      highlightMetric: {
        value: "0.0098 CER",
        label: "Character Error Rate on Validation Data"
      },
      description:
        "KantongKu is an intelligent web-based financial management platform developed as the capstone project for Coding Camp 2026 powered by DBS Foundation. It combines AI-driven budget allocation with an integrated OCR engine that scans shopping receipts directly from camera/image, automatically extracts transaction items, and deducts expenses from dedicated digital spending pockets. Built with a responsive front-end, RESTful API, and a deep learning model using TensorFlow Functional API",
      keyResponsibilities: [
        "Sole AI engineer executing the original project vision as primary implementer",
        "Coordinated with data science division for dataset acquisition and preparation",
        "Developed all ML models from scratch using TensorFlow, without pretrained models or third-party LLM APIs",
        "Built OCR engine achieving 0.0098 CER on validation dataset",
        "Designed YOLO-like localization model from scratch for document boundary detection",
        "Managed end-to-end deployment with FastAPI and Hugging Face Docker integration"
      ],
      results: [
        "OCR engine achieved 0.0098 Character Error Rate (CER) on validation dataset",
        "Delivered end-to-end deployment using FastAPI and Hugging Face Docker",
        "Dashboard and analytics suite exceeded UI/UX expectations and user testing milestones"
      ],
      links: {
        github: KantongKu_Github,
        pitchDeck: KantongKu_Link
      },
      technologies: ["TensorFlow Functional API", "OCR", "FastAPI", "Hugging Face Docker", "Python"]
    },
    {
      id: "floodium",
      title: "Floodium",
      imageName: "floodium.png",
      yearAccomplished: "April 2026",
      role: "Lead Machine Learning Engineer",
      projectType: "Flood Prediction Platform using Machine Learning Approaches",
      category: "time-series",
      categoryLabel: "Time-Series Forecasting",
      highlightMetric: {
        value: "0.8442 ROC-AUC",
        label: "ROC-AUC Score on Test Data"
      },
      description:
        "Floodium is an ML-based flood early warning and prediction system developed as the final project for the BINUS University Machine Learning course. Utilizing an XGBoost time-series architecture, it forecasts flood occurrence across four high-risk Jakarta regions using real-time meteorological data integrated from the OpenWeatherMap API, accessible via a real-time Streamlit dashboard",
      keyResponsibilities: [
        "Brainstormed with team members to align project direction with research paper references and compliance requirements",
        "Oversaw project workflow from EDA, preprocessing, feature engineering, training, to model saving and experimentation",
        "Actively contributed to all development tasks alongside team members",
        "Ensured all team members understood core concepts, loss functions, and model architecture",
        "Defined out-of-scope items and MVP boundaries to maintain rigorous delivery"
      ],
      results: [
        "XG-Boost Model achieved 0.8442 score on test dataset",
        "Performed custom feature engineering to optimize model performance despite dataset limitations (imbalance class)",
        "Predicted flood occurrence across four Jakarta regions using real-time weather data"
      ],
      links: {
        github: Floodium_Github,
        pitchDeck: Floodium_Link
      },
      technologies: ["XGBoost", "Time-Series Analysis", "OpenWeatherMap API", "Streamlit", "Feature Engineering", "Python"]
    },
    {
      id: "taherai",
      title: "TaherAI",
      imageName: "taherai.png",
      yearAccomplished: "June 2026",
      role: "Lead Machine Learning Engineer",
      projectType: "YouTube Sentiment Analyzer using Machine Learning Approaches",
      category: "nlp-llm",
      categoryLabel: "NLP/LLM and LLM",
      highlightMetric: {
        value: "0.8284 Accuracy",
        label: "Accuracy on Test Data"
      },
      description:
        "TaherAI is a natural language processing solution developed for the BINUS University NLP course, integrating with the YouTube Data API v3 to automate sentiment analysis across thousands of viewer comments. It provides content creators and analytics teams with instant audience reception insights and polarity distribution",
      keyResponsibilities: [
        "Brainstormed with team members to align project direction with research paper references and compliance requirements",
        "Oversaw project workflow from EDA, tokenization, text normalization, tf-idf, to model evaluation",
        "Actively contributed to all development tasks alongside team members",
        "Ensured all team members understood the core concepts, feature vectors, and evaluation metrics",
        "Defined out-of-scope items and MVP boundaries to maintain high inference velocity"
      ],
      results: [
        "Benchmarked 14 experimental models, selecting Logistic Regression with TF-IDF as the best performer",
        "Best model achieved 0.8284 accuracy on test dataset",
        "Evaluated multiple classification models with Logistic Regression selected and tuned as the best performer",
        "Integrated YouTube API for automated sentiment analysis with real-time comment fetching"
      ],
      links: {
        github: TaherAI_Github,
        pitchDeck: TaherAI_Link
      },
      technologies: ["Natural Language Processing", "Logistic Regression", "YouTube API", "Sentiment Analysis", "Scikit-learn"]
    },
    {
      id: "driver-drowsiness",
      title: "Model Efficiency in Detecting Driver Drowsiness",
      imageName: "researchpaper.png",
      yearAccomplished: "In Progress (95%)",
      role: "Lead Researcher",
      projectType: "Optimizing the Accuracy-to-Computation Trade-off in Driver Drowsiness Detection Models",
      category: "computer-vision",
      categoryLabel: "Computer Vision",
      highlightMetric: {
        value: "0.9950 mAP@50",
        label: "Bounding Box Precision on LaPa Dataset"
      },
      description:
        "Academic research paper developed for the Research and Methodology subject at BINUS University. Evaluates state-of-the-art lightweight deep learning architectures for driver drowsiness detection with an emphasis on low-power vehicle embedded hardware deployment. Evaluated YOLOv8n pose against competing architectures, achieving near-perfect landmark precision while maintaining true real-time inference speed",
      keyResponsibilities: [
        "Contributed baseline ideas and core concepts for the research hypothesis",
        "Gathered references and critically reviewed relevant automotive computer vision literature with co-authors",
        "Led comprehensive discussions to align research direction and benchmark methodology",
        "Co-authored the drafted research paper and formatted technical manuscripts",
        "Conducted comprehensive benchmark analysis on model parameter counts, latency, and datasets",
        "Collaborated on creating automated evaluation pipelines and visualization tools",
        "Ensured research progress remained on track throughout academic milestones"
      ],
      results: [
        "Achieved bounding box mAP@50 of 0.995 on the LaPa facial landmark dataset",
        "Achieved pose estimation mAP@50-95 of 0.98 to 0.99 on the LaPa dataset",
        "Maintained real-time 30+ FPS speed on edge targets, demonstrating model efficiency outweighs raw parameter count"
      ],
      links: {
        github: ResearchPaper_Github,
        pitchDeck: ResearchPaper_Link
      },
      technologies: ["YOLOv8n", "Pose Estimation", "Deep Learning", "Computer Vision", "LaPa Dataset", "Edge AI"]
    },
    {
      id: "crypto-forecasting",
      title: "Multivariate Multi-Horizon Time Series Forecasting",
      imageName: "timeseriesforecasting.png",
      yearAccomplished: "April 2026",
      role: "Solo Experiment",
      projectType: "Predicting Bitcoin Price with a Custom Deep Learning Approach",
      category: "time-series",
      categoryLabel: "Time-Series Forecasting",
      highlightMetric: {
        value: "$1,053.44 MAE",
        label: "Outperformed Baseline by $408"
      },
      description:
        "Advanced deep learning project for Coding Camp 2026 by Dicoding powered by DBS Foundation. Developed a multivariate multi-horizon Bitcoin price forecasting architecture using custom TensorFlow Functional API components. Compared an LSTM baseline with attention against an encoder-decoder Seq2Seq LSTM with teacher forcing and custom layers, achieving superior convergence and low error over a 24-hour horizon",
      keyResponsibilities: [
        "Built LSTM baseline and Seq2Seq LSTM with teacher forcing using Functional API for 24-step forecasting",
        "Developed custom Dense, Dropout, and Layer Normalization layers from scratch",
        "Implemented Multi-Head Attention mechanisms on both neural architectures",
        "Built custom training loop utilizing tf.GradientTape for fine-grained gradient clipping and monitoring",
        "Created custom MAE loss and dynamic early stopping callbacks",
        "Implemented autoregressive multi-step inference pipeline with dynamic uncertainty visualization",
        "Achieved Seq2Seq MAE of $1,053.44, outperforming baseline by $408"
      ],
      results: [
        "Seq2Seq model achieved MAE of $1,053.44, outperforming the LSTM baseline by $408",
        "Demonstrated the empirical superiority of attention-enhanced sequence-to-sequence architectures for 24-hour cryptocurrency prediction",
        "Engineered input representation from 48-hour sliding window of ten technical indicators"
      ],
      links: {
        github: TimeSeriesForecasting_Github,
        pitchDeck: TimeSeriesForecasting_Link
      },
      technologies: ["TensorFlow Functional API", "LSTM", "Seq2Seq", "Multi-Head Attention", "tf.GradientTape", "Time Series Forecasting", "Custom Layers"]
    },
    {
      id: "youth-career-compass",
      title: "Youth Career Compass",
      imageName: "youthcareercompass.png",
      yearAccomplished: "2025",
      role: "Local Committee Vice President of Program and Delegates",
      projectType: "Youth Career Seminar in Partnership with PT Grab Teknologi Indonesia",
      category: "leadership",
      categoryLabel: "Leadership and Business Modelling",
      description:
        "Youth Career Compass 2026 is a youth career event run by AIESEC in BINUS. As Local Committee Vice President of Program and Delegates, the role involved planning the event at Grab's office, coordinating facilities with Grab's team, ensuring delegates were well managed, and overseeing overall program execution to keep things running smoothly",
      keyResponsibilities: [
        "Planned the event at Grab's office",
        "Coordinated facilities with Grab's team",
        "Ensured delegates were well managed throughout the event",
        "Oversaw overall program execution to keep things running smoothly"
      ],
      results: [
        "Led a 3-person team",
        "Coordinated across 5 cross-functional teams",
        "Coordinated with Grab through 2 virtual meetings and continuous chat correspondence",
        "Nurtured 164 participants in a group chat to maintain engagement",
        "Nurtured 101 on-site participants, achieving a 9.5/10 NPS score"
      ],
      links: {},
      technologies: ["Event Management", "Program Management", "Stakeholder Management", "Strategic Planning", "Team Management"]
    },
    {
      id: "global-talent",
      title: "Global Talent",
      imageName: "globaltalent.png",
      yearAccomplished: "2025 to 2026",
      role: "Team Leader of International Relations and Quality Assurance",
      projectType: "International Talent Exchange Program",
      category: "leadership",
      categoryLabel: "Leadership and Business Modelling",
      description:
        "Global Talent is an international talent exchange program run by AIESEC in BINUS. As Team Leader of International Relations and Quality Assurance, the role involved managing relationships with international partners, conducting regular calls to maintain communication, matching supply and demand between stakeholders, preparing audit documentation, and guiding the team to meet KPIs while ensuring quality assurance standards",
      keyResponsibilities: [
        "Managed relationships with international partners",
        "Conducted regular calls to maintain communication",
        "Matched supply and demand between stakeholders",
        "Prepared audit documentation",
        "Guided my team to meet their KPIs while ensuring quality assurance standards"
      ],
      results: [
        "Led a 3-person team",
        "Coordinated across 2 cross-functional teams",
        "Managed 37 international partners (11 Europe, 19 Asia, 7 Middle East/Africa)",
        "Facilitated and sent 2 participants abroad (Germany, Malaysia), excluding 1 participant from prior-term (Malaysia)",
        "Nurtured 3 participants abroad, achieving a 9.8/10 satisfaction score",
        "Fulfilled 100% of AIESEC Exchange Standards set by AIESEC International",
        "Passed all ECB audits with zero sanctions"
      ],
      links: {},
      technologies: ["International Relations", "Quality Assurance", "Stakeholder Management", "Team Management", "Audit Documentation"]
    },
    {
      id: "clevercy",
      title: "CleverCy",
      imageName: "clevercy.png",
      yearAccomplished: "2025",
      role: "Team Member and Co-Author",
      projectType: "Business Modeling for Indonesia's Cybersecurity Challenges",
      category: "leadership",
      categoryLabel: "Leadership and Business Modelling",
      highlightMetric: {
        value: "71.79%",
        label: "Validated Digital Security Demand"
      },
      description:
        "Game-based cybersecurity education platform tailored for Generation Z, conceptualized for the ICT Business Idea Competition (ITCC) 2025 at Universitas Udayana (Remote). CleverCy transforms complex threat analysis and cyber defense training into an interactive adventure with an adaptive AI Mentor, real-world breach simulations, competitive leaderboards, and industry-recognized certifications",
      keyResponsibilities: [
        "Co-authored the business proposal and product concept for CleverCy",
        "Contributed to market research and quantitative survey analysis of 39 target respondents",
        "Developed product description and pedagogical learning framework based on gamification",
        "Contributed to competitor analysis benchmarking TryHackMe, CyberStart, and Mimo Coding",
        "Participated in comprehensive SWOT analysis and product-market fit validation",
        "Contributed to patent and licensing strategy including AI Mentor Adaptif and Cyber Threat Simulation Engine",
        "Assisted in financial planning including initial capital of Rp78.000.000 and break-even projection",
        "Helped define team structure and operational role descriptions"
      ],
      results: [
        "Achieved Top 10 finalist in the ICT Business Idea Competition",
        "Validated market demand through survey showing 71.79% of respondents rate digital security as critically important",
        "Identified game interactive format as most preferred learning method at 38.46%",
        "Identified leaderboard and competition as most attractive gamification feature at 58.97%",
        "Projected break-even point in the first year with surplus of Rp148.500.000",
        "Proposed accessible pricing at Rp30.000–Rp40.000 per month, substantially cheaper than international alternatives"
      ],
      links: {
        github: CleverCy_Github,
        pitchDeck: CleverCy_Link
      },
      technologies: ["Game-based Learning", "AI Mentor Adaptif", "Cyber Threat Simulation Engine", "Natural Language Processing", "Gamification"]
    },
    {
      id: "koptrust-ai",
      title: "KopTrust AI",
      imageName: "koptrustai.png",
      yearAccomplished: "2026",
      role: "AI Engineer and Developer",
      projectType: "Agentic AI Superapp for the Cooperatives Transparency Challenge",
      category: "nlp-llm",
      categoryLabel: "NLP/LLM and Speech Recognition",
      highlightMetric: {
        value: "Dual-Agentic AI",
        label: "LLM with RAG and Speech-to-Text Agents"
      },
      description:
        "Digital platform developed for the Kemenkop Hackathon 2026 (Digital Cooperatives Expo), addressing the national issue of low public participation and transparency in Indonesian cooperatives. The platform simplifies complex balance sheets, SHU calculations, and RAT meeting minutes through a multifunctional dashboard, an intelligent Indonesian-language AI assistant, and an automated voice-based meeting transcriptor and summarizer",
      keyResponsibilities: [
        "Developed the client application using Flutter for responsive cross-platform deployment",
        "Implemented agentic AI with LLM and voice transcription to demystify cooperative financial statements",
        "Analyzed and processed nationwide cooperative databases provided by the Ministry of Cooperatives",
        "Implemented Retrieval-Augmented Generation (RAG) to eradicate model hallucination on statutory financial figures",
        "Formulated cost-to-value optimization strategies across DeepSeek-V4 Flash and Universal 3.5 Pro APIs",
        "Built dual agent architecture comprising specialized Text Agent and Voice Agent",
        "Designed a multifunctional dashboard for real-time auditability and elderly-accessible navigation"
      ],
      results: [
        "Featured in Hackathon Digital Cooperatives Expo 2026 as Top 100 Finalist",
        "Addressed core accessibility and attention problems through EDA, identifying a critical 24% vs. 76% gap in account ownership across 71,270 members nationwide",
        "Designed for UU PDP compliance and alignment with 4 regulations (Inpres 9/2025, SE Menkop 1/2015, UU 11/2020, draft RUU Perkoperasian).",
        "Architected a dual-agent framework (Text + Voice) to deliver accessible, multimodal user support.",
        "Created an integrated super app bridging the digital divide for elderly cooperative members",
        "Implemented zero hallucination RAG for strict statutory cooperative balance sheet transparency",
      ],
      links: {
        github: KopTrustAI_Github,
        pitchDeck: KopTrustAI_Link
      },
      technologies: ["Flutter", "LLM", "Voice Transcriptor", "Agentic AI", "RAG", "DeepSeek-V4 Flash", "Universal 3.5 Pro", "Firebase", "AssemblyAI"]
    }
  ],
  credentials: [
    {
      id: "cert-cmp-aie",
      name: "Coding Camp 2026 for AI Engineers",
      issuer: "Dicoding Indonesia powered by DBS Foundation",
      issued: "July 2026",
      expires: "No Expiration",
      credentialUrl: "https://www.linkedin.com/in/suherlan/overlay/Position/2851540423/treasury/?profileId=ACoAAEeYLckBj1U2FQHBxCsFyEzin18IxJHGVdM",
      verificationCode: "CC26/GRAD/XXVI-07/CACC005D6Y2206"
    },
    {
      id: "cert-eng-bss",
      name: "English for Business Communication",
      issuer: "The British Institute",
      issued: "June 2026",
      expires: "No Expiration",
      credentialUrl: "https://www.linkedin.com/in/suherlan/overlay/Certifications/311136060/treasury/?profileId=ACoAAEeYLckBj1U2FQHBxCsFyEzin18IxJHGVdM",
      verificationCode: "BD001/2026/06/CORP/XH51676/2057"
    },
    {
      id: "cert-adv-dl",
      name: "Advance Deep Learning Project",
      issuer: "Dicoding Indonesia",
      issued: "June 2026",
      expires: "June 2029",
      credentialUrl: "https://dicoding.com/certificates/MEPJO0OV6Z3V",
      verificationCode: "MEPJO0OV6Z3V"
    },
    {
      id: "cert-dl-fund",
      name: "Deep Learning Fundamentals",
      issuer: "Dicoding Indonesia",
      issued: "May 2026",
      expires: "May 2029",
      credentialUrl: "https://dicoding.com/certificates/N9ZONRN68XG5",
      verificationCode: "N9ZONRN68XG5"
    },
    {
      id: "cert-azr-ai",
      name: "Microsoft Azure AI Fundamental",
      issuer: "Microsoft",
      issued: "March 2026",
      expires: "March 2029",
      credentialUrl: "https://www.linkedin.com/in/suherlan/overlay/Certifications/1699137480/treasury/?profileId=ACoAAEeYLckBj1U2FQHBxCsFyEzin18IxJHGVdM",
      verificationCode: "111541121814933/GreatNusa/III/2026"
    },
    {
      id: "cert-ml-fund",
      name: "Machine Learning Fundamentals",
      issuer: "Dicoding Indonesia",
      issued: "February 2026",
      expires: "February 2029",
      credentialUrl: "https://dicoding.com/certificates/L4PQ9QJQ2PO1",
      verificationCode: "L4PQ9QJQ2PO1"
    },
    {
      id: "cert-ai-fund",
      name: "Artificial Intelligence Fundamentals",
      issuer: "Dicoding Indonesia",
      issued: "February 2026",
      expires: "February 2029",
      credentialUrl: "https://dicoding.com/certificates/MRZM6283RPYQ",
      verificationCode: "MRZM6283RPYQ"
    },
    {
      id: "cert-soft-dev",
      name: "Software Development Fundamentals",
      issuer: "Dicoding Indonesia",
      issued: "February 2026",
      expires: "February 2029",
      credentialUrl: "https://dicoding.com/certificates/72ZDJQE5VZYW",
      verificationCode: "72ZDJQE5VZYW"
    }
  ]
};
