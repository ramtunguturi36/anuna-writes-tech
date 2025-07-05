
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Book Author",
      period: "2021 – Present",
      achievements: [
        "Written over 20,000+ words of creative fiction content across multiple serialized stories",
        "Built a dedicated audience of over 1,000+ readers, maintaining engagement through consistent storytelling",
        "Structured publishing approach with regular content delivery"
      ]
    },
    {
      title: "Volunteer – TechTonic'25 (TechFest)",
      period: "2025",
      achievements: [
        "Supported workshop coordination and event handling during TechTonic'25",
        "Ensured smooth execution of technical sessions and attendee engagement",
        "Collaborated with technical teams to deliver seamless event experience"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building expertise through creative writing and technical collaboration
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-2xl text-gray-900">{exp.title}</CardTitle>
                  <Badge variant="outline" className="w-fit text-blue-600 border-blue-600">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
