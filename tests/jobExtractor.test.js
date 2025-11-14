onst { extractJobData } = require('../src/extractors/jobExtractor');

test('extract job data from URL', async () => {
    const mockUrl = 'https://wellfound.com/jobs?search=software%20engineer';
    const data = await extractJobData(mockUrl);
    
    expect(data).toHaveLength(1);
    expect(data[0]).toHaveProperty('title', 'Software Engineer');
});