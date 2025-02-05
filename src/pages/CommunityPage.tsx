import React, { useState } from 'react';
import { Search, Users, Building2, Heart, MessageCircle, Share2, ThumbsUp, Flag, User2, MapPin, Phone, Globe, Mail, ChevronRight, Plus, X, Calendar } from 'lucide-react';

// Mock data for discussion board
const discussions = [
  {
    id: 1,
    title: "Best local coffee shops for remote work?",
    content: "Looking for recommendations on coffee shops in Doylestown that are good for remote work. Need reliable WiFi and comfortable seating for long sessions.",
    author: "Michael Brown",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    date: "2024-03-18",
    category: "Recommendations",
    replies: 23,
    likes: 15,
    lastReply: {
      author: "Sarah Chen",
      content: "Nonno's Italian Coffee Parlor has great WiFi and plenty of seating. They also don't mind if you stay for a few hours.",
      date: "2024-03-18"
    }
  },
  {
    id: 2,
    title: "Weekend farmers market schedule",
    content: "Can someone share the updated schedule for the farmers market? I heard they're changing hours for the spring season.",
    author: "Lisa Johnson",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    date: "2024-03-17",
    category: "Local Discussion",
    replies: 18,
    likes: 12,
    lastReply: {
      author: "James Wilson",
      content: "Starting April 1st, they'll be open Saturdays 8am-1pm and Wednesdays 2pm-6pm.",
      date: "2024-03-17"
    }
  },
  {
    id: 3,
    title: "Lost cat near Central Park",
    content: "My orange tabby cat went missing yesterday near Central Park. He's wearing a blue collar with tags. Please contact if seen!",
    author: "David Miller",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    date: "2024-03-16",
    category: "Lost & Found",
    replies: 8,
    likes: 5,
    lastReply: {
      author: "Emily Rodriguez",
      content: "I think I saw him near the playground this morning. I'll send you a PM with details.",
      date: "2024-03-16"
    }
  },
  {
    id: 4,
    title: "New restaurant opening on Main Street",
    content: "Anyone have details about the new restaurant opening in the old bookstore space? Saw some renovation work starting.",
    author: "Rachel Thompson",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    date: "2024-03-15",
    category: "Local Discussion",
    replies: 32,
    likes: 28,
    lastReply: {
      author: "Tom Parker",
      content: "It's going to be a farm-to-table concept by the same owners as The Farmhouse. Opening in May!",
      date: "2024-03-15"
    }
  }
];

// Forum categories and local resources data remain the same
const forumCategories = [
  { id: 1, name: "Local Discussion", count: 156 },
  { id: 2, name: "Ask Doylestown", count: 89 },
  { id: 3, name: "Recommendations", count: 234 },
  { id: 4, name: "Lost & Found", count: 45 },
  { id: 5, name: "Buy & Sell", count: 167 }
];

const localResources = [
  {
    id: 1,
    name: "Doylestown Food Market",
    category: "Groceries",
    description: "Local co-op market featuring organic produce and artisanal goods.",
    address: "29 W State St, Doylestown, PA 18901",
    phone: "(215) 555-0123",
    website: "https://doylestownfoodmarket.com",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Mercer Museum",
    category: "Culture",
    description: "Historic museum showcasing early American tools and artifacts.",
    address: "84 S Pine St, Doylestown, PA 18901",
    phone: "(215) 555-0234",
    website: "https://mercermuseum.org",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "County Theater",
    category: "Entertainment",
    description: "Historic art deco movie theater showing independent and art films.",
    address: "20 E State St, Doylestown, PA 18901",
    phone: "(215) 555-0345",
    website: "https://countytheater.org",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80"
  }
];

const CommunityPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSubmitStoryOpen, setIsSubmitStoryOpen] = useState(false);
  const [isNewDiscussionOpen, setIsNewDiscussionOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col mb-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80"
            alt="Doylestown Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Connect with Your Community
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Join conversations, share stories, and discover local resources that make Doylestown a vibrant place to live.
            </p>
            <button
              onClick={() => setIsNewDiscussionOpen(true)}
              className="bg-forest-green text-white px-8 py-3 rounded-full font-semibold hover:bg-cardinal-red transition-colors flex items-center gap-2"
            >
              <Plus size={20} />
              Start a Discussion
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 120" 
            className="relative w-full h-[120px] text-[#F2F0EF] preserve-3d"
            preserveAspectRatio="none"
          >
            <path 
              fill="currentColor"
              d="M0,120 
                 C240,100 480,20 720,40 
                 C960,60 1200,100 1440,80 
                 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Discussion Board */}
          <div className="lg:col-span-2">
            <div className="border border-[#333333] rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-playfair text-2xl font-bold">Community Discussions</h2>
                <button
                  onClick={() => setIsNewDiscussionOpen(true)}
                  className="text-cardinal-red hover:text-forest-green transition-colors flex items-center gap-2"
                >
                  <Plus size={20} />
                  Start Discussion
                </button>
              </div>

              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-gray/60" size={20} />
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    className="w-full pl-10 pr-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <select
                  className="px-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="All">All Categories</option>
                  {forumCategories.map(category => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Discussions List */}
              <div className="space-y-6">
                {discussions.map(discussion => (
                  <div
                    key={discussion.id}
                    className="border border-[#333333] rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={discussion.authorImage}
                        alt={discussion.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{discussion.author}</span>
                          <span className="text-charcoal-gray/40">•</span>
                          <span className="text-sm text-charcoal-gray/60">{discussion.date}</span>
                          <span className="text-charcoal-gray/40">•</span>
                          <span className="text-cardinal-red text-sm">{discussion.category}</span>
                        </div>
                        <h3 className="font-playfair text-xl font-bold mb-2 hover:text-cardinal-red transition-colors cursor-pointer">
                          {discussion.title}
                        </h3>
                        <p className="text-charcoal-gray/80 mb-4">
                          {discussion.content}
                        </p>

                        {/* Last Reply */}
                        <div className="bg-[#F2F0EF] rounded-lg p-4 mb-4">
                          <div className="flex items-center gap-2 text-sm text-charcoal-gray/60 mb-2">
                            <span className="font-medium">{discussion.lastReply.author}</span>
                            <span>replied</span>
                            <span>{discussion.lastReply.date}</span>
                          </div>
                          <p className="text-charcoal-gray/80">
                            {discussion.lastReply.content}
                          </p>
                        </div>

                        <div className="flex items-center gap-6">
                          <button className="flex items-center gap-2 text-charcoal-gray/60 hover:text-cardinal-red transition-colors">
                            <MessageCircle size={18} />
                            <span>{discussion.replies} Replies</span>
                          </button>
                          <button className="flex items-center gap-2 text-charcoal-gray/60 hover:text-cardinal-red transition-colors">
                            <ThumbsUp size={18} />
                            <span>{discussion.likes} Likes</span>
                          </button>
                          <button className="flex items-center gap-2 text-charcoal-gray/60 hover:text-cardinal-red transition-colors">
                            <Share2 size={18} />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Forum Categories */}
            <section className="border border-[#333333] rounded-lg p-6">
              <h2 className="font-playfair text-xl font-bold mb-4">Forum Categories</h2>
              <div className="space-y-2">
                {forumCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-cardinal-red text-white'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className={`text-sm ${
                      selectedCategory === category.name
                        ? 'text-white/80'
                        : 'text-gray-500'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Local Resources */}
            <section className="border border-[#333333] rounded-lg p-6">
              <h2 className="font-playfair text-xl font-bold mb-4">Local Resources</h2>
              <div className="space-y-4">
                {localResources.map(resource => (
                  <div key={resource.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <div className="flex gap-4">
                      <img
                        src={resource.image}
                        alt={resource.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-medium hover:text-cardinal-red transition-colors cursor-pointer">
                          {resource.name}
                        </h3>
                        <span className="text-sm text-cardinal-red">{resource.category}</span>
                        <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                          <MapPin size={14} />
                          <span>{resource.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 border border-[#333333] rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                View All Resources
                <ChevronRight size={16} />
              </button>
            </section>
          </div>
        </div>
      </div>

      {/* New Discussion Modal */}
      {isNewDiscussionOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-playfair text-2xl font-bold">Start a Discussion</h2>
                <button
                  onClick={() => setIsNewDiscussionOpen(false)}
                  className="text-gray-500 hover:text-cardinal-red transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={(e) => {
                e.preventDefault();
                setIsNewDiscussionOpen(false);
                alert("Your discussion has been posted!");
              }} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                  >
                    {forumCategories.map(category => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Content *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                    placeholder="Share your thoughts..."
                  />
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setIsNewDiscussionOpen(false)}
                    className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors"
                  >
                    Post Discussion
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityPage;