export default async function sitemap() {
    const baseUrl = 'https://next-search-app-theta.vercel.app';
  
    // Define your static routes
    const staticPages = [
      '',
      '/about'
    ]
  
    async function fetchDynamicPages() {
      // Replace this with your actual data fetching logic
      const nonsportsPages = ['batman'];
      const setsPages = ['1950bowman', '1952-bowman-large'];
      return { nonsportsPages, setsPages };
    }
  
    const { nonsportsPages, setsPages } = await fetchDynamicPages();
  
    // Create sitemap entries
    return [
      ...staticPages.map(page => ({
        url: `${baseUrl}${page}`,
        lastModified: new Date().toISOString(),
      })),
      ...nonsportsPages.map(page => ({
        url: `${baseUrl}/nonsports/${page}`,
        lastModified: new Date().toISOString(),
      })),
      ...setsPages.map(page => ({
        url: `${baseUrl}/sets/${page}`,
        lastModified: new Date().toISOString(),
      }))
    ];
  }
  