
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Anuna Reddy
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Computer Science student with a passion for <span className="text-blue-600 font-semibold">technical writing</span> and documentation. 
            Bridging the gap between technology and users through clear, effective communication.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Mail className="mr-2 h-5 w-5" />
            urabaianuna@gmail.com
          </Button>
          <Button variant="outline" size="lg">
            +91 9390757355
          </Button>
        </div>
        
        <div className="flex justify-center gap-6">
          <Button variant="ghost" size="lg" className="hover:bg-blue-100">
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
          <Button variant="ghost" size="lg" className="hover:bg-blue-100">
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
          <Button variant="ghost" size="lg" className="hover:bg-blue-100">
            Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
