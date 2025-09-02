
import React from 'react';
import { Publication, NewsItem, Experience, MiscCategory, Link } from './types';

// SVG Icons
const MailIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);
const CVIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
);
const ScholarIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 2L1 9l11 7 9-7-4-2.5v5l-5 3-5-3v-5L1 9l11 7 11-7z"></path><path d="M5.5 13.5v-2l-4 2.5 4 2.5v-2zM18.5 13.5v-2l4 2.5-4 2.5v-2z"></path></svg>
);
const GithubIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6.1a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.9c0 4.7 2.7 5.8 5.5 6.1-.6.6-.6 1.2-.5 2V21"></path></svg>
);
const LinkedinIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export const PERSONAL_NAME = "Steve T. Tan";

export const CONTACT_LINKS: Link[] = [
  { name: 'Email', url: 'mailto:s.t.tan@email.com', icon: MailIcon },
  { name: 'CV', url: '#', icon: CVIcon },
  { name: 'Google Scholar', url: '#', icon: ScholarIcon },
  { name: 'Github', url: '#', icon: GithubIcon },
  { name: 'LinkedIn', url: '#', icon: LinkedinIcon }
];

export const NEWS_DATA: NewsItem[] = [
    { date: 'July 2024', content: 'Our work on structured pruning for transformers was accepted to EMNLP 2024.' },
    { date: 'May 2024', content: 'Started my research internship at Google DeepMind.' },
    { date: 'Jan 2024', content: 'Serving as a teaching assistant for CSCI 544: Applied Natural Language Processing.' },
    { date: 'Dec 2023', content: 'Our survey on efficient NLP was published in ACM Computing Surveys.' },
];

export const PUBLICATIONS_DATA: Publication[] = [
    {
        image: 'https://picsum.photos/seed/paper1/400/250',
        title: 'Efficient Transformers: A Survey',
        authors: ['Yi Tay', 'Mostafa Dehghani', 'Dara Bahri', PERSONAL_NAME, 'Donald Metzler', 'Da-Cheng Juan'],
        conference: 'ACM Computing Surveys',
        year: 2023,
        links: [{ name: 'Paper', url: '#' }, { name: 'Code', url: '#' }],
        abstract: 'This survey provides a comprehensive overview of efficient methods for Transformer models, which have become central to NLP. We categorize and analyze techniques such as sparse attention, linear attention, and knowledge distillation, providing a structured guide for researchers and practitioners in the field.'
    },
    {
        image: 'https://picsum.photos/seed/paper2/400/250',
        title: 'Charformer: A Fast and Versatile Character-based Model for Language Understanding',
        authors: [PERSONAL_NAME, 'Zhaofeng Wu', 'Xuezhe Ma'],
        conference: 'Findings of ACL 2022',
        year: 2022,
        links: [{ name: 'Paper', url: '#' }, { name: 'Code', url: '#' }, { name: 'Slides', url: '#' }],
        abstract: 'We introduce Charformer, a character-based Transformer model that processes text directly at the character level. By employing a novel gradient-based subword tokenization and Mean-Pooling, Charformer achieves competitive performance on various NLU tasks while being significantly more efficient than previous character-level models.'
    },
    {
        image: 'https://picsum.photos/seed/paper3/400/250',
        title: 'Finetuning Pretrained Transformers into RNNs',
        authors: [PERSONAL_NAME, 'Xuezhe Ma'],
        conference: 'Findings of EMNLP 2021',
        year: 2021,
        links: [{ name: 'Paper', url: '#' }, { name: 'Code', url: '#' }, { name: 'Talk', url: '#' }],
        abstract: 'This work explores an alternative paradigm for leveraging pretrained transformers. Instead of finetuning the full model, we distill its knowledge into a compact RNN architecture. This approach results in models that are much faster at inference time while retaining a significant portion of the original model’s performance.'
    },
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    role: 'Research Intern',
    company: 'Google DeepMind, Mountain View',
    duration: 'May 2024 - Present',
    description: ['Working on large-scale multilingual models with a focus on efficient training and inference techniques.']
  },
  {
    role: 'Research Intern',
    company: 'Microsoft Research Asia, Beijing',
    duration: 'Sep 2020 - Mar 2021',
    description: ['Developed novel algorithms for cross-lingual structured prediction under the supervision of Dr. Duyu Tang.']
  },
];

export const MISC_DATA: MiscCategory[] = [
    {
        title: 'Teaching Assistant',
        items: [
            'CSCI 544: Applied Natural Language Processing, USC, Spring 2024',
            'CS 388: Natural Language Processing, SJTU, Fall 2020'
        ]
    },
    {
        title: 'Professional Services',
        items: [
            'Reviewer for ACL, EMNLP, NAACL, NeurIPS, ICLR since 2022'
        ]
    },
    {
        title: 'Awards',
        items: [
            'USC Annenberg Fellowship, 2021',
            'SJTU Outstanding Graduate Award, 2021'
        ]
    }
]
