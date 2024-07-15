export interface dataProps {
  title: String;
  points: String[];
}

export const dataOne = {
  title: "Security & Data Protection",
  points: [
    "Data is encrypted with AES-256 at rest and in transit with TLS",
    "Regular penetration testing and security audits",
    "SOC 2 Type II and ISO 27001 certifications pending",
    "Regular security training for all employees",
    "SAML SSO",
  ],
};

export const dataTwo = {
  title: "Data & Workflow Privacy",
  points: [
    "No usage of customer data for training or model improvement",
    "Private and custom LLMs for each customer",
    "Access controls and granular permissions for users",
    "Background checks for all employees",
  ],
};

export const dataThree = {
  title: "Security & Data Protection",
  points: [
    "Cloud hosting (AWS, Azure, GCP) options for rapid deployment",
    "On-premises deployment onto dedicated hardware or VMs",
    "SOC 2 Type II and ISO 27001 certifications pending",
    "Hybrid cloud deployment into your existing infrastructure",
  ],
};
