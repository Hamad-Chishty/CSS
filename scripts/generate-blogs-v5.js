const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const BLOG_CONFIGS = [
  {
    num: "41",
    title: "Ultimate Guide to ERP Software for Growing Businesses",
    slug: "ultimate-guide-erp-growing-businesses",
    category: "Enterprise Resource Planning",
    focusKeyword: "ERP Software Growing Businesses",
    metaTitle: "Ultimate Guide to ERP Software for Growing Businesses | CSS",
    metaDescription: "Struggling to scale your operations? Discover how a modern cloud ERP system streamlines workflows, breaks down data silos, and automates processes for growing businesses.",
    readingTime: "14 minutes",
    imageSuggestion: "A modern enterprise office with team members discussing metrics on a large wall-mounted screen showing ERP data visualizations and operational workflows.",
    altText: "Ultimate guide to ERP software for growing businesses showing data dashboards."
  },
  {
    num: "42",
    title: "Best ERP Software in Pakistan (Complete Buyer's Guide)",
    slug: "best-erp-software-pakistan",
    category: "Enterprise Resource Planning",
    focusKeyword: "Best ERP Software Pakistan",
    metaTitle: "Best ERP Software in Pakistan (Complete Buyer's Guide)",
    metaDescription: "Compare the leading ERP software in Pakistan. Evaluate key modules like manufacturing, local accounting (PRA/SRB/FBR tax filing), HRMS, and multi-branch management.",
    readingTime: "16 minutes",
    imageSuggestion: "A panoramic view of a modern corporate boardroom in Karachi with professionals analyzing business reports on tablets and a primary projector screen.",
    altText: "Best ERP software in Pakistan complete buyer's guide corporate boardroom."
  },
  {
    num: "43",
    title: "ERP vs Traditional Business Management: Which One Should You Choose?",
    slug: "erp-vs-traditional-business-management",
    category: "Business Process Automation",
    focusKeyword: "ERP vs Traditional Business Management",
    metaTitle: "ERP vs Traditional Business Management: Selection Guide",
    metaDescription: "Still relying on scattered spreadsheets and disconnected offline apps? Compare comprehensive ERP systems against traditional business management for your organization.",
    readingTime: "12 minutes",
    imageSuggestion: "A split illustration showing a frustrated business owner looking at massive stacks of paper folders vs a relaxed executive looking at a streamlined mobile ERP app.",
    altText: "ERP vs traditional business management comparison visual."
  },
  {
    num: "44",
    title: "How ERP Software Improves Business Productivity",
    slug: "how-erp-software-improves-business-productivity",
    category: "Business Process Automation",
    focusKeyword: "ERP Software Business Productivity",
    metaTitle: "How ERP Software Improves Business Productivity | CSS",
    metaDescription: "Discover how an integrated Enterprise Resource Planning system eliminates manual data entry, automates routine tasks, and boosts employee productivity by up to 40%.",
    readingTime: "11 minutes",
    imageSuggestion: "A vibrant team workspace showing employees in Islamabad collaborating happily with visual analytics, cloud systems, and real-time task flows.",
    altText: "Integrated ERP software improving business productivity and collaboration."
  },
  {
    num: "45",
    title: "Inventory Management with ERP Software",
    slug: "inventory-management-erp-software",
    category: "Supply Chain Management",
    focusKeyword: "Inventory Management ERP Software",
    metaTitle: "Inventory Management with ERP Software: Streamline Supply Chain",
    metaDescription: "Gain complete visibility over your raw materials and finished stock. Learn how manufacturing and retail ERP systems automate stock replenishment and reduce holding costs.",
    readingTime: "13 minutes",
    imageSuggestion: "A clean, high-tech warehouse in Lahore with a supervisor using a barcode-enabled tablet POS and ERP scanner to manage stock shelves in real-time.",
    altText: "Enterprise warehouse inventory management with ERP system."
  },
  {
    num: "46",
    title: "Financial Management & Accounting with ERP Systems",
    slug: "financial-management-accounting-erp-systems",
    category: "Enterprise Accounting",
    focusKeyword: "Financial Management ERP Systems",
    metaTitle: "Financial Management & Accounting with ERP Systems | CSS",
    metaDescription: "Consolidate your multi-branch books, automate invoices, track expenses, and ensure local tax compliance with a professional financial management ERP solution.",
    readingTime: "14 minutes",
    imageSuggestion: "A professional financial analyst reviewing multi-currency spreadsheets and automated tax reports on dual-monitors connected to an ERP system.",
    altText: "Enterprise financial management and accounting modules in ERP software."
  },
  {
    num: "47",
    title: "Human Resource (HR) Management Using ERP Software",
    slug: "human-resource-hr-management-erp",
    category: "Human Resource Management",
    focusKeyword: "HR Management ERP Software",
    metaTitle: "Human Resource (HR) Management Using ERP Software",
    metaDescription: "Streamline employee onboarding, attendance, payroll, tax deductions, and performance reviews with an integrated human resource management ERP system in Pakistan.",
    readingTime: "12 minutes",
    imageSuggestion: "An HR manager conducting a digital onboarding presentation for a diverse set of new hires, with their details syncing in real-time to the ERP database.",
    altText: "Human resource and payroll management ERP portal."
  },
  {
    num: "48",
    title: "Manufacturing ERP Guide: Production Planning & Process Automation",
    slug: "manufacturing-erp-production-planning",
    category: "Manufacturing Automation",
    focusKeyword: "Manufacturing ERP Production Planning",
    metaTitle: "Manufacturing ERP Guide: Production Planning & Process Automation",
    metaDescription: "Streamline production schedules, manage bill of materials (BOM), automate shop floor tasks, and reduce manufacturing waste with an enterprise-grade Manufacturing ERP.",
    readingTime: "15 minutes",
    imageSuggestion: "A modern automated production line in Sialkot with machinery, robot arms, and tablets displaying manufacturing schedules and bill of materials metrics.",
    altText: "Manufacturing ERP production planning and process automation on shop floor."
  },
  {
    num: "49",
    title: "Common ERP Implementation Mistakes and How to Avoid Them",
    slug: "common-erp-implementation-mistakes-avoid",
    category: "ERP Consulting",
    focusKeyword: "Common ERP Implementation Mistakes",
    metaTitle: "Common ERP Implementation Mistakes & Failure Mitigation Guide",
    metaDescription: "Maximize your ROI and prevent costly project failures. Learn the top ERP implementation mistakes made by Pakistani businesses and how to avoid them successfully.",
    readingTime: "13 minutes",
    imageSuggestion: "An enterprise consultant giving a strategic presentation to corporate managers, highlighting key steps in successful software deployment.",
    altText: "ERP implementation mistakes avoidance strategy presentation."
  },
  {
    num: "50",
    title: "Future of ERP Software: AI, Cloud ERP & Intelligent Automation",
    slug: "future-of-erp-software-ai-cloud",
    category: "Enterprise Tech Trends",
    focusKeyword: "Future of ERP Software",
    metaTitle: "The Future of ERP Software: AI, Cloud ERP & Hyper-Automation",
    metaDescription: "Explore the next generation of Enterprise Resource Planning. See how AI-powered predictive demand, cloud hosting, and robotic process automation are reshaping ERPs.",
    readingTime: "14 minutes",
    imageSuggestion: "An artistic futuristic network concept with glowing nodes, AI brain overlays, and cloud servers symbolizing modern intelligent enterprise software systems.",
    altText: "Future of ERP software with AI cloud and robotic automation."
  }
];

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("CRITICAL: GEMINI_API_KEY environment variable is missing.");
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey: apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build'
    }
  }
});

async function generateBlogWithRetry(config) {
  const fileName = `${config.num.padStart(3, '0')}-${config.slug}.md`;
  const filePath = path.join(__dirname, '..', fileName);

  if (fs.existsSync(filePath)) {
    console.log(`Skipping ${fileName} - file already exists.`);
    return;
  }

  console.log(`Generating content for ${fileName}...`);

  const prompt = `
You are a world-class enterprise software architect, principal ERP consultant, and content strategist writing an exhaustive, premium SEO-optimized blog article for Chishty Smart Solutions.
Chishty Smart Solutions is Pakistan's leading provider of enterprise ERP, cloud POS, and customized business process automation solutions.

Generate a complete, production-ready markdown file for Blog #${config.num}.
The article must be extremely thorough, highly professional, authoritative, and engaging (2500–4000+ words), utilizing real-world Pakistani business and enterprise contexts.
Use rich local examples (offices in Karachi, Lahore, Islamabad, industrial zones like Sialkot Export Zone, Sundar Industrial Estate Lahore, Korangi Industrial Area Karachi, Faisalabad textile mills, companies like Sapphire, ChenOne, Imtiaz, Chase Up, local regulations like PRA - Punjab Revenue Authority, SRB - Sindh Revenue Board, FBR Tier-1 integration, local bank wire transfers, Easypaisa, JazzCash, Nayapay, raw materials procurement, production bills of materials, employee payroll and tax deductions in Pakistan, etc.). Avoid dry or generic statements. Ensure that every single requirement is fully implemented with high detail.

Title: ${config.title}
Slug: ${config.slug}
Category: ${config.category}
Focus Keyword: ${config.focusKeyword}
Meta Title: ${config.metaTitle}
Meta Description: ${config.metaDescription}
Reading Time: ${config.readingTime}
Featured Image Suggestion: ${config.imageSuggestion}
ALT Text: ${config.altText}

The markdown file must start with this EXACT metadata block:
# Blog Number: ${config.num}
# Blog Title: ${config.title}
# Slug: ${config.slug}
# Category: ${config.category}
# Focus Keyword: ${config.focusKeyword}
# Meta Title: ${config.metaTitle}
# Meta Description: ${config.metaDescription}
# Reading Time: ${config.readingTime}
# Featured Image Suggestion: ${config.imageSuggestion}
# ALT Text: ${config.altText}

---

## Table of Contents
1. [Introduction](#introduction)
2. [The Core Business Problems Faced by Pakistani Enterprise Managers](#the-core-business-problems-faced-by-pakistani-enterprise-managers)
3. [The Detailed Solution: ${config.title}](#the-detailed-solution)
4. [Step-by-Step Guide: Best Practices & Strategy](#step-by-step-guide)
5. [The Quantifiable Benefits of ${config.title}](#the-quantifiable-benefits)
6. [Best Practices for Maximizing Your ROI](#best-practices)
7. [Common Mistakes to Avoid](#common-mistakes)
8. [Expert Tips from Industry Leaders](#expert-tips)
9. [Frequently Asked Questions (FAQs)](#frequently-asked-questions)
10. [Conclusion and Action Plan](#conclusion)
11. [Schema-Ready FAQ Markup](#schema-ready-faq-markup)

---

## Introduction
[Write a thorough, comprehensive introduction of about 350-500 words using the Pakistani business/enterprise landscape as context, capturing the reader and establishing the absolute importance of this topic]

## The Core Business Problems Faced by Pakistani Enterprise Managers
[Describe the core operational leakages, disconnected software islands, Excel dependency, accounting discrepancies, stock mismatches, manual payroll overheads, tax filing compliance delays, PRA/SRB and FBR audit challenges, or other pain points that Pakistani companies face when they lack proper systems. Use the words 'leakage' or 'leak' or 'challenge' or 'problem' in the H3 subheadings or paragraphs to ensure it parses correctly]

## The Detailed Solution: ${config.title}
[Provide a deep-dive, professional explanation of how Chishty Smart Solutions addresses this problem through advanced cloud ERP features, unified data models, and local customizations. Mention real engineering paradigms, database syncs, multi-tenant cloud or dedicated architectures.]

## Step-by-Step Guide: Best Practices & Strategy
[Provide an actionable, exhaustive, step-by-step implementation and strategy guide for corporate managers.]

## The Quantifiable Benefits of ${config.title}
[Provide a detailed bulleted list of 4-5 major benefits, using the keywords 'benefit' or 'yield' in the section headers or bullets. Use specific percentages, hours, or rupees for high-quality enterprise appeal.]

## Best Practices for Maximizing Your ROI
[Provide a detailed bulleted list of 4-5 best practices, using the keywords 'best practice' or 'maximizing' in the section headers or bullets.]

## Common Mistakes to Avoid
[Provide a detailed bulleted list of 4-5 common mistakes, using the keywords 'mistake' or 'avoid' in the section headers or bullets.]

## Expert Tips from Industry Leaders
[Provide 2-3 expert quotes or industry leader tips. Wrap each quote in markdown blockquote ('>').]

## Frequently Asked Questions (FAQs)
[Provide 4 highly relevant, complex questions and detailed answers in markdown format.]

## Conclusion and Action Plan
[A powerful summarizing conclusion prompting readers to contact Chishty Smart Solutions to automate their business and secure their margins.]

## Schema-Ready FAQ Markup
Provide a Schema.org FAQPage JSON-LD code block wrapping the exact FAQs you listed above. It MUST look like this:
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question 1?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer 1."
      }
    },
    ...
  ]
}
\`\`\`

Ensure the output is valid, complete, professional markdown and has NO truncated text, no placeholders, and starts immediately with the '# Blog Number:' line.
Do not wrap the whole response in a top-level code block; return the raw markdown file content directly.
`;

  let attempt = 1;
  const maxAttempts = 10;
  
  while (attempt <= maxAttempts) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents: prompt,
      });

      let text = response.text || "";
      if (text.startsWith("```markdown")) {
        text = text.substring(11).trim();
        if (text.endsWith("```")) {
          text = text.substring(0, text.length - 3).trim();
        }
      } else if (text.startsWith("```")) {
        text = text.substring(3).trim();
        if (text.endsWith("```")) {
          text = text.substring(0, text.length - 3).trim();
        }
      }

      if (!text.includes("Blog Number:")) {
        throw new Error("Metadata block 'Blog Number:' was not generated correctly.");
      }

      fs.writeFileSync(filePath, text, 'utf-8');
      console.log(`Successfully generated and saved ${fileName}!`);
      return;
    } catch (error) {
      const errStr = JSON.stringify(error) || error.message || error.toString();
      console.warn(`Attempt ${attempt} for ${fileName} failed with error: ${errStr}`);
      attempt++;
      if (attempt <= maxAttempts) {
        let delay = attempt * 10000;
        if (errStr.includes("429") || errStr.toLowerCase().includes("quota") || errStr.toLowerCase().includes("exhausted")) {
          delay = 65000;
          console.log(`Rate limit or resource exhaustion detected! Waiting 65000ms before retrying...`);
        } else {
          console.log(`Waiting ${delay}ms before retrying...`);
        }
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        console.error(`Failed to generate ${fileName} after all attempts.`);
      }
    }
  }
}

async function run() {
  console.log("Starting sequential generation of ERP blogs #41-50 with backoff...");
  for (const config of BLOG_CONFIGS) {
    await generateBlogWithRetry(config);
    // Add a 5 second delay between posts to prevent hitting rate-limits
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
  console.log("All ERP blog generations completed.");
}

run();
