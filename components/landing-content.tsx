"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Andrew",
    avatar: "A",
    title: "Flutter Developer",
    description:
      "This is the perfect AI app ever, that helps me grow within myself.",
  },
  {
    name: "Vivek",
    avatar: "V",
    title: "Software Developer",
    description: "I've used this so much and it has improved my creativity.",
  },
  {
    name: "John",
    avatar: "J",
    title: "Android Developer",
    description:
      "Adoption of AI during the development process has become my needs.",
  },
  {
    name: "Sam",
    avatar: "S",
    title: "Web Developer",
    description: "In every aspects of the development, AI has helped me a lot.",
  },
];

export const LandingContent = () => {
  return (
    <div className="pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm text-zinc-500">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
