// All site copy and links live here, so edits never mean digging through components.

export const site = {
  name: "Kehinde Abiuwa",
  role: "Cloud Engineer & Solutions Architect",
  location: "United Kingdom",
  email: "abiuwakehinde96@outlook.com",
  linkedin: "https://www.linkedin.com/in/kehinde-abiuwa-b68087247",
  github: "https://github.com/kehindeabiuwa-dotcom",
  devto: "https://dev.to/kehindeabiuwadotcom",
  portfolioRepo: "https://github.com/kehindeabiuwa-dotcom/cloud-portfolio",
  /**
   * Set to true once a public copy of the CV is saved at /public/cv/kehinde-abiuwa-cv.pdf.
   * While false, the CV buttons open an email asking for it instead of linking to a missing file.
   */
  cvAvailable: false,
  cvPath: "/cv/kehinde-abiuwa-cv.pdf",
};

export const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

export const cvLink = site.cvAvailable ? site.cvPath : mailto("CV request");

export const nav = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "Lab", href: "/lab" },
  { label: "Recognition", href: "/recognition" },
];

/** Page headers: one place for each page's title, intro and background photo. */
export const pages = {
  about: {
    eyebrow: "About",
    title: "I learned cloud by fixing it first.",
    accent: "fixing it",
    intro:
      "I still build with the instinct I picked up on the support desk: assume something will break, and make sure it is easy to see and easy to undo when it does.",
    image: "/images/seated-suit.jpg",
    alt: "Kehinde Abiuwa seated on a stool in a black suit",
    position: "50% 0%",
  },
  work: {
    eyebrow: "Selected work",
    title: "Platform work, told plainly.",
    accent: "told plainly",
    intro:
      "Most of what I build sits behind client agreements, so the names stay out. The problems, the decisions and the results are real, and each one comes from my time at Achel Group between 2023 and 2025.",
    image: "/images/portrait-suit.jpg",
    alt: "Kehinde Abiuwa in a dark suit jacket",
    position: "50% 0%",
  },
  experience: {
    eyebrow: "Experience",
    title: "From the support desk to the whiteboard",
    accent: "to the whiteboard",
    intro:
      "Since 2018 I have worked every layer of the job: answering the incident, fixing the platform, and deciding what the platform should look like in the first place.",
    image: "/images/portrait-cream.jpg",
    alt: "Kehinde Abiuwa in a cream polo with his arms folded",
    position: "50% 0%",
  },
  lab: {
    eyebrow: "Lab notebook",
    title: "I keep learning in public",
    accent: "in public",
    intro:
      "Outside client work I keep a public notebook of hands-on builds. Many start from NextWork's guided project library, and every write-up covers what I built, the choices I made and what broke along the way. It is how I stay sharp on services I do not touch every week.",
    image: "/images/side-arms.jpg",
    alt: "Kehinde Abiuwa standing side-on with his arms folded",
    position: "55% 0%",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Noticed along the way",
    accent: "along the way",
    intro:
      "An industry award, two pieces of independent press coverage and the certifications behind the work. None of it is the reason I do the job, but all of it is nice to point to.",
    image: "/images/portrait-chin.jpg",
    alt: "Kehinde Abiuwa resting his chin on his fist",
    position: "50% 0%",
  },
} as const;

export const stats = [
  { value: "5+", label: "years building and running cloud platforms on AWS and Azure" },
  { value: "40%", label: "faster infrastructure lead time after standardising Terraform" },
  { value: "Minutes", label: "to roll back a bad release. It used to take hours" },
  { value: "<1 day", label: "to bring a new service onto ECS, checks included" },
];

export const credentials = [
  "AWS Certified Solutions Architect – Professional",
  "Azure Solutions Architect Expert",
  "Emerging Cloud Architect of the Year 2023",
];

export const about = [
  "My first cloud job, back in 2018, was on an Azure support desk. It is an underrated place to start. For three and a half years I triaged incidents, wrote root-cause reports and ran restore tests, and I learned that most outages are not clever. They are an alert nobody tuned, a permission nobody reviewed, or a change that went out with no way back.",
  "That has shaped how I build ever since. After an MBA at the University of the West of Scotland, I joined Achel Group in the UK as a Cloud Engineer and worked on the AWS platform itself: landing zones, EKS clusters, pipelines and golden images. A year later I stepped into the Solutions Architect role, which meant more time with product and leadership teams, agreeing what should be built before anyone opened a Terraform file.",
  "I am comfortable at a whiteboard and in a pull request, and I think the best architects need to be both. What I care about is the unglamorous work that makes a platform easy to live with: guardrails that catch mistakes early, releases you can undo in minutes, and a monthly bill the finance team can actually read.",
];

export const aboutFacts = [
  { k: "Based in", v: "United Kingdom" },
  { k: "Clouds", v: "AWS and Azure" },
  { k: "Works", v: "Hybrid or remote" },
];

export type Tool = { name: string; icon: string };

export const toolsRowOne: Tool[] = [
  { name: "AWS", icon: "amazonwebservices" },
  { name: "Microsoft Azure", icon: "azure" },
  { name: "Google Cloud", icon: "googlecloud" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "Terraform", icon: "terraform" },
  { name: "Docker", icon: "docker" },
  { name: "Helm", icon: "helm" },
  { name: "Ansible", icon: "ansible" },
  { name: "Red Hat", icon: "redhat" },
  { name: "Ubuntu", icon: "ubuntu" },
  { name: "Linux", icon: "linux" },
];

export const toolsRowTwo: Tool[] = [
  { name: "GitLab CI", icon: "gitlab" },
  { name: "GitHub Actions", icon: "githubactions" },
  { name: "Jenkins", icon: "jenkins" },
  { name: "Azure DevOps", icon: "azuredevops" },
  { name: "Prometheus", icon: "prometheus" },
  { name: "Grafana", icon: "grafana" },
  { name: "Elasticsearch", icon: "elasticsearch" },
  { name: "Python", icon: "python" },
  { name: "Bash", icon: "bash" },
  { name: "PowerShell", icon: "powershell" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Jira", icon: "jira" },
];

export type CaseStudy = {
  no: string;
  title: string;
  period: string;
  problem: string;
  approach: string;
  metric: string;
  result: string;
  stack: string[];
};

export const work: CaseStudy[] = [
  {
    no: "01",
    title: "A multi-account AWS foundation teams could build on",
    period: "Achel Group · 2024 – 2025",
    problem:
      "Teams needed new AWS accounts quickly, and every new account was one more place for a security gap to hide.",
    approach:
      "I designed the landing zone with AWS Organizations and Control Tower and set up account vending, so a new account arrived with its networking, IAM and logging already in place. Service control policies stopped risky changes at the organisation level. Connectivity ran through Transit Gateway, with Direct Connect and site-to-site VPN for the hybrid links, and every account sent its logs to a central security account watched by Security Hub, GuardDuty and AWS Config.",
    metric: "Day one",
    result: "New workloads start life in a compliant account, rather than being cleaned up after the fact.",
    stack: ["Organizations", "Control Tower", "SCPs", "Transit Gateway", "Direct Connect", "Security Hub", "GuardDuty"],
  },
  {
    no: "02",
    title: "Infrastructure as Code that people actually trust",
    period: "Achel Group · Nov 2023 – May 2025",
    problem:
      "Infrastructure changes were slower than they should have been, hard to audit, and environments had a habit of drifting apart.",
    approach:
      "I built a library of reusable Terraform modules for VPCs, EKS and ECS, Aurora, S3 and WAF, each with pinned versions and clear inputs and outputs, and kept CloudFormation where it made more sense. Every change went through the same gate: format, validate, plan, a human approval, then apply. Scheduled drift checks flagged anything that had been changed by hand.",
    metric: "40%+",
    result: "Faster infrastructure lead time, every change auditable, and fewer changes failing in production.",
    stack: ["Terraform", "CloudFormation", "GitLab CI", "EKS", "Aurora", "WAF"],
  },
  {
    no: "03",
    title: "Releases you can take back",
    period: "Achel Group · Feb – Sep 2024",
    problem:
      "When a release went wrong, rolling it back took hours. That makes people nervous about shipping at all.",
    approach:
      "I standardised the pipelines across GitLab CI, AWS CodePipeline, Jenkins and GitHub Actions. Each one ran unit and integration tests, scanned container images, checked the SBOM, and released with blue/green or canary deployments, so a bad version could be switched off without drama.",
    metric: "Hours → minutes",
    result: "Rollback time came down from hours to minutes, and releases went out more often because they felt safe.",
    stack: ["GitLab CI", "CodePipeline", "CodeDeploy", "Jenkins", "GitHub Actions", "Blue/green", "Canary"],
  },
  {
    no: "04",
    title: "Microservices on ECS Fargate, with the supply chain locked down",
    period: "Achel Group · Jan – Jun 2025",
    problem:
      "Getting a new service from a Dockerfile into production took too long, and there was not enough control over what went into the images.",
    approach:
      "I containerised the services and designed them on ECS, using Fargate and EC2 where each fitted best. I wrote the task definitions with autoscaling and least-privilege IAM roles, and put artifact governance in front of everything with CodeArtifact and ACR, so vulnerable packages were blocked in CI before they could ship.",
    metric: "<1 day",
    result: "A new service can be onboarded in under a day, with supply-chain checks built in rather than bolted on.",
    stack: ["Docker", "ECS Fargate", "CodeArtifact", "ACR", "IAM", "SBOM"],
  },
];

export const services = [
  {
    title: "Cloud foundations",
    body: "A multi-account AWS setup done properly the first time: Organizations, Control Tower, account vending, guardrails, and a network you will not need to redo in a year.",
  },
  {
    title: "Architecture reviews",
    body: "A Well-Architected review that is honest about cost, security and reliability. You get a short list of fixes ranked by what they are worth, not a ninety-page report.",
  },
  {
    title: "Migrations",
    body: "Moving workloads into AWS with MGN, backed by cutover runbooks, rollback plans and proper dry runs, so the migration weekend is a quiet one.",
  },
  {
    title: "Delivery pipelines",
    body: "CI/CD with tests, image scanning and blue/green or canary releases, built on what you already use, whether that is GitLab, GitHub Actions, Jenkins or CodePipeline.",
  },
  {
    title: "Containers and Kubernetes",
    body: "EKS and ECS platforms with sensible defaults for scaling, access and observability, kept tidy with Helm and GitOps.",
  },
  {
    title: "Cost clean-up",
    body: "Rightsizing, Savings Plans and storage lifecycle rules, plus dashboards that show each team what it is spending and why.",
  },
];

export const experience = [
  {
    period: "Sep 2024 – Jun 2025",
    role: "Solutions Architect",
    org: "Achel Group",
    place: "United Kingdom · Hybrid",
    body: "Worked with product and leadership teams on cloud strategy and turned their requirements into reference architectures and migration plans. Designed multi-account landing zones and core networking, set the DevOps standards for branching, testing and approvals, ran Well-Architected reviews and led migrations with AWS MGN. I also ran architecture clinics and mentored engineers on Terraform, Ansible and Kubernetes.",
  },
  {
    period: "Aug 2023 – Sep 2024",
    role: "Cloud Engineer",
    org: "Achel Group",
    place: "United Kingdom · Hybrid",
    body: "Built and ran AWS platform services across multiple accounts. Provisioned production EKS clusters, standardised Terraform modules and Ansible roles, built CI/CD with image scanning and progressive delivery, moved relational workloads onto Aurora, and pulled observability together in CloudWatch, Prometheus and Grafana to bring recovery times down.",
  },
  {
    period: "Aug 2018 – Jan 2022",
    role: "Cloud Support Engineer",
    org: "GIGMO Solutions Ltd",
    place: "Lagos, Nigeria",
    body: "First- and second-line support across Azure workloads: triage, root-cause analysis and restores within SLA. I looked after Azure AD, RBAC and conditional access, tuned Azure Monitor alerts until they stopped crying wolf, delivered infrastructure with Terraform and ARM through Azure DevOps, and tested backup and recovery with Recovery Services Vault.",
  },
];

export const education = [
  {
    degree: "Master of Business Administration (MBA)",
    school: "University of the West of Scotland",
    period: "Feb 2022 – Jun 2023",
    place: "United Kingdom",
    body: "Taken between my support years and my move into engineering. It is the reason I am at ease talking budgets, risk and trade-offs with people who will never read a line of Terraform.",
  },
  {
    degree: "BSc Business Administration",
    school: "University of Lagos",
    period: "Aug 2013 – Jun 2017",
    place: "Lagos, Nigeria",
    body: "My first degree. It gave me the business grounding that, a year later, I started pairing with hands-on cloud work on the Azure support desk.",
  },
];

export type Lab = { title: string; topic: string; path: string };

const repo = "https://github.com/kehindeabiuwa-dotcom/cloud-portfolio/blob/main/";
const lab = (topic: string, title: string, path: string): Lab => ({ topic, title, path: repo + path });

export const labs: Lab[] = [
  lab("Serverless", "Website delivery with CloudFront", "THREE-TIER%20SERIES/Part%201%20-%20Website%20Delviery%20with%20CloudFront.pdf"),
  lab("Serverless", "APIs with Lambda and API Gateway", "THREE-TIER%20SERIES/Part%202%20-%20APIs%20with%20Lambda%20%2B%20API%20Gateway.pdf"),
  lab("Serverless", "Fetching data with AWS Lambda", "THREE-TIER%20SERIES/Part%203%20-%20Fetch%20Data%20with%20AWS%20Lambda.pdf"),
  lab("Serverless", "Building a three-tier web app", "THREE-TIER%20SERIES/Part%204%20-%20Build%20a%20Three-Tier%20Web%20App.pdf"),
  lab("DevOps & IaC", "A web app on EC2 with VS Code", "DevOps,%20IaC%20%26%20CI%3ACD%20Pipelines/PART%201%20-%20Set%20up%20a%20web%20app%20using%20AWS%20%26%20VS%20Code.pdf"),
  lab("DevOps & IaC", "Connecting GitHub to AWS", "DevOps,%20IaC%20%26%20CI%3ACD%20Pipelines/PART%202%20-%20Connect%20Github%20Repo%20with%20AWS.pdf"),
  lab("DevOps & IaC", "Securing packages with CodeArtifact", "DevOps,%20IaC%20%26%20CI%3ACD%20Pipelines/PART%203%20-%20Secure%20Packages%20with%20CodeArtifact.pdf"),
  lab("DevOps & IaC", "Continuous integration with CodeBuild", "DevOps,%20IaC%20%26%20CI%3ACD%20Pipelines/PART%204%20-%20Continuous%20Integration%20with%20CodeBuild.pdf"),
  lab("DevOps & IaC", "Deploying with CodeDeploy", "DevOps,%20IaC%20%26%20CI%3ACD%20Pipelines/PART%205%20-%20Deploy%20a%20Web%20App%20with%20CodeDeploy.pdf"),
  lab("DevOps & IaC", "Infrastructure as Code with CloudFormation", "DevOps,%20IaC%20%26%20CI%3ACD%20Pipelines/PART%206%20-%20Infrastructure%20as%20Code%20(IaC)%20with%20CloudFormation.pdf"),
  lab("DevOps & IaC", "The full CI/CD pipeline", "DevOps,%20IaC%20%26%20CI%3ACD%20Pipelines/PART%207%20-%20Build%20a%20CI%3ACD%20Pipeline%20with%20AWS.pdf"),
  lab("DevOps & IaC", "S3 buckets with Terraform", "DevOps,%20IaC%20%26%20CI%3ACD%20Pipelines/CREATE%20S3%20BUCKETS%20WITH%20TERRAFORM.pdf"),
  lab("Kubernetes", "Launching a Kubernetes cluster", "KUBERNETES/PART%201%20-%20Launch%20a%20Kubernetes%20Cluster.pdf"),
  lab("Kubernetes", "Setting up a deployment", "KUBERNETES/PART%202%20-%20Set%20Up%20Kubernetes%20Deployment.pdf"),
  lab("Kubernetes", "Writing Kubernetes manifests", "KUBERNETES/PART%203%20-%20Create%20Kubernetes%20Manifests.pdf"),
  lab("Kubernetes", "Deploying a backend on Kubernetes", "KUBERNETES/PART%204%20-%20Deploy%20Backend%20with%20Kubernetes.pdf"),
  lab("Networking", "Building a VPC", "Networking/PART%201%20-%20Build%20a%20Virtual%20Private%20Cloud%20(VPC).pdf"),
  lab("Networking", "VPC traffic flow and security", "Networking/PART%202%20-%20VPC%20Traffic%20Flow%20and%20Security.pdf"),
  lab("Networking", "Creating a private subnet", "Networking/PART%203%20-%20Creating%20a%20Private%20Subnet.pdf"),
  lab("Networking", "Launching VPC resources", "Networking/PART%204%20-%20Launching%20VPC%20Resources.pdf"),
  lab("Networking", "Testing VPC connectivity", "Networking/PART%205%20-%20Testing%20VPC%20Connectivity.pdf"),
  lab("Networking", "VPC peering", "Networking/PART%206%20-%20VPC%20Peering.pdf"),
  lab("Networking", "Monitoring with VPC Flow Logs", "Networking/PART%207%20-%20VPC%20Monitoring%20with%20Flow%20Logs.pdf"),
  lab("Networking", "Reaching S3 from inside a VPC", "Networking/PART%208%20-%20Access%20S3%20from%20a%20VPC.pdf"),
  lab("Networking", "VPC endpoints", "Networking/PART%209%20-%20VPC%20Endpoints.pdf"),
  lab("Security", "Cloud security with IAM", "STORAGE,%20Web%20Hosting%20%26%20SECURITY/Cloud%20Security%20with%20AWS%20IAM.pdf"),
  lab("Security", "Encrypting data with KMS", "STORAGE,%20Web%20Hosting%20%26%20SECURITY/Encrypt%20Data%20with%20AWS%20KMS.pdf"),
  lab("Security", "Secrets with Secrets Manager", "STORAGE,%20Web%20Hosting%20%26%20SECURITY/Secure%20Secrets%20with%20AWS%20Secrets%20Manager.pdf"),
  lab("Security", "Threat detection with GuardDuty", "STORAGE,%20Web%20Hosting%20%26%20SECURITY/Threat%20Detection%20with%20GuardDuty.pdf"),
  lab("Security", "A security monitoring system", "STORAGE,%20Web%20Hosting%20%26%20SECURITY/Build%20a%20Security%20Monitoring%20System.pdf"),
  lab("Security", "Hosting a website on S3", "STORAGE,%20Web%20Hosting%20%26%20SECURITY/Host%20a%20website%20on%20Amazon%20S3.pdf"),
  lab("Data", "Visualising a relational database", "Data%20%26%20Databases/PART%201%20-%20Visualise%20a%20Relational%20Database.pdf"),
  lab("Data", "Connecting a web app to Aurora", "Data%20%26%20Databases/PART%202%20-%20Connect%20a%20web%20App%20to%20Amazon%20Aurora.pdf"),
  lab("Data", "Aurora, part two", "Data%20%26%20Databases/PART%203%20-%20Connect%20a%20web%20app%20to%20Amazon%20Aurora.pdf"),
  lab("Data", "Loading data into DynamoDB", "Data%20%26%20Databases/PART%204%20-%20Load%20Data%20into%20a%20DynamoDB%20Table.pdf"),
  lab("Data", "Querying DynamoDB", "Data%20%26%20Databases/PART%205%20-%20Query%20Data%20with%20DynamoDB.pdf"),
  lab("Data", "Dashboards with QuickSight", "ANALYTICS/VISUALIZE%20DATA%20WITH%20QUICKSIGHT.pdf"),
  lab("Containers", "Deploying an app with Docker", "Compute%20%26%20Containers/Deploy%20an%20App%20with%20Docker.pdf"),
  lab("Containers", "Deploying across multiple accounts", "Compute%20%26%20Containers/Deploy%20an%20App%20Across%20Multiple%20Accounts.pdf"),
  lab("Multi-cloud", "Moving data between AWS and GCP", "MULTI%20CLOUD%20SERIES/Multi-Cloud%20Data%20Transfer%20with%20AWS%20%26%20GCP.pdf"),
  lab("Foundations", "Setting up an AWS account properly", "Account%20Baselines/Set%20up%20an%20Account%20with%20AWS.pdf"),
];

export const featuredRepos = [
  {
    title: "Three-tier serverless app on AWS",
    body: "Private S3 behind CloudFront, Lambda behind API Gateway, and DynamoDB, with least-privilege IAM throughout. The whole stack deploys and tears down with a single CloudFormation command.",
    href: "https://github.com/kehindeabiuwa-dotcom/aws-three-tier-serverless",
    tags: ["S3", "CloudFront", "Lambda", "API Gateway", "DynamoDB"],
  },
  {
    title: "CI/CD pipeline on AWS",
    body: "One git push builds, tests and deploys a Java app to EC2 through CodePipeline, CodeBuild and CodeDeploy, with automatic rollback and the full stack defined in CloudFormation.",
    href: "https://github.com/kehindeabiuwa-dotcom/aws-cicd-pipeline",
    tags: ["CodePipeline", "CodeBuild", "CodeDeploy", "CloudFormation", "Terraform"],
  },
];

export const articles = [
  {
    part: "Part 1",
    title: "How I delivered a static website globally with S3 and CloudFront, and the security mistake I almost made",
    href: "https://dev.to/kehindeabiuwadotcom/how-i-delivered-a-static-website-globally-with-amazon-s3-and-cloudfront-and-the-security-mistake-i-2n38",
  },
  {
    part: "Part 2",
    title: "Building a serverless REST API with Lambda and API Gateway",
    href: "https://dev.to/kehindeabiuwadotcom/building-a-serverless-rest-api-with-aws-lambda-and-api-gateway-8df",
  },
  {
    part: "Part 3",
    title: "Least-privilege IAM for Lambda: why I replaced the AWS managed policy with my own",
    href: "https://dev.to/kehindeabiuwadotcom/least-privilege-iam-for-lambda-why-i-replaced-the-aws-managed-policy-with-my-own-9nh",
  },
  {
    part: "Part 4",
    title: "Wiring together a three-tier serverless app, and the CORS bug that broke everything",
    href: "https://dev.to/kehindeabiuwadotcom/wiring-together-a-three-tier-serverless-web-app-on-aws-and-the-cors-bug-that-broke-everything-1l1j",
  },
];

export const press = [
  {
    outlet: "Disrupt Africa",
    date: "25 November 2025",
    title: "GitHub has quietly emerged as the most important resume for cloud engineers",
    body: "After I spoke on an X Space about showing your work in public, Tom Jackson wrote a feature built around that idea, following my path from support desk to solutions architecture.",
    href: "https://disruptafrica.com/2025/11/25/github-has-quietly-emerged-as-the-most-important-resume-for-cloud-engineers/",
    image: "/images/press/disrupt-africa.png",
    imagePosition: "50% 100%",
    imageAlt: "Screenshot of the Disrupt Africa feature, showing Kehinde's portrait above the headline",
  },
  {
    outlet: "THISDAY",
    date: "22 July 2023",
    title: "Nigerian tech professional Kehinde Abiuwa wins Emerging Cloud Architect of the Year award",
    body: "Coverage of the Titans of Tech Awards dinner the night before, where I was named in the cloud architecture category.",
    href: "https://www.thisdaylive.com/2023/07/22/nigerian-tech-professional-kehinde-abiuwa-wins-emerging-cloud-architect-of-the-year-award/",
    image: "/images/press/thisday.png",
    imagePosition: "50% 0%",
    imageAlt: "Screenshot of the THISDAY article headline with Kehinde's portrait",
  },
];

export const certifications = [
  { name: "AWS Certified Solutions Architect – Professional", detail: "SAP-C02", date: "Aug 2025" },
  { name: "Microsoft Certified: Azure Solutions Architect Expert", detail: "AZ-305", date: "Aug 2025" },
  { name: "Scrum Master Accredited Certification", detail: "Scrum Institute", date: "Sep 2021" },
  { name: "Scrum Product Owner Accredited Certification", detail: "Scrum Institute", date: "Sep 2021" },
  { name: "Agile Coach Accredited Certification", detail: "Scrum Institute", date: "Sep 2021" },
];

export const awardLinks = {
  winners: "https://titansoftechawards.com/tot-2023-award-winners/",
};
