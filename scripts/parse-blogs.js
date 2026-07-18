const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Configure marked options for GFM tables, line breaks, etc.
const renderer = {
  heading(arg1, arg2) {
    let text = "";
    let level = 2;
    if (typeof arg1 === 'object' && arg1 !== null) {
      text = arg1.text || arg1.raw || "";
      level = arg1.depth || 2;
    } else {
      text = String(arg1 || "");
      level = arg2 || 2;
    }
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    return `<h${level} id="${slug}">${text}</h${level}>`;
  }
};
marked.use({ renderer });

marked.setOptions({
  gfm: true,
  breaks: true,
});

// Author template
const authorTemplate = {
  name: "Hamad Chishty",
  role: "Founder & CEO",
  bio: "An enterprise software architect and systems engineer, Hamad has designed high-availability POS and ERP platforms for multi-branch brands across Pakistan and UAE.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
};

// Standard high-quality relevant Unsplash images for the 20 articles
const unsplashImages = {
  "001": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&h=630&q=80",
  "002": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=630&q=80",
  "003": "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&h=630&q=80",
  "004": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=630&q=80",
  "005": "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=1200&h=630&q=80",
  "006": "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&w=1200&h=630&q=80",
  "007": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&h=630&q=80",
  "008": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&h=630&q=80",
  "009": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80",
  "010": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&h=630&q=80",
  "011": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&h=630&q=80",
  "012": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80",
  "013": "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&h=630&q=80",
  "014": "https://images.unsplash.com/photo-1526367790999-0150786486a9?auto=format&fit=crop&w=1200&h=630&q=80",
  "015": "https://images.unsplash.com/photo-1586486855514-8c633cc6fa98?auto=format&fit=crop&w=1200&h=630&q=80",
  "016": "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&h=630&q=80",
  "017": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=630&q=80",
  "018": "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=1200&h=630&q=80",
  "019": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&h=630&q=80",
  "020": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&h=630&q=80",
  "021": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=630&q=80",
  "022": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&h=630&q=80",
  "023": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80",
  "024": "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&h=630&q=80",
  "025": "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&w=1200&h=630&q=80",
  "026": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&h=630&q=80",
  "027": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=630&q=80",
  "028": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&h=630&q=80",
  "029": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80",
  "030": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&h=630&q=80",
  "031": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=630&q=80",
  "032": "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&h=630&q=80",
  "033": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&h=630&q=80",
  "034": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&h=630&q=80",
  "035": "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&h=630&q=80",
  "036": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80",
  "037": "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=1200&h=630&q=80",
  "038": "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&h=630&q=80",
  "039": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80",
  "040": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&h=630&q=80",
  "041": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80",
  "042": "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&h=630&q=80",
  "043": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80",
  "044": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&h=630&q=80",
  "045": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&h=630&q=80",
  "046": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&h=630&q=80",
  "047": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&h=630&q=80",
  "048": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=630&q=80",
  "049": "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&h=630&q=80",
  "050": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&h=630&q=80",
  "051": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&h=630&q=80",
  "052": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&h=630&q=80",
  "053": "https://images.unsplash.com/photo-1553413719-8758712a59fb?auto=format&fit=crop&w=1200&h=630&q=80",
  "054": "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=1200&h=630&q=80",
  "055": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&h=630&q=80",
  "056": "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&h=630&q=80",
  "057": "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&h=630&q=80",
  "058": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80",
  "059": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80",
  "060": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&h=630&q=80",
  "061": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&h=630&q=80",
  "062": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80",
  "063": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80",
  "064": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&h=630&q=80",
  "065": "https://images.unsplash.com/photo-1552581230-c015914626ed?auto=format&fit=crop&w=1200&h=630&q=80",
  "066": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&h=630&q=80",
  "067": "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&h=630&q=80",
  "068": "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&h=630&q=80",
  "069": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80",
  "070": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&h=630&q=80",
  "071": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&h=630&q=80",
  "072": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&h=630&q=80",
  "073": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80",
  "074": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&h=630&q=80",
  "075": "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&h=630&q=80",
  "076": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&h=630&q=80",
  "077": "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&h=630&q=80",
  "078": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80",
  "079": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80",
  "080": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&h=630&q=80",
  "081": "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1200&h=630&q=80",
  "082": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&h=630&q=80",
  "083": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80",
  "084": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=630&q=80",
  "085": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&h=630&q=80",
  "086": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80",
  "087": "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&h=630&q=80",
  "088": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=630&q=80",
  "089": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&h=630&q=80",
  "090": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&h=630&q=80",
  "091": "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&h=630&q=80",
  "092": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&h=630&q=80",
  "093": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80",
  "094": "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&h=630&q=80",
  "095": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=630&q=80",
  "096": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&h=630&q=80",
  "097": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80",
  "098": "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&h=630&q=80",
  "099": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&h=630&q=80",
  "100": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=630&q=80"
};

// Dates spaced out nicely
const dates = {
  "001": "July 16, 2026",
  "002": "July 15, 2026",
  "003": "July 14, 2026",
  "004": "July 13, 2026",
  "005": "July 12, 2026",
  "006": "July 11, 2026",
  "007": "July 10, 2026",
  "008": "July 09, 2026",
  "009": "July 08, 2026",
  "010": "July 07, 2026",
  "011": "July 06, 2026",
  "012": "July 05, 2026",
  "013": "July 04, 2026",
  "014": "July 03, 2026",
  "015": "July 02, 2026",
  "016": "July 01, 2026",
  "017": "June 30, 2026",
  "018": "June 29, 2026",
  "019": "June 28, 2026",
  "020": "June 27, 2026",
  "021": "June 26, 2026",
  "022": "June 25, 2026",
  "023": "June 24, 2026",
  "024": "June 23, 2026",
  "025": "June 22, 2026",
  "026": "June 21, 2026",
  "027": "June 20, 2026",
  "028": "June 19, 2026",
  "029": "June 18, 2026",
  "030": "June 17, 2026",
  "031": "June 16, 2026",
  "032": "June 15, 2026",
  "033": "June 14, 2026",
  "034": "June 13, 2026",
  "035": "June 12, 2026",
  "036": "June 11, 2026",
  "037": "June 10, 2026",
  "038": "June 09, 2026",
  "039": "June 08, 2026",
  "040": "June 07, 2026",
  "041": "June 06, 2026",
  "042": "June 05, 2026",
  "043": "June 04, 2026",
  "044": "June 03, 2026",
  "045": "June 02, 2026",
  "046": "June 01, 2026",
  "047": "May 31, 2026",
  "048": "May 30, 2026",
  "049": "May 29, 2026",
  "050": "May 28, 2026",
  "051": "May 27, 2026",
  "052": "May 26, 2026",
  "053": "May 25, 2026",
  "054": "May 24, 2026",
  "055": "May 23, 2026",
  "056": "May 22, 2026",
  "057": "May 21, 2026",
  "058": "May 20, 2026",
  "059": "May 19, 2026",
  "060": "May 18, 2026",
  "061": "May 17, 2026",
  "062": "May 16, 2026",
  "063": "May 15, 2026",
  "064": "May 14, 2026",
  "065": "May 13, 2026",
  "066": "May 12, 2026",
  "067": "May 11, 2026",
  "068": "May 10, 2026",
  "069": "May 09, 2026",
  "070": "May 08, 2026",
  "071": "May 07, 2026",
  "072": "May 06, 2026",
  "073": "May 05, 2026",
  "074": "May 04, 2026",
  "075": "May 03, 2026",
  "076": "May 02, 2026",
  "077": "May 01, 2026",
  "078": "April 30, 2026",
  "079": "April 29, 2026",
  "080": "April 28, 2026",
  "081": "July 17, 2026",
  "082": "July 18, 2026",
  "083": "July 19, 2026",
  "084": "July 20, 2026",
  "085": "July 21, 2026",
  "086": "July 22, 2026",
  "087": "July 23, 2026",
  "088": "July 24, 2026",
  "089": "July 25, 2026",
  "090": "July 26, 2026",
  "091": "July 27, 2026",
  "092": "July 28, 2026",
  "093": "July 29, 2026",
  "094": "July 30, 2026",
  "095": "July 31, 2026",
  "096": "August 01, 2026",
  "097": "August 02, 2026",
  "098": "August 03, 2026",
  "099": "August 04, 2026",
  "100": "August 05, 2026"
};

function getBulletPointsFromSection(text, sectionHeaderKeywords) {
  const lines = text.split('\n');
  let inSection = false;
  const bullets = [];
  
  for (let line of lines) {
    if (line.startsWith('##')) {
      const isMatch = sectionHeaderKeywords.some(keyword => 
        line.toLowerCase().includes(keyword.toLowerCase())
      );
      if (isMatch) {
        inSection = true;
      } else {
        inSection = false;
      }
      continue;
    }
    
    if (inSection) {
      const trimmed = line.trim();
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        bullets.push(trimmed.replace(/^[*-\s]+/, '').trim());
      } else if (/^\d+\.\s+/.test(trimmed)) {
        bullets.push(trimmed.replace(/^\d+\.\s+/, '').trim());
      }
    }
  }
  return bullets;
}

function getExpertTipsFromSection(text) {
  const lines = text.split('\n');
  let inSection = false;
  const tips = [];
  
  for (let line of lines) {
    if (line.startsWith('##')) {
      if (line.toLowerCase().includes('expert tip') || line.toLowerCase().includes('industry leader')) {
        inSection = true;
      } else {
        inSection = false;
      }
      continue;
    }
    
    if (inSection) {
      const trimmed = line.trim();
      if (trimmed.startsWith('>')) {
        tips.push(trimmed.replace(/^>\s*/, '').trim());
      } else if (trimmed.length > 0 && !trimmed.startsWith('---') && !trimmed.startsWith('#')) {
        tips.push(trimmed);
      }
    }
  }
  return tips;
}

function getTextFromSection(text, sectionHeaderKeywords) {
  const lines = text.split('\n');
  let inSection = false;
  const sectionLines = [];
  
  for (let line of lines) {
    if (line.startsWith('##')) {
      const isMatch = sectionHeaderKeywords.some(keyword => 
        line.toLowerCase().includes(keyword.toLowerCase())
      );
      if (isMatch) {
        inSection = true;
      } else {
        inSection = false;
      }
      continue;
    }
    
    if (inSection) {
      sectionLines.push(line);
    }
  }
  return sectionLines.join('\n').trim();
}

function cleanMarkdownBody(text) {
  // Remove Table of Contents section
  let cleaned = text;
  const tocStart = cleaned.indexOf('## Table of Contents');
  if (tocStart !== -1) {
    const nextSectionStart = cleaned.indexOf('##', tocStart + 20);
    if (nextSectionStart !== -1) {
      cleaned = cleaned.substring(nextSectionStart);
    }
  }
  
  // Remove Schema-Ready FAQ Markup section at the end
  const schemaStart = cleaned.indexOf('## Schema-Ready FAQ Markup');
  if (schemaStart !== -1) {
    cleaned = cleaned.substring(0, schemaStart);
  }
  
  return cleaned.trim();
}

function parseMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  const metadata = {};
  let bodyStartIndex = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('# Blog Number:')) {
      metadata.num = line.replace('# Blog Number:', '').trim();
    } else if (line.startsWith('# Blog Title:')) {
      metadata.title = line.replace('# Blog Title:', '').trim();
    } else if (line.startsWith('# Slug:')) {
      metadata.slug = line.replace('# Slug:', '').trim();
    } else if (line.startsWith('# Category:')) {
      metadata.category = line.replace('# Category:', '').trim();
    } else if (line.startsWith('# Focus Keyword:')) {
      metadata.focusKeyword = line.replace('# Focus Keyword:', '').trim();
    } else if (line.startsWith('# Meta Title:')) {
      metadata.metaTitle = line.replace('# Meta Title:', '').trim();
    } else if (line.startsWith('# Meta Description:')) {
      metadata.metaDescription = line.replace('# Meta Description:', '').trim();
    } else if (line.startsWith('# Reading Time:')) {
      metadata.readTime = line.replace('# Reading Time:', '').trim();
    } else if (line.startsWith('# Featured Image Suggestion:')) {
      metadata.imageSuggestion = line.replace('# Featured Image Suggestion:', '').trim();
    } else if (line.startsWith('# ALT Text:')) {
      metadata.altText = line.replace('# ALT Text:', '').trim();
    }
    
    if (line === '---' && i > 5) {
      bodyStartIndex = i + 1;
      break;
    }
  }
  
  const bodyText = lines.slice(bodyStartIndex).join('\n').trim();
  const cleanedBody = cleanMarkdownBody(bodyText);
  
  // Convert cleaned body markdown to HTML
  const contentHtml = marked(cleanedBody);
  
  // Extract JSON Schema block at the end
  const jsonMatch = content.match(/```json\s*(\{[\s\S]*?\})\s*```/);
  let schemaObj = null;
  let faqs = [];
  
  if (jsonMatch) {
    try {
      schemaObj = JSON.parse(jsonMatch[1]);
      if (schemaObj.mainEntity) {
        faqs = schemaObj.mainEntity.map(item => ({
          question: item.name,
          answer: item.acceptedAnswer.text
        }));
      }
    } catch (e) {
      console.error(`Error parsing schema JSON in ${filePath}:`, e);
    }
  }
  
  // Extract specific bento sections
  const benefits = getBulletPointsFromSection(bodyText, ["benefit", "yield"]);
  const bestPractices = getBulletPointsFromSection(bodyText, ["best practice", "maximizing"]);
  const commonMistakes = getBulletPointsFromSection(bodyText, ["mistake", "avoid"]);
  const expertTips = getExpertTipsFromSection(bodyText);
  
  const rawIntroduction = getTextFromSection(bodyText, ["introduction"]);
  const introduction = rawIntroduction ? marked(rawIntroduction) : "";
  
  const rawProblemStatement = getTextFromSection(bodyText, ["problem", "leakage", "leak", "challenge"]);
  const problemStatement = rawProblemStatement ? marked(rawProblemStatement) : "";
  
  // If we couldn't parse FAQs from Schema, look in body text
  if (faqs.length === 0) {
    // Basic fallback faqs if parsing failed
    faqs = [
      {
        question: `What is the focus of ${metadata.title}?`,
        answer: metadata.metaDescription
      }
    ];
  }
  
  const paddedNum = metadata.num.padStart(3, '0');
  const image = unsplashImages[paddedNum] || "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&h=630&q=80";
  const date = dates[paddedNum] || "July 16, 2026";
  
  // Construct tags
  const tags = [metadata.category, "Pakistan", "Business", "Automation"];
  if (metadata.focusKeyword) {
    tags.push(metadata.focusKeyword.split(' ').slice(0, 2).join(' '));
  }
  
  // Generate high-quality Article Schema Markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": metadata.title,
    "description": metadata.metaDescription,
    "image": image,
    "author": {
      "@type": "Person",
      "name": "Hamad Chishty"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Chishty Smart Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chishtysmartsolutions.com/assets/logo.png"
      }
    },
    "datePublished": "2026-07-16"
  };
  
  return {
    title: metadata.title,
    slug: metadata.slug,
    category: metadata.category,
    desc: metadata.metaDescription,
    date: date,
    readTime: metadata.readTime,
    author: authorTemplate,
    image: image,
    seo: {
      title: metadata.metaTitle,
      description: metadata.metaDescription,
      focusKeyword: metadata.focusKeyword,
      secondaryKeywords: [metadata.focusKeyword, "restaurant business pakistan", "enterprise erp software"],
      lsiKeywords: ["billing software", "inventory systems", "pos software pk"],
      altText: metadata.altText
    },
    tags: tags,
    faqs: faqs,
    introduction: introduction || metadata.metaDescription,
    problemStatement: problemStatement || "SMEs in Pakistan face severe operational inefficiencies, cash pilferage, and inventory wastage due to un-digitized workflows.",
    detailedSolutionHtml: contentHtml, // Store the full rendered markdown HTML as the main detailed content
    benefits: benefits.length > 0 ? benefits : ["Plugs up to 98% of operational leakage in the first month.", "Reduces average customer checkout times by 40%."],
    bestPractices: bestPractices.length > 0 ? bestPractices : ["Establish roles with hierarchical permission levels.", "Ensure power and network redundancy."],
    commonMistakes: commonMistakes.length > 0 ? commonMistakes : ["Choosing free or low-cost offline systems.", "Skipping structured employee training."],
    expertTips: expertTips.length > 0 ? expertTips : ["Leverage custom business integrations to automate recipe cost calculations directly on sales ticket events."],
    conclusion: "Investing in premium custom-tailored automation is an investment in your margins and scaling security.",
    schemaMarkup: schemaMarkup,
    fullContentHtml: contentHtml
  };
}

// Read and process all files
const rootDir = path.join(__dirname, '..');
const files = fs.readdirSync(rootDir);
const blogFiles = files
  .filter(f => /^\d{3}-.*\.md$/.test(f))
  .sort();

console.log(`Found ${blogFiles.length} blog files to parse.`);

const parsedPosts = [];

for (const file of blogFiles) {
  const filePath = path.join(rootDir, file);
  console.log(`Parsing ${file}...`);
  try {
    const post = parseMarkdownFile(filePath);
    parsedPosts.push(post);
  } catch (err) {
    console.error(`Error parsing ${file}:`, err);
  }
}

// Generate the TypeScript file contents and separate JSON files
const contentDir = path.join(rootDir, 'lib', 'blog-content');
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

// Separate heavy content from metadata
const metadataPosts = [];

for (const post of parsedPosts) {
  // 1. Save detailed HTML content to separate JSON file
  const detailedContent = {
    introduction: post.introduction,
    problemStatement: post.problemStatement,
    detailedSolutionHtml: post.detailedSolutionHtml,
    fullContentHtml: post.fullContentHtml
  };
  fs.writeFileSync(
    path.join(contentDir, `${post.slug}.json`),
    JSON.stringify(detailedContent, null, 2),
    'utf-8'
  );

  // 2. Create metadata-only post
  const { introduction, problemStatement, detailedSolutionHtml, fullContentHtml, ...metadataOnly } = post;
  metadataPosts.push(metadataOnly);
}

const tsOutput = `export interface BlogPost {
  title: string;
  slug: string;
  category: string;
  desc: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    bio: string;
    avatar: string;
  };
  image: string;
  seo: {
    title: string;
    description: string;
    focusKeyword: string;
    secondaryKeywords: string[];
    lsiKeywords: string[];
    altText: string;
  };
  tags: string[];
  faqs: { question: string; answer: string }[];
  introduction?: string;
  problemStatement?: string;
  detailedSolutionHtml?: string;
  benefits: string[];
  bestPractices: string[];
  commonMistakes: string[];
  expertTips: string[];
  conclusion: string;
  schemaMarkup: any;
  fullContentHtml?: string;
}

export const BLOG_POSTS: BlogPost[] = ${JSON.stringify(metadataPosts, null, 2)};
`;

fs.writeFileSync(path.join(rootDir, 'lib', 'blog-data.ts'), tsOutput, 'utf-8');
console.log('Successfully wrote parsed blog posts to /lib/blog-data.ts');
console.log(`Successfully wrote ${metadataPosts.length} individual blog content JSON files to /lib/blog-content/`);

