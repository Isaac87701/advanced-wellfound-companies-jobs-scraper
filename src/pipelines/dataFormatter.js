js// Format the extracted job and company data into a clean structure
function formatData(jobData, companyData) {
    // Combine job and company data into a structured output
    return jobData.map((job, index) => ({
        ...job,
        company: companyData[index].company
    }));
}

module.exports = { formatData };