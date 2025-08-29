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

const boardMembers = [
  {
    name: 'Dr. Said Alkali Kori',
    portfolio: ['The Chairman', 'Nguru Oil Mills Company', 'Nigerian Food Corporation'],
    image: 'https://horizons-cdn.hostinger.com/6e864be7-e2bd-4169-a41b-55b821945d13/1cb920f0d1c448202b02b7f587c34a9e.jpg',
  },
  {
    name: 'Dr. Babagana Mohammed Ahmed',
    portfolio: ['Managing Director', 'Nigerian Food Corporation'],
    image: 'https://horizons-cdn.hostinger.com/6e864be7-e2bd-4169-a41b-55b821945d13/db6ad5a7180b33ebe69f2e70441d9147.webp',
  },
  {
    name: 'Samalla Hassan Yusuf',
    portfolio: ['Executive Director/COO', '(Business Development and Operations)', 'Nigerian Food Corporation'],
    image: 'https://horizons-cdn.hostinger.com/6e864be7-e2bd-4169-a41b-55b821945d13/f1ec1eb525d558f903a5b794d7a9e977.png',
  },
  {
    name: 'Hussaini Tela Zimbo',
    portfolio: ['Executive Director/CFO', '(Finance and Strategy)'],
    image: null,
  },
  /*
  {
    name: 'Hon. Ali Mustapha Goniri',
    portfolio: ['Non-Executive Director', 'Nigerian Food Corporation'],
    image: 'https://horizons-cdn.hostinger.com/6e864be7-e2bd-4169-a41b-55b821945d13/0aba554dbd4f7c7a7414e0b8fcc1b532.jpg',
  },
  */
  {
    name: 'Dr. Aliyu Chikaji',
    portfolio: ['Non-Executive Director', 'Nigerian Food Corporation'],
    image: 'https://horizons-cdn.hostinger.com/6e864be7-e2bd-4169-a41b-55b821945d13/b9d52372e2d25bd942a5af1fba3d8cc4.jpg',
  },
  {
    name: 'Liman Ali Ibrahim',
    portfolio: ['Non-Executive Director', 'Nigerian Food Corporation'],
    image: 'https://horizons-cdn.hostinger.com/6e864be7-e2bd-4169-a41b-55b821945d13/e249ed41452878baa446e98195748f95.png',
  },
  {
    name: 'Mohammed Babazau',
    portfolio: ['Non-Executive Director', 'Nigerian Food Corporation'],
    image: 'https://horizons-cdn.hostinger.com/6e864be7-e2bd-4169-a41b-55b821945d13/b495363aa2ba74ef4d0a55a2ced90c49.png',
  },
  /*{
    name: 'Abdullahi Hassan Gana',
    portfolio: ['Non-Executive Director', 'Nigerian Food Corporation'],
    image: 'https://horizons-cdn.hostinger.com/6e864be7-e2bd-4169-a41b-55b821945d13/a98a5824ef51681336f837daadb093fe.png',
  },
  {
    name: 'Mohammed Abatcha Geidam',
    portfolio: ['Non-Executive Director', 'Nigerian Food Corporation'],
    image: 'https://horizons-cdn.hostinger.com/6e864be7-e2bd-4169-a41b-55b821945d13/a95e6183121f5ce0f12c31a56697a6a1.png',
  },*/
  {
    name: 'Hon. Hamza Saidu',
    portfolio: ['Non-Executive Director', 'Nigerian Food Corporation'],
    image: null
  }
];

const Board = () => {
  return (
    <section id="board" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Yobe Fertilizer <span className="gradient-text">Board Members</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Meet the visionary leaders guiding our company towards a prosperous future.
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
            {boardMembers.map((member, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/4">
                <div className="p-1 h-full">
                  <Card className="overflow-hidden group h-full flex flex-col">
                    <div className="w-full h-80 bg-gray-200 flex items-center justify-center overflow-hidden">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105" />
                      ) : (
                        <User className="w-24 h-24 text-gray-400" />
                      )}
                    </div>
                    <CardContent className="flex flex-col flex-grow items-center justify-center p-6 text-center">
                      <div className="pt-0">
                        <p className="font-bold text-lg text-gray-900">{member.name}</p>
                        {member.portfolio.map((line, i) => (
                          <p key={i} className="text-sm text-green-700">{line}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="flex sm:-left-4 lg:-left-12" />
          <CarouselNext className="flex sm:-right-4 lg:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default Board;