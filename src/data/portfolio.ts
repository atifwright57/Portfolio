export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ExperienceEntry {
  company: string;
  title: string;
  dates: string;
  summary: string;
  highlights: string[];
  current?: boolean;
}

export interface ProjectEntry {
  title: string;
  category: string;
  problem: string;
  architecture: string;
  contribution: string;
  challenges: string[];
  technologies: string[];
  flow: string[];
  outcome?: string;
}

export const portfolio = {
  name: "Atif Wright",
  monogram: "AW",
  location: "Springfield, Virginia",
  headline:
    "Lead Data Engineer | Data Platforms | Lakehouse Architecture | Streaming | Cloud Data Engineering",
  intro:
    "I design and operate production data systems that turn complex, distributed source data into dependable, governed foundations for analytics, machine learning, and operational decisions.",
  summary:
    "Lead Data Engineer with 11+ years of experience across healthcare technology, insurance analytics, legal technology, and location intelligence. Hands-on across cloud data platforms, batch and near-real-time pipelines, lakehouse architecture, data quality, governance, observability, and production reliability.",
  philosophy:
    "Good data platforms are built for the people who depend on them: secure by design, explicit about quality, observable in production, and maintainable as systems and teams evolve.",
  email: "atifwright57@gmail.com",
  github: "https://github.com/atifwright",
  linkedin: "",
  targetRoles: ["Senior Data Engineer", "Lead Data Engineer", "Staff Data Engineer"],
  skills: [
    {
      title: "Programming & query languages",
      skills: ["Python", "SQL", "PySpark"],
    },
    {
      title: "Distributed processing",
      skills: ["Apache Spark", "Spark Structured Streaming", "Distributed data processing"],
    },
    {
      title: "Cloud platforms",
      skills: ["AWS", "Amazon S3", "Cloud data platforms"],
    },
    {
      title: "Warehousing & lakehouse",
      skills: ["Snowflake", "Databricks", "Amazon Redshift", "Data lakes", "Lakehouse architecture"],
    },
    {
      title: "Streaming & orchestration",
      skills: ["Apache Kafka", "Apache Airflow", "Event-driven pipelines"],
    },
    {
      title: "Transformation & infrastructure",
      skills: ["dbt", "ETL / ELT", "Terraform", "GitHub Actions", "CI/CD"],
    },
    {
      title: "Quality, governance & modeling",
      skills: [
        "Data modeling",
        "Data validation",
        "Reconciliation",
        "Data lineage",
        "RBAC",
        "PII / PHI handling",
        "Freshness monitoring",
      ],
    },
    {
      title: "Databases, search & ML data",
      skills: ["PostgreSQL", "Elasticsearch", "Feature engineering", "Curated training data"],
    },
  ] satisfies SkillGroup[],
  experience: [
    {
      company: "Formation Bio",
      title: "Lead Data Engineer, Contract",
      dates: "2024 — Present",
      summary: "Healthcare technology · Analytics, machine learning & AI data platforms",
      current: true,
      highlights: [
        "Architect production data platforms and batch / near-real-time pipelines for analytics, machine learning, AI-driven products, and operational decision-making.",
        "Build governed ingestion, reusable Snowflake and Databricks models, and dbt transformation workflows with testing and documentation.",
        "Establish data quality, RBAC, PII handling, lineage, and environment-specific access controls.",
        "Automate infrastructure and delivery with Terraform, GitHub Actions, CI/CD, and repeatable testing; optimize platform performance and cost efficiency.",
      ],
    },
    {
      company: "Asset Protection Unit, Inc. (APU)",
      title: "Senior Data Engineer, Contract",
      dates: "2021 — 2024",
      summary: "Insurance analytics · Claims, payments & overpayment recovery",
      highlights: [
        "Develop high-volume ingestion and analytical pipelines for claims, payments, providers, and external datasets.",
        "Transform and model claims data for matching, reconciliation, recovery workflows, reporting, and operational analysis.",
        "Implement quality checks for completeness, consistency, duplicates, reconciliation, schema validation, and pipeline failures.",
        "Improve production reliability through SQL and processing optimization, monitoring, recovery patterns, code reviews, and reusable engineering practices.",
      ],
    },
    {
      company: "Nextpoint",
      title: "Data Engineer",
      dates: "2018 — 2021",
      summary: "Legal technology · eDiscovery, document processing & search",
      highlights: [
        "Build ingestion and processing workflows for structured and unstructured documents across sources and customer environments.",
        "Normalize and enrich document metadata for search, classification, review, analytics, and downstream processing.",
        "Develop Elasticsearch-backed search pipelines and data models for document metadata, case information, and review workflows.",
        "Apply validation, deduplication, and production reliability practices across large document and metadata workloads.",
      ],
    },
    {
      company: "Unacast",
      title: "Associate Data Engineer",
      dates: "2015 — 2018",
      summary: "Location intelligence · Mobility & geospatial data",
      highlights: [
        "Build pipelines for large-scale location, mobility, and geospatial datasets from cloud services, databases, APIs, and external sources.",
        "Transform raw location data with Python, SQL, and Spark for analytical workloads.",
        "Develop Snowflake data models for mobility analytics, aggregation, segmentation, and downstream data products.",
        "Implement data cleaning, normalization, deduplication, validation, aggregation, quality checks, and workload optimization.",
      ],
    },
  ] satisfies ExperienceEntry[],
  projects: [
    {
      title: "Enterprise Data Integration Platform",
      category: "Resume-listed project area",
      problem:
        "Bring APIs, databases, files, and external sources into governed analytical datasets using a reusable integration pattern.",
      architecture:
        "An illustrative flow from source connectors through validation and transformation into governed analytical datasets.",
      contribution:
        "The resume describes reusable ingestion and transformation components with validation, reconciliation, monitoring, and recovery patterns.",
      challenges: ["Heterogeneous source formats", "Schema and data validation", "Reconciliation and recoverable processing"],
      technologies: ["Python", "SQL", "Cloud data platforms", "Data validation"],
      flow: ["APIs & files", "Ingestion", "Validate & transform", "Governed datasets"],
    },
    {
      title: "Data Quality & Observability Framework",
      category: "Resume-listed project area",
      problem:
        "Make pipeline health and dataset quality visible across critical production data workflows.",
      architecture:
        "An illustrative quality and monitoring layer around ingestion, transformation, and analytical data products.",
      contribution:
        "The resume describes schema, completeness, freshness, reconciliation, anomaly, failure alerting, and SLA monitoring controls.",
      challenges: ["Freshness and completeness signals", "Anomaly and failure detection", "Operational alerting and SLAs"],
      technologies: ["Schema validation", "Reconciliation", "Observability", "SLA monitoring"],
      flow: ["Data pipelines", "Quality checks", "Monitor & alert", "Reliable datasets"],
    },
    {
      title: "Customer & Transaction Analytics Platform",
      category: "Resume-listed project area",
      problem:
        "Combine customer, transaction, operational, and third-party data into analytical models for reporting and downstream use.",
      architecture:
        "An illustrative integration and modeling flow that prepares subject-area datasets for analytical consumers.",
      contribution:
        "The resume describes integrated analytical data models supporting reporting, business analytics, segmentation, and predictive workloads.",
      challenges: ["Combining multiple subject areas", "Consistent analytical models", "Preparing data for varied consumers"],
      technologies: ["Data integration", "Dimensional modeling", "Analytical datasets", "Predictive analytics"],
      flow: ["Source domains", "Integrate", "Model & curate", "Analytics & prediction"],
    },
    {
      title: "Production DataOps & CI/CD Framework",
      category: "Resume-listed project area",
      problem:
        "Make pipeline and transformation delivery repeatable across environments with automated checks and infrastructure management.",
      architecture:
        "An illustrative delivery flow connecting version control, CI checks, infrastructure as code, and deployment.",
      contribution:
        "The resume describes Terraform-based infrastructure and GitHub Actions workflows for testing, deployment, environment management, and repeatable delivery.",
      challenges: ["Repeatable environments", "Automated testing and delivery", "Consistent infrastructure changes"],
      technologies: ["Terraform", "GitHub Actions", "CI/CD", "Automated testing"],
      flow: ["Git changes", "Automated tests", "Terraform & CI/CD", "Data workloads"],
    },
  ] satisfies ProjectEntry[],
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "",
    graduationDate: "",
  },
  certifications: [] as string[],
  contentNotes: [
    "Name and contact details are transcribed from the supplied resume.",
    "Employment dates, titles, summaries, and project areas are based on the supplied resume.",
    "The resume lists project areas but does not specify employer attribution or whether these were personal projects.",
    "Project architecture diagrams are illustrative, not verified production architectures.",
    "Project-level outcomes and metrics, education institution and date, certifications, and LinkedIn URL were not provided in the resume.",
  ],
};
