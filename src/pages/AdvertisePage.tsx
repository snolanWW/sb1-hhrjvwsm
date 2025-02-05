import React, { useState } from 'react';
import { 
  Users, 
  BarChart, 
  Newspaper, 
  Monitor, 
  Mail, 
  Phone, 
  MessageSquare, 
  ChevronRight, 
  CheckCircle2, 
  X,
  Building2,
  Target,
  Megaphone,
  Globe,
  PieChart,
  TrendingUp
} from 'lucide-react';

// Mock data for audience demographics
const demographics = {
  age: {
    "18-24": 15,
    "25-34": 25,
    "35-44": 30,
    "45-54": 20,
    "55+": 10
  },
  education: {
    "College Degree": 65,
    "Graduate Degree": 20,
    "High School": 15
  },
  income: {
    "Under $50k": 20,
    "$50k-$75k": 30,
    "$75k-$100k": 25,
    "$100k+": 25
  }
};

// Mock data for advertising options
const adOptions = [
  {
    title: "Premium Display Ads",
    description: "High-visibility banner and sidebar advertisements on our website",
    features: [
      "Prime positioning on high-traffic pages",
      "Multiple size options available",
      "Responsive design for all devices",
      "Click-through tracking and analytics"
    ],
    icon: Monitor
  },
  {
    title: "Print Advertising",
    description: "Traditional print advertisements in our weekly newspaper",
    features: [
      "Full, half, and quarter page options",
      "Premium placement available",
      "Full color or black & white",
      "Design services included"
    ],
    icon: Newspaper
  },
  {
    title: "Sponsored Content",
    description: "Native advertising that tells your brand's story",
    features: [
      "Written by our professional team",
      "SEO optimization included",
      "Social media promotion",
      "Permanent archive access"
    ],
    icon: MessageSquare
  }
];

// Mock data for testimonials
const testimonials = [
  {
    quote: "The Cardinal has been instrumental in growing our local business. Their targeted approach and engaged readership delivered real results.",
    author: "John Smith",
    role: "Owner, Main Street Cafe",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    quote: "Working with The Cardinal's advertising team was seamless. They understood our goals and helped us reach our target audience effectively.",
    author: "Emily Chen",
    role: "Marketing Director, Doylestown Arts Festival",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  }
];

const AdvertisePage = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interests: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setShowContactForm(false);
    alert("Thank you for your interest! Our advertising team will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
            alt="Advertising background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Reach Our Engaged Local Audience
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Connect with Doylestown's most engaged readers through The Cardinal's trusted platform. 
              Our multi-channel advertising solutions help you reach your target audience effectively.
            </p>
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-forest-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-cardinal-red transition-colors inline-flex items-center gap-2"
            >
              Get Started
              <ChevronRight size={20} />
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
                 C180,90 360,120 540,100 
                 C720,80 900,110 1080,105 
                 C1260,100 1350,85 1440,95 
                 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg text-center">
              <div className="inline-block p-4 bg-cardinal-red/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-cardinal-red" />
              </div>
              <div className="font-playfair text-4xl font-bold text-charcoal-gray mb-2">25,000+</div>
              <div className="text-charcoal-gray/70">Monthly Readers</div>
            </div>
            <div className="bg-white p-8 rounded-lg text-center">
              <div className="inline-block p-4 bg-cardinal-red/10 rounded-full mb-4">
                <Globe className="w-8 h-8 text-cardinal-red" />
              </div>
              <div className="font-playfair text-4xl font-bold text-charcoal-gray mb-2">85%</div>
              <div className="text-charcoal-gray/70">Local Audience</div>
            </div>
            <div className="bg-white p-8 rounded-lg text-center">
              <div className="inline-block p-4 bg-cardinal-red/10 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-cardinal-red" />
              </div>
              <div className="font-playfair text-4xl font-bold text-charcoal-gray mb-2">4.5x</div>
              <div className="text-charcoal-gray/70">Engagement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Demographics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-4">
              Our Audience
            </h2>
            <p className="text-lg text-charcoal-gray/70 max-w-2xl mx-auto">
              Connect with Doylestown's most engaged and influential readers through our trusted platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F2F0EF] p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cardinal-red/10 rounded-lg">
                  <Target className="w-6 h-6 text-cardinal-red" />
                </div>
                <h3 className="font-playfair text-xl font-bold">Age Distribution</h3>
              </div>
              <div className="space-y-4">
                {Object.entries(demographics.age).map(([range, percentage]) => (
                  <div key={range}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{range}</span>
                      <span className="font-medium">{percentage}%</span>
                    </div>
                    <div className="h-2 bg-cardinal-red/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-cardinal-red rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F2F0EF] p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cardinal-red/10 rounded-lg">
                  <Building2 className="w-6 h-6 text-cardinal-red" />
                </div>
                <h3 className="font-playfair text-xl font-bold">Education Level</h3>
              </div>
              <div className="space-y-4">
                {Object.entries(demographics.education).map(([level, percentage]) => (
                  <div key={level}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{level}</span>
                      <span className="font-medium">{percentage}%</span>
                    </div>
                    <div className="h-2 bg-cardinal-red/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-cardinal-red rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F2F0EF] p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cardinal-red/10 rounded-lg">
                  <PieChart className="w-6 h-6 text-cardinal-red" />
                </div>
                <h3 className="font-playfair text-xl font-bold">Household Income</h3>
              </div>
              <div className="space-y-4">
                {Object.entries(demographics.income).map(([range, percentage]) => (
                  <div key={range}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{range}</span>
                      <span className="font-medium">{percentage}%</span>
                    </div>
                    <div className="h-2 bg-cardinal-red/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-cardinal-red rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-4">
              Advertising Solutions
            </h2>
            <p className="text-lg text-charcoal-gray/70 max-w-2xl mx-auto">
              Choose from our range of advertising options designed to maximize your reach and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {adOptions.map((option, index) => (
              <div key={index} className="bg-white p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-cardinal-red/10 rounded-lg">
                    <option.icon className="w-6 h-6 text-cardinal-red" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold">{option.title}</h3>
                </div>
                <p className="text-charcoal-gray/70 mb-6">{option.description}</p>
                <ul className="space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-gray/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-4">
              What Our Advertisers Say
            </h2>
            <p className="text-lg text-charcoal-gray/70 max-w-2xl mx-auto">
              Join our satisfied advertisers who have seen real results from partnering with The Cardinal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#F2F0EF] p-8 rounded-lg">
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-lg text-charcoal-gray/80 mb-4">"{testimonial.quote}"</p>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-cardinal-red">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cardinal-red rounded-lg p-12 text-center">
            <h2 className="font-playfair text-3xl font-bold text-white mb-6">
              Ready to Reach Your Target Audience?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our advertising team today to discuss how we can help you achieve your marketing goals.
            </p>
            <button
              onClick={() => setShowContactForm(true)}
              className="inline-flex items-center px-8 py-3 bg-white text-cardinal-red rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors"
            >
              Get Started
              <ChevronRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-playfair text-2xl font-bold">Contact Our Advertising Team</h2>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-500 hover:text-cardinal-red transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Interested In *
                  </label>
                  <div className="space-y-2">
                    {adOptions.map((option, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-cardinal-red focus:ring-cardinal-red"
                          checked={formData.interests.includes(option.title)}
                          onChange={(e) => {
                            const newInterests = e.target.checked
                              ? [...formData.interests, option.title]
                              : formData.interests.filter(i => i !== option.title);
                            setFormData(prev => ({ ...prev, interests: newInterests }));
                          }}
                        />
                        <span>{option.title}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell us about your advertising goals..."
                  />
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors"
                  >
                    Submit Inquiry
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

export default AdvertisePage;