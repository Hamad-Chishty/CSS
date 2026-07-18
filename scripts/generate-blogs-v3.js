const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const BLOG_CONFIGS = [
  {
    num: "21",
    title: "Best Restaurant POS Software in Pakistan (Complete Buyer's Guide)",
    slug: "best-restaurant-pos-software-pakistan",
    category: "Restaurant Technology",
    focusKeyword: "Best Restaurant POS Pakistan",
    metaTitle: "Best Restaurant POS Software in Pakistan: Buyer's Guide",
    metaDescription: "Find the best restaurant POS software in Pakistan. Compare key features like billing, inventory, FBR integration, and customer loyalty for your cafe or restaurant.",
    readingTime: "15 minutes",
    imageSuggestion: "A modern sleek touchscreen POS terminal displaying local food orders with a high-speed thermal slip printer next to a plate of fresh biryani.",
    altText: "The best restaurant POS software in Pakistan showing touch billing terminal and receipt printing."
  },
  {
    num: "22",
    title: "How to Choose the Right Restaurant POS System",
    slug: "how-to-choose-restaurant-pos",
    category: "Restaurant Technology",
    focusKeyword: "Choose Restaurant POS Pakistan",
    metaTitle: "How to Choose the Right Restaurant POS System in Pakistan",
    metaDescription: "A step-by-step buyer's guide to choosing the perfect restaurant POS system in Pakistan. Evaluate software features, hardware durability, cost, and vendor support.",
    readingTime: "12 minutes",
    imageSuggestion: "A restaurateur sitting in a modern Lahore cafe reviewing different POS features on a laptop screen with custom checklists.",
    altText: "Choosing the right restaurant POS system checklist for owners in Pakistan."
  },
  {
    num: "23",
    title: "Restaurant POS Implementation Guide: From Setup to Go-Live",
    slug: "restaurant-pos-implementation-guide",
    category: "Restaurant Management",
    focusKeyword: "Restaurant POS Implementation Pakistan",
    metaTitle: "Restaurant POS Implementation Guide: Step-by-Step PK",
    metaDescription: "Learn how to seamlessly implement a new POS system in your Pakistani restaurant. Master data migration, menu design, staff training, and go-live strategies.",
    readingTime: "11 minutes",
    imageSuggestion: "A trainer demonstrating a touch-screen POS terminal and kitchen display system to restaurant staff members during a training session.",
    altText: "Structured restaurant POS implementation and team training session in Pakistan."
  },
  {
    num: "24",
    title: "Restaurant POS Hardware Guide (Printers, Scanners, Cash Drawers & More)",
    slug: "restaurant-pos-hardware-components-guide",
    category: "Restaurant Technology",
    focusKeyword: "Restaurant POS Hardware Guide",
    metaTitle: "Restaurant POS Hardware Guide: Printers, Scanners & Drawers",
    metaDescription: "Discover the essential POS hardware components required for your restaurant in Pakistan. Learn about touchscreen terminals, thermal receipt printers, scanners, and KDS.",
    readingTime: "10 minutes",
    imageSuggestion: "A neatly styled countertop with a touch POS terminal, an active kitchen buzzer, a laser barcode scanner, and a heavy-duty electronic cash drawer.",
    altText: "Essential restaurant POS hardware components including cash drawer, receipt printer, and scanner."
  },
  {
    num: "25",
    title: "Common Restaurant POS Mistakes and How to Avoid Them",
    slug: "common-restaurant-pos-mistakes-avoid",
    category: "Restaurant Management",
    focusKeyword: "Restaurant POS Mistakes Pakistan",
    metaTitle: "Avoid These 10 Costly Restaurant POS Mistakes | CSS Guide",
    metaDescription: "Learn the most common mistakes Pakistani restaurant owners make when choosing or using a POS system, and discover actionable strategies to avoid them completely.",
    readingTime: "12 minutes",
    imageSuggestion: "A frustrated restaurant manager in Karachi looking at a frozen legacy billing terminal during busy weekend rush hours.",
    altText: "Frustrated restaurant manager dealing with legacy POS system errors and downtime."
  },
  {
    num: "26",
    title: "Restaurant POS Security Best Practices: Protecting Your Business & Customers",
    slug: "restaurant-pos-security-best-practices",
    category: "Restaurant Technology",
    focusKeyword: "Restaurant POS Security Pakistan",
    metaTitle: "Restaurant POS Security Best Practices: Protect Your Data",
    metaDescription: "Secure your restaurant from data breaches, card fraud, employee theft, and system vulnerabilities. Learn modern security practices for POS systems in Pakistan.",
    readingTime: "11 minutes",
    imageSuggestion: "A digital shield overlay on a busy restaurant billing counter, symbolizing data protection and transaction security.",
    altText: "Secure restaurant POS system with cyber security and data protection overlay."
  },
  {
    num: "27",
    title: "Restaurant POS Backup & Disaster Recovery Guide",
    slug: "restaurant-pos-backup-disaster-recovery",
    category: "Restaurant Technology",
    focusKeyword: "Restaurant POS Backup Pakistan",
    metaTitle: "Restaurant POS Backup & Disaster Recovery Guide PK",
    metaDescription: "Keep your restaurant running during power outages, internet failures, and hardware crashes. Master offline capabilities and cloud backup systems in Pakistan.",
    readingTime: "10 minutes",
    imageSuggestion: "A secure local server database backup hub with green active network status lights and a tablet demonstrating cloud sync status.",
    altText: "Database server with active backup network lights for restaurant disaster recovery."
  },
  {
    num: "28",
    title: "Restaurant POS Integration with Accounting Software: Streamlining Your Ledger",
    slug: "restaurant-pos-accounting-software-integration",
    category: "Restaurant Accounting",
    focusKeyword: "Restaurant POS Accounting Integration",
    metaTitle: "Sync Restaurant POS with Accounting Software PK",
    metaDescription: "Streamline your financials by integrating your restaurant POS with popular accounting tools. Automate sales reporting, local tax calculations, and cash books.",
    readingTime: "11 minutes",
    imageSuggestion: "A divided screen displaying a restaurant POS order ticket on the left and automated accounting software ledger balances on the right.",
    altText: "Restaurant POS integration with financial and accounting ledger software."
  },
  {
    num: "29",
    title: "Restaurant POS ROI Calculator & Cost Analysis Guide",
    slug: "restaurant-pos-roi-calculator-cost-guide",
    category: "Restaurant Management",
    focusKeyword: "Restaurant POS ROI Pakistan",
    metaTitle: "Restaurant POS ROI Calculator & Cost Analysis Guide PK",
    metaDescription: "Calculate the true return on investment (ROI) of a premium restaurant POS. Learn how plugging leakages and boosting table turns offset initial hardware costs.",
    readingTime: "13 minutes",
    imageSuggestion: "An iPad showing a financial ROI bar chart, a calculator, and cash piles on a wooden restaurant table.",
    altText: "Restaurant POS ROI calculator spreadsheet showing food cost savings and profit margins."
  },
  {
    num: "30",
    title: "Future of Restaurant POS Systems (AI, Automation & Smart Restaurants)",
    slug: "future-of-restaurant-pos-systems-ai",
    category: "Restaurant Technology",
    focusKeyword: "Future of Restaurant POS Pakistan",
    metaTitle: "The Future of Restaurant POS: AI, Smart Automation & More",
    metaDescription: "Explore upcoming trends in the restaurant POS industry. Discover self-service ordering, AI-powered predictive inventory, voice ordering, and biometric checkouts.",
    readingTime: "12 minutes",
    imageSuggestion: "A customer using a self-ordering kiosk with a responsive digital screen inside a futuristic high-tech Pakistani burger joint.",
    altText: "Futuristic smart restaurant ordering kiosk with interactive touch screen display."
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
You are a world-class enterprise software architect, systems engineer, and content strategist writing a high-quality, comprehensive, professional SEO-optimized blog article for Chishty Smart Solutions.
Chishty Smart Solutions is Pakistan's leading provider of enterprise POS and business automation solutions.

Generate a complete, production-ready markdown file for Blog #${config.num}.
The article must be extremely thorough, highly professional, authoritative, and engaging (2500–4000+ words), utilizing real-world Pakistani restaurant contexts (Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Biryani, Karahi, cafes, dhabas, local taxes like PRA, SRB, FBR POS Integration, cash vs digital payments like Easypaisa, JazzCash, HBL, etc.). Avoid dry or generic statements. Ensure that every single requirement is fully implemented with high detail.

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
2. [The Core Business Problems Faced by Pakistani Restaurateurs](#the-core-business-problems-faced-by-pakistani-restaurateurs)
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
[Write a thorough, comprehensive introduction of about 300-450 words using the Pakistani food industry as context, capturing the reader and establishing the absolute importance of this topic]

## The Core Business Problems Faced by Pakistani Restaurateurs
[Describe the core operational leakages, cash pilferage, manual delays, tax audits, or other pain points that Pakistani restaurants face when they lack proper systems for this topic. Use the words 'leakage' or 'leak' or 'challenge' or 'problem' in the H3 subheadings or paragraphs to ensure it parses correctly]

## The Detailed Solution: ${config.title}
[Provide a deep-dive, professional explanation of how Chishty Smart Solutions addresses this problem through advanced automation and POS features. Describe features like real-time synchronization, cloud reliability, local tax integration, and intuitive interfaces.]

## Step-by-Step Guide: Best Practices & Strategy
[Provide an actionable, exhaustive, step-by-step implementation and strategy guide for restaurant owners.]

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
[A powerful summarizing conclusion prompting readers to contact Chishty Smart Solutions to automate their restaurant business and secure their margins.]

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
  console.log("Starting sequential generation of blogs #21-30 with backoff...");
  for (const config of BLOG_CONFIGS) {
    await generateBlogWithRetry(config);
    // Add a 3 second delay between posts to prevent hitting rate-limits
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  console.log("All blog generations completed.");
}

run();
