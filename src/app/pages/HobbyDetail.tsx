import { motion, useScroll, useTransform } from "motion/react";
import { MoveLeft, Mail, BookOpen, ChevronRight, ChevronLeft, X, Play, Pause } from "lucide-react";
import { Link, useParams } from "react-router";
import { PageTransition } from "../components/PageTransition";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useRef, useState, useEffect } from "react";
import jimBox2631 from "../../assets/IMG_2631.JPG";
import girl from "../../assets/IMG_2632.JPG";

// Mock Data
const hobbiesData = {
  "reading-writing": {
    title: "Reading & Writing",
    subtitle: "Words & Worlds",
    heroImage: "https://i.pinimg.com/736x/07/44/f4/0744f445a7f82d5013e2eab2dfa1c4f0.jpg",
    genres: [
      {
        name: "Philosophical & Thought-Provoking",
        books: [
          {
            title: "Flowers for Algernon",
            author: "Daniel Keyes",
            review: "Love the way Keyes wrote this — every page just hits different. Reading this as an empathetic person is absolutely no joke, your heart cannot take it.",
            image: "https://i.pinimg.com/736x/46/20/cd/4620cd069e0da084fc5d5d4a2b37af50.jpg"
          },
          {
            title: "Oliver Twist",
            author: "Charles Dickens",
            review: "Dickens just knew what he was doing — the darkness, the resilience, all of it wrapped so brilliantly. A timeless one that genuinely stays with you.",
            image: "https://i.pinimg.com/1200x/9c/11/b0/9c11b0ad59fc53f9ae60abe29cd8503e.jpg"
          },
          {
            title: "Animal Farm",
            author: "George Orwell",
            review: "Deceptively simple but it will make you think for days. Love how something this short can say this much about power and how it just corrupts everything.",
            image: "https://i.pinimg.com/736x/cd/1d/8d/cd1d8d4a7f096bb842cf79a085c812b3.jpg"
          },
          {
            title: "The Trial",
            author: "Franz Kafka",
            review: "This book will genuinely disorient you and I mean that in the best way. The suffocating bureaucratic spiral is so unsettling it just does not leave your head.",
            image: "https://i.pinimg.com/736x/7e/e6/dd/7ee6ddcebbb1f8f0130283c0e7cb7531.jpg"
          },
          {
            title: "Kafka on the Shore",
            author: "Haruki Murakami",
            review: "Murakami's prose is something else — dreamy, hypnotic, and just pulls you in completely. Love the way reality and surrealism blend like it is the most normal thing.",
            image: "https://i.pinimg.com/1200x/3c/44/1c/3c441cbeb1da5e8fba433e056b41217b.jpg"
          },
          {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            review: "Holden's voice is so raw it is almost uncomfortable — and that is exactly why it works. Every reread hits harder, love the way this one never gets old.",
            image: "https://i.pinimg.com/736x/c6/77/b0/c677b0ea2177d171100247f354cc8f0e.jpg"
          },
          {
            title: "Cosmos",
            author: "Carl Sagan",
            review: "Sagan makes the infinite feel personal and that is no small thing. Mind-expanding and humbling — love how this one makes you feel so small but in a beautiful way.",
            image: "https://i.pinimg.com/1200x/4d/ef/da/4defda2c384e1d609c2c03309004f0ae.jpg"
          }
        ]
      },
      {
        name: "Contemporary & Psychological",
        books: [
          {
            title: "Verity",
            author: "Colleen Hoover",
            review: "Great idea, great tension — Colleen really knows how to keep you guessing. Wish she had just let the thriller breathe without forcing the romance in, but the unreliable narrator alone is worth it.",
            image: "https://i.pinimg.com/736x/75/ea/72/75ea7201766c7fabee4991dfa43bad0e.jpg"
          },
          {
            title: "It Ends with Us",
            author: "Colleen Hoover",
            review: "The emotional core of this book is genuinely powerful and the trauma cycle conversation it starts is so important. Just feels like the romance bits get in the way of what could have been an even stronger story.",
            image: "https://i.pinimg.com/736x/2b/67/60/2b6760353435b8ef1a3437385a381039.jpg"
          },
          {
            title: "The Girl on the Train",
            author: "Paula Hawkins",
            review: "Love how this one plays with memory and perception — multiple perspectives done really well. The unreliability keeps you hooked the whole way through.",
            image: "https://i.pinimg.com/1200x/3a/78/d7/3a78d7c64e4676d4fc2a905b033b5e5e.jpg"
          },
          {
            title: "How About a Sin Tonight",
            author: "N.C.",
            review: "Honestly the writing felt all over the place — the ideas were there but the execution was just confusing. Could not really get into it, the narrative felt like it kept losing itself.",
            image: "https://i.pinimg.com/736x/2a/33/15/2a33158274dd8c16a2f738d2dec5c273.jpg"
          },
          {
            title: "The Girl in the Glass Case",
            author: "Devashish Sardana",
            review: "Dark, atmospheric, and genuinely captivating. Love the intriguing mystery layered through it — the kind of book that keeps you up way past when you planned to stop.",
            image: "https://i.pinimg.com/736x/4c/a8/b1/4ca8b1a41aaece7da9bb6d4abbf4a7ff.jpg"
          }
        ]
      },
      {
        name: "Indian Contemporary",
        books: [
          {
            title: "Half Girlfriend",
            author: "Chetan Bhagat",
            review: "It is always the same IIT guy and the calm, composed girl — at some point it just feels like the same story wearing a different outfit. Wish Bhagat would write beyond that one lane.",
            image: "https://i.pinimg.com/736x/bd/a0/9a/bda09ab3154ff01139b978462aaf785d.jpg"
          },
          {
            title: "Three Mistakes of My Life",
            author: "Chetan Bhagat",
            review: "The friendship angle had potential but the same ideological pattern just shows up again. Hard to stay invested when you can see the blueprint from chapter one.",
            image: "https://i.pinimg.com/736x/34/1b/a4/341ba4c157f2967dd0aa95bf7d984d1e.jpg"
          },
          {
            title: "Two States",
            author: "Chetan Bhagat",
            review: "The cultural clash bits are fun and relatable but it still feels like Bhagat cannot see past his own set of characters. The formula is just too visible at this point.",
            image: "https://i.pinimg.com/1200x/62/3f/8f/623f8fee7aedff33d854ae99590ed344.jpg"
          },
          {
            title: "The Girl in Room 105",
            author: "Chetan Bhagat",
            review: "The mystery angle was a nice change but the same ideological comfort zone still bleeds through. It had potential to be something different and just did not fully get there.",
            image: "https://i.pinimg.com/736x/6a/21/4e/6a214e053478ac87cd0cf1ac53dcecbd.jpg"
          }
        ]
      },
      {
        name: "Poetry & Inspiration",
        books: [
          {
            title: "The Sun and Her Flowers",
            author: "Rupi Kaur",
            review: "It is a nice read — some pieces genuinely hit and the visual experience is lovely. Not something that completely blew me away but there is a quiet warmth to it.",
            image: "https://i.pinimg.com/1200x/d4/2d/26/d42d26aae97d61d72b969dd137e71902.jpg"
          },
          {
            title: "The Monk Who Sold His Ferrari",
            author: "Robin Sharma",
            review: "This book is the reason I cannot do non-fiction — it took a lifetime just to get through it. The ideas are buried under so much fluff that by the end you are just relieved it is over.",
            image: "https://i.pinimg.com/736x/0a/e0/ce/0ae0ce547dcb55bf99474735b0618d72.jpg"
          }
        ]
      }
    ],
    writings: [
      {
        title: "False Reality",
        type: "Poetry",
        content: `As the waves crashed against the shore
I could feel myself floating away
And in that moment, I wanted nothing more
Than to be able to leave today

As I fell into a deep slumber
I dreamed of a place
Where nothing was somber
In this land I was not a disgrace

Here I could be me
I could do what I please
And I was nothing but free
But this place was only a tease

Soon I would wake to the same sad mentality
Where life is like an earth quake
But that's alright cause in less than 24 hours
I'll be back in the zone of twilight
Frolicking through a field full of sunflowers`
      },
      {
        title: "The Rain",
        type: "Poetry",
        content: `She walks alone in the rain
Letting the drops of water run down her face
Mixing with salty tears she desperately tries
To hold in 
But as those tears are joined by the rain
She feels safe to let them out,
This puts her at ease
It's almost as if she isn't alone,
The world is crying with her;
She loves the way the sky looks as it's storming,
So dark, deary, and dim
Just like her mind
Which has been drowning her for ages
So she continues on,
Letting the world melt around her
Giving her a cold bitter hug
Reminding her, the world isn't so lonely after all.`
      },
      {
        title: "Autumn",
        type: "Poetry",
        content: `It's that time of the year,
Where the leaves FALL down
To give place for new things to grow.
When you lay down,
You could feel the Earth's 
giving You a warm hug,
Before the chilly winter returns.
You could smell the last 
Breathe of rain from the Soil.
You could feel the Little breezes
Touching your body with love.
It feels like everyone is
Falling for you,
Falling in LOVE with you.`
      },
      {
        title: "Lost",
        type: "Poetry",
        content: `They say we are not alone.
When we feel the way we do.
Feel the things we do.
But how can this be true.
When feeling so empty.
Sitting in a crowded room.
Noise surround us.
Mouths continue to move.
The voices consume us.
As the vacantness looms.
We think about these places.
Why we are here?
And what to do?
Always searching for an answer.
Coming up with possible reasons.
Welcoming anything.
That continues to come through.`
      },
      {
        title: "Being Desired Physically Yet Starved Emotionally",
        type: "Reflection",
        content: `Being desired physically yet starved emotionally – a painful dichotomy. Does the attention feel empty because your heart yearns for soulful connection?`
      }
    ]
  },
  "painting-drawing": {
    title: "Painting & Drawing",
    subtitle: "Strokes of Thought",
    heroImage: "https://i.pinimg.com/1200x/48/10/c6/4810c62dba04bb690916bd9aa0031f81.jpg",
    artworks: [
      {
        title: "Jim on the Box",
        story: "My personal favourite painting. I started with a blank black cardboard box and transformed it into a portrait of Jim, my cat. With only six paints—black, white, red, blue, green, and yellow—I had to learn color theory on the fly. Mixing and matching to capture his unique markings taught me more about color than any textbook ever could. Now the box sits in my room, storing Jim's things. It's functional art, a daily reminder that limitations breed creativity.",
        image: jimBox2631,
        forSale: false
      },
      {
        title: "Escape",
        story: "When I need an escape from my mind, I imagine owning an apartment in a faraway place—a huge balcony, rain pouring down, and a drink in my hand. This drawing is my attempt to capture that fantasy. It's the moment of solitude and peace I return to when reality becomes too loud. A pencil sketch of the life I dream about, the quiet I crave.",
        image: girl,
        forSale: true
      },
    ]
  },
  "photography": {
    title: "Photography",
    subtitle: "Captured Light",
    heroImage: "https://i.pinimg.com/736x/3e/ba/ef/3ebaeffe194d7eb9609fa84acbf0c923.jpg",
    collections: [
      {
        id: "nepal-24",
        name: "Nepal '24",
        description: "A trek through the Himalayas. Mountains, monasteries, and moments of stillness. The light here is different—pure and unfiltered.",
        thumbnail: "/assets/photography/Nepal'24/IMG_6765.jpg",
        files: [
          "IMG_2637.JPG",
          "IMG_2639.JPG",
          "IMG_2640.JPG",
          "IMG_2641.JPG",
          "IMG_2643.JPG",
          "IMG_2645.JPG",
          "IMG_2646.JPG",
          "IMG_2647.JPG",
          "IMG_2649.JPG",
          "IMG_2656.JPG",
          "IMG_2663.JPG",
          "IMG_2664.JPG",
          "IMG_2665.JPG",
          "IMG_6577.mp4",
          "IMG_6624.jpg",
          "IMG_6719.jpg",
          "IMG_6765.jpg",
          "IMG_6769.jpg",
          "IMG_6811.mp4",
          "IMG_6814.jpg",
          "IMG_6835.jpg",
          "IMG_6854.jpg",
          "IMG_6932.mp4",
          "IMG_6938.mp4",
          "IMG_6941.mp4",
          "IMG_7002.mp4",
          "IMG_7060.jpg",
          "IMG_7073.jpg",
          "IMG_7107.jpg",
          "IMG_7122.jpg",
          "IMG_7147.jpg",
          "IMG_7151.jpg",
          "IMG_7158.jpg",
          "IMG_7162.jpg",
          "IMG_7167.jpg",
          "IMG_7169.jpg",
          "IMG_7172.jpg",
          "IMG_7173.jpg",
          "IMG_7176.jpg",
          "IMG_7180.jpg",
          "IMG_7202.mp4",
          "IMG_7203.mp4"
        ]
      },
      {
        id: "kerala-26",
        name: "Kerala '26",
        description: "Backwaters and monsoons. Everything is drenched in vibrant greens and deep shadows. The pace of life dictated the speed of the shutter.",
        thumbnail: "/assets/photography/Kerala'26/IMG_2668.JPG",
        files: [
          "IMG_1972.jpg",
          "IMG_2045.jpg",
          "IMG_2210.jpg",
          "IMG_2213.jpg",
          "IMG_2226.jpg",
          "IMG_2251.jpg",
          "IMG_2257.JPG",
          "IMG_2278.jpg",
          "IMG_2668.JPG",
          "IMG_2669.JPG",
          "IMG_2670.JPG",
          "IMG_2671.JPG",
          "IMG_2673.JPG",
          "IMG_2674.JPG",
          "IMG_2675.JPG",
          "IMG_2676.JPG",
          "IMG_2677.JPG",
          "IMG_2678.JPG",
          "IMG_2680.JPG",
          "IMG_2681.JPG",
          "IMG_2682.JPG",
          "IMG_2685.JPG",
          "IMG_2689.JPG",
          "IMG_2690.JPG",
          "IMG_2692.JPG",
          "IMG_2693.JPG",
          "IMG_2694.JPG",
          "IMG_2695.JPG",
          "IMG_2696.JPG",
          "IMG_2697.JPG",
          "IMG_2699.JPG",
          "IMG_2700.JPG",
          "IMG_2702.JPG",
          "IMG_2703.JPG",
          "0FF34883-8D5F-4BC3-9FE4-2A3789FB03B1.MP4",
          "50C845A6-D4CA-473F-8215-2AE7F270B226.MP4",
          "53B61BED-5E09-4115-A8FF-7E2B0E740F91.MP4",
          "CDD288C2-4948-4607-82B2-57C123B592AC.MP4"
        ]
      }
    ]
  },
  "swimming": {
    title: "Swimming",
    subtitle: "The Blue Reset",
    heroImage: "https://images.unsplash.com/photo-1690615961058-1d695ff218bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjBhYnN0cmFjdCUyMG1pbmltYWx8ZW58MXx8fHwxNzc0NDM3OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    story: "Water has always been my great equalizer. When the noise of pixels, deadlines, and notifications gets too loud, the pool is the only place where I am forced to disconnect. Beneath the surface, there are no screens. There is only rhythm, breathing, and the sensation of gliding through resistance. It is active meditation. I love the silence of it, the way the world becomes muffled and soft. It is where I reset my mind before returning to the grid.",
    images: [
      "/assets/swimming/IMG_2223.jpg",
      "/assets/swimming/IMG_2217.jpg"
    ]
  }
};

export function HobbyDetail() {
  const { id } = useParams();
  const hobby = hobbiesData[id as keyof typeof hobbiesData];
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<{ collection: string; file: string } | null>(null);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [slideshowSpeed, setSlideshowSpeed] = useState(3);
  const slideshowIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  if (!hobby) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
          <h1 className="text-4xl font-serif mb-4">Hobby Not Found</h1>
          <Link to="/hobbies" className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 hover:text-accent hover:border-accent transition-colors uppercase text-sm tracking-wider">
            <MoveLeft size={16} /> Back to Hobbies
          </Link>
        </div>
      </PageTransition>
    );
  }

  // Helper functions for photography lightbox
  const getMediaFiles = () => {
    if (!selectedMedia) return [];
    return hobby.collections?.find((c) => c.id === selectedMedia.collection)?.files || [];
  };

  const getCurrentMediaIndex = () => {
    const files = getMediaFiles();
    return files.findIndex((f) => f === selectedMedia?.file) ?? -1;
  };

  const goToPreviousMedia = () => {
    const files = getMediaFiles();
    const currentIndex = getCurrentMediaIndex();
    if (currentIndex > 0 && selectedMedia) {
      setSelectedMedia({ ...selectedMedia, file: files[currentIndex - 1] });
    }
  };

  const goToNextMedia = () => {
    const files = getMediaFiles();
    const currentIndex = getCurrentMediaIndex();
    if (currentIndex < files.length - 1 && selectedMedia) {
      setSelectedMedia({ ...selectedMedia, file: files[currentIndex + 1] });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!selectedMedia) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNextMedia();
      } else if (e.key === "ArrowLeft") {
        goToPreviousMedia();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMedia]);

  // Slideshow effect
  useEffect(() => {
    if (!isSlideshow || !selectedMedia) {
      if (slideshowIntervalRef.current) clearInterval(slideshowIntervalRef.current);
      return;
    }

    const isCurrentVideoFile = /\.(mp4|mov|MOV|MP4)$/i.test(selectedMedia.file);

    // For images, use timer
    if (!isCurrentVideoFile) {
      slideshowIntervalRef.current = setInterval(() => {
        const files = getMediaFiles();
        const currentIndex = getCurrentMediaIndex();
        if (currentIndex < files.length - 1) {
          goToNextMedia();
        } else {
          // Loop back to start
          if (selectedMedia && files.length > 0) {
            setSelectedMedia({ ...selectedMedia, file: files[0] });
          }
        }
      }, slideshowSpeed * 1000);
    }

    return () => {
      if (slideshowIntervalRef.current) clearInterval(slideshowIntervalRef.current);
    };
  }, [isSlideshow, slideshowSpeed, selectedMedia?.file]);

  // Handle video ended event in slideshow
  const handleVideoEnded = () => {
    if (isSlideshow) {
      const files = getMediaFiles();
      const currentIndex = getCurrentMediaIndex();
      if (currentIndex < files.length - 1) {
        goToNextMedia();
      } else {
        // Loop back to start
        if (selectedMedia && files.length > 0) {
          setSelectedMedia({ ...selectedMedia, file: files[0] });
        }
      }
    }
  };

  return (
    <PageTransition>
      <div ref={containerRef} className="relative w-full bg-background min-h-screen pb-32">
        
        {/* HERO SECTION */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-end px-6 md:px-12 pb-12 overflow-hidden border-b border-border">
          <motion.div style={{ y: yParallax }} className="absolute inset-0 z-0 opacity-40 grayscale">
             <ImageWithFallback src={hobby.heroImage} alt={hobby.title} className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-background/50" />
          </motion.div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-end gap-6 pt-32">
             <Link to="/hobbies" className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 w-max hover:text-accent hover:border-accent transition-colors uppercase text-xs tracking-widest text-muted-foreground">
               <MoveLeft size={14} /> Back to Hobbies
             </Link>
             <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="text-5xl md:text-7xl lg:text-[8rem] font-serif text-foreground leading-[0.9]"
             >
               {hobby.title}
             </motion.h1>
             <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="text-lg md:text-2xl text-muted-foreground uppercase tracking-widest"
             >
               {hobby.subtitle}
             </motion.p>
          </div>
        </section>

        {/* DYNAMIC CONTENT based on Hobby ID */}
        <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
          
          {id === "reading-writing" && (
            <div className="flex flex-col gap-32">
              {/* Library / Genres */}
              <div>
                <h2 className="text-4xl md:text-6xl font-serif mb-16 flex items-center gap-4">
                  <BookOpen className="text-muted-foreground" size={32} /> The Library
                </h2>
                <div className="flex flex-col gap-32">
                  {hobby.genres?.map((genre, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-12 border-t border-border pt-12 relative">
                      <div className="w-full md:w-1/3 md:sticky md:top-32 h-fit">
                        <h3 className="text-3xl font-serif mb-4">{genre.name}</h3>
                        <p className="text-muted-foreground uppercase tracking-widest text-xs">Genre Collection</p>
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col gap-24">
                        {genre.books.map((book, j) => (
                          <div key={j} className="flex flex-col sm:flex-row gap-8 items-start group">
                            <div className="w-full sm:w-1/3 aspect-[3/4] bg-secondary overflow-hidden shrink-0">
                               <ImageWithFallback src={book.image} alt={book.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            </div>
                            <div className="flex-1">
                               <h4 className="text-2xl font-serif mb-1">{book.title}</h4>
                               <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">By {book.author}</p>
                               <p className="text-lg leading-relaxed text-muted-foreground italic border-l border-border pl-4">"{book.review}"</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Writings */}
              <div className="flex flex-col md:flex-row gap-12 border-t border-border pt-24 relative">
                <div className="w-full md:w-1/3 md:sticky md:top-32 h-fit">
                  <h2 className="text-4xl md:text-5xl font-serif mb-4">Selected Writings</h2>
                  <p className="text-muted-foreground uppercase tracking-widest text-xs">Poetry & Short Stories</p>
                </div>
                <div className="w-full md:w-2/3 flex flex-col gap-16">
                  {hobby.writings?.map((writing, i) => (
                    <div key={i} className="bg-secondary/30 p-8 md:p-12 border border-border">
                       <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{writing.type}</p>
                       <h4 className="text-3xl font-serif mb-8">{writing.title}</h4>
                       <p className="font-serif text-lg leading-loose whitespace-pre-wrap">{writing.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {id === "painting-drawing" && (
            <div className="flex flex-col md:flex-row gap-12 relative">
               {/* Left Sticky Column */}
               <div className="w-full md:w-1/3 md:sticky md:top-32 h-fit">
                 <h2 className="text-4xl md:text-5xl font-serif mb-4">The Canvas</h2>
                 <p className="text-muted-foreground leading-relaxed">
                   Every piece here is a translation of thoughts that couldn't quite make it into words. Some are loud, others are quiet. All of them are honest.
                 </p>
               </div>
               
               {/* Right Scrolling Column */}
               <div className="w-full md:w-2/3 flex flex-col gap-32">
                 {hobby.artworks?.map((art, i) => (
                    <div key={i} className="flex flex-col gap-8 group">
                      <div className="w-full bg-secondary overflow-hidden relative">
                         <ImageWithFallback src={art.image} alt={art.title} className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105" />
                         
                         {/* Mail Icon Overlay */}
                         {art.forSale && (
                           <div className="absolute bottom-6 right-6 z-20">
                             <a href={`mailto:hello@example.com?subject=Inquiry about ${art.title}`} className="group/mail relative flex items-center justify-center w-12 h-12 bg-background border border-border rounded-full hover:bg-foreground hover:text-background transition-colors shadow-lg">
                               <Mail size={20} />
                               <span className="absolute bottom-full right-0 mb-4 px-3 py-1 bg-foreground text-background text-xs uppercase tracking-wider rounded opacity-0 group-hover/mail:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                 Request to buy
                               </span>
                             </a>
                           </div>
                         )}
                      </div>
                      <div className="w-full">
                         <h3 className="text-3xl md:text-4xl font-serif mb-4">{art.title}</h3>
                         <p className="text-lg leading-relaxed text-muted-foreground">{art.story}</p>
                      </div>
                    </div>
                 ))}
               </div>
            </div>
          )}

          {id === "photography" && (
            <div className="flex flex-col gap-32">
              {!selectedCollection ? (
                // Collection Cards View
                <div>
                  <h2 className="text-4xl md:text-6xl font-serif mb-16">Collections</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {hobby.collections?.map((collection) => (
                      <motion.button
                        key={collection.id}
                        onClick={() => setSelectedCollection(collection.id)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-left group cursor-pointer"
                      >
                        <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-secondary">
                          <ImageWithFallback
                            src={collection.thumbnail}
                            alt={collection.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            {/* <ChevronRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={40} /> */}
                          </div>
                        </div>
                        <h3 className="text-3xl font-serif mb-3 group-hover:text-accent transition-colors">
                          {collection.name}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {collection.description}
                        </p>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mt-4">
                          {collection.files.length} files
                        </p>
                      </motion.button>
                    ))}
                  </div>
                </div>
              ) : (
                // Selected Collection View
                <div>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setSelectedCollection(null)}
                    className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 mb-12 hover:text-accent hover:border-accent transition-colors uppercase text-sm tracking-wider"
                  >
                    <MoveLeft size={16} /> Back to Collections
                  </motion.button>

                  {hobby.collections
                    ?.find((c) => c.id === selectedCollection)
                    && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h2 className="text-4xl md:text-6xl font-serif mb-4">
                          {
                            hobby.collections?.find((c) => c.id === selectedCollection)
                              ?.name
                          }
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-16">
                          {
                            hobby.collections?.find((c) => c.id === selectedCollection)
                              ?.description
                          }
                        </p>

                        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                          {hobby.collections
                            ?.find((c) => c.id === selectedCollection)
                            ?.files.map((file, idx) => {
                              const collectionName =
                                selectedCollection === "nepal-24"
                                  ? "Nepal'24"
                                  : "Kerala'26";
                              const filePath = `/assets/photography/${collectionName}/${file}`;
                              const isVideo = /\.(mp4|mov|MOV|MP4)$/i.test(file);

                              return (
                                <motion.button
                                  key={idx}
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.3 }}
                                  onClick={() => setSelectedMedia({ collection: selectedCollection || '', file })}
                                  className="break-inside-avoid mb-6 overflow-hidden bg-secondary group cursor-pointer text-left w-full"
                                >
                                  {isVideo ? (
                                    <video
                                      src={filePath}
                                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                                      preload="metadata"
                                    />
                                  ) : (
                                    <ImageWithFallback
                                      src={filePath}
                                      alt={`${collectionName} ${file}`}
                                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                    />
                                  )}
                                </motion.button>
                              );
                            })}
                        </div>
                      </motion.div>
                    )}
                </div>
              )}
            </div>
          )}

          {/* Lightbox Modal for Photography */}
          {id === "photography" && selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background z-50 flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedMedia(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex flex-col items-center justify-start md:justify-center max-w-4xl max-h-[95vh] relative pt-16 md:pt-0"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button - Top Right */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  onClick={() => setSelectedMedia(null)}
                  className="absolute top-6 md:top-8 right-6 md:right-8 z-50 p-2 rounded-full hover:bg-foreground/10 transition-colors"
                  title="Close (Esc)"
                >
                  <X size={24} className="text-foreground" />
                </motion.button>

                {/* Media Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  className="w-full flex items-center justify-center flex-1 overflow-auto"
                >
                  {(() => {
                    const collectionName =
                      selectedMedia.collection === "nepal-24"
                        ? "Nepal'24"
                        : "Kerala'26";
                    const filePath = `/assets/photography/${collectionName}/${selectedMedia.file}`;
                    const isVideo = /\.(mp4|mov|MOV|MP4)$/i.test(selectedMedia.file);

                    return isVideo ? (
                      <video
                        ref={videoRef}
                        src={filePath}
                        autoPlay={isSlideshow}
                        controls
                        onEnded={handleVideoEnded}
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                      />
                    ) : (
                      <ImageWithFallback
                        src={filePath}
                        alt={selectedMedia.file}
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                      />
                    );
                  })()}
                </motion.div>

                {/* Navigation & Info - Below Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="w-full flex flex-col items-center gap-6 mt-8 md:mt-12 pb-4 md:pb-0"
                >
                  {/* Image Counter */}
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {getCurrentMediaIndex() + 1} / {getMediaFiles().length}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-center items-center gap-6 md:gap-8">
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      onClick={goToPreviousMedia}
                      disabled={getCurrentMediaIndex() === 0}
                      className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 hover:text-accent hover:border-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors uppercase text-sm tracking-wider"
                      title="Previous (← Key)"
                    >
                      <ChevronLeft size={18} /> Previous
                    </motion.button>

                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.35 }}
                      onClick={() => {
                        if (!isSlideshow) {
                          setSlideshowSpeed(5);
                        }
                        setIsSlideshow(!isSlideshow);
                      }}
                      className={`inline-flex items-center gap-2 border-b pb-1 transition-colors uppercase text-sm tracking-wider ${
                        isSlideshow
                          ? "border-accent text-accent"
                          : "border-foreground/30 hover:text-accent hover:border-accent"
                      }`}
                      title={isSlideshow ? "Stop Slideshow" : "Start Slideshow"}
                    >
                      {isSlideshow ? (
                        <>
                          <Pause size={18} /> Pause
                        </>
                      ) : (
                        <>
                          <Play size={18} /> Play
                        </>
                      )}
                    </motion.button>

                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      onClick={goToNextMedia}
                      disabled={getCurrentMediaIndex() === getMediaFiles().length - 1}
                      className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 hover:text-accent hover:border-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors uppercase text-sm tracking-wider"
                      title="Next (→ Key)"
                    >
                      Next <ChevronRight size={18} />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {id === "swimming" && (
            <div className="flex flex-col md:flex-row gap-12 relative">
               {/* Left Sticky Column */}
               <div className="w-full md:w-1/3 md:sticky md:top-32 h-fit">
                 <h2 className="text-4xl md:text-5xl font-serif mb-6">The Blue Reset</h2>
                 <p className="text-lg leading-relaxed italic text-muted-foreground">
                   "{hobby.story}"
                 </p>
               </div>
               
               {/* Right Scrolling Column */}
               <div className="w-full md:w-2/3 flex flex-col gap-24">
                   {hobby.images?.map((image, i) => (
                     <div key={i} className="group overflow-hidden">
                        <div className="bg-secondary mb-6 overflow-hidden">
                           <ImageWithFallback src={image} alt={`Swimming ${i + 1}`} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-1000" />
                        </div>
                     </div>
                   ))}
               </div>
            </div>
          )}

        </section>

      </div>
    </PageTransition>
  );
}