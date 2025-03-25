
import { useRef } from 'react';
import BlogPost from './BlogPost';

const BlogSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const blogPosts = [
    {
      title: "Top 5 Budget Destinations for 2025",
      excerpt: "Traveling doesn't have to cost a fortune. From the stunning beaches of Vietnam to the historic streets of Budapest, our top 5 budget destinations for 2025 offer incredible experiences without the premium price tag.",
      content: `Traveling on a budget doesn't mean sacrificing adventure. In 2025, these five destinations offer incredible experiences without breaking the bank:

Vietnam – Affordable street food, stunning landscapes, and budget-friendly hostels.

Portugal – Charming cities like Lisbon and Porto offer great value for money.

Bolivia – From the salt flats to Lake Titicaca, adventure awaits at low costs.

Georgia – A hidden gem with affordable wine, hiking, and historic sites.

Indonesia (outside Bali) – Explore Lombok or Yogyakarta for untouched beauty on a budget.

Each destination provides rich culture, delicious cuisine, and wallet-friendly accommodations. Ready to plan your trip?`,
      imageUrl: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "How to Pack Light for a Week-Long Trip",
      excerpt: "Mastering the art of packing light can transform your travel experience. This guide breaks down exactly what you need for a week away, from versatile clothing options to compact toiletries.",
      content: `Packing light saves you time, money, and stress. Follow these tips to streamline your luggage for a week-long adventure:

✔ Choose a carry-on – Avoid checked baggage fees and long waits.
✔ Versatile clothing – Neutral colors and layers mix and match easily.
✔ Limit shoes – Wear your bulkiest pair and pack one extra.
✔ Use packing cubes – Stay organized and maximize space.
✔ Toiletries in travel sizes – Opt for reusable mini bottles.

With these tricks, you'll travel efficiently and never overpack again!`,
      imageUrl: "https://images.unsplash.com/photo-1541185934-01b600ea069c?q=80&w=2642&auto=format&fit=crop"
    },
    {
      title: "Save Money on Flights with These Hacks",
      excerpt: "Airline tickets often represent the biggest expense in travel budgets. Learn the insider strategies for finding dramatically cheaper flights, from mastering search engine algorithms to utilizing fare alerts.",
      content: `Airfare can be a major travel expense, but smart strategies can help you score the best deals:

✈ Be flexible with dates – Flying mid-week is often cheaper.
✈ Use incognito mode – Avoid dynamic pricing based on search history.
✈ Set fare alerts – Apps like Hopper or Google Flights track price drops.
✈ Book early (or last-minute) – Ideal windows vary by destination.
✈ Consider budget airlines – Just watch for hidden fees!

With these tips, you'll fly farther for less.`,
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
              content={post.content}
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
