import { ReactNode } from "react";
import {
  LiaCalendarAltSolid,
  LiaGithub,
  LiaHeartSolid,
  LiaLinkedin,
  LiaMinusSolid,
  LiaPhoneSolid,
  LiaStackOverflow,
} from "react-icons/lia";
import { LiaMapMarkerAltSolid } from "react-icons/lia";

export default function Page() {
  return (
    <article dir="ltr" className="prose prose-xl dark:prose-invert min-w-full">
      <h1>
        Hi, I{"'"}m Sina Sadrzadeh, I{"'"}m a full time Frontend Engineer.
      </h1>
      <h3>
        I love working in a team. I strongly believe that {"'"}two heads are
        better than one.{"'"} I enjoy engaging in technical conversations and am
        passionate about teaching people how to create quality software.
      </h3>
      <h5>
        Senior Front-End Developer with over 10 years of proven leadership and
        meaningful contributions to teams of varying size and scope. With a
        results-driven mentality, I have transformed teams by seeking, learning,
        and teaching new, efficient technologies, consistently achieving
        aggressive deadlines. I am passionate about going the extra mile to
        ensure the customer is unquestionably satisfied with the product or
        service provided. Emphasizing scalable and well-documented code, I look
        forward to working collaboratively.
      </h5>

      <h3>Contact Me</h3>
      <ul className="not-prose list-none ml-0 pl-0">
        <li>
          <LiaPhoneSolid className="inline-block -mt-1 mr-2 text-lg" />
          <a href="#" className="no-underline hover:underline">
            +989133235460
          </a>
        </li>
        <li>
          <LiaLinkedin className="inline-block -mt-1 mr-2 text-lg" />
          <a
            href="https://www.linkedin.com/in/sadrzadehsina/"
            target="_blank"
            className="no-underline hover:underline"
          >
            linkedin/sadrzadehsina
          </a>
        </li>
        <li>
          <LiaGithub className="inline-block -mt-1 mr-2 text-lg" />
          <a
            href="https://github.com/sadrzadehsina"
            target="_blank"
            className="no-underline hover:underline"
          >
            github/sadrzadehsina
          </a>
        </li>
        <li>
          <LiaStackOverflow className="inline-block -mt-1 mr-2 text-lg" />
          <a
            href="https://stackoverflow.com/users/2984653/sadrzadehsina"
            target="_blank"
            className="no-underline hover:underline"
          >
            stackoverflow/sadrzadehsina
          </a>
        </li>
      </ul>

      <h3>Working Experience</h3>

      <WorkHistory
        title="Freelance React Developer"
        reference="https://diagram-app-blond.vercel.app/"
        type="freelance"
        from="November 2023"
        to="Present"
        location="Frankfurt"
        description="I am currently developing a comprehensive diagramming application that empowers users to create custom charts based on their preferences. This innovative project is being constructed using Next.js, a robust and versatile framework. Additionally, I have chosen Vercel as the hosting platform for this application, ensuring seamless deployment and scalability for our users' chart creation needs."
        people={[
          {
            name: "Hamed Roknizadeh",
            ref: "https://www.linkedin.com/in/hamedrokni/",
          },
        ]}
      />

      <WorkHistory
        title="Frontend Team Lead"
        reference="http://www.connect2wow.com/"
        from="August 2020"
        to="November 2023"
        location="from Canada to Isfahan"
        description="I strive to think ahead and create the necessary building blocks for our Frontend infrastructure. My goal is to empower others by providing assistance. I work closely with the product owner, translating business requirements into the JavaScript world. The most challenging part of my role is continually learning as much as I can."
        people={[
          {
            name: "Mike Esfarjani",
            ref: "https://www.linkedin.com/in/mike-esfarjani-3b1a0656",
          },
          {
            name: "Iman Shabani",
            ref: "https://www.linkedin.com/in/iman-shabani",
          },
          {
            name: "Meysam Khezrloo",
            ref: "https://www.linkedin.com/in/khezerloo",
          },
        ]}
      />

      <WorkHistory
        title="Senior Frontend Developer"
        reference="http://www.connect2wow.com/"
        from="March 2018"
        to="August 2020 "
        location="from Canada to Isfahan"
        description="Working with a great team of developers, I am involved in launching an ERP solution related to the Oil and Gas industry. I closely collaborate with stakeholders and the product owner to understand business requirements. Additionally, I am tasked with investigating cutting-edge technologies that could be implemented in the frontend. Leveraging JavaScript and React, I aim to build web and mobile applications."
        people={[
          {
            name: "Azarakhsh Shali",
            ref: "https://www.linkedin.com/in/azarakhsh-shali-7b1374121",
          },
          {
            name: "Mehrdad Hedayati",
            ref: "https://www.linkedin.com/in/mhedayati",
          },
        ]}
      />

      <WorkHistory
        title="Technical Lead"
        reference="https://harzaan.com/"
        from="September 2019"
        to="October 2020"
        location="Erbil, Iraq"
        description="The job is complete, and it was a great experience. I was tasked with managing a remote team of developers and designers, alongside reporting all updates to the marketing team and the product owner. It presented a significant challenge as the Harzaan app had approximately 100,000 installs at that time, and its website boasted around 5,000 active users. Technically managing such a large user base on both the app and the website was an incredibly interesting and valuable experience for me."
        people={[
          {
            name: "Fardin (Fakhruddin) Abdi",
            ref: "https://www.linkedin.com/in/fakhruddinabdi",
          },
        ]}
      />

      <WorkHistory
        title="Freelance Frontend Developer"
        type="freelance"
        from="January 2015"
        to="January 2016"
        location="Australia"
        description="In my spare time, I've developed several React applications as part of freelance or part-time engagements. These projects allowed me to apply my expertise in React.js while collaborating with clients or employers to deliver customized solutions that met their specific requirements. Through these experiences, I honed my skills in front-end development and gained valuable insights into creating efficient and user-friendly applications using React."
      />

      <WorkHistory
        title="Frontend Developer"
        reference="https://www.isfahanfair.ir/"
        from="January 2015"
        to="January 2016"
        location="Isfahan"
        description="I had the opportunity to collaborate within a larger team to develop an ERP system specifically tailored for the Isfahan Exhibition. Our team comprised five frontend developers, and I specifically focused on Angular development. Being part of this project was an invaluable experience, offering me the chance to enhance my teamwork skills and learn the dynamics of contributing effectively as a team player."
      />

      <WorkHistory
        title="Frontend Developer"
        reference="https://tutti.ir"
        from="January 2014"
        to="January 2015"
        location="Isfahan"
        description="My initial foray into the startup environment marked my introduction to working within a dynamic team. During this period, I predominantly engaged in frontend development tasks, extensively utilizing a range of tools and technologies including Grunt, Bower, Webpack, Babel, and delving into the intricacies of pure JavaScript. This experience not only broadened my understanding of frontend development but also provided me with hands-on exposure to diverse tools crucial for modern web development within a startup setting."
        people={[
          {
            name: "Yashar Rahmatollahi",
            ref: "https://www.linkedin.com/in/ryashi/",
          },
        ]}
      />

      <WorkHistory
        title="Javascript Developer"
        reference="https://persiabme.ir/"
        from="January 2013"
        to="January 2014"
        location="Tehran"
        description="Involved in a substantial application project, I acquired proficiency in navigating complex client-side frameworks, notably delving into the nuances of using Knockout.js. This hands-on experience provided me with valuable insights into effectively implementing and maneuvering within client-side frameworks, contributing to my expertise in managing larger-scale applications."
      />

      <WorkHistory
        title="Javascript Developer"
        reference="https://isfahan.iau.ir"
        from="January 2010"
        to="January 2012"
        location="Isfahan"
        description="As the sole client-side developer within a team of eight developers, our collective focus was on constructing a feeding automation system. This experience served as a profound learning opportunity for me, particularly in mastering the intricacies of JavaScript. Immersed in this project, I extensively explored both the strengths and weaknesses of CSS, gaining a comprehensive understanding of its nuances. Moreover, working within this collaborative team environment provided me with invaluable insights into effective teamwork dynamics, further refining my ability to contribute productively within a team setting."
        // people={[
        //   {
        //     name: "Nasrin Rahimi",
        //     ref: "https://www.linkedin.com/in/nasrin-rahimi",
        //   },
        // ]}
      />

      <div className="bg-zinc-950 text-zinc-400 border-zinc-900 border-b-8 border-r-8 py-2 px-4">
        <h3 className="text-zinc-400">Open Source</h3>
        <p>
          I am a big fan of open-source world where you can contribute on
          different ideas. The prospect of solving complex problems, sharing
          insights, and collaborating with individuals from varied backgrounds
          excites me. My passion for open source development is rooted in a
          genuine desire to make a meaningful impact, collaborate with
          like-minded individuals, and contribute to projects that benefit
          society at large.
        </p>
        <p>
          I did a few things in the past.
          <ul>
            <li>
              <a
                href="https://github.com/PersiaBME/errortracker"
                target="_blank"
              >
                errortracker
              </a>
            </li>
            <li>
              <a href="https://github.com/sepidarr/fontchi" target="_blank">
                fontchi
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sepidarr/generator-single-page"
                target="_blank"
              >
                single page generator
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sadrzadehsina/keensole"
                target="_blank"
              >
                keensole
              </a>
            </li>
            <li>
              <a href="https://github.com/sadrzadehsina/backet" target="_blank">
                backet
              </a>
            </li>
          </ul>
        </p>
        <p>
          My reading habits extend beyond mere enjoyment; they are a cornerstone
          of my identity, shaping my thoughts, beliefs, and aspirations.
          Exploring libraries and bookstores feels like embarking on a treasure
          hunt, seeking hidden gems and timeless classics that broaden my
          intellectual horizons. Recently, I had a chance to build an app which
          is customized based on my reading habits. I created a{" "}
          <a
            href="https://github.com/sadrzadehsina/book-reader"
            target="_blank"
          >
            book-reader
          </a>{" "}
          that saves me a lot of time while exploring books.
        </p>
      </div>

      <h4>Languages</h4>
      <TechBadgeGroup>
        <TechBadge>javascript</TechBadge>
        <TechBadge>python</TechBadge>
        <TechBadge>nodejs</TechBadge>
      </TechBadgeGroup>

      <h4>Architecture and Paradigm</h4>
      <TechBadgeGroup>
        <TechBadge>micro-frontend</TechBadge>
        <TechBadge>functional programming</TechBadge>
        <TechBadge>
          socket programming - real time and collaboration based
        </TechBadge>
        <TechBadge>domain driven design</TechBadge>
        <TechBadge>clean architecture</TechBadge>
        <TechBadge>layered architecture</TechBadge>
        <TechBadge>client-server</TechBadge>
        <TechBadge>server side rendering</TechBadge>
        <TechBadge>test driven development</TechBadge>
        <TechBadge>component driven development</TechBadge>
      </TechBadgeGroup>

      <h4>Libraries</h4>
      <TechBadgeGroup>
        <TechBadge>react</TechBadge>
        <TechBadge>react native</TechBadge>
        <TechBadge>react router</TechBadge>
        <TechBadge>redux</TechBadge>
        <TechBadge>yjs - for collaboration</TechBadge>
      </TechBadgeGroup>

      <h4>User Interface Libraries</h4>
      <TechBadgeGroup>
        <TechBadge>material uI</TechBadge>
        <TechBadge>chakra ui</TechBadge>
        <TechBadge>mantine</TechBadge>
        <TechBadge>tailwind</TechBadge>
        <TechBadge>ant design</TechBadge>
        <TechBadge>grommet</TechBadge>
      </TechBadgeGroup>

      <h4>Fetching Libraries</h4>
      <TechBadgeGroup>
        <TechBadge>react query</TechBadge>
        <TechBadge>swr</TechBadge>
        <TechBadge>apollo client</TechBadge>
      </TechBadgeGroup>

      <h4>Frameworks</h4>
      <TechBadgeGroup>
        <TechBadge>vue</TechBadge>
        <TechBadge>angular</TechBadge>
        <TechBadge>nextjs</TechBadge>
        <TechBadge>remix</TechBadge>
        <TechBadge>gatsby</TechBadge>
        <TechBadge>electron</TechBadge>
      </TechBadgeGroup>

      <h4>Testing</h4>
      <TechBadgeGroup>
        <TechBadge>enzyme</TechBadge>
        <TechBadge>react testing library</TechBadge>
        <TechBadge>jest</TechBadge>
        <TechBadge>mocha - chai</TechBadge>
        <TechBadge>cypress</TechBadge>
        <TechBadge>selenium</TechBadge>
      </TechBadgeGroup>

      <h4>Tools</h4>
      <TechBadgeGroup>
        <TechBadge>eslint</TechBadge>
        <TechBadge>prettier</TechBadge>
        <TechBadge>typescript</TechBadge>
        <TechBadge>vite</TechBadge>
        <TechBadge>esbuild</TechBadge>
        <TechBadge>webpack</TechBadge>
        <TechBadge>rollup</TechBadge>
      </TechBadgeGroup>

      <h4>Cloud</h4>
      <TechBadgeGroup>
        <TechBadge>aws-cloud-front</TechBadge>
        <TechBadge>aws-code-artifact</TechBadge>
        <TechBadge>aws-s3</TechBadge>
        <TechBadge>firebase/firestore</TechBadge>
        <TechBadge>firebase cloud functions</TechBadge>
        <TechBadge>vercel edge functions</TechBadge>
      </TechBadgeGroup>
    </article>
  );
}

function TechBadgeGroup({ children }: { children: ReactNode }) {
  return <div className="flex gap-1 flex-row flex-wrap">{children}</div>;
}

function TechBadge({ children }: { children: ReactNode }) {
  return (
    <span className="bg-zinc-100 text-zinc-950 text-base py-1 px-2">
      {children}
    </span>
  );
}

type Person = {
  name: string;
  ref: string;
};

function People({ people }: { people: Person[] }) {
  if (people?.length === 0 || !people) return null;

  return (
    <>
      <h6 className="text-base mb-2">
        I had the pleasure of working with some truly amazing people in this
        role
        <LiaHeartSolid className="inline-block text-red-600 text-lg ml-2" />
      </h6>

      {people.map((p) => (
        <div key={p.name} className="flex gap-2 items-center text-base">
          <div>
            <LiaLinkedin className="text-blue-500 text-3xl -mt-2" />
          </div>
          <div>
            <a
              href={p.ref}
              target="_blank"
              className="no-underline hover:underline"
            >
              {p.name}
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

function WorkHistory({
  title,
  reference,
  type,
  from,
  to,
  location,
  description,
  people,
}: {
  title: string;
  reference?: string;
  type?: string;
  from: string;
  to: string;
  location: string;
  description: string;
  people?: Person[];
}) {
  return (
    <div className="mb-16">
      <h5 className="font-semibold">
        <div className="flex gap-2 items-center">
          <div className="-mt-1">
            <LiaMinusSolid className="text-sm" />
          </div>
          <div>{title}</div>
          {type && (
            <div className="-mt-1">
              <span className="bg-red-600 text-xs px-2 border-red-950 border-r-4 border-b-4">
                {type}
              </span>
            </div>
          )}
        </div>
      </h5>
      <a href={reference} target="_black" className="text-blue-500 text-base">
        {reference}
      </a>
      <div className="flex gap-10 items-center text-sm text-zinc-500">
        <div>
          <LiaCalendarAltSolid className="inline-flex -mt-1 mr-1" />{" "}
          <span>
            {from}
            {" ... "}
            {to}
          </span>
        </div>
        <div>
          <LiaMapMarkerAltSolid className="inline-flex -mt-1 mr-1" />
          <span>{location}</span>
        </div>
      </div>
      <p className="mt-3 mb-6">{description}</p>
      {/* @ts-ignore */}
      <People people={people} />
    </div>
  );
}
