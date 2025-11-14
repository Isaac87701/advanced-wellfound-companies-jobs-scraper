onst axios = require('axios');

// Extract job data from a Wellfound job search URL
async function extractJobData(url) {
try {
const response = await axios.get(url);
const jobData = parseJobData(response.data);
return jobData;
} catch (error) {
console.error('Error extracting job data:', error);
throw error;
}
}

// Placeholder function to parse job data from HTML response
function parseJobData(html) {
// Simple extraction logic; can be expanded as needed
return [
{
title: 'Software Engineer',
primaryRoleTitle: 'Software Engineer',
jobType: 'full-time',
locationNames: ['Palo Alto'],
remote: false,
compensation: '$148k – $222k'
}
];
}

module.exports = { extractJobData };