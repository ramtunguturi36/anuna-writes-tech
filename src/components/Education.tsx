
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Keshav Memorial Institute of Technology, Hyderabad",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2022 – Present",
      grade: "CGPA: 8.045/10"
    },
    {
      institution: "Narayana Junior College, Sangareddy",
      degree: "Intermediate Education",
      period: "2020 – 2022",
      grade: "GPA: 9.70/10"
    },
    {
      institution: "Keshav Reddy High School, Mahabubnagar",
      degree: "Secondary Education",
      period: "2019 – 2020",
      grade: "GPA: 10/10"
    }
  ];

  const certifications = [
    "Introduction to Technical Writing – Board Infinity (Coursera)",
    "Include<her>Cohort 4.0 – Re-skill x Azure Development Community"
  ];

  const achievements = [
    "Earned 5+ Salesforce Trailhead Badges with 3400+ points, showcasing proficiency in CRM fundamentals, cloud tools, and business applications",
    "Created user-friendly technical documentation for academic and AI-based projects, focusing on clarity and user feedback"
  ];

  const coursework = [
    "English for Skill Enhancement", "English Language Communication Skills Lab", 
    "Professional and Soft Skills Lab", "Python Lab", "Gender Sensitization", 
    "Software Engineering", "Engineering Graphics"
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Achievements</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Academic excellence and continuous learning journey
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-gray-900">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-l-blue-600 pl-4 py-2">
                  <h3 className="font-semibold text-gray-900">{edu.institution}</h3>
                  <p className="text-gray-700">{edu.degree}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline">{edu.period}</Badge>
                    <Badge className="bg-green-100 text-green-800">{edu.grade}</Badge>
                  </div>
                </div>
              ))}
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications & Achievements */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-gray-900">
                  <Award className="h-6 w-6 text-blue-600" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{cert}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Key Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
