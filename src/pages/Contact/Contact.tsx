import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { Layout } from '../../components/common/Layout';
import { CONTACT_INFO, COMPANY_INFO } from '../../utils/constants';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

// ...existing code...

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset form after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
      }, 4000);
    }
  };

  

 

  const subjects = [
    'General Inquiry',
    'Sales & Partnerships',
    'Technical Support',
    'Billing & Accounts',
    'Media & Press',
    'Other'
  ];

 

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900"></div>
          <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.07&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30`} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Available for new projects
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-xl">
                Let's Create Something
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Extraordinary
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-12">
                Ready to transform your vision into reality? <span className="font-bold text-white">{COMPANY_INFO.name}</span> is here to elevate your business with cutting-edge solutions and unparalleled expertise.
              </p>
            </div>
          </div>
        </div>
        {/* Main Content: 2 columns, left info, right form */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Get in Touch */}
            <div className="bg-white/90 rounded-3xl shadow-2xl border border-blue-100 p-10 flex flex-col justify-between min-h-[600px]">
              <h2 className="text-3xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Mail className="w-7 h-7 text-blue-600" /> Get in Touch
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-emerald-600" />
                  <span className="font-semibold text-blue-900">{CONTACT_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-blue-900">{CONTACT_INFO.email}</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                  <span className="font-semibold text-blue-900">{CONTACT_INFO.address}</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Business Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span className="font-medium text-blue-900">Mon - Fri</span>
                    <span className="text-blue-700">10:00 AM - 5:00 PM</span>
                  </li>
                  
                  <li className="flex justify-between items-center">
                    <span className="font-medium text-blue-900">Sat - Sun</span>
                    <span className="text-red-500">Closed</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white shadow-lg hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" /> Call Now
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 text-blue-700 border border-blue-200 shadow hover:bg-blue-100 transition">
                  <Mail className="w-5 h-5" /> Email Us
                </a>
              </div>
            </div>
            {/* Right: Send Message Form */}
            <div className="bg-white/95 rounded-3xl shadow-2xl border border-blue-100 p-10 min-h-[600px] flex flex-col justify-between">
              <h2 className="text-3xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Send className="w-7 h-7 text-blue-600" /> Send Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-3">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className={`w-full px-5 py-4 border-2 rounded-2xl text-blue-900 placeholder-blue-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${errors.name ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-blue-200 bg-blue-50 focus:border-blue-500 focus:bg-white hover:border-blue-300'}`} placeholder="John Doe" />
                    {errors.name && <p className="mt-2 text-sm text-red-600 flex items-center"><span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-3">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full px-5 py-4 border-2 rounded-2xl text-blue-900 placeholder-blue-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${errors.email ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-blue-200 bg-blue-50 focus:border-blue-500 focus:bg-white hover:border-blue-300'}`} placeholder="john@company.com" />
                    {errors.email && <p className="mt-2 text-sm text-red-600 flex items-center"><span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-3">Company</label>
                    <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-5 py-4 border-2 border-blue-200 bg-blue-50 rounded-2xl text-blue-900 placeholder-blue-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white hover:border-blue-300" placeholder="Your Company" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-3">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-5 py-4 border-2 border-blue-200 bg-blue-50 rounded-2xl text-blue-900 placeholder-blue-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white hover:border-blue-300" placeholder="+91 7761006623" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-3">Subject *</label>
                  <select name="subject" value={formData.subject} onChange={handleInputChange} className={`w-full px-5 py-4 border-2 rounded-2xl text-blue-900 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${errors.subject ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-blue-200 bg-blue-50 focus:border-blue-500 focus:bg-white hover:border-blue-300'}`}>
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                  {errors.subject && <p className="mt-2 text-sm text-red-600 flex items-center"><span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>{errors.subject}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-3">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows={6} className={`w-full px-5 py-4 border-2 rounded-2xl text-blue-900 placeholder-blue-400 resize-vertical transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${errors.message ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-blue-200 bg-blue-50 focus:border-blue-500 focus:bg-white hover:border-blue-300'}`} placeholder="Tell us about your project, goals, timeline, and any specific requirements you have in mind..." />
                  {errors.message && <p className="mt-2 text-sm text-red-600 flex items-center"><span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>{errors.message}</p>}
                </div>
                <button type="submit" disabled={isSubmitted || isLoading} className={`w-full py-5 px-8 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${isSubmitted ? 'bg-green-500 cursor-not-allowed' : isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 shadow-xl hover:shadow-2xl'}`}>
                  <div className="flex items-center justify-center space-x-3">
                    {isSubmitted ? (
                      <>
                        <Check className="w-6 h-6" />
                        <span className="text-lg">Message Sent Successfully!</span>
                      </>
                    ) : isLoading ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span className="text-lg">Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        <span className="text-lg">Send Message</span>
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};