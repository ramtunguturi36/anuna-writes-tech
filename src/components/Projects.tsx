
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "SRS Documentation – Recruitment Management System",
      role: "Technical Writing Contributor",
      description: "Co-authored a formal Software Requirement Specification (SRS) for a web-based recruitment system following IEEE standards.",
      achievements: [
        "Documented functional and non-functional requirements for different user roles (Admin, Recruiter, Manager)",
        "Designed and formatted the document based on IEEE SRS standards",
        "Collaborated on diagrams (Use Case, Class Diagram) ensuring clarity and ease of navigation"
      ],
      technologies: ["Technical Writing", "IEEE Standards", "UML Diagrams", "Requirements Analysis"]
    },
    {
      title: "InterviewMate – AI-Powered Interview Platform",
      role: "Full-Stack Developer",
      description: "Developed a comprehensive platform for AI-driven interview simulation with advanced video/audio analysis capabilities.",
      achievements: [
        "Built performance analysis engine using NLP (spaCy, VADER, KeyBERT) for sentiment analysis",
        "Designed interactive dashboards with Chart.js and exportable PDF reports",
        "Implemented real-time video/audio processing with Whisper AI integration"
      ],
      technologies: ["React.js", "Flask", "Cloudinary", "Whisper AI", "Material UI", "HuggingFace NLP", "spaCy", "Chart.js"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing technical documentation expertise and full-stack development skills
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 mb-2">{project.title}</CardTitle>
                <Badge variant="secondary" className="w-fit mb-3">{project.role}</Badge>
                <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 text-sm leading-relaxed">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
