import React, { useState, useRef, useEffect } from 'react';
import { Send, TrendingUp, User, AlertTriangle, ExternalLink, Shield, Search } from 'lucide-react';

const WealthMonitorMFFAQ = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Knowledge base - Wealth Monitor focused on popular schemes
  const knowledgeBase = [
    {
      keywords: ['expense ratio', 'expense', 'charges', 'fees', 'ter', 'cost'],
      schemes: {
        'icici prudential bluechip': {
          answer: 'ICICI Prudential Bluechip Fund has an expense ratio of 1.90% for regular plan and 0.80% for direct plan.',
          source: 'https://www.icicipruamc.com/mutual-fund/equity-funds/icici-prudential-bluechip-fund/factsheet'
        },
        'hdfc mid-cap': {
          answer: 'HDFC Mid-Cap Opportunities Fund charges 1.90% expense ratio for regular plan and 0.94% for direct plan.',
          source: 'https://www.hdfcfund.com/funds/hdfc-mid-cap-opportunities-fund/factsheet'
        },
        'mirae asset large cap': {
          answer: 'Mirae Asset Large Cap Fund has an expense ratio of 1.71% for regular plan and 0.55% for direct plan.',
          source: 'https://www.miraeassetmf.co.in/schemes/equity-schemes/mirae-asset-large-cap-fund/factsheet'
        },
        'general': {
          answer: 'SEBI caps expense ratio at 2.25% for equity funds (first ₹500 cr AUM). Direct plans have 0.5-1% lower expenses as they exclude distributor commissions.',
          source: 'https://www.sebi.gov.in/legal/circulars/oct-2018/total-expense-ratio-ter-and-performance-disclosure-for-mutual-funds_40652.html'
        }
      }
    },
    {
      keywords: ['exit load', 'redemption', 'exit fee', 'early withdrawal', 'exit charge'],
      schemes: {
        'icici prudential bluechip': {
          answer: 'ICICI Prudential Bluechip Fund charges 1% exit load if redeemed within 1 year from allotment date.',
          source: 'https://www.icicipruamc.com/mutual-fund/equity-funds/icici-prudential-bluechip-fund/sid'
        },
        'hdfc mid-cap': {
          answer: 'HDFC Mid-Cap Opportunities Fund has 1% exit load if redeemed within 1 year. No exit load after 1 year.',
          source: 'https://www.hdfcfund.com/funds/hdfc-mid-cap-opportunities-fund/sid'
        },
        'quant elss': {
          answer: 'Quant ELSS Tax Saver has mandatory 3-year lock-in period. No redemption allowed before 3 years. No exit load after lock-in.',
          source: 'https://www.quantumamc.com/schemes/quant-elss-tax-saver-fund/sid'
        }
      }
    },
    {
      keywords: ['minimum sip', 'sip amount', 'minimum investment', 'starting amount', 'sip minimum'],
      schemes: {
        'icici prudential': {
          answer: 'ICICI Prudential funds have minimum SIP of ₹1,000 per month for most equity schemes. Lumpsum minimum is ₹5,000.',
          source: 'https://www.icicipruamc.com/invest/sip'
        },
        'hdfc': {
          answer: 'HDFC Mutual Fund schemes allow minimum SIP of ₹300 per month. Lumpsum minimum is ₹5,000.',
          source: 'https://www.hdfcfund.com/invest-now/sip'
        },
        'general': {
          answer: 'Most mutual funds allow SIP starting from ₹500-₹1,000 per month. Some funds allow as low as ₹100. Check individual scheme SID for exact minimums.',
          source: 'https://www.amfiindia.com/investor-corner/knowledge-center/sip.html'
        }
      }
    },
    {
      keywords: ['elss', 'lock-in', 'tax saver', '80c', 'tax benefit', 'tax deduction'],
      schemes: {
        'general': {
          answer: 'ELSS funds have mandatory 3-year lock-in from each investment date. Qualify for tax deduction up to ₹1.5 lakh under Section 80C. Each SIP has its own 3-year lock-in.',
          source: 'https://www.amfiindia.com/investor-corner/knowledge-center/elss.html'
        }
      }
    },
    {
      keywords: ['riskometer', 'risk level', 'risk rating', 'risk category', 'risk grade'],
      schemes: {
        'icici prudential bluechip': {
          answer: 'ICICI Prudential Bluechip Fund is rated "Very High Risk" on riskometer as per SEBI guidelines for large-cap equity funds.',
          source: 'https://www.icicipruamc.com/mutual-fund/equity-funds/icici-prudential-bluechip-fund/factsheet'
        },
        'hdfc mid-cap': {
          answer: 'HDFC Mid-Cap Opportunities Fund is categorized as "Very High Risk" on riskometer (mid-cap equity exposure).',
          source: 'https://www.hdfcfund.com/funds/hdfc-mid-cap-opportunities-fund/factsheet'
        },
        'quant elss': {
          answer: 'Quant ELSS Tax Saver is rated "Very High Risk" as it invests 80%+ in equity securities.',
          source: 'https://www.quantumamc.com/schemes/quant-elss-tax-saver-fund/factsheet'
        }
      }
    },
    {
      keywords: ['benchmark', 'index', 'comparison index', 'benchmark index'],
      schemes: {
        'icici prudential bluechip': {
          answer: 'ICICI Prudential Bluechip Fund benchmarks against Nifty 50 TRI (Total Return Index).',
          source: 'https://www.icicipruamc.com/mutual-fund/equity-funds/icici-prudential-bluechip-fund/sid'
        },
        'hdfc mid-cap': {
          answer: 'HDFC Mid-Cap Opportunities Fund uses Nifty Midcap 150 TRI as its benchmark index.',
          source: 'https://www.hdfcfund.com/funds/hdfc-mid-cap-opportunities-fund/sid'
        },
        'mirae asset large cap': {
          answer: 'Mirae Asset Large Cap Fund benchmarks against Nifty 100 TRI.',
          source: 'https://www.miraeassetmf.co.in/schemes/equity-schemes/mirae-asset-large-cap-fund/sid'
        }
      }
    },
    {
      keywords: ['statement', 'download', 'capital gains', 'cas', 'tax statement', 'account statement'],
      schemes: {
        'general': {
          answer: 'Download consolidated account statement (CAS) from your Wealth Monitor dashboard under Reports. For capital gains tax statements, contact your AMC or use CAMS/Karvy portal.',
          source: 'https://www.camsonline.com/Investors/Statements/Consolidated-Account-Statement'
        }
      }
    },
    {
      keywords: ['nav', 'net asset value', 'unit price', 'price per unit'],
      schemes: {
        'general': {
          answer: 'NAV is per-unit market value of mutual fund = (Total Assets - Liabilities) / Outstanding Units. Updated daily by 9 PM on AMFI website for all schemes.',
          source: 'https://www.amfiindia.com/nav-history'
        }
      }
    },
    {
      keywords: ['direct plan', 'regular plan', 'difference between', 'direct vs regular'],
      schemes: {
        'general': {
          answer: 'Direct plans have no distributor commission, resulting in 0.5-1% lower expense ratio. Regular plans include advisor fees. Both invest in same portfolio but direct plans give higher returns.',
          source: 'https://www.sebi.gov.in/sebi_data/attachdocs/1347338381161.pdf'
        }
      }
    }
  ];

  const exampleQuestions = [
    "What is the expense ratio of ICICI Bluechip Fund?",
    "ELSS lock-in period?",
    "How to download capital gains statement?"
  ];

  const detectScheme = (query) => {
    const lower = query.toLowerCase();
    if (lower.includes('icici') && (lower.includes('blue') || lower.includes('large'))) return 'icici prudential bluechip';
    if (lower.includes('hdfc') && lower.includes('mid')) return 'hdfc mid-cap';
    if (lower.includes('mirae') && lower.includes('large')) return 'mirae asset large cap';
    if (lower.includes('quant') && lower.includes('elss')) return 'quant elss';
    if (lower.includes('icici')) return 'icici prudential';
    if (lower.includes('hdfc')) return 'hdfc';
    return 'general';
  };

  const detectAdviceIntent = (query) => {
    const adviceWords = [
      'should i', 'which fund', 'which scheme', 'best fund', 'recommend',
      'better fund', 'invest in which', 'good time', 'buy now', 'sell now',
      'portfolio advice', 'suggest', 'prediction', 'will it grow',
      'good returns', 'best returns', 'top fund', 'compare returns',
      'better returns', 'outperform'
    ];
    return adviceWords.some(word => query.toLowerCase().includes(word));
  };

  const findAnswer = (query) => {
    const scheme = detectScheme(query);
    
    for (const topic of knowledgeBase) {
      if (topic.keywords.some(kw => query.toLowerCase().includes(kw))) {
        const data = topic.schemes[scheme] || topic.schemes['general'];
        if (data) {
          return { answer: data.answer, source: data.source, found: true };
        }
      }
    }
    return { found: false };
  };

  const handleSend = () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    setTimeout(() => {
      if (detectAdviceIntent(userMsg)) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'I provide factual information only, not investment advice. For personalized portfolio recommendations, please consult a SEBI-registered investment advisor or use Wealth Monitor\'s advisory services.',
          isDisclaimer: true,
          helpLink: 'https://www.sebi.gov.in/ria.html',
          helpText: 'Find SEBI-registered advisors'
        }]);
        setIsLoading(false);
        return;
      }

      const result = findAnswer(userMsg);
      
      if (result.found) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: result.answer,
          source: result.source,
          timestamp: 'Sources updated: Nov 2024'
        }]);
      } else {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'I can answer factual questions about ICICI Prudential Bluechip, HDFC Mid-Cap Opportunities, Mirae Asset Large Cap, and Quant ELSS. Topics: expense ratio, exit load, minimum SIP, lock-in, riskometer, benchmark, and statements.',
          isPrompt: true
        }]);
      }
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Wealth Monitor Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 shadow-lg">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl shadow-md">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">MF FAQ Assistant</h1>
                <p className="text-sm text-emerald-100">Facts-based intelligence • No advice</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-xs font-medium text-white">Wealth Monitor</span>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Screen */}
      {messages.length === 0 && (
        <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-4">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-emerald-100 p-2.5 rounded-xl">
                  <Search className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Welcome to Your MF Knowledge Hub</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Get instant, fact-based answers about mutual fund schemes tracked on Wealth Monitor. Covers expense ratios, exit loads, SIP minimums, lock-in periods, risk ratings, and documentation.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 mb-5">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-800">
                    <strong className="text-amber-900 font-semibold">Facts-Only Policy:</strong> This assistant provides factual information from official AMC, SEBI, and AMFI sources. It does not provide investment advice, recommendations, or performance predictions. For personalized guidance, consult a SEBI-registered investment advisor.
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Try these example questions:
                </p>
                <div className="space-y-2">
                  {exampleQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(q)}
                      className="w-full text-left p-4 bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 border border-emerald-200 rounded-xl text-sm text-gray-800 transition-all shadow-sm hover:shadow group"
                    >
                      <span className="text-emerald-600 mr-2 group-hover:mr-3 transition-all">→</span>{q}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong className="text-gray-800">Covered funds:</strong> ICICI Prudential Bluechip, HDFC Mid-Cap Opportunities, Mirae Asset Large Cap, Quant ELSS Tax Saver
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
              <p className="text-xs text-emerald-800 text-center">
                <strong>Professional Advice:</strong> For portfolio analysis and personalized recommendations, consider using Wealth Monitor's advisory services or consult a SEBI-registered advisor.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Messages */}
      {messages.length > 0 && (
        <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-3xl mx-auto space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md' 
                    : 'bg-white border-2 border-emerald-200 shadow-sm'
                }`}>
                  {msg.role === 'user' ? 
                    <User className="w-5 h-5 text-white" /> : 
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                  }
                </div>
                <div className={`flex-1 ${msg.role === 'user' ? 'flex justify-end' : ''}`}>
                  <div className={`inline-block max-w-2xl rounded-2xl p-4 shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white' 
                      : msg.isDisclaimer 
                        ? 'bg-amber-50 border-2 border-amber-300'
                        : 'bg-white border border-gray-200'
                  }`}>
                    {msg.isDisclaimer && (
                      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-amber-200">
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span className="text-xs font-bold text-amber-900 uppercase tracking-wide">Advisory Notice</span>
                      </div>
                    )}
                    <p className={`text-sm leading-relaxed ${
                      msg.role === 'user' ? 'text-white' : 'text-gray-800'
                    }`}>
                      {msg.content}
                    </p>
                    {msg.source && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <a 
                          href={msg.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs text-emerald-600 hover:text-emerald-700 font-semibold group"
                        >
                          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          View official source document
                        </a>
                        {msg.timestamp && (
                          <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            {msg.timestamp}
                          </p>
                        )}
                      </div>
                    )}
                    {msg.helpLink && (
                      <div className="mt-3 pt-3 border-t border-amber-200">
                        <a 
                          href={msg.helpLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs text-amber-700 hover:text-amber-800 font-semibold"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {msg.helpText}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border-2 border-emerald-200 flex items-center justify-center shadow-sm">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-white border-t-2 border-gray-200 p-4 shadow-2xl">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about expense ratio, exit load, SIP amounts..."
              className="flex-1 px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center flex items-center justify-center gap-2">
            <Shield className="w-3 h-3" />
            Facts only • No investment advice • Consult SEBI-registered advisors
          </p>
        </div>
      </div>
    </div>
  );
};

export default WealthMonitorMFFAQ;
