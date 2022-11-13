const Talks = {
  Albay: {
    speaker: "Hon. Gov. Noel Rosal, Governor Province of Albay",
    talk: "Welcome Message",
  },
  DTI: {
    speaker: "Rodrigo Aguilar, Regional Director",
    talk: "DTI Region V Message",
  },
  Aicta: {
    speaker: 'Rosemarie Rey Quinto, AICTA Chairman',
    talk: 'Keynote Message'
  },
  Denley: {
    speaker: 'Denley Mirabueno, Finance and Risk Professional',
    talk: 'The Foundations and Evolution of Modern Traditional Finance'
  },
  Sleti: {
    speaker: 'Harvey Javier, Co-founder & CTO, SparkLearn EdTech',
    talk: 'Intro to Blockchain and Web3'
  },
  BitPinas: {
    speaker: 'Michael Mislos, Editor-in-Chief BitPinas',
    talk: 'The Story of Crypto in the Philippines'
  },
  Filipay: {
    speaker: 'Janice Ariño, CEO Filipay',
    talk: 'Filipicoin: Decentralized Network for Transportation'
  },
  DivinaLaw: {
    speaker: 'Atty. Enrique dela Cruz, Senior Partner & Head of FinTech, Divina Law',
    talk: 'Legal Considerations of Crypto and NFTs in PH'
  },
  SparkPoint: {
    speaker: 'Andy Agnas, SparkPoint',
    talk: 'How to keep on Building'
  },
  Ownly: {
    speaker: 'Ismael Jerusalem, CEO Ownly',
    talk: 'Innovating Art, Games and Technology with NFTs'
  },
  Sleti2: {
    speaker: 'Melissa Mesias, Co-founder & CEO, SparkLearn EdTech',
    talk: 'The Importance of Upskilling or Reskilling in the Digital Age'
  },
  MGG: {
    speaker: 'Morris Perico, COO MetaGaming Guild',
    talk: 'MetaGaming Guild GameFi Vault'
  },
  MSW: {
    speaker: 'Mike Reñevo, Lead Game Designer MetaSaga Warriors',
    talk: 'MetaSaga Warriors: The Fun Side of Blockchain'
  },
  BicolIT: {
    speaker: 'Loreleen Mae Sablot, VP for Events, Bicol IT',
    talk: 'Building IT Community in Bicol'
  }
};

const Schedule = {
  ["9:00 AM - 10:00 AM"]: {
    sched: "Registration and Networking",
  },
  ["10:00 AM - 11:00 AM"]: {
    sched: "Opening Ceremonies",
    talks: [
      Talks.Albay,
      Talks.DTI,
      Talks.Aicta
    ],
  },
  ["11:00 AM - 11:30 AM"]: {
    talks: [
      Talks.Denley
    ],
  },
  ["11:30 AM - 12:00 NN"]: {
    talks: [
      Talks.Sleti
    ]
  },
  ["12:00 NN - 1:30 PM"]: {
    break: 'LUNCH BREAK'
  },
  ["1:15 PM - 1:30 PM"]: {
    talks: [
      Talks.BicolIT
    ] 
  },
  ["1:30 PM - 1:50 PM"]: {
    talks: [
      Talks.BitPinas
    ] 
  },
  ["1:50 PM - 2:10 PM"]: {
    talks: [
      Talks.Filipay
    ]
  },
  ['2:10 PM - 2:30 PM']: {
    talks: [
      Talks.DivinaLaw
    ]
  },
  ['2:30 PM - 2:50 PM']: {
    talks: [
      Talks.SparkPoint
    ]
  },
  ['2:50 PM - 3:10 PM']: {
    talks: [
      Talks.Ownly
    ]
  },
  ['3:10 PM - 3:30 PM']: {
    talks: [
      Talks.Sleti2
    ]
  },
  ['3:30 PM - 3:50 PM']: {
    talks: [
      Talks.MGG
    ]
  },
  ['3:50 PM - 4:10 PM']: {
    talks: [
      Talks.MSW
    ]
  },
  ['4:10 PM - 4:40 PM']: {
    sched: 'Panel Discussion moderated by Gail Macapagal',
    talks: [
      {
        talk: 'Countryside Founders and Builders',
        speaker: 'Isma, Andy, Melissa, Morris, Mike'
      }
    ]
  },
  ['4:40 PM - 5:00 PM']: {
    sched: 'Closing Ceremonies and Raffle Draw'
  }
};


export default Schedule;