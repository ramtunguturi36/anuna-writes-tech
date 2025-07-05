
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Ready to collaborate on technical documentation, writing projects, or software development? 
          I'd love to hear from you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Mail className="mr-2 h-5 w-5" />
            urabaianuna@gmail.com
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-600"
          >
            <Phone className="mr-2 h-5 w-5" />
            +91 9390757355
          </Button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-400 opacity-75">
          <p>&copy; 2025 Anuna Reddy. Crafted with passion for clear communication.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
