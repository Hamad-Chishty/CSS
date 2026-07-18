const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const BLOG_CONFIGS = [
  {
    num: "51",
    title: "Ultimate Guide to Inventory Management Software",
    slug: "ultimate-guide-inventory-management-software",
    category: "Inventory Management",
    focusKeyword: "Inventory Management Software",
    metaTitle: "Ultimate Guide to Inventory Management Software | CSS",
    metaDescription: "Struggling with manual stock checks or stockouts? Learn how modern inventory management software automates stock tracking, cuts carrying costs, and streamlines supply chains.",
    readingTime: "13 minutes",
    imageSuggestion: "A modern, tidy warehouse showing racks with boxes, with a warehouse manager using a smartphone app with inventory status and barcoding overlays.",
    altText: "Ultimate guide to inventory management software displaying digital warehouse inventory overlay."
  },
  {
    num: "52",
    title: "Best Inventory Management Software in Pakistan (Complete Buyer's Guide)",
    slug: "best-inventory-management-software-pakistan",
    category: "Inventory Management",
    focusKeyword: "Best Inventory Management Software Pakistan",
    metaTitle: "Best Inventory Management Software in Pakistan (Complete Buyer's Guide)",
    metaDescription: "Compare the best inventory management software in Pakistan. Evaluate integrations with local retail/wholesale, FBR POS sync, multi-warehouse support, and local ERP features.",
    readingTime: "15 minutes",
    imageSuggestion: "An energetic team in a Lahore logistics office looking at multi-channel inventory tracking software and stock dashboards on a screen.",
    altText: "Best inventory management software in Pakistan complete buyer's guide dashboard."
  },
  {
    num: "53",
    title: "Inventory Management vs Stock Management: What's the Difference?",
    slug: "inventory-management-vs-stock-management",
    category: "Inventory Management",
    focusKeyword: "Inventory Management vs Stock Management",
    metaTitle: "Inventory Management vs Stock Management: The Ultimate Guide",
    metaDescription: "Discover the key differences between inventory management and stock management. Learn how each approach optimizes raw materials or finished products to secure margins.",
    readingTime: "11 minutes",
    imageSuggestion: "A split screen comparing raw material rolls in a manufacturing warehouse vs finished packaged goods on retail shelves.",
    altText: "Inventory management vs stock management differences comparison illustration."
  },
  {
    num: "54",
    title: "Barcode Inventory Management System Explained",
    slug: "barcode-inventory-management-system",
    category: "Warehouse Technology",
    focusKeyword: "Barcode Inventory Management System",
    metaTitle: "Barcode Inventory Management System Explained | CSS",
    metaDescription: "Eliminate manual counting errors and speed up shipping. Learn how a barcode inventory management system integrates with your POS and ERP to track items in real-time.",
    readingTime: "12 minutes",
    imageSuggestion: "A hand scanning a barcode label on a packaged box in a warehouse with a wireless hand scanner showing scanning validation message.",
    altText: "Barcode inventory management system scanning box in warehouse."
  },
  {
    num: "55",
    title: "Warehouse Inventory Management Best Practices",
    slug: "warehouse-inventory-management-best-practices",
    category: "Warehouse Technology",
    focusKeyword: "Warehouse Inventory Management Best Practices",
    metaTitle: "Warehouse Inventory Management Best Practices for High Efficiency",
    metaDescription: "Optimize your layout, implement FIFO/LIFO, and automate stock counts. Read the ultimate warehouse inventory management best practices to reduce operational leaks.",
    readingTime: "14 minutes",
    imageSuggestion: "High racks in a sprawling warehouse with a yellow forklift moving a pallet and staff checking digital status on their tablets.",
    altText: "Warehouse inventory management best practices with modern warehouse setup."
  },
  {
    num: "56",
    title: "Inventory Tracking Software for Retail & Restaurants",
    slug: "inventory-tracking-software-retail-restaurants",
    category: "Retail & Restaurant Tech",
    focusKeyword: "Inventory Tracking Software Retail Restaurants",
    metaTitle: "Inventory Tracking Software for Retail & Restaurants | CSS",
    metaDescription: "Avoid menu stockouts and shelf gaps. Learn how tailored inventory tracking software optimizes ingredients for restaurants and SKU variants for retail stores.",
    readingTime: "13 minutes",
    imageSuggestion: "A dual visual depicting a retail worker scanning clothing SKUs on one side and a chef in a restaurant kitchen updating ingredient lists on a tablet on the other.",
    altText: "Inventory tracking software for retail and restaurant inventory."
  },
  {
    num: "57",
    title: "Common Inventory Management Mistakes and How to Avoid Them",
    slug: "common-inventory-management-mistakes-avoid",
    category: "Inventory Consulting",
    focusKeyword: "Common Inventory Management Mistakes",
    metaTitle: "Common Inventory Management Mistakes & Profit Leak Prevention",
    metaDescription: "Prevent dead stock, overselling, and ghost inventory. Learn the top inventory management mistakes that cost Pakistani businesses millions and how to easily avoid them.",
    readingTime: "12 minutes",
    imageSuggestion: "A corporate meeting room in Karachi where a senior inventory consultant is pointing out common stock-audit leakages on a whiteboard to team managers.",
    altText: "Common inventory management mistakes and leak avoidance strategy."
  },
  {
    num: "58",
    title: "Inventory Forecasting & Demand Planning Guide",
    slug: "inventory-forecasting-demand-planning",
    category: "Inventory Consulting",
    focusKeyword: "Inventory Forecasting Demand Planning",
    metaTitle: "Inventory Forecasting & Demand Planning Guide | CSS",
    metaDescription: "Stop guessing your stock needs. Master inventory forecasting and demand planning to align your purchase orders with actual market demand and seasonal spikes.",
    readingTime: "13 minutes",
    imageSuggestion: "A laptop displaying predictive demand forecasting charts, seasonal trends curves, and stock health metrics, set on an office desk.",
    altText: "Inventory forecasting and demand planning digital analytical software."
  },
  {
    num: "59",
    title: "Inventory Management KPIs Every Business Should Track",
    slug: "inventory-management-kpis-track",
    category: "Enterprise Analytics",
    focusKeyword: "Inventory Management KPIs",
    metaTitle: "Inventory Management KPIs Every Business Should Track: Key Metrics",
    metaDescription: "Track your stock turn, carrying cost, and order accuracy. Learn the essential inventory management KPIs every business must monitor to ensure financial health.",
    readingTime: "12 minutes",
    imageSuggestion: "A clean, corporate executive workspace with a tablet showing graphs for Inventory Turnover Ratio, Days Sales of Inventory (DSI), and Shrinkage metrics.",
    altText: "Inventory management KPIs tracking dashboard on executive tablet."
  },
  {
    num: "60",
    title: "Future of Inventory Management: AI, Automation & Smart Warehouses",
    slug: "future-of-inventory-management-ai-automation",
    category: "Enterprise Tech Trends",
    focusKeyword: "Future of Inventory Management",
    metaTitle: "The Future of Inventory Management: AI, Automation & Smart Warehouses",
    metaDescription: "Explore the future of inventory management, from AI-driven predictive logistics to automated guided vehicles (AGVs) and smart shelves. Stay ahead of the technology curve.",
    readingTime: "14 minutes",
    imageSuggestion: "A highly advanced smart warehouse featuring glowing cybernetic connectivity lines, autonomous logistics drones, and holographic smart shelf scanners.",
    altText: "Future of inventory management with AI and smart automated warehouse."
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
You are a world-class supply chain architect, principal warehouse optimization consultant, and content strategist writing an exhaustive, premium SEO-optimized blog article for Chishty Smart Solutions.
Chishty Smart Solutions is Pakistan's leading provider of enterprise ERP, cloud POS, smart inventory management, and customized business process automation solutions.

Generate a complete, production-ready markdown file for Blog #${config.num}.
The article must be extremely thorough, highly professional, authoritative, and engaging (2500–4000+ words), utilizing real-world Pakistani business and enterprise contexts.
Use rich local examples (wholesale and retail hubs in Karachi like Jodia Bazar, Bolton Market, Lahore like Shah Alam Market, Brandreth Road, Islamabad like Blue Area, industrial zones like Sialkot Export Zone, Sundar Industrial Estate Lahore, Korangi Industrial Area Karachi, Faisalabad textile mills, retail chains like Imtiaz Super Market, Chase Up, Alfatah, Metro, local regulations like FBR POS integration, sales tax compliance, raw materials inventory, bill of materials, POS barcode scanners, hand terminals, Easypaisa, JazzCash, local bank transfers, local shipping partners like Leopard, TCS, M&P, etc.). Avoid dry or generic statements. Ensure that every single requirement is fully implemented with high detail.

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
[Describe the core operational leakages, disconnected software islands, Excel dependency, inventory discrepancies, stock outs, warehouse placement errors, manual dispatch delays, sales tax compliance hurdles, FBR tier-1 audit challenges, or other pain points that Pakistani companies face when they lack proper systems. Use the words 'leakage' or 'leak' or 'challenge' or 'problem' in the H3 subheadings or paragraphs to ensure it parses correctly]

## The Detailed Solution: ${config.title}
[Provide a deep-dive, professional explanation of how Chishty Smart Solutions addresses this problem through advanced cloud inventory management, real-time barcoding integration, unified data models, and local customizations. Mention real engineering paradigms, database syncs, multi-tenant cloud or dedicated architectures.]

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
[A powerful summarizing conclusion prompting readers to contact Chishty Smart Solutions to automate their inventory tracking and secure their margins.]

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
  console.log("Starting sequential generation of Inventory blogs #51-60 with backoff...");
  for (const config of BLOG_CONFIGS) {
    await generateBlogWithRetry(config);
    // Add a 5 second delay between posts to prevent hitting rate-limits
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
  console.log("All Inventory blog generations completed.");
}

run();
