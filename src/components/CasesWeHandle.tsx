import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Bike, UserX, CarTaxiFront, Bus, Train, AlertTriangle, HelpCircle } from "lucide-react";

const CasesWeHandle = () => {
  const cases = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Car Accidents",
      description: "Multi-vehicle collisions, rear-end crashes, side-impact accidents"
    },
    {
      icon: <Bike className="w-8 h-8" />,
      title: "Motorcycles & Cyclists",
      description: "Motorcycle crashes, bicycle accidents, lane-splitting incidents"
    },
    {
      icon: <UserX className="w-8 h-8" />,
      title: "Pedestrians Hit or Injured",
      description: "Crosswalk accidents, sidewalk injuries, hit-and-run pedestrian cases"
    },
    {
      icon: <CarTaxiFront className="w-8 h-8" />,
      title: "Taxis/Rideshare Apps",
      description: "Uber, Lyft, taxi accidents, passenger injury claims"
    },
    {
      icon: <Bus className="w-8 h-8" />,
      title: "Bus Accidents",
      description: "Public transit, school bus, charter bus accident claims"
    },
    {
      icon: <Train className="w-8 h-8" />,
      title: "Train/Subway Accidents",
      description: "MTA incidents, platform accidents, train collision cases"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Uninsured/Unlicensed Drivers",
      description: "Accidents with drivers who lack proper insurance or licenses"
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "Hit-and-Run Accidents",
      description: "Fleeing driver cases, unidentified vehicle accidents"
    }
  ];

  return (
    <section id="cases" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            Specialists in <span className="text-primary">traffic cases</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat leading-relaxed">
            Our dedicated traffic accident team handles all types of vehicle-related incidents in New York.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cases.map((caseType, index) => (
            <Card 
              key={index} 
              className="hover-lift animate-scale-in border-border hover:border-primary/20 transition-all duration-300 cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {caseType.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 font-montserrat">
                  {caseType.title}
                </h3>
                <p className="text-muted-foreground text-sm font-montserrat flex-1">
                  {caseType.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-full shadow-elegant font-montserrat font-semibold"
          >
            Find out if you qualify for compensation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CasesWeHandle;