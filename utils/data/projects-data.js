import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

// Modify this 

export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Financial App',
        description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Travel Agency App',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// export const modified_projects = [

//     {
//         id: 1,
//         name: "Vhagar Project",
//         description: "The Vhagar Project is a machine learning application designed to \
//         produce alpha for trading signals. It specializes in sentiment \
//         and technical analysis to produce futures insights to create trading alpha. \
//         The link is given above",
        
//         github_link: "https://github.com/Orko24/Vhagar_prototype",

//     },
//     {
//         id: 2,
//         name: "Adamas Audio",
//         description: "The Adamas Audio Project is a machine learning application designed to \
//         create customizable audiobooks. It used machine learning to perform voice and \
//         optical character recognition to create synthetic voice engines to turn pdfs into customizable audiobooks\
//         \
//         ", 
//         github_link: "https://github.com/Orko24/Final-Update-Adamas1",

//     },
//     {
//         id: 3,
//         name: "Golang Library",
//         description: "A Library created in Golang to support audio processing for Adamas Audio",
//         github_link: "https://github.com/Orko24/FFMPEG_Golang_replacement",

//     },
//     {
//         id: 4,
//         name: "Undergraduate Thesis",
//         description: "In my undergraduate thesis I created an Optically Detected Magnetic Resonance Microscope (ODMR)\
//         from scratch. In this project I created software and hardware designed to count photons emitted from \
//         green laser emissions that allowed the imaging of magnetic phenomenon through qubit manipulation. \
//         ",
//         github_link: "https://github.com/Orko24/ODMR_thesis",

//     }

// ];




export const selectedProjects = [
    {
        id: 1,
        name: "Bridgewater Associates – Take-Home Assessment (2025) - AI Workflow System Design Project",
        description: "Designed and implemented a fully functional workflow builder and executor using ReactFlow and LangGraph.js. Built custom CRUD logic for workflows and nodes; persisted execution history to serverless PostgreSQL (Neon). Integrated OpenAI's Chat API for live LLM responses; managed dynamic graph state with modular JSON schemas. Delivered responsive frontend and DRY backend logic with real-time feedback, validation, and debugging.",
        technologies: ["Next.js", "LangGraph.js", "PostgreSQL", "ReactFlow", "Vercel", "TypeScript", "OpenAI API"],
        github_link: "",
        highlights: ["Met all project requirements under time constraints", "Autonomous full-stack product delivery", "Produced demo video walkthrough", "Clean codebase with deployment-ready Vercel integration"]
    },
    {
        id: 2,
        name: "Universal RAG Co-Pilot Generator (Bravura AI)",
        description: "Developed a domain-agnostic RAG framework that transforms unstructured sources (PDFs, HTML, text) into structured SQL and vector databases. Enabled rapid chatbot and co-pilot creation for automation, finance, legal, and compliance domains. Original use case involved training automation engineers; later expanded into alpha signal generation with domain-specific LLMs.",
        technologies: ["ChromaDB", "FastAPI", "Hugging Face Transformers", "Python", "SQL", "Vector Databases"],
        github_link: "",
        highlights: ["Domain-agnostic framework", "Scalable document QA pipelines", "Multi-domain deployment"]
    },
    {
        id: 3,
        name: "Mathematical R&D Optimization Framework (Bravura AI)",
        description: "Created a method to accelerate GenAI product development using core mathematical and heuristic optimizations. Reduced experimentation cycles and improved model performance alignment with KPIs. Focused on practical PyTorch-level tuning, hyperparameter convergence, and evaluation loop efficiency.",
        technologies: ["PyTorch", "Python", "Mathematical Optimization", "Heuristic Algorithms", "GenAI"],
        github_link: "https://github.com/Orko24/White_paper_Generative_AI",
        highlights: ["Accelerated GenAI development", "Improved KPI alignment", "Applicable across LLM, NLP, and generative architecture research workflows"]
    },
    {
        id: 4,
        name: "Adamas Audio - TTS Engine & Audiobook Platform",
        description: "Built a comprehensive machine learning application designed to create customizable audiobooks using voice and optical character recognition. Developed a Transformer-based speech synthesis system supporting English, French, and Hindi. Used machine learning to perform voice synthesis and OCR to create synthetic voice engines that turn PDFs into customizable audiobooks. Containerized via Docker and deployed on IBM Cloud for scalable audiobook generation.",
        technologies: ["TensorFlow", "Transformers", "Docker", "IBM Cloud", "Python", "Speech Synthesis", "OCR", "Machine Learning", "Voice Recognition"],
        github_link: "https://github.com/Orko24/Final-Update-Adamas1",
        highlights: ["Multilingual TTS support (English, French, Hindi)", "PDF to audiobook conversion", "Voice and optical character recognition", "Real-time latency performance", "Scalable deployment on IBM Cloud", "Modular voice rendering system"]
    },
    {
        id: 5,
        name: "Fraud Detection ML Pipeline & Auto-Dashboard System (Bravura AI)",
        description: "Designed an end-to-end ML platform for fraud detection using credit card datasets as a base use case. Built a modular AI adapter layer using LLMs (Claude API, LangChain) to intelligently match and transform arbitrary tabular schemas. Integrated Power BI to auto-generate dashboards using natural language queries and schema-aware data access.",
        technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "React", "LangChain", "Claude", "Hugging Face", "Power BI", "ReactFlow", "TypeScript"],
        github_link: "https://github.com/Orko24/PowerBiMLaaS",
        highlights: ["End-to-end ML platform", "Intelligent schema transformation", "Auto-generated Power BI dashboards", "Cross-domain schema interoperability"]
    },
    {
        id: 6,
        name: "Sentiment Analysis API & UI (Independent Project)",
        description: "Developed a full-stack sentiment classification platform using Python, FastAPI, and Hugging Face Transformers. Fine-tuned a DistilBERT model on labeled tweet sentiment datasets for binary classification. Built a clean React frontend for users to input text and view live sentiment analysis with probability scores.",
        technologies: ["Python", "FastAPI", "Hugging Face Transformers", "React", "Docker", "MLflow", "DistilBERT"],
        github_link: "https://github.com/Orko24/Sentiment_Analyzer_FullStack",
        highlights: ["Fine-tuned DistilBERT model", "Live sentiment analysis", "Dockerized deployment", "MLflow integration for tracking"]
    },
    {
        id: 7,
        name: "Deep Learning SAR Image Classification System",
        description: "Built production-ready SAR (Synthetic Aperture Radar) ship detection system with full-stack web interface and REST API. Implemented custom CNN architectures using TensorFlow/Keras for maritime vessel detection and classification in satellite imagery. Created geospatial processing capabilities using GDAL, rasterio, and geopandas.",
        technologies: ["FastAPI", "PostgreSQL", "TensorFlow 2.14", "OpenCV", "Docker", "GDAL", "scikit-image", "Bootstrap 5", "Leaflet"],
        github_link: "https://github.com/Orko24/DeepLearning_Sar_Repository",
        highlights: ["Maritime vessel detection", "Geospatial processing", "Interactive Leaflet maps", "DBSCAN spatial clustering"]
    },
    {
        id: 8,
        name: "Kubernetes-Deployed Geometric Calculator Microservice",
        description: "Built a scalable microservice for geometric calculations (area, perimeter, volume) deployed on Kubernetes. Implemented FastAPI backend with Pydantic data validation and automated OpenAPI documentation generation. Created containerized architecture with multi-stage Docker builds.",
        technologies: ["Python", "FastAPI", "Uvicorn", "Docker", "Kubernetes", "Nginx", "Pydantic", "Vanilla JavaScript"],
        github_link: "https://github.com/Orko24/ShapesCalculator_Kubernetes",
        highlights: ["Kubernetes deployment", "Multi-stage Docker builds", "HPA and PDB for high availability", "CI/CD pipeline integration"]
    },
    {
        id: 9,
        name: "Enterprise Q&A System with RAG Architecture",
        description: "Developed a production-ready Retrieval-Augmented Generation (RAG) system for intelligent document-based question answering. Built React 18.2.0 frontend with TypeScript, Tailwind CSS, and real-time WebSocket communication for streaming AI responses. Integrated Claude 3.5 Sonnet API for high-quality response generation.",
        technologies: ["React 18.2.0", "TypeScript", "FastAPI", "PostgreSQL 15", "ChromaDB", "Claude 3.5 Sonnet", "Docker", "Sentence Transformers"],
        github_link: "https://github.com/Orko24/Q-A-system-RAG-AI",
        highlights: ["Production-ready RAG system", "Real-time WebSocket streaming", "Advanced text chunking algorithm", "Secure file upload system"]
    },
    {
        id: 10,
        name: "MLOps BERT Sentiment Analysis Pipeline",
        description: "Built end-to-end MLOps pipeline for BERT-based sentiment analysis with automated training and deployment. Implemented continuous integration for model training, validation, and versioning using MLflow. Created Apache Airflow DAGs for automated data processing, model retraining, and performance monitoring.",
        technologies: ["Python", "PyTorch", "BERT", "MLflow", "Apache Airflow", "Docker", "Kubernetes", "Jenkins"],
        github_link: "https://github.com/Orko24/mlops-bert-sentiment-pipeline",
        highlights: ["End-to-end MLOps pipeline", "Automated CI/CD for ML", "Model drift detection", "A/B testing framework"]
    }
];

export const modified_projects = selectedProjects;

// Legacy projects (keeping for reference)
export const legacyProjects = [
    {
        id: 1,
        name: "Vhagar Project",
        description: "The Vhagar Project is a machine learning application designed to produce alpha for trading signals. It specializes in sentiment and technical analysis to produce futures insights to create trading alpha.",
        github_link: "https://github.com/Orko24/Vhagar_prototype",
    },

    {
        id: 3,
        name: "Golang Library",
        description: "A Library created in Golang to support audio processing for Adamas Audio",
        github_link: "https://github.com/Orko24/FFMPEG_Golang_replacement",
    },
    {
        id: 4,
        name: "Undergraduate Thesis",
        description: "In my undergraduate thesis I created an Optically Detected Magnetic Resonance Microscope (ODMR) from scratch. In this project I created software and hardware designed to count photons emitted from green laser emissions that allowed the imaging of magnetic phenomenon through qubit manipulation.",
        github_link: "https://github.com/Orko24/ODMR_thesis",
    }
];

// Research section
export const researchData = [
    {
        id: 1,
        title: "Independent Generative AI Research Paper (2024–2025)",
        description: "Authored an enterprise-grade 180-page paper analyzing the full development lifecycle of generative AI systems, with emphasis on workflow efficiency, cost reduction, and deployment strategies. Designed a modular R&D pipeline integrating Retrieval-Augmented Generation (RAG), LLMs, and Agentic AI systems into production environments with scalable DevOps methodologies.",
        duration: "2024–2025",
        pages: "180 pages",
        link: "https://github.com/Orko24/White_paper_Generative_AI",
        keyContributions: [
            "Benchmarked transformer-based architectures including LLaMA 3, Databricks DBRX, and OpenAI GPT",
            "Introduced ontology-driven workflow schema for regulatory compliance and ethics",
            "Conducted enterprise deployment case studies across finance, legal, and biomedical sectors",
            "Developed cost-aware generative modeling framework with LoRA and self-supervised learning",
            "Proposed convergence optimizations for PyTorch-based evaluation loops"
        ],
        domains: [
            "Generative AI R&D",
            "Transformer Architecture Benchmarking", 
            "Retrieval-Augmented Generation (RAG) Systems",
            "Evaluation Loop Optimization",
            "Domain-Aligned Agent Deployment",
            "PyTorch Tuning",
            "Ontology-Driven Pipeline Design"
        ]
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },