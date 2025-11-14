onst { extractJobData } = require('./extractors/jobExtractor');
const { extractCompanyData } = require('./extractors/companyExtractor');
const { formatData } = require('./pipelines/dataFormatter');
const fs = require('fs');

// Example Wellfound URL input
const inputUrl = 'https://wellfound.com/jobs?search=software%20engineer';

// Main scraping function
async function scrape() {
try {
// Extract job data from the URL
const jobData = await extractJobData(inputUrl);
        
// Extract company data based on job data
const companyData = await extractCompanyData(jobData);

// Format the collected data
const formattedData = formatData(jobData, companyData);

// Save formatted data to a file
fs.writeFileSync('data/sample-output.json', JSON.stringify(formattedData, null, 2));
console.log('Scraping completed and data saved to sample-output.json');
} catch (error) {
console.error('Error during scraping:', error);
}
}

// Run the scraper
scrape();