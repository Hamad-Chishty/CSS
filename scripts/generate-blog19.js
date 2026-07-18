const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const config = {
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
};

const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({
  apiKey: apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build'
    }
  }
});

const fileName = `${config.num.padStart(3, '0')}-${config.slug}.md`;
const filePath = path.join(__dirname, '..', fileName);

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

async function generate() {
  let attempt = 1;
  const maxAttempts = 6;
  
  while (attempt <= maxAttempts) {
    try {
      console.log(`Generating ${fileName} (Attempt ${attempt}/${maxAttempts})...`);
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
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

      fs.writeFileSync(filePath, text, 'utf-8');
      console.log(`Successfully generated and saved ${fileName}!`);
      return;
    } catch (error) {
      console.warn(`Attempt ${attempt} failed with error: ${error.message}`);
      attempt++;
      if (attempt <= maxAttempts) {
        const delay = attempt * 3000;
        console.log(`Waiting ${delay}ms before retrying...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        console.error("Failed after all attempts.");
      }
    }
  }
}

generate();
