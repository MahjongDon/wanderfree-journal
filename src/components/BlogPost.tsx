
import { useState } from 'react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  delay: number;
}

const BlogPost = ({ title, excerpt, imageUrl, delay }: BlogPostProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <article 
      className="wf-card overflow-hidden animate-reveal"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="aspect-video overflow-hidden relative">
        <div 
          className={`absolute inset-0 bg-gray-200 transition-opacity duration-500 ${
            imageLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img 
          src={imageUrl} 
          alt={title}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{excerpt}</p>
        
        <div className="mt-6">
          <a href="#" className="wf-link">
            Read More
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
