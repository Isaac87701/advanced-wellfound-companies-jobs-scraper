onst axios = require('axios');

// Extract company data for each job listing
async function extractCompanyData(jobData) {
try {
const companyData = await Promise.all(jobData.map(async job => {
const companyDetails = await getCompanyDetails(job.title);
return {
...job,
company: companyDetails
};
}));
return companyData;
} catch (error) {
console.error('Error extracting company data:', error);
throw error;
}
}

// Placeholder function to simulate fetching company details
async function getCompanyDetails(jobTitle) {
return {
name: 'EarnIn',
companySize: 'SIZE_201_500',
highConcept: 'Make financial momentum accessible to everyone',
companyUrl: 'http://earnin.com/',
twitterUrl: 'https://twitter.com/earnin',
facebookUrl: 'https://www.facebook.com/earninofficial/',
linkedInUrl: 'https://www.linkedin.com/company/2837417/',
totalRaisedAmount: 190100000,
total_jobs: 76,
tags: [
{ name: 'financial services', displayName: 'Financial Services' },
{ name: 'e-commerce', displayName: 'E-Commerce' }
],
perks: [
{ category: 'healthcare', title: 'Health/Vision/Dental Benefits' },
{ category: 'parental_leave', title: 'Parental Leave' }
],
locations: [
{ name: 'cincinnati', displayName: 'Cincinnati' },
{ name: 'palo alto', displayName: 'Palo Alto' }
]
};
}

module.exports = { extractCompanyData };