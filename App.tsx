
import React from 'react';
import type { Publication, NewsItem, Experience, MiscCategory, PublicationLink, Link as ContactLink } from './types';
import { PERSONAL_NAME, CONTACT_LINKS, NEWS_DATA, PUBLICATIONS_DATA, EXPERIENCES_DATA, MISC_DATA } from './constants';

const SECTIONS = [
  { id: 'about', title: 'About Me' },
  { id: 'news', title: 'News' },
  { id: 'publications', title: 'Publications' },
  { id: 'experience', title: 'Experience' },
  { id: 'misc', title: 'Misc' },
];

const IconLink: React.FC<{ link: ContactLink }> = ({ link }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors duration-200"
  >
    {link.icon}
    <span>{link.name}</span>
  </a>
);

const ProfileCard: React.FC = () => (
  <div className="w-full lg:w-1/3 lg:max-w-xs xl:max-w-sm">
    <div className="lg:sticky lg:top-8 bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex flex-col items-center lg:items-start">
        <img
          src="https://picsum.photos/seed/profile/200/200"
          alt="Steve T. Tan"
          className="w-32 h-32 rounded-full mb-4 shadow-md"
        />
        <h1 className="text-3xl font-bold text-slate-900">{PERSONAL_NAME}</h1>
        <p className="text-slate-600 mt-1 text-center lg:text-left">
          Ph.D. Student, Computer Science <br />
          University of Southern California
        </p>

        <div className="mt-6 w-full space-y-3">
          {CONTACT_LINKS.map(link => (
            <IconLink key={link.name} link={link} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Section: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <section id={id} className="mb-12 bg-white p-8 rounded-2xl shadow-lg">
    <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-blue-500 inline-block">{title}</h2>
    <div className="space-y-6">
      {children}
    </div>
  </section>
);

const PublicationItem: React.FC<{ pub: Publication }> = ({ pub }) => (
  <div className="flex flex-col md:flex-row gap-6 py-6 border-b border-slate-200 last:border-b-0">
    {pub.image && (
       <div className="md:w-1/3 flex-shrink-0">
        <img src={pub.image} alt={`Visual for ${pub.title}`} className="rounded-lg object-cover w-full h-auto shadow-md" />
       </div>
    )}
    <div className="flex-grow">
      <h3 className="text-lg font-semibold text-blue-700">{pub.title}</h3>
      <p className="text-sm text-slate-600 mt-1">
        {pub.authors.map((author, index) => (
          <span key={index} className={author === PERSONAL_NAME ? 'font-bold text-slate-800' : ''}>
            {author}{index < pub.authors.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
      <p className="text-sm text-slate-500 italic mt-1">
        {pub.conference}, {pub.year}
      </p>
      <div className="mt-3 flex items-center space-x-4">
        {pub.links.map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition-all duration-200 shadow"
          >
            {link.name}
          </a>
        ))}
      </div>
      <p className="text-slate-700 mt-4 text-sm leading-relaxed">{pub.abstract}</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-8">
      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <ProfileCard />

        <main className="w-full lg:w-2/3 mt-8 lg:mt-0">
          <Section id="about" title="About Me">
            <div className="text-slate-700 space-y-4 leading-relaxed">
               <p>
                I am a Ph.D. student in Computer Science at the University of Southern California (USC), fortunate to be advised by Prof. <a href="#" className="text-blue-600 hover:underline">Xuezhe Ma</a> at the <a href="#" className="text-blue-600 hover:underline">USC INK Lab</a>.
              </p>
              <p>
                My research interests are in Natural Language Processing (NLP), with a focus on Efficient NLP, Structured Prediction, and Multilinguality. I aim to develop models that are not only powerful but also computationally efficient and accessible.
              </p>
              <p>
                Before joining USC, I obtained my B.S. in Computer Science from Shanghai Jiao Tong University. I've also had the wonderful experience of interning at Microsoft Research Asia.
              </p>
            </div>
          </Section>

          <Section id="news" title="News">
            <ul className="list-disc list-inside space-y-3 text-slate-700">
              {NEWS_DATA.map((item, index) => (
                <li key={index}>
                  <span className="font-semibold text-slate-800 mr-2">{`[${item.date}]`}</span>
                  {item.content}
                </li>
              ))}
            </ul>
          </Section>

          <Section id="publications" title="Publications">
             <div className="space-y-4">
               {PUBLICATIONS_DATA.map((pub, index) => (
                 <PublicationItem key={index} pub={pub} />
               ))}
             </div>
          </Section>

          <Section id="experience" title="Experience">
            <div className="space-y-6">
              {EXPERIENCES_DATA.map((exp, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg text-slate-800">{exp.role}</h3>
                  <p className="text-slate-600">{exp.company}</p>
                  <p className="text-slate-500 text-sm">{exp.duration}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-slate-700">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section id="misc" title="Misc">
            {MISC_DATA.map((category, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h3 className="font-semibold text-lg text-slate-800 mb-2">{category.title}</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  {category.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

           <footer className="text-center mt-12 py-6 border-t border-slate-200">
             <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} {PERSONAL_NAME}. All rights reserved.</p>
           </footer>
        </main>
      </div>
    </div>
  );
};

export default App;
