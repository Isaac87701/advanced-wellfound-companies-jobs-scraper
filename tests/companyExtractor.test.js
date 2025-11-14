onst { extractCompanyData } = require('../src/extractors/companyExtractor');

test('extract company data for jobs', async () => {
    const mockJobData = [
        { title: 'Software Engineer', primaryRoleTitle: 'Software Engineer' }
    ];
    const companyData = await extractCompanyData(mockJobData);
    
    expect(companyData).toHaveLength(1);
    expect(companyData[0].company).toHaveProperty('name', 'EarnIn');
});