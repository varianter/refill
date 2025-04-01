import { Discipline } from "../discipline";
import { SpeakerName } from "../speakers";
import type { Schedule } from "./types";

const { Design, Development, StrategyAndProduct } = Discipline;
const {
  VegardIngebrigtsenFeste,
  MalinCKarlsen,
  ChristianBrevik,
  AnitaSteinstad,
  TomasJanson,
  HildegunnVada,
  OlePetterKlæstad,
  NikolaiNormanAndersen,
  TrulsHenrikJakobsen,
  ThomasLyngtunHansen,
  KristofferNordström,
  RolfAndersStorset,
  EliseKristiansen,
  AndreasHartveit,
  JonasLillevold,
  MariusKrakeli,
  JacobBerglund,
  TonjeEvanger,
  JuliaKuhley,
  YoeriOtten,
  VikasGupta,
  DavidDinka,
  MikaelBrevik,
  DavidDeLeon,
  LizaHanssonAndStinaJanson,
  AndreaHvattum,
  AndersHammervold,
  KirstiStrømstad,
  VeraHayeBjerga,
  NinjaWidenAndChristofferJohannesson,
  SofiaTegelid,
  RudyBortolini,
  JosefEugeniusAndKatarinaReiz,
} = SpeakerName;

export const schedule: Schedule = [
  {
    title: "Reception & opening keynote",
    start: "08:00",
    end: "09:45",
    tracks: [
      [
        {
          type: "common",
          id: "1",
          title: "Coffee & networking",
          location: "Orangeriet",
          from: "08:00",
          to: "09:00",
        },
      ],
      [
        {
          type: "common",
          id: "3",
          title: "Attending with intent",
          location: "Palmsalen",
          from: "09:00",
          to: "09:40",
          speaker: DavidDeLeon,
          talkDescription: [
            "You’ve attended conferences before, but no one gave you an instruction manual. There’s no need for a manual, you might object. You just go, listen, drink coffee and talk to people. I think there is more to it, which is why I will spend this opening Keynote giving advice on attending a conference with intent. I will suggest how to get the most out of the talks to come, how to network meaningfully, and how to apply what you learn. Coincidentally, doing all of this will be practicing many of the same behaviours you would employ to have more impact at work. See how that ties into the theme for the conference? Clever, if I say so myself.",
          ],
          speakerDescription: [
            "David de Léon is a UX designer and researcher with 25 years of academic and industry experience. You can tell by the colour of his hair and beard that he has been doing it for a while. He began his journey with a PhD in cognitive science and has since helped teams, companies, and individuals grow and develop. As a well-renowned public speaker – also known for hosting a conference or two – he regularly gives inspirational talks to large teams in presentation technique, motivation and creativity.",
            "In his spare time he likes to read, self-publish books, and take long naps on the sofa.",
          ],
        },
      ],
    ],
  },
  {
    title: "Break",
    start: "09:40",
    end: "10:00",
    tracks: [
      [
        {
          type: "break",
          id: "4",
          title: "Break",
          from: "09:40",
          to: "10:00",
        },
      ],
    ],
  },
  {
    title: "Block 1",
    start: "10:00",
    end: "10:40",
    tracks: [
      [
        {
          type: "talk",
          id: "5",
          title:
            "Designing with the mind in mind - Creating digital products that align with the human behaviour",
          location: "Aulan",
          from: "10:00",
          to: "10:20",
          discipline: Design,
          speaker: VegardIngebrigtsenFeste,
          talkDescription: [
            "What if I told you that the secret to great digital experiences lies hidden within the brain? In this talk we will explore the intersection of neuroscience and design, and how perception, emotions and trust directly impacts the way we use digital products. Expect a mix of surprisingly interesting trivia, real-world examples, and practical tips to design with the mind in mind!",
            "Warning: This talk might change your perspectives ✨",
          ],
          speakerDescription: [
            "Im a UX designer with an above average interest in human cognition and digital products. ",
          ],
        },
        {
          type: "talk",
          id: "6",
          title: "DevOps for Frontend Engineers",
          location: "Palmsalen",
          from: "10:00",
          to: "10:40",
          discipline: Development,
          speaker: MikaelBrevik,
          talkDescription: [
            "Traditionally, DevOps has focused on infrastructure and backend processes, but there is no reason as to why it should stop there. DevOps principles is just as applicable to the client-side! In this talk, we’ll explore how practices like continuous integration, delivery, and monitoring can be extended to frontend applications.",
            " We’ll discuss automated e2e testing that _actually_ works, performance monitoring, and client observability tools that ensure a great user experiences. You will gain insights into building resilient, scalable, and maintainable client-side systems with a DevOps mindset, bridging the gap between frontend and operations once and for all.",
          ],
          speakerDescription: [
            "Mikael is a programming enthusiast with long experience in multiple disciplines within development. He's motivated by making teams work, delivering the proper type of quality and value. He hosts podcasts, writes blogposts and does presentations.",
          ],
        },
        {
          type: "talk",
          id: "7",
          title:
            "How building future scenarios shaped the product strategy of Feide",
          location: "No. 314",
          from: "10:00",
          to: "10:20",
          discipline: StrategyAndProduct,
          speaker: [TonjeEvanger, HildegunnVada],
          talkDescription: [
            "We demonstrate how scenario-based thinking became the foundation for developing a future-proof product strategy for Feide. The session provides insight into the method we used, the three scenarios we developed, and how these were used to engage employees and external stakeholders in the sector throughout the process, by having them outline future ways of working and the position they believe Feide should take moving forward.",
          ],
        },
        {
          type: "talk",
          id: "8",
          title: "The designers Anti to-do list",
          location: "Aulan",
          from: "10:20",
          to: "10:40",
          discipline: Design,
          speaker: OlePetterKlæstad,
          talkDescription: [
            "We´ve been there – You have an overwhelming bunch of tasks to get done, so you make a to-do list to focus. The most efficient way of crossing off items on that to-do list is to either eliminate unimportant tasks or delegate them to others that are better equipped to solve them. AI is going to be that someone for a lot of task. This talk will explore which tasks will best off delegated to AI on a reoccurring basis, to offload them onto your (A)nt(I) to-do list.",
            {
              bulletpointsDescription: "This talk will touch upon:",
              BulletpointsList: [
                "Automate tasks",
                "Speed up your own delivery",
                "Add new skills and do more",
                "Multiply your impact",
                "Synthetic users",
                'How AI expands the role description of a "designer"',
                "Rid product managers of their tasks",
              ],
            },
          ],
          speakerDescription: [
            "Ole Petter, Designer at Variant and part-time entrepreneur of Muttu. Eager for all things design and innovation, with a nack for the product development process.",
          ],
        },
        {
          type: "talk",
          id: "10",
          title: "The Design Systems Graveyard",
          location: "No. 314",
          from: "10:20",
          to: "10:40",
          discipline: StrategyAndProduct,
          speaker: KristofferNordström,
          talkDescription: [
            "Building a Design System is easy, maintaining and making it grow organically is much more difficult. This requires planning and collaboration, or does it? Can't we just cut out the collaboration part and make things more efficient? What does all this have in common with The Gentle Art of Swedish Death Cleaning? Join me on a story about planning, categorising and sorting and about handling human beings and their peculiarities. Maybe your Design System will end up on The Design Systems Graveyard.",
          ],
          speakerDescription: [
            'Kristoffer has a big heart ❤️ for humanity & inclusion. Previous Head of Front End at the Norwegian Red Cross and currently working as a consultant at Variant building education systems of the future for Sikt. He has been working with web GUIs since the 1990s GeoCities era, a "Nordic citizen" from Sweden 🇸🇪 with roots on the Åland Islands 🇦🇽 and in Finland 🇫🇮 living in Oslo Norway 🇳🇴.',
          ],
        },
      ],
    ],
  },
  {
    title: "Short technical break",
    start: "10:40",
    end: "10:50",
    tracks: [
      [
        {
          type: "break",
          id: "11",
          title: "Short technical break",
          from: "10:40",
          to: "10:50",
        },
      ],
    ],
  },
  {
    title: "Block 2",
    start: "10:50",
    end: "11:30",
    tracks: [
      [
        {
          type: "talk",
          id: "12",
          title: "Design meets Sustainable Business – an experiment",
          location: "Aulan",
          from: "10:50",
          to: "11:10",
          discipline: Design,
          speaker: AnitaSteinstad,
          talkDescription: [
            "For years, economists and strategists have borrowed from design to solve complex challenges. But what if we flipped the script? What if designers took the lead—shaping sustainable culture not through economic theory, but through design principles?",
            "I believe sustainability should be at the heart of every organization. For People, Planet, and Profit to thrive, we need a new way of thinking. In this talk, I’ll introduce a practical framework—one that I invite you and your business to test, adapt, and bring to life.",
            "This isn’t just about my experience at the intersection of design and sustainability. It’s a call to action. Designers have the creativity and problem-solving skills to drive real change. Now is the time to step up, expand our influence, and take on the role of sustainability facilitators in a world that urgently needs bold ideas and fresh perspectives.",
          ],
          speakerDescription: [
            "I’m a designer driven by curiosity, working at the intersection of strategy, culture, sustainability, future studies, and technology. My passion lies in uncovering, navigating, and solving real challenges within organizations to create meaningful impact.",
            "As a facilitator, I combine tools from future studies, design thinking, agile coaching, and sustainable business strategy to drive change that benefits both people and the planet.",
            "Over the past 23 years, I’ve honed expertise in strategic innovation, service design, branding, and future thinking—both as a consultant and within organizations. This journey has given me a deep understanding of the complex challenges organizations face today. What fuels me most is uncovering human needs, concerns, and aspirations to help tackle pressing societal issues and inspire transformative solutions.",
          ],
        },
        {
          type: "talk",
          id: "13",
          title:
            "What we learned rebuilding the largest Nordic electronic retail website in Next.js?",
          location: "Palmsalen",
          from: "10:50",
          to: "11:30",
          discipline: Development,
          speaker: TomasJanson,
          talkDescription: [
            "Web performance is very important for most websites, and it is crucial if you are the largest electronic retailer in the Nordics. As many of you already know, the performance of the Elkøp/Elgiganten/Gigantti site has not been good enough, and that is something Tomas set out to fix. Although the website was fairly new, it failed to meet expectations, leading to a decision to rewrite the frontend using Next.js and host it on Vercel.",
            "By the time of Refill, we should be able to see the results of the rewrite, and Tomas will share some of the learnings made along the way. Why was Next.js picked? How does the new app router work in a larger project? What is it like to work with Vercel? How do you pitch ideas like this in larger organizations?",
          ],
          speakerDescription: [
            "Tomas Jansson is developer who likes everything from programming languages to infrastructure. He has been a central figure in the Oslo .NET scene before having too many kids. After 10+ years as a consultant in Norway and Sweden, and 4 years in a startup in Oslo and New York he is now spending all his working hours at Elkjøp Nordic to build a more robust and scalable commerce platform.",
          ],
        },
        {
          type: "talk",
          id: "14",
          title: "Questions, Creativity, and Choices!",
          location: "No. 314",
          from: "10:50",
          to: "11:30",
          discipline: StrategyAndProduct,
          speaker: KirstiStrømstad,
          talkDescription: [
            "How Strategy Helps Us Navigate Change and Create Impact Through the Choices We Make.",
            "Strategy isn’t just for executives — it’s for anyone who wants to make a difference.",
            "In this talk, we'll highlight questions to uncover opportunities, spark creative ideas and navigate with a focus on value rather than just deliverables.",
            "Whether you're a designer, developer, or product manager, you have the power to drive change — starting with the choices you make.",
          ],
        },
        {
          type: "talk",
          id: "17",
          title: "When I Grow Up, I'm Gonna Be a Flying Machine!",
          location: "Aulan",
          from: "11:10",
          to: "11:30",
          discipline: Design,
          speaker: NinjaWidenAndChristofferJohannesson,
          talkDescription: [
            "Meet Elsa, a not-so-ordinary intern at the Swedish Air Force Museum in Linköping. In fact, she’s a robot with a mind of her own. Built from spare parts, with a brand-new screen and an unexpected spark of independence, Elsa is figuring out who she is and what she wants to become.",
            "But why does a robot need a backstory? How does a compelling narrative bring algorithms, technical functions, and artificial responses to life? And why is this especially important for children aged 7 to 12 — a time when imagination runs wild and the foundation for understanding the world is being built?",
          ],
          speakerDescription: [
            "Elsa will take us through her origins, her role at the museum, and what it means to be part of the Flygvapenmuseum family. She’ll be joined by Christoffer Johannesson, CEO of Dyno Robotics, and Nina Widén, Art Director and Copywriter at Variant, to explore how stories help us connect with technology — and with each other.",
          ],
        },
      ],
    ],
  },
  {
    title: "Lunch",
    start: "11:30",
    end: "12:30",
    tracks: [
      [
        {
          type: "break",
          id: "18",
          title: "Lunch break",
          from: "11:30",
          to: "12:30",
        },
      ],
    ],
  },
  {
    title: "Block 3",
    start: "12:30",
    end: "13:10",
    tracks: [
      [
        {
          type: "talk",
          id: "19",
          title:
            "Ten Reasons Your Application Isn't Accessible and What You Can Do About It",
          location: "Aulan",
          from: "12:30",
          to: "12:50",
          discipline: Development,
          speaker: EliseKristiansen,
          talkDescription: [
            "The WCAG standard has been in place for over 20 years, and starting in June 2025, it will become a legal requirement in the EU to build websites that comply with universal design standards.",
            " Despite this, new websites and apps that fail to meet these requirements continue to appear, unintentionally excluding people from participating fully in the digital society.",
            " In this talk, you’ll gain insight into ten common reasons why web apps fail to be accessible and learn actionable strategies to overcome these challenges.",
            " Whether you're a developer, designer, or decision-maker, this session will give you with the tools needed to create inclusive digital experiences that work for everyone.",
          ],
          speakerDescription: [
            "Elise is a senior frontend developer and has been involved in a diverse range of projects for seven years. As a consultant, she has worked in and out of various teams, experiencing a wide range of team compositions.",
          ],
        },
        {
          type: "talk",
          id: "30",
          title: "Design for Data Quality",
          location: "Palmsalen",
          from: "12:30",
          to: "13:10",
          discipline: Design,
          speaker: RolfAndersStorset,
          talkDescription: [
            "Data Quality. A term that sounds important, but what does it really mean? And why should designers care? In a world where artificial intelligence relies on high-quality data to deliver results, data quality has become more critical than ever. Yet, it often remains a vague concept that few truly understand.",
            "In this talk, we’ll break down the concept of data quality and demonstrate how designers play a key role in ensuring that data is not only collected correctly but is also of high quality. Through concrete examples and practical principles, you’ll learn how design can bridge the gap between usability and data quality – and how this can be the difference between mediocre and outstanding solutions in the world of AI.",
            "Join us and discover how we can shape tomorrow’s data together – one design decision at a time!",
          ],
          speakerDescription: [
            "Rolf Anders Storset is the Chief Design Officer (CDO) at Variant Trondheim, a consultancy recognized for its open and collaborative approach to digital service development.   With over 18 years of experience as a designer, both in-house and as a consultant, he has a broad range of design expertise. In the past three years, Rolf Anders has focused on projects involving organizational transformation and enabling data-sharing capabilities within Norway’s health and education sectors.",
          ],
        },
        {
          type: "talk",
          id: "21",
          title:
            "Digital Drivkraft: Driving Transformation in Technology, Processes, and Governance for the National Road Database",
          location: "No. 314",
          from: "12:30",
          to: "12:50",
          discipline: StrategyAndProduct,
          speaker: [AndersHammervold, MalinCKarlsen],
          talkDescription: [
            "This session provides the outlines on how we, in collaboration with the Norwegian Public Roads Administration (Statens vegvesen), established a transformative program addressing both technology and processes for the National Road Database (Nasjonal vegdatabank).",
            {
              bulletpointsDescription:
                "We will explore key questions that shaped the program:",
              BulletpointsList: [
                "How did we align the program's establishment with the agency’s governance structures?",
                "What were the critical success factors driving the program forward?",
                "What lessons have we learned, and what could have been done differently?",
                "Where does the program stand today, and what lies ahead?",
              ],
            },
            "By sharing insights from this journey, we aim to highlight practical strategies, challenges, and outcomes relevant to large-scale transformation programs in the public sector.",
          ],
          speakerDescription: [
            "Anders is Chief Commercial officer in Variant, Key Account manager for Statens vegvesen and has also worked in different projects in Statens vegvesen as project manager.",
            "Malin is a project manager in Variant Trondheim, and has been working in projects for Statens vegvesen for 4 years out of the last 5. ",
          ],
        },
        {
          type: "talk",
          id: "22",
          title: "Why does Fetch make you wait twice?",
          location: "Aulan",
          from: "12:50",
          to: "13:00",
          discipline: Development,
          speaker: TrulsHenrikJakobsen,
          talkDescription: [
            "Anyone who's worked with the Fetch API in JavaScript has probably wondered why you have to await twice — first for the response and then for the body. If you're anything like me, you probably just accepted this as how the API works and moved on with your work. But now I've gone back and done a deep dive into Fetch so you don't have to!",
            " We'll take a look at how data is transmitted over the Internet and have a closer look at Streams in Javascript. Expect to gain a better understanding of their funky features and how you can use them to your advantage. At the very least, you'll leave with the satisfaction of actually understanding why you need to wait twice when using Fetch.",
          ],
          speakerDescription: [
            "I work as a consultant and developer for Variant in Bergen. I've been interested computers for as long as I can remember and have always had a knack for reading manuals (very handy!). I like making silly programs in functional languages and teaching things. One of my favorite things is seeing other people experience the a-ha moment of suddenly getting a concept and then being flooded with inspiration and making new brain connections. Please come talk to me if you find me, my talk, or yourself interesting!",
          ],
        },

        {
          type: "talk",
          id: "35",
          title: "Customer journeys as a strategic tool",
          location: "No. 314",
          from: "12:50",
          to: "13:10",
          discipline: StrategyAndProduct,
          speaker: LizaHanssonAndStinaJanson,
          talkDescription: [
            "How can we ensure that an entire organization focuses on what truly matters—for both the customer and the business? How do we align teams around shared goals, foster a common understanding of priorities, and bridge the gap between strategic vision and day-to-day work?",
            "In this session, we’ll explore how to maximize the impact of customer journey maps as a strategic tool. We’ll share how we combined business data, customer insights, and behavioral analytics within a structured framework—ensuring clear ownership and alignment with the organization’s top OKRs. No matter the role you’re in, you’ll learn how to turn customer journey maps into practical tools that drive real business results.",
          ],
          speakerDescription: [
            "Stina Janson",
            "Design Director, Länsförsäkringar",
            "Experienced leader and designer based in Stockholm, with +20 years of experience working with user-centered and innovative products. She has a strong passion for leadership, design, business, innovation, and emerging technology. Stina works strategically and operationally to create value for users and business, and to ensure that design has a seat at the top table to influence product directions.",
            "Liza Hansson",
            "Strategic Designer, Variant",
            "As a consultant at Variant, Liza has taken on various roles to ensure that design delivers maximum impact and creates the greatest possible value for users. She focuses on creating great products that users love, always taking a holistic approach to ensure alignment between user needs, feasibility, business goals, and execution.",
          ],
        },
        {
          type: "talk",
          id: "25",
          title:
            "The Junior Revolution: Cultivating Tomorrow’s Senior Consultants Today",
          location: "Aulan",
          from: "13:00",
          to: "13:10",
          discipline: Development,
          speaker: ThomasLyngtunHansen,
          talkDescription: [
            "In an industry obsessed with seniority, we’re overlooking the essential groundwork needed to produce it. This lightning talk challenges the conventional wisdom of hiring only seasoned consultants by spotlighting the invaluable benefits of bringing junior developers and designers into your team.",
            " We’ll explore how investing in juniors not only infuses fresh perspectives and energy but is crucial for developing the next generation of senior talent. If no one hires juniors, where will tomorrow’s senior consultants come from? Must consulting companies resort to hiring seniors away from their own customers?",
            " Discover how nurturing junior talent ensures sustainable growth, fosters innovation, and secures a competitive edge for both consulting companies and their clients. It is time to recognise that embracing juniors is not just beneficial—it is imperative for the future of our industry.",
          ],
          speakerDescription: [
            "Thomas has been a professional developer since 1999, when he graduated from Imperial College in London with a master’s degree in Software Engineering. He has worked both in Europe and in the United States as an in-house developer and consultant in industries such as telecommunication, intelligent transportation systems and finance. He is currently CTO in Variant Bergen, contributing to openness, generosity and the joy of learning.",
          ],
        },
      ],
    ],
  },
  {
    title: "Short technical break",
    start: "13:10",
    end: "13:20",
    tracks: [
      [
        {
          type: "break",
          id: "28",
          title: "Short technical break",
          from: "13:10",
          to: "13:20",
        },
      ],
    ],
  },
  {
    title: "Block 4",
    start: "13:20",
    end: "14:00",
    tracks: [
      [
        {
          type: "talk",
          id: "29",
          title: "Test side-effects and behaviour, don't mock them!",
          location: "Aulan",
          from: "13:20",
          to: "14:00",
          discipline: Development,
          speaker: ChristianBrevik,
          talkDescription: [
            "When writing test code, one of the tools many reach for is mocking frameworks. These frameworks allow you to simulate code dependencies, and instruct these fake dependencies to return specific values when called. That lets you quickly test different scenarios, and focus on the specific details of the thing you are testing.",
            " That focus and speed is also the biggest trap of mocking frameworks. You are relying on the fact that the dependencies you are mocking will never change, which makes the test code brittle. And you are in no way guaranteed that you are instructing the mock to mimic the real behaviour of the dependencies. In this talk I will try to persuade you of the strength of letting your fake dependencies have state and side effects, and write test code that focuses on behaviour instead of implementation details.",
          ],
        },
        {
          type: "talk",
          id: "20",
          title: "Help! They Call Me Senior",
          location: "Palmsalen",
          from: "13:20",
          to: "13:30",
          discipline: Design,
          speaker: JuliaKuhley,
          talkDescription: [
            "Have you recently discovered that somewhere in a project document or sales pitch, you've been described as a “senior” — and wondered, hoped, that they mixed you up with someone else? Do you feel like you only just figured out how to “adult” at work, and suddenly you’re expected to lead processes, offer guidance, and mentor others?",
            "Ore are you still in the blissful, short junior phase and already dreading the darkest of days when this exact thing will happen to you?",
            "Let me unveil the „senior secret“ for you, already spoiling that there is no magical skill upgrade and no hidden manual. It’s basically just a slightly more shiny job title (for those who care about such). And ok, maybe a little more responsibility. ",
            "In this talk, we’ll dive into the reality behind the senior title. That it doesn’t mean knowing everything, and everything better than the others. Instead it’s about owning what you DO know, and figuring out the rest as you go. We’ll dig into the shared challenges of impostor syndrome, or late-night worries about leading a meeting or taking charge of a design review – or whatever it is that senior developers do.",
            "In the end, you’ll walk away with a set of practical tips on how to navigate this new role, even if you secretly long to stay forever in the „mid-level“ territory. Most of all, you’ll be released of the pressure of having to have it all figured out at some point, and maybe even find the confidence to lean into your strengths, dare to delegate and get aware – none of us has really figured it all out. ",
          ],
          speakerDescription: [
            "Notoriously scared of responsibility and growing up, Julia is a visual designer with six years of experience and by now forced to face her fears. Why she would be scared of anything no one knows, after having moved on her own to Norway in 2019, navigated three different work places, survived multiple rounds of downsizing (they insist it wasn’t her fault) and tackled a long row of branding, UX, and UI projects. She's trying to make sense of it all and deliver some of the extracted wisdom to fellow designers/consultants/human beings.",
          ],
        },
        {
          type: "talk",
          id: "31",
          title:
            "From Necessity to Opportunity: Universal Design as a Product Strategy",
          location: "No. 314",
          from: "13:20",
          to: "13:30",
          discipline: StrategyAndProduct,
          speaker: MariusKrakeli,
          talkDescription: [
            "What if the key to unlocking your product’s full potential was to embrace inclusivity from the start? In this lightning talk, we’ll flip the script on Universal Design and show how it’s not just a compliance checkbox, but a game changer for product strategy. You will discover how designing for accessibility can open up new markets, contribute to increased innovation and foster deeper customer loyalty.",
            "In just 10 minutes, you’ll walk away with fresh insights and practical tips on how to turn Universal Design into a competitive advantage. Let’s turn necessity into opportunity, and create products that everyone can enjoy.",
          ],
          speakerDescription: [
            "Marius is an ex programmer now turned product manager with a fondness for fantastic product experiences. Although spending most of his time thinking about product development, he also maintains his programming skills by being both producer and panelist on the JavaScript podcast “BartJS Podcast”. When he’s not working as a consultant at Variant, he is very entertained by video games and running.",
          ],
        },
        {
          type: "talk",
          id: "23",
          title: "Dark Patterens and The Pickpockets of the internet",
          location: "Palmsalen",
          from: "13:30",
          to: "13:50",
          discipline: Design,
          speaker: JonasLillevold,
          talkDescription: [
            "When the creators of digital solutions put the users' needs aside in order to maximize their own profit, it happens that the dirty tricks are used. In these waters you have to navigate with a steady hand to end up where you want, with what you want. As a designer, it is useful to know the principles behind dark patterns because it also contributes to an understanding of how safe waters should look like.",
          ],
          speakerDescription: [
            "Jonas is a UX designer at Variant. He has worked with digital channels for almost two decades. In recent years, he has focused on optimizing customer journeys within both online shopping and telecom. In this work, he finds himself at the intersection between the users' and the company's needs. He is an ambassador for a user-centred approach, and believes this is where the gain always lies in the long run.",
          ],
        },
        {
          type: "talk",
          id: "41",
          title: "Stories build products, align teams and drive strategy",
          location: "No. 314",
          from: "13:30",
          to: "13: 50",
          discipline: StrategyAndProduct,
          speaker: AndreaHvattum,
          talkDescription: [
            "Great teams don’t just execute tasks—they own the story behind the work. In high-performing, integrated teams, strategy isn’t handed over—it’s built together. This talk explores how storytelling aligns product, project, and strategy teams to minimize handovers, create shared understanding, and turn ideas into impact.💡 If you want things to work, make sure everyone is part of the same story.",
          ],
          speakerDescription: [
            "Andrea Hvattum is a trusted sparring partner for leaders and teams navigating the intersection of strategy, product and execution. With a background in business development, leadership coaching, and brand positioning, she helps teams move beyond roadmaps and PowerPoints to build products and strategies that truly stick.",
            "Known for her engaging storytelling, sharp insights and ability to make complex ideas actionable, Andrea works with startups, scaleups, and large organizations, challenging leaders and teams to rethink collaboration, minimize handovers and align around impact-driven execution.",
          ],
        },
      ],
    ],
  },
  {
    title: "Break",
    start: "14:00",
    end: "14:30",
    tracks: [
      [
        {
          type: "break",
          id: "32",
          title: "Break",
          from: "14:00",
          to: "14:30",
        },
      ],
    ],
  },
  {
    title: "Block 5",
    start: "14:30",
    end: "15:10",
    tracks: [
      [
        {
          type: "talk",
          id: "33",
          title: "Your key to unlocking the power of UX",
          location: "Palmsalen",
          from: "14:30",
          to: "14:50",
          discipline: Design,
          speaker: SofiaTegelid,
          talkDescription: [
            "Dear designer, have you ever felt like your hands are tied and your knowledge is diminished? Do you feel like you could do more at work with your knowledge and expertise? Imagine transforming UX design beyond interface aesthetics and development feature by feature, into a true game-changer for customer success.",
            "This session will focus on how an organization’s customer focus impacts your role as a UX designer and how you can influence your organization toward a healthy customer focus. Get keys that can be game-changers for your projects and learn the secrets to uncover actionable strategies to amplify the impact of your UX design efforts.",
          ],
          speakerDescription: [
            "Sofia Tegelid has previously worked as a design consultant for 8+ years. With clients ranging from small to big companies and organizations, both in private in public sectors she has developed an understanding of factors that impact the designer’s role. She has been a coach and mentor for UX designers, and teams and successfully worked with UX-maturity development.",
            "She is now the Lead UX & Service designer at Sectra, a leading provider of health systems worldwide. The company is known for its customer obsession which is deeply ingrained in its corporate culture. The company’s focus on customer satisfaction has resulted in Sectra being ranked number one in global customer satisfaction for twelve consecutive years in the US, six years in Canada, and both years in the newly introduced KLAS categories for Northern and Southern Europe.",
          ],
        },
        {
          type: "talk",
          id: "34",
          title:
            "Rethinking Color: A designer-developer's guide to modern color systems",
          location: "Aulan",
          from: "14:30",
          to: "15:10",
          discipline: Development,
          speaker: JacobBerglund,
          talkDescription: [
            "Colors may seem simple, but creating effective color systems is anything but. Join me as I share what I've learned about colors from both design and development perspectives – from understanding color spaces like HSL and OKLCH to building cohesive palettes. This talk is suited for both designers and frontend developers looking to understand how to create and, more importantly, think about colors going into the future.",
            "There will be demos!",
          ],
          speakerDescription: [
            "I've been doing frontend for well over a decade, and I love making shiny and delightful things for the web. Deep into CSS and web components.",
          ],
        },
        {
          type: "talk",
          id: "16",
          title: `Discover your product through the MVP Sheet`,
          location: "No. 314",
          from: "14:30",
          to: "15:10",
          discipline: StrategyAndProduct,
          speaker: AndreasHartveit,
          talkDescription: [
            "Have you ever worked on a Minimum Viable Product (MVP) that keeps growing in scope but never gets released? Does MVP sometimes feel like just another way to accelerate the output of your development team, or is it used simply to define the features of the next release?",
            "As a strong advocate for MVP, I often see the concept misinterpreted. But what do “minimum,” “viable,” and “product” truly mean in the context of digital product development? How can a well-defined MVP help product teams succeed in an increasingly competitive landscape? And how can adopting a product mindset improve the way we scope and validate our solutions?",
            "In this talk, I will introduce the MVP Sheet, a framework to help teams define what the first iteration of a product should include—and what can be addressed later. I will share my perspectives on the methodology, along with real world experiences from building minimum viable products. My goal is to inspire you to take a more outcome-driven and focused approach to product development, ultimately delivering greater value from your products and services.",
            "This talk is designed for professionals involved in digital product development, including developers, designers, and members of cross-functional teams.",
          ],
          speakerDescription: [
            "I am a technology-interested designer with a primary area of expertise in digital product design. As CDO at Variant in Bergen, I help my clients to design products that bring value to their users and their organisation.",
            "In addition to my passion for design, I am also interested in team culture and interdisciplinary collaboration, especially between designers and developers.",
            "Outside work I like to enjoy food and drinks, especially craft beer. I am also a big fantasy nerd and might know as much about fictional worlds as I do the real one. I believe that inspiration can be found in the strangest of places!",
          ],
        },
        {
          type: "talk",
          id: "15",
          title: "Exploring the 7 Powers in Product Design",
          location: "Palmsalen",
          from: "14:50",
          to: "15:10",
          discipline: Design,
          speaker: VikasGupta,
          talkDescription: [
            "The “7 Powers” framework from The Foundation of Business Strategy by Hamilton Helmer provides a unique lens for creating long-term competitive advantage. While widely used in business strategy, its potential in product design remains underexplored.",
            "This talk examines how the 7 Powers—Scale Economies, Network Economies, Counter-Positioning, Switching Costs, Branding, Cornered Resources, and Process Power—can guide early-stage design decisions. By aligning business strategy with design thinking, teams can prioritize opportunities, optimize resources, and deliver impactful user experiences.",
            "Through practical examples, attendees will learn how to apply this framework to evaluate ideas for their strategic defensibility and enhance collaboration between design and strategy. Whether you’re a designer or strategist, this session offers a fresh perspective on integrating competitive advantage into your design process.",
          ],
          speakerDescription: [
            "Vikas Gupta is a strategic and service designer at Variant Trondheim AS, a consultancy offering design, technology and business services",
            "He has a Master of Technology in Computer Science with specialization in Interaction Design. Vikas has worked in both tech-startups and large corporates as designer, and has broad experience of working closely with technologists, users and stakeholders. He loves to think big and to work in teams to discover creative solutions to complex problems.",
          ],
        },
      ],
    ],
  },
  {
    title: "Short technical break",
    start: "15:10",
    end: "15:20",
    tracks: [
      [
        {
          type: "break",
          id: "36",
          title: "Short technical break",
          from: "15:10",
          to: "15:20",
        },
      ],
    ],
  },
  {
    title: "Block 6",
    start: "15:20",
    end: "16:00",
    tracks: [
      [
        {
          type: "talk",
          id: "37",
          title:
            "What happens when news media explore the next level of user engagement with the help of AI?",
          location: "Palmsalen",
          from: "15:20",
          to: "15:40",
          discipline: Design,
          speaker: JosefEugeniusAndKatarinaReiz,
          talkDescription: [
            "Using news media as an independent source of knowledge and combining it with large language models enables a new way to keep up in a rapidly changing world. The question is what is a good user experience for a chatbot in a news context?",
            "Bonnier News is experimenting with AI to find the next level of engagement with users - on the users' terms.",
          ],
          speakerDescription: [
            "Josef Eugenius, UX Designer",
            "Josef is a UX designer passionate about the interaction between humans and technology, with a love for seamless user journeys.",
            "Katarina Reiz, UX Designer",
            "Katarina is a hands-on UX designer who focuses mainly on research and is currently working on developing the Bonnier News AI platform.",
          ],
        },
        {
          type: "talk",
          id: "38",
          title: "Why you should put secrets in git",
          location: "Aulan",
          from: "15:20",
          to: "15:40",
          discipline: Development,
          speaker: NikolaiNormanAndersen,
          talkDescription: [
            "Encrypted secrets that is! I'll demonstrate tools and techniques that will enable you to version control your secrets alongside the code it belongs to. Easily share secrets with new team members and get a full audit log as a bonus. And it's all according to modern security practices.",
            " I will introduce you to SOPS and how you can use keys stored in secure remote services like Azure Key Vault or HashiCorp Vault. Access is easily controlled through the same identity you use for other services. I'll also show some gotchas to be aware of, but let's not be afraid of putting our secrets in git!",
          ],
          speakerDescription: [
            "Nikolai specializes in how processes and technology work together to enable continuous delivery of solutions. He is always searching for ways to deliver fast without compromising quality. He loves problems related to distributed systems, automation and infrastructure, but shines when focusing on developer experience and deployment pipelines.",
          ],
        },
        {
          type: "talk",
          id: "39",
          title: "Strategy for a digitalised world",
          location: "No. 314",
          from: "15:20",
          to: "16:00",
          discipline: StrategyAndProduct,
          speaker: DavidDinka,
          talkDescription: [
            "In a fast moving world, where digitalisation is the enabler for change, an agile approach to innovation, organisational change and sustainable businesses is needed. By combing ideas from business development with design thinking we have the toolkit for a collaborative journey where Variant facilitate and our customers own the result. Together we create shared knowledge and the result have a focus on actions, not slides. This is not a talk about Digital Strategy, a talk about Strategy for a digitalised world.",
          ],
          speakerDescription: [
            "David is a strategically driven leader with a robust background in user research and strategy from both academia and industry. David started the User Research Lab at Skype and was also part of the corporate strategy team at Svenska Spel. For the last 10 years he has been on the consultancy side, with several strategy projects as well as leadership positions. Previously Head of inUse, a design consultancy agency and now he is the CEO of Variant Sverige AB. Variant Sverige is a consultancy agency that is transparent, value-driven, and built by and for people.",
            "Our mission is to foster trust, transparency, and equality within European companies. Founded in Trondheim in 2018, Variant has expanded to Sweden with offices in Stockholm, Gothenburg, and Linköping. The company is committed to creating a positive digital impact through collaboration and a shared passion for learning.",
          ],
        },
        {
          type: "talk",
          id: "9",
          title:
            "Support 300+   Mergers into 1 Company: UX as the Glue in Global Transformation",
          location: "Palmsalen",
          from: "15:40",
          to: "16:00",
          discipline: Design,
          speaker: RudyBortolini,
          talkDescription: [
            "Challenge: Managing UX at scale across multiple acquired companies and brands is unrealistic. Each acquisition brings its own identity, UX approach, and user needs. Instead of enforcing uniformity, UX must focus on solving brand- and vertical-specific challenges to ensure meaningful impact.",
            "To address this, we established global UX focus areas for consistency with local flexibility, mapped customer journeys to identify key pain points, and implemented a gold/silver/bronze adoption framework to scale UX effectively across brands.",
            "Rather than enforcing uniform UX, we focus on targeted interventions that balance structure and adaptability to drive real business impact.",
          ],
          speakerDescription: [
            "Rudy Bortolini is the Head of Global UX at ASSA ABLOY, leading a team that drives UX strategy, design systems, and research across global digital products. With a strong background in user experience, digital accessibility, and design leadership, he focuses on enhancing efficiency, consistency, and innovation in digital design.",
            "Rudy collaborates closely with branding, IT, and product teams to bridge UX with business impact, ensuring seamless and scalable design solutions.",
          ],
        },

        {
          type: "talk",
          id: "40",
          title: "Let's ditch Javascript, and start using WebAssembly",
          location: "Aulan",
          from: "15:40",
          to: "16:00",
          discipline: Development,
          speaker: YoeriOtten,
          talkDescription: [
            "Since 1995 developers have tried to fix Javascript, by creating new languages like Coffeescript, creating superscripts like Typescript and finally trying to actually improve the language itself.",
            " But alas WebAssembly (wasm) came along, freeing us from Javascript and allowing us to do something different on the web: compile almost any programming language to something our browser understands, with safety guarantees built in.",
            " Over the past few years a whole new ecosystem has started to take shape, from tooling glueing everything together, to completely new frameworks trying to replace React.",
            " Through the eyes of three different engineers we will take a look at what WebAssembly has to offer:",
            "The innovator: who manages to solve a completely new set of problems on the web.  The revolutionary: who throws away there codebase and starts fresh, building there website with not a single line of Javascript.The madman: who tries to take things too far, and doesn’t know where to stop.",
          ],
          speakerDescription: [
            "Yoeri is a young developer at Variant Bergen. From the young age of 11, he has dived into the world of (web) development, finally making it into his study and career. Now 15 years later (and a few dozen frontend frameworks later), he is just as interested as ever in discovering new technologies and creating efficient applications.",
          ],
        },
      ],
    ],
  },
  {
    title: "Break",
    start: "16:00",
    end: "16:30",
    tracks: [
      [
        {
          type: "break",
          id: "43",
          title: "Break",
          from: "16:00",
          to: "16:30",
        },
      ],
    ],
  },
  {
    title: "Networking & closing",
    start: "16:30",
    end: "17:00",
    tracks: [
      [
        {
          type: "common",
          id: "44",
          title: "15-min wrapup",
          location: "Palmsalen",
          from: "16:30",
          to: "16:45",
          speaker: DavidDeLeon,
        },
      ],
      [
        {
          type: "common",
          id: "45",
          title: "The Big Tech Quiz Of The Year",
          location: "Palmsalen",
          from: "16:45",
          to: "17:30",
          speaker: MariusKrakeli,
          talkDescription: [
            "We all say tech moves so fast. So is it impossible to stay updated with all the moving technology? I guess we'll find out in The Big Tech Quiz Of The Year! A quiz with contestants trying to compete for an amazing price.",
          ],
          speakerDescription: [
            "Marius is an ex programmer now turned product manager with a fondness for fantastic product experiences. Although spending most of his time thinking about product development, he also maintains his programming skills by being both producer and panelist on the JavaScript podcast “BartJS Podcast”. When he’s not working as a consultant at Variant, he is very entertained by video games and running.",
          ],
        },
      ],
      [
        {
          type: "common",
          id: "46",
          title: "After-party 🥳",
          location: "Orangeriet",
          from: "17:30",
          to: "",
        },
      ],
    ],
  },
];
