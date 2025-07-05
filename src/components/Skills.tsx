
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Soft Skills",
      skills: ["Strong written and communication skills", "Documentation", "Team leadership", "Task prioritization"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Writing Skills",
      skills: ["Technical Documentation (SRS, User Manuals)", "Creative Writing", "SEO Basics"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Documentation Tools",
      skills: ["Microsoft Word", "WordPress", "Git", "GitHub", "Document360", "Draw.io", "Lucidchart", "Grammarly"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Software Engineering",
      skills: ["Agile & Scrum Methodologies", "UML (Use Case & Class Diagrams)", "Requirements Gathering"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "Programming Languages",
      skills: ["HTML", "CSS", "JavaScript", "Python", "JSON", "Java"],
      color: "bg-indigo-100 text-indigo-800"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for technical communication and software development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} className={`${category.color} hover:scale-105 transition-transform`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
