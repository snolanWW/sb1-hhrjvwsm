import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, User2, Share2, Facebook, Twitter, Linkedin, ChevronRight, ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock article data
const article = {
  id: 1,
  title: "Historic Doylestown Theater Announces Major Renovation Plans",
  subtitle: "The beloved County Theater reveals ambitious restoration project aimed at preserving its art deco charm while modernizing facilities",
  author: "Sarah Mitchell",
  authorRole: "Senior Reporter",
  authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  date: "March 15, 2024",
  readingTime: "6 min read",
  category: "Local News",
  mainImage: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80",
  content: `
    <h2>A New Chapter for a Historic Landmark</h2>
    <p>The County Theater, a cornerstone of Doylestown's cultural landscape since 1938, is embarking on an ambitious $3.5 million renovation project that promises to preserve its iconic art deco architecture while introducing modern amenities for today's moviegoers.</p>
    
    <p>The renovation, scheduled to begin in June 2024, will expand the theater's lobby, upgrade its projection and sound systems, and add a third screening room while carefully maintaining the building's historic character.</p>

    <h2>Community Support and Fundraising</h2>
    <p>Local preservation groups and community members have rallied behind the project, with the "Save Our Theater" campaign already raising $2.1 million through private donations and community events.</p>

    <blockquote>
      "This renovation isn't just about updating a building—it's about preserving a piece of Doylestown's soul while ensuring it continues to serve future generations," says John Anderson, the theater's executive director.
    </blockquote>

    <h2>Modern Amenities, Historic Charm</h2>
    <p>Key features of the renovation include:</p>
    <ul>
      <li>State-of-the-art digital projection systems</li>
      <li>Enhanced sound equipment</li>
      <li>Expanded concession area</li>
      <li>Improved accessibility features</li>
      <li>Restored art deco architectural elements</li>
    </ul>

    <h2>Looking to the Future</h2>
    <p>The renovation project is expected to take approximately 8 months to complete, with the theater remaining partially open during specific phases of construction. A grand reopening celebration is planned for early 2025.</p>
  `,
  tags: ["Arts & Culture", "Community", "Development", "Historic Preservation"]
};

// Mock related articles
const relatedArticles = [
  {
    id: 2,
    title: "Local Artists to Create Murals for Theater's Construction Barriers",
    excerpt: "Community artists will transform construction barriers into public art displays during renovation.",
    image: "https://images.unsplash.com/photo-1571511303867-43481a0a6a0a?auto=format&fit=crop&q=80",
    date: "March 14, 2024",
    readingTime: "4 min read"
  },
  {
    id: 3,
    title: "Remembering the County Theater: Community Shares Stories",
    excerpt: "Residents share their cherished memories of the historic venue ahead of renovation.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
    date: "March 13, 2024",
    readingTime: "5 min read"
  },
  {
    id: 4,
    title: "The Architecture of Memory: Preserving Art Deco in Doylestown",
    excerpt: "A look at the town's efforts to maintain its architectural heritage.",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80",
    date: "March 12, 2024",
    readingTime: "7 min read"
  }
];

const ArticlePage = () => {
  const { id } = useParams();
  const writerSlug = "sarah-mitchell"; // In a real app, this would come from the article data

  return (
    <div className="min-h-screen bg-[#F2F0EF] pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8 overflow-x-auto">
          <Link to="/" className="text-charcoal-gray/60 hover:text-cardinal-red transition-colors whitespace-nowrap">
            Home
          </Link>
          <span className="text-charcoal-gray/40">/</span>
          <Link to="/news" className="text-charcoal-gray/60 hover:text-cardinal-red transition-colors whitespace-nowrap">
            News
          </Link>
          <span className="text-charcoal-gray/40">/</span>
          <span className="text-cardinal-red whitespace-nowrap">Article</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <article className="lg:w-2/3">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-sm font-medium text-cardinal-red">{article.category}</span>
                <span className="text-charcoal-gray/40">•</span>
                <div className="flex items-center text-sm text-charcoal-gray/60">
                  <Calendar size={14} className="mr-1" />
                  {article.date}
                </div>
                <span className="text-charcoal-gray/40">•</span>
                <div className="flex items-center text-sm text-charcoal-gray/60">
                  <Clock size={14} className="mr-1" />
                  {article.readingTime}
                </div>
              </div>

              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal-gray mb-4 italic break-words">
                {article.title}
              </h1>
              
              <p className="text-xl text-charcoal-gray/80 mb-6 break-words">
                {article.subtitle}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <Link
                  to={`/writer/${writerSlug}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white shadow-md flex-shrink-0">
                    <img
                      src={article.authorImage}
                      alt={article.author}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-cardinal-red transition-colors">
                      {article.author}
                    </div>
                    <div className="text-sm text-charcoal-gray/60">
                      {article.authorRole}
                    </div>
                  </div>
                </Link>

                <div className="flex items-center gap-2">
                  <button className="p-2 bg-white rounded-full hover:bg-cardinal-red hover:text-white transition-colors">
                    <Facebook size={18} />
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-cardinal-red hover:text-white transition-colors">
                    <Twitter size={18} />
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-cardinal-red hover:text-white transition-colors">
                    <Linkedin size={18} />
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-cardinal-red hover:text-white transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={article.mainImage}
                alt={article.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none mb-12 break-words"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {article.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-cardinal-red/10 text-cardinal-red rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author Bio */}
            <div className="border border-[#333333] rounded-lg p-4 sm:p-8 mb-12">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <Link to={`/writer/${writerSlug}`} className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-white shadow-md">
                    <img
                      src={article.authorImage}
                      alt={article.author}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="flex-grow min-w-0">
                  <Link 
                    to={`/writer/${writerSlug}`}
                    className="group"
                  >
                    <h3 className="font-playfair text-xl font-bold mb-2 group-hover:text-cardinal-red transition-colors break-words">
                      {article.author}
                    </h3>
                  </Link>
                  <p className="text-charcoal-gray/70 mb-4 break-words">
                    Sarah is a senior reporter at The Cardinal, covering local arts, culture, and community development. 
                    With over a decade of experience in journalism, she's passionate about telling stories that matter 
                    to the Doylestown community.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      to={`/writer/${writerSlug}`}
                      className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors"
                    >
                      View Full Profile
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                    <div className="flex items-center gap-2">
                      <button className="p-2 bg-cardinal-red/10 rounded-full hover:bg-cardinal-red hover:text-white transition-colors">
                        <Twitter size={18} />
                      </button>
                      <button className="p-2 bg-cardinal-red/10 rounded-full hover:bg-cardinal-red hover:text-white transition-colors">
                        <Linkedin size={18} />
                      </button>
                      <button className="p-2 bg-cardinal-red/10 rounded-full hover:bg-cardinal-red hover:text-white transition-colors">
                        <Mail size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to News */}
            <Link
              to="/news"
              className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to News
            </Link>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            {/* Related Articles */}
            <div className="border border-[#333333] rounded-lg p-4 sm:p-6 sticky top-32">
              <h2 className="font-playfair text-xl font-bold mb-6">Related Articles</h2>
              <div className="space-y-6">
                {relatedArticles.map(article => (
                  <Link
                    key={article.id}
                    to={`/news/${article.id}`}
                    className="flex gap-4 group"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <h3 className="font-medium group-hover:text-cardinal-red transition-colors line-clamp-2 break-words">
                        {article.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-charcoal-gray/60 mt-1">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                        <span className="text-charcoal-gray/40">•</span>
                        <Clock size={14} />
                        <span>{article.readingTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                to="/news"
                className="inline-flex items-center justify-center w-full mt-6 px-4 py-2 bg-cardinal-red/10 text-cardinal-red rounded-lg hover:bg-cardinal-red hover:text-white transition-colors"
              >
                View All Articles
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;