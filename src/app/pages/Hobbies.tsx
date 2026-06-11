import { motion } from "motion/react";
import { BookOpen, Palette, Camera, Waves, MoveRight } from "lucide-react";
import { Link } from "react-router";
import { PageTransition } from "../components/PageTransition";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const IMG_BOOKS = "https://i.pinimg.com/736x/f7/85/9f/f7859fb742da0f7b91de879c3d5355de.jpg";
const IMG_PAINTING = "https://i.pinimg.com/736x/99/40/35/99403515490fb67d527b3ff0909c36fa.jpg";
const IMG_CAMERA = "https://i.pinimg.com/736x/53/41/f4/5341f4e53be03a973d80b383af9df9b5.jpg";
const IMG_SWIMMING = "https://i.pinimg.com/736x/a1/a5/54/a1a5541299f872a98af7905f169d395f.jpg";

export function Hobbies() {
  const hobbies = [
    {
      id: "reading-writing",
      icon: BookOpen,
      title: "Reading & Writing",
      image: IMG_BOOKS,
      description: [
        "I read like the world is trying to tell me something.",
        "And writing—is how I respond."
      ],
    },
    {
      id: "painting-drawing",
      icon: Palette,
      title: "Painting & Drawing",
      image: IMG_PAINTING,
      description: [
        "There are things words cannot hold.",
        "So I draw them."
      ],
    },
    {
      id: "photography",
      icon: Camera,
      title: "Photography",
      image: IMG_CAMERA,
      description: [
        "I capture moments as they are—",
        "unposed, real, fleeting."
      ],
    },
    {
      id: "swimming",
      icon: Waves,
      title: "Swimming",
      image: IMG_SWIMMING,
      description: [
        "A quiet reset.",
        "A rhythm without noise."
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="w-full bg-background min-h-screen">
        
        {/* HEADER */}
        <section className="relative min-h-[60vh] flex flex-col justify-end pb-12 px-6 md:px-12 border-b border-border">
          <div className="relative z-10 w-full mt-32 md:mt-0 max-w-7xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-tighter uppercase font-serif text-foreground break-words"
            >
              Beyond <br/> The Screen
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-border pt-6 gap-6"
            >
              <p className="max-w-md text-foreground font-medium text-lg uppercase tracking-widest">
                Life & <br className="hidden md:block"/> Explorations
              </p>
              <p className="md:text-right max-w-sm text-sm text-muted-foreground leading-relaxed">
                Not everything I create is meant to solve a problem. <br className="hidden md:block"/>
                Some things exist simply to be felt.
              </p>
            </motion.div>
          </div>
        </section>

        {/* HOBBIES GRID */}
        <section className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-y-32">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              // Make odd items offset to create an asymmetrical gallery vibe
              const isOffset = index % 2 !== 0;

              return (
                <motion.div
                  key={hobby.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`group flex flex-col ${isOffset ? 'md:mt-32' : ''}`}
                >
                  <div className="aspect-[4/5] w-full overflow-hidden bg-secondary mb-8 relative">
                     <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        transition={{ duration: 0.8, ease: "easeOut" }} 
                        className="w-full h-full"
                      >
                        <ImageWithFallback src={hobby.image} alt={hobby.title} className="w-full h-full object-cover" />
                      </motion.div>
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-6 left-6 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground z-10 group-hover:scale-110 transition-transform shadow-lg">
                         <Icon className="w-5 h-5" />
                      </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-serif mb-6 group-hover:text-accent transition-colors">
                      {hobby.title}
                    </h3>
                    <div className="space-y-2 border-l border-border pl-6 py-2 mb-8">
                      {hobby.description.map((line, i) => (
                        <p key={i} className="text-lg text-muted-foreground italic leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                    
                    <Link to={`/hobbies/${hobby.id}`} className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 hover:text-accent hover:border-accent transition-colors uppercase text-sm tracking-wider">
                      Explore Collection <MoveRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* OUTRO */}
        <section className="px-6 md:px-12 py-32 border-t border-border bg-secondary/30 flex justify-center text-center">
           <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
           >
              <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">These are not separate from my work. They are where it begins.</h2>
           </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}