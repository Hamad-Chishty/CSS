const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

// Standard blog configurations for Blogs #11-20
const BLOG_CONFIGS = [
  {
    num: "11",
    title: "Restaurant Accounting & Financial Management: Maximizing Profit Margins in Pakistan",
    slug: "restaurant-accounting-financial-management",
    category: "Restaurant Management",
    focusKeyword: "Restaurant Accounting Pakistan",
    metaTitle: "Restaurant Accounting & Finance Guide Pakistan (2026)",
    metaDescription: "Master restaurant accounting and financial management in Pakistan. Learn how to track cost of goods sold (COGS), control food costs, and manage cash flow.",
    readingTime: "12 minutes",
    imageSuggestion: "A clean modern accountant desk in Lahore with a laptop displaying a financial spreadsheet of restaurant revenue and food cost charts.",
    altText: "Restaurant accounting software and financial spreadsheet showing food cost percentage and profits in Pakistan."
  },
  {
    num: "12",
    title: "Multi-Branch Restaurant Management: Scaling Your Food Franchise in Pakistan",
    slug: "multi-branch-restaurant-management",
    category: "Restaurant Technology",
    focusKeyword: "Multi Branch Restaurant Pakistan",
    metaTitle: "Scale Your Restaurant Franchise in Pakistan: Multi-Outlet POS",
    metaDescription: "Learn how to manage multi-branch and chain restaurants in Pakistan. Discover centralized menu control, inter-branch inventory transfers, and consolidated reporting.",
    readingTime: "11 minutes",
    imageSuggestion: "An overhead view of several connected cafe interior layouts representing different branches of a popular bakery brand in Karachi and Lahore.",
    altText: "Multi-branch restaurant franchise network management with centralized cloud POS software in Pakistan."
  },
  {
    num: "13",
    title: "Restaurant Customer Relationship Management: Building Guest Loyalty in Pakistan",
    slug: "restaurant-customer-relationship-management",
    category: "Restaurant Marketing",
    focusKeyword: "Restaurant CRM Pakistan",
    metaTitle: "Best Restaurant CRM & Guest Loyalty Guide Pakistan",
    metaDescription: "Boost sales with a restaurant customer relationship management (CRM) system in Pakistan. Learn how to launch loyalty programs, SMS marketing, and track guest history.",
    readingTime: "10 minutes",
    imageSuggestion: "A smiling customer receiving a loyalty point notification on their smartphone while paying at a trendy coffee shop in Islamabad.",
    altText: "Restaurant CRM loyalty program app notification showing reward points at a cafe in Pakistan."
  },
  {
    num: "14",
    title: "Restaurant Delivery & Online Ordering Integration: Driving Off-Premise Sales",
    slug: "restaurant-delivery-online-ordering-integration",
    category: "Restaurant Technology",
    focusKeyword: "Restaurant Delivery Integration Pakistan",
    metaTitle: "Restaurant Delivery & Online Ordering Integration Guide PK",
    metaDescription: "Seamlessly integrate online ordering and delivery systems with your restaurant POS in Pakistan. Manage Foodpanda, phone orders, and direct website deliveries.",
    readingTime: "11 minutes",
    imageSuggestion: "A delivery rider wearing a helmet carrying a sealed thermal food bag out of a busy pizzeria in Lahore, with a delivery motorcycle parked nearby.",
    altText: "Food delivery rider picking up order from a restaurant using POS-integrated delivery software in Pakistan."
  },
  {
    num: "15",
    title: "FBR POS Integration Guide: Ensuring Tax Compliance for Pakistani Restaurants",
    slug: "fbr-pos-integration-restaurant-guide",
    category: "Tax Compliance",
    focusKeyword: "FBR POS Integration Restaurant",
    metaTitle: "FBR POS Integration Guide for Pakistani Restaurants (2026)",
    metaDescription: "A complete guide to FBR POS integration for restaurants in Pakistan. Learn about tier-1 retailers, sales tax invoicing, real-time reporting, and penalty avoidance.",
    readingTime: "14 minutes",
    imageSuggestion: "A close-up of a printed restaurant receipt with a clear official FBR QR code stamp displayed next to a POS tablet in a restaurant in Karachi.",
    altText: "Pakistani restaurant receipt with FBR QR code indicating real-time tax compliance integration."
  },
  {
    num: "16",
    title: "Restaurant POS Hardware Guide: Choosing the Right Terminals, Printers & KDS",
    slug: "restaurant-pos-hardware-guide",
    category: "Restaurant Technology",
    focusKeyword: "Restaurant POS Hardware Pakistan",
    metaTitle: "Ultimate Restaurant POS Hardware Selection Guide Pakistan",
    metaDescription: "Selecting the best POS hardware for your restaurant in Pakistan. Compare thermal receipt printers, touchscreen POS terminals, kitchen displays, and handheld billing devices.",
    readingTime: "12 minutes",
    imageSuggestion: "A clean arrangement of restaurant POS hardware including a touch terminal, a high-speed thermal slip printer, and an interactive kitchen display screen.",
    altText: "Professional restaurant POS hardware kit including thermal receipt printer and touchscreen billing terminal."
  },
  {
    num: "17",
    title: "Cloud POS vs. On-Premise POS: Which Is Better for Pakistani Restaurants?",
    slug: "cloud-vs-on-premise-restaurant-pos",
    category: "Restaurant Technology",
    focusKeyword: "Cloud Restaurant POS Pakistan",
    metaTitle: "Cloud POS vs On-Premise POS for Pakistani Restaurants",
    metaDescription: "Compare cloud-based restaurant POS systems with traditional on-premise solutions in Pakistan. Learn about internet dependency, cost, data security, and scalability.",
    readingTime: "10 minutes",
    imageSuggestion: "An elegant split visual screen representing a secure physical database server room on one side, and a modern tablet connected to cloud networks on the other.",
    altText: "Comparison diagram of cloud-hosted SaaS restaurant software versus local on-premise servers in Pakistan."
  },
  {
    num: "18",
    title: "Preventing Restaurant Theft & Fraud: Audit Controls and POS Security",
    slug: "preventing-restaurant-theft-fraud-pos",
    category: "Restaurant Management",
    focusKeyword: "Restaurant Theft Prevention Pakistan",
    metaTitle: "Stop Restaurant Revenue Leakage: POS Fraud & Theft Controls",
    metaDescription: "Stop revenue leakage, cash pilferage, and inventory theft in your restaurant. Learn how POS audit logs, void controls, and shift reconciliation protect your margins.",
    readingTime: "11 minutes",
    imageSuggestion: "A manager review interface showing highlighted alert flags and void history reports on an iPad screen at a restaurant cash counter.",
    altText: "Restaurant POS management system dashboard showing shift reconciliation audits and void transaction alerts."
  },
  {
    num: "19",
    title: "Restaurant Table Reservation & Guest Management: Streamlining Dine-In Operations",
    slug: "restaurant-table-reservation-guest-management",
    category: "Restaurant Management",
    focusKeyword: "Restaurant Table Reservation Pakistan",
    metaTitle: "Table Reservation & Dine-In Floor Management Guide PK",
    metaDescription: "Optimize floor management and table turnaround times in Pakistani restaurants. Learn how reservation software, waitlist tracking, and seating charts improve guest satisfaction.",
    readingTime: "10 minutes",
    imageSuggestion: "A glowing tablet displaying a digital floor plan with table layouts and reservation statuses inside a busy fine-dining restaurant in Islamabad.",
    altText: "Digital table layout planner and seat reservation system used on a restaurant manager tablet."
  },
  {
    num: "20",
    title: "AI in the Pakistani Food Industry: The Future of Restaurant Automation",
    slug: "ai-restaurant-automation-pakistan",
    category: "Restaurant Technology",
    focusKeyword: "AI Restaurant Pakistan",
    metaTitle: "AI in Pakistan's Food Industry: Next-Gen Restaurant Tech",
    metaDescription: "Discover how Artificial Intelligence (AI) is transforming the restaurant industry in Pakistan. From predictive inventory to AI-powered voice ordering and digital ordering boards.",
    readingTime: "12 minutes",
    imageSuggestion: "A stylized illustration showing neural network connection lines overlapping with kitchen ingredient logistics, smart menu analytics, and digital ordering boards.",
    altText: "Conceptual illustration of Artificial Intelligence powering smart kitchen inventory and analytics in Pakistan."
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

async function generateBlog(config) {
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
The article must have a highly professional, authoritative, and engaging tone, utilizing Pakistani restaurant contexts (Karachi, Lahore, Islamabad, Biryani, Karahi, cafes, dhabas, local taxes, FBR, PRA, SRB, cash vs digital payments, etc.).

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
[Write a thorough introduction of about 150-200 words using the Pakistani food scene as context and establishing the importance of this topic]

## The Core Business Problems Faced by Pakistani Restaurateurs
[Describe the core operational leakages, cash pilferage, inventory loss, tax audits, or other pain points that Pakistani restaurants face when they lack proper systems for this topic. Use the words 'leakage' or 'leak' or 'challenge' or 'problem' in the H3 subheadings or paragraph to ensure it parses correctly]

## The Detailed Solution: ${config.title}
[Provide a deep-dive explanation of how Chishty Smart Solutions addresses this problem through advanced automation and POS features.]

## Step-by-Step Guide: Best Practices & Strategy
[Provide actionable, step-by-step implementation guide for restaurant owners.]

## The Quantifiable Benefits of ${config.title}
[Provide a bulleted list of 3-5 major benefits, using the keywords 'benefit' or 'yield' in the section headers or bullets. Use numbers/percentages for high-quality enterprise appeal.]

## Best Practices for Maximizing Your ROI
[Provide a bulleted list of 3-5 best practices, using the keywords 'best practice' or 'maximizing' in the section headers or bullets.]

## Common Mistakes to Avoid
[Provide a bulleted list of 3-5 mistakes, using the keywords 'mistake' or 'avoid' in the section headers or bullets.]

## Expert Tips from Industry Leaders
[Provide 2-3 expert quotes or industry leader tips. Wrap each quote in markdown blockquote ('>').]

## Frequently Asked Questions (FAQs)
[Provide 3-4 highly relevant questions and detailed answers in markdown format.]

## Conclusion and Action Plan
[A powerful summarizing conclusion prompting readers to automate their business.]

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

Ensure the output is valid, complete markdown and has NO truncated text, no placeholders, and starts immediately with the '# Blog Number:' line.
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
      
      // Sometimes models add markdown triple backticks around the entire content. Strip them if they exist.
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

      // Double check that it contains metadata
      if (!text.includes("Blog Number:")) {
        console.warn(`Warning: Content for ${fileName} might be missing metadata. Retrying with simpler fallback.`);
        throw new Error("Metadata block 'Blog Number:' was not generated correctly.");
      }

      fs.writeFileSync(filePath, text, 'utf-8');
      console.log(`Successfully generated and saved ${fileName}.`);
      return;
    } catch (error) {
      const errStr = JSON.stringify(error) || error.message || error.toString();
      console.error(`Attempt ${attempt} for ${fileName} failed with error:`, errStr);
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
  console.log("Starting sequential generation of blogs 11-20...");
  for (const config of BLOG_CONFIGS) {
    await generateBlog(config);
    // Add a 3 second delay between posts to prevent hitting rate-limits
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  console.log("All blog generations completed.");
}

run();
