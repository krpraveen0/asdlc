export interface Phase {
  id: string;
  title: string;
  weeks: Week[];
}

export interface Week {
  id: string;
  weekNumber: number | string;
  title: string;
  topics: string[];
  deliverables: string[];
}

export const aiEngineeringCurriculum: Phase[] = [
  {
    id: "phase-1",
    title: "Phase 1: Foundations & Core Engineering",
    weeks: [
      {
        id: "week-1",
        weekNumber: 1,
        title: "Python & Software Engineering Best Practices",
        topics: [
          "Advanced Python (decorators, generators, context managers)",
          "Design patterns for ML systems",
          "Code quality: linting, formatting, type hints",
          "Git workflows for AI projects",
        ],
        deliverables: ["Clean Python codebase", "Pre-commit hooks setup", "Type-annotated utility library"],
      },
      {
        id: "week-2",
        weekNumber: 2,
        title: "Data Engineering Foundations",
        topics: [
          "Data pipelines with Apache Airflow",
          "dbt for data transformation",
          "Streaming data with Kafka basics",
          "Data quality and validation",
        ],
        deliverables: ["Airflow DAG", "dbt project", "Data validation suite"],
      },
      {
        id: "week-3",
        weekNumber: 3,
        title: "ML Engineering with PyTorch",
        topics: [
          "Advanced PyTorch: custom datasets, distributed training",
          "Mixed precision training",
          "Model optimization techniques",
          "Experiment tracking with MLflow",
        ],
        deliverables: ["Training pipeline", "Experiment tracker", "Model optimization report"],
      },
      {
        id: "week-4",
        weekNumber: 4,
        title: "LLM Fundamentals & APIs",
        topics: [
          "Transformer architecture deep dive",
          "OpenAI, Anthropic, Google APIs",
          "Prompt engineering patterns",
          "Token optimization strategies",
        ],
        deliverables: ["LLM API wrapper", "Prompt library", "Cost analysis tool"],
      },
    ],
  },
  {
    id: "phase-2",
    title: "Phase 2: LLM Applications & RAG",
    weeks: [
      {
        id: "week-5",
        weekNumber: 5,
        title: "RAG Systems Architecture",
        topics: [
          "Document processing pipeline",
          "Chunking strategies",
          "Embedding models comparison",
          "Vector database selection",
        ],
        deliverables: ["RAG pipeline", "Chunking benchmarks", "Embedding comparison report"],
      },
      {
        id: "week-6",
        weekNumber: 6,
        title: "Vector Databases & Semantic Search",
        topics: [
          "Pinecone, Weaviate, ChromaDB",
          "Hybrid search (dense + sparse)",
          "HNSW indexing",
          "Query optimization",
        ],
        deliverables: ["Production vector store", "Search quality metrics", "Index optimization guide"],
      },
      {
        id: "week-7",
        weekNumber: 7,
        title: "LangChain & LangGraph",
        topics: [
          "LangChain chains and agents",
          "LangGraph for stateful agents",
          "Memory systems",
          "Tool integration patterns",
        ],
        deliverables: ["Multi-turn chatbot", "Stateful agent", "Tool-use demo"],
      },
      {
        id: "week-8",
        weekNumber: 8,
        title: "Fine-tuning & PEFT",
        topics: [
          "LoRA, QLoRA fine-tuning",
          "Dataset preparation",
          "Hugging Face TRL",
          "Evaluation metrics for LLMs",
        ],
        deliverables: ["Fine-tuned model", "Training notebook", "Evaluation report"],
      },
    ],
  },
  {
    id: "phase-3",
    title: "Phase 3: Production Infrastructure",
    weeks: [
      {
        id: "week-9",
        weekNumber: 9,
        title: "Docker & Container Orchestration",
        topics: [
          "Multi-stage Docker builds",
          "Docker Compose for dev",
          "Kubernetes fundamentals",
          "Helm charts for ML",
        ],
        deliverables: ["Dockerized ML service", "K8s manifests", "Helm chart"],
      },
      {
        id: "week-10",
        weekNumber: 10,
        title: "Terraform & Cloud Infrastructure",
        topics: [
          "Terraform modules for AI infra",
          "AWS/GCP cloud setup",
          "GPU instance provisioning",
          "Cost management strategies",
        ],
        deliverables: ["Terraform modules", "Cloud infrastructure", "Cost dashboard"],
      },
      {
        id: "week-11",
        weekNumber: 11,
        title: "CI/CD for ML Systems",
        topics: [
          "GitHub Actions for ML",
          "Automated testing for models",
          "Model deployment pipelines",
          "Environment management",
        ],
        deliverables: ["ML CI/CD pipeline", "Automated tests", "Deployment runbook"],
      },
      {
        id: "week-12",
        weekNumber: 12,
        title: "Model Serving & APIs",
        topics: [
          "FastAPI for model serving",
          "gRPC for low-latency inference",
          "Batching strategies",
          "NVIDIA Triton Server",
        ],
        deliverables: ["Production API", "gRPC service", "Benchmarking report"],
      },
    ],
  },
  {
    id: "phase-4",
    title: "Phase 4: MLOps & Monitoring",
    weeks: [
      {
        id: "week-13",
        weekNumber: 13,
        title: "MLOps with MLflow & Kubeflow",
        topics: [
          "MLflow tracking and registry",
          "Kubeflow Pipelines",
          "Automated retraining",
          "Model versioning strategies",
        ],
        deliverables: ["MLflow setup", "Kubeflow pipeline", "Retraining workflow"],
      },
      {
        id: "week-14",
        weekNumber: 14,
        title: "Observability & Monitoring",
        topics: [
          "Prometheus & Grafana",
          "LLM output monitoring",
          "Data drift detection",
          "Alerting systems",
        ],
        deliverables: ["Monitoring stack", "LLM dashboard", "Alert policies"],
      },
      {
        id: "week-15",
        weekNumber: 15,
        title: "Security & Compliance",
        topics: [
          "LLM security (prompt injection, jailbreaks)",
          "Data privacy (GDPR, CCPA)",
          "API security",
          "Audit logging",
        ],
        deliverables: ["Security assessment", "Privacy controls", "Audit system"],
      },
      {
        id: "week-16",
        weekNumber: 16,
        title: "System Design for AI at Scale",
        topics: [
          "Distributed AI systems",
          "Caching strategies for LLMs",
          "Rate limiting and queuing",
          "Multi-region deployment",
        ],
        deliverables: ["System design doc", "Architecture diagrams", "Scale testing report"],
      },
    ],
  },
  {
    id: "phase-5",
    title: "Phase 5: Capstone & Advanced Topics",
    weeks: [
      {
        id: "week-17",
        weekNumber: 17,
        title: "Multimodal AI Systems",
        topics: [
          "Vision-Language Models",
          "Audio processing with Whisper",
          "Multimodal RAG",
          "Cross-modal search",
        ],
        deliverables: ["Multimodal app", "VLM integration", "Cross-modal demo"],
      },
      {
        id: "week-18",
        weekNumber: 18,
        title: "AI Agents & Automation",
        topics: [
          "Autonomous agent architectures",
          "Multi-agent frameworks (CrewAI, AutoGen)",
          "Tool & plugin ecosystems",
          "Agent evaluation",
        ],
        deliverables: ["Autonomous agent", "Multi-agent system", "Evaluation framework"],
      },
      {
        id: "week-19",
        weekNumber: 19,
        title: "Advanced RAG & Knowledge Systems",
        topics: [
          "GraphRAG",
          "Knowledge graphs",
          "Agentic RAG",
          "Long-context strategies",
        ],
        deliverables: ["GraphRAG system", "Knowledge graph", "Advanced RAG demo"],
      },
      {
        id: "week-20",
        weekNumber: 20,
        title: "LLMOps & Evaluation",
        topics: [
          "LLM evaluation frameworks (RAGAS, DeepEval)",
          "Red-teaming LLMs",
          "Continuous evaluation pipelines",
          "Quality metrics",
        ],
        deliverables: ["Evaluation pipeline", "Red-team report", "Quality dashboard"],
      },
      {
        id: "week-21",
        weekNumber: "21-22",
        title: "Capstone Project",
        topics: [
          "End-to-end AI product design",
          "Production deployment",
          "Documentation & presentation",
          "Code review & handoff",
        ],
        deliverables: ["Production AI application", "Technical documentation", "Demo presentation", "GitHub portfolio"],
      },
    ],
  },
];
