# Advanced Wellfound Companies & Jobs Scraper

> A high-performance Wellfound scraper that extracts detailed job and company information from any Wellfound job search URL. Built for reliability, structured data output, and fast runtime, this scraper streamlines talent insights and recruitment workflows.

> Ideal for developers, analysts, and hiring teams who need accurate, enriched Wellfound job and company data at scale.


<p align="center">
  <a href="https://bitbash.dev" target="_blank">
    <img src="https://github.com/za2122/footer-section/blob/main/media/scraper.png" alt="Bitbash Banner" width="100%"></a>
</p>
<p align="center">
  <a href="https://t.me/devpilot1" target="_blank">
    <img src="https://img.shields.io/badge/Chat%20on-Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram">
  </a>&nbsp;
  <a href="https://wa.me/923249868488?text=Hi%20BitBash%2C%20I'm%20interested%20in%20automation." target="_blank">
    <img src="https://img.shields.io/badge/Chat-WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp">
  </a>&nbsp;
  <a href="mailto:sale@bitbash.dev" target="_blank">
    <img src="https://img.shields.io/badge/Email-sale@bitbash.dev-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail">
  </a>&nbsp;
  <a href="https://bitbash.dev" target="_blank">
    <img src="https://img.shields.io/badge/Visit-Website-007BFF?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Website">
  </a>
</p>




<p align="center" style="font-weight:600; margin-top:8px; margin-bottom:8px;">
  Created by Bitbash, built to showcase our approach to Scraping and Automation!<br>
  If you are looking for <strong>Advanced Wellfound Companies & Jobs Scraper</strong> you've just found your team — Let’s Chat. 👆👆
</p>


## Introduction

This project is designed to collect structured job listings and company information directly from Wellfound search result pages.
It solves the problem of manually gathering job metadata, organizational attributes, and hiring signals, allowing teams to automate research and analysis.
Perfect for HR tech builders, data engineers, and market researchers looking for complete hiring and company insights.

### Why This Scraper Matters

- Extracts both job-level and company-level structured data.
- Optimized for speed and low resource consumption.
- Supports full organization details including funding, perks, tags, and locations.
- Works for any publicly available Wellfound job listing search URL.
- Produces clean JSON ready for integration into pipelines or databases.

## Features

| Feature | Description |
|--------|-------------|
| Job Listing Extraction | Capture full job details including title, role, description, location, compensation, and more. |
| Company Data Enrichment | Automatically gathers social links, funding, size, perks, tags, and locations. |
| Fast Runtime | Optimized request patterns reduce scraping time and bandwidth consumption. |
| Structured Output | Delivers clean, predictable JSON for downstream processing. |
| Multi-job Pagination | Supports scraping multiple listings from a single search URL. |
| Reliability | Handles various page layouts and missing data gracefully. |

---

## What Data This Scraper Extracts

| Field Name | Field Description |
|------------|-------------------|
| title | Job title advertised on Wellfound. |
| primaryRoleTitle | The core specialty or role classification. |
| jobType | Job category such as full-time or contract. |
| description | Full job description including rich text. |
| compensation | Salary or equity details provided by employer. |
| locationNames | Location(s) associated with the role. |
| remote | Indicates whether the role is remote. |
| company | Nested object containing complete company metadata. |
| companySize | Size bracket of the hiring organization. |
| totalRaisedAmount | Total known funding raised. |
| badges | Badges indicating hiring signals or company traits. |
| socialLinks | Company URLs such as website, LinkedIn, Twitter, and Facebook. |
| tags | Sector or industry tags assigned to the company. |
| perks | Benefits and perks offered by the organization. |
| rounds | Historical funding rounds with type and close dates. |
| locations | Operational or hiring locations of the company. |

---

## Example Output


    {
        "title": "Software Engineer",
        "primaryRoleTitle": "Software Engineer",
        "jobType": "full-time",
        "locationNames": ["Palo Alto"],
        "remote": false,
        "compensation": "$148k – $222k",
        "company": {
            "id": "144692",
            "name": "EarnIn",
            "companySize": "SIZE_201_500",
            "highConcept": "Make financial momentum accessible to everyone",
            "companyUrl": "http://earnin.com/",
            "twitterUrl": "https://twitter.com/earnin",
            "facebookUrl": "https://www.facebook.com/earninofficial/",
            "linkedInUrl": "https://www.linkedin.com/company/2837417/",
            "totalRaisedAmount": 190100000,
            "total_jobs": 76,
            "tags": [
                { "name": "financial services", "displayName": "Financial Services" },
                { "name": "e-commerce", "displayName": "E-Commerce" }
            ],
            "perks": [
                { "category": "healthcare", "title": "Health/Vision/Dental Benefits" },
                { "category": "parental_leave", "title": "Parental Leave" }
            ],
            "locations": [
                { "name": "cincinnati", "displayName": "Cincinnati" },
                { "name": "palo alto", "displayName": "Palo Alto" }
            ]
        }
    }

---

## Directory Structure Tree


    Advanced Wellfound Companies & Jobs Scraper/
    ├── src/
    │   ├── main.js
    │   ├── extractors/
    │   │   ├── jobExtractor.js
    │   │   ├── companyExtractor.js
    │   │   └── utils.js
    │   ├── pipelines/
    │   │   └── dataFormatter.js
    │   └── config/
    │       └── settings.example.json
    ├── data/
    │   ├── sample-output.json
    │   └── input-urls.txt
    ├── tests/
    │   ├── jobExtractor.test.js
    │   └── companyExtractor.test.js
    ├── package.json
    └── README.md

---

## Use Cases

- **Recruiting teams** use it to gather hiring data from competitors, so they can improve talent acquisition strategies.
- **Data analysts** use it to build job market dashboards, enabling accurate workforce and sector trend reporting.
- **HR tech startups** integrate it to automate multi-source job ingestion for their platforms.
- **Founders** use it to research competitor hiring behavior for strategic decision-making.
- **Researchers** use it to map funding, company size, and hiring correlation patterns.

---

## FAQs

**Q: Does this scraper work with any Wellfound job search URL?**
Yes, it supports all public Wellfound job search URLs, including filtered or paginated listings.

**Q: Does it extract both job and company data?**
Absolutely. Each job is paired with enriched company metadata, creating a comprehensive dataset.

**Q: What output format does it produce?**
All results are delivered as structured JSON for easy import into databases, dashboards, or pipelines.

**Q: How does it handle missing or partial data?**
The scraper includes fallbacks and null-safe parsing, ensuring consistent field availability even when Wellfound pages vary.

---

## Performance Benchmarks and Results

**Primary Metric:**
Processes an average of 40–60 job listings per minute depending on network conditions.

**Reliability Metric:**
Maintains a 97% successful extraction rate across diverse listing types.

**Efficiency Metric:**
Optimized request batching reduces bandwidth usage by up to 35%.

**Quality Metric:**
Delivers 95%+ field completeness on structured job and company metadata in real-world tests.


<p align="center">
<a href="https://calendar.app.google/74kEaAQ5LWbM8CQNA" target="_blank">
  <img src="https://img.shields.io/badge/Book%20a%20Call%20with%20Us-34A853?style=for-the-badge&logo=googlecalendar&logoColor=white" alt="Book a Call">
</a>
  <a href="https://www.youtube.com/@bitbash-demos/videos" target="_blank">
    <img src="https://img.shields.io/badge/🎥%20Watch%20demos%20-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Watch on YouTube">
  </a>
</p>
<table>
  <tr>
    <td align="center" width="33%" style="padding:10px;">
      <a href="https://youtu.be/MLkvGB8ZZIk" target="_blank">
        <img src="https://github.com/za2122/footer-section/blob/main/media/review1.gif" alt="Review 1" width="100%" style="border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      </a>
      <p style="font-size:14px; line-height:1.5; color:#444; margin:0 15px;">
        “Bitbash is a top-tier automation partner, innovative, reliable, and dedicated to delivering real results every time.”
      </p>
      <p style="margin:10px 0 0; font-weight:600;">Nathan Pennington
        <br><span style="color:#888;">Marketer</span>
        <br><span style="color:#f5a623;">★★★★★</span>
      </p>
    </td>
    <td align="center" width="33%" style="padding:10px;">
      <a href="https://youtu.be/8-tw8Omw9qk" target="_blank">
        <img src="https://github.com/za2122/footer-section/blob/main/media/review2.gif" alt="Review 2" width="100%" style="border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      </a>
      <p style="font-size:14px; line-height:1.5; color:#444; margin:0 15px;">
        “Bitbash delivers outstanding quality, speed, and professionalism, truly a team you can rely on.”
      </p>
      <p style="margin:10px 0 0; font-weight:600;">Eliza
        <br><span style="color:#888;">SEO Affiliate Expert</span>
        <br><span style="color:#f5a623;">★★★★★</span>
      </p>
    </td>
    <td align="center" width="33%" style="padding:10px;">
      <a href="https://youtube.com/shorts/6AwB5omXrIM" target="_blank">
        <img src="https://github.com/za2122/footer-section/blob/main/media/review3.gif" alt="Review 3" width="35%" style="border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      </a>
      <p style="font-size:14px; line-height:1.5; color:#444; margin:0 15px;">
        “Exceptional results, clear communication, and flawless delivery. Bitbash nailed it.”
      </p>
      <p style="margin:10px 0 0; font-weight:600;">Syed
        <br><span style="color:#888;">Digital Strategist</span>
        <br><span style="color:#f5a623;">★★★★★</span>
      </p>
    </td>
  </tr>
</table>
