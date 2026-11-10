import scotchImage from "../../assets/scotchmaltwhiskey.png";
import aiopsImage from "../../assets/aiops.png";
import atsImage from "../../assets/ats.png";
import stillImage from "../../assets/still.png";
import sivaImage from "../../assets/sivakumarportfolio.png";

export type ProjectSection = {
  title: string;
  body: string[];
};

export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  imageAlt: string;
  tags: string[];
  platform: string;
  scope: string;
  link: string;
  role: string;
  team: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    id: "scotchmaltwhiskey",
    title: "Scotch Malt Whiskey",
    category: "Commerce / Brand",
    summary: "A question from a gift search became my first design: what if a bottle you never planned to drink could find a better home?",
    image: scotchImage,
    imageAlt: "Scotch Malt Whiskey luxury e-commerce experience",
    tags: ["Personal concept", "E-commerce", "First design"],
    platform: "Responsive web concept",
    scope: "Self-initiated UI design",
    link: "https://scotchmaltwhiskey.netlify.app/",
    role: "Self-initiated product and visual design",
    team: "Designed independently",
    sections: [
      {
        title: "Introduction",
        body: ["I was looking for a bottle of whiskey to give my dad when a different question took hold: what happens when someone owns an expensive bottle they don't actually want to drink? Could they sell it, or trade it for something they'd enjoy? That's where this idea began."]
      },
      {
        title: "Problem",
        body: ["The thought stayed with me: a bottle can be valuable and still be the wrong bottle for its owner. I began imagining a place where whiskey could move between people who wanted different things from it."]
      },
      {
        title: "Role and team",
        body: ["This was my first design. I explored it on my own, with no team or formal research. At the time I was more focused on how the website looked than on working through every part of the user experience."]
      },
      {
        title: "Approach",
        body: ["I started with the visual experience and let the product idea grow from there. Later, I added ways to collect, own, and trade bottles, giving the concept more room than a simple shop."]
      },
      {
        title: "Challenges",
        body: ["I was learning design as I went. I knew how I wanted the site to feel before I knew how to answer every practical question about buying, owning, or trading a bottle. Looking back, that gap is part of the story: this began as a visual idea, not a tested marketplace."]
      },
      {
        title: "Solution",
        body: ["The idea became a whiskey space for people to discover bottles, keep a collection, and pass a bottle on through a sale or trade. It was my way of giving that first question a place to live."]
      },
      {
        title: "Design process",
        body: ["I explored the idea by myself and spent most of my attention on the interface: how the pages should feel, and how the concept could be seen as a whole. The collect, own, and trade ideas came later. I didn't interview whiskey drinkers or collectors, so this remains an imagined experience rather than a researched one."]
      },
      {
        title: "Results and learning",
        body: ["I never launched it. It remains a personal concept, and still one of my favorite projects because it holds the moment I first saw an everyday question turn into a design idea. I would return to it now with more attention to the people and decisions behind each trade."]
      }
    ]
  },
  {
    id: "aiops",
    title: "VanGuard AIOps",
    category: "Enterprise / FinTech",
    summary: "I learned a new world one conversation at a time, then drew the path from a flood of alerts to an incident someone could act on.",
    image: aiopsImage,
    imageAlt: "VanGuard AIOps incident management interface",
    tags: ["Enterprise product", "Incident response", "End-to-end design"],
    platform: "Enterprise web app",
    scope: "End-to-end workflow and screen design",
    link: "https://vanguard-aiops.netlify.app/",
    role: "Sole designer; designed the full workflow and screens",
    team: "I worked directly with the founder, who taught me the product domain.",
    sections: [
      {
        title: "Introduction",
        body: ["When I was asked to design VanGuard AIOps, I knew very little about the product or the systems behind it. It was my founder's idea, and I had to learn the world of banking operations while helping give that idea a shape."]
      },
      {
        title: "Problem",
        body: ["A bank can run into repeated issues across transactions, databases, UPI, DNS, GCP, and more. Checking each continuing error by hand is a task in itself. The product idea was to use AI to bring related errors together, then resolve what it could or send the incident to someone with the right access."]
      },
      {
        title: "Role and team",
        body: ["I was the only designer and owned the full workflow and every screen. I met with the founder each day to share progress, ask questions, and learn what the product needed to make clear."]
      },
      {
        title: "Approach",
        body: ["I learned by staying close to the person who understood the system. As the founder explained how the product should work, I translated those conversations into a connected flow: from incoming errors, to incidents, to the person who could respond."]
      },
      {
        title: "Challenges",
        body: ["The hardest part for me was understanding incidents and topology. Alerts with shared fields could be grouped into one incident; topology then showed which part of the system was affected. I needed to understand that relationship before I could make it clear on screen."]
      },
      {
        title: "Solution",
        body: ["I designed the end-to-end workflow and the screens around it. Related alerts came together as incidents; topology made the affected area visible; and the response could either be handled automatically when possible or assigned to someone with the right access."]
      },
      {
        title: "Design process",
        body: ["I shared progress with the founder every day. Each conversation added a piece I hadn't known the day before, and each new piece changed how I understood the screens around it. It was less about arriving with answers and more about learning enough to ask the next useful question."]
      },
      {
        title: "Results and learning",
        body: ["Before the product was coded, the wireframes helped the founders show banks what they were building and explain the idea clearly enough to bring clients on board. I learned that design can make an unfamiliar product easier to understand long before it becomes software."]
      }
    ]
  },
  {
    id: "sivakumarportfolio",
    title: "Siva Kumar Portfolio",
    category: "Photography / Portfolio",
    summary: "One firefly film led me into a whole portfolio, designed around the feeling that first made people stop and look.",
    image: sivaImage,
    imageAlt: "Siva Kumar wildlife photography portfolio case study",
    tags: ["Responsive design", "Portfolio", "Accessibility"],
    platform: "Responsive web",
    scope: "Responsive design system",
    link: "https://sivakumar-photographyportfolio.netlify.app/",
    role: "Designed every page of the portfolio",
    team: "I worked with Siva Kumar; he planned to have a developer friend build the site.",
    sections: [
      {
        title: "Introduction",
        body: ["Siva Kumar became known on Instagram for a video of fireflies in the Western Ghats. I found him there and asked if I could design a portfolio for his work. He said yes, and that one video gave me the first image to design around."]
      },
      {
        title: "Problem",
        body: ["I wanted the fireflies to be more than a picture on the home page. They were the way into the whole site, but the rest of Siva's photography and film still needed room to be seen."]
      },
      {
        title: "Role and team",
        body: ["I designed every page. Siva was the person I designed with and for; after seeing the work, he told me he had a friend who could develop it."]
      },
      {
        title: "Approach",
        body: ["I let the firefly film set the direction, then carried that atmosphere through the portfolio rather than treating each page as a separate visual idea."]
      },
      {
        title: "Challenges",
        body: ["The challenge was to let a single, memorable film guide the site without making it stand in for all of Siva's work. I designed the full set of pages so the first impression could lead into the rest of his photography and film."]
      },
      {
        title: "Solution",
        body: ["The result was a complete portfolio design with the firefly film at its heart. When Siva saw it, he liked it straight away and told me he had a friend who would develop it for him."]
      },
      {
        title: "Design process",
        body: ["I began with the firefly video that had brought me to Siva's page. From there, I designed each page of the portfolio around that first impression, with the wider body of his work following it."]
      },
      {
        title: "Results and learning",
        body: ["This was a small collaboration that began with a message on Instagram and ended with a design Siva wanted to take forward. I learned how far one image can carry a visual idea, as long as it opens a door to the rest of the work rather than closing one."]
      }
    ]
  },
  {
    id: "ats",
    title: "ATS for Bootlabs",
    category: "Recruitment / SaaS",
    summary: "I gave recruitment its own home, then added a way for good candidates not to get lost between one opening and the next.",
    image: atsImage,
    imageAlt: "Bootlabs applicant tracking system dashboard",
    tags: ["Product design", "Hiring workflows", "AI Matches"],
    platform: "Web application",
    scope: "Recruitment product design",
    link: "https://ats-bootlabs.netlify.app/",
    role: "Sole designer; led requirements, research, and product design",
    team: "I worked with the client and the HR team who would use the platform.",
    sections: [
      {
        title: "Introduction",
        body: ["Before the ATS, recruitment lived inside a website used for all kinds of internal work. I designed a separate home for hiring: one place for the HR team to move a role and its candidates forward."]
      },
      {
        title: "Problem",
        body: ["The HR team needed a space made for recruitment, not another section tucked into a site built for everything else. And when a new vacancy appeared, useful candidates who had already applied for another role could be easy to overlook."]
      },
      {
        title: "Role and team",
        body: ["I was the only designer at the company, so I carried the work from understanding the requirements and researching the problem through the product design. I worked closely with the people who knew the hiring process from the inside."]
      },
      {
        title: "Approach",
        body: ["I started by learning what the HR team needed from a recruitment-specific tool, then shaped the product around the hiring work rather than the old internal website. I also looked for a way to make earlier applications useful to the next vacancy."]
      },
      {
        title: "Challenges",
        body: ["A recruitment product has to serve people moving through different parts of the same process. The hardest part was giving the HR team a clearer workflow while making sure a new vacancy could bring relevant past applicants back into view."]
      },
      {
        title: "Solution",
        body: ["I designed dedicated spaces for recruiters, candidates, and vendors. I also designed AI Matches: when HR adds a vacancy, it surfaces existing candidates who applied for another role and may suit the new one."]
      },
      {
        title: "Design process",
        body: ["I worked through the requirements, researched the recruitment problem, and designed the product around the people involved in it. The AI Matches idea came from asking what should happen to a strong candidate after the role they first applied for was no longer the right one."]
      },
      {
        title: "Results and learning",
        body: ["The HR team now has a recruitment-focused platform instead of relying on the general internal website, and the process feels smoother than it did before. AI Matches gives earlier applicants another chance to be considered. I learned that a small connection between two parts of a workflow can make good work easier to carry forward."]
      }
    ]
  },
  {
    id: "still",
    title: "Still",
    category: "Mindfulness / Mobile",
    summary: "I wanted a writing app that would let me be quiet. So I began making one that could wait until I was ready.",
    image: stillImage,
    imageAlt: "Still mindful journaling app concept",
    tags: ["Personal concept", "Writing", "Community"],
    platform: "Mobile concept",
    scope: "Formative research and prototype",
    link: "https://still-onlinejournalandblog.netlify.app/",
    role: "Self-initiated research and product design",
    team: "I spoke with a few writer friends about how they write and share.",
    sections: [
      {
        title: "Introduction",
        body: ["I write to calm down. But when I opened other writing apps, they kept asking me to check in, write something, say how I felt. I had picked writing as a hobby for the quiet of it. I couldn't find an app that understood that, so I started Still."]
      },
      {
        title: "Problem",
        body: ["The reminders made writing feel like another thing I was supposed to perform. I wanted to write when I had something to say, not because an app had noticed I was away. And if I did want to share a piece, I wanted that to be my choice too."]
      },
      {
        title: "Role and team",
        body: ["Still began with my own frustration. I spoke with a few writer friends, who told me they sometimes wanted to publish, but only when they felt ready. I carried the concept forward on my own, with their words beside my own experience."]
      },
      {
        title: "Approach",
        body: ["I listened for the part of writing people wanted to keep: the freedom to sit with a thought, and the freedom to share it later. That became the balance at the heart of Still: private writing, with a community you could choose to enter."]
      },
      {
        title: "Challenges",
        body: ["I didn't want the app's voice to make reflection feel like a task. The language in many apps felt formal to me, almost as if I were performing for the interface. Still needed to sound more like a friend, and sharing needed to stay optional."]
      },
      {
        title: "Solution",
        body: ["Still gives writing a quieter place to happen, then leaves a door open to the community. People can read posts others have chosen to publish, and decide for themselves when or whether to add their own."]
      },
      {
        title: "Design process",
        body: ["I began with the feeling I wanted to get away from, then talked with writer friends to see what they wanted from writing and sharing. Their wish to publish on their own time changed the idea: Still could be private without being closed off. I shaped the product's voice to feel like a conversation, not an instruction."]
      },
      {
        title: "Results and learning",
        body: ["Still grew from a small personal frustration into something I wished had existed for me: a place to write without being called back, and a community that waited for you to choose it. I learned that the words around an interface can change whether it feels like a tool keeping score or a place willing to listen."]
      }
    ]
  }
];