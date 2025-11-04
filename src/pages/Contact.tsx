import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import incenseSmoke from '@/assets/incense-smoke.jpg';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Message Sent',
      description: 'Your inquiry has been received. We will respond within 48 hours.',
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative min-h-screen cursor-dot">
      <Navigation />

      <div className="absolute inset-0 opacity-10">
        <img
          src={incenseSmoke}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative pt-32 px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-light tracking-[0.3em] mb-12">
            {t.contact.title}
          </h1>

          <p className="text-xl opacity-70 tracking-wider mb-16 max-w-2xl leading-loose">
            For inquiries regarding works, commissions, or philosophical discussions, 
            please reach out through the form below. We respond to all messages 
            with the care they deserve.
          </p>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-8 max-w-2xl"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm tracking-widest opacity-70">
                {t.contact.name}
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-transparent border-foreground/20 focus:border-foreground/50 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm tracking-widest opacity-70">
                {t.contact.email}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-transparent border-foreground/20 focus:border-foreground/50 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm tracking-widest opacity-70">
                {t.contact.message}
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={8}
                className="bg-transparent border-foreground/20 focus:border-foreground/50 transition-colors resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full tracking-widest bg-foreground text-background hover:opacity-80 transition-opacity"
            >
              {t.contact.submit}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-24 space-y-8 text-center"
          >
            <div className="space-y-4 opacity-70">
              <p className="text-sm tracking-widest">ALTERNATIVE CONTACT</p>
              <p className="text-lg">inquiry@kuroarchive.com</p>
            </div>

            <div className="pt-12 space-y-4 opacity-50">
              <p className="text-xs tracking-[0.3em]">RESPONSE TIME</p>
              <p className="text-sm">We typically respond within 24-48 hours</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-32 pt-16 border-t border-foreground/10"
          >
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-light tracking-[0.3em]">Visit Us</h2>
              <div className="space-y-4 opacity-70 text-lg leading-loose">
                <p>KURO ARCHIVE Studio</p>
                <p>〒150-0001</p>
                <p>Tokyo, Shibuya-ku</p>
                <p>By appointment only</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <footer className="relative border-t border-foreground/10 py-12 px-8 mt-24">
        <div className="max-w-4xl mx-auto flex justify-between items-center text-xs tracking-widest opacity-50">
          <p>© 2024 KURO ARCHIVE</p>
          <p>DIALOGUE THROUGH SILENCE</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
