import type { Project, Experience, Skill, Certification } from "@/types";
import { platform } from "process";

export const projects: Project[] = [
  {
    id: "ai-interview",
    title: "AI Interview System",
    description:
      "LLM-powered interview simulation with real-time speech processing. Built as Capstone Project at Dicoding — led the team from architecture to final delivery.",
    category: ["NLP", "Web"],
    tech: ["LLM", "Whisper", "Python", "FastAPI", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Led end-to-end development, coordinating team from system design to final deployment",
      "Built real-time speech-to-text pipeline using Whisper for accurate interview transcription",
      "Developed full-stack system with NLP-powered backend and interactive web frontend",
      "Integrated LLM for grammar correction and intelligent response evaluation",
      "Designed scalable processing flow for video-to-insight automation"
    ],
    github: "https://github.com/nurrahmawt/AI_Interview_Video_System",
    year: "2025",
  },
  {
    id: "vehicle-detection",
    title: "Vehicle Detection System",
    description:
      "Real-time object detection for 5 vehicle classes using YOLOv8. Supports live webcam stream via IP Webcam integration.",
    category: ["Computer Vision", "Deep Learning"],
    tech: ["YOLOv8", "OpenCV", "Python", "IP Webcam", "Ultralytics"],
    highlights: [
      "Designed and deployed a real-time vehicle detection system using YOLOv8",
      "Trained custom model on 5 vehicle classes with performance up to ~0.60 mAP50",
      "Enabled live inference via webcam stream and video input",
      "Improved detection pipeline through data handling and model tuning",
      "Identified dataset imbalance issues and proposed optimization strategies",
    ],
    github: "https://github.com/nurrahmawt/Vehicles_Detection_with_YOLOv8",
    year: "2025",
  },
  {
    id: "flood-prediction",
    title: "Flood Prediction Website",
    description:
      "End-to-end flood risk prediction system for local community use. Integrates Decision Tree ML model with real-time weather API data.",
    category: ["Machine Learning", "Web"],
    tech: ["Decision Tree", "Flask", "Weather API", "HTML", "CSS", "JavaScript"],
    highlights: [
    "Built a flood risk prediction system using Decision Tree based on real-time weather data",
    "Integrated OpenWeather API to fetch live environmental parameters (humidity, temperature, rainfall, wind speed)",
    "Developed an end-to-end ML pipeline from data preprocessing to model deployment",
    "Delivered a simple and accessible web interface for non-technical users in local community",
    "Implemented 3-level risk classification: Aman, Siaga, and Banjir",
    ],
    github: "https://github.com/nurrahmawt/flood-predict",
    year: "2025",
  },
  {
    id: "butterfly-classification",
    title: "Butterfly Species Classifier",
    description:
      "Image classification comparing Custom CNN vs MobileNetV2 transfer learning. Exported to TFLite and TF.js for mobile and web deployment.",
    category: ["Deep Learning", "Machine Learning"],
    tech: ["TensorFlow", "MobileNetV2", "Keras", "TFLite", "TF.js"],
    highlights: [
    "Designed and trained a custom CNN architecture with BatchNorm and Dropout for image classification",
    "Implemented transfer learning using MobileNetV2 to improve generalization",
    "Achieved ~87% test accuracy and compared performance across multiple models",
    "Applied early stopping to prevent overfitting and stabilize training",
    "Exported models to TensorFlow, TensorFlow.js, and TensorFlow Lite for web and mobile deployment",
    ],
    github: "https://github.com/nurrahmawt/Butterfly-Classification",
    year: "2025",
  },
  {
  id: "student-retention-dashboard",
  title: "Student Retention & Dropout Prediction Dashboard",
  description: "End-to-end data science project to analyze, predict, and monitor student dropout risk using machine learning and interactive dashboarding.",
  category: ["Data Analysis", "Machine Learning"],
  tech: ["Python", "Pandas", "Scikit-learn", "Google Data Studio", "Streamlit"],
  highlights: [
  "Designed a predictive system to reduce student dropout (~32%) through early risk detection",
  "Applied Random Forest with SMOTE to handle class imbalance and improve model robustness",
  "Identified key dropout drivers including academic performance, financial status, and age",
  "Translated data insights into actionable business strategies for retention improvement",
  "Built end-to-end solution: EDA → modeling → dashboard → real-time prediction app",
  "Enabled data-driven decision making for edutech stakeholders",
  ],
  github: "https://github.com/nurrahmawt",
  demo: "https://datastudio.google.com/u/0/reporting/bf87a458-f9e4-49a6-8069-5052abab017e/page/PFutF",
  streamlit: "https://studentperformance-j2cyow7u7ot79kqtn9qns9.streamlit.app/",
  year: "2026",
},
{
  id:"bike-sharing-analysis",
  title: "Bike Sharing Demand Analysis & Interactive Dashboard",
  description: "End-to-end data analysis project to explore bike rental patterns, identify user behavior, and deliver insights through an interactive Streamlit dashboard.",
  category: ["Data Analysis"],
  tech: ["Python", "Pandas", "Streamlit", "EDA", "Data Visualization"],
  highlights: [
  "Analyzed bike rental patterns across hourly and daily datasets",
  "Identified commuting vs recreational usage behavior",
  "Evaluated weather impact on demand patterns",
  "Built interactive Streamlit dashboard for real-time insights",
  "Delivered actionable insights for operational and marketing strategy"
  ],
  github: "https://github.com/nurrahmawt/dashboard_bike_sharing",
  streamlit: "https://dashboardbikesharing-mepyvosjvht8v5yttgut8p.streamlit.app/",
  year: "2026",
},
{
  id: "bmlp-clustering-classification",
  title: "Machine Learning Clustering & Classification Project",
  description: "Comprehensive machine learning project covering unsupervised (clustering) and supervised (classification) techniques, including model comparison, evaluation, and hyperparameter tuning.",
  category: ["Machine Learning", "Data Analysis"],
  tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
  highlights: [
    "Built K-Means clustering model with Silhouette Score of 0.51",
    "Developed multiple classification models (Decision Tree, Random Forest, Logistic Regression, KNN, SVM)",
    "Performed hyperparameter tuning to improve model performance",
    "Compared model performance using accuracy, precision, recall, and F1-score",
    "Achieved up to 99%+ accuracy on classification tasks",
  ],
  github: "https://github.com/nurrahmawt/BMLP_ASAH",
  year: "2025",
},
{
  id: "anime-sentiment-analysis",
  title: "Anime Sentiment Analysis using NLP & Deep Learning (Haikyuu Reviews)",
  description: "End-to-end NLP project to classify anime review sentiments using both deep learning and traditional machine learning models, with performance comparison and evaluation.",
  category: ["Machine Learning", "NLP", "Deep Learning"],
  tech: ["Python", "Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy"],
  highlights: [
    "Built sentiment classification system for 3 classes (negative, neutral, positive)",
    "Implemented and compared LSTM, SVM (TF-IDF), and Random Forest models",
    "Achieved highest accuracy of 97.25% using SVM with TF-IDF",
    "Performed end-to-end pipeline: web scraping, preprocessing, feature engineering, and evaluation",
    "Analyzed model performance using precision, recall, and F1-score",
  ],
  github: "https://github.com/nurrahmawt/sentiment-analysis",
  year: "2025",
},
{
  id: "tapis-umkm-web-app",
  title: "Tapis UMKM Web App (Product Catalog & Ordering System)",
  description: "Responsive web application for showcasing and promoting UMKM products, featuring product catalog, admin management, and direct WhatsApp ordering integration.",
  category: ["Web"],
  tech: ["React", "Firebase", "Cloudinary", "CSS", "Vercel"],
  highlights: [
    "Developed dynamic product catalog for UMKM promotion",
    "Integrated WhatsApp API for seamless customer ordering",
    "Built simple admin system for product management",
    "Implemented image upload system using Cloudinary",
    "Deployed responsive web app accessible on mobile and desktop",
  ],
  github: "https://github.com/nurrahmawt/Tapis-AlKautsar",
  web: "https://tapis-al-kautsar.vercel.app/",
  year: "2026",
},
{
  id: "securechat-android",
  title: "SecureChat Android App (RSA Encryption & Secure Logging)",
  description: "Android application focused on secure messaging, implementing RSA encryption, secure data storage, and modern Android security practices.",
  category: ["Mobile Development & Security"],
  tech: ["Kotlin", "Android Studio", "RSA Encryption", "Android Keystore", "Coroutines"],
  highlights: [
    "Implemented RSA encryption using Android Keystore for secure message handling",
    "Built secure logging system with app-specific storage (Scoped Storage)",
    "Applied modern Android security practices (API 29+ compliance)",
    "Configured network security for safe local server communication",
    "Developed asynchronous processing using Kotlin Coroutines",
  ],
  github: "https://github.com/nurrahmawt/SecureChatApp",
  year: "2025",
},
{
    id: "vehicle-analysis-dashboard",
    title: "Vehicle Traffic Analysis",
    description: "This project emphasizes structured data handling, pattern analysis, and dashboard visualization to deliver clear and actionable insights for operational monitoring.",
    category: ["Data Analysis"],
    tech: ["Google Data Studio"],
    highlights: [
      "Structured and managed operational traffic data for reporting",
      "Analyzed traffic and area patterns to support operational insights",
      "Built concise dashboards for management-level reporting",
      "Translated raw data into clear and actionable business insights"
    ],
    demo: "https://datastudio.google.com/u/0/reporting/475bcc66-db1e-4b76-a247-8646b370dd19/page/Hq0YE",
    year: "2024"
  }
];
      export const workExperiences: Experience[] = [
      {
      role: "Data Entry Operator",
      company: "Kantor Kepala Pekon Parerejo",
      location: "Pringsewu, Lampung",
      period: "Jul – Aug 2025",
      type: "internship",
      sections: [
      {
      points: [
      "Entered, verified, and updated 100+ household records into the MetaDesa.id system, ensuring data accuracy and completeness",
      "Performed data validation and cross-checking to minimize input errors and maintain data consistency",
      "Organized and structured administrative data for reporting and documentation purposes",
      "Collaborated with staff to support daily administrative operations and ensure timely data processing"
      ]
    }
  ]
},
  {
      role: "Machine Learning Cohort",
      company: "ASAH Ied — Dicoding Indonesia",
      location: "Remote",
      period: "Aug 2025 – Jan 2026",
      type: "training",
      sections: [
      {
      title: "Training & Individual Projects",
      points: [
      "Completed an intensive machine learning program covering supervised and unsupervised learning",
      "Developed machine learning models (Decision Tree, Random Forest) for classification tasks",
      "Applied clustering methods for exploratory data analysis",
      "Built a sentiment analysis pipeline using LSTM, SVM, and Random Forest"
      ]
  },
{
      title: "Capstone Project – AI Interview Simulation System",
      points: [
      "Led a team in developing an AI-based interview simulation platform",
      "Designed and implemented full-stack system architecture",
      "Integrated LLM-based services for dynamic interview simulation",
      "Coordinated team tasks and ensured project delivery"
      ]
    }
  ]
}
];

export const education: Experience[] = [
  {
    role: "Bachelor's Degree in Informatics Engineering",
    company: "Institut Informatika dan Bisnis Darmajaya",
    location: "Lampung",
    period: "2022 – 2026",
    type: "education",
    sections: [
      {
        title: "Academic Achievements",
        points: [
          "GPA 3.90 / 4.00",
          "Thesis: Support Vector Machine in E-Promotion Strategy for Increasing Sales in SMEs",
          "Concentration: Artificial Intelligence",
        ]
      }
    ],
  },
];

export const skills: Skill[] = [
  {
    label: "Programming & Scripting",
    items: ["Python", "SQL", "JavaScript", "HTML", "CSS", "Kotlin"],
  },
  {
    label: "AI / ML",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "LLM Integration",
      "Speech-to-Text (Whisper)",
    ],
  },
  {
    label: "Model & Techniques",
    items: ["Yolov8", "MobileNetV2", "Decision Tree", "Random Forest", "LSTM", "SVM", "KNN", "Logistic Regression", "K-Means"],
  },
  {
    label: "AI & Data Libraries",
    items: ["TensorFlow", "Keras", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "Ultralytics"],
  },
  {
    label: "Frontend & Backend",
    items: ["Flask", "FastAPI", "Streamlit", "Firebase", "React", "Next.js"],
  },
  {
    label: "Deployment & Integration",
    items: ["Flask REST API", "FastAPI", "Streamlit", "Vercel", "TFLite", "TF.js", "IP Webcam", "Docker"],
  },
  {
    label: "Data & Business Intelligence",
    items: ["Google Data Studio", "Power BI", "Excel"],
  },
  {
    label: "Data Mining Tools",
    items: ["KNIME", "RapidMiner"],
  },
];

export const certifications: Certification[] = [
  {
    title: "Junior Data Scientist",
    issuer: "BNSP",
    file: "/file/sertifikat_bnsp.pdf",
  },
  {
    title: "Data Scientist Training",
    issuer: "Komdigi",
    file: "/file/sertifikat_komdigi.pdf",
  },
  {
    title: "Data Scientist Training",
    issuer: "LSP Darmajaya",
    file: "/file/sertifikat_lsp_darmajaya.pdf",
  },
  {
    title: "Data Analysis Fundamentals",
    issuer: "Dicoding",
    relevantProjectId: "student-retention-dashboard",
    url: "https://www.dicoding.com/certificates/07Z67829JPQR",
  },
  {
    title: "Applied Data Science",
    issuer: "Dicoding",
    relevantProjectId: "bike-sharing-analysis",
    url: "https://www.dicoding.com/certificates/GRX5WQ2WYZ0M",
  },
  {
    title: "Machine Learning for Beginners",
    issuer: "Dicoding",
    relevantProjectId: "bmlp-clustering-classification",
    url: "https://www.dicoding.com/certificates/N9ZO251LRPG5",
  },
  {
    title: "Deep Learning Fundamentals",
    issuer: "Dicoding",
    relevantProjectId: "anime-sentiment-analysis",
    url: "https://www.dicoding.com/certificates/L4PQ2Y2J2ZO1",
  },
  {
    title: "Building Machine Learning Systems",
    issuer: "Dicoding",
    url: "https://www.dicoding.com/certificates/RVZKGQE6QXD5",
  },
  {
    title: "Machine Learning Cohort Program",
    issuer: "Asah Ied by Dicoding",
    relevantProjectId: "ai-interview",
    file: "/file/sertifikat_asah.pdf",
  }
];

export const SOCIAL = {
  github: "https://github.com/nurrahmawt",
  linkedin: "https://linkedin.com/in/nur-rahmawati-",
  email: "nurrahmawati.id@gmail.com",
};