export default {
  nodes: [
    {
      id: "INFO",
      group: 1,
      primary: true,
      additionalInfo:
        "This is some dummy additional info about INFO (ba - dum - tsss!!) ..."
    },
    {
      id: "Gorjan",
      secondary: true,
      group: 1,
      additionalInfo: "This is some dummy additional info text for Gorjan ..."
    },
    {
      id: "Nuno",
      secondary: true,
      group: 1,
      additionalInfo: "This is some dummy additional info text for Nuno ..."
    },
    {
      id: "Dorien",
      secondary: true,
      group: 1,
      additionalInfo: "This is some dummy additional info text for Dorien ..."
    },
    {
      id: "Adrian",
      secondary: true,
      group: 1,
      additionalInfo: "This is some dummy additional info text for Adrian ..."
    },
    {
      id: "Javad",
      secondary: true,
      group: 1,
      additionalInfo: "This is some dummy additional info text for Javad ..."
    },
    {
      id: "Vlad",
      secondary: true,
      group: 1,
      additionalInfo: "This is some dummy additional info text for Vlad ..."
    },
    {
      id: "Designers",
      secondary: true,
      group: 2,
      additionalInfo:
        "This is some dummy additional info text for the Designers Team ..."
    },
    {
      id: "Boris",
      tertiary: true,
      group: 2
    },
    {
      id: "Joy",
      tertiary: true,
      group: 2
    },
    {
      id: "Oebe",
      tertiary: true,
      group: 2
    },
    {
      id: "Queens",
      secondary: true,
      group: 3
    },
    {
      id: "Ismail",
      tertiary: true,
      group: 3
    },
    {
      id: "Stefan",
      tertiary: true,
      group: 3
    },
    {
      id: "Bas",
      tertiary: true,
      group: 4
    },
    {
      id: "Scrum",
      secondary: true,
      group: 5
    }
  ],
  links: [
    {
      source: "Gorjan",
      target: "INFO",
      value: 1
    },
    {
      source: "Nuno",
      target: "INFO",
      value: 1
    },
    {
      source: "Dorien",
      target: "INFO",
      value: 1
    },
    {
      source: "Vlad",
      target: "INFO",
      value: 1
    },
    {
      source: "Adrian",
      target: "INFO",
      value: 1
    },
    {
      source: "Javad",
      target: "INFO",
      value: 1
    },
    {
      source: "Javad",
      target: "Dorien"
    },
    {
      source: "Designers",
      target: "INFO",
      value: 1
    },
    {
      source: "Joy",
      target: "Designers",
      value: 2
    },
    {
      source: "Boris",
      target: "Designers",
      value: 2
    },
    {
      source: "Oebe",
      target: "Scrum",
      value: 1
    },
    {
      source: "Oebe",
      target: "Joy",
      value: 1
    },
    {
      source: "Oebe",
      target: "Boris",
      value: 1
    },
    {
      source: "Queens",
      target: "INFO"
    },
    {
      source: "Stefan",
      target: "Queens",
      value: 1
    },
    {
      source: "Ismail",
      target: "Queens",
      value: 1
    },
    {
      source: "Bas",
      target: "Stefan"
    },
    {
      source: "Scrum",
      target: "INFO",
      value: 1
    }
  ]
};

export const sampleData = {
  nodes: [
    {
      id: 1,
      name: "A"
    },
    {
      id: 2,
      name: "B"
    },
    {
      id: 3,
      name: "C"
    },
    {
      id: 4,
      name: "D"
    },
    {
      id: 5,
      name: "E"
    },
    {
      id: 6,
      name: "F"
    },
    {
      id: 7,
      name: "G"
    },
    {
      id: 8,
      name: "H"
    },
    {
      id: 9,
      name: "I"
    },
    {
      id: 10,
      name: "J"
    }
  ],
  links: [
    {
      source: 1,
      target: 2
    },
    {
      source: 1,
      target: 5
    },
    {
      source: 1,
      target: 6
    },

    {
      source: 2,
      target: 3
    },
    {
      source: 2,
      target: 7
    },
    {
      source: 3,
      target: 4
    },
    {
      source: 8,
      target: 3
    },
    {
      source: 4,
      target: 5
    },
    {
      source: 4,
      target: 9
    },
    {
      source: 5,
      target: 10
    }
  ]
};
