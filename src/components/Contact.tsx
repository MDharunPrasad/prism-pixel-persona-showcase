import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "../hooks/use-toast";

emailjs.init("q3h3rzZEs6JKl_3o7");

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setShowMessage(false);
    
    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        'service_c1rhxr',  // Corrected service ID
        'template_ivd4olx',
        formRef.current,
        'q3h3rzZEs6JKl_3o7'
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setMessage('Message sent successfully!');
      setError(false);
      // Reset form
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setMessage('Failed to send message. Please try again.');
      setError(true);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setShowMessage(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-4 md:mb-6 tracking-wide animate-pulse-glow font-orbitron">
            GET IN TOUCH
          </h2>
          <p className="text-lg md:text-2xl text-white/70 mb-6 md:mb-10 font-light">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 hover:scale-105 transition-all duration-500">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 font-rajdhani">Let's Connect</h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <p className="text-white font-semibold">dharunprasad9494@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Phone</p>
                    <p className="text-white font-semibold">+91 9677689494</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white font-semibold">Dindigul, Tamilnadu</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 md:mt-8 flex space-x-4">
                <a href="https://www.linkedin.com/in/dharunprasad-m-328974228/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Linkedin className="text-white" size={18} />
                </a>
                <a href="https://github.com/MDharunPrasad" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Github className="text-white" size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl md:rounded-3xl p-6 md:p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="text-base md:text-lg text-white/80 mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 md:p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-base md:text-lg text-white/80 mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 md:p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-base md:text-lg text-white/80 mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full p-3 md:p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 md:py-4 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {/* Success/Error Messages */}
              {showMessage && (
                <div className={`p-3 md:p-4 rounded-lg text-center ${
                  error ? 'bg-red-500/20 text-red-200' : 'bg-green-500/20 text-green-200'
                }`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
