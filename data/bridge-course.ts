export interface BridgeModule {
  id: string;
  title: string;
  duration: string;
  topics: string[];
  description: string;
}

export const bridgeCourseModules: BridgeModule[] = [
  {
    id: "module-1",
    title: "Python Fundamentals",
    duration: "Week 1",
    description: "Core Python programming for AI/ML development",
    topics: ["Variables & Data Types", "Control Flow", "Functions", "OOP Basics", "File I/O"],
  },
  {
    id: "module-2",
    title: "Data Science Foundations",
    duration: "Week 2",
    description: "Essential libraries for data manipulation and analysis",
    topics: ["NumPy Arrays", "Pandas DataFrames", "Data Cleaning", "Exploratory Analysis", "Visualization with Matplotlib"],
  },
  {
    id: "module-3",
    title: "Machine Learning Basics",
    duration: "Week 3",
    description: "Introduction to ML concepts and scikit-learn",
    topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Scikit-learn Pipeline", "Cross-validation"],
  },
  {
    id: "module-4",
    title: "Deep Learning Introduction",
    duration: "Week 4",
    description: "Neural networks and deep learning fundamentals",
    topics: ["Neural Network Architecture", "Backpropagation", "PyTorch Basics", "Training Loops", "Model Saving"],
  },
  {
    id: "module-5",
    title: "NLP & Transformers",
    duration: "Week 5",
    description: "Natural language processing and transformer models",
    topics: ["Text Preprocessing", "Tokenization", "BERT Basics", "HuggingFace", "Fine-tuning"],
  },
  {
    id: "module-6",
    title: "MLOps Introduction",
    duration: "Week 6",
    description: "Deploying and monitoring ML models",
    topics: ["Docker for ML", "REST APIs with FastAPI", "Model Serving", "Monitoring Basics", "CI/CD for ML"],
  },
  {
    id: "module-7",
    title: "Cloud & Infrastructure",
    duration: "Week 7",
    description: "Cloud platforms and infrastructure for AI",
    topics: ["AWS/GCP/Azure Overview", "S3 & Blob Storage", "Compute Instances", "Managed ML Services", "Cost Optimization"],
  },
  {
    id: "module-8",
    title: "LLM Application Development",
    duration: "Week 8",
    description: "Building applications with Large Language Models",
    topics: ["OpenAI API", "LangChain", "RAG Systems", "Prompt Engineering", "LLM Evaluation"],
  },
  {
    id: "module-9",
    title: "Vector Databases",
    duration: "Week 9",
    description: "Semantic search and vector store integration",
    topics: ["Embeddings", "Pinecone / ChromaDB", "Similarity Search", "Hybrid Search", "Indexing Strategies"],
  },
  {
    id: "module-10",
    title: "AI Agents & Automation",
    duration: "Week 10",
    description: "Building autonomous AI agents",
    topics: ["ReAct Framework", "Tool Use", "LangGraph", "AutoGPT Concepts", "Multi-agent Systems"],
  },
  {
    id: "module-11",
    title: "System Design for AI",
    duration: "Week 11",
    description: "Scalable architecture for AI-powered systems",
    topics: ["Microservices", "Message Queues", "Caching", "Load Balancing", "Database Design"],
  },
  {
    id: "module-12",
    title: "Security & Ethics in AI",
    duration: "Week 12",
    description: "Responsible AI development and security",
    topics: ["AI Ethics", "Bias & Fairness", "Data Privacy", "Model Security", "Compliance"],
  },
  {
    id: "module-13",
    title: "Advanced MLOps",
    duration: "Week 13",
    description: "Production ML pipelines and monitoring",
    topics: ["MLflow", "Kubeflow", "Model Registry", "A/B Testing", "Drift Detection"],
  },
  {
    id: "module-14",
    title: "Terraform & IaC",
    duration: "Week 14",
    description: "Infrastructure as code for AI systems",
    topics: ["Terraform Basics", "Modules", "State Management", "Cloud Provisioning", "GitOps"],
  },
  {
    id: "module-15",
    title: "Kubernetes for AI",
    duration: "Week 15",
    description: "Container orchestration for ML workloads",
    topics: ["K8s Basics", "GPU Workloads", "Helm Charts", "Horizontal Scaling", "Service Mesh"],
  },
  {
    id: "module-16",
    title: "Capstone Project",
    duration: "Week 16",
    description: "End-to-end AI engineering project",
    topics: ["Project Planning", "Architecture Design", "Implementation", "Testing", "Deployment & Demo"],
  },
];

export const bridgeCourseInfo = {
  title: "Bridge Course: Python to AI Engineering",
  subtitle: "Fast-track from Python basics to production AI systems in 16 weeks",
  totalDuration: "16 Weeks",
  totalModules: 16,
  level: "Beginner to Intermediate",
  description: "A comprehensive bridge course designed to take you from Python fundamentals all the way to building and deploying production-grade AI systems. Each module builds on the previous, ensuring a solid foundation.",
};
