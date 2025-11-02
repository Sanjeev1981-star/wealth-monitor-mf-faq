Wealth Monitor MF FAQ Assistant

A facts-only chatbot that answers factual questions about mutual fund schemes using verified sources from AMC, SEBI, and AMFI websites. No investment advice provided.


🎯 Project Overview
This is a milestone project that builds a small FAQ assistant for Wealth Monitor users to get instant, citation-backed answers about popular mutual fund schemes. The bot strictly provides factual information and refuses any investment advice or recommendations.
Live Demo: Try the prototype here

📋 Table of Contents

Features
Scope
Source List
Sample Q&A
Disclaimer
Setup Instructions
Architecture
Known Limitations
Compliance


✨ Features
✅ Facts-Only Responses - No investment advice or recommendations
✅ Source Citations - Every answer includes official AMC/SEBI/AMFI link
✅ Advice Detection - Politely refuses portfolio/performance queries
✅ Clean UI - Wealth Monitor's emerald gradient design
✅ Mobile Responsive - Works on all screen sizes
✅ Zero PII - No personal data collection
✅ Fast - Sub-second response time

🎯 Scope
Platform
Wealth Monitor - Portfolio tracking & wealth aggregation platform
AMCs Covered

ICICI Prudential
HDFC Mutual Fund
Mirae Asset
Quant Mutual Fund

Schemes Covered (4 funds)

ICICI Prudential Bluechip Fund (Large Cap)
HDFC Mid-Cap Opportunities Fund (Mid Cap)
Mirae Asset Large Cap Fund (Large Cap)
Quant ELSS Tax Saver (ELSS/Tax Saver)

Topics Answered

Expense ratio (regular vs direct)
Exit load structures
Minimum SIP/lumpsum amounts
ELSS lock-in periods
Riskometer ratings
Benchmark indices
How to download statements
NAV calculation
Direct vs regular plan differences


📚 Source List
Total sources: 30 URLs (all public, no authentication required)
AMC Factsheets (4 sources)
#AMCSchemeURL1ICICI PrudentialBluechip Fundhttps://www.icicipruamc.com/mutual-fund/equity-funds/icici-prudential-bluechip-fund/factsheet2HDFC MFMid-Cap Opportunitieshttps://www.hdfcfund.com/funds/hdfc-mid-cap-opportunities-fund/factsheet3Mirae AssetLarge Cap Fundhttps://www.miraeassetmf.co.in/schemes/equity-schemes/mirae-asset-large-cap-fund/factsheet4Quant MFELSS Tax Saverhttps://www.quantumamc.com/schemes/quant-elss-tax-saver-fund/factsheet
Scheme Information Documents - SID (4 sources)
#AMCSchemeURL5ICICI PrudentialBluechip Fundhttps://www.icicipruamc.com/mutual-fund/equity-funds/icici-prudential-bluechip-fund/sid6HDFC MFMid-Cap Opportunitieshttps://www.hdfcfund.com/funds/hdfc-mid-cap-opportunities-fund/sid7Mirae AssetLarge Cap Fundhttps://www.miraeassetmf.co.in/schemes/equity-schemes/mirae-asset-large-cap-fund/sid8Quant MFELSS Tax Saverhttps://www.quantumamc.com/schemes/quant-elss-tax-saver-fund/sid
Key Information Memorandum - KIM (4 sources)
#AMCSchemeURL9ICICI PrudentialBluechip Fundhttps://www.icicipruamc.com/mutual-fund/equity-funds/icici-prudential-bluechip-fund/kim10HDFC MFMid-Cap Opportunitieshttps://www.hdfcfund.com/funds/hdfc-mid-cap-opportunities-fund/kim11Mirae AssetLarge Cap Fundhttps://www.miraeassetmf.co.in/schemes/equity-schemes/mirae-asset-large-cap-fund/kim12Quant MFELSS Tax Saverhttps://www.quantumamc.com/schemes/quant-elss-tax-saver-fund/kim
AMC General Pages (6 sources)
#AMCTopicURL13ICICI PrudentialFee Structurehttps://www.icicipruamc.com/investor-services/fees-and-charges14ICICI PrudentialSIP Informationhttps://www.icicipruamc.com/invest/sip15HDFC MFInvestment Processhttps://www.hdfcfund.com/invest-now/sip16HDFC MFFAQhttps://www.hdfcfund.com/resources/faq17Mirae AssetInvestor Serviceshttps://www.miraeassetmf.co.in/investor-services18Quant MFTax Informationhttps://www.quantumamc.com/investor-services/tax-resources
Statement & Documentation Services (3 sources)
#ProviderServiceURL19CAMSCAS Downloadhttps://www.camsonline.com/Investors/Statements/Consolidated-Account-Statement20KFintechStatement Serviceshttps://www.kfintech.com/investors/statement-of-account21CAMSCapital Gainshttps://www.camsonline.com/Investors/Statements/Tax-Statement
SEBI Regulatory Sources (5 sources)
#TopicURL22Expense Ratio Normshttps://www.sebi.gov.in/legal/circulars/oct-2018/total-expense-ratio-ter-and-performance-disclosure-for-mutual-funds_40652.html23Riskometer Guidelineshttps://www.sebi.gov.in/legal/circulars/jan-2021/standardization-of-risk-labels-across-mutual-fund-schemes_48524.html24Direct Plan Circularhttps://www.sebi.gov.in/sebi_data/attachdocs/1347338381161.pdf25MF Regulations 1996https://www.sebi.gov.in/legal/regulations/sebi-mutual-funds-regulations-1996_179456.html26RIA Guidelineshttps://www.sebi.gov.in/ria.html
AMFI Sources (4 sources)
#TopicURL27ELSS Informationhttps://www.amfiindia.com/investor-corner/knowledge-center/elss.html28NAV Databasehttps://www.amfiindia.com/nav-history29SIP Guidehttps://www.amfiindia.com/investor-corner/knowledge-center/sip.html30What are MFshttps://www.amfiindia.com/investor-corner/knowledge-center/what-are-mutual-funds
Source Quality:

✅ All sources are public (no authentication required)
✅ Official sources only (AMC/SEBI/AMFI/RTA)
✅ No third-party blogs or aggregators
✅ All links tested and accessible (Nov 2024)


💬 Sample Q&A
Query 1: Factual - Expense Ratio
User: What is the expense ratio of ICICI Prudential Bluechip Fund?
Assistant: ICICI Prudential Bluechip Fund has an expense ratio of 1.90% for regular plan and 0.80% for direct plan.
Source: https://www.icicipruamc.com/mutual-fund/equity-funds/icici-prudential-bluechip-fund/factsheet
Timestamp: Sources updated: Nov 2024

Query 2: Factual - Exit Load
User: Exit load for HDFC Mid-Cap Fund?
Assistant: HDFC Mid-Cap Opportunities Fund has 1% exit load if redeemed within 1 year. No exit load after 1 year.
Source: https://www.hdfcfund.com/funds/hdfc-mid-cap-opportunities-fund/sid
Timestamp: Sources updated: Nov 2024

Query 3: Factual - ELSS Lock-in
User: ELSS lock-in period?
Assistant: ELSS funds have mandatory 3-year lock-in from each investment date. Qualify for tax deduction up to ₹1.5 lakh under Section 80C. Each SIP has its own 3-year lock-in.
Source: https://www.amfiindia.com/investor-corner/knowledge-center/elss.html
Timestamp: Sources updated: Nov 2024

Query 4: Factual - Minimum SIP
User: Minimum SIP amount for ICICI funds?
Assistant: ICICI Prudential funds have minimum SIP of ₹1,000 per month for most equity schemes. Lumpsum minimum is ₹5,000.
Source: https://www.icicipruamc.com/invest/sip
Timestamp: Sources updated: Nov 2024

Query 5: Factual - Riskometer
User: Risk level of HDFC Mid-Cap Fund?
Assistant: HDFC Mid-Cap Opportunities Fund is categorized as "Very High Risk" on riskometer (mid-cap equity exposure).
Source: https://www.hdfcfund.com/funds/hdfc-mid-cap-opportunities-fund/factsheet
Timestamp: Sources updated: Nov 2024

Query 6: Advice Request - REFUSED ❌
User: Which fund should I invest in for better returns?
Assistant: I provide factual information only, not investment advice. For personalized portfolio recommendations, please consult a SEBI-registered investment advisor or use Wealth Monitor's advisory services.
Help Link: https://www.sebi.gov.in/ria.html (Find SEBI-registered advisors)
Note: Correctly refused advice request per policy

Query 7: Factual - Benchmark
User: Benchmark for Mirae Asset Large Cap Fund?
Assistant: Mirae Asset Large Cap Fund benchmarks against Nifty 100 TRI.
Source: https://www.miraeassetmf.co.in/schemes/equity-schemes/mirae-asset-large-cap-fund/sid
Timestamp: Sources updated: Nov 2024

Query 8: Factual - Statement Download
User: How to download capital gains statement?
Assistant: Download consolidated account statement (CAS) from your Wealth Monitor dashboard under Reports. For capital gains tax statements, contact your AMC or use CAMS/Karvy portal.
Source: https://www.camsonline.com/Investors/Statements/Consolidated-Account-Statement
Timestamp: Sources updated: Nov 2024

Query 9: Advice Request - REFUSED ❌
User: Will Quant ELSS give good returns next year?
Assistant: I provide factual information only, not investment advice. For personalized portfolio recommendations, please consult a SEBI-registered investment advisor or use Wealth Monitor's advisory services.
Help Link: https://www.sebi.gov.in/ria.html (Find SEBI-registered advisors)
Note: Performance prediction request - correctly refused

Query 10: Factual - Direct vs Regular
User: Difference between direct and regular plan?
Assistant: Direct plans have no distributor commission, resulting in 0.5-1% lower expense ratio. Regular plans include advisor fees. Both invest in same portfolio but direct plans give higher returns.
Source: https://www.sebi.gov.in/sebi_data/attachdocs/1347338381161.pdf
Timestamp: Sources updated: Nov 2024

Statistics:

Total Queries: 10
Factual Answers: 8 (80%)
Advice Refusals: 2 (20%)
Average Answer Length: 1.9 sentences
Citations Provided: 8/8 factual answers (100%)
All answers ≤3 sentences: ✅ Yes


⚖️ Disclaimer
Main Disclaimer (Used in UI)
Facts-Only Policy: This assistant provides factual information from official 
AMC, SEBI, and AMFI sources. It does not provide investment advice, recommendations, 
or performance predictions. For personalized guidance, consult a SEBI-registered 
investment advisor.
Footer Disclaimer (Persistent)
Facts only • No investment advice • Consult SEBI-registered advisors
Advice Refusal Message
I provide factual information only, not investment advice. For personalized 
portfolio recommendations, please consult a SEBI-registered investment advisor 
or use Wealth Monitor's advisory services.

[Link] Find SEBI-registered advisors
→ https://www.sebi.gov.in/ria.html
PII Protection Warning
⚠️ Please don't share personal information like PAN, Aadhaar, account numbers, 
passwords, or OTPs. This bot only answers general factual questions about 
mutual fund schemes.
Legal Fine Print
Disclaimer: This FAQ assistant provides factual information sourced from publicly 
available documents from AMC websites, SEBI circulars, AMFI resources, and RTA 
portals. Information accuracy depends on source document updates. Users should 
verify critical details from official sources before making investment decisions.

This tool does not collect or store personally identifiable information (PII) 
including PAN, Aadhaar, bank account numbers, email addresses, or phone numbers. 
All conversations are stateless and not associated with user accounts.

This assistant does not provide investment advice, portfolio recommendations, 
performance predictions, or market timing guidance. For personalized financial 
advice, please consult a SEBI-registered investment advisor.

Mutual fund investments are subject to market risks. Please read all scheme-related 
documents carefully before investing. Past performance is not indicative of 
future results.

Data Sources: AMCs, SEBI, AMFI, CAMS, KFintech
Last Updated: November 2024

🚀 Setup Instructions
Prerequisites

Node.js 16+ (for local development)
Modern web browser (Chrome, Firefox, Safari, Edge)

Option 1: View Live Demo
Simply click the live demo link at the top of this README.
Option 2: Run Locally
bash# Clone the repository
git clone https://github.com/YOUR_USERNAME/wealth-monitor-mf-faq.git
cd wealth-monitor-mf-faq

# Install dependencies
npm install

# Install Lucide React icons
npm install lucide-react

# Start development server
npm start

# Open http://localhost:3000
Option 3: Deploy to Production
bash# Build for production
npm run build

# Deploy to your hosting service
# (Vercel, Netlify, AWS S3, etc.)

🏗️ Architecture
Current Prototype (Keyword-Based)
User Query
    ↓
Keyword Matching + Scheme Detection
    ↓
Knowledge Base Lookup (in-memory)
    ↓
Intent Detection (Advice vs Facts)
    ↓
Response Generation + Citation
    ↓
User receives answer (≤3 sentences) + source
Tech Stack:

React 18 with Hooks
Lucide React Icons
Tailwind CSS
In-memory knowledge base

Production RAG System (Recommended)
For a scalable production system, implement RAG (Retrieval-Augmented Generation):
User Query
    ↓
PII Detection & Filtering
    ↓
Intent Classification
    ↓
Query Embedding (OpenAI)
    ↓
Vector Search (Pinecone/Weaviate)
    ↓
Context Assembly
    ↓
LLM Response (Claude 3.5 Sonnet)
    ↓
Citation Validation
    ↓
Compliance Logging
    ↓
Response to User
Production Stack:

Backend: FastAPI (Python)
Vector DB: Pinecone or Weaviate
Embeddings: OpenAI text-embedding-3-large
LLM: Claude 3.5 Sonnet
Cache: Redis
DB: PostgreSQL (audit logs)


⚠️ Known Limitations
Scope Limitations

Only 4 schemes covered (out of 1000+ schemes in India)
Only 4 AMCs covered (out of 40+ AMCs)
Static data (no real-time updates)
English language only (no Hindi/regional languages)
No conversation memory (each query independent)

Functional Limitations

❌ Cannot provide investment advice
❌ Cannot predict returns or performance
❌ Cannot compare funds for selection
❌ Cannot calculate taxes
❌ Cannot provide market timing advice
❌ Cannot analyze portfolios
❌ Cannot suggest asset allocation

What Works

✅ Expense ratio queries
✅ Exit load information
✅ Minimum investment amounts
✅ ELSS lock-in periods
✅ Riskometer ratings
✅ Benchmark indices
✅ Statement download guidance
✅ NAV explanations
✅ Direct vs regular differences


🔒 Compliance
SEBI Compliance
✅ No unsolicited investment advice
✅ No performance guarantees
✅ Clear disclaimers throughout
✅ All claims sourced from official documents
✅ Focus on investor education
Data Privacy
✅ No PII collection
✅ No user tracking
✅ Stateless architecture
✅ No conversation history
✅ GDPR/DPDP Act ready
Safety Boundaries
✅ Advice detection and refusal
✅ PII filtering (if attempted)
✅ Performance prediction blocking
✅ Citation required for all facts
✅ 3-sentence answer limit

📊 Testing
Test Cases
Valid Queries (Should Work):
"What is the expense ratio of ICICI Bluechip?"
"Exit load for HDFC Mid-Cap?"
"ELSS lock-in period?"
"Minimum SIP for Mirae Large Cap?"
"Riskometer rating of Quant ELSS?"
Invalid Queries (Should Refuse):
"Which fund should I invest in?"
"Will this fund give good returns?"
"Should I buy or sell now?"
"Best fund for 2025?"
"Compare returns of ICICI vs HDFC"
Out of Scope (Should Prompt):
"Tell me about SBI Bluechip Fund" (not covered)
"What is Bitcoin?" (not mutual fund)

📁 Project Structure
wealth-monitor-mf-faq/
├── README.md              # This file
├── package.json           # Dependencies
├── src/
│   ├── App.jsx           # Main React component
│   └── index.js          # Entry point
├── public/
│   └── index.html        # HTML template
└── docs/
    ├── architecture.md   # Technical details
    └── roadmap.md        # Future plans

🗺️ Roadmap
Phase 1: MVP (Current)
✅ 4 schemes, keyword matching
✅ Facts-only responses
✅ Source citations
✅ Advice refusals
Phase 2: Enhanced (3-6 months)

 RAG implementation
 50+ schemes across 15 AMCs
 Real-time NAV updates
 Auto-scraping factsheets

Phase 3: Scale (6-12 months)

 500+ schemes
 Hindi + regional languages
 Voice input/output
 WhatsApp bot integration


🤝 Contributing
This is an educational project for the Milestone brief. Contributions, suggestions, and feedback are welcome!

📝 License
Educational project - Free to use and modify

📞 Contact
For questions or suggestions, please open an issue on GitHub.

⚠️ Final Disclaimer
This tool provides factual information only and does not constitute investment advice.
Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. For personalized financial guidance, consult a SEBI-registered investment advisor.
Data Sources: Asset Management Companies, SEBI, AMFI, CAMS, KFintech
Last Updated: November 2024
Version: 1.0
