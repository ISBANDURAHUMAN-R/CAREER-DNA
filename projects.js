const CDNA_ACTIVITY_TEMPLATES={
'Technology':['Build a small automation tool','Create a useful web or mobile prototype','Analyze an open dataset and publish a dashboard'],
'Engineering':['Design a small physical or digital system','Model a real-world engineering problem','Document a prototype and its trade-offs'],
'Science & Research':['Run a small controlled investigation','Reproduce a published experiment or analysis','Write an evidence-based mini research report'],
'Healthcare & Medicine':['Research a health topic using reliable sources','Design a patient-friendly information guide','Interview a professional about a healthcare workflow'],
'Finance & Economics':['Analyze a public financial dataset','Build a simple budgeting or forecasting model','Write an evidence-based market explainer'],
'Business & Management':['Analyze a local business process','Create a small business case','Interview someone about operations and document the workflow'],
'Law & Legal Services':['Compare two public legal decisions','Write a plain-language policy brief','Map the steps of a legal process using public sources'],
'Education & Training':['Teach a concept in a short lesson','Design a mini learning module','Create and test a study resource'],
'Psychology & Human Services':['Conduct a literature-based behavior review','Design a community support resource','Observe and document a user-service journey ethically'],
'Design & Architecture':['Redesign a familiar space or product','Create a visual concept board','Build a small 3D or spatial prototype'],
'Media & Journalism':['Investigate a local topic with public evidence','Produce a short interview-based story','Fact-check and publish a source map'],
'Marketing & Sales':['Create a small campaign experiment','Analyze customer messaging from three brands','Build a simple product pitch and test it'],
'Arts & Creative Practice':['Create a themed portfolio piece','Produce a short visual/audio story','Build a small body of work around one concept'],
'Environment & Agriculture':['Analyze local environmental data','Document a field observation project','Design a small sustainability intervention'],
'Public Service & Government':['Compare two public programs','Write a citizen-friendly policy explainer','Map a local public-service workflow'],
'Skilled Trades & Manufacturing':['Build or repair a small practical object','Document a manufacturing process','Design a safer or more efficient workflow'],
'Transportation & Aviation':['Map a transportation problem','Study an operational process and propose improvements','Create a safety or route analysis'],
'Hospitality & Tourism':['Design a local visitor experience','Map a guest journey and improve it','Create a small travel guide with evidence-based recommendations'],
'Sports & Fitness':['Track a training variable and analyze it','Design a beginner training session','Study performance factors using reliable sources'],
'Social Sciences & Policy':['Analyze a public survey dataset','Write a short policy research brief','Compare how two communities approach the same issue']
};
function cdnaActivities(topCareers){const out=[];const seen=new Set();for(const c of topCareers){for(const text of (CDNA_ACTIVITY_TEMPLATES[c.domain]||[])){if(!seen.has(text)){seen.add(text);out.push({career:c.name,domain:c.domain,text});}if(out.length>=6)break;}if(out.length>=6)break;}return out;}
