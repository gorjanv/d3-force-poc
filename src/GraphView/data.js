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

export const actualData_0 = {
  companyIdentification: {
    countryCode: "NL",
    graydonCompanyId: "000501924",
    registrationId: "33080348",
    vatNumber: "NL822636396B01",
    enterpriseId: 18507,
    requestLanguage: "EN"
  },
  networkProfile: {
    companies: [
      {
        nodeId: 1,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000501924",
          registrationId: "33080348",
          vatNumber: "NL822636396B01",
          enterpriseId: 18507,
          requestLanguage: "EN"
        },
        companyProfile: {
          companyName: "Graydon Nederland B.V.",
          addresses: [
            {
              type: {
                value: "2",
                description: "Registered office address"
              },
              streetName: "Hullenbergweg",
              houseNumber: "250",
              postalCode: "1101BV",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Netherlands"
              },
              startDate: "1987-01-29",
              latitude: 52.30504,
              longitude: 4.9518,
              linesFilled: false
            }
          ],
          companyStatus: {
            isActive: true
          },
          hasFinancialCalamities: false
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "A",
                description: "General"
              },
              type: {
                value: "NL_4",
                description:
                  "The company has been checked unusually often by Graydon customers in a short period of time."
              },
              startDate: {
                day: 29,
                month: 8,
                year: 2013,
                fullDate: "2013-08-29"
              }
            },
            {
              category: {
                value: "BA",
                description: "Company activities"
              },
              type: {
                value: "NL_14",
                description:
                  "A spin-off of a department of the company has resulted in a new company"
              },
              relatedCompany: {
                companyIdentification: {
                  countryCode: "NL",
                  graydonCompanyId: "929535006",
                  registrationId: "58897712",
                  vatNumber: "NL853228462B01",
                  enterpriseId: 4346957,
                  requestLanguage: "EN"
                },
                companyProfile: {
                  companyName: "Graydon Incasso B.V.",
                  addresses: [
                    {
                      type: {
                        value: "2",
                        description: "Registered office address"
                      },
                      streetName: "Hullenbergweg",
                      houseNumber: "250",
                      postalCode: "1101BV",
                      city: "AMSTERDAM",
                      country: {
                        value: "NL",
                        description: "Netherlands"
                      },
                      latitude: 52.30504,
                      longitude: 4.9518,
                      linesFilled: false
                    }
                  ],
                  companyStatus: {
                    isActive: true
                  },
                  hasFinancialCalamities: false
                }
              }
            },
            {
              category: {
                value: "BA",
                description: "Company activities"
              },
              type: {
                value: "NL_26",
                description:
                  "This company continues the activities of another, dissolved company."
              },
              startDate: {
                day: 13,
                month: 11,
                year: 2012,
                fullDate: "2012-11-13"
              },
              relatedCompany: {
                companyIdentification: {
                  countryCode: "NL",
                  graydonCompanyId: "000459618",
                  registrationId: "33051685",
                  enterpriseId: 41675352,
                  requestLanguage: "EN"
                },
                companyProfile: {
                  companyName: "Marktselect B.V.",
                  addresses: [
                    {
                      type: {
                        value: "2",
                        description: "Registered office address"
                      },
                      streetName: "Paasheuvelweg",
                      houseNumber: "40",
                      postalCode: "1105BJ",
                      city: "AMSTERDAM",
                      country: {
                        value: "NL",
                        description: "Netherlands"
                      },
                      latitude: 52.2973,
                      longitude: 4.95221,
                      linesFilled: false
                    }
                  ],
                  companyStatus: {
                    isActive: true
                  },
                  hasFinancialCalamities: false
                },
                ratingsProfile: {
                  graydonGroupCreditScores: {
                    creditFlag: {
                      value: "R",
                      description: "Red"
                    }
                  }
                }
              }
            }
          ]
        }
      },
      {
        nodeId: 2,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000715861",
          registrationId: "33189409",
          vatNumber: "NL008604952B01",
          enterpriseId: 302459
        },
        companyProfile: {
          companyName: "Graydon Holding B.V.",
          addresses: [
            {
              type: {
                value: "2",
                description: "Registered office address"
              },
              streetName: "Hullenbergweg",
              houseNumber: "250",
              postalCode: "1101BV",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Netherlands"
              },
              linesFilled: false
            }
          ],
          companyStatus: {
            isActive: true
          },
          hasFinancialCalamities: false
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_73",
                description: "Dit bedrijf is definitief ontbonden."
              },
              startDate: {
                day: 5,
                month: 9,
                year: 2018,
                fullDate: "2018-09-05"
              }
            },
            {
              category: {
                value: "P",
                description: "Publicaties"
              },
              type: {
                value: "NL_60",
                description:
                  "Negatieve registratie op de 'specially designated nationals list', gepubliceerd door de Office of Foreign Assets Control (OFAC) van de US Treasury Department."
              },
              startDate: {
                day: 28,
                month: 8,
                year: 2009,
                fullDate: "2009-08-28"
              }
            }
          ]
        }
      },
      {
        nodeId: 3,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "904950808",
          registrationId: "34196963",
          vatNumber: "NL801422917B02",
          enterpriseId: 1620242
        },
        companyProfile: {
          companyName: "Atradius N.V.",
          addresses: [
            {
              type: {
                value: "2",
                description: "Registered office address"
              },
              streetName: "David Ricardostraat",
              houseNumber: "1",
              postalCode: "1066JS",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Netherlands"
              },
              linesFilled: false
            }
          ],
          companyStatus: {
            isActive: true
          },
          hasFinancialCalamities: false
        }
      },
      {
        nodeId: 4,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "921921691",
          registrationId: "51896923",
          vatNumber: "NL850218056B01",
          enterpriseId: 3770863,
          requestLanguage: "EN"
        },
        companyProfile: {
          companyName: "Van Es Capital B.V.",
          addresses: [
            {
              type: {
                value: "2",
                description: "Registered office address"
              },
              streetName: "Pauwenlaan",
              houseNumber: "20",
              postalCode: "2566TH",
              city: "'S-GRAVENHAGE",
              country: {
                value: "NL",
                description: "Netherlands"
              },
              linesFilled: false
            }
          ],
          companyStatus: {
            isActive: true
          },
          hasFinancialCalamities: false
        }
      }
    ],
    persons: [
      {
        nodeId: 5,
        personId: 1024085555,
        gender: "M",
        initials: "MR",
        surNamePrefix: "van",
        surName: "Es",
        dateOfBirth: {
          day: 6,
          month: 10,
          year: 1966,
          fullDate: "1966-10-06"
        },
        placeOfBirth: "'s-Gravenhage",
        countryOfBirth: {
          value: "NL",
          description: "Netherlands"
        }
      }
    ],
    relationships: [
      {
        nodeId: 1,
        relatedNodeId: 2,
        relationshipTypes: [
          {
            type: {
              value: "PCY",
              description: "Parent company"
            },
            isCurrent: true
          },
          {
            type: {
              value: "SHL",
              description: "Shareholder"
            },
            startDate: "2000-01-01",
            isCurrent: true
          },
          {
            type: {
              value: "LFOR",
              description: "Deposited declaration of liability for"
            },
            startDate: "2000-01-01",
            isCurrent: true
          }
        ]
      },
      {
        nodeId: 1,
        relatedNodeId: 3,
        relationshipTypes: [
          {
            type: {
              value: "UCY",
              description: "Ultimate parent company"
            },
            isCurrent: true
          }
        ]
      },
      {
        nodeId: 1,
        relatedNodeId: 5,
        relationshipTypes: [
          {
            type: {
              value: "MGR",
              description: "Manager"
            },
            startDate: {
              day: 1,
              month: 8,
              year: 2012,
              fullDate: "2012-08-01"
            },
            endDate: {
              day: 31,
              month: 12,
              year: 2016,
              fullDate: "2016-12-31"
            },
            isCurrent: false
          }
        ]
      },
      {
        nodeId: 2,
        relatedNodeId: 3,
        relationshipTypes: [
          {
            type: {
              value: "PCY",
              description: "Parent company"
            },
            isCurrent: true
          }
        ]
      },
      {
        nodeId: 5,
        relatedNodeId: 4,
        relationshipTypes: [
          {
            type: {
              value: "MGR",
              description: "Manager"
            },
            startDate: {
              day: 25,
              month: 1,
              year: 2011,
              fullDate: "2011-01-25"
            },
            isCurrent: true
          }
        ]
      }
    ]
  },
  now: "2019-08-26T16:06:52",
  version: "1_12_0"
};

export const actualData_1 = {
  companyIdentification: {
    companyIdentification: {
      countryCode: "NL",
      graydonCompanyId: "000074153",
      registrationId: "33011433",
      vatNumber: "NL004488209B01",
      enterpriseId: 2558367,
      legalEntityId: "724500K5PTPSST86UQ23",
      requestLanguage: "NL"
    }
  },
  networkProfile: {
    companies: [
      {
        nodeId: 110440001,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000074153",
          registrationId: "33011433",
          vatNumber: "NL004488209B01",
          enterpriseId: 2558367,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken N.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "A",
                description: "Algemeen"
              },
              type: {
                value: "NL_4",
                description:
                  "Binnen korte tijd is de onderneming bij Graydon ongebruikelijk vaak getoetst."
              },
              startDate: {
                day: 15,
                month: 11,
                year: 2017,
                fullDate: "2017-11-15"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440039,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000523287",
          registrationId: "33103437",
          vatNumber: "NL001632577B01",
          enterpriseId: 24562,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken Nederlands Beheer B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Burgemeester Smeetsweg",
              houseNumber: "1 ",
              postalCode: "2382PH",
              city: "ZOETERWOUDE",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 2,
                month: 6,
                year: 2016,
                fullDate: "2016-06-02"
              },
              latitude: 52.1373,
              longitude: 4.54189
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440040,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000523442",
          registrationId: "33103545",
          vatNumber: "NL004488209B01",
          enterpriseId: 24587,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken International B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "A",
                description: "Algemeen"
              },
              type: {
                value: "NL_4",
                description:
                  "Binnen korte tijd is de onderneming bij Graydon ongebruikelijk vaak getoetst."
              },
              startDate: {
                day: 27,
                month: 11,
                year: 2018,
                fullDate: "2018-11-27"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 1,
                month: 11,
                year: 2016,
                fullDate: "2016-11-01"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 1,
                month: 11,
                year: 2017,
                fullDate: "2017-11-01"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440041,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000228792",
          registrationId: "30024744",
          vatNumber: "NL001226411B01",
          enterpriseId: 114957,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Vrumona B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Vrumonaweg",
              houseNumber: "2 ",
              postalCode: "3981HT",
              city: "BUNNIK",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.06289,
              longitude: 5.20535
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "A",
                description: "Algemeen"
              },
              type: {
                value: "NL_4",
                description:
                  "Binnen korte tijd is de onderneming bij Graydon ongebruikelijk vaak getoetst."
              },
              startDate: {
                day: 8,
                month: 8,
                year: 2018,
                fullDate: "2018-08-08"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_27",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander bedrijf."
              },
              startDate: {
                day: 31,
                month: 5,
                year: 1996,
                fullDate: "1996-05-31"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440042,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000529991",
          registrationId: "33108146",
          vatNumber: "NL001625731B01",
          enterpriseId: 308246,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Amstel Internationaal B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440043,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000533468",
          registrationId: "33110514",
          enterpriseId: 308688,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken Supply Chain B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440044,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000545532",
          registrationId: "33127977",
          vatNumber: "NL001632553B28",
          enterpriseId: 312501,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken Nederland B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "A",
                description: "Algemeen"
              },
              type: {
                value: "NL_4",
                description:
                  "Binnen korte tijd is de onderneming bij Graydon ongebruikelijk vaak getoetst."
              },
              startDate: {
                day: 28,
                month: 8,
                year: 2013,
                fullDate: "2013-08-28"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_21",
                description:
                  "Een deel van de activiteiten van dit bedrijf voortgezet in een ander bedrijf."
              },
              startDate: {
                day: 31,
                month: 12,
                year: 2013,
                fullDate: "2013-12-31"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 1,
                month: 10,
                year: 1998,
                fullDate: "1998-10-01"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_28",
                description:
                  "Dit bedrijf zet een deel van de activiteiten voort van een ander bedrijf."
              },
              startDate: {
                day: 1,
                month: 7,
                year: 1992,
                fullDate: "1992-07-01"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440045,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000545546",
          registrationId: "33127997",
          vatNumber: "NL001625809B01",
          enterpriseId: 312503,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "B.V. Beleggingsmaatschappij Limba",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440046,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000452576",
          registrationId: "33050541",
          vatNumber: "NL001632516B01",
          enterpriseId: 330672,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken Brouwerijen B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_21",
                description:
                  "Een deel van de activiteiten van dit bedrijf voortgezet in een ander bedrijf."
              },
              startDate: {
                day: 30,
                month: 12,
                year: 2004,
                fullDate: "2004-12-30"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440047,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "001199107",
          registrationId: "20065244",
          enterpriseId: 360941,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "De Brouwketel B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Burgemeester Smeetsweg",
              houseNumber: "1 ",
              postalCode: "2382PH",
              city: "ZOETERWOUDE",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 3,
                month: 2,
                year: 2011,
                fullDate: "2011-02-03"
              },
              latitude: 52.1373,
              longitude: 4.54189
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440048,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "001219326",
          registrationId: "24096125",
          enterpriseId: 368376,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "B.V. Handel- En Exploitatie Maatschappij Schoonhoven",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440049,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "894346512",
          registrationId: "28038342",
          vatNumber: "NL001625834B01",
          enterpriseId: 488360,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "B.V. Panden Exploitatie Maatschappij Pem",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Burgemeester Smeetsweg",
              houseNumber: "1 ",
              postalCode: "2382PH",
              city: "ZOETERWOUDE",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 8,
                month: 1,
                year: 1998,
                fullDate: "1998-01-08"
              },
              latitude: 52.1373,
              longitude: 4.54189
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440050,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000017662",
          registrationId: "33003810",
          vatNumber: "NL004488209B01",
          enterpriseId: 492886,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Hotel De L'europe B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Nieuwe Doelenstraat",
              houseNumber: "2 ",
              postalCode: "1012CP",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 8,
                year: 2009,
                fullDate: "2009-08-18"
              },
              latitude: 52.36785,
              longitude: 4.8948
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440051,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000581456",
          registrationId: "33157994",
          vatNumber: "NL004895034B01",
          enterpriseId: 550150,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Distilled Trading International B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440052,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000581746",
          registrationId: "33158395",
          vatNumber: "NL004133973B01",
          enterpriseId: 550190,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Premium Beverages International B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440053,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000589455",
          registrationId: "33167954",
          vatNumber: "NL005372719B01",
          enterpriseId: 552179,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Brasinvest B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440054,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000606971",
          registrationId: "28041697",
          vatNumber: "NL007229434B01",
          enterpriseId: 556851,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Proseco B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Scheepmakerstraat",
              houseNumber: "22 ",
              postalCode: "2222AC",
              city: "KATWIJK ZH",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 1,
                month: 11,
                year: 1984,
                fullDate: "1984-11-01"
              },
              latitude: 52.20007,
              longitude: 4.42998
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440055,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000358720",
          registrationId: "28038343",
          vatNumber: "NL004474752B01",
          enterpriseId: 802412,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken Exploitatie Maatschappij B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Burgemeester Smeetsweg",
              houseNumber: "1 ",
              postalCode: "2382PH",
              city: "ZOETERWOUDE",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 1,
                month: 2,
                year: 1980,
                fullDate: "1980-02-01"
              },
              latitude: 52.1373,
              longitude: 4.54189
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440056,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "895350483",
          registrationId: "33305353",
          vatNumber: "NL807371762B01",
          enterpriseId: 868371,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Roeminck Insurance N.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440057,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "906917409",
          registrationId: "34218513",
          vatNumber: "NL814286550B01",
          enterpriseId: 1158400,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Amstel Export Americas B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_28",
                description:
                  "Dit bedrijf zet een deel van de activiteiten voort van een ander bedrijf."
              },
              startDate: {
                day: 30,
                month: 12,
                year: 2004,
                fullDate: "2004-12-30"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440058,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "909890765",
          registrationId: "34254359",
          vatNumber: "NL816192054B01",
          enterpriseId: 2192600,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Hotel De L'europe Monumenten Ii B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Nieuwe Doelenstraat",
              houseNumber: "2 ",
              postalCode: "1012CP",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 7,
                month: 9,
                year: 2006,
                fullDate: "2006-09-07"
              },
              latitude: 52.36785,
              longitude: 4.8948
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440059,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "890195137",
          registrationId: "14601316",
          enterpriseId: 1054690,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Brand Bierbrouwerij B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Brouwerijstraat",
              houseNumber: "2 ",
              postalCode: "6321AG",
              city: "WIJLRE",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 30,
                month: 9,
                year: 1994,
                fullDate: "1994-09-30"
              },
              latitude: 50.83099,
              longitude: 5.89422
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_23",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander bedrijf dat in een beheermaatschappij is omgezet."
              },
              startDate: {
                day: 1,
                month: 1,
                year: 1997,
                fullDate: "1997-01-01"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_28",
                description:
                  "Dit bedrijf zet een deel van de activiteiten voort van een ander bedrijf."
              },
              startDate: {
                day: 7,
                month: 7,
                year: 1999,
                fullDate: "1999-07-07"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440060,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "906079470",
          registrationId: "34209042",
          vatNumber: "NL813466416B01",
          enterpriseId: 1118901,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Hotel De L'europe Monumenten I B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Nieuwe Doelenstraat",
              houseNumber: "2 ",
              postalCode: "1012CP",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 8,
                month: 7,
                year: 2004,
                fullDate: "2004-07-08"
              },
              latitude: 52.36785,
              longitude: 4.8948
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440061,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "906917255",
          registrationId: "34218494",
          vatNumber: "NL814286677B01",
          enterpriseId: 1158397,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken Export Americas B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_28",
                description:
                  "Dit bedrijf zet een deel van de activiteiten voort van een ander bedrijf."
              },
              startDate: {
                day: 30,
                month: 12,
                year: 2004,
                fullDate: "2004-12-30"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440062,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "924735635",
          registrationId: "54139554",
          vatNumber: "NL851185332B01",
          enterpriseId: 1358228,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken Global Procurement B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 5,
                month: 1,
                year: 2012,
                fullDate: "2012-01-05"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440063,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "910077401",
          registrationId: "34256445",
          vatNumber: "NL816988420B01",
          enterpriseId: 2014977,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken Cee Investments B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440064,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "938167014",
          registrationId: "67422020",
          enterpriseId: 2144362,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Beerwulf B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Johan Huizingalaan",
              houseNumber: "763 A",
              postalCode: "1066VH",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 15,
                month: 12,
                year: 2016,
                fullDate: "2016-12-15"
              },
              latitude: 52.34318,
              longitude: 4.82945
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440065,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000039808",
          registrationId: "28076293",
          vatNumber: "NL001440895B01",
          enterpriseId: 2360536,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken Beer Systems B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440066,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "910232539",
          registrationId: "34258660",
          vatNumber: "NL817142629B01",
          enterpriseId: 2398401,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken Group B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440067,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "904028593",
          registrationId: "34186059",
          vatNumber: "NL811523706B01",
          enterpriseId: 2648234,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken Americas B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 30,
                month: 12,
                year: 2003,
                fullDate: "2003-12-30"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440068,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "932726038",
          registrationId: "62011014",
          vatNumber: "NL854593871B01",
          enterpriseId: 3388354,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Hibv Skopje Holdings B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 H",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 11,
                month: 12,
                year: 2014,
                fullDate: "2014-12-11"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "B",
                description: "Bestuur"
              },
              type: {
                value: "NL_12",
                description:
                  "Recentelijk is een wijziging van de hoogste bestuurder opgetreden."
              },
              startDate: {
                day: 1,
                month: 7,
                year: 2018,
                fullDate: "2018-07-01"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440069,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000003125",
          registrationId: "33000653",
          enterpriseId: 3500318,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Amstel Brouwerij B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_21",
                description:
                  "Een deel van de activiteiten van dit bedrijf voortgezet in een ander bedrijf."
              },
              startDate: {
                day: 30,
                month: 12,
                year: 2004,
                fullDate: "2004-12-30"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440070,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "920051790",
          registrationId: "50038745",
          vatNumber: "NL822505356B01",
          enterpriseId: 3718417,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken Brazil B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440071,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "921373708",
          registrationId: "51349434",
          vatNumber: "NL823233443B01",
          enterpriseId: 4022881,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken Mexico B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 9,
                month: 12,
                year: 2010,
                fullDate: "2010-12-09"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440072,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "926878735",
          registrationId: "56235798",
          vatNumber: "NL852034088B01",
          enterpriseId: 4118202,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken Asia Pacific B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 H",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 1,
                month: 11,
                year: 2012,
                fullDate: "2012-11-01"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440073,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "929917855",
          registrationId: "59239700",
          vatNumber: "NL853383261B01",
          enterpriseId: 4408047,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken Groothandel B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 H",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 28,
                month: 11,
                year: 2013,
                fullDate: "2013-11-28"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_28",
                description:
                  "Dit bedrijf zet een deel van de activiteiten voort van een ander bedrijf."
              },
              startDate: {
                day: 31,
                month: 12,
                year: 2013,
                fullDate: "2013-12-31"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440074,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "929918169",
          registrationId: "59240032",
          vatNumber: "NL853383431B01",
          enterpriseId: 4408065,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken Horeca Services B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 H",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 28,
                month: 11,
                year: 2013,
                fullDate: "2013-11-28"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_28",
                description:
                  "Dit bedrijf zet een deel van de activiteiten voort van een ander bedrijf."
              },
              startDate: {
                day: 31,
                month: 12,
                year: 2013,
                fullDate: "2013-12-31"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440075,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000546138",
          registrationId: "33128703",
          enterpriseId: 41673127,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken Insurance Services B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_75",
                description: "Dit bedrijf is opgeheven."
              },
              startDate: {
                day: 22,
                month: 1,
                year: 2014,
                fullDate: "2014-01-22"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440090,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "927701677",
          registrationId: "57027714",
          enterpriseId: 4600384,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName:
            "Vereniging Van Eigenaars Complex De Belsj Maastrichter Heidenstraat 7 Te Maastricht",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Burgemeester Smeetsweg",
              houseNumber: "1 ",
              postalCode: "2382PH",
              city: "ZOETERWOUDE",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 7,
                month: 2,
                year: 2013,
                fullDate: "2013-02-07"
              },
              latitude: 52.1373,
              longitude: 4.54189
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_69",
                description:
                  "Voor deze stichting/vereniging zijn geen economische activiteiten geconstateerd."
              },
              startDate: {
                day: 7,
                month: 2,
                year: 2013,
                fullDate: "2013-02-07"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440165,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "907349099",
          registrationId: "30203650",
          vatNumber: "NL814341846B01",
          enterpriseId: 268487,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Energie Conversie Maatschappij Bunnik B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Vrumonaweg",
              houseNumber: "2 ",
              postalCode: "3981HT",
              city: "BUNNIK",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 14,
                month: 4,
                year: 2005,
                fullDate: "2005-04-14"
              },
              latitude: 52.06289,
              longitude: 5.20535
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440166,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "931399971",
          registrationId: "60705892",
          vatNumber: "NL854024578B01",
          enterpriseId: 4618477,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Famosa B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Anodeweg",
              houseNumber: "3 ",
              postalCode: "1627LJ",
              city: "HOORN NH",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 19,
                month: 1,
                year: 2016,
                fullDate: "2016-01-19"
              },
              latitude: 52.63993,
              longitude: 5.10253
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440167,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "931400163",
          registrationId: "60706112",
          vatNumber: "NL854024694B01",
          enterpriseId: 4618489,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Sisa Mexico B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Anodeweg",
              houseNumber: "3 ",
              postalCode: "1627LJ",
              city: "HOORN NH",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 21,
                month: 1,
                year: 2016,
                fullDate: "2016-01-21"
              },
              latitude: 52.63993,
              longitude: 5.10253
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440168,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "931401119",
          registrationId: "60707305",
          vatNumber: "NL854025224B01",
          enterpriseId: 4618553,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Sivesa B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Anodeweg",
              houseNumber: "3 ",
              postalCode: "1627LJ",
              city: "HOORN NH",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 21,
                month: 1,
                year: 2016,
                fullDate: "2016-01-21"
              },
              latitude: 52.63993,
              longitude: 5.10253
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440169,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000679253",
          registrationId: "33185544",
          enterpriseId: 41670854,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken CEE Holdings B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_19",
                description:
                  "De activiteiten van dit opgeheven bedrijf zijn voortgezet in een ander bedrijf."
              },
              startDate: {
                day: 1,
                month: 11,
                year: 2016,
                fullDate: "2016-11-01"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_75",
                description: "Dit bedrijf is opgeheven."
              },
              startDate: {
                day: 1,
                month: 11,
                year: 2016,
                fullDate: "2016-11-01"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440172,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000486266",
          registrationId: "30065974",
          vatNumber: "NL005829458B01",
          enterpriseId: 14099,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Shv Holdings N.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Rijnkade",
              houseNumber: "1 ",
              postalCode: "3511LC",
              city: "UTRECHT",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 16,
                month: 6,
                year: 2005,
                fullDate: "2005-06-16"
              },
              latitude: 52.09051,
              longitude: 5.11453
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "A",
                description: "Algemeen"
              },
              type: {
                value: "NL_4",
                description:
                  "Binnen korte tijd is de onderneming bij Graydon ongebruikelijk vaak getoetst."
              },
              startDate: {
                day: 16,
                month: 8,
                year: 2013,
                fullDate: "2013-08-16"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440173,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000595603",
          registrationId: "33174440",
          vatNumber: "NL006650065B01",
          enterpriseId: 552883,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Van Ede & Partners B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Sophialaan",
              houseNumber: "31 ",
              postalCode: "1075BL",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 21,
                month: 11,
                year: 1988,
                fullDate: "1988-11-21"
              },
              latitude: 52.3524,
              longitude: 4.85935
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_15",
                description:
                  "Een verzelfstandiging van een filiaal van dit bedrijf geleid tot het ontstaan van een nieuw bedrijf."
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 1,
                month: 1,
                year: 2009,
                fullDate: "2009-01-01"
              }
            },
            {
              category: {
                value: "O",
                description: "Officiële bedrijfsgegevens"
              },
              type: {
                value: "NL_3",
                description:
                  "Van de onderneming is recentelijk meerdere keren het bij de Kamer van Koophandel geregistreerde adres gewijzigd."
              },
              startDate: {
                day: 11,
                month: 1,
                year: 2018,
                fullDate: "2018-01-11"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440174,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "900444975",
          registrationId: "40530493",
          enterpriseId: 1986587,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName:
            "Flatexploitatievereniging Boterdiepstraat 37 En 39 Te Amsterdam",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Boterdiepstraat",
              houseNumber: "39 2HG",
              postalCode: "1079ST",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 7,
                month: 7,
                year: 2001,
                fullDate: "2001-07-07"
              },
              latitude: 52.34223,
              longitude: 4.90993
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440175,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "906631580",
          registrationId: "34215639",
          vatNumber: "NL814217412B01",
          enterpriseId: 1696723,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Hema B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Ndsm-Straat",
              houseNumber: "10 ",
              postalCode: "1033SB",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 24,
                month: 6,
                year: 2010,
                fullDate: "2010-06-24"
              },
              latitude: 52.40386,
              longitude: 4.88855
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "A",
                description: "Algemeen"
              },
              type: {
                value: "NL_4",
                description:
                  "Binnen korte tijd is de onderneming bij Graydon ongebruikelijk vaak getoetst."
              },
              startDate: {
                day: 25,
                month: 8,
                year: 2013,
                fullDate: "2013-08-25"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 11,
                month: 9,
                year: 2007,
                fullDate: "2007-09-11"
              }
            },
            {
              category: {
                value: "J",
                description: "Jaarrekening"
              },
              type: {
                value: "NL_68",
                description:
                  "In de meest recente jaarrekening komen de eindtotalen van de credit en debet zijden van de balans niet overeen."
              },
              date2: 2018,
              startDate: {
                day: 12,
                month: 4,
                year: 2018,
                fullDate: "2018-04-12"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440176,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "911665994",
          registrationId: "34276760",
          enterpriseId: 2620819,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Dutch Lion Cooperatief U.A.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Barbara Strozzilaan",
              houseNumber: "201 ",
              postalCode: "1083HN",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 8,
                month: 1,
                year: 2015,
                fullDate: "2015-01-08"
              },
              latitude: 52.33603,
              longitude: 4.88678
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "B",
                description: "Bestuur"
              },
              type: {
                value: "NL_12",
                description:
                  "Recentelijk is een wijziging van de hoogste bestuurder opgetreden."
              },
              startDate: {
                day: 3,
                month: 8,
                year: 2018,
                fullDate: "2018-08-03"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440177,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "911781145",
          registrationId: "34277892",
          vatNumber: "NL818216669B01",
          enterpriseId: 2630677,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Comidas Holdings 5 B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Kraaivenstraat",
              houseNumber: "1 ",
              postalCode: "5048AB",
              city: "TILBURG",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 6,
                month: 11,
                year: 2008,
                fullDate: "2008-11-06"
              },
              latitude: 51.58086,
              longitude: 5.06419
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 23,
                month: 12,
                year: 2015,
                fullDate: "2015-12-23"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 24,
                month: 12,
                year: 2015,
                fullDate: "2015-12-24"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440178,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "914030515",
          registrationId: "34306910",
          enterpriseId: 41776430,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Comidas Mergeco B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Schiphol Boulevard",
              houseNumber: "433 ",
              postalCode: "1118BK",
              city: "SCHIPHOL",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.30764,
              longitude: 4.75817
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_19",
                description:
                  "De activiteiten van dit opgeheven bedrijf zijn voortgezet in een ander bedrijf."
              },
              startDate: {
                day: 8,
                month: 10,
                year: 2015,
                fullDate: "2015-10-08"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_75",
                description: "Dit bedrijf is opgeheven."
              },
              startDate: {
                day: 8,
                month: 10,
                year: 2015,
                fullDate: "2015-10-08"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440179,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "905515536",
          registrationId: "34202410",
          enterpriseId: 41816386,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Advang Holding B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Kraaivenstraat",
              houseNumber: "1 ",
              postalCode: "5048AB",
              city: "TILBURG",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 51.58086,
              longitude: 5.06419
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_19",
                description:
                  "De activiteiten van dit opgeheven bedrijf zijn voortgezet in een ander bedrijf."
              },
              startDate: {
                day: 23,
                month: 12,
                year: 2015,
                fullDate: "2015-12-23"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_75",
                description: "Dit bedrijf is opgeheven."
              },
              startDate: {
                day: 23,
                month: 12,
                year: 2015,
                fullDate: "2015-12-23"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440215,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000854205",
          registrationId: "41200618",
          vatNumber: "NL002958120B01",
          enterpriseId: 322823,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Stichting Heineken Pensioenfonds",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Burgemeester Smeetsweg",
              houseNumber: "1 ",
              postalCode: "2382PH",
              city: "ZOETERWOUDE",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.1373,
              longitude: 4.54189
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440220,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "919847455",
          registrationId: "34392113",
          enterpriseId: 3798127,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Stichting Administratiekantoor Roeminck Insurance",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 14,
                month: 5,
                year: 2010,
                fullDate: "2010-05-14"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_69",
                description:
                  "Voor deze stichting/vereniging zijn geen economische activiteiten geconstateerd."
              },
              startDate: {
                day: 14,
                month: 5,
                year: 2010,
                fullDate: "2010-05-14"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440221,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000500768",
          registrationId: "33078624",
          vatNumber: "NL001672022B01",
          enterpriseId: 18341,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Heineken Holding N.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "5 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 19,
                month: 5,
                year: 1983,
                fullDate: "1983-05-19"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440222,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000513846",
          registrationId: "33095020",
          vatNumber: "NL810884100B01",
          enterpriseId: 22266,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Stichting Stadsherstel Amsterdam",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Amstelveld",
              houseNumber: "10 ",
              postalCode: "1017JD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 2,
                month: 7,
                year: 1990,
                fullDate: "1990-07-02"
              },
              latitude: 52.36231,
              longitude: 4.89821
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_19",
                description:
                  "De activiteiten van dit opgeheven bedrijf zijn voortgezet in een ander bedrijf."
              },
              startDate: {
                day: 1,
                month: 11,
                year: 2017,
                fullDate: "2017-11-01"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_21",
                description:
                  "Een deel van de activiteiten van dit bedrijf voortgezet in een ander bedrijf."
              },
              startDate: {
                day: 30,
                month: 4,
                year: 2013,
                fullDate: "2013-04-30"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_75",
                description: "Dit bedrijf is opgeheven."
              },
              startDate: {
                day: 1,
                month: 11,
                year: 2017,
                fullDate: "2017-11-01"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440223,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000015550",
          registrationId: "33003396",
          vatNumber: "NL003569056B01",
          enterpriseId: 492507,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "De Nederlandsche Bank N.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Westeinde",
              houseNumber: "1 ",
              postalCode: "1017ZN",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.35904,
              longitude: 4.89851
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 30,
                month: 10,
                year: 2004,
                fullDate: "2004-10-30"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440224,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "001301017",
          registrationId: "41177286",
          enterpriseId: 614335,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Stichting Administratiekantoor Lauwerecht",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Rijnkade",
              houseNumber: "1 ",
              postalCode: "3511LC",
              city: "UTRECHT",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.09051,
              longitude: 5.11453
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440225,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "900961252",
          registrationId: "41177046",
          enterpriseId: 1678263,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName:
            'Stichting Algemeen Cultureel Fonds Van De Shv "fentener Van Vlissingen Fonds"',
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Rijnkade",
              houseNumber: "1 ",
              postalCode: "3511LC",
              city: "UTRECHT",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 10,
                month: 7,
                year: 2001,
                fullDate: "2001-07-10"
              },
              latitude: 52.09051,
              longitude: 5.11453
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_69",
                description:
                  "Voor deze stichting/vereniging zijn geen economische activiteiten geconstateerd."
              },
              startDate: {
                day: 1,
                month: 8,
                year: 2007,
                fullDate: "2007-08-01"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440226,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "901613134",
          registrationId: "41214443",
          enterpriseId: 1686879,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Stichting Het Rijksmuseum Fonds",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Hobbemastraat",
              houseNumber: "20 ",
              postalCode: "1071ZC",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 29,
                month: 4,
                year: 2004,
                fullDate: "2004-04-29"
              },
              latitude: 52.3587,
              longitude: 4.88583
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440227,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "897654471",
          registrationId: "41151066",
          vatNumber: "NL002975671B01",
          enterpriseId: 1806909,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Stichting Het Nationale Park De Hoge Veluwe",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Apeldoornseweg",
              houseNumber: "250 ",
              postalCode: "7351TA",
              city: "HOENDERLOO",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 15,
                month: 5,
                year: 2000,
                fullDate: "2000-05-15"
              },
              latitude: 52.12396,
              longitude: 5.83288
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440228,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "928470180",
          registrationId: "57841594",
          vatNumber: "NL852759897B01",
          enterpriseId: 4518753,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Stadsherstel Amsterdam N.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Amstelveld",
              houseNumber: "10 ",
              postalCode: "1017JD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.36231,
              longitude: 4.89821
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_28",
                description:
                  "Dit bedrijf zet een deel van de activiteiten voort van een ander bedrijf."
              },
              startDate: {
                day: 30,
                month: 4,
                year: 2013,
                fullDate: "2013-04-30"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440229,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "930420993",
          registrationId: "59706236",
          enterpriseId: 4656117,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Stichting Noordeinde 12",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Albert Hahnplantsoen",
              houseNumber: "23 ",
              postalCode: "1077BM",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 23,
                month: 1,
                year: 2014,
                fullDate: "2014-01-23"
              },
              latitude: 52.351,
              longitude: 4.86883
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_69",
                description:
                  "Voor deze stichting/vereniging zijn geen economische activiteiten geconstateerd."
              },
              startDate: {
                day: 23,
                month: 1,
                year: 2014,
                fullDate: "2014-01-23"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440230,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "934969582",
          registrationId: "64236277",
          enterpriseId: 4868115,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Exor N.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Hoogoorddreef",
              houseNumber: "15 ",
              postalCode: "1101BA",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 8,
                month: 10,
                year: 2015,
                fullDate: "2015-10-08"
              },
              latitude: 52.30924,
              longitude: 4.94551
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "B",
                description: "Bestuur"
              },
              type: {
                value: "NL_12",
                description:
                  "Recentelijk is een wijziging van de hoogste bestuurder opgetreden."
              },
              startDate: {
                day: 29,
                month: 5,
                year: 2018,
                fullDate: "2018-05-29"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440231,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "902315749",
          registrationId: "30177205",
          enterpriseId: 3064627,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Stichting Look Good...Feel Better",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Waterigeweg",
              houseNumber: "31 ",
              postalCode: "3703CM",
              city: "ZEIST",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 20,
                month: 12,
                year: 2001,
                fullDate: "2001-12-20"
              },
              latitude: 52.07741,
              longitude: 5.22977
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440232,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "901097829",
          registrationId: "41223819",
          vatNumber: "NL005827474B01",
          enterpriseId: 674580,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName:
            "Stichting Tot Stimulering Van Sport En Spel In Kennemerland",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Kleverparkweg",
              houseNumber: "75 ",
              postalCode: "2023CC",
              city: "HAARLEM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 14,
                month: 7,
                year: 2016,
                fullDate: "2016-07-14"
              },
              latitude: 52.39287,
              longitude: 4.62792
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440233,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "908967314",
          registrationId: "34242976",
          enterpriseId: 820933,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Brewtech B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Naritaweg",
              houseNumber: "165 TELESTONE 8",
              postalCode: "1043BW",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 30,
                month: 5,
                year: 2016,
                fullDate: "2016-05-30"
              },
              latitude: 52.38674,
              longitude: 4.83328
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440234,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "001119752",
          registrationId: "40516730",
          vatNumber: "NL002565237B01",
          enterpriseId: 46364,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName:
            "Vereniging Tot Behoud Van Natuurmonumenten In Nederland",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Noordereinde",
              houseNumber: "60 ",
              postalCode: "1243JJ",
              city: "'S-GRAVELAND",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.2509,
              longitude: 5.12304
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 1,
                month: 7,
                year: 1999,
                fullDate: "1999-07-01"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 2,
                month: 6,
                year: 2017,
                fullDate: "2017-06-02"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440235,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "001178852",
          registrationId: "33231073",
          vatNumber: "NL009549420B01",
          enterpriseId: 242114,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "ING Groep N.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Bijlmerplein",
              houseNumber: "888 ",
              postalCode: "1102MG",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.3139,
              longitude: 4.95305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440236,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "899696198",
          registrationId: "27178078",
          enterpriseId: 1030282,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Stichting The Young Pianist Foundation",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Olieslagerslaan",
              houseNumber: "1 RD",
              postalCode: "2012EW",
              city: "HAARLEM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 19,
                month: 1,
                year: 2017,
                fullDate: "2017-01-19"
              },
              latitude: 52.37367,
              longitude: 4.62539
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440237,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "903464616",
          registrationId: "34179503",
          enterpriseId: 2444861,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Royal Dutch Shell Plc",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Carel Van Bylandtlaan",
              houseNumber: "30 ",
              postalCode: "2596HR",
              city: "'S-GRAVENHAGE",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 10,
                month: 11,
                year: 2004,
                fullDate: "2004-11-10"
              },
              latitude: 52.09367,
              longitude: 4.31306
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440238,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000105358",
          registrationId: "33014504",
          vatNumber: "NL001440901B01",
          enterpriseId: 2984712,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Het Concertgebouw N.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Concertgebouwplein",
              houseNumber: "2 - 10",
              postalCode: "1071LN",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 14,
                month: 9,
                year: 2010,
                fullDate: "2010-09-14"
              },
              latitude: 52.35582,
              longitude: 4.87823
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 1,
                month: 1,
                year: 2013,
                fullDate: "2013-01-01"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440239,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "893446548",
          registrationId: "33288499",
          enterpriseId: 41686536,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Teucrus B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Arena boulevard",
              houseNumber: "29 ",
              postalCode: "1101AX",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.31383,
              longitude: 4.9391
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_19",
                description:
                  "De activiteiten van dit opgeheven bedrijf zijn voortgezet in een ander bedrijf."
              },
              startDate: {
                day: 10,
                month: 5,
                year: 2016,
                fullDate: "2016-05-10"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 5,
                month: 5,
                year: 2016,
                fullDate: "2016-05-05"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_75",
                description: "Dit bedrijf is opgeheven."
              },
              startDate: {
                day: 10,
                month: 5,
                year: 2016,
                fullDate: "2016-05-10"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440283,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "910036322",
          registrationId: "34256302",
          vatNumber: "NL816981802B01",
          enterpriseId: 2012509,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Horeca European Buying B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_75",
                description: "Dit bedrijf is opgeheven."
              },
              startDate: {
                day: 17,
                month: 7,
                year: 2017,
                fullDate: "2017-07-17"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440284,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "938283588",
          registrationId: "67540481",
          enterpriseId: 2164831,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "La Tropical Holdings B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 H",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 29,
                month: 12,
                year: 2016,
                fullDate: "2016-12-29"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440285,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "903288362",
          registrationId: "34177176",
          vatNumber: "NL810892832B01",
          enterpriseId: 2644369,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Diageo Ghanaian Holdings B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Molenwerf",
              houseNumber: "12 ",
              postalCode: "1014BG",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 12,
                month: 10,
                year: 2015,
                fullDate: "2015-10-12"
              },
              latitude: 52.38564,
              longitude: 4.84892
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_19",
                description:
                  "De activiteiten van dit opgeheven bedrijf zijn voortgezet in een ander bedrijf."
              },
              startDate: {
                day: 30,
                month: 6,
                year: 2018,
                fullDate: "2018-06-30"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_75",
                description: "Dit bedrijf is opgeheven."
              },
              startDate: {
                day: 30,
                month: 6,
                year: 2018,
                fullDate: "2018-06-30"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440286,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "928642399",
          registrationId: "57978387",
          enterpriseId: 4766907,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName:
            "V.V.E. Gebouw Eerste Van Der Helststr. 6 En 8, Hoek Quellijnstr. En Marie Heinekenplein Te Amsterdam",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Mallegat",
              houseNumber: "18 ",
              postalCode: "2282DA",
              city: "RIJSWIJK ZH",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 22,
                month: 10,
                year: 2015,
                fullDate: "2015-10-22"
              },
              latitude: 52.05505,
              longitude: 4.33378
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_69",
                description:
                  "Voor deze stichting/vereniging zijn geen economische activiteiten geconstateerd."
              },
              startDate: {
                day: 13,
                month: 6,
                year: 2013,
                fullDate: "2013-06-13"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440287,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "937240680",
          registrationId: "66502063",
          enterpriseId: 5220976,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Online Drinks B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 H",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 28,
                month: 7,
                year: 2016,
                fullDate: "2016-07-28"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440288,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000589457",
          registrationId: "33167956",
          enterpriseId: 41673253,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Invebra Holland B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_75",
                description: "Dit bedrijf is opgeheven."
              },
              startDate: {
                day: 13,
                month: 2,
                year: 2014,
                fullDate: "2014-02-13"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440289,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "911574859",
          registrationId: "34275045",
          enterpriseId: 41754983,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Store Exploitation B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Amstelstraat",
              houseNumber: "31 ",
              postalCode: "1017DA",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.36626,
              longitude: 4.89922
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_75",
                description: "Dit bedrijf is opgeheven."
              },
              startDate: {
                day: 1,
                month: 4,
                year: 2014,
                fullDate: "2014-04-01"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440298,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000460256",
          registrationId: "24051830",
          vatNumber: "NL001868214B01",
          enterpriseId: 334087,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Unilever N.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Weena",
              houseNumber: "455 ",
              postalCode: "3013AL",
              city: "ROTTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 11,
                month: 9,
                year: 1992,
                fullDate: "1992-09-11"
              },
              latitude: 51.92366,
              longitude: 4.47162
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "A",
                description: "Algemeen"
              },
              type: {
                value: "NL_4",
                description:
                  "Binnen korte tijd is de onderneming bij Graydon ongebruikelijk vaak getoetst."
              },
              startDate: {
                day: 15,
                month: 10,
                year: 2018,
                fullDate: "2018-10-15"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_28",
                description:
                  "Dit bedrijf zet een deel van de activiteiten voort van een ander bedrijf."
              }
            }
          ]
        }
      },
      {
        nodeId: 110440308,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "893215651",
          registrationId: "40537450",
          vatNumber: "NL001418440B01",
          enterpriseId: 1794541,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Vereniging Nederlandse Brouwers",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Dagelijkse Groenmarkt",
              houseNumber: "3 -5",
              postalCode: "2513AL",
              city: "'S-GRAVENHAGE",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 17,
                month: 7,
                year: 2008,
                fullDate: "2008-07-17"
              },
              latitude: 52.07767,
              longitude: 4.30865
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 21,
                month: 12,
                year: 1990,
                fullDate: "1990-12-21"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440309,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000912910",
          registrationId: "33263417",
          enterpriseId: 576120,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Stichting Nationale Opera & Ballet",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Waterlooplein",
              houseNumber: "22 ",
              postalCode: "1011PG",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.3673,
              longitude: 4.90276
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440310,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "906970970",
          registrationId: "34219350",
          enterpriseId: 628997,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Leonberger Holdings B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Claude Debussylaan",
              houseNumber: "34 15TH FLOOR",
              postalCode: "1082MD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 21,
                month: 12,
                year: 2015,
                fullDate: "2015-12-21"
              },
              latitude: 52.33764,
              longitude: 4.87109
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440311,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "905071174",
          registrationId: "34198593",
          vatNumber: "NL812760311B01",
          enterpriseId: 2798414,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Google Netherlands Holdings B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Claude Debussylaan",
              houseNumber: "34 15TH FLOOR",
              postalCode: "1082MD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 8,
                month: 2,
                year: 2016,
                fullDate: "2016-02-08"
              },
              latitude: 52.33764,
              longitude: 4.87109
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440312,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000510886",
          registrationId: "24091886",
          enterpriseId: 20844,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Speciaalstaal B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Jacob Keylaan",
              houseNumber: "2 ",
              postalCode: "2343HT",
              city: "OEGSTGEEST",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 30,
                month: 8,
                year: 2012,
                fullDate: "2012-08-30"
              },
              latitude: 52.18339,
              longitude: 4.48725
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_75",
                description: "Dit bedrijf is opgeheven."
              },
              startDate: {
                day: 1,
                month: 9,
                year: 2018,
                fullDate: "2018-09-01"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440313,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "911119868",
          registrationId: "28115053",
          vatNumber: "NL817739634B01",
          enterpriseId: 2118625,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Straategee B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Jacob Keylaan",
              houseNumber: "2 ",
              postalCode: "2343HT",
              city: "OEGSTGEEST",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 5,
                month: 4,
                year: 2007,
                fullDate: "2007-04-05"
              },
              latitude: 52.18339,
              longitude: 4.48725
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440314,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "891781595",
          registrationId: "40408358",
          vatNumber: "NL003014125B01",
          enterpriseId: 1036564,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName:
            "Icc Nederland, Onderdeel Van Icc, The World Business Organization",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Bezuidenhoutseweg",
              houseNumber: "12 ",
              postalCode: "2594AV",
              city: "'S-GRAVENHAGE",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 15,
                month: 5,
                year: 2000,
                fullDate: "2000-05-15"
              },
              latitude: 52.08404,
              longitude: 4.32642
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440315,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000928906",
          registrationId: "41200089",
          vatNumber: "NL003829200B01",
          enterpriseId: 580315,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Stichting Algemeen Pensioenfonds Klm",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Professor E M Meijersln",
              houseNumber: "1 ",
              postalCode: "1183AV",
              city: "AMSTELVEEN",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.31755,
              longitude: 4.87629
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "J",
                description: "Jaarrekening"
              },
              type: {
                value: "NL_68",
                description:
                  "In de meest recente jaarrekening komen de eindtotalen van de credit en debet zijden van de balans niet overeen."
              },
              date2: 2017,
              startDate: {
                day: 5,
                month: 6,
                year: 2018,
                fullDate: "2018-06-05"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440316,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "904133931",
          registrationId: "14076296",
          vatNumber: "NL811957925B01",
          enterpriseId: 2654737,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "N.V. Holding Businesspark Luchthaven Maastricht",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Vliegveldweg",
              houseNumber: "90 ",
              postalCode: "6199AD",
              city: "MAASTRICHT-AIRPORT",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 27,
                month: 3,
                year: 2003,
                fullDate: "2003-03-27"
              },
              latitude: 50.91554,
              longitude: 5.76915
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440375,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "901049093",
          registrationId: "41194869",
          enterpriseId: 670153,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Stichting Kibiba Huibregtsen Wilton",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Sweelincklaan",
              houseNumber: "113 B",
              postalCode: "3723JD",
              city: "BILTHOVEN",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 4,
                month: 3,
                year: 2010,
                fullDate: "2010-03-04"
              },
              latitude: 52.14836,
              longitude: 5.22719
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440376,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "901052450",
          registrationId: "41197402",
          enterpriseId: 670316,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Stichting Humanitas Onroerende Zaken",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Sarphatistraat",
              houseNumber: "4 ",
              postalCode: "1017WS",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 11,
                month: 7,
                year: 2001,
                fullDate: "2001-07-11"
              },
              latitude: 52.35985,
              longitude: 4.90255
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440377,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "904471403",
          registrationId: "34190935",
          enterpriseId: 1864232,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: 'Vereniging "de Publieke Zaak"',
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Sweelincklaan",
              houseNumber: "113 B",
              postalCode: "3723JD",
              city: "BILTHOVEN",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 25,
                month: 7,
                year: 2011,
                fullDate: "2011-07-25"
              },
              latitude: 52.14836,
              longitude: 5.22719
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440378,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000075924",
          registrationId: "28044039",
          vatNumber: "NL004082023B02",
          enterpriseId: 2558762,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Electrolux Home Products (Nederland) B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Vennootsweg",
              houseNumber: "1 ",
              postalCode: "2404CG",
              city: "ALPHEN AAN DEN RIJN",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 1,
                month: 1,
                year: 1993,
                fullDate: "1993-01-01"
              },
              latitude: 52.13432,
              longitude: 4.63458
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 7,
                month: 6,
                year: 1997,
                fullDate: "1997-06-07"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 11,
                month: 2,
                year: 2015,
                fullDate: "2015-02-11"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440379,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000730152",
          registrationId: "24163261",
          enterpriseId: 41343050,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Engels Holding B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Stationsplein",
              houseNumber: "45 ",
              postalCode: "3013AK",
              city: "ROTTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 51.9235,
              longitude: 4.46949
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_75",
                description: "Dit bedrijf is opgeheven."
              },
              startDate: {
                day: 25,
                month: 8,
                year: 2014,
                fullDate: "2014-08-25"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440380,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000601162",
          registrationId: "28067679",
          enterpriseId: 41516416,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Electrolux Holding B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Vennootsweg",
              houseNumber: "1 - 5",
              postalCode: "2404CG",
              city: "ALPHEN AAN DEN RIJN",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.13432,
              longitude: 4.63458
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_19",
                description:
                  "De activiteiten van dit opgeheven bedrijf zijn voortgezet in een ander bedrijf."
              },
              startDate: {
                day: 11,
                month: 2,
                year: 2015,
                fullDate: "2015-02-11"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 27,
                month: 10,
                year: 2010,
                fullDate: "2010-10-27"
              }
            },
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_75",
                description: "Dit bedrijf is opgeheven."
              },
              startDate: {
                day: 11,
                month: 2,
                year: 2015,
                fullDate: "2015-02-11"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440381,
        companyIdentification: {
          countryCode: "NL",
          registrationId: "40530895",
          enterpriseId: 62807633,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName:
            "HUMANITAS, Nederlandse vereniging voor maatschappelijke dienstverlening en samenlevingsopbouw",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Sarphatistraat",
              houseNumber: "4 ",
              line1: "Sarphatistraat 4, 1017WS Amsterdam",
              postalCode: "1017 WS",
              city: "Amsterdam",
              country: {
                value: "NL",
                description: "Nederland"
              }
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440382,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000779296",
          registrationId: "27120091",
          vatNumber: "NL005621409B01",
          enterpriseId: 988787,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Fugro N.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Veurse Achterweg",
              houseNumber: "10 ",
              postalCode: "2264SG",
              city: "LEIDSCHENDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.09464,
              longitude: 4.40259
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_28",
                description:
                  "Dit bedrijf zet een deel van de activiteiten voort van een ander bedrijf."
              },
              startDate: {
                day: 1,
                month: 11,
                year: 2003,
                fullDate: "2003-11-01"
              }
            },
            {
              category: {
                value: "J",
                description: "Jaarrekening"
              },
              type: {
                value: "NL_39",
                description:
                  "Bij de financiële ratio's van dit bedrijf zijn extreme waarden aangetroffen."
              },
              date2: 2017,
              startDate: {
                day: 30,
                month: 4,
                year: 2018,
                fullDate: "2018-04-30"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440383,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "909801789",
          registrationId: "34253298",
          vatNumber: "NL816103598B01",
          enterpriseId: 2186179,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Nxp Semiconductors N.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "High Tech Campus",
              houseNumber: "60 ",
              postalCode: "5656AG",
              city: "EINDHOVEN",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 16,
                month: 11,
                year: 2006,
                fullDate: "2006-11-16"
              },
              latitude: 51.40858,
              longitude: 5.45639
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440384,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000159948",
          registrationId: "30089954",
          vatNumber: "NL008712207B01",
          enterpriseId: 136083,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Aalberts Industries N.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Sandenburgerlaan",
              houseNumber: "4 ",
              postalCode: "3947CS",
              city: "LANGBROEK",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 20,
                month: 5,
                year: 1998,
                fullDate: "1998-05-20"
              },
              latitude: 52.00745,
              longitude: 5.34508
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "A",
                description: "Algemeen"
              },
              type: {
                value: "NL_4",
                description:
                  "Binnen korte tijd is de onderneming bij Graydon ongebruikelijk vaak getoetst."
              },
              startDate: {
                day: 3,
                month: 2,
                year: 2015,
                fullDate: "2015-02-03"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440385,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000716302",
          registrationId: "33189872",
          enterpriseId: 302509,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Flint Holding N.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Albert Hahnplantsoen",
              houseNumber: "23 ",
              postalCode: "1077BM",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 14,
                month: 5,
                year: 2010,
                fullDate: "2010-05-14"
              },
              latitude: 52.351,
              longitude: 4.86883
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440386,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000477089",
          registrationId: "30058019",
          vatNumber: "NL003227935B02",
          enterpriseId: 340158,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Koninklijke Bam Groep N.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Runnenburg",
              houseNumber: "9 ",
              postalCode: "3981AZ",
              city: "BUNNIK",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 1,
                month: 3,
                year: 1989,
                fullDate: "1989-03-01"
              },
              latitude: 52.0643,
              longitude: 5.19466
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "A",
                description: "Algemeen"
              },
              type: {
                value: "NL_4",
                description:
                  "Binnen korte tijd is de onderneming bij Graydon ongebruikelijk vaak getoetst."
              },
              startDate: {
                day: 26,
                month: 8,
                year: 2013,
                fullDate: "2013-08-26"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440387,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000899303",
          registrationId: "40530150",
          vatNumber: "NL002611077B01",
          enterpriseId: 1020138,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Nederlandse Vereniging Tot Bescherming Van Vogels",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Boulevard",
              houseNumber: "12 ",
              postalCode: "3707BM",
              city: "ZEIST",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 5,
                month: 4,
                year: 2007,
                fullDate: "2007-04-05"
              },
              latitude: 52.09246,
              longitude: 5.25196
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440388,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "912545488",
          registrationId: "32128182",
          vatNumber: "NL818736550B01",
          enterpriseId: 1570904,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "B.V. De Wijde Wieden",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Binnenpad",
              houseNumber: "96 ",
              postalCode: "8355BX",
              city: "GIETHOORN",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 28,
                month: 5,
                year: 2009,
                fullDate: "2009-05-28"
              },
              latitude: 52.71647,
              longitude: 6.08987
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440389,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "920887910",
          registrationId: "50856421",
          vatNumber: "NL822961143B01",
          enterpriseId: 2112968,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Flint Management B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Albert Hahnplantsoen",
              houseNumber: "23 ",
              postalCode: "1077BM",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 7,
                month: 10,
                year: 2010,
                fullDate: "2010-10-07"
              },
              latitude: 52.351,
              longitude: 4.86883
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440390,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000040421",
          registrationId: "05007542",
          enterpriseId: 2360636,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Onderlinge Brandwaarborgvereniging -Giethoorn- W.A.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Ds J J Ketstraat",
              houseNumber: "1 ",
              postalCode: "8355DC",
              city: "GIETHOORN",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 12,
                month: 6,
                year: 1997,
                fullDate: "1997-06-12"
              },
              latitude: 52.72193,
              longitude: 6.08297
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440391,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "897402146",
          registrationId: "24302685",
          vatNumber: "NL811517512B01",
          enterpriseId: 120153,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Groene Energie Administratie B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Pieter De Hoochweg",
              houseNumber: "108 ",
              postalCode: "3024BH",
              city: "ROTTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 21,
                month: 4,
                year: 2011,
                fullDate: "2011-04-21"
              },
              latitude: 51.90789,
              longitude: 4.45906
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "A",
                description: "Algemeen"
              },
              type: {
                value: "NL_4",
                description:
                  "Binnen korte tijd is de onderneming bij Graydon ongebruikelijk vaak getoetst."
              },
              startDate: {
                day: 8,
                month: 5,
                year: 2018,
                fullDate: "2018-05-08"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440392,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "891095500",
          registrationId: "41225442",
          enterpriseId: 164957,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Stichting Barentz Beheer",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Saturnusstraat",
              houseNumber: "15 ",
              postalCode: "2132HB",
              city: "HOOFDDORP",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 11,
                month: 7,
                year: 2001,
                fullDate: "2001-07-11"
              },
              latitude: 52.29471,
              longitude: 4.69915
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440393,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000529309",
          registrationId: "33107678",
          vatNumber: "NL001672046B01",
          enterpriseId: 308148,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Lac B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "5 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 16,
                month: 10,
                year: 2010,
                fullDate: "2010-10-16"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440394,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000592062",
          registrationId: "33170764",
          enterpriseId: 552455,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Praktijkvennootschap M. Das B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Stadhouderskade",
              houseNumber: "22 B",
              postalCode: "1054ES",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 24,
                month: 9,
                year: 2009,
                fullDate: "2009-09-24"
              },
              latitude: 52.36224,
              longitude: 4.88056
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440395,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "897189000",
          registrationId: "34127684",
          vatNumber: "NL809314915B01",
          enterpriseId: 688984,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Advocatenpraktijk M. Das B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Stadhouderskade",
              houseNumber: "22 B",
              postalCode: "1054ES",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 24,
                month: 9,
                year: 2009,
                fullDate: "2009-09-24"
              },
              latitude: 52.36224,
              longitude: 4.88056
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440396,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "917612450",
          registrationId: "24472925",
          enterpriseId: 3316300,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Hoyberg Holding B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Mozartlaan",
              houseNumber: "25 I /2.7",
              postalCode: "1217CM",
              city: "HILVERSUM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 15,
                month: 3,
                year: 2012,
                fullDate: "2012-03-15"
              },
              latitude: 52.2372,
              longitude: 5.15472
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440397,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "910986576",
          registrationId: "34267750",
          enterpriseId: 1544162,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "L'arche Green N.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "5 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 15,
                month: 3,
                year: 2007,
                fullDate: "2007-03-15"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440398,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "917612760",
          registrationId: "24472967",
          enterpriseId: 3316309,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Greenfee B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Mozartlaan",
              houseNumber: "25 I /2.7",
              postalCode: "1217CM",
              city: "HILVERSUM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 15,
                month: 3,
                year: 2012,
                fullDate: "2012-03-15"
              },
              latitude: 52.2372,
              longitude: 5.15472
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440399,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "917612426",
          registrationId: "24472919",
          enterpriseId: 42853811,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Hoyberg Holding B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Mozartlaan",
              houseNumber: "25 i /2.7",
              postalCode: "1217CM",
              city: "HILVERSUM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              latitude: 52.2372,
              longitude: 5.15472
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_75",
                description: "Dit bedrijf is opgeheven."
              },
              startDate: {
                day: 14,
                month: 12,
                year: 2015,
                fullDate: "2015-12-14"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440400,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "900344091",
          registrationId: "40446017",
          enterpriseId: 1786537,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Sportvereniging Ajax Sportman Combinatie",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Duivenvoordestraat",
              houseNumber: "1 ",
              postalCode: "2341JE",
              city: "OEGSTGEEST",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 24,
                month: 12,
                year: 2003,
                fullDate: "2003-12-24"
              },
              latitude: 52.1781,
              longitude: 4.47205
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440401,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "900351284",
          registrationId: "40447267",
          enterpriseId: 1788029,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Vereniging Van Vrienden Van De Leidse Hout",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Prinses Beatrixlaan",
              houseNumber: "43 ",
              postalCode: "2341TW",
              city: "OEGSTGEEST",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 7,
                month: 4,
                year: 2011,
                fullDate: "2011-04-07"
              },
              latitude: 52.1826,
              longitude: 4.47507
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440406,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "920115918",
          registrationId: "50082930",
          enterpriseId: 3902412,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Vereniging Van Eigenaars Van Het Gebouw Fagelstraat 94",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Fagelstraat",
              houseNumber: "94 3",
              postalCode: "1052GJ",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 21,
                month: 6,
                year: 2010,
                fullDate: "2010-06-21"
              },
              latitude: 52.38009,
              longitude: 4.87476
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_69",
                description:
                  "Voor deze stichting/vereniging zijn geen economische activiteiten geconstateerd."
              },
              startDate: {
                day: 21,
                month: 6,
                year: 2010,
                fullDate: "2010-06-21"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440407,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000219799",
          registrationId: "33023960",
          vatNumber: "NL001438657B01",
          enterpriseId: 112247,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "B.V. Exploitatie Maatschappij Carre",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Amstel",
              houseNumber: "115 - 125",
              postalCode: "1018EM",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 22,
                month: 12,
                year: 2008,
                fullDate: "2008-12-22"
              },
              latitude: 52.36237,
              longitude: 4.90388
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440408,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000367262",
          registrationId: "30039220",
          enterpriseId: 524555,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: 'Utrechtse Beheer Maatschappij "catharijne" B.V.',
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Langbroekerdijk A",
              houseNumber: "97 ",
              postalCode: "3947BE",
              city: "LANGBROEK",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 24,
                month: 11,
                year: 2004,
                fullDate: "2004-11-24"
              },
              latitude: 52.01159,
              longitude: 5.32136
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440409,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000803976",
          registrationId: "33202517",
          vatNumber: "NL001896143B01",
          enterpriseId: 998695,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Wolters Kluwer N.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Zuidpoolsingel",
              houseNumber: "2 ",
              postalCode: "2408ZE",
              city: "ALPHEN AAN DEN RIJN",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 21,
                month: 9,
                year: 2009,
                fullDate: "2009-09-21"
              },
              latitude: 52.12659,
              longitude: 4.65408
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "A",
                description: "Algemeen"
              },
              type: {
                value: "NL_4",
                description:
                  "Binnen korte tijd is de onderneming bij Graydon ongebruikelijk vaak getoetst."
              },
              startDate: {
                day: 17,
                month: 10,
                year: 2018,
                fullDate: "2018-10-17"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440410,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "920751814",
          registrationId: "50733931",
          enterpriseId: 2100288,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Teluca B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Langbroekerdijk A",
              houseNumber: "97 ",
              postalCode: "3947BE",
              city: "LANGBROEK",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 16,
                month: 9,
                year: 2010,
                fullDate: "2010-09-16"
              },
              latitude: 52.01159,
              longitude: 5.32136
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_26",
                description:
                  "Dit bedrijf zet de activiteiten voort van een ander, opgeheven bedrijf."
              },
              startDate: {
                day: 7,
                month: 10,
                year: 2014,
                fullDate: "2014-10-07"
              }
            },
            {
              category: {
                value: "J",
                description: "Jaarrekening"
              },
              type: {
                value: "NL_39",
                description:
                  "Bij de financiële ratio's van dit bedrijf zijn extreme waarden aangetroffen."
              },
              date2: 2017,
              startDate: {
                day: 12,
                month: 4,
                year: 2018,
                fullDate: "2018-04-12"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440411,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "905074610",
          registrationId: "30191949",
          enterpriseId: 2798565,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Stichting African Parks Foundation",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Langbroekerdijk A",
              houseNumber: "97 ",
              postalCode: "3947BE",
              city: "LANGBROEK",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 25,
                month: 6,
                year: 2008,
                fullDate: "2008-06-25"
              },
              latitude: 52.01159,
              longitude: 5.32136
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "BA",
                description: "Bedrijfsactiviteiten"
              },
              type: {
                value: "NL_69",
                description:
                  "Voor deze stichting/vereniging zijn geen economische activiteiten geconstateerd."
              },
              startDate: {
                day: 1,
                month: 8,
                year: 2007,
                fullDate: "2007-08-01"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440412,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "937025186",
          registrationId: "66285372",
          enterpriseId: 5330370,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Juquba B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Krullenlaan",
              houseNumber: "1 ",
              postalCode: "2061HT",
              city: "BLOEMENDAAL",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 30,
                month: 6,
                year: 2016,
                fullDate: "2016-06-30"
              },
              latitude: 52.41059,
              longitude: 4.62284
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440483,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000003468",
          registrationId: "21000730",
          vatNumber: "NL004488209B01",
          enterpriseId: 38,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Drankenhandel Wauters B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Hogeweg",
              houseNumber: "2 D",
              postalCode: "4561RA",
              city: "HULST",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 28,
                month: 11,
                year: 2008,
                fullDate: "2008-11-28"
              },
              latitude: 51.27032,
              longitude: 4.04317
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440484,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000215674",
          registrationId: "01023642",
          vatNumber: "NL003904568B01",
          enterpriseId: 110451,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Kooyman's Drankenhandel B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Nieuwe Dijk",
              houseNumber: "25 ",
              postalCode: "8881HC",
              city: "TERSCHELLING WEST",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 15,
                month: 5,
                year: 2008,
                fullDate: "2008-05-15"
              },
              latitude: 53.36908,
              longitude: 5.23938
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440485,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000015913",
          registrationId: "01011906",
          vatNumber: "NL001139460B01",
          enterpriseId: 492589,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Drankenhandel Metz B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Achterdijken",
              houseNumber: "80 B",
              postalCode: "9163JV",
              city: "NES AMELAND",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 14,
                month: 4,
                year: 2005,
                fullDate: "2005-04-14"
              },
              latitude: 53.44207,
              longitude: 5.7647
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440486,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "907494846",
          registrationId: "34225280",
          vatNumber: "NL814656833B01",
          enterpriseId: 728411,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Rambam B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Willem Fenengastraat",
              houseNumber: "16 ",
              postalCode: "1096BN",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 22,
                month: 11,
                year: 2012,
                fullDate: "2012-11-22"
              },
              latitude: 52.33497,
              longitude: 4.91948
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440487,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000312717",
          registrationId: "01070370",
          vatNumber: "NL001340335B01",
          enterpriseId: 784617,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Drankenhandel Houter B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Dorpsstraat",
              houseNumber: "48 ",
              postalCode: "8899AJ",
              city: "VLIELAND",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 1,
                month: 1,
                year: 1995,
                fullDate: "1995-01-01"
              },
              latitude: 53.29615,
              longitude: 5.07089
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440488,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "000063056",
          registrationId: "31010298",
          enterpriseId: 2554170,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Gooiland Herontwikkeling B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Zinkwerf",
              houseNumber: "67 ",
              postalCode: "2544EC",
              city: "'S-GRAVENHAGE",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2012,
                fullDate: "2012-10-18"
              },
              latitude: 52.0455,
              longitude: 4.24567
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440489,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "911337075",
          registrationId: "34272445",
          vatNumber: "NL817900123B01",
          enterpriseId: 2828641,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Bedrijfsconcepten Nederland B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Tweede Weteringplantsoen",
              houseNumber: "21 ",
              postalCode: "1017ZD",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 18,
                month: 10,
                year: 2007,
                fullDate: "2007-10-18"
              },
              latitude: 52.3591,
              longitude: 4.89305
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "J",
                description: "Jaarrekening"
              },
              type: {
                value: "NL_41",
                description: "De jaarrekening is gelijk aan het voorgaande jaar"
              },
              date2: 2017,
              startDate: {
                day: 11,
                month: 12,
                year: 2018,
                fullDate: "2018-12-11"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440497,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "899581080",
          registrationId: "17104566",
          enterpriseId: 720320,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Stichting Preferente Aandelen Asml",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "De Run",
              houseNumber: "6501 ",
              postalCode: "5504DR",
              city: "VELDHOVEN",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 25,
                month: 9,
                year: 2003,
                fullDate: "2003-09-25"
              },
              latitude: 51.40393,
              longitude: 5.41497
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440498,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "892519908",
          registrationId: "33280000",
          enterpriseId: 1268061,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Holding Pricewaterhousecoopers Nederland B.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Thomas R. Malthusstraat",
              houseNumber: "5 ",
              postalCode: "1066JR",
              city: "AMSTERDAM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 12,
                month: 1,
                year: 2006,
                fullDate: "2006-01-12"
              },
              latitude: 52.3396,
              longitude: 4.82288
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      },
      {
        nodeId: 110440499,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "889705240",
          registrationId: "16074305",
          enterpriseId: 1454091,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Nutreco N.V.",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Prins Frederiklaan",
              houseNumber: "4 ",
              postalCode: "3818KC",
              city: "AMERSFOORT",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 21,
                month: 1,
                year: 2016,
                fullDate: "2016-01-21"
              },
              latitude: 52.14814,
              longitude: 5.36921
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        },
        xseptionsProfile: {
          xseptions: [
            {
              category: {
                value: "A",
                description: "Algemeen"
              },
              type: {
                value: "NL_4",
                description:
                  "Binnen korte tijd is de onderneming bij Graydon ongebruikelijk vaak getoetst."
              },
              startDate: {
                day: 30,
                month: 5,
                year: 2018,
                fullDate: "2018-05-30"
              }
            },
            {
              category: {
                value: "B",
                description: "Bestuur"
              },
              type: {
                value: "NL_12",
                description:
                  "Recentelijk is een wijziging van de hoogste bestuurder opgetreden."
              },
              startDate: {
                day: 27,
                month: 9,
                year: 2018,
                fullDate: "2018-09-27"
              }
            }
          ]
        }
      },
      {
        nodeId: 110440500,
        companyIdentification: {
          countryCode: "NL",
          graydonCompanyId: "913727881",
          registrationId: "34303231",
          vatNumber: "NL819533828B01",
          enterpriseId: 3214121,
          requestLanguage: "NL"
        },
        companyProfile: {
          companyName: "Stichting Frans Hals Museum | De Hallen Haarlem",
          addresses: [
            {
              type: "PHYSICAL",
              streetName: "Groot Heiligland",
              houseNumber: "62 ",
              postalCode: "2011ES",
              city: "HAARLEM",
              country: {
                value: "NL",
                description: "Nederland"
              },
              startDate: {
                day: 19,
                month: 6,
                year: 2008,
                fullDate: "2008-06-19"
              },
              latitude: 52.37689,
              longitude: 4.63379
            }
          ],
          companyStatus: {
            isactive: "Y",
            hasFinancialCalamities: "N"
          }
        }
      }
    ],
    persons: [
      {
        nodeId: 110440002,
        personId: 1020605992,
        surName: "Jansen",
        dateOfBirth: {
          day: 30,
          month: 9,
          year: 1958,
          fullDate: "1958-09-30"
        }
      },
      {
        nodeId: 110440003,
        personId: 1024154997,
        surName: "Tejero del Rio",
        dateOfBirth: {
          day: 18,
          month: 7,
          year: 1966,
          fullDate: "1966-07-18"
        }
      },
      {
        nodeId: 110440004,
        personId: 1005131329,
        gender: "M",
        initials: "JFML",
        surNamePrefix: "van",
        surName: "Boxmeer"
      },
      {
        nodeId: 110440005,
        personId: 1019553914,
        gender: "M",
        initials: "M",
        surName: "Das",
        dateOfBirth: {
          day: 19,
          month: 6,
          year: 1948,
          fullDate: "1948-06-19"
        },
        placeOfBirth: "Amsterdam",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440006,
        personId: 1019696176,
        surName: "Scheffers",
        dateOfBirth: {
          day: 13,
          month: 1,
          year: 1948,
          fullDate: "1948-01-13"
        }
      },
      {
        nodeId: 110440007,
        personId: 1020100226,
        gender: "M",
        initials: "JM",
        surNamePrefix: "de",
        surName: "Jong",
        dateOfBirth: {
          day: 21,
          month: 6,
          year: 1945,
          fullDate: "1945-06-21"
        },
        placeOfBirth: "Heerlen",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440008,
        personId: 1020605984,
        gender: "F",
        initials: "IP",
        surNamePrefix: "van der",
        surName: "Horst-Feenstra",
        dateOfBirth: {
          day: 16,
          month: 6,
          year: 1963,
          fullDate: "1963-06-16"
        },
        placeOfBirth: "Leiden",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440009,
        personId: 1020665426,
        gender: "F",
        initials: "AM",
        surName: "Siderius-Fentener Van Vlissingen",
        dateOfBirth: {
          day: 14,
          month: 4,
          year: 1961,
          fullDate: "1961-04-14"
        },
        placeOfBirth: "Delft",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440010,
        personId: 1020695944,
        surName: "Melzer",
        dateOfBirth: {
          day: 16,
          month: 12,
          year: 1969,
          fullDate: "1969-12-16"
        }
      },
      {
        nodeId: 110440011,
        personId: 1021570450,
        gender: "M",
        initials: "MR",
        surNamePrefix: "de",
        surName: "Carvalho",
        dateOfBirth: {
          day: 21,
          month: 7,
          year: 1944,
          fullDate: "1944-07-21"
        },
        placeOfBirth: "Gerrards Cross",
        countryOfBirth: {
          value: "GB",
          description: "Verenigd Koninkrijk"
        }
      },
      {
        nodeId: 110440012,
        personId: 1021570468,
        gender: "M",
        initials: "JW",
        surName: "Kortenoever",
        dateOfBirth: {
          day: 3,
          month: 5,
          year: 1956,
          fullDate: "1956-05-03"
        },
        placeOfBirth: "Zaandam",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440013,
        personId: 1021691579,
        gender: "F",
        initials: "LP",
        surName: "Geenen-Van Straaten",
        dateOfBirth: {
          day: 18,
          month: 6,
          year: 1961,
          fullDate: "1961-06-18"
        },
        placeOfBirth: "Rotterdam",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440014,
        personId: 1022550113,
        surName: "Koster",
        dateOfBirth: {
          day: 16,
          month: 4,
          year: 1953,
          fullDate: "1953-04-16"
        },
        placeOfBirth: "Amsterdam",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440015,
        personId: 1022749087,
        gender: "M",
        initials: "BAC",
        surNamePrefix: "van den",
        surName: "Huijsen",
        dateOfBirth: {
          day: 7,
          month: 11,
          year: 1966,
          fullDate: "1966-11-07"
        },
        placeOfBirth: "Schijndel",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440016,
        personId: 1022749194,
        surName: "Keulen",
        dateOfBirth: {
          day: 26,
          month: 7,
          year: 1964,
          fullDate: "1964-07-26"
        }
      },
      {
        nodeId: 110440017,
        personId: 1023218249,
        gender: "M",
        initials: "GJ",
        surName: "Wijers",
        dateOfBirth: {
          day: 11,
          month: 1,
          year: 1951,
          fullDate: "1951-01-11"
        },
        placeOfBirth: "Oostburg",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440018,
        personId: 1023484312,
        gender: "M",
        initials: "SA",
        surNamePrefix: "van",
        surName: "Maasakker",
        dateOfBirth: {
          day: 21,
          month: 9,
          year: 1959,
          fullDate: "1959-09-21"
        },
        placeOfBirth: "Amersfoort",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440019,
        personId: 1023702655,
        gender: "M",
        initials: "RP",
        surName: "Hoytema Van Konijnenburg",
        dateOfBirth: {
          day: 9,
          month: 8,
          year: 1957,
          fullDate: "1957-08-09"
        },
        placeOfBirth: "Leiden",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440020,
        personId: 1024237941,
        gender: "M",
        initials: "CPG",
        surName: "Bramer",
        dateOfBirth: {
          day: 15,
          month: 6,
          year: 1969,
          fullDate: "1969-06-15"
        },
        placeOfBirth: "Eindhoven",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440021,
        personId: 1024395582,
        gender: "M",
        initials: "RJS",
        surName: "Huet",
        dateOfBirth: {
          day: 14,
          month: 4,
          year: 1969,
          fullDate: "1969-04-14"
        },
        placeOfBirth: "Farnborough",
        countryOfBirth: {
          value: "GB",
          description: "Verenigd Koninkrijk"
        }
      },
      {
        nodeId: 110440022,
        personId: 1024943654,
        surName: "Parson",
        dateOfBirth: {
          day: 2,
          month: 8,
          year: 1968,
          fullDate: "1968-08-02"
        }
      },
      {
        nodeId: 110440023,
        personId: 1028165916,
        gender: "M",
        initials: "VCOBJ",
        surName: "Navarre",
        dateOfBirth: {
          day: 25,
          month: 10,
          year: 1958,
          fullDate: "1958-10-25"
        },
        placeOfBirth: "Uccle",
        countryOfBirth: {
          value: "BE",
          description: "België"
        }
      },
      {
        nodeId: 110440024,
        personId: 1028405965,
        gender: "M",
        initials: "EWA",
        surNamePrefix: "van de",
        surName: "Weert",
        dateOfBirth: {
          day: 6,
          month: 5,
          year: 1974,
          fullDate: "1974-05-06"
        },
        placeOfBirth: "Duisburg",
        countryOfBirth: {
          value: "DE",
          description: "Duitsland"
        }
      },
      {
        nodeId: 110440025,
        personId: 1028713194,
        surName: "van den Berg",
        dateOfBirth: {
          day: 11,
          month: 2,
          year: 1973,
          fullDate: "1973-02-11"
        }
      },
      {
        nodeId: 110440026,
        personId: 1028846069,
        surName: "van Popta",
        dateOfBirth: {
          day: 21,
          month: 12,
          year: 1972,
          fullDate: "1972-12-21"
        }
      },
      {
        nodeId: 110440027,
        personId: 1029064860,
        gender: "F",
        initials: "JAV",
        surName: "Fernandez Carbajal",
        dateOfBirth: {
          day: 15,
          month: 2,
          year: 1954,
          fullDate: "1954-02-15"
        },
        placeOfBirth: "Puebla",
        countryOfBirth: {
          value: "MX",
          description: "Mexico"
        }
      },
      {
        nodeId: 110440028,
        personId: 1029064878,
        gender: "M",
        initials: "JG",
        surName: "Astaburuaga Sanjines",
        dateOfBirth: {
          day: 30,
          month: 7,
          year: 1959,
          fullDate: "1959-07-30"
        },
        placeOfBirth: "Tampico Tamaulipas",
        countryOfBirth: {
          value: "MX",
          description: "Mexico"
        }
      },
      {
        nodeId: 110440029,
        personId: 1029547559,
        gender: "F",
        initials: "M",
        surName: "Helmes",
        dateOfBirth: {
          day: 20,
          month: 12,
          year: 1965,
          fullDate: "1965-12-20"
        },
        placeOfBirth: "Emmerich Am Rhein",
        countryOfBirth: {
          value: "DE",
          description: "Duitsland"
        }
      },
      {
        nodeId: 110440030,
        personId: 1030075566,
        gender: "M",
        initials: "DR",
        surName: "Jonkheer Hooft Graafland",
        dateOfBirth: {
          day: 24,
          month: 9,
          year: 1955,
          fullDate: "1955-09-24"
        },
        placeOfBirth: "Rotterdam",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440031,
        personId: 1030075574,
        surName: "Van Boxmeer",
        dateOfBirth: {
          day: 12,
          month: 9,
          year: 1961,
          fullDate: "1961-09-12"
        }
      },
      {
        nodeId: 110440032,
        personId: 1030111460,
        gender: "F",
        initials: "Y",
        surName: "Brunini",
        dateOfBirth: {
          day: 28,
          month: 10,
          year: 1969,
          fullDate: "1969-10-28"
        },
        placeOfBirth: "Istanbul",
        countryOfBirth: {
          value: "TR",
          description: "Turkije"
        }
      },
      {
        nodeId: 110440033,
        personId: 1032252601,
        surName: "Wright",
        dateOfBirth: {
          day: 1,
          month: 8,
          year: 1960,
          fullDate: "1960-08-01"
        },
        placeOfBirth: "Washington D.C.",
        countryOfBirth: {
          value: "US",
          description: "Verenigde Staten"
        }
      },
      {
        nodeId: 110440034,
        personId: 1032533844,
        surName: "Simons",
        dateOfBirth: {
          day: 24,
          month: 9,
          year: 1982,
          fullDate: "1982-09-24"
        }
      },
      {
        nodeId: 110440035,
        personId: 1034319663,
        surName: "Siouffi - Debroux",
        dateOfBirth: {
          day: 25,
          month: 7,
          year: 1969,
          fullDate: "1969-07-25"
        }
      },
      {
        nodeId: 110440036,
        personId: 1034961142,
        surName: "Martens",
        dateOfBirth: {
          day: 23,
          month: 6,
          year: 1978,
          fullDate: "1978-06-23"
        }
      },
      {
        nodeId: 110440037,
        personId: 1036175014,
        surName: "Groot - Spanjer",
        dateOfBirth: {
          day: 17,
          month: 5,
          year: 1963,
          fullDate: "1963-05-17"
        }
      },
      {
        nodeId: 110440038,
        personId: 1504339043
      },
      {
        nodeId: 110440076,
        personId: 1021454101,
        gender: "M",
        initials: "PP",
        surNamePrefix: "de",
        surName: "Ridder",
        dateOfBirth: {
          day: 9,
          month: 3,
          year: 1956,
          fullDate: "1956-03-09"
        },
        placeOfBirth: "Amsterdam",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440077,
        personId: 1022777351,
        gender: "M",
        initials: "MWHM",
        surName: "Goumans",
        dateOfBirth: {
          day: 16,
          month: 8,
          year: 1956,
          fullDate: "1956-08-16"
        },
        placeOfBirth: "Venray",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440078,
        personId: 1024097352,
        gender: "M",
        initials: "EA",
        surName: "Schuckink Kool",
        dateOfBirth: {
          day: 7,
          month: 10,
          year: 1972,
          fullDate: "1972-10-07"
        },
        placeOfBirth: "'s-Gravenhage",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440079,
        personId: 1024943720,
        gender: "M",
        initials: "PHA",
        surName: "Gilet",
        dateOfBirth: {
          day: 7,
          month: 12,
          year: 1963,
          fullDate: "1963-12-07"
        },
        placeOfBirth: "Neuilly-Sur-Seine",
        countryOfBirth: {
          value: "FR",
          description: "Frankrijk"
        }
      },
      {
        nodeId: 110440080,
        personId: 1025503705,
        surName: "van den Bosch",
        dateOfBirth: {
          day: 9,
          month: 2,
          year: 1968,
          fullDate: "1968-02-09"
        },
        placeOfBirth: "Beverwijk",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440081,
        personId: 1027500543,
        surName: "Bakker",
        dateOfBirth: {
          day: 28,
          month: 5,
          year: 1961,
          fullDate: "1961-05-28"
        }
      },
      {
        nodeId: 110440082,
        personId: 1027500600,
        gender: "M",
        initials: "CJM",
        surNamePrefix: "de",
        surName: "Vries",
        dateOfBirth: {
          day: 18,
          month: 10,
          year: 1975,
          fullDate: "1975-10-18"
        },
        placeOfBirth: "'s-Hertogenbosch",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440083,
        personId: 1033242023,
        gender: "M",
        initials: "GEAD",
        surName: "Minnart",
        dateOfBirth: {
          day: 30,
          month: 6,
          year: 1966,
          fullDate: "1966-06-30"
        },
        placeOfBirth: "Tienen",
        countryOfBirth: {
          value: "BE",
          description: "België"
        }
      },
      {
        nodeId: 110440084,
        personId: 1035523503,
        surName: "Keen",
        dateOfBirth: {
          day: 29,
          month: 12,
          year: 1971,
          fullDate: "1971-12-29"
        }
      },
      {
        nodeId: 110440085,
        personId: 1035600897,
        surName: "Plomp",
        dateOfBirth: {
          day: 25,
          month: 12,
          year: 1980,
          fullDate: "1980-12-25"
        }
      },
      {
        nodeId: 110440086,
        personId: 1035766300,
        surName: "Terpstra",
        dateOfBirth: {
          day: 27,
          month: 7,
          year: 1979,
          fullDate: "1979-07-27"
        },
        placeOfBirth: "'s-Gravenhage",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440087,
        personId: 1035766318,
        gender: "F",
        initials: "L",
        surName: "Lagumdzija",
        dateOfBirth: {
          day: 6,
          month: 1,
          year: 1983,
          fullDate: "1983-01-06"
        },
        placeOfBirth: "Foca",
        countryOfBirth: {
          value: "RS",
          description: "Servië"
        }
      },
      {
        nodeId: 110440088,
        personId: 1035787165,
        surName: "van Os",
        dateOfBirth: {
          day: 7,
          month: 3,
          year: 1985,
          fullDate: "1985-03-07"
        }
      },
      {
        nodeId: 110440089,
        personId: 1504281633
      },
      {
        nodeId: 110440091,
        personId: 1020770069,
        gender: "M",
        initials: "BS",
        surName: "Vriens",
        dateOfBirth: {
          day: 28,
          month: 7,
          year: 1946,
          fullDate: "1946-07-28"
        },
        placeOfBirth: "Amersfoort",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440092,
        personId: 1028114682,
        gender: "M",
        initials: "AJ",
        surName: "Krooswijk",
        dateOfBirth: {
          day: 23,
          month: 5,
          year: 1947,
          fullDate: "1947-05-23"
        },
        placeOfBirth: "Rotterdam",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440093,
        personId: 1256451491,
        gender: "F",
        initials: "J",
        surName: "Veenman"
      },
      {
        nodeId: 110440094,
        personId: 1256789742,
        gender: "M",
        initials: "V",
        surNamePrefix: "de",
        surName: "Croock"
      },
      {
        nodeId: 110440095,
        personId: 1503957886
      },
      {
        nodeId: 110440096,
        personId: 1021218779,
        surName: "de Koning - Ghijsen",
        dateOfBirth: {
          day: 8,
          month: 10,
          year: 1961,
          fullDate: "1961-10-08"
        }
      },
      {
        nodeId: 110440097,
        personId: 1030442758,
        gender: "F",
        initials: "GF",
        surName: "Jonkvrouw Hopmans-Beelaerts Van Blokland",
        dateOfBirth: {
          day: 14,
          month: 9,
          year: 1978,
          fullDate: "1978-09-14"
        },
        placeOfBirth: "Nijmegen",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440098,
        personId: 1020606388,
        surName: "Siderius",
        dateOfBirth: {
          day: 14,
          month: 11,
          year: 1958,
          fullDate: "1958-11-14"
        }
      },
      {
        nodeId: 110440099,
        personId: 1022749152,
        gender: "M",
        initials: "FE",
        surName: "Eusman",
        dateOfBirth: {
          day: 30,
          month: 7,
          year: 1962,
          fullDate: "1962-07-30"
        },
        placeOfBirth: "Zaandam",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440100,
        personId: 1022749202,
        gender: "M",
        initials: "AP",
        surNamePrefix: "van der",
        surName: "Woude",
        dateOfBirth: {
          day: 29,
          month: 10,
          year: 1966,
          fullDate: "1966-10-29"
        },
        placeOfBirth: "'s-Gravenhage",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440101,
        personId: 1023244641,
        surName: "Gross",
        dateOfBirth: {
          day: 1,
          month: 1,
          year: 1958,
          fullDate: "1958-01-01"
        }
      },
      {
        nodeId: 110440102,
        personId: 1023244823,
        gender: "M",
        initials: "RW",
        surName: "Memar",
        dateOfBirth: {
          day: 1,
          month: 4,
          year: 1966,
          fullDate: "1966-04-01"
        },
        placeOfBirth: "Delft",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440103,
        personId: 1024383455,
        gender: "M",
        initials: "CAJ",
        surNamePrefix: "van",
        surName: "Steenbergen",
        dateOfBirth: {
          day: 17,
          month: 5,
          year: 1956,
          fullDate: "1956-05-17"
        },
        placeOfBirth: "Beerse",
        countryOfBirth: {
          value: "BE",
          description: "België"
        }
      },
      {
        nodeId: 110440104,
        personId: 1026125284,
        surName: "Carlsson",
        dateOfBirth: {
          day: 17,
          month: 1,
          year: 1968,
          fullDate: "1968-01-17"
        }
      },
      {
        nodeId: 110440105,
        personId: 1026494508,
        surName: "Bonofacio",
        dateOfBirth: {
          day: 19,
          month: 6,
          year: 1967,
          fullDate: "1967-06-19"
        }
      },
      {
        nodeId: 110440106,
        personId: 1026878387,
        gender: "M",
        initials: "AJ",
        surName: "Goebel",
        dateOfBirth: {
          day: 20,
          month: 1,
          year: 1965,
          fullDate: "1965-01-20"
        },
        placeOfBirth: "Heerlen",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440107,
        personId: 1027500675,
        gender: "M",
        initials: "IY",
        surName: "Ong",
        dateOfBirth: {
          day: 5,
          month: 2,
          year: 1970,
          fullDate: "1970-02-05"
        },
        placeOfBirth: "Zaandam",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440108,
        personId: 1030077273,
        gender: "F",
        initials: "AE",
        surName: "Dekker-Teague",
        dateOfBirth: {
          day: 19,
          month: 2,
          year: 1959,
          fullDate: "1959-02-19"
        },
        placeOfBirth: "Eindhoven",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440109,
        personId: 1034546539,
        gender: "F",
        initials: "DH",
        surNamePrefix: "de",
        surName: "Graeff-Dirkzwager",
        dateOfBirth: {
          day: 11,
          month: 3,
          year: 1980,
          fullDate: "1980-03-11"
        },
        placeOfBirth: "Manama",
        countryOfBirth: {
          value: "BH",
          description: "Bahrein"
        }
      },
      {
        nodeId: 110440110,
        personId: 1034598308,
        gender: "F",
        initials: "RH",
        surName: "Bromley",
        dateOfBirth: {
          day: 22,
          month: 6,
          year: 1972,
          fullDate: "1972-06-22"
        },
        placeOfBirth: "Rotherham",
        countryOfBirth: {
          value: "GB",
          description: "Verenigd Koninkrijk"
        }
      },
      {
        nodeId: 110440111,
        personId: 1035766102,
        gender: "M",
        initials: "HM",
        surName: "Le Faou",
        dateOfBirth: {
          day: 26,
          month: 5,
          year: 1967,
          fullDate: "1967-05-26"
        },
        placeOfBirth: "Parijs",
        countryOfBirth: {
          value: "FR",
          description: "Frankrijk"
        }
      },
      {
        nodeId: 110440112,
        personId: 1035957677,
        gender: "M",
        initials: "RA",
        surNamePrefix: "van",
        surName: "Oppen",
        dateOfBirth: {
          day: 4,
          month: 11,
          year: 1970,
          fullDate: "1970-11-04"
        },
        placeOfBirth: "Utrecht",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440113,
        personId: 1501201907
      },
      {
        nodeId: 110440114,
        personId: 1501316937
      },
      {
        nodeId: 110440115,
        personId: 1501414914
      },
      {
        nodeId: 110440116,
        personId: 1501451528
      },
      {
        nodeId: 110440117,
        personId: 1502268517
      },
      {
        nodeId: 110440118,
        personId: 1502569534
      },
      {
        nodeId: 110440119,
        personId: 1503233932
      },
      {
        nodeId: 110440120,
        personId: 1504452846
      },
      {
        nodeId: 110440121,
        personId: 1504493279
      },
      {
        nodeId: 110440122,
        personId: 1504695766
      },
      {
        nodeId: 110440123,
        personId: 1505299709
      },
      {
        nodeId: 110440124,
        personId: 1505474880
      },
      {
        nodeId: 110440125,
        personId: 1506360443
      },
      {
        nodeId: 110440126,
        personId: 1506503315
      },
      {
        nodeId: 110440127,
        personId: 1009579226,
        gender: "M",
        initials: "SA",
        surNamePrefix: "van",
        surName: "Maasakker"
      },
      {
        nodeId: 110440128,
        personId: 1021691777,
        surName: "Knulst",
        dateOfBirth: {
          day: 27,
          month: 10,
          year: 1958,
          fullDate: "1958-10-27"
        }
      },
      {
        nodeId: 110440129,
        personId: 1022910713,
        gender: "M",
        initials: "WJ",
        surNamePrefix: "van der",
        surName: "Hoeven",
        dateOfBirth: {
          day: 22,
          month: 6,
          year: 1967,
          fullDate: "1967-06-22"
        },
        placeOfBirth: "Leiden",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440130,
        personId: 1023310418,
        gender: "M",
        initials: "DFM",
        surName: "Leleu",
        dateOfBirth: {
          day: 27,
          month: 10,
          year: 1966,
          fullDate: "1966-10-27"
        },
        placeOfBirth: "La Tronche",
        countryOfBirth: {
          value: "FR",
          description: "Frankrijk"
        }
      },
      {
        nodeId: 110440131,
        personId: 1024448282,
        surName: "Lubbers",
        dateOfBirth: {
          day: 17,
          month: 2,
          year: 1969,
          fullDate: "1969-02-17"
        }
      },
      {
        nodeId: 110440132,
        personId: 1026494441,
        surName: "de Bruin",
        dateOfBirth: {
          day: 9,
          month: 7,
          year: 1962,
          fullDate: "1962-07-09"
        }
      },
      {
        nodeId: 110440133,
        personId: 1026949626,
        surName: "Deelen",
        dateOfBirth: {
          day: 31,
          month: 3,
          year: 1963,
          fullDate: "1963-03-31"
        }
      },
      {
        nodeId: 110440134,
        personId: 1027078433,
        gender: "M",
        initials: "WJJM",
        surNamePrefix: "van",
        surName: "Waesberghe",
        dateOfBirth: {
          day: 19,
          month: 7,
          year: 1964,
          fullDate: "1964-07-19"
        },
        placeOfBirth: "Wamel",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440135,
        personId: 1028846077,
        gender: "M",
        initials: "O",
        surName: "Wijngaard",
        dateOfBirth: {
          day: 3,
          month: 5,
          year: 1974,
          fullDate: "1974-05-03"
        },
        placeOfBirth: "Arnhem",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440136,
        personId: 1028846093,
        gender: "M",
        initials: "OE",
        surName: "Flippo",
        dateOfBirth: {
          day: 21,
          month: 1,
          year: 1963,
          fullDate: "1963-01-21"
        },
        placeOfBirth: "Middelburg",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440137,
        personId: 1028846101,
        gender: "M",
        initials: "LHB",
        surName: "Lockefeer",
        dateOfBirth: {
          day: 29,
          month: 1,
          year: 1969,
          fullDate: "1969-01-29"
        },
        placeOfBirth: "Amsterdam",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440138,
        personId: 1028896965,
        gender: "F",
        initials: "CMP",
        surName: "Morelli",
        dateOfBirth: {
          day: 28,
          month: 1,
          year: 1960,
          fullDate: "1960-01-28"
        },
        placeOfBirth: "Premosello",
        countryOfBirth: {
          value: "IT",
          description: "Italië"
        }
      },
      {
        nodeId: 110440139,
        personId: 1030747818,
        gender: "F",
        initials: "MN",
        surName: "Bulhak",
        dateOfBirth: {
          day: 23,
          month: 5,
          year: 1972,
          fullDate: "1972-05-23"
        },
        placeOfBirth: "Warschau",
        countryOfBirth: {
          value: "PL",
          description: "Polen"
        }
      },
      {
        nodeId: 110440140,
        personId: 1030826265,
        gender: "M",
        initials: "RCL",
        surName: "Verstappen",
        dateOfBirth: {
          day: 2,
          month: 9,
          year: 1955,
          fullDate: "1955-09-02"
        },
        placeOfBirth: "Merksem",
        countryOfBirth: {
          value: "BE",
          description: "België"
        }
      },
      {
        nodeId: 110440141,
        personId: 1031774639,
        surName: "Schilthuis",
        dateOfBirth: {
          day: 23,
          month: 1,
          year: 1962,
          fullDate: "1962-01-23"
        }
      },
      {
        nodeId: 110440142,
        personId: 1032423533,
        surName: "Schaft",
        dateOfBirth: {
          day: 14,
          month: 3,
          year: 1973,
          fullDate: "1973-03-14"
        }
      },
      {
        nodeId: 110440143,
        personId: 1032643288,
        gender: "M",
        initials: "JD",
        surName: "Jonkheer Van Karnebeek",
        dateOfBirth: {
          day: 12,
          month: 4,
          year: 1967,
          fullDate: "1967-04-12"
        },
        placeOfBirth: "'s-Gravenhage",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440144,
        personId: 1035811262,
        surName: "Dijkstra - Winstanley",
        dateOfBirth: {
          day: 11,
          month: 12,
          year: 1974,
          fullDate: "1974-12-11"
        }
      },
      {
        nodeId: 110440145,
        personId: 1035845344,
        surName: "Merino de Juti",
        dateOfBirth: {
          day: 6,
          month: 5,
          year: 1968,
          fullDate: "1968-05-06"
        }
      },
      {
        nodeId: 110440146,
        personId: 1501410649
      },
      {
        nodeId: 110440147,
        personId: 1501727380
      },
      {
        nodeId: 110440148,
        personId: 1501758559
      },
      {
        nodeId: 110440149,
        personId: 1501793606
      },
      {
        nodeId: 110440150,
        personId: 1502050766
      },
      {
        nodeId: 110440151,
        personId: 1502213885
      },
      {
        nodeId: 110440152,
        personId: 1502824236
      },
      {
        nodeId: 110440153,
        personId: 1503039248
      },
      {
        nodeId: 110440154,
        personId: 1503318436
      },
      {
        nodeId: 110440155,
        personId: 1503550210
      },
      {
        nodeId: 110440156,
        personId: 1504155829
      },
      {
        nodeId: 110440157,
        personId: 1504161520
      },
      {
        nodeId: 110440158,
        personId: 1504212422
      },
      {
        nodeId: 110440159,
        personId: 1504553700
      },
      {
        nodeId: 110440160,
        personId: 1505045482
      },
      {
        nodeId: 110440161,
        personId: 1505056240
      },
      {
        nodeId: 110440162,
        personId: 1505092500
      },
      {
        nodeId: 110440163,
        personId: 1505744902
      },
      {
        nodeId: 110440164,
        personId: 1506004223
      },
      {
        nodeId: 110440170,
        personId: 1025170638,
        surName: "Appel",
        dateOfBirth: {
          day: 18,
          month: 4,
          year: 1963,
          fullDate: "1963-04-18"
        }
      },
      {
        nodeId: 110440171,
        personId: 1030039000,
        surName: "van der Lingen",
        dateOfBirth: {
          day: 3,
          month: 5,
          year: 1976,
          fullDate: "1976-05-03"
        }
      },
      {
        nodeId: 110440180,
        personId: 1015365743,
        gender: "M",
        initials: "PHA",
        surName: "Gilet"
      },
      {
        nodeId: 110440181,
        personId: 1020324701,
        gender: "M",
        initials: "WV",
        surName: "Vogt",
        dateOfBirth: {
          day: 15,
          month: 11,
          year: 1964,
          fullDate: "1964-11-15"
        },
        placeOfBirth: "Grenchen",
        countryOfBirth: {
          value: "CH",
          description: "Zwitserland"
        }
      },
      {
        nodeId: 110440182,
        personId: 1033245471,
        gender: "M",
        initials: "GEA",
        surName: "Minnart",
        dateOfBirth: {
          day: 30,
          month: 6,
          year: 1966,
          fullDate: "1966-06-30"
        },
        placeOfBirth: "Tienen",
        countryOfBirth: {
          value: "BE",
          description: "België"
        }
      },
      {
        nodeId: 110440183,
        personId: 1504137884
      },
      {
        nodeId: 110440184,
        personId: 1505279131
      },
      {
        nodeId: 110440185,
        personId: 1014389082,
        gender: "M",
        initials: "HR",
        surNamePrefix: "de",
        surName: "Ruiter"
      },
      {
        nodeId: 110440186,
        personId: 1019599354,
        gender: "M",
        initials: "P",
        surName: "Legro",
        dateOfBirth: {
          day: 11,
          month: 11,
          year: 1937,
          fullDate: "1937-11-11"
        },
        placeOfBirth: "Groningen",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440187,
        personId: 1020016372,
        surName: "Tromp",
        dateOfBirth: {
          day: 11,
          month: 11,
          year: 1955,
          fullDate: "1955-11-11"
        }
      },
      {
        nodeId: 110440188,
        personId: 1020605976,
        surName: "Oliemans",
        dateOfBirth: {
          day: 26,
          month: 12,
          year: 1957,
          fullDate: "1957-12-26"
        },
        placeOfBirth: "Den Helder",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440189,
        personId: 1020730550,
        gender: "M",
        initials: "HR",
        surNamePrefix: "de",
        surName: "Ruiter",
        dateOfBirth: {
          day: 18,
          month: 10,
          year: 1960,
          fullDate: "1960-10-18"
        },
        placeOfBirth: "Lagunillas",
        countryOfBirth: {
          value: "VE",
          description: "Venezuela"
        }
      },
      {
        nodeId: 110440190,
        personId: 1021691637,
        gender: "M",
        initials: "G",
        surNamePrefix: "van",
        surName: "Loo",
        dateOfBirth: {
          day: 25,
          month: 11,
          year: 1961,
          fullDate: "1961-11-25"
        },
        placeOfBirth: "Apeldoorn",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440191,
        personId: 1023245739,
        gender: "M",
        initials: "PA",
        surNamePrefix: "van der",
        surName: "Meulen",
        dateOfBirth: {
          day: 4,
          month: 6,
          year: 1962,
          fullDate: "1962-06-04"
        },
        placeOfBirth: "Napier",
        countryOfBirth: {
          value: "NZ",
          description: "Nieuw-Zeeland"
        }
      },
      {
        nodeId: 110440192,
        personId: 1023245762,
        gender: "M",
        initials: "WS",
        surNamePrefix: "de",
        surName: "Jonge",
        dateOfBirth: {
          day: 10,
          month: 3,
          year: 1963,
          fullDate: "1963-03-10"
        },
        placeOfBirth: "Eindhoven",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440193,
        personId: 1023302241,
        gender: "M",
        initials: "F",
        surName: "Huijgen",
        dateOfBirth: {
          day: 5,
          month: 9,
          year: 1943,
          fullDate: "1943-09-05"
        },
        placeOfBirth: "Utrecht",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440194,
        personId: 1024155028,
        gender: "M",
        initials: "HA",
        surName: "Wymenga",
        dateOfBirth: {
          day: 21,
          month: 12,
          year: 1964,
          fullDate: "1964-12-21"
        },
        placeOfBirth: "Smallingerland",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440195,
        personId: 1024602201,
        gender: "M",
        initials: "BJA",
        surNamePrefix: "van",
        surName: "Schaik",
        dateOfBirth: {
          day: 13,
          month: 7,
          year: 1944,
          fullDate: "1944-07-13"
        },
        placeOfBirth: "Wijk Bij Duurstede",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440196,
        personId: 1025330968,
        gender: "F",
        initials: "PA",
        surName: "Hissink",
        dateOfBirth: {
          day: 17,
          month: 4,
          year: 1969,
          fullDate: "1969-04-17"
        },
        placeOfBirth: "Hengelo (O)",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440197,
        personId: 1026949634,
        gender: "M",
        initials: "MH",
        surName: "Spits",
        dateOfBirth: {
          day: 29,
          month: 11,
          year: 1974,
          fullDate: "1974-11-29"
        },
        placeOfBirth: "Amstelveen",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440198,
        personId: 1026949659,
        gender: "M",
        initials: "MFM",
        surName: "Brantjes",
        dateOfBirth: {
          day: 10,
          month: 8,
          year: 1970,
          fullDate: "1970-08-10"
        },
        placeOfBirth: "Nijmegen",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440199,
        personId: 1027500642,
        gender: "M",
        initials: "AB",
        surName: "Westenbrink",
        dateOfBirth: {
          day: 10,
          month: 11,
          year: 1976,
          fullDate: "1976-11-10"
        },
        placeOfBirth: "Ede",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440200,
        personId: 1029455613,
        surName: "Braams",
        dateOfBirth: {
          day: 6,
          month: 7,
          year: 1965,
          fullDate: "1965-07-06"
        },
        placeOfBirth: "Rotterdam",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440201,
        personId: 1031281510,
        surName: "Sanders - de Boer",
        dateOfBirth: {
          day: 26,
          month: 4,
          year: 1969,
          fullDate: "1969-04-26"
        },
        placeOfBirth: "Alkmaar",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440202,
        personId: 1035349735,
        surName: "Orlowski",
        dateOfBirth: {
          day: 31,
          month: 8,
          year: 1966,
          fullDate: "1966-08-31"
        }
      },
      {
        nodeId: 110440203,
        personId: 1035993516,
        gender: "M",
        initials: "PJ",
        surName: "Legro",
        dateOfBirth: {
          day: 11,
          month: 11,
          year: 1937,
          fullDate: "1937-11-11"
        },
        placeOfBirth: "Groningen",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440204,
        personId: 1501547325
      },
      {
        nodeId: 110440205,
        personId: 1501610909
      },
      {
        nodeId: 110440206,
        personId: 1502282690
      },
      {
        nodeId: 110440207,
        personId: 1502320557
      },
      {
        nodeId: 110440208,
        personId: 1502770249
      },
      {
        nodeId: 110440209,
        personId: 1503770784
      },
      {
        nodeId: 110440210,
        personId: 1504006931
      },
      {
        nodeId: 110440211,
        personId: 1504258052
      },
      {
        nodeId: 110440212,
        personId: 1504846179
      },
      {
        nodeId: 110440213,
        personId: 1505028561
      },
      {
        nodeId: 110440214,
        personId: 1506293537
      },
      {
        nodeId: 110440216,
        personId: 1002483871,
        gender: "M",
        initials: "E",
        surName: "Bloem"
      },
      {
        nodeId: 110440217,
        personId: 1021795990,
        gender: "M",
        initials: "E",
        surName: "Bloem",
        dateOfBirth: {
          day: 23,
          month: 2,
          year: 1955,
          fullDate: "1955-02-23"
        },
        placeOfBirth: "Rotterdam",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440218,
        personId: 1026745669,
        gender: "M",
        initials: "FQHS",
        surNamePrefix: "van",
        surName: "Woerkom",
        dateOfBirth: {
          day: 18,
          month: 2,
          year: 1963,
          fullDate: "1963-02-18"
        },
        placeOfBirth: "Arnhem",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440219,
        personId: 1506074911
      },
      {
        nodeId: 110440240,
        personId: 1022643090,
        surName: "Buikhuisen",
        dateOfBirth: {
          day: 16,
          month: 7,
          year: 1960,
          fullDate: "1960-07-16"
        }
      },
      {
        nodeId: 110440241,
        personId: 1024798181,
        surName: "van der Kwast - Westendorp",
        dateOfBirth: {
          day: 21,
          month: 9,
          year: 1976,
          fullDate: "1976-09-21"
        }
      },
      {
        nodeId: 110440242,
        personId: 1024943662,
        surName: "Smits",
        dateOfBirth: {
          day: 1,
          month: 4,
          year: 1969,
          fullDate: "1969-04-01"
        }
      },
      {
        nodeId: 110440243,
        personId: 1026761377,
        surName: "Rolfers",
        dateOfBirth: {
          day: 14,
          month: 11,
          year: 1969,
          fullDate: "1969-11-14"
        }
      },
      {
        nodeId: 110440244,
        personId: 1028405981,
        surName: "Santry",
        dateOfBirth: {
          day: 6,
          month: 1,
          year: 1971,
          fullDate: "1971-01-06"
        }
      },
      {
        nodeId: 110440245,
        personId: 1028846085,
        surName: "Goethart",
        dateOfBirth: {
          day: 7,
          month: 7,
          year: 1960,
          fullDate: "1960-07-07"
        }
      },
      {
        nodeId: 110440246,
        personId: 1029108501,
        surName: "Muller",
        dateOfBirth: {
          day: 2,
          month: 10,
          year: 1970,
          fullDate: "1970-10-02"
        }
      },
      {
        nodeId: 110440247,
        personId: 1030075665,
        surName: "Van der Borght",
        dateOfBirth: {
          day: 14,
          month: 1,
          year: 1962,
          fullDate: "1962-01-14"
        }
      },
      {
        nodeId: 110440248,
        personId: 1030077679,
        surName: "Eagar",
        dateOfBirth: {
          day: 19,
          month: 5,
          year: 1972,
          fullDate: "1972-05-19"
        }
      },
      {
        nodeId: 110440249,
        personId: 1030715500,
        surName: "de Gruyter",
        dateOfBirth: {
          day: 7,
          month: 9,
          year: 1981,
          fullDate: "1981-09-07"
        }
      },
      {
        nodeId: 110440250,
        personId: 1030747479,
        surName: "Di Tondo",
        dateOfBirth: {
          day: 8,
          month: 5,
          year: 1971,
          fullDate: "1971-05-08"
        }
      },
      {
        nodeId: 110440251,
        personId: 1032155069,
        surName: "van de Braak",
        dateOfBirth: {
          day: 9,
          month: 5,
          year: 1975,
          fullDate: "1975-05-09"
        }
      },
      {
        nodeId: 110440252,
        personId: 1032643346,
        surName: "van der Meer",
        dateOfBirth: {
          day: 31,
          month: 1,
          year: 1971,
          fullDate: "1971-01-31"
        }
      },
      {
        nodeId: 110440253,
        personId: 1033040880,
        surName: "Koenjer",
        dateOfBirth: {
          day: 13,
          month: 7,
          year: 1966,
          fullDate: "1966-07-13"
        }
      },
      {
        nodeId: 110440254,
        personId: 1033605674,
        surName: "Wilson",
        dateOfBirth: {
          day: 2,
          month: 2,
          year: 1963,
          fullDate: "1963-02-02"
        }
      },
      {
        nodeId: 110440255,
        personId: 1034902955,
        surName: "Drenth",
        dateOfBirth: {
          day: 5,
          month: 2,
          year: 1968,
          fullDate: "1968-02-05"
        }
      },
      {
        nodeId: 110440256,
        personId: 1034903045,
        surName: "Linck",
        dateOfBirth: {
          day: 24,
          month: 9,
          year: 1956,
          fullDate: "1956-09-24"
        }
      },
      {
        nodeId: 110440257,
        personId: 1034903052,
        surName: "Pirmez",
        dateOfBirth: {
          day: 21,
          month: 2,
          year: 1960,
          fullDate: "1960-02-21"
        }
      },
      {
        nodeId: 110440258,
        personId: 1035698610,
        surName: "Jacobs",
        dateOfBirth: {
          day: 3,
          month: 9,
          year: 1965,
          fullDate: "1965-09-03"
        }
      },
      {
        nodeId: 110440259,
        personId: 1035765914,
        surName: "van der Waal",
        dateOfBirth: {
          day: 20,
          month: 6,
          year: 1983,
          fullDate: "1983-06-20"
        }
      },
      {
        nodeId: 110440260,
        personId: 1035864394,
        surName: "van Karnebeek",
        dateOfBirth: {
          day: 12,
          month: 4,
          year: 1967,
          fullDate: "1967-04-12"
        }
      },
      {
        nodeId: 110440261,
        personId: 1138311400,
        surName: "Porter",
        dateOfBirth: {
          day: 23,
          month: 10,
          year: 1964,
          fullDate: "1964-10-23"
        }
      },
      {
        nodeId: 110440262,
        personId: 1175118700,
        surName: "Eusman",
        dateOfBirth: {
          day: 30,
          month: 7,
          year: 1962,
          fullDate: "1962-07-30"
        }
      },
      {
        nodeId: 110440263,
        personId: 1501125585,
        surName: "Bennaars",
        dateOfBirth: {
          day: 10,
          month: 2,
          year: 1971,
          fullDate: "1971-02-10"
        }
      },
      {
        nodeId: 110440264,
        personId: 1512320589,
        surName: "van Steenbergen",
        dateOfBirth: {
          day: 17,
          month: 5,
          year: 1956,
          fullDate: "1956-05-17"
        }
      },
      {
        nodeId: 110440265,
        personId: 1512321991,
        surName: "Lanfermeijer",
        dateOfBirth: {
          day: 10,
          month: 2,
          year: 1964,
          fullDate: "1964-02-10"
        }
      },
      {
        nodeId: 110440266,
        personId: 1512322403,
        surName: "Vuijk",
        dateOfBirth: {
          day: 17,
          month: 12,
          year: 1965,
          fullDate: "1965-12-17"
        }
      },
      {
        nodeId: 110440267,
        personId: 1512322411,
        surName: "Siemer",
        dateOfBirth: {
          day: 22,
          month: 12,
          year: 1965,
          fullDate: "1965-12-22"
        }
      },
      {
        nodeId: 110440268,
        personId: 1512322445,
        surName: "van der Vooren",
        dateOfBirth: {
          day: 2,
          month: 2,
          year: 1966,
          fullDate: "1966-02-02"
        }
      },
      {
        nodeId: 110440269,
        personId: 1512322635,
        surName: "Nieman",
        dateOfBirth: {
          day: 20,
          month: 11,
          year: 1966,
          fullDate: "1966-11-20"
        }
      },
      {
        nodeId: 110440270,
        personId: 1512322809,
        surName: "Vries",
        dateOfBirth: {
          day: 5,
          month: 6,
          year: 1967,
          fullDate: "1967-06-05"
        }
      },
      {
        nodeId: 110440271,
        personId: 1512323450,
        surName: "Ong",
        dateOfBirth: {
          day: 5,
          month: 2,
          year: 1970,
          fullDate: "1970-02-05"
        }
      },
      {
        nodeId: 110440272,
        personId: 1512324011,
        surName: "Sandoval Aguilar",
        dateOfBirth: {
          day: 8,
          month: 7,
          year: 1971,
          fullDate: "1971-07-08"
        }
      },
      {
        nodeId: 110440273,
        personId: 1512324250,
        surName: "Porres Ortega",
        dateOfBirth: {
          day: 28,
          month: 2,
          year: 1972,
          fullDate: "1972-02-28"
        }
      },
      {
        nodeId: 110440274,
        personId: 1512324268,
        surName: "de Boer",
        dateOfBirth: {
          day: 28,
          month: 2,
          year: 1972,
          fullDate: "1972-02-28"
        }
      },
      {
        nodeId: 110440275,
        personId: 1512324292,
        surName: "Poletto",
        dateOfBirth: {
          day: 17,
          month: 4,
          year: 1972,
          fullDate: "1972-04-17"
        }
      },
      {
        nodeId: 110440276,
        personId: 1512324334,
        surName: "Hamaker",
        dateOfBirth: {
          day: 23,
          month: 4,
          year: 1972,
          fullDate: "1972-04-23"
        }
      },
      {
        nodeId: 110440277,
        personId: 1512324375,
        surName: "Bułhak",
        dateOfBirth: {
          day: 23,
          month: 5,
          year: 1972,
          fullDate: "1972-05-23"
        }
      },
      {
        nodeId: 110440278,
        personId: 1512324870,
        surName: "van de Weert",
        dateOfBirth: {
          day: 6,
          month: 5,
          year: 1974,
          fullDate: "1974-05-06"
        }
      },
      {
        nodeId: 110440279,
        personId: 1512325166,
        surName: "Blauw",
        dateOfBirth: {
          day: 21,
          month: 1,
          year: 1975,
          fullDate: "1975-01-21"
        }
      },
      {
        nodeId: 110440280,
        personId: 1512325273,
        surName: "Cutolo",
        dateOfBirth: {
          day: 2,
          month: 4,
          year: 1975,
          fullDate: "1975-04-02"
        }
      },
      {
        nodeId: 110440281,
        personId: 1512325620,
        surName: "Sanchez",
        dateOfBirth: {
          day: 27,
          month: 5,
          year: 1976,
          fullDate: "1976-05-27"
        }
      },
      {
        nodeId: 110440282,
        personId: 1512326164,
        surName: "Lodigiani",
        dateOfBirth: {
          day: 20,
          month: 2,
          year: 1978,
          fullDate: "1978-02-20"
        }
      },
      {
        nodeId: 110440290,
        personId: 1036271995,
        gender: "M",
        initials: "GH",
        surName: "Scholten",
        dateOfBirth: {
          day: 2,
          month: 6,
          year: 1976,
          fullDate: "1976-06-02"
        },
        placeOfBirth: "Ommen",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440291,
        personId: 1020822332,
        gender: "M",
        initials: "HF",
        surName: "Bohm",
        dateOfBirth: {
          day: 17,
          month: 2,
          year: 1972,
          fullDate: "1972-02-17"
        },
        placeOfBirth: "Alphen Aan Den Rijn",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440292,
        personId: 1032433797,
        gender: "M",
        initials: "SJ",
        surName: "Hoogerdijk",
        dateOfBirth: {
          day: 2,
          month: 7,
          year: 1973,
          fullDate: "1973-07-02"
        },
        placeOfBirth: "Deventer",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440293,
        personId: 1036271987,
        gender: "M",
        initials: "AM",
        surName: "Wynia",
        dateOfBirth: {
          day: 10,
          month: 3,
          year: 1971,
          fullDate: "1971-03-10"
        },
        placeOfBirth: "Leiden",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440294,
        personId: 1036272001,
        gender: "M",
        initials: "W",
        surName: "Fahrner",
        dateOfBirth: {
          day: 27,
          month: 3,
          year: 1984,
          fullDate: "1984-03-27"
        },
        placeOfBirth: "Bruck An Der Mur",
        countryOfBirth: {
          value: "AT",
          description: "Oostenrijk"
        }
      },
      {
        nodeId: 110440295,
        personId: 1501538753
      },
      {
        nodeId: 110440296,
        personId: 1503065144
      },
      {
        nodeId: 110440297,
        personId: 1014936783,
        gender: "M",
        initials: "GF",
        surName: "Keulen"
      },
      {
        nodeId: 110440299,
        personId: 1260831548,
        gender: "M",
        initials: "E.",
        surName: "Bloem"
      },
      {
        nodeId: 110440300,
        personId: 1001667359,
        gender: "M",
        initials: "MAM",
        surName: "Brand"
      },
      {
        nodeId: 110440301,
        personId: 1023245796,
        surName: "van der Wal",
        dateOfBirth: {
          day: 10,
          month: 12,
          year: 1966,
          fullDate: "1966-12-10"
        }
      },
      {
        nodeId: 110440302,
        personId: 1026022168,
        gender: "F",
        initials: "JW",
        surName: "Kapteijn",
        dateOfBirth: {
          day: 6,
          month: 7,
          year: 1973,
          fullDate: "1973-07-06"
        },
        placeOfBirth: "Koudekerk Aan Den Rijn",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440303,
        personId: 1035503117,
        surName: "Vissers",
        dateOfBirth: {
          day: 24,
          month: 12,
          year: 1984,
          fullDate: "1984-12-24"
        }
      },
      {
        nodeId: 110440304,
        personId: 1256728732,
        gender: "M",
        initials: "R",
        surNamePrefix: "van der",
        surName: "Meulen"
      },
      {
        nodeId: 110440305,
        personId: 1502088022
      },
      {
        nodeId: 110440306,
        personId: 1502732421
      },
      {
        nodeId: 110440307,
        personId: 1504907260
      },
      {
        nodeId: 110440317,
        personId: 1035213998,
        gender: "M",
        initials: "SH",
        surName: "Prawiranegara",
        dateOfBirth: {
          day: 10,
          month: 12,
          year: 1976,
          fullDate: "1976-12-10"
        },
        placeOfBirth: "Delft",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440318,
        personId: 1022748931,
        gender: "M",
        initials: "GJ",
        surName: "Loggers",
        dateOfBirth: {
          day: 5,
          month: 10,
          year: 1956,
          fullDate: "1956-10-05"
        },
        placeOfBirth: "Roosendaal En Nispen",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440319,
        personId: 1022749160,
        gender: "M",
        initials: "TA",
        surNamePrefix: "de",
        surName: "Man",
        dateOfBirth: {
          day: 5,
          month: 1,
          year: 1948,
          fullDate: "1948-01-05"
        },
        placeOfBirth: "Rotterdam",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440320,
        personId: 1023391046,
        gender: "M",
        initials: "JMA",
        surName: "Geertman",
        dateOfBirth: {
          day: 25,
          month: 8,
          year: 1975,
          fullDate: "1975-08-25"
        },
        placeOfBirth: "Leiderdorp",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440321,
        personId: 1024943639,
        gender: "M",
        initials: "MP",
        surName: "Bekkers",
        dateOfBirth: {
          day: 1,
          month: 9,
          year: 1971,
          fullDate: "1971-09-01"
        },
        placeOfBirth: "Veldhoven",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440322,
        personId: 1024943688,
        gender: "M",
        initials: "AJL",
        surName: "Puthaar",
        dateOfBirth: {
          day: 27,
          month: 5,
          year: 1961,
          fullDate: "1961-05-27"
        },
        placeOfBirth: "Deventer",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440323,
        personId: 1025503747,
        gender: "M",
        initials: "JFM",
        surName: "Wiggers",
        dateOfBirth: {
          day: 9,
          month: 1,
          year: 1965,
          fullDate: "1965-01-09"
        },
        placeOfBirth: "Vught",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440324,
        personId: 1027078383,
        gender: "F",
        initials: "MC",
        surName: "Brugmans",
        dateOfBirth: {
          day: 24,
          month: 8,
          year: 1962,
          fullDate: "1962-08-24"
        },
        placeOfBirth: "Vlaardingen",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440325,
        personId: 1027078391,
        gender: "M",
        initials: "JPJ",
        surNamePrefix: "de",
        surName: "Jong",
        dateOfBirth: {
          day: 7,
          month: 12,
          year: 1962,
          fullDate: "1962-12-07"
        },
        placeOfBirth: "Rotterdam",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440326,
        personId: 1027078441,
        gender: "M",
        initials: "HGJ",
        surName: "Welten",
        dateOfBirth: {
          day: 1,
          month: 1,
          year: 1958,
          fullDate: "1958-01-01"
        },
        placeOfBirth: "Deurne",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440327,
        personId: 1027078458,
        gender: "M",
        initials: "HJM",
        surName: "Heijlands",
        dateOfBirth: {
          day: 30,
          month: 6,
          year: 1964,
          fullDate: "1964-06-30"
        },
        placeOfBirth: "Brunssum",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440328,
        personId: 1027078466,
        gender: "M",
        initials: "CMAM",
        surName: "Schouten",
        dateOfBirth: {
          day: 5,
          month: 10,
          year: 1964,
          fullDate: "1964-10-05"
        },
        placeOfBirth: "Veghel",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440329,
        personId: 1028645370,
        gender: "M",
        initials: "J",
        surName: "Koole",
        dateOfBirth: {
          day: 16,
          month: 12,
          year: 1965,
          fullDate: "1965-12-16"
        },
        placeOfBirth: "Middelburg",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440330,
        personId: 1028645388,
        gender: "M",
        initials: "AT",
        surNamePrefix: "van der",
        surName: "Linden",
        dateOfBirth: {
          day: 7,
          month: 1,
          year: 1970,
          fullDate: "1970-01-07"
        },
        placeOfBirth: "Deventer",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440331,
        personId: 1031774647,
        gender: "M",
        initials: "JP",
        surNamePrefix: "van",
        surName: "Kempen",
        dateOfBirth: {
          day: 22,
          month: 8,
          year: 1962,
          fullDate: "1962-08-22"
        },
        placeOfBirth: "Leiden",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440332,
        personId: 1033591346,
        gender: "M",
        initials: "PN",
        surName: "Hoffman",
        dateOfBirth: {
          day: 11,
          month: 5,
          year: 1959,
          fullDate: "1959-05-11"
        },
        placeOfBirth: "Birmingham",
        countryOfBirth: {
          value: "GB",
          description: "Verenigd Koninkrijk"
        }
      },
      {
        nodeId: 110440333,
        personId: 1034382141,
        gender: "M",
        initials: "R",
        surName: "Mataheroe",
        dateOfBirth: {
          day: 24,
          month: 4,
          year: 1970,
          fullDate: "1970-04-24"
        },
        placeOfBirth: "Dordrecht",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440334,
        personId: 1035027869,
        gender: "M",
        initials: "G",
        surName: "Sorce",
        dateOfBirth: {
          day: 2,
          month: 5,
          year: 1965,
          fullDate: "1965-05-02"
        },
        placeOfBirth: "Messina",
        countryOfBirth: {
          value: "IT",
          description: "Italië"
        }
      },
      {
        nodeId: 110440335,
        personId: 1035027877,
        gender: "F",
        initials: "YWHM",
        surName: "Mars",
        dateOfBirth: {
          day: 8,
          month: 12,
          year: 1962,
          fullDate: "1962-12-08"
        },
        placeOfBirth: "Raalte",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440336,
        personId: 1035027885,
        gender: "M",
        initials: "L",
        surName: "Pomini",
        dateOfBirth: {
          day: 13,
          month: 10,
          year: 1961,
          fullDate: "1961-10-13"
        },
        placeOfBirth: "Treviso",
        countryOfBirth: {
          value: "IT",
          description: "Italië"
        }
      },
      {
        nodeId: 110440337,
        personId: 1035027893,
        gender: "M",
        initials: "TG",
        surName: "Meijer",
        dateOfBirth: {
          day: 30,
          month: 3,
          year: 1976,
          fullDate: "1976-03-30"
        },
        placeOfBirth: "Alkemade",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440338,
        personId: 1035027901,
        gender: "F",
        initials: "WK",
        surName: "Visser",
        dateOfBirth: {
          day: 29,
          month: 1,
          year: 1971,
          fullDate: "1971-01-29"
        },
        placeOfBirth: "Rheden",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440339,
        personId: 1035028578,
        gender: "F",
        initials: "M",
        surName: "Stoica",
        dateOfBirth: {
          day: 23,
          month: 6,
          year: 1965,
          fullDate: "1965-06-23"
        },
        placeOfBirth: "Cislau",
        countryOfBirth: {
          value: "RO",
          description: "Roemenië"
        }
      },
      {
        nodeId: 110440340,
        personId: 1501190068
      },
      {
        nodeId: 110440341,
        personId: 1502059874
      },
      {
        nodeId: 110440342,
        personId: 1503321257
      },
      {
        nodeId: 110440343,
        personId: 1503430843
      },
      {
        nodeId: 110440344,
        personId: 1503914796
      },
      {
        nodeId: 110440345,
        personId: 1504038744
      },
      {
        nodeId: 110440346,
        personId: 1504425354
      },
      {
        nodeId: 110440347,
        personId: 1504563352
      },
      {
        nodeId: 110440348,
        personId: 1505037612
      },
      {
        nodeId: 110440349,
        personId: 1505075869
      },
      {
        nodeId: 110440350,
        personId: 1505084572
      },
      {
        nodeId: 110440351,
        personId: 1505136075
      },
      {
        nodeId: 110440352,
        personId: 1505427839
      },
      {
        nodeId: 110440353,
        personId: 1505631380
      },
      {
        nodeId: 110440354,
        personId: 1505723518
      },
      {
        nodeId: 110440355,
        personId: 1505981066
      },
      {
        nodeId: 110440356,
        personId: 1506015781
      },
      {
        nodeId: 110440357,
        personId: 1506375011
      },
      {
        nodeId: 110440358,
        personId: 1024798249,
        surName: "Vrijlandt",
        dateOfBirth: {
          day: 13,
          month: 6,
          year: 1969,
          fullDate: "1969-06-13"
        }
      },
      {
        nodeId: 110440359,
        personId: 1024943647,
        gender: "M",
        initials: "RP",
        surName: "Schram",
        dateOfBirth: {
          day: 22,
          month: 6,
          year: 1967,
          fullDate: "1967-06-22"
        },
        placeOfBirth: "Leiden",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440360,
        personId: 1027932118,
        surName: "Tuijt",
        dateOfBirth: {
          day: 13,
          month: 7,
          year: 1962,
          fullDate: "1962-07-13"
        }
      },
      {
        nodeId: 110440361,
        personId: 1028896924,
        surName: "Stanger",
        dateOfBirth: {
          day: 10,
          month: 5,
          year: 1966,
          fullDate: "1966-05-10"
        }
      },
      {
        nodeId: 110440362,
        personId: 1028896957,
        surName: "van der Aa",
        dateOfBirth: {
          day: 26,
          month: 8,
          year: 1975,
          fullDate: "1975-08-26"
        }
      },
      {
        nodeId: 110440363,
        personId: 1029442058,
        surName: "Trikha",
        dateOfBirth: {
          day: 31,
          month: 8,
          year: 1972,
          fullDate: "1972-08-31"
        }
      },
      {
        nodeId: 110440364,
        personId: 1033369941,
        surName: "Folkerts",
        dateOfBirth: {
          day: 30,
          month: 8,
          year: 1981,
          fullDate: "1981-08-30"
        }
      },
      {
        nodeId: 110440365,
        personId: 1035213428,
        surName: "Ansinger",
        dateOfBirth: {
          day: 12,
          month: 6,
          year: 1970,
          fullDate: "1970-06-12"
        }
      },
      {
        nodeId: 110440366,
        personId: 1168063616,
        surName: "Henderson",
        dateOfBirth: {
          day: 8,
          month: 8,
          year: 1977,
          fullDate: "1977-08-08"
        }
      },
      {
        nodeId: 110440367,
        personId: 1512322593,
        surName: "Bernard",
        dateOfBirth: {
          day: 22,
          month: 9,
          year: 1966,
          fullDate: "1966-09-22"
        }
      },
      {
        nodeId: 110440368,
        personId: 1512322825,
        surName: "van Iterson",
        dateOfBirth: {
          day: 25,
          month: 6,
          year: 1967,
          fullDate: "1967-06-25"
        }
      },
      {
        nodeId: 110440369,
        personId: 1512326297,
        surName: "Kyriazis",
        dateOfBirth: {
          day: 14,
          month: 7,
          year: 1978,
          fullDate: "1978-07-14"
        }
      },
      {
        nodeId: 110440370,
        personId: 1001333507,
        gender: "M",
        initials: "K",
        surName: "Vuursteen"
      },
      {
        nodeId: 110440371,
        personId: 1007618869,
        gender: "M",
        initials: "MJ",
        surName: "Polfliet"
      },
      {
        nodeId: 110440372,
        personId: 1025681444,
        gender: "M",
        initials: "WJM",
        surName: "Hoogeveen"
      },
      {
        nodeId: 110440373,
        personId: 1030113177,
        gender: "M",
        initials: "MJ",
        surName: "Polfliet",
        dateOfBirth: {
          day: 31,
          month: 7,
          year: 1963,
          fullDate: "1963-07-31"
        },
        placeOfBirth: "'s Heer Arendskerke",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440374,
        personId: 1030113185,
        gender: "M",
        initials: "BG",
        surName: "Wennekendonk",
        dateOfBirth: {
          day: 27,
          month: 11,
          year: 1958,
          fullDate: "1958-11-27"
        },
        placeOfBirth: "Rotterdam",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440402,
        personId: 1001252186,
        gender: "M",
        initials: "EFM",
        surName: "Verlee"
      },
      {
        nodeId: 110440403,
        personId: 1256157049,
        gender: "M",
        initials: "B",
        surName: "Westenbrink"
      },
      {
        nodeId: 110440404,
        personId: 1256198928,
        gender: "M",
        initials: "D",
        surName: "Coppoolse"
      },
      {
        nodeId: 110440405,
        personId: 1256254242,
        gender: "M",
        initials: "E",
        surNamePrefix: "van den",
        surName: "Berg"
      },
      {
        nodeId: 110440413,
        personId: 1020627723,
        gender: "M",
        initials: "R",
        surName: "Marijnen",
        dateOfBirth: {
          day: 4,
          month: 4,
          year: 1952,
          fullDate: "1952-04-04"
        },
        placeOfBirth: "Utrecht",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440414,
        personId: 1021384506,
        gender: "M",
        initials: "TL",
        surName: "Bon",
        dateOfBirth: {
          day: 12,
          month: 6,
          year: 1950,
          fullDate: "1950-06-12"
        },
        placeOfBirth: "Abcoude",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440415,
        personId: 1022910747,
        gender: "M",
        initials: "J",
        surNamePrefix: "van 't",
        surName: "Hoff",
        dateOfBirth: {
          day: 21,
          month: 1,
          year: 1970,
          fullDate: "1970-01-21"
        },
        placeOfBirth: "Landsmeer",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440416,
        personId: 1023565581,
        gender: "M",
        initials: "HAB",
        surNamePrefix: "te",
        surName: "Braake",
        dateOfBirth: {
          day: 5,
          month: 11,
          year: 1967,
          fullDate: "1967-11-05"
        },
        placeOfBirth: "Groenlo",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440417,
        personId: 1024943712,
        gender: "M",
        initials: "D",
        surNamePrefix: "van",
        surName: "Sleeuwen",
        dateOfBirth: {
          day: 11,
          month: 7,
          year: 1970,
          fullDate: "1970-07-11"
        },
        placeOfBirth: "Nijmegen",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440418,
        personId: 1028405973,
        gender: "M",
        initials: "RG",
        surName: "Grosmann",
        dateOfBirth: {
          day: 13,
          month: 12,
          year: 1971,
          fullDate: "1971-12-13"
        },
        placeOfBirth: "Amsterdam",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440419,
        personId: 1029108394,
        gender: "F",
        initials: "DN",
        surName: "Jung",
        dateOfBirth: {
          day: 10,
          month: 12,
          year: 1975,
          fullDate: "1975-12-10"
        },
        placeOfBirth: "Bern",
        countryOfBirth: {
          value: "CH",
          description: "Zwitserland"
        }
      },
      {
        nodeId: 110440420,
        personId: 1030075582,
        gender: "M",
        initials: "JYJ",
        surName: "Van Hollebeke",
        dateOfBirth: {
          day: 8,
          month: 3,
          year: 1956,
          fullDate: "1956-03-08"
        },
        placeOfBirth: "Gent",
        countryOfBirth: {
          value: "BE",
          description: "België"
        }
      },
      {
        nodeId: 110440421,
        personId: 1501991473
      },
      {
        nodeId: 110440422,
        personId: 1502207044
      },
      {
        nodeId: 110440423,
        personId: 1503149252
      },
      {
        nodeId: 110440424,
        personId: 1503185918
      },
      {
        nodeId: 110440425,
        personId: 1503875153
      },
      {
        nodeId: 110440426,
        personId: 1015510157,
        gender: "M",
        initials: "WS",
        surNamePrefix: "de",
        surName: "Jonge"
      },
      {
        nodeId: 110440427,
        personId: 1027897105,
        gender: "M",
        initials: "KM",
        surNamePrefix: "van de",
        surName: "Pest",
        dateOfBirth: {
          day: 30,
          month: 3,
          year: 1972,
          fullDate: "1972-03-30"
        },
        placeOfBirth: "Vianen",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440428,
        personId: 1028426227,
        gender: "M",
        initials: "BJH",
        surNamePrefix: "van",
        surName: "Delft",
        dateOfBirth: {
          day: 19,
          month: 1,
          year: 1974,
          fullDate: "1974-01-19"
        },
        placeOfBirth: "Dordrecht",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440429,
        personId: 1029818091,
        gender: "M",
        initials: "DM",
        surName: "Egeler",
        dateOfBirth: {
          day: 6,
          month: 7,
          year: 1985,
          fullDate: "1985-07-06"
        },
        placeOfBirth: "Hilversum",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440430,
        personId: 1030111155,
        gender: "M",
        initials: "AJ",
        surName: "Veneberg",
        dateOfBirth: {
          day: 1,
          month: 1,
          year: 1976,
          fullDate: "1976-01-01"
        },
        placeOfBirth: "Avereest",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440431,
        personId: 1030773277,
        gender: "M",
        initials: "BCR",
        surName: "Odink",
        dateOfBirth: {
          day: 8,
          month: 7,
          year: 1976,
          fullDate: "1976-07-08"
        },
        placeOfBirth: "Voorschoten",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440432,
        personId: 1032736827,
        gender: "F",
        initials: "EJM",
        surName: "Tromp-Strijdveen",
        dateOfBirth: {
          day: 25,
          month: 2,
          year: 1974,
          fullDate: "1974-02-25"
        },
        placeOfBirth: "Warnsveld",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440433,
        personId: 1033163658,
        gender: "F",
        initials: "MMGATC",
        surName: "Bogers",
        dateOfBirth: {
          day: 13,
          month: 3,
          year: 1976,
          fullDate: "1976-03-13"
        },
        placeOfBirth: "Roosendaal En Nispen",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440434,
        personId: 1036324562,
        gender: "M",
        initials: "ME",
        surNamePrefix: "van der",
        surName: "Zwan",
        dateOfBirth: {
          day: 15,
          month: 12,
          year: 1979,
          fullDate: "1979-12-15"
        },
        placeOfBirth: "Zwolle",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440435,
        personId: 1256600915,
        gender: "M",
        initials: "NA",
        surName: "Gonzales Garcia"
      },
      {
        nodeId: 110440436,
        personId: 1256604560,
        gender: "M",
        initials: "NHM",
        surName: "Steenbrink"
      },
      {
        nodeId: 110440437,
        personId: 1256604610,
        gender: "F",
        initials: "NH",
        surName: "Wiltum"
      },
      {
        nodeId: 110440438,
        personId: 1501456246
      },
      {
        nodeId: 110440439,
        personId: 1501520041
      },
      {
        nodeId: 110440440,
        personId: 1501623092
      },
      {
        nodeId: 110440441,
        personId: 1501866535
      },
      {
        nodeId: 110440442,
        personId: 1502179938
      },
      {
        nodeId: 110440443,
        personId: 1502199969
      },
      {
        nodeId: 110440444,
        personId: 1502736042
      },
      {
        nodeId: 110440445,
        personId: 1503104166
      },
      {
        nodeId: 110440446,
        personId: 1503147751
      },
      {
        nodeId: 110440447,
        personId: 1503183681
      },
      {
        nodeId: 110440448,
        personId: 1503202374
      },
      {
        nodeId: 110440449,
        personId: 1503441659
      },
      {
        nodeId: 110440450,
        personId: 1503547216
      },
      {
        nodeId: 110440451,
        personId: 1503712398
      },
      {
        nodeId: 110440452,
        personId: 1503737965
      },
      {
        nodeId: 110440453,
        personId: 1503827436
      },
      {
        nodeId: 110440454,
        personId: 1503913145
      },
      {
        nodeId: 110440455,
        personId: 1503976357
      },
      {
        nodeId: 110440456,
        personId: 1504041482
      },
      {
        nodeId: 110440457,
        personId: 1504083575
      },
      {
        nodeId: 110440458,
        personId: 1504192301
      },
      {
        nodeId: 110440459,
        personId: 1504295062
      },
      {
        nodeId: 110440460,
        personId: 1504742394
      },
      {
        nodeId: 110440461,
        personId: 1504818053
      },
      {
        nodeId: 110440462,
        personId: 1504860501
      },
      {
        nodeId: 110440463,
        personId: 1505352052
      },
      {
        nodeId: 110440464,
        personId: 1505465557
      },
      {
        nodeId: 110440465,
        personId: 1505528271
      },
      {
        nodeId: 110440466,
        personId: 1505843415
      },
      {
        nodeId: 110440467,
        personId: 1506023421
      },
      {
        nodeId: 110440468,
        personId: 1506124104
      },
      {
        nodeId: 110440469,
        personId: 1022749061,
        gender: "M",
        initials: "SW",
        surName: "Kolff",
        dateOfBirth: {
          day: 28,
          month: 5,
          year: 1944,
          fullDate: "1944-05-28"
        },
        placeOfBirth: "Leeuwarden",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440470,
        personId: 1005568496,
        gender: "M",
        initials: "PP",
        surNamePrefix: "de",
        surName: "Ridder"
      },
      {
        nodeId: 110440471,
        personId: 1031263062,
        surName: "van Kooten",
        dateOfBirth: {
          day: 31,
          month: 12,
          year: 1972,
          fullDate: "1972-12-31"
        }
      },
      {
        nodeId: 110440472,
        personId: 1501091274,
        surName: "de Ruiter",
        dateOfBirth: {
          day: 18,
          month: 10,
          year: 1960,
          fullDate: "1960-10-18"
        }
      },
      {
        nodeId: 110440473,
        personId: 1507436309,
        surName: "van Dort",
        dateOfBirth: {
          day: 30,
          month: 1,
          year: 1961,
          fullDate: "1961-01-30"
        },
        placeOfBirth: "Nieuw-Ginneken",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440474,
        personId: 1507436903,
        surName: "Minnart",
        dateOfBirth: {
          day: 30,
          month: 6,
          year: 1966,
          fullDate: "1966-06-30"
        },
        placeOfBirth: "Tienen",
        countryOfBirth: {
          value: "BE",
          description: "België"
        }
      },
      {
        nodeId: 110440475,
        personId: 1507437604,
        surName: "Koudenburg",
        dateOfBirth: {
          day: 26,
          month: 8,
          year: 1972,
          fullDate: "1972-08-26"
        }
      },
      {
        nodeId: 110440476,
        personId: 1507437851,
        surName: "Schrijvers",
        dateOfBirth: {
          day: 5,
          month: 5,
          year: 1974,
          fullDate: "1974-05-05"
        }
      },
      {
        nodeId: 110440477,
        personId: 1507438107,
        surName: "Lette",
        dateOfBirth: {
          day: 6,
          month: 5,
          year: 1976,
          fullDate: "1976-05-06"
        }
      },
      {
        nodeId: 110440478,
        personId: 1507438974,
        surName: "Goris",
        dateOfBirth: {
          day: 15,
          month: 10,
          year: 1987,
          fullDate: "1987-10-15"
        }
      },
      {
        nodeId: 110440479,
        personId: 1512220847,
        surName: "Gilet",
        dateOfBirth: {
          day: 7,
          month: 12,
          year: 1963,
          fullDate: "1963-12-07"
        }
      },
      {
        nodeId: 110440480,
        personId: 1512221928,
        surName: "Kreyenberg",
        dateOfBirth: {
          day: 22,
          month: 3,
          year: 1970,
          fullDate: "1970-03-22"
        }
      },
      {
        nodeId: 110440481,
        personId: 1512224609,
        surName: "Peters",
        dateOfBirth: {
          day: 23,
          month: 4,
          year: 1982,
          fullDate: "1982-04-23"
        }
      },
      {
        nodeId: 110440482,
        personId: 1512225044,
        surName: "Josephus Jitta",
        dateOfBirth: {
          day: 6,
          month: 12,
          year: 1983,
          fullDate: "1983-12-06"
        }
      },
      {
        nodeId: 110440490,
        personId: 1023615618,
        gender: "M",
        initials: "TJB",
        surName: "Rubbens",
        dateOfBirth: {
          day: 24,
          month: 9,
          year: 1962,
          fullDate: "1962-09-24"
        },
        placeOfBirth: "Leiden",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440491,
        personId: 1028070884,
        gender: "M",
        initials: "BJ",
        surName: "Bax",
        dateOfBirth: {
          day: 15,
          month: 7,
          year: 1968,
          fullDate: "1968-07-15"
        },
        placeOfBirth: "Deventer",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440492,
        personId: 1028070892,
        gender: "M",
        initials: "MAH",
        surNamePrefix: "van der",
        surName: "Aa",
        dateOfBirth: {
          day: 5,
          month: 2,
          year: 1971,
          fullDate: "1971-02-05"
        },
        placeOfBirth: "Den Dungen",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440493,
        personId: 1015365735,
        gender: "M",
        initials: "PHA",
        surName: "Gilet"
      },
      {
        nodeId: 110440494,
        personId: 1035508074,
        gender: "M",
        initials: "V",
        surNamePrefix: "van der",
        surName: "Wal",
        dateOfBirth: {
          day: 10,
          month: 7,
          year: 1972,
          fullDate: "1972-07-10"
        },
        placeOfBirth: "'s-Gravenhage",
        countryOfBirth: {
          value: "NL",
          description: "Nederland"
        }
      },
      {
        nodeId: 110440495,
        personId: 1036451845,
        gender: "M",
        initials: "MJ",
        surName: "Wismans",
        dateOfBirth: {
          day: 16,
          month: 9,
          year: 1983,
          fullDate: "1983-09-16"
        },
        placeOfBirth: "Columbus",
        countryOfBirth: {
          value: "US",
          description: "Verenigde Staten"
        }
      },
      {
        nodeId: 110440496,
        personId: 1501378481
      }
    ],
    "relationships": [
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440002,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 1991,
                "fullDate": "1991-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440003,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440004,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 20,
                "month": 10,
                "year": 2005,
                "fullDate": "2005-10-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440005,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 2,
                "month": 6,
                "year": 1994,
                "fullDate": "1994-06-02"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440006,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 25,
                "month": 4,
                "year": 2013,
                "fullDate": "2013-04-25"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440007,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 25,
                "month": 4,
                "year": 2002,
                "fullDate": "2002-04-25"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440008,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 1991,
                "fullDate": "1991-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440009,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 20,
                "month": 4,
                "year": 2006,
                "fullDate": "2006-04-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440010,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2015,
                "fullDate": "2015-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440011,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 25,
                "month": 4,
                "year": 1996,
                "fullDate": "1996-04-25"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 25,
                "month": 4,
                "year": 1996,
                "fullDate": "1996-04-25"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440012,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 1996,
                "fullDate": "1996-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440013,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440014,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2009,
                "fullDate": "2009-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440015,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 10,
                "year": 2012,
                "fullDate": "2012-10-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440016,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 30,
                "month": 11,
                "year": 2018,
                "fullDate": "2018-11-30"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440017,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 19,
                "month": 4,
                "year": 2012,
                "fullDate": "2012-04-19"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 19,
                "month": 4,
                "year": 2012,
                "fullDate": "2012-04-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440018,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2005,
                "fullDate": "2005-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440019,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2006,
                "fullDate": "2006-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440020,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 16,
                "month": 3,
                "year": 2012,
                "fullDate": "2012-03-16"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440021,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 24,
                "month": 4,
                "year": 2014,
                "fullDate": "2014-04-24"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440022,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2009,
                "fullDate": "2009-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440023,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 23,
                "month": 4,
                "year": 2009,
                "fullDate": "2009-04-23"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440024,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 25,
                "month": 4,
                "year": 2013,
                "fullDate": "2013-04-25"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440025,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 10,
                "year": 2012,
                "fullDate": "2012-10-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440026,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2009,
                "fullDate": "2009-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440027,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 30,
                "month": 4,
                "year": 2010,
                "fullDate": "2010-04-30"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440028,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 30,
                "month": 4,
                "year": 2010,
                "fullDate": "2010-04-30"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440029,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 19,
                "month": 4,
                "year": 2018,
                "fullDate": "2018-04-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440030,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2002,
                "fullDate": "2002-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440031,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 24,
                "month": 4,
                "year": 2001,
                "fullDate": "2001-04-24"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 24,
                "month": 4,
                "year": 2001,
                "fullDate": "2001-04-24"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440032,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 21,
                "month": 4,
                "year": 2016,
                "fullDate": "2016-04-21"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440033,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 21,
                "month": 4,
                "year": 2016,
                "fullDate": "2016-04-21"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440034,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 20,
                "month": 4,
                "year": 2017,
                "fullDate": "2017-04-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440035,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 23,
                "month": 4,
                "year": 2015,
                "fullDate": "2015-04-23"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 23,
                "month": 4,
                "year": 2015,
                "fullDate": "2015-04-23"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440036,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440037,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440038,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 17,
                "month": 4,
                "year": 2008,
                "fullDate": "2008-04-17"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440039,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 8,
                "month": 2,
                "year": 1985,
                "fullDate": "1985-02-08"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 8,
                "month": 2,
                "year": 1985,
                "fullDate": "1985-02-08"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 5,
                "month": 6,
                "year": 1970,
                "fullDate": "1970-06-05"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 5,
                "month": 6,
                "year": 1970,
                "fullDate": "1970-06-05"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "SUB",
              "startdate": {
                "day": 3,
                "month": 7,
                "year": 1972,
                "fullDate": "1972-07-03"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440041,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 1991,
                "fullDate": "1991-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440042,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 8,
                "month": 2,
                "year": 1985,
                "fullDate": "1985-02-08"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440043,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 8,
                "month": 2,
                "year": 1985,
                "fullDate": "1985-02-08"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 5,
                "month": 6,
                "year": 1970,
                "fullDate": "1970-06-05"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 5,
                "month": 6,
                "year": 1970,
                "fullDate": "1970-06-05"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440044,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 8,
                "month": 2,
                "year": 1985,
                "fullDate": "1985-02-08"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440045,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 23,
                "month": 5,
                "year": 1988,
                "fullDate": "1988-05-23"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440046,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 8,
                "month": 2,
                "year": 1985,
                "fullDate": "1985-02-08"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 1983,
                "fullDate": "1983-08-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 1983,
                "fullDate": "1983-08-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440047,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2003,
                "fullDate": "2003-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440048,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 9,
                "month": 4,
                "year": 2008,
                "fullDate": "2008-04-09"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 31,
                "month": 5,
                "year": 2001,
                "fullDate": "2001-05-31"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 31,
                "month": 5,
                "year": 2001,
                "fullDate": "2001-05-31"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440049,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2011,
                "fullDate": "2011-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440050,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2011,
                "fullDate": "2011-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440051,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2008,
                "fullDate": "2008-04-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440052,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 24,
                "month": 3,
                "year": 2007,
                "fullDate": "2007-03-24"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440053,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2000,
                "fullDate": "2000-01-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440054,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 30,
                "month": 11,
                "year": 2007,
                "fullDate": "2007-11-30"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440055,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2011,
                "fullDate": "2011-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440056,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 24,
                "month": 3,
                "year": 2006,
                "fullDate": "2006-03-24"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440057,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 20,
                "month": 6,
                "year": 2005,
                "fullDate": "2005-06-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440058,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2011,
                "fullDate": "2011-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440059,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 1984,
                "fullDate": "1984-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440060,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2011,
                "fullDate": "2011-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440061,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 20,
                "month": 6,
                "year": 2005,
                "fullDate": "2005-06-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440062,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 14,
                "month": 12,
                "year": 2011,
                "fullDate": "2011-12-14"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440063,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 24,
                "month": 3,
                "year": 2007,
                "fullDate": "2007-03-24"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440064,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 5,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-05"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440065,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 13,
                "month": 12,
                "year": 2004,
                "fullDate": "2004-12-13"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440066,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 21,
                "month": 12,
                "year": 2006,
                "fullDate": "2006-12-21"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440067,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2003,
                "fullDate": "2003-01-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440068,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 3,
                "month": 12,
                "year": 2014,
                "fullDate": "2014-12-03"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2018,
                "fullDate": "2018-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440069,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 15,
                "month": 5,
                "year": 1985,
                "fullDate": "1985-05-15"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 1983,
                "fullDate": "1983-08-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 1983,
                "fullDate": "1983-08-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "SUB",
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440070,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 2,
                "month": 6,
                "year": 2010,
                "fullDate": "2010-06-02"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440071,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 4,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-04"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440072,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 9,
                "month": 10,
                "year": 2012,
                "fullDate": "2012-10-09"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440073,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2014,
                "fullDate": "2014-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440074,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "LBSFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2014,
                "fullDate": "2014-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440001,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440075,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SUB",
              "startdate": {
                "day": 3,
                "month": 7,
                "year": 1972,
                "fullDate": "1972-07-03"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440002,
        "nodeType": "PERSON",
        "relatedNodeId": 110440039,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 1987,
                "fullDate": "1987-11-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440002,
        "nodeType": "PERSON",
        "relatedNodeId": 110440041,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 1991,
                "fullDate": "1991-07-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440002,
        "nodeType": "PERSON",
        "relatedNodeId": 110440044,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440002,
        "nodeType": "PERSON",
        "relatedNodeId": 110440049,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2002,
                "fullDate": "2002-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440002,
        "nodeType": "PERSON",
        "relatedNodeId": 110440055,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2002,
                "fullDate": "2002-03-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2002,
                "fullDate": "2002-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440002,
        "nodeType": "PERSON",
        "relatedNodeId": 110440059,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2003,
                "fullDate": "2003-08-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440002,
        "nodeType": "PERSON",
        "relatedNodeId": 110440073,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440002,
        "nodeType": "PERSON",
        "relatedNodeId": 110440074,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440003,
        "nodeType": "PERSON",
        "relatedNodeId": 110440039,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440003,
        "nodeType": "PERSON",
        "relatedNodeId": 110440041,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2004,
                "fullDate": "2004-08-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440003,
        "nodeType": "PERSON",
        "relatedNodeId": 110440042,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440003,
        "nodeType": "PERSON",
        "relatedNodeId": 110440043,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440003,
        "nodeType": "PERSON",
        "relatedNodeId": 110440044,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440003,
        "nodeType": "PERSON",
        "relatedNodeId": 110440049,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2006,
                "fullDate": "2006-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440003,
        "nodeType": "PERSON",
        "relatedNodeId": 110440054,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440003,
        "nodeType": "PERSON",
        "relatedNodeId": 110440055,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2006,
                "fullDate": "2006-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440003,
        "nodeType": "PERSON",
        "relatedNodeId": 110440059,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2003,
                "fullDate": "2003-08-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440003,
        "nodeType": "PERSON",
        "relatedNodeId": 110440065,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440003,
        "nodeType": "PERSON",
        "relatedNodeId": 110440066,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440003,
        "nodeType": "PERSON",
        "relatedNodeId": 110440069,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440003,
        "nodeType": "PERSON",
        "relatedNodeId": 110440073,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440003,
        "nodeType": "PERSON",
        "relatedNodeId": 110440074,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440003,
        "nodeType": "PERSON",
        "relatedNodeId": 110440165,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440005,
        "nodeType": "PERSON",
        "relatedNodeId": 110440221,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 28,
                "month": 4,
                "year": 1994,
                "fullDate": "1994-04-28"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 28,
                "month": 4,
                "year": 1994,
                "fullDate": "1994-04-28"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440005,
        "nodeType": "PERSON",
        "relatedNodeId": 110440391,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 27,
                "month": 11,
                "year": 2014,
                "fullDate": "2014-11-27"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 27,
                "month": 11,
                "year": 2014,
                "fullDate": "2014-11-27"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440005,
        "nodeType": "PERSON",
        "relatedNodeId": 110440392,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 26,
                "month": 2,
                "year": 2009,
                "fullDate": "2009-02-26"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440005,
        "nodeType": "PERSON",
        "relatedNodeId": 110440393,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 12,
                "month": 6,
                "year": 2002,
                "fullDate": "2002-06-12"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440005,
        "nodeType": "PERSON",
        "relatedNodeId": 110440394,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 27,
                "month": 12,
                "year": 1982,
                "fullDate": "1982-12-27"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 27,
                "month": 12,
                "year": 1982,
                "fullDate": "1982-12-27"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440005,
        "nodeType": "PERSON",
        "relatedNodeId": 110440395,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 28,
                "month": 12,
                "year": 1999,
                "fullDate": "1999-12-28"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 28,
                "month": 12,
                "year": 1999,
                "fullDate": "1999-12-28"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440005,
        "nodeType": "PERSON",
        "relatedNodeId": 110440396,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 13,
                "month": 12,
                "year": 2009,
                "fullDate": "2009-12-13"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 13,
                "month": 12,
                "year": 2009,
                "fullDate": "2009-12-13"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440005,
        "nodeType": "PERSON",
        "relatedNodeId": 110440397,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 2,
                "month": 3,
                "year": 2007,
                "fullDate": "2007-03-02"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 2,
                "month": 3,
                "year": 2007,
                "fullDate": "2007-03-02"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440005,
        "nodeType": "PERSON",
        "relatedNodeId": 110440398,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 13,
                "month": 12,
                "year": 2009,
                "fullDate": "2009-12-13"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 13,
                "month": 12,
                "year": 2009,
                "fullDate": "2009-12-13"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440005,
        "nodeType": "PERSON",
        "relatedNodeId": 110440399,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 13,
                "month": 12,
                "year": 2009,
                "fullDate": "2009-12-13"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440006,
        "nodeType": "PERSON",
        "relatedNodeId": 110440384,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 23,
                "month": 4,
                "year": 2007,
                "fullDate": "2007-04-23"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440006,
        "nodeType": "PERSON",
        "relatedNodeId": 110440385,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 5,
                "month": 10,
                "year": 2006,
                "fullDate": "2006-10-05"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440006,
        "nodeType": "PERSON",
        "relatedNodeId": 110440386,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 21,
                "month": 4,
                "year": 2009,
                "fullDate": "2009-04-21"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 21,
                "month": 4,
                "year": 2009,
                "fullDate": "2009-04-21"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440006,
        "nodeType": "PERSON",
        "relatedNodeId": 110440387,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 16,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-16"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440006,
        "nodeType": "PERSON",
        "relatedNodeId": 110440388,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 29,
                "month": 11,
                "year": 2007,
                "fullDate": "2007-11-29"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 29,
                "month": 11,
                "year": 2007,
                "fullDate": "2007-11-29"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440006,
        "nodeType": "PERSON",
        "relatedNodeId": 110440389,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 22,
                "month": 9,
                "year": 2015,
                "fullDate": "2015-09-22"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 22,
                "month": 9,
                "year": 2015,
                "fullDate": "2015-09-22"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440006,
        "nodeType": "PERSON",
        "relatedNodeId": 110440390,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 21,
                "month": 7,
                "year": 2014,
                "fullDate": "2014-07-21"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 21,
                "month": 7,
                "year": 2014,
                "fullDate": "2014-07-21"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440007,
        "nodeType": "PERSON",
        "relatedNodeId": 110440497,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2009,
                "fullDate": "2009-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440007,
        "nodeType": "PERSON",
        "relatedNodeId": 110440498,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2015,
                "fullDate": "2015-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440007,
        "nodeType": "PERSON",
        "relatedNodeId": 110440499,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 28,
                "month": 8,
                "year": 2003,
                "fullDate": "2003-08-28"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440007,
        "nodeType": "PERSON",
        "relatedNodeId": 110440500,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 28,
                "month": 5,
                "year": 2008,
                "fullDate": "2008-05-28"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440008,
        "nodeType": "PERSON",
        "relatedNodeId": 110440039,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 1991,
                "fullDate": "1991-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440008,
        "nodeType": "PERSON",
        "relatedNodeId": 110440041,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 1991,
                "fullDate": "1991-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440008,
        "nodeType": "PERSON",
        "relatedNodeId": 110440044,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 1991,
                "fullDate": "1991-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440008,
        "nodeType": "PERSON",
        "relatedNodeId": 110440054,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 27,
                "month": 7,
                "year": 2009,
                "fullDate": "2009-07-27"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 27,
                "month": 7,
                "year": 2009,
                "fullDate": "2009-07-27"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440008,
        "nodeType": "PERSON",
        "relatedNodeId": 110440059,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 3,
                "month": 4,
                "year": 2000,
                "fullDate": "2000-04-03"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440008,
        "nodeType": "PERSON",
        "relatedNodeId": 110440066,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2007,
                "fullDate": "2007-01-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2007,
                "fullDate": "2007-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440008,
        "nodeType": "PERSON",
        "relatedNodeId": 110440073,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2014,
                "fullDate": "2014-01-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2014,
                "fullDate": "2014-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440008,
        "nodeType": "PERSON",
        "relatedNodeId": 110440074,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2014,
                "fullDate": "2014-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440008,
        "nodeType": "PERSON",
        "relatedNodeId": 110440165,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 25,
                "month": 3,
                "year": 2005,
                "fullDate": "2005-03-25"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440009,
        "nodeType": "PERSON",
        "relatedNodeId": 110440221,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 4,
                "year": 2018,
                "fullDate": "2018-04-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440009,
        "nodeType": "PERSON",
        "relatedNodeId": 110440222,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 8,
                "month": 6,
                "year": 2006,
                "fullDate": "2006-06-08"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440009,
        "nodeType": "PERSON",
        "relatedNodeId": 110440223,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2007,
                "fullDate": "2007-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440009,
        "nodeType": "PERSON",
        "relatedNodeId": 110440224,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 25,
                "month": 3,
                "year": 2006,
                "fullDate": "2006-03-25"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440009,
        "nodeType": "PERSON",
        "relatedNodeId": 110440225,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 4,
                "month": 7,
                "year": 2008,
                "fullDate": "2008-07-04"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 4,
                "month": 7,
                "year": 2008,
                "fullDate": "2008-07-04"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440009,
        "nodeType": "PERSON",
        "relatedNodeId": 110440226,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2004,
                "fullDate": "2004-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440009,
        "nodeType": "PERSON",
        "relatedNodeId": 110440227,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2008,
                "fullDate": "2008-05-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2008,
                "fullDate": "2008-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440009,
        "nodeType": "PERSON",
        "relatedNodeId": 110440228,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 30,
                "month": 4,
                "year": 2013,
                "fullDate": "2013-04-30"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440009,
        "nodeType": "PERSON",
        "relatedNodeId": 110440229,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 13,
                "month": 1,
                "year": 2014,
                "fullDate": "2014-01-13"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440009,
        "nodeType": "PERSON",
        "relatedNodeId": 110440230,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 11,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-11"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440010,
        "nodeType": "PERSON",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2013,
                "fullDate": "2013-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440010,
        "nodeType": "PERSON",
        "relatedNodeId": 110440042,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2015,
                "fullDate": "2015-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440010,
        "nodeType": "PERSON",
        "relatedNodeId": 110440043,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2015,
                "fullDate": "2015-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440010,
        "nodeType": "PERSON",
        "relatedNodeId": 110440046,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2015,
                "fullDate": "2015-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440010,
        "nodeType": "PERSON",
        "relatedNodeId": 110440051,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440010,
        "nodeType": "PERSON",
        "relatedNodeId": 110440053,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440010,
        "nodeType": "PERSON",
        "relatedNodeId": 110440056,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 15,
                "month": 1,
                "year": 2016,
                "fullDate": "2016-01-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440010,
        "nodeType": "PERSON",
        "relatedNodeId": 110440062,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2016,
                "fullDate": "2016-08-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440010,
        "nodeType": "PERSON",
        "relatedNodeId": 110440063,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440010,
        "nodeType": "PERSON",
        "relatedNodeId": 110440067,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440010,
        "nodeType": "PERSON",
        "relatedNodeId": 110440068,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440010,
        "nodeType": "PERSON",
        "relatedNodeId": 110440069,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2015,
                "fullDate": "2015-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440010,
        "nodeType": "PERSON",
        "relatedNodeId": 110440070,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2015,
                "fullDate": "2015-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440010,
        "nodeType": "PERSON",
        "relatedNodeId": 110440071,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440010,
        "nodeType": "PERSON",
        "relatedNodeId": 110440072,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440010,
        "nodeType": "PERSON",
        "relatedNodeId": 110440400,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2012,
                "fullDate": "2012-06-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2012,
                "fullDate": "2012-06-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 7,
                "month": 6,
                "year": 2017,
                "fullDate": "2017-06-07"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440010,
        "nodeType": "PERSON",
        "relatedNodeId": 110440401,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 3,
                "month": 4,
                "year": 2006,
                "fullDate": "2006-04-03"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440011,
        "nodeType": "PERSON",
        "relatedNodeId": 110440221,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 23,
                "month": 4,
                "year": 2015,
                "fullDate": "2015-04-23"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440011,
        "nodeType": "PERSON",
        "relatedNodeId": 110440397,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 2,
                "month": 3,
                "year": 2007,
                "fullDate": "2007-03-02"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440012,
        "nodeType": "PERSON",
        "relatedNodeId": 110440042,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 3,
                "month": 8,
                "year": 1995,
                "fullDate": "1995-08-03"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 3,
                "month": 8,
                "year": 1995,
                "fullDate": "1995-08-03"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440012,
        "nodeType": "PERSON",
        "relatedNodeId": 110440043,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 1996,
                "fullDate": "1996-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440012,
        "nodeType": "PERSON",
        "relatedNodeId": 110440069,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 3,
                "month": 8,
                "year": 1995,
                "fullDate": "1995-08-03"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440012,
        "nodeType": "PERSON",
        "relatedNodeId": 110440070,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2010,
                "fullDate": "2010-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440012,
        "nodeType": "PERSON",
        "relatedNodeId": 110440071,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2010,
                "fullDate": "2010-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440012,
        "nodeType": "PERSON",
        "relatedNodeId": 110440166,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440012,
        "nodeType": "PERSON",
        "relatedNodeId": 110440167,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440012,
        "nodeType": "PERSON",
        "relatedNodeId": 110440168,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440012,
        "nodeType": "PERSON",
        "relatedNodeId": 110440233,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 9,
                "month": 7,
                "year": 2007,
                "fullDate": "2007-07-09"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440013,
        "nodeType": "PERSON",
        "relatedNodeId": 110440039,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 16,
                "month": 4,
                "year": 2003,
                "fullDate": "2003-04-16"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440013,
        "nodeType": "PERSON",
        "relatedNodeId": 110440041,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2004,
                "fullDate": "2004-08-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440013,
        "nodeType": "PERSON",
        "relatedNodeId": 110440042,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440013,
        "nodeType": "PERSON",
        "relatedNodeId": 110440043,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440013,
        "nodeType": "PERSON",
        "relatedNodeId": 110440049,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 16,
                "month": 4,
                "year": 2003,
                "fullDate": "2003-04-16"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440013,
        "nodeType": "PERSON",
        "relatedNodeId": 110440054,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440013,
        "nodeType": "PERSON",
        "relatedNodeId": 110440055,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 16,
                "month": 4,
                "year": 2003,
                "fullDate": "2003-04-16"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440013,
        "nodeType": "PERSON",
        "relatedNodeId": 110440059,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2003,
                "fullDate": "2003-08-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440013,
        "nodeType": "PERSON",
        "relatedNodeId": 110440065,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440013,
        "nodeType": "PERSON",
        "relatedNodeId": 110440066,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440013,
        "nodeType": "PERSON",
        "relatedNodeId": 110440069,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440013,
        "nodeType": "PERSON",
        "relatedNodeId": 110440073,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440013,
        "nodeType": "PERSON",
        "relatedNodeId": 110440074,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440013,
        "nodeType": "PERSON",
        "relatedNodeId": 110440165,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440013,
        "nodeType": "PERSON",
        "relatedNodeId": 110440215,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2007,
                "fullDate": "2007-08-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440013,
        "nodeType": "PERSON",
        "relatedNodeId": 110440312,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2018,
                "fullDate": "2018-09-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440013,
        "nodeType": "PERSON",
        "relatedNodeId": 110440313,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 4,
                "year": 2007,
                "fullDate": "2007-04-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440014,
        "nodeType": "PERSON",
        "relatedNodeId": 110440042,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2003,
                "fullDate": "2003-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440014,
        "nodeType": "PERSON",
        "relatedNodeId": 110440069,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 1998,
                "fullDate": "1998-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440014,
        "nodeType": "PERSON",
        "relatedNodeId": 110440169,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2005,
                "fullDate": "2005-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440014,
        "nodeType": "PERSON",
        "relatedNodeId": 110440375,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 21,
                "month": 12,
                "year": 1995,
                "fullDate": "1995-12-21"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 21,
                "month": 12,
                "year": 1995,
                "fullDate": "1995-12-21"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440014,
        "nodeType": "PERSON",
        "relatedNodeId": 110440376,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 27,
                "month": 11,
                "year": 2015,
                "fullDate": "2015-11-27"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440014,
        "nodeType": "PERSON",
        "relatedNodeId": 110440377,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 13,
                "month": 2,
                "year": 2013,
                "fullDate": "2013-02-13"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 13,
                "month": 2,
                "year": 2013,
                "fullDate": "2013-02-13"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440014,
        "nodeType": "PERSON",
        "relatedNodeId": 110440378,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 11,
                "month": 2,
                "year": 2015,
                "fullDate": "2015-02-11"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440014,
        "nodeType": "PERSON",
        "relatedNodeId": 110440379,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 22,
                "month": 7,
                "year": 1998,
                "fullDate": "1998-07-22"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440014,
        "nodeType": "PERSON",
        "relatedNodeId": 110440380,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2001,
                "fullDate": "2001-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440014,
        "nodeType": "PERSON",
        "relatedNodeId": 110440381,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 26,
                "month": 6,
                "year": 2015,
                "fullDate": "2015-06-26"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440015,
        "nodeType": "PERSON",
        "relatedNodeId": 110440066,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 15,
                "month": 10,
                "year": 2012,
                "fullDate": "2012-10-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440015,
        "nodeType": "PERSON",
        "relatedNodeId": 110440069,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 15,
                "month": 10,
                "year": 2012,
                "fullDate": "2012-10-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 22,
                "month": 9,
                "year": 1998,
                "fullDate": "1998-09-22"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440042,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 22,
                "month": 9,
                "year": 1998,
                "fullDate": "1998-09-22"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440043,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 22,
                "month": 9,
                "year": 1998,
                "fullDate": "1998-09-22"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440046,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 22,
                "month": 9,
                "year": 1998,
                "fullDate": "1998-09-22"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440051,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440053,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440063,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440067,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440068,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440069,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 22,
                "month": 9,
                "year": 1998,
                "fullDate": "1998-09-22"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440070,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2010,
                "fullDate": "2010-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440071,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2010,
                "fullDate": "2010-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440072,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440166,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440167,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440168,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440169,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2005,
                "fullDate": "2005-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440232,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2011,
                "fullDate": "2011-01-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2011,
                "fullDate": "2011-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440016,
        "nodeType": "PERSON",
        "relatedNodeId": 110440233,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 10,
                "month": 12,
                "year": 2013,
                "fullDate": "2013-12-10"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440017,
        "nodeType": "PERSON",
        "relatedNodeId": 110440234,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 12,
                "month": 11,
                "year": 2011,
                "fullDate": "2011-11-12"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440017,
        "nodeType": "PERSON",
        "relatedNodeId": 110440235,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2017,
                "fullDate": "2017-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440017,
        "nodeType": "PERSON",
        "relatedNodeId": 110440236,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 26,
                "month": 1,
                "year": 1999,
                "fullDate": "1999-01-26"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 26,
                "month": 1,
                "year": 1999,
                "fullDate": "1999-01-26"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440017,
        "nodeType": "PERSON",
        "relatedNodeId": 110440237,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2009,
                "fullDate": "2009-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440017,
        "nodeType": "PERSON",
        "relatedNodeId": 110440238,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 25,
                "month": 6,
                "year": 2008,
                "fullDate": "2008-06-25"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 25,
                "month": 6,
                "year": 2008,
                "fullDate": "2008-06-25"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440017,
        "nodeType": "PERSON",
        "relatedNodeId": 110440239,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 14,
                "month": 6,
                "year": 2012,
                "fullDate": "2012-06-14"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440018,
        "nodeType": "PERSON",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2005,
                "fullDate": "2005-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440018,
        "nodeType": "PERSON",
        "relatedNodeId": 110440042,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2005,
                "fullDate": "2005-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440018,
        "nodeType": "PERSON",
        "relatedNodeId": 110440043,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2005,
                "fullDate": "2005-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440018,
        "nodeType": "PERSON",
        "relatedNodeId": 110440056,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 28,
                "month": 3,
                "year": 2006,
                "fullDate": "2006-03-28"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440018,
        "nodeType": "PERSON",
        "relatedNodeId": 110440062,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440018,
        "nodeType": "PERSON",
        "relatedNodeId": 110440066,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 25,
                "month": 1,
                "year": 2007,
                "fullDate": "2007-01-25"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 25,
                "month": 1,
                "year": 2007,
                "fullDate": "2007-01-25"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440018,
        "nodeType": "PERSON",
        "relatedNodeId": 110440069,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2005,
                "fullDate": "2005-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440018,
        "nodeType": "PERSON",
        "relatedNodeId": 110440070,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2010,
                "fullDate": "2010-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440018,
        "nodeType": "PERSON",
        "relatedNodeId": 110440071,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2010,
                "fullDate": "2010-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440018,
        "nodeType": "PERSON",
        "relatedNodeId": 110440166,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440018,
        "nodeType": "PERSON",
        "relatedNodeId": 110440167,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440018,
        "nodeType": "PERSON",
        "relatedNodeId": 110440168,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440018,
        "nodeType": "PERSON",
        "relatedNodeId": 110440169,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2005,
                "fullDate": "2005-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440018,
        "nodeType": "PERSON",
        "relatedNodeId": 110440314,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 8,
                "month": 11,
                "year": 2012,
                "fullDate": "2012-11-08"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440019,
        "nodeType": "PERSON",
        "relatedNodeId": 110440042,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2005,
                "fullDate": "2005-02-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440019,
        "nodeType": "PERSON",
        "relatedNodeId": 110440043,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2006,
                "fullDate": "2006-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440019,
        "nodeType": "PERSON",
        "relatedNodeId": 110440056,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 28,
                "month": 3,
                "year": 2006,
                "fullDate": "2006-03-28"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 28,
                "month": 3,
                "year": 2006,
                "fullDate": "2006-03-28"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440019,
        "nodeType": "PERSON",
        "relatedNodeId": 110440069,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2005,
                "fullDate": "2005-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440019,
        "nodeType": "PERSON",
        "relatedNodeId": 110440070,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2010,
                "fullDate": "2010-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440019,
        "nodeType": "PERSON",
        "relatedNodeId": 110440071,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2010,
                "fullDate": "2010-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440019,
        "nodeType": "PERSON",
        "relatedNodeId": 110440075,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2005,
                "fullDate": "2005-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440019,
        "nodeType": "PERSON",
        "relatedNodeId": 110440166,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440019,
        "nodeType": "PERSON",
        "relatedNodeId": 110440167,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440019,
        "nodeType": "PERSON",
        "relatedNodeId": 110440168,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440019,
        "nodeType": "PERSON",
        "relatedNodeId": 110440169,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2005,
                "fullDate": "2005-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440019,
        "nodeType": "PERSON",
        "relatedNodeId": 110440215,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2006,
                "fullDate": "2006-01-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2006,
                "fullDate": "2006-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440019,
        "nodeType": "PERSON",
        "relatedNodeId": 110440315,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 15,
                "month": 6,
                "year": 2000,
                "fullDate": "2000-06-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440019,
        "nodeType": "PERSON",
        "relatedNodeId": 110440316,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 15,
                "month": 7,
                "year": 2014,
                "fullDate": "2014-07-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440020,
        "nodeType": "PERSON",
        "relatedNodeId": 110440039,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 16,
                "month": 3,
                "year": 2012,
                "fullDate": "2012-03-16"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440020,
        "nodeType": "PERSON",
        "relatedNodeId": 110440041,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 16,
                "month": 3,
                "year": 2012,
                "fullDate": "2012-03-16"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440020,
        "nodeType": "PERSON",
        "relatedNodeId": 110440049,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 16,
                "month": 3,
                "year": 2012,
                "fullDate": "2012-03-16"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440020,
        "nodeType": "PERSON",
        "relatedNodeId": 110440055,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 16,
                "month": 3,
                "year": 2012,
                "fullDate": "2012-03-16"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440020,
        "nodeType": "PERSON",
        "relatedNodeId": 110440059,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 16,
                "month": 3,
                "year": 2012,
                "fullDate": "2012-03-16"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440020,
        "nodeType": "PERSON",
        "relatedNodeId": 110440165,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 16,
                "month": 3,
                "year": 2012,
                "fullDate": "2012-03-16"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440020,
        "nodeType": "PERSON",
        "relatedNodeId": 110440173,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2017,
                "fullDate": "2017-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440020,
        "nodeType": "PERSON",
        "relatedNodeId": 110440174,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2001,
                "fullDate": "2001-04-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2001,
                "fullDate": "2001-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440021,
        "nodeType": "PERSON",
        "relatedNodeId": 110440298,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 11,
                "month": 5,
                "year": 2010,
                "fullDate": "2010-05-11"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440022,
        "nodeType": "PERSON",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2004,
                "fullDate": "2004-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440022,
        "nodeType": "PERSON",
        "relatedNodeId": 110440042,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2004,
                "fullDate": "2004-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440022,
        "nodeType": "PERSON",
        "relatedNodeId": 110440043,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2009,
                "fullDate": "2009-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440022,
        "nodeType": "PERSON",
        "relatedNodeId": 110440046,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2004,
                "fullDate": "2004-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440022,
        "nodeType": "PERSON",
        "relatedNodeId": 110440051,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440022,
        "nodeType": "PERSON",
        "relatedNodeId": 110440053,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440022,
        "nodeType": "PERSON",
        "relatedNodeId": 110440056,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2004,
                "fullDate": "2004-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440022,
        "nodeType": "PERSON",
        "relatedNodeId": 110440063,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440022,
        "nodeType": "PERSON",
        "relatedNodeId": 110440067,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440022,
        "nodeType": "PERSON",
        "relatedNodeId": 110440068,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440022,
        "nodeType": "PERSON",
        "relatedNodeId": 110440069,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2004,
                "fullDate": "2004-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440022,
        "nodeType": "PERSON",
        "relatedNodeId": 110440070,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2010,
                "fullDate": "2010-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440022,
        "nodeType": "PERSON",
        "relatedNodeId": 110440071,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2010,
                "fullDate": "2010-12-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2010,
                "fullDate": "2010-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440022,
        "nodeType": "PERSON",
        "relatedNodeId": 110440072,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440022,
        "nodeType": "PERSON",
        "relatedNodeId": 110440166,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440022,
        "nodeType": "PERSON",
        "relatedNodeId": 110440167,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440022,
        "nodeType": "PERSON",
        "relatedNodeId": 110440168,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440022,
        "nodeType": "PERSON",
        "relatedNodeId": 110440169,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2005,
                "fullDate": "2005-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440024,
        "nodeType": "PERSON",
        "relatedNodeId": 110440042,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2008,
                "fullDate": "2008-11-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440024,
        "nodeType": "PERSON",
        "relatedNodeId": 110440043,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2009,
                "fullDate": "2009-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440024,
        "nodeType": "PERSON",
        "relatedNodeId": 110440051,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440024,
        "nodeType": "PERSON",
        "relatedNodeId": 110440053,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440024,
        "nodeType": "PERSON",
        "relatedNodeId": 110440062,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2017,
                "fullDate": "2017-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440024,
        "nodeType": "PERSON",
        "relatedNodeId": 110440063,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440024,
        "nodeType": "PERSON",
        "relatedNodeId": 110440066,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2017,
                "fullDate": "2017-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440024,
        "nodeType": "PERSON",
        "relatedNodeId": 110440067,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440024,
        "nodeType": "PERSON",
        "relatedNodeId": 110440068,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440024,
        "nodeType": "PERSON",
        "relatedNodeId": 110440069,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2008,
                "fullDate": "2008-11-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440024,
        "nodeType": "PERSON",
        "relatedNodeId": 110440070,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2017,
                "fullDate": "2017-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440024,
        "nodeType": "PERSON",
        "relatedNodeId": 110440071,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2017,
                "fullDate": "2017-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440024,
        "nodeType": "PERSON",
        "relatedNodeId": 110440072,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440024,
        "nodeType": "PERSON",
        "relatedNodeId": 110440169,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2008,
                "fullDate": "2008-11-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440025,
        "nodeType": "PERSON",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 15,
                "month": 10,
                "year": 2012,
                "fullDate": "2012-10-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440025,
        "nodeType": "PERSON",
        "relatedNodeId": 110440066,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 15,
                "month": 10,
                "year": 2012,
                "fullDate": "2012-10-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440025,
        "nodeType": "PERSON",
        "relatedNodeId": 110440231,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2008,
                "fullDate": "2008-10-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440026,
        "nodeType": "PERSON",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2006,
                "fullDate": "2006-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440026,
        "nodeType": "PERSON",
        "relatedNodeId": 110440046,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 17,
                "month": 1,
                "year": 2019,
                "fullDate": "2019-01-17"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440026,
        "nodeType": "PERSON",
        "relatedNodeId": 110440051,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440026,
        "nodeType": "PERSON",
        "relatedNodeId": 110440053,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440026,
        "nodeType": "PERSON",
        "relatedNodeId": 110440056,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 21,
                "month": 3,
                "year": 2008,
                "fullDate": "2008-03-21"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 21,
                "month": 3,
                "year": 2008,
                "fullDate": "2008-03-21"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440026,
        "nodeType": "PERSON",
        "relatedNodeId": 110440062,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440026,
        "nodeType": "PERSON",
        "relatedNodeId": 110440063,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440026,
        "nodeType": "PERSON",
        "relatedNodeId": 110440067,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440026,
        "nodeType": "PERSON",
        "relatedNodeId": 110440068,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440026,
        "nodeType": "PERSON",
        "relatedNodeId": 110440070,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2010,
                "fullDate": "2010-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440026,
        "nodeType": "PERSON",
        "relatedNodeId": 110440071,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440026,
        "nodeType": "PERSON",
        "relatedNodeId": 110440072,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440026,
        "nodeType": "PERSON",
        "relatedNodeId": 110440166,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440026,
        "nodeType": "PERSON",
        "relatedNodeId": 110440167,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440026,
        "nodeType": "PERSON",
        "relatedNodeId": 110440168,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440027,
        "nodeType": "PERSON",
        "relatedNodeId": 110440221,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 30,
                "month": 4,
                "year": 2010,
                "fullDate": "2010-04-30"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 30,
                "month": 4,
                "year": 2010,
                "fullDate": "2010-04-30"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440029,
        "nodeType": "PERSON",
        "relatedNodeId": 110440382,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 7,
                "month": 5,
                "year": 2009,
                "fullDate": "2009-05-07"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440029,
        "nodeType": "PERSON",
        "relatedNodeId": 110440383,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 10,
                "month": 10,
                "year": 2013,
                "fullDate": "2013-10-10"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440030,
        "nodeType": "PERSON",
        "relatedNodeId": 110440042,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 1997,
                "fullDate": "1997-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440030,
        "nodeType": "PERSON",
        "relatedNodeId": 110440043,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 1997,
                "fullDate": "1997-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440030,
        "nodeType": "PERSON",
        "relatedNodeId": 110440069,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 1997,
                "fullDate": "1997-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440030,
        "nodeType": "PERSON",
        "relatedNodeId": 110440407,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2008,
                "fullDate": "2008-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440030,
        "nodeType": "PERSON",
        "relatedNodeId": 110440408,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 28,
                "month": 9,
                "year": 2005,
                "fullDate": "2005-09-28"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440030,
        "nodeType": "PERSON",
        "relatedNodeId": 110440409,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 25,
                "month": 4,
                "year": 2012,
                "fullDate": "2012-04-25"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440030,
        "nodeType": "PERSON",
        "relatedNodeId": 110440410,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 27,
                "month": 8,
                "year": 2010,
                "fullDate": "2010-08-27"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440030,
        "nodeType": "PERSON",
        "relatedNodeId": 110440411,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 13,
                "month": 4,
                "year": 2010,
                "fullDate": "2010-04-13"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440030,
        "nodeType": "PERSON",
        "relatedNodeId": 110440412,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 21,
                "month": 6,
                "year": 2016,
                "fullDate": "2016-06-21"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440031,
        "nodeType": "PERSON",
        "relatedNodeId": 110440039,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 3,
                "month": 9,
                "year": 2003,
                "fullDate": "2003-09-03"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440031,
        "nodeType": "PERSON",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 26,
                "month": 4,
                "year": 2001,
                "fullDate": "2001-04-26"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440031,
        "nodeType": "PERSON",
        "relatedNodeId": 110440042,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 26,
                "month": 4,
                "year": 2001,
                "fullDate": "2001-04-26"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440031,
        "nodeType": "PERSON",
        "relatedNodeId": 110440043,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 26,
                "month": 4,
                "year": 2001,
                "fullDate": "2001-04-26"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440031,
        "nodeType": "PERSON",
        "relatedNodeId": 110440046,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 26,
                "month": 4,
                "year": 2001,
                "fullDate": "2001-04-26"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440031,
        "nodeType": "PERSON",
        "relatedNodeId": 110440069,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 26,
                "month": 4,
                "year": 2001,
                "fullDate": "2001-04-26"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440031,
        "nodeType": "PERSON",
        "relatedNodeId": 110440169,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2005,
                "fullDate": "2005-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440031,
        "nodeType": "PERSON",
        "relatedNodeId": 110440224,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 6,
                "month": 4,
                "year": 2017,
                "fullDate": "2017-04-06"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440031,
        "nodeType": "PERSON",
        "relatedNodeId": 110440309,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2013,
                "fullDate": "2013-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440032,
        "nodeType": "PERSON",
        "relatedNodeId": 110440310,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 2,
                "month": 3,
                "year": 2011,
                "fullDate": "2011-03-02"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440032,
        "nodeType": "PERSON",
        "relatedNodeId": 110440311,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 2,
                "month": 3,
                "year": 2011,
                "fullDate": "2011-03-02"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440033,
        "nodeType": "PERSON",
        "relatedNodeId": 110440172,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2012,
                "fullDate": "2012-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440034,
        "nodeType": "PERSON",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 4,
                "year": 2017,
                "fullDate": "2017-04-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440034,
        "nodeType": "PERSON",
        "relatedNodeId": 110440043,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 4,
                "year": 2017,
                "fullDate": "2017-04-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440034,
        "nodeType": "PERSON",
        "relatedNodeId": 110440046,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 4,
                "year": 2017,
                "fullDate": "2017-04-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440034,
        "nodeType": "PERSON",
        "relatedNodeId": 110440062,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 4,
                "year": 2017,
                "fullDate": "2017-04-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440034,
        "nodeType": "PERSON",
        "relatedNodeId": 110440069,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 4,
                "year": 2017,
                "fullDate": "2017-04-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440034,
        "nodeType": "PERSON",
        "relatedNodeId": 110440406,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 3,
                "year": 2007,
                "fullDate": "2007-03-19"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 3,
                "year": 2007,
                "fullDate": "2007-03-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440035,
        "nodeType": "PERSON",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 23,
                "month": 4,
                "year": 2015,
                "fullDate": "2015-04-23"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440035,
        "nodeType": "PERSON",
        "relatedNodeId": 110440042,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 23,
                "month": 4,
                "year": 2015,
                "fullDate": "2015-04-23"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440035,
        "nodeType": "PERSON",
        "relatedNodeId": 110440043,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 23,
                "month": 4,
                "year": 2015,
                "fullDate": "2015-04-23"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440035,
        "nodeType": "PERSON",
        "relatedNodeId": 110440046,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 23,
                "month": 4,
                "year": 2015,
                "fullDate": "2015-04-23"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440035,
        "nodeType": "PERSON",
        "relatedNodeId": 110440069,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 23,
                "month": 4,
                "year": 2015,
                "fullDate": "2015-04-23"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440035,
        "nodeType": "PERSON",
        "relatedNodeId": 110440230,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 30,
                "month": 5,
                "year": 2017,
                "fullDate": "2017-05-30"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440036,
        "nodeType": "PERSON",
        "relatedNodeId": 110440039,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440036,
        "nodeType": "PERSON",
        "relatedNodeId": 110440041,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440036,
        "nodeType": "PERSON",
        "relatedNodeId": 110440044,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440036,
        "nodeType": "PERSON",
        "relatedNodeId": 110440046,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440036,
        "nodeType": "PERSON",
        "relatedNodeId": 110440049,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440036,
        "nodeType": "PERSON",
        "relatedNodeId": 110440054,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440036,
        "nodeType": "PERSON",
        "relatedNodeId": 110440055,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440036,
        "nodeType": "PERSON",
        "relatedNodeId": 110440059,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440036,
        "nodeType": "PERSON",
        "relatedNodeId": 110440066,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440036,
        "nodeType": "PERSON",
        "relatedNodeId": 110440073,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440036,
        "nodeType": "PERSON",
        "relatedNodeId": 110440074,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440036,
        "nodeType": "PERSON",
        "relatedNodeId": 110440165,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440036,
        "nodeType": "PERSON",
        "relatedNodeId": 110440287,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2016,
                "fullDate": "2016-08-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440037,
        "nodeType": "PERSON",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440037,
        "nodeType": "PERSON",
        "relatedNodeId": 110440046,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440037,
        "nodeType": "PERSON",
        "relatedNodeId": 110440054,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2017,
                "fullDate": "2017-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440037,
        "nodeType": "PERSON",
        "relatedNodeId": 110440066,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 15,
                "month": 5,
                "year": 2017,
                "fullDate": "2017-05-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440038,
        "nodeType": "PERSON",
        "relatedNodeId": 110440175,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 5,
                "month": 7,
                "year": 2007,
                "fullDate": "2007-07-05"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440038,
        "nodeType": "PERSON",
        "relatedNodeId": 110440176,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 21,
                "month": 6,
                "year": 2007,
                "fullDate": "2007-06-21"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440038,
        "nodeType": "PERSON",
        "relatedNodeId": 110440177,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 12,
                "month": 1,
                "year": 2009,
                "fullDate": "2009-01-12"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440038,
        "nodeType": "PERSON",
        "relatedNodeId": 110440178,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 15,
                "month": 4,
                "year": 2013,
                "fullDate": "2013-04-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440038,
        "nodeType": "PERSON",
        "relatedNodeId": 110440179,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 26,
                "month": 7,
                "year": 2013,
                "fullDate": "2013-07-26"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440002,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 1987,
                "fullDate": "1987-11-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440003,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440008,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 1991,
                "fullDate": "1991-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440013,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 16,
                "month": 4,
                "year": 2003,
                "fullDate": "2003-04-16"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440020,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 16,
                "month": 3,
                "year": 2012,
                "fullDate": "2012-03-16"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440031,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 3,
                "month": 9,
                "year": 2003,
                "fullDate": "2003-09-03"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440036,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440044,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SUB",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 1983,
                "fullDate": "1983-08-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440059,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 15,
                "month": 5,
                "year": 2000,
                "fullDate": "2000-05-15"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 15,
                "month": 5,
                "year": 2000,
                "fullDate": "2000-05-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440076,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 3,
                "month": 4,
                "year": 2000,
                "fullDate": "2000-04-03"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440077,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2015,
                "fullDate": "2015-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440078,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2012,
                "fullDate": "2012-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440079,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2014,
                "fullDate": "2014-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440080,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440084,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2016,
                "fullDate": "2016-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440085,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440086,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440087,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440089,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2011,
                "fullDate": "2011-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440099,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 26,
                "month": 11,
                "year": 2018,
                "fullDate": "2018-11-26"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440103,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2017,
                "fullDate": "2017-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440120,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2013,
                "fullDate": "2013-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440160,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2013,
                "fullDate": "2013-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440161,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 9,
                "month": 10,
                "year": 2002,
                "fullDate": "2002-10-09"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440181,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2014,
                "fullDate": "2014-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440182,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 7,
                "month": 7,
                "year": 2014,
                "fullDate": "2014-07-07"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440183,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2017,
                "fullDate": "2017-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440184,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2017,
                "fullDate": "2017-02-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440185,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 17,
                "month": 4,
                "year": 2014,
                "fullDate": "2014-04-17"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440186,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 12,
                "month": 12,
                "year": 2000,
                "fullDate": "2000-12-12"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440187,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440188,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2016,
                "fullDate": "2016-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440189,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2006,
                "fullDate": "2006-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440190,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2009,
                "fullDate": "2009-09-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440191,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2013,
                "fullDate": "2013-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440192,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2009,
                "fullDate": "2009-11-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2009,
                "fullDate": "2009-11-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440193,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2006,
                "fullDate": "2006-11-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440194,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2003,
                "fullDate": "2003-12-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2003,
                "fullDate": "2003-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440195,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2005,
                "fullDate": "2005-02-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2005,
                "fullDate": "2005-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440196,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2005,
                "fullDate": "2005-04-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440197,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2015,
                "fullDate": "2015-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440198,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2007,
                "fullDate": "2007-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440199,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2013,
                "fullDate": "2013-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440200,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2010,
                "fullDate": "2010-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440201,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2013,
                "fullDate": "2013-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440202,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2015,
                "fullDate": "2015-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440203,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 12,
                "month": 12,
                "year": 2000,
                "fullDate": "2000-12-12"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440204,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2004,
                "fullDate": "2004-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440205,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2006,
                "fullDate": "2006-08-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440206,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2013,
                "fullDate": "2013-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440207,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2017,
                "fullDate": "2017-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440208,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2009,
                "fullDate": "2009-08-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440209,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2018,
                "fullDate": "2018-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440210,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 20,
                "month": 3,
                "year": 2017,
                "fullDate": "2017-03-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440211,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2002,
                "fullDate": "2002-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440212,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2014,
                "fullDate": "2014-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440213,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2010,
                "fullDate": "2010-08-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440214,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2002,
                "fullDate": "2002-11-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440039,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440215,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 1988,
                "fullDate": "1988-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440010,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2013,
                "fullDate": "2013-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440016,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 22,
                "month": 9,
                "year": 1998,
                "fullDate": "1998-09-22"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440018,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2005,
                "fullDate": "2005-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440022,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2004,
                "fullDate": "2004-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440025,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 10,
                "year": 2012,
                "fullDate": "2012-10-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440026,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2006,
                "fullDate": "2006-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440031,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 26,
                "month": 4,
                "year": 2001,
                "fullDate": "2001-04-26"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440034,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 20,
                "month": 4,
                "year": 2017,
                "fullDate": "2017-04-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440035,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 23,
                "month": 4,
                "year": 2015,
                "fullDate": "2015-04-23"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440037,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440042,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 30,
                "month": 9,
                "year": 1972,
                "fullDate": "1972-09-30"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 30,
                "month": 9,
                "year": 1972,
                "fullDate": "1972-09-30"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "SUB",
              "startdate": {
                "day": 14,
                "month": 6,
                "year": 1989,
                "fullDate": "1989-06-14"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440046,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SUB",
              "startdate": {
                "day": 30,
                "month": 12,
                "year": 2014,
                "fullDate": "2014-12-30"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440052,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 12,
                "month": 9,
                "year": 1977,
                "fullDate": "1977-09-12"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 12,
                "month": 9,
                "year": 1977,
                "fullDate": "1977-09-12"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440053,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 12,
                "year": 1980,
                "fullDate": "1980-12-19"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 12,
                "year": 1980,
                "fullDate": "1980-12-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440062,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 14,
                "month": 12,
                "year": 2011,
                "fullDate": "2011-12-14"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 14,
                "month": 12,
                "year": 2011,
                "fullDate": "2011-12-14"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440064,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 5,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-05"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 5,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-05"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "SUB",
              "startdate": {
                "day": 5,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-05"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440065,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 4,
                "month": 3,
                "year": 2004,
                "fullDate": "2004-03-04"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 4,
                "month": 3,
                "year": 2004,
                "fullDate": "2004-03-04"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440068,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 9,
                "month": 1,
                "year": 2015,
                "fullDate": "2015-01-09"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 9,
                "month": 1,
                "year": 2015,
                "fullDate": "2015-01-09"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440070,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 28,
                "month": 5,
                "year": 2010,
                "fullDate": "2010-05-28"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 28,
                "month": 5,
                "year": 2010,
                "fullDate": "2010-05-28"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440071,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 24,
                "month": 11,
                "year": 2010,
                "fullDate": "2010-11-24"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 24,
                "month": 11,
                "year": 2010,
                "fullDate": "2010-11-24"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440096,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 11,
                "month": 4,
                "year": 1996,
                "fullDate": "1996-04-11"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440098,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2007,
                "fullDate": "2007-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440101,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 18,
                "month": 7,
                "year": 2005,
                "fullDate": "2005-07-18"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440104,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 6,
                "year": 2016,
                "fullDate": "2016-06-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440105,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2006,
                "fullDate": "2006-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440132,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2005,
                "fullDate": "2005-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440133,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2009,
                "fullDate": "2009-08-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440141,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2013,
                "fullDate": "2013-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440142,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2015,
                "fullDate": "2015-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440144,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2016,
                "fullDate": "2016-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440145,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2016,
                "fullDate": "2016-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440166,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-19"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440167,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-19"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440168,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-19"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440169,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 11,
                "month": 9,
                "year": 1974,
                "fullDate": "1974-09-11"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "SUB",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 1974,
                "fullDate": "1974-08-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440170,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2005,
                "fullDate": "2005-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440171,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440202,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2016,
                "fullDate": "2016-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440240,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2016,
                "fullDate": "2016-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440241,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 18,
                "month": 12,
                "year": 2017,
                "fullDate": "2017-12-18"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440242,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2004,
                "fullDate": "2004-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440243,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 16,
                "month": 9,
                "year": 2019,
                "fullDate": "2019-09-16"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440244,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 1,
                "year": 2009,
                "fullDate": "2009-01-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440245,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2010,
                "fullDate": "2010-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440246,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 5,
                "year": 2010,
                "fullDate": "2010-05-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440247,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440248,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440249,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 17,
                "month": 6,
                "year": 2019,
                "fullDate": "2019-06-17"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440250,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2013,
                "fullDate": "2013-02-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440251,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2019,
                "fullDate": "2019-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440252,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2013,
                "fullDate": "2013-11-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440253,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2014,
                "fullDate": "2014-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440254,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2016,
                "fullDate": "2016-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440255,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2015,
                "fullDate": "2015-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440256,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2015,
                "fullDate": "2015-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440257,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2015,
                "fullDate": "2015-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440258,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2016,
                "fullDate": "2016-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440259,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2016,
                "fullDate": "2016-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440260,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2013,
                "fullDate": "2013-11-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440261,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2019,
                "fullDate": "2019-02-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440262,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 12,
                "month": 10,
                "year": 2018,
                "fullDate": "2018-10-12"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440263,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 10,
                "month": 4,
                "year": 2019,
                "fullDate": "2019-04-10"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440264,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440265,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 29,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-29"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440266,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 19,
                "month": 3,
                "year": 2019,
                "fullDate": "2019-03-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440267,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2017,
                "fullDate": "2017-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440268,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2017,
                "fullDate": "2017-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440269,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 10,
                "month": 9,
                "year": 2018,
                "fullDate": "2018-09-10"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440270,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 22,
                "month": 7,
                "year": 2019,
                "fullDate": "2019-07-22"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440271,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2015,
                "fullDate": "2015-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440272,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 19,
                "month": 3,
                "year": 2019,
                "fullDate": "2019-03-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440273,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 25,
                "month": 2,
                "year": 2019,
                "fullDate": "2019-02-25"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440274,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2019,
                "fullDate": "2019-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440275,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 18,
                "month": 10,
                "year": 2018,
                "fullDate": "2018-10-18"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440276,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 9,
                "month": 9,
                "year": 2019,
                "fullDate": "2019-09-09"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440277,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440278,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2008,
                "fullDate": "2008-11-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440279,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 10,
                "year": 2018,
                "fullDate": "2018-10-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440280,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 19,
                "month": 3,
                "year": 2019,
                "fullDate": "2019-03-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440281,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2017,
                "fullDate": "2017-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440282,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 10,
                "month": 9,
                "year": 2018,
                "fullDate": "2018-09-10"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440283,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 9,
                "year": 2006,
                "fullDate": "2006-09-20"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 20,
                "month": 9,
                "year": 2006,
                "fullDate": "2006-09-20"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "SUB",
              "startdate": {
                "day": 20,
                "month": 9,
                "year": 2006,
                "fullDate": "2006-09-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440284,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SUB",
              "startdate": {
                "day": 22,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-22"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440285,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SUB",
              "startdate": {
                "day": 11,
                "month": 12,
                "year": 2003,
                "fullDate": "2003-12-11"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440286,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 21,
                "month": 5,
                "year": 2013,
                "fullDate": "2013-05-21"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 21,
                "month": 5,
                "year": 2013,
                "fullDate": "2013-05-21"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440287,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 7,
                "year": 2016,
                "fullDate": "2016-07-19"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 7,
                "year": 2016,
                "fullDate": "2016-07-19"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "SUB",
              "startdate": {
                "day": 19,
                "month": 7,
                "year": 2016,
                "fullDate": "2016-07-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440288,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 19,
                "month": 12,
                "year": 1980,
                "fullDate": "1980-12-19"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440040,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440289,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 21,
                "month": 11,
                "year": 2012,
                "fullDate": "2012-11-21"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "SUB",
              "startdate": {
                "day": 21,
                "month": 11,
                "year": 2012,
                "fullDate": "2012-11-21"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440002,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 1991,
                "fullDate": "1991-07-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440003,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2004,
                "fullDate": "2004-08-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440008,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 1991,
                "fullDate": "1991-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440013,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2004,
                "fullDate": "2004-08-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440020,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 16,
                "month": 3,
                "year": 2012,
                "fullDate": "2012-03-16"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440036,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440039,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SHL",
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440076,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 3,
                "month": 4,
                "year": 2000,
                "fullDate": "2000-04-03"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440077,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2015,
                "fullDate": "2015-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440079,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2014,
                "fullDate": "2014-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440080,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2005,
                "fullDate": "2005-07-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440084,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2016,
                "fullDate": "2016-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440085,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440086,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440087,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440088,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440089,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2011,
                "fullDate": "2011-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440096,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 1997,
                "fullDate": "1997-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440097,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2011,
                "fullDate": "2011-09-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440190,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2009,
                "fullDate": "2009-09-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440192,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2009,
                "fullDate": "2009-11-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2009,
                "fullDate": "2009-11-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440197,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2015,
                "fullDate": "2015-05-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2015,
                "fullDate": "2015-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440198,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2008,
                "fullDate": "2008-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440207,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2017,
                "fullDate": "2017-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440241,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 23,
                "month": 6,
                "year": 2015,
                "fullDate": "2015-06-23"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 23,
                "month": 6,
                "year": 2015,
                "fullDate": "2015-06-23"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440426,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 18,
                "month": 6,
                "year": 2015,
                "fullDate": "2015-06-18"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440427,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2014,
                "fullDate": "2014-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440428,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2009,
                "fullDate": "2009-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440429,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2011,
                "fullDate": "2011-04-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440430,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 24,
                "month": 5,
                "year": 2012,
                "fullDate": "2012-05-24"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440431,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 24,
                "month": 5,
                "year": 2012,
                "fullDate": "2012-05-24"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440432,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2013,
                "fullDate": "2013-11-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440433,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2015,
                "fullDate": "2015-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440434,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2016,
                "fullDate": "2016-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440435,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440436,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440437,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440438,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2008,
                "fullDate": "2008-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440439,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 17,
                "month": 10,
                "year": 2011,
                "fullDate": "2011-10-17"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440440,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2009,
                "fullDate": "2009-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440441,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2010,
                "fullDate": "2010-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440442,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2008,
                "fullDate": "2008-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440443,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2008,
                "fullDate": "2008-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440444,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2008,
                "fullDate": "2008-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440445,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 20,
                "month": 9,
                "year": 2011,
                "fullDate": "2011-09-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440446,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440447,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 4,
                "year": 2011,
                "fullDate": "2011-04-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440448,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2018,
                "fullDate": "2018-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440449,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2017,
                "fullDate": "2017-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440450,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2013,
                "fullDate": "2013-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440451,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2010,
                "fullDate": "2010-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440452,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2009,
                "fullDate": "2009-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440453,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2013,
                "fullDate": "2013-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440454,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440455,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 20,
                "month": 9,
                "year": 2011,
                "fullDate": "2011-09-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440456,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 20,
                "month": 9,
                "year": 2011,
                "fullDate": "2011-09-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440457,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2008,
                "fullDate": "2008-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440458,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 24,
                "month": 5,
                "year": 2012,
                "fullDate": "2012-05-24"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440459,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 17,
                "month": 10,
                "year": 2011,
                "fullDate": "2011-10-17"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440460,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440461,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2003,
                "fullDate": "2003-09-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440462,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2008,
                "fullDate": "2008-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440463,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 1981,
                "fullDate": "1981-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440464,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2009,
                "fullDate": "2009-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440465,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2006,
                "fullDate": "2006-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440466,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 4,
                "year": 2011,
                "fullDate": "2011-04-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440467,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2013,
                "fullDate": "2013-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440041,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440468,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 24,
                "month": 5,
                "year": 2012,
                "fullDate": "2012-05-24"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440003,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440010,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2015,
                "fullDate": "2015-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440012,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 3,
                "month": 8,
                "year": 1995,
                "fullDate": "1995-08-03"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 3,
                "month": 8,
                "year": 1995,
                "fullDate": "1995-08-03"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440013,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440014,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2003,
                "fullDate": "2003-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440016,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 22,
                "month": 9,
                "year": 1998,
                "fullDate": "1998-09-22"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440018,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2005,
                "fullDate": "2005-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440019,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2005,
                "fullDate": "2005-02-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440022,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2004,
                "fullDate": "2004-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440024,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2008,
                "fullDate": "2008-11-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440030,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 1997,
                "fullDate": "1997-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440031,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 26,
                "month": 4,
                "year": 2001,
                "fullDate": "2001-04-26"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440035,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 23,
                "month": 4,
                "year": 2015,
                "fullDate": "2015-04-23"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 30,
                "month": 9,
                "year": 1972,
                "fullDate": "1972-09-30"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 30,
                "month": 9,
                "year": 1972,
                "fullDate": "1972-09-30"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "PAR",
              "startdate": {
                "day": 14,
                "month": 6,
                "year": 1989,
                "fullDate": "1989-06-14"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 14,
                "month": 6,
                "year": 1989,
                "fullDate": "1989-06-14"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440096,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 11,
                "month": 4,
                "year": 1996,
                "fullDate": "1996-04-11"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440098,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2007,
                "fullDate": "2007-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440101,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 18,
                "month": 7,
                "year": 2005,
                "fullDate": "2005-07-18"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440105,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2006,
                "fullDate": "2006-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440128,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2006,
                "fullDate": "2006-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440132,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2005,
                "fullDate": "2005-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440133,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2009,
                "fullDate": "2009-08-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440148,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2002,
                "fullDate": "2002-11-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440161,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 9,
                "month": 10,
                "year": 2002,
                "fullDate": "2002-10-09"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440171,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440187,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440242,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2004,
                "fullDate": "2004-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440244,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 1,
                "year": 2009,
                "fullDate": "2009-01-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440319,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 1986,
                "fullDate": "1986-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440413,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2008,
                "fullDate": "2008-11-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440414,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 24,
                "month": 2,
                "year": 1986,
                "fullDate": "1986-02-24"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440420,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2007,
                "fullDate": "2007-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440423,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2002,
                "fullDate": "2002-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440042,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440469,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 1996,
                "fullDate": "1996-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440003,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440010,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2015,
                "fullDate": "2015-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440012,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 1996,
                "fullDate": "1996-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440013,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440016,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 22,
                "month": 9,
                "year": 1998,
                "fullDate": "1998-09-22"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440018,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2005,
                "fullDate": "2005-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440019,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2006,
                "fullDate": "2006-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440022,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2009,
                "fullDate": "2009-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440024,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2009,
                "fullDate": "2009-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440030,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 1997,
                "fullDate": "1997-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440031,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 26,
                "month": 4,
                "year": 2001,
                "fullDate": "2001-04-26"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440034,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 20,
                "month": 4,
                "year": 2017,
                "fullDate": "2017-04-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440035,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 23,
                "month": 4,
                "year": 2015,
                "fullDate": "2015-04-23"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440096,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 11,
                "month": 4,
                "year": 1996,
                "fullDate": "1996-04-11"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440097,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2011,
                "fullDate": "2011-09-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440098,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2007,
                "fullDate": "2007-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440099,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2010,
                "fullDate": "2010-11-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440101,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 17,
                "month": 8,
                "year": 2005,
                "fullDate": "2005-08-17"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440105,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440106,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2008,
                "fullDate": "2008-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440124,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2009,
                "fullDate": "2009-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440125,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 11,
                "year": 2018,
                "fullDate": "2018-11-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440126,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2009,
                "fullDate": "2009-11-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440128,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2011,
                "fullDate": "2011-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440132,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2005,
                "fullDate": "2005-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440133,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 7,
                "month": 1,
                "year": 2011,
                "fullDate": "2011-01-07"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440134,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2003,
                "fullDate": "2003-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440148,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2011,
                "fullDate": "2011-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440161,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 9,
                "month": 10,
                "year": 2002,
                "fullDate": "2002-10-09"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440171,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440196,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2013,
                "fullDate": "2013-02-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440198,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 9,
                "year": 2014,
                "fullDate": "2014-09-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440214,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2013,
                "fullDate": "2013-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440242,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2004,
                "fullDate": "2004-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440259,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2016,
                "fullDate": "2016-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440317,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 11,
                "year": 2015,
                "fullDate": "2015-11-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440318,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 1990,
                "fullDate": "1990-11-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 1990,
                "fullDate": "1990-11-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440319,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 20,
                "month": 5,
                "year": 1986,
                "fullDate": "1986-05-20"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440320,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440321,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2014,
                "fullDate": "2014-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440322,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 5,
                "month": 10,
                "year": 2001,
                "fullDate": "2001-10-05"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440323,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440324,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 1999,
                "fullDate": "1999-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440325,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2001,
                "fullDate": "2001-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440326,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2013,
                "fullDate": "2013-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440327,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2005,
                "fullDate": "2005-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440328,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2005,
                "fullDate": "2005-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440329,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2008,
                "fullDate": "2008-11-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440330,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2011,
                "fullDate": "2011-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440331,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440332,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2014,
                "fullDate": "2014-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440333,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440334,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440335,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440336,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2013,
                "fullDate": "2013-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440337,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2004,
                "fullDate": "2004-08-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440338,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440339,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440340,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2002,
                "fullDate": "2002-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440341,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 1998,
                "fullDate": "1998-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440342,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 1,
                "year": 2011,
                "fullDate": "2011-01-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440343,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2013,
                "fullDate": "2013-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440344,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 1995,
                "fullDate": "1995-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440345,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440346,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2011,
                "fullDate": "2011-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440347,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2001,
                "fullDate": "2001-08-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440348,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2009,
                "fullDate": "2009-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440349,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 19,
                "month": 6,
                "year": 2017,
                "fullDate": "2017-06-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440350,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2007,
                "fullDate": "2007-04-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440351,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2013,
                "fullDate": "2013-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440352,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 9,
                "year": 2012,
                "fullDate": "2012-09-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440353,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2007,
                "fullDate": "2007-08-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440354,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2013,
                "fullDate": "2013-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440355,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 16,
                "month": 6,
                "year": 2003,
                "fullDate": "2003-06-16"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440356,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2006,
                "fullDate": "2006-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440043,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440357,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 7,
                "year": 2018,
                "fullDate": "2018-07-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440002,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440003,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440008,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 1991,
                "fullDate": "1991-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440036,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440039,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "PAR",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 1983,
                "fullDate": "1983-08-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 1983,
                "fullDate": "1983-08-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440047,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 27,
                "month": 2,
                "year": 1992,
                "fullDate": "1992-02-27"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440049,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 1983,
                "fullDate": "1983-12-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 1983,
                "fullDate": "1983-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440055,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 3,
                "month": 7,
                "year": 1972,
                "fullDate": "1972-07-03"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 3,
                "month": 7,
                "year": 1972,
                "fullDate": "1972-07-03"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440073,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SUB",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2019,
                "fullDate": "2019-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440080,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440081,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440084,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2016,
                "fullDate": "2016-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440085,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440086,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440088,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440096,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 1997,
                "fullDate": "1997-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440187,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440188,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2016,
                "fullDate": "2016-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440189,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2006,
                "fullDate": "2006-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440201,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2013,
                "fullDate": "2013-10-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440301,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440303,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440308,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 21,
                "month": 12,
                "year": 1990,
                "fullDate": "1990-12-21"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440470,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 17,
                "month": 8,
                "year": 2006,
                "fullDate": "2006-08-17"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440471,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2014,
                "fullDate": "2014-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440472,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2006,
                "fullDate": "2006-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440473,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2017,
                "fullDate": "2017-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440474,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 7,
                "month": 7,
                "year": 2014,
                "fullDate": "2014-07-07"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440475,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2018,
                "fullDate": "2018-06-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2019,
                "fullDate": "2019-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440476,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2017,
                "fullDate": "2017-02-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440477,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 20,
                "month": 3,
                "year": 2017,
                "fullDate": "2017-03-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440478,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2017,
                "fullDate": "2017-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440479,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2014,
                "fullDate": "2014-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440480,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 5,
                "year": 2019,
                "fullDate": "2019-05-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440481,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 23,
                "month": 4,
                "year": 2019,
                "fullDate": "2019-04-23"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440482,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 3,
                "year": 2019,
                "fullDate": "2019-03-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440483,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 10,
                "month": 10,
                "year": 1990,
                "fullDate": "1990-10-10"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440484,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 1995,
                "fullDate": "1995-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440485,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 18,
                "month": 10,
                "year": 1990,
                "fullDate": "1990-10-18"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440486,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 23,
                "month": 5,
                "year": 2005,
                "fullDate": "2005-05-23"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 23,
                "month": 5,
                "year": 2005,
                "fullDate": "2005-05-23"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440487,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 27,
                "month": 2,
                "year": 1991,
                "fullDate": "1991-02-27"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440488,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 1973,
                "fullDate": "1973-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440044,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440489,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 24,
                "month": 5,
                "year": 2007,
                "fullDate": "2007-05-24"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 24,
                "month": 5,
                "year": 2007,
                "fullDate": "2007-05-24"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440045,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 28,
                "month": 9,
                "year": 1972,
                "fullDate": "1972-09-28"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440010,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2015,
                "fullDate": "2015-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440016,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 22,
                "month": 9,
                "year": 1998,
                "fullDate": "1998-09-22"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440022,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2004,
                "fullDate": "2004-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440026,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 17,
                "month": 1,
                "year": 2019,
                "fullDate": "2019-01-17"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440031,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 26,
                "month": 4,
                "year": 2001,
                "fullDate": "2001-04-26"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440034,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 20,
                "month": 4,
                "year": 2017,
                "fullDate": "2017-04-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440035,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 23,
                "month": 4,
                "year": 2015,
                "fullDate": "2015-04-23"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440036,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440037,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "PAR",
              "startdate": {
                "day": 30,
                "month": 12,
                "year": 2014,
                "fullDate": "2014-12-30"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 30,
                "month": 12,
                "year": 2014,
                "fullDate": "2014-12-30"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440061,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 31,
                "month": 12,
                "year": 2004,
                "fullDate": "2004-12-31"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 31,
                "month": 12,
                "year": 2004,
                "fullDate": "2004-12-31"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440088,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440096,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 11,
                "month": 4,
                "year": 1996,
                "fullDate": "1996-04-11"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440098,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2007,
                "fullDate": "2007-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440101,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 18,
                "month": 7,
                "year": 2005,
                "fullDate": "2005-07-18"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440105,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2006,
                "fullDate": "2006-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440128,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2006,
                "fullDate": "2006-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440132,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2005,
                "fullDate": "2005-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440133,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2009,
                "fullDate": "2009-08-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440144,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2016,
                "fullDate": "2016-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440171,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440187,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440202,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2016,
                "fullDate": "2016-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440242,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2004,
                "fullDate": "2004-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440244,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 1,
                "year": 2009,
                "fullDate": "2009-01-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440247,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440249,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 17,
                "month": 6,
                "year": 2019,
                "fullDate": "2019-06-17"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440250,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440251,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2019,
                "fullDate": "2019-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440254,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2016,
                "fullDate": "2016-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440255,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2015,
                "fullDate": "2015-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440256,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2015,
                "fullDate": "2015-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440257,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2015,
                "fullDate": "2015-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440259,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2016,
                "fullDate": "2016-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440260,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2013,
                "fullDate": "2013-11-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440269,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 10,
                "month": 9,
                "year": 2018,
                "fullDate": "2018-09-10"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440274,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2019,
                "fullDate": "2019-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440276,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 9,
                "month": 9,
                "year": 2019,
                "fullDate": "2019-09-09"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440277,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2018,
                "fullDate": "2018-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440278,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2008,
                "fullDate": "2008-11-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440281,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2017,
                "fullDate": "2017-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440282,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 10,
                "month": 9,
                "year": 2018,
                "fullDate": "2018-09-10"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440358,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 6,
                "year": 2016,
                "fullDate": "2016-06-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440359,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2003,
                "fullDate": "2003-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440360,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2009,
                "fullDate": "2009-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440361,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2008,
                "fullDate": "2008-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440362,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2009,
                "fullDate": "2009-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440363,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2010,
                "fullDate": "2010-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440364,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2016,
                "fullDate": "2016-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440365,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2016,
                "fullDate": "2016-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440366,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 24,
                "month": 9,
                "year": 2018,
                "fullDate": "2018-09-24"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440367,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 3,
                "month": 6,
                "year": 2019,
                "fullDate": "2019-06-03"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440368,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2009,
                "fullDate": "2009-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440046,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440369,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 26,
                "month": 2,
                "year": 2018,
                "fullDate": "2018-02-26"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440047,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440044,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 27,
                "month": 2,
                "year": 1992,
                "fullDate": "1992-02-27"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 27,
                "month": 2,
                "year": 1992,
                "fullDate": "1992-02-27"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440047,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440073,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2014,
                "fullDate": "2014-03-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2014,
                "fullDate": "2014-03-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2014,
                "fullDate": "2014-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440047,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440078,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2013,
                "fullDate": "2013-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440047,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440083,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 7,
                "month": 7,
                "year": 2014,
                "fullDate": "2014-07-07"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 7,
                "month": 7,
                "year": 2014,
                "fullDate": "2014-07-07"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440047,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440305,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2013,
                "fullDate": "2013-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440047,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440307,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2013,
                "fullDate": "2013-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440047,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440402,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 20,
                "month": 7,
                "year": 1998,
                "fullDate": "1998-07-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440047,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440403,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440047,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440404,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440047,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440405,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440048,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440050,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 3,
                "month": 4,
                "year": 2003,
                "fullDate": "2003-04-03"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 3,
                "month": 4,
                "year": 2003,
                "fullDate": "2003-04-03"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 3,
                "month": 4,
                "year": 2003,
                "fullDate": "2003-04-03"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440048,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440370,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 21,
                "month": 7,
                "year": 1998,
                "fullDate": "1998-07-21"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440002,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2002,
                "fullDate": "2002-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440003,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2006,
                "fullDate": "2006-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440013,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 16,
                "month": 4,
                "year": 2003,
                "fullDate": "2003-04-16"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440020,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 16,
                "month": 3,
                "year": 2012,
                "fullDate": "2012-03-16"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440036,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440044,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 1983,
                "fullDate": "1983-12-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 1983,
                "fullDate": "1983-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440069,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 1972,
                "fullDate": "1972-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440076,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2003,
                "fullDate": "2003-09-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440077,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2015,
                "fullDate": "2015-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440078,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2012,
                "fullDate": "2012-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440079,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2014,
                "fullDate": "2014-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440080,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440081,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440082,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2008,
                "fullDate": "2008-10-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440083,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 7,
                "month": 7,
                "year": 2014,
                "fullDate": "2014-07-07"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 7,
                "month": 7,
                "year": 2014,
                "fullDate": "2014-07-07"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440084,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2016,
                "fullDate": "2016-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440085,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440086,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440087,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440088,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440089,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2011,
                "fullDate": "2011-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440049,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440090,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 31,
                "month": 12,
                "year": 2012,
                "fullDate": "2012-12-31"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440050,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440048,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 3,
                "month": 4,
                "year": 2003,
                "fullDate": "2003-04-03"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 3,
                "month": 4,
                "year": 2003,
                "fullDate": "2003-04-03"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 3,
                "month": 4,
                "year": 2003,
                "fullDate": "2003-04-03"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 2,
                "month": 4,
                "year": 2003,
                "fullDate": "2003-04-02"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440050,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440091,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 6,
                "year": 1987,
                "fullDate": "1987-06-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440050,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440092,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 29,
                "month": 6,
                "year": 2009,
                "fullDate": "2009-06-29"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 29,
                "month": 6,
                "year": 2009,
                "fullDate": "2009-06-29"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440050,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440093,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440050,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440094,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440050,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440095,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440051,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440010,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440051,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440016,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440051,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440022,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440051,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440024,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440051,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440026,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440051,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SHL",
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440051,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440170,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440051,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440171,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440052,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 12,
                "month": 9,
                "year": 1977,
                "fullDate": "1977-09-12"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 12,
                "month": 9,
                "year": 1977,
                "fullDate": "1977-09-12"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 24,
                "month": 5,
                "year": 1991,
                "fullDate": "1991-05-24"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440052,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440096,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 1997,
                "fullDate": "1997-04-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 1997,
                "fullDate": "1997-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440052,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440097,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2011,
                "fullDate": "2011-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440053,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440010,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440053,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440016,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440053,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440022,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440053,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440024,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440053,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440026,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440053,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 19,
                "month": 12,
                "year": 1980,
                "fullDate": "1980-12-19"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 19,
                "month": 12,
                "year": 1980,
                "fullDate": "1980-12-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440053,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440170,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440053,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440171,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440054,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440003,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440054,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440008,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 27,
                "month": 7,
                "year": 2009,
                "fullDate": "2009-07-27"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 27,
                "month": 7,
                "year": 2009,
                "fullDate": "2009-07-27"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440054,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440013,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440054,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440036,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440054,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440037,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2017,
                "fullDate": "2017-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440054,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440048,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 31,
                "month": 7,
                "year": 1984,
                "fullDate": "1984-07-31"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440054,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440371,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 2,
                "month": 10,
                "year": 2008,
                "fullDate": "2008-10-02"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440054,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440372,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2009,
                "fullDate": "2009-08-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440054,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440373,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2008,
                "fullDate": "2008-09-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2008,
                "fullDate": "2008-09-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440054,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440374,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2009,
                "fullDate": "2009-08-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440002,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2002,
                "fullDate": "2002-03-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2002,
                "fullDate": "2002-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440003,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2006,
                "fullDate": "2006-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440013,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 16,
                "month": 4,
                "year": 2003,
                "fullDate": "2003-04-16"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440020,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 16,
                "month": 3,
                "year": 2012,
                "fullDate": "2012-03-16"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440036,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440044,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 3,
                "month": 7,
                "year": 1972,
                "fullDate": "1972-07-03"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 3,
                "month": 7,
                "year": 1972,
                "fullDate": "1972-07-03"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 3,
                "month": 7,
                "year": 1972,
                "fullDate": "1972-07-03"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440076,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2003,
                "fullDate": "2003-09-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440077,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2015,
                "fullDate": "2015-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440078,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2012,
                "fullDate": "2012-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440079,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2014,
                "fullDate": "2014-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440080,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440081,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440082,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2008,
                "fullDate": "2008-10-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440083,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 7,
                "month": 7,
                "year": 2014,
                "fullDate": "2014-07-07"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440084,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2016,
                "fullDate": "2016-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440085,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440086,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440087,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440088,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440055,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440089,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2011,
                "fullDate": "2011-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440056,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440010,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 1,
                "year": 2016,
                "fullDate": "2016-01-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440056,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440018,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 28,
                "month": 3,
                "year": 2006,
                "fullDate": "2006-03-28"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440056,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440019,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 28,
                "month": 3,
                "year": 2006,
                "fullDate": "2006-03-28"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 28,
                "month": 3,
                "year": 2006,
                "fullDate": "2006-03-28"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440056,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440022,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2004,
                "fullDate": "2004-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440056,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440026,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 21,
                "month": 3,
                "year": 2008,
                "fullDate": "2008-03-21"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 21,
                "month": 3,
                "year": 2008,
                "fullDate": "2008-03-21"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440056,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440216,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 10,
                "month": 9,
                "year": 1998,
                "fullDate": "1998-09-10"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440056,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440217,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 29,
                "month": 7,
                "year": 1998,
                "fullDate": "1998-07-29"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 29,
                "month": 7,
                "year": 1998,
                "fullDate": "1998-07-29"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440056,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440218,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 26,
                "month": 5,
                "year": 2010,
                "fullDate": "2010-05-26"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440056,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440219,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 20,
                "month": 6,
                "year": 2017,
                "fullDate": "2017-06-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440056,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440220,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 26,
                "month": 4,
                "year": 2010,
                "fullDate": "2010-04-26"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440057,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440069,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 31,
                "month": 12,
                "year": 2004,
                "fullDate": "2004-12-31"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 31,
                "month": 12,
                "year": 2004,
                "fullDate": "2004-12-31"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 31,
                "month": 12,
                "year": 2004,
                "fullDate": "2004-12-31"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440058,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440050,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 23,
                "month": 8,
                "year": 2006,
                "fullDate": "2006-08-23"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440002,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2003,
                "fullDate": "2003-08-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440003,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2003,
                "fullDate": "2003-08-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440008,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 3,
                "month": 4,
                "year": 2000,
                "fullDate": "2000-04-03"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440013,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2003,
                "fullDate": "2003-08-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440020,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 16,
                "month": 3,
                "year": 2012,
                "fullDate": "2012-03-16"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440036,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440039,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 5,
                "year": 2000,
                "fullDate": "2000-05-15"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 5,
                "year": 2000,
                "fullDate": "2000-05-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440044,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 16,
                "month": 11,
                "year": 2004,
                "fullDate": "2004-11-16"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440078,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 22,
                "month": 9,
                "year": 2008,
                "fullDate": "2008-09-22"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440080,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2005,
                "fullDate": "2005-07-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440081,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440083,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 7,
                "month": 7,
                "year": 2014,
                "fullDate": "2014-07-07"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440085,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440086,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440087,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440088,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440096,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 1997,
                "fullDate": "1997-04-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 1997,
                "fullDate": "1997-04-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440183,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2017,
                "fullDate": "2017-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440191,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2014,
                "fullDate": "2014-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440199,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2013,
                "fullDate": "2013-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440204,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2004,
                "fullDate": "2004-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440209,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2018,
                "fullDate": "2018-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440210,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 20,
                "month": 3,
                "year": 2017,
                "fullDate": "2017-03-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440300,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 16,
                "month": 7,
                "year": 1998,
                "fullDate": "1998-07-16"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440301,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2007,
                "fullDate": "2007-02-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440302,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2016,
                "fullDate": "2016-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440303,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440304,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440305,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2013,
                "fullDate": "2013-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440306,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2017,
                "fullDate": "2017-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440307,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2013,
                "fullDate": "2013-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440059,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440308,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 21,
                "month": 12,
                "year": 1990,
                "fullDate": "1990-12-21"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440060,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440050,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 2,
                "month": 7,
                "year": 2004,
                "fullDate": "2004-07-02"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440061,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440046,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 31,
                "month": 12,
                "year": 2004,
                "fullDate": "2004-12-31"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 31,
                "month": 12,
                "year": 2004,
                "fullDate": "2004-12-31"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 31,
                "month": 12,
                "year": 2004,
                "fullDate": "2004-12-31"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440010,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2016,
                "fullDate": "2016-08-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440018,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440024,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2017,
                "fullDate": "2017-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440026,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440034,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 20,
                "month": 4,
                "year": 2017,
                "fullDate": "2017-04-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 14,
                "month": 12,
                "year": 2011,
                "fullDate": "2011-12-14"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 14,
                "month": 12,
                "year": 2011,
                "fullDate": "2011-12-14"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 14,
                "month": 12,
                "year": 2011,
                "fullDate": "2011-12-14"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440096,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2014,
                "fullDate": "2014-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440098,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440099,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440100,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2014,
                "fullDate": "2014-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440101,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440102,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2015,
                "fullDate": "2015-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440103,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440104,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 6,
                "year": 2016,
                "fullDate": "2016-06-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440105,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2014,
                "fullDate": "2014-04-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2014,
                "fullDate": "2014-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440106,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440107,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2015,
                "fullDate": "2015-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440108,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440109,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2015,
                "fullDate": "2015-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440110,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2015,
                "fullDate": "2015-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440111,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 7,
                "year": 2016,
                "fullDate": "2016-07-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440112,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2016,
                "fullDate": "2016-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440113,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 8,
                "year": 2017,
                "fullDate": "2017-08-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440114,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440115,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 16,
                "month": 4,
                "year": 2018,
                "fullDate": "2018-04-16"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440116,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440117,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2015,
                "fullDate": "2015-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440118,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2013,
                "fullDate": "2013-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440119,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440120,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440121,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 11,
                "year": 2018,
                "fullDate": "2018-11-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440122,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 12,
                "month": 3,
                "year": 2018,
                "fullDate": "2018-03-12"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440123,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440124,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440125,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 11,
                "year": 2018,
                "fullDate": "2018-11-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440062,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440126,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440063,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440010,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440063,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440016,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440063,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440022,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440063,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440024,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440063,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440026,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440063,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 19,
                "month": 9,
                "year": 2006,
                "fullDate": "2006-09-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440063,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440170,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440063,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440171,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440064,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 5,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-05"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 5,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-05"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "PAR",
              "startdate": {
                "day": 5,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-05"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 5,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-05"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440064,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440290,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440064,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440291,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-15"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440064,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440292,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440064,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440293,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440064,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440294,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 12,
                "year": 2016,
                "fullDate": "2016-12-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440064,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440295,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 17,
                "month": 9,
                "year": 2018,
                "fullDate": "2018-09-17"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440064,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440296,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2017,
                "fullDate": "2017-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440065,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440003,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440065,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440013,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440065,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 4,
                "month": 3,
                "year": 2004,
                "fullDate": "2004-03-04"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 4,
                "month": 3,
                "year": 2004,
                "fullDate": "2004-03-04"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 4,
                "month": 3,
                "year": 2004,
                "fullDate": "2004-03-04"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440065,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440120,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2010,
                "fullDate": "2010-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440065,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440156,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440065,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440490,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 3,
                "year": 2009,
                "fullDate": "2009-03-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440065,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440491,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2006,
                "fullDate": "2006-11-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2006,
                "fullDate": "2006-11-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440065,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440492,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2009,
                "fullDate": "2009-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440003,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440008,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2007,
                "fullDate": "2007-01-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2007,
                "fullDate": "2007-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440013,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440015,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 10,
                "year": 2012,
                "fullDate": "2012-10-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440018,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 25,
                "month": 1,
                "year": 2007,
                "fullDate": "2007-01-25"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 25,
                "month": 1,
                "year": 2007,
                "fullDate": "2007-01-25"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440024,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2017,
                "fullDate": "2017-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440025,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 10,
                "year": 2012,
                "fullDate": "2012-10-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440036,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440037,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 5,
                "year": 2017,
                "fullDate": "2017-05-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440101,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440103,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2014,
                "fullDate": "2014-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440127,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 25,
                "month": 11,
                "year": 2010,
                "fullDate": "2010-11-25"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440128,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440129,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 3,
                "year": 2012,
                "fullDate": "2012-03-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440130,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2013,
                "fullDate": "2013-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440131,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2013,
                "fullDate": "2013-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440132,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440133,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440134,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440135,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2015,
                "fullDate": "2015-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440136,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2011,
                "fullDate": "2011-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440137,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2013,
                "fullDate": "2013-11-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440138,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 3,
                "year": 2012,
                "fullDate": "2012-03-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440139,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440140,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2012,
                "fullDate": "2012-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440141,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2013,
                "fullDate": "2013-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440142,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2015,
                "fullDate": "2015-09-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440143,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2013,
                "fullDate": "2013-11-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440144,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2016,
                "fullDate": "2016-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440145,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2016,
                "fullDate": "2016-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440146,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2013,
                "fullDate": "2013-11-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440147,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440148,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440149,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2018,
                "fullDate": "2018-11-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440150,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2015,
                "fullDate": "2015-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440151,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2015,
                "fullDate": "2015-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440152,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 3,
                "year": 2012,
                "fullDate": "2012-03-15"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440153,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2013,
                "fullDate": "2013-11-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440154,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 22,
                "month": 2,
                "year": 2012,
                "fullDate": "2012-02-22"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440155,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440156,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2012,
                "fullDate": "2012-04-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440157,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2013,
                "fullDate": "2013-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440158,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2014,
                "fullDate": "2014-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440159,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2007,
                "fullDate": "2007-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440160,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2013,
                "fullDate": "2013-11-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440161,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440162,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440163,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2013,
                "fullDate": "2013-11-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440066,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440164,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2015,
                "fullDate": "2015-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440067,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440010,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440067,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440016,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440067,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440022,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440067,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440024,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440067,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440026,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440067,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 4,
                "month": 2,
                "year": 2003,
                "fullDate": "2003-02-04"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440067,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440170,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440067,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440171,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 19,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-19"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440068,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440010,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440068,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440016,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440068,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440022,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440068,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440024,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440068,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440026,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440068,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 9,
                "month": 1,
                "year": 2015,
                "fullDate": "2015-01-09"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 9,
                "month": 1,
                "year": 2015,
                "fullDate": "2015-01-09"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 29,
                "month": 12,
                "year": 2014,
                "fullDate": "2014-12-29"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440068,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440170,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440068,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440171,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440068,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440297,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 11,
                "month": 12,
                "year": 2014,
                "fullDate": "2014-12-11"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440003,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440010,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2015,
                "fullDate": "2015-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440012,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 3,
                "month": 8,
                "year": 1995,
                "fullDate": "1995-08-03"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440013,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440014,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 1998,
                "fullDate": "1998-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440015,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 10,
                "year": 2012,
                "fullDate": "2012-10-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440016,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 22,
                "month": 9,
                "year": 1998,
                "fullDate": "1998-09-22"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440018,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2005,
                "fullDate": "2005-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440019,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2005,
                "fullDate": "2005-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440022,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2004,
                "fullDate": "2004-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440024,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2008,
                "fullDate": "2008-11-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440030,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 1997,
                "fullDate": "1997-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440031,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 26,
                "month": 4,
                "year": 2001,
                "fullDate": "2001-04-26"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440034,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 20,
                "month": 4,
                "year": 2017,
                "fullDate": "2017-04-20"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440035,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 23,
                "month": 4,
                "year": 2015,
                "fullDate": "2015-04-23"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 30,
                "month": 12,
                "year": 2014,
                "fullDate": "2014-12-30"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440057,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 31,
                "month": 12,
                "year": 2004,
                "fullDate": "2004-12-31"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 31,
                "month": 12,
                "year": 2004,
                "fullDate": "2004-12-31"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440096,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 11,
                "month": 4,
                "year": 1996,
                "fullDate": "1996-04-11"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440097,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2011,
                "fullDate": "2011-09-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440098,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2007,
                "fullDate": "2007-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440101,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 1999,
                "fullDate": "1999-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440105,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2006,
                "fullDate": "2006-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440120,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2010,
                "fullDate": "2010-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440128,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2006,
                "fullDate": "2006-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440129,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440132,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2005,
                "fullDate": "2005-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440133,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2005,
                "fullDate": "2005-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440143,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2015,
                "fullDate": "2015-09-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440161,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 9,
                "month": 10,
                "year": 2002,
                "fullDate": "2002-10-09"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440171,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2011,
                "fullDate": "2011-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440187,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2012,
                "fullDate": "2012-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440242,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2004,
                "fullDate": "2004-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440244,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 1,
                "year": 2009,
                "fullDate": "2009-01-15"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 15,
                "month": 1,
                "year": 2009,
                "fullDate": "2009-01-15"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440250,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2013,
                "fullDate": "2013-02-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440255,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2015,
                "fullDate": "2015-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440259,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2016,
                "fullDate": "2016-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440260,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2015,
                "fullDate": "2015-09-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440319,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 1991,
                "fullDate": "1991-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440359,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2003,
                "fullDate": "2003-09-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440413,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2008,
                "fullDate": "2008-11-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440414,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 24,
                "month": 2,
                "year": 1986,
                "fullDate": "1986-02-24"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440415,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2009,
                "fullDate": "2009-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440416,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2013,
                "fullDate": "2013-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440417,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2003,
                "fullDate": "2003-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440418,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2009,
                "fullDate": "2009-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440419,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 12,
                "month": 5,
                "year": 2010,
                "fullDate": "2010-05-12"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440420,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2007,
                "fullDate": "2007-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440421,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 21,
                "month": 11,
                "year": 2002,
                "fullDate": "2002-11-21"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440422,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 1986,
                "fullDate": "1986-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440423,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 1985,
                "fullDate": "1985-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440424,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2011,
                "fullDate": "2011-09-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440069,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440425,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 11,
                "year": 2007,
                "fullDate": "2007-11-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440070,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440010,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2015,
                "fullDate": "2015-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440070,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440012,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2010,
                "fullDate": "2010-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440070,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440016,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2010,
                "fullDate": "2010-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440070,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440018,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2010,
                "fullDate": "2010-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440070,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440019,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2010,
                "fullDate": "2010-06-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440070,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440022,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2010,
                "fullDate": "2010-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440070,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440024,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2017,
                "fullDate": "2017-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440070,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440026,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2010,
                "fullDate": "2010-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440070,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 28,
                "month": 5,
                "year": 2010,
                "fullDate": "2010-05-28"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 28,
                "month": 5,
                "year": 2010,
                "fullDate": "2010-05-28"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 28,
                "month": 5,
                "year": 2010,
                "fullDate": "2010-05-28"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440070,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440170,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2010,
                "fullDate": "2010-06-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 6,
                "year": 2010,
                "fullDate": "2010-06-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440070,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440171,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440071,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440010,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440071,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440012,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2010,
                "fullDate": "2010-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440071,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440016,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2010,
                "fullDate": "2010-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440071,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440018,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2010,
                "fullDate": "2010-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440071,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440019,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2010,
                "fullDate": "2010-12-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440071,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440022,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2010,
                "fullDate": "2010-12-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2010,
                "fullDate": "2010-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440071,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440024,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 7,
                "year": 2017,
                "fullDate": "2017-07-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440071,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440026,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440071,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 24,
                "month": 11,
                "year": 2010,
                "fullDate": "2010-11-24"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 24,
                "month": 11,
                "year": 2010,
                "fullDate": "2010-11-24"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440071,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440170,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 12,
                "year": 2010,
                "fullDate": "2010-12-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440071,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440171,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440072,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440010,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440072,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440016,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440072,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440022,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440072,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440024,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440072,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440026,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440072,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440040,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 9,
                "month": 10,
                "year": 2012,
                "fullDate": "2012-10-09"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440072,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440170,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440072,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440171,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 2018,
                "fullDate": "2018-05-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440002,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440003,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440008,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2014,
                "fullDate": "2014-01-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2014,
                "fullDate": "2014-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440013,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440036,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440039,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2014,
                "fullDate": "2014-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440044,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "PAR",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2019,
                "fullDate": "2019-04-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2019,
                "fullDate": "2019-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440047,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2014,
                "fullDate": "2014-03-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2014,
                "fullDate": "2014-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440076,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2014,
                "fullDate": "2014-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440077,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2015,
                "fullDate": "2015-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440079,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2014,
                "fullDate": "2014-04-01"
              },
              "isCurrent": "N"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2014,
                "fullDate": "2014-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440080,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440084,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2016,
                "fullDate": "2016-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440085,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440086,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440087,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440088,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440089,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2014,
                "fullDate": "2014-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440182,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2017,
                "fullDate": "2017-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440183,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2017,
                "fullDate": "2017-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440305,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2014,
                "fullDate": "2014-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440483,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2014,
                "fullDate": "2014-03-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2014,
                "fullDate": "2014-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440484,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2014,
                "fullDate": "2014-03-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2014,
                "fullDate": "2014-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440485,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2014,
                "fullDate": "2014-03-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2014,
                "fullDate": "2014-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440487,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANFOR",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2014,
                "fullDate": "2014-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440493,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 12,
                "month": 2,
                "year": 2015,
                "fullDate": "2015-02-12"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440494,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440495,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2017,
                "fullDate": "2017-01-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440073,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440496,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440002,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440003,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440008,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2014,
                "fullDate": "2014-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440013,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440036,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 10,
                "year": 2015,
                "fullDate": "2015-10-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440044,
        "relatedNodeType": "COMPANY",
        "relationshipTypes": [
          {
            "type": {
              "value": "SHL",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2014,
                "fullDate": "2014-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440076,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2014,
                "fullDate": "2014-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440077,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2015,
                "fullDate": "2015-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440078,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2014,
                "fullDate": "2014-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440079,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2014,
                "fullDate": "2014-04-01"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2014,
                "fullDate": "2014-04-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440080,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440084,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 4,
                "year": 2016,
                "fullDate": "2016-04-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440085,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440086,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440087,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440088,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 3,
                "year": 2016,
                "fullDate": "2016-03-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440089,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2014,
                "fullDate": "2014-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440180,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 12,
                "month": 2,
                "year": 2015,
                "fullDate": "2015-02-12"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440181,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2014,
                "fullDate": "2014-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440182,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 7,
                "month": 7,
                "year": 2014,
                "fullDate": "2014-07-07"
              },
              "isCurrent": "Y"
            }
          },
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 7,
                "month": 7,
                "year": 2014,
                "fullDate": "2014-07-07"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440183,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 1,
                "year": 2017,
                "fullDate": "2017-01-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440074,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440184,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2017,
                "fullDate": "2017-02-01"
              },
              "isCurrent": "Y"
            }
          }
        ]
      },
      {
        "nodeId": 110440075,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440019,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 2,
                "year": 2005,
                "fullDate": "2005-02-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440075,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440076,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 9,
                "year": 2003,
                "fullDate": "2003-09-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440075,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440217,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "startdate": {
                "day": 1,
                "month": 5,
                "year": 1990,
                "fullDate": "1990-05-01"
              },
              "isCurrent": "N"
            }
          }
        ]
      },
      {
        "nodeId": 110440075,
        "nodeType": "COMPANY",
        "relatedNodeId": 110440299,
        "relatedNodeType": "PERSON",
        "relationshipTypes": [
          {
            "type": {
              "value": "MANBY",
              "isCurrent": "Y"
            }
          }
        ]
      }
    ]
  },
  now: "2019-11-20T11:38:37",
  version: "1_0_0"
};
