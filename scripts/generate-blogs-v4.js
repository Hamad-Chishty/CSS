const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const BLOG_CONFIGS = [
  {
    num: "31",
    title: "Ultimate Guide to Retail POS Software for Small Businesses",
    slug: "ultimate-guide-retail-pos-small-businesses",
    category: "Retail Technology",
    focusKeyword: "Retail POS Small Businesses",
    metaTitle: "Ultimate Guide to Retail POS Software for Small Businesses",
    metaDescription: "Discover how a modern Retail POS system transforms small business operations. Learn about billing, inventory control, and checkout optimization for growth.",
    readingTime: "12 minutes",
    imageSuggestion: "A bustling boutique small business clothing store with a customer checking out using a modern sleek tablet POS system at the counter.",
    altText: "Ultimate guide to retail POS software for small businesses showing a tablet checkout."
  },
  {
    num: "32",
    title: "Best Retail POS Software in Pakistan (Complete Buyer's Guide)",
    slug: "best-retail-pos-software-pakistan",
    category: "Retail Technology",
    focusKeyword: "Best Retail POS Pakistan",
    metaTitle: "Best Retail POS Software in Pakistan (Complete Buyer's Guide)",
    metaDescription: "Compare the top retail POS software in Pakistan. Evaluate features like local tax compliance, barcoding, inventory sync, and ease of use for retail stores.",
    readingTime: "15 minutes",
    imageSuggestion: "A beautifully lit supermarket or retail store in Karachi showing stocked shelves and modern computer cash counters.",
    altText: "Best retail POS software in Pakistan cash counters and billing terminals."
  },
  {
    num: "33",
    title: "Retail POS vs Traditional Billing System: Which One is Better?",
    slug: "retail-pos-vs-traditional-billing-system",
    category: "Retail Automation",
    focusKeyword: "Retail POS vs Traditional Billing",
    metaTitle: "Retail POS vs Traditional Billing System: Comparison Guide",
    metaDescription: "Struggling with a manual ledger or basic cash register? Learn why a modern Retail POS system is vastly superior to traditional billing methods for retail stores.",
    readingTime: "11 minutes",
    imageSuggestion: "A side-by-side comparison of a vintage physical cash register with a modern dual-screen computer retail POS terminal.",
    altText: "Comparison of a traditional billing register and a modern Retail POS software terminal."
  },
  {
    num: "34",
    title: "How Retail POS Software Improves Inventory Management",
    slug: "retail-pos-inventory-management-improvement",
    category: "Retail Management",
    focusKeyword: "Retail POS Inventory Management",
    metaTitle: "How Retail POS Software Improves Inventory Management | CSS",
    metaDescription: "Optimize your stock levels and prevent cash lock-ups. Discover how retail POS systems automate inventory, stock alerts, purchase orders, and supplier tracking.",
    readingTime: "13 minutes",
    imageSuggestion: "A retail store manager in Lahore scanning barcode inventory boxes on warehouse shelves using a handheld wireless scanner connected to a POS system.",
    altText: "Retail inventory management with barcode scanning and POS tracking."
  },
  {
    num: "35",
    title: "Barcode Scanning System Guide for Retail Stores",
    slug: "barcode-scanning-system-retail-guide",
    category: "Retail Technology",
    focusKeyword: "Barcode Scanning Retail Guide",
    metaTitle: "Barcode Scanning System Guide for Retail Stores | CSS",
    metaDescription: "Boost checkout speeds and inventory accuracy. Read our complete guide on setting up, printing, and scanning barcodes using POS software in Pakistan.",
    readingTime: "10 minutes",
    imageSuggestion: "A close-up of a handheld laser barcode scanner scanning a product barcode tag, emitting a clean red line on the tag.",
    altText: "Handheld laser barcode scanner scanning product tag at a retail checkout."
  },
  {
    num: "36",
    title: "Multi-Store Retail POS Management Guide",
    slug: "multi-store-retail-pos-management-guide",
    category: "Retail Management",
    focusKeyword: "Multi Store Retail POS",
    metaTitle: "Multi-Store Retail POS Management Guide: Scale Your Brand",
    metaDescription: "Learn how to manage multiple retail stores from a centralized headquarters dashboard. Monitor sales, transfer inventory, and analyze performance effortlessly.",
    readingTime: "12 minutes",
    imageSuggestion: "A corporate headquarters dashboard displayed on a desktop computer screen, showing multiple retail store branch sales charts and metrics in real-time.",
    altText: "Multi-store retail POS management centralized dashboard and reports."
  },
  {
    num: "37",
    title: "Retail POS Security & Fraud Prevention Best Practices",
    slug: "retail-pos-security-fraud-prevention",
    category: "Retail Technology",
    focusKeyword: "Retail POS Security",
    metaTitle: "Retail POS Security & Fraud Prevention Best Practices PK",
    metaDescription: "Protect your retail store from internal employee theft, cash register discrepancies, data breaches, and payment fraud with modern retail POS security strategies.",
    readingTime: "11 minutes",
    imageSuggestion: "An illustrative overlay of cybersecurity shield icon protecting retail POS cash drawer and payment terminal.",
    altText: "Secured retail POS system cash register with fraud prevention settings."
  },
  {
    num: "38",
    title: "Customer Loyalty Programs for Retail Businesses",
    slug: "customer-loyalty-programs-retail-businesses",
    category: "Retail Marketing",
    focusKeyword: "Customer Loyalty Retail Pakistan",
    metaTitle: "Customer Loyalty Programs for Retail Businesses | CSS",
    metaDescription: "Turn one-time shoppers into lifelong brand advocates. Learn how to launch, track, and optimize customer loyalty and rewards programs using retail POS software.",
    readingTime: "11 minutes",
    imageSuggestion: "A smiling checkout cashier presenting a digital loyalty rewards points bar on a customer's phone screen during purchase.",
    altText: "Customer loyalty programs setup on retail POS system."
  },
  {
    num: "39",
    title: "Retail Business Automation Using POS Software",
    slug: "retail-business-automation-pos-software",
    category: "Retail Automation",
    focusKeyword: "Retail Business Automation Pakistan",
    metaTitle: "Retail Business Automation Using POS Software | CSS",
    metaDescription: "Automate daily manual tasks in your retail store. Discover how POS software streamlines billing, purchase cycles, tax reporting, and employee management.",
    readingTime: "12 minutes",
    imageSuggestion: "A modern, fully automated retail store aisle with smart electronic shelf tags and a self-checkout terminal.",
    altText: "Retail business automation tools and modern checkout terminals."
  },
  {
    num: "40",
    title: "Future of Retail POS Systems: AI, Automation & Smart Retail",
    slug: "future-of-retail-pos-systems-ai",
    category: "Retail Technology",
    focusKeyword: "Future of Retail POS",
    metaTitle: "The Future of Retail POS Systems: AI, Smart Retail & Beyond",
    metaDescription: "Explore upcoming retail innovations. Learn how AI-powered demand forecasting, smart checkout kiosks, and RFID are reshaping the future of retail POS in Pakistan.",
    readingTime: "13 minutes",
    imageSuggestion: "A futuristic smart retail experience showing computerized customer assistance screens, RFID automatic billing, and AI inventory optimization.",
    altText: "Future of retail POS systems featuring smart AI retail solutions."
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
The article must be extremely thorough, highly professional, authoritative, and engaging (2500–4000+ words), utilizing real-world Pakistani retail store contexts (Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Faisalabad, Multan, clothing boutique brands like Khaadi, J., Sapphire, grocery marts/supermarkets like Chase Up, Imtiaz, cosmetic outlets, electronics stores, local taxes like PRA, SRB, FBR Tier-1 POS Integration, cash vs digital payments like Easypaisa, JazzCash, Nayapay, HBL, credit cards, etc.). Avoid dry or generic statements. Ensure that every single requirement is fully implemented with high detail.

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
2. [The Core Business Problems Faced by Pakistani Retailers](#the-core-business-problems-faced-by-pakistani-retailers)
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
[Write a thorough, comprehensive introduction of about 300-450 words using the Pakistani retail industry as context, capturing the reader and establishing the absolute importance of this topic]

## The Core Business Problems Faced by Pakistani Retailers
[Describe the core operational leakages, cash pilferage, manual billing delays, shoplifting, pricing errors, inventory shrinkages, tax audits, or other pain points that Pakistani retailers face when they lack proper systems for this topic. Use the words 'leakage' or 'leak' or 'challenge' or 'problem' in the H3 subheadings or paragraphs to ensure it parses correctly]

## The Detailed Solution: ${config.title}
[Provide a deep-dive, professional explanation of how Chishty Smart Solutions addresses this problem through advanced automation and Retail POS features. Describe features like real-time synchronization, cloud reliability, local tax integration, and intuitive interfaces.]

## Step-by-Step Guide: Best Practices & Strategy
[Provide an actionable, exhaustive, step-by-step implementation and strategy guide for retail owners.]

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
[A powerful summarizing conclusion prompting readers to contact Chishty Smart Solutions to automate their retail business and secure their margins.]

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
  console.log("Starting sequential generation of retail blogs #31-40 with backoff...");
  for (const config of BLOG_CONFIGS) {
    await generateBlogWithRetry(config);
    // Add a 5 second delay between posts to prevent hitting rate-limits
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
  console.log("All retail blog generations completed.");
}

run();
