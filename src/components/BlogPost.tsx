
import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  title: string;
  excerpt: string;
  content?: string;
  imageUrl: string;
  delay: number;
}

const BlogPost = ({ title, excerpt, imageUrl, delay, content }: BlogPostProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  // Create a slug from the title
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };
  
  const slug = createSlug(title);
  
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
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar size={14} className="mr-1" />
          <span>March 2025</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{excerpt}</p>
        
        <div className="mt-6">
          <Link 
            to={`/blog/${slug}`}
            className="wf-link"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
