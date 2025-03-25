
import { useRef } from 'react';
import BlogPost from './BlogPost';

const BlogSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const blogPosts = [
    {
      title: "Top 5 Budget Destinations for 2025",
      excerpt: "Traveling doesn't have to cost a fortune. From the stunning beaches of Vietnam to the historic streets of Budapest, our top 5 budget destinations for 2025 offer incredible experiences without the premium price tag. Learn where to stay, what to eat, and how to experience these destinations like a local while keeping your budget intact.",
      imageUrl: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "How to Pack Light for a Week-Long Trip",
      excerpt: "Mastering the art of packing light can transform your travel experience. This guide breaks down exactly what you need for a week away, from versatile clothing options to compact toiletries. Discover the one-bag approach that will save you checked baggage fees and the stress of lugging heavy suitcases through crowded airports and train stations.",
      imageUrl: "https://images.unsplash.com/photo-1541185934-01b600ea069c?q=80&w=2642&auto=format&fit=crop"
    },
    {
      title: "Save Money on Flights with These Hacks",
      excerpt: "Airline tickets often represent the biggest expense in travel budgets. Learn the insider strategies for finding dramatically cheaper flights, from mastering search engine algorithms to utilizing fare alerts and knowing exactly when to book. These proven techniques have saved our community thousands on international and domestic travel alike.",
      imageUrl: "https://images.unsplash.com/photo-1559066653-edfd1e6bbbd5?q=80&w=2574&auto=format&fit=crop"
    }
  ];
  
  return (
    <section id="blog" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="wf-container">
        <div className="text-center mb-16">
          <span className="text-wanderfree-blue font-medium">LATEST ARTICLES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Budget Travel Insights</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost 
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
