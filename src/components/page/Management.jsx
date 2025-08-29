import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { User } from 'lucide-react';

const managementTeam = [
  { name: 'Adewale Adebayo', portfolio: 'Chief Executive Officer' },
  { name: 'Ngozi Okonjo', portfolio: 'Chief Operating Officer' },
  { name: 'Musa Bello', portfolio: 'Chief Financial Officer' },
  { name: 'Fatima Aliyu', portfolio: 'Head of Sales' },
  { name: 'Chinedu Eze', portfolio: 'Head of Marketing' },
  { name: 'Aisha Ibrahim', portfolio: 'Head of Human Resources' },
  { name: 'Babatunde Oladele', portfolio: 'Lead Agronomist' },
  { name: 'Hadiza Sani', portfolio: 'Logistics Manager' },
];

const Management = () => {
  return (
    <section id="management" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="gradient-text">Management Team</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The dedicated professionals driving our day-to-day operations and success.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {managementTeam.map((member, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/4">
                <div className="p-1 h-full">
                  <Card className="overflow-hidden group h-full flex flex-col">
                     <div className="w-full h-80 bg-gray-200 flex items-center justify-center overflow-hidden">
                        <User className="w-24 h-24 text-gray-400" />
                     </div>
                     <CardContent className="flex flex-col flex-grow items-center justify-center p-6 text-center">
                       <div className="pt-0">
                        <p className="font-bold text-lg text-gray-900">{member.name}</p>
                        <p className="text-sm text-green-700">{member.portfolio}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="flex sm:-left-4 lg:-left-12"/>
          <CarouselNext className="flex sm:-right-4 lg:-right-12"/>
        </Carousel>
      </div>
    </section>
  );
};

export default Management;