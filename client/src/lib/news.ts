import matter from 'gray-matter';
import type { NewsPost } from '@shared/schema';

// Import all markdown files dynamically
const newsModules = import.meta.glob('../data/news/*.md', { 
  eager: true,
  query: '?raw',
  import: 'default' 
});

export function loadNewsData(): NewsPost[] {
  const posts: NewsPost[] = [];
  
  Object.entries(newsModules).forEach(([path, content]) => {
    try {
      // Handle both string content and module objects
      const rawContent = typeof content === 'string' ? content : (content as any);
      
      if (typeof rawContent === 'string') {
        const { data, content: body } = matter(rawContent);
        
        posts.push({
          slug: data.slug || extractSlugFromPath(path),
          title: data.title || 'Untitled',
          date: data.date || new Date().toISOString().split('T')[0],
          excerpt: data.excerpt || '',
          body: body || ''
        });
      }
    } catch (error) {
      console.warn(`Failed to parse markdown file ${path}:`, error);
    }
  });
  
  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function extractSlugFromPath(path: string): string {
  const filename = path.split('/').pop() || '';
  return filename.replace('.md', '');
}

// Static fallback data for development
const fallbackNews: NewsPost[] = [
  {
    slug: "2025-07-summer-bbq",
    title: "Summer Tenant BBQ – July 18",
    date: "2025-07-05",
    excerpt: "Join us on the rear patio for burgers, salads, and live music at noon.",
    body: "We're excited to host our annual tenant appreciation BBQ on Friday, July 18th from 12:00 PM to 2:00 PM on the rear patio. Join us for delicious food, refreshing drinks, and live acoustic music. This is a great opportunity to connect with fellow tenants and enjoy the beautiful summer weather. All tenants and their guests are welcome. Please RSVP by July 15th to ensure we have enough food for everyone."
  },
  {
    slug: "2025-06-lobby-refresh",
    title: "Lobby Refresh Completed",
    date: "2025-06-20",
    excerpt: "New seating, art wall, and greenery now open.",
    body: "The renovation brings warm wood tones, additional seating areas, and a stunning new art wall featuring local artists. We've also added more greenery throughout the lobby to create a more welcoming environment. The new seating areas provide comfortable spaces for informal meetings or just relaxing. Thank you for your patience during the renovation process. We hope you enjoy the refreshed space."
  }
];

export function getNewsData(): NewsPost[] {
  try {
    const markdownPosts = loadNewsData();
    return markdownPosts.length > 0 ? markdownPosts : fallbackNews;
  } catch (error) {
    console.warn('Failed to load markdown news data, using fallback:', error);
    return fallbackNews;
  }
}