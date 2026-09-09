const missingCountries = [
  {
    name: "Palestine",
    nativeName: "فلسطين",
    alpha3Code: "PSE",
    region: "Asia",
    capital: "Jerusalem (East)",
    population: 5483450,
    topLevelDomain: [".ps"],
    currencies: [
      {
        code: "ILS",
        name: "Israeli new shekel",
        symbol: "₪",
      },
      {
        code: "JOD",
        name: "Jordanian dinar",
        symbol: "JD",
      },
      {
        code: "EGP",
        name: "Egyptian pound",
        symbol: "E£",
      },
    ],
    languages: [
      {
        name: "Arabic",
        iso639_1: "ar",
        iso639_2: "ara",
        nativeName: "العربية",
      },
    ],
    timezones: ["UTC+02:00", "UTC+03:00"],
    borders: ["EGY", "ISR", "JOR"],
    flags: {
      png: "https://flagcdn.com/w320/ps.png",
    },
  },
  {
    name: "Sovereign Military Order of Malta",
    nativeName: "Sovrano Militare Ordine di Malta",
    alpha3Code: "XSM",
    region: "Europe",
    capital: "Palazzo Malta (Rome)",
    population: 3,
    topLevelDomain: [],
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€",
      },
    ],
    languages: [
      {
        name: "Italian",
        iso639_1: "it",
        iso639_2: "ita",
        nativeName: "Italiano",
      },
    ],
    timezones: ["UTC+01:00"],
    borders: ["ITA"],
    flags: {
      png: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Flag_of_the_Order_of_St._John_%28various%29.svg/320px-Flag_of_the_Order_of_St._John_%28various%29.svg.png",
    },
  },
  {
    name: "Sahrawi Arab Democratic Republic",
    nativeName: "الجمهورية العربية الصحراوية الديمقراطية",
    alpha3Code: "ESH",
    region: "Africa",
    capital: "El Aaiún",
    population: 500000,
    topLevelDomain: [],
    currencies: [
      {
        code: "EHP",
        name: "Sahrawi peseta",
        symbol: "Ptas",
      },
      {
        code: "MAD",
        name: "Moroccan dirham",
        symbol: "DH",
      },
    ],
    languages: [
      {
        name: "Arabic",
        iso639_1: "ar",
        iso639_2: "ara",
        nativeName: "العربية",
      },
      {
        name: "Spanish",
        iso639_1: "es",
        iso639_2: "spa",
        nativeName: "Español",
      },
    ],
    timezones: ["UTC+00:00"],
    borders: ["DZA", "MRT", "MAR"],
    flags: {
      png: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_Sahrawi_Arab_Democratic_Republic.svg/320px-Flag_of_Sahrawi_Arab_Democratic_Republic.svg.png",
    },
  },
  {
    name: "South Ossetia",
    nativeName: "Хуссар Ирыстон",
    alpha3Code: "GEO",
    region: "Asia / Europe",
    capital: "Tskhinvali",
    population: 56500,
    topLevelDomain: [],
    currencies: [
      {
        code: "RUB",
        name: "Russian ruble",
        symbol: "₽",
      },
    ],
    languages: [
      {
        name: "Ossetian",
        iso639_1: "os",
        iso639_2: "oss",
        nativeName: "Ирон",
      },
      {
        name: "Russian",
        iso639_1: "ru",
        iso639_2: "rus",
        nativeName: "Русский",
      },
    ],
    timezones: ["UTC+03:00"],
    borders: ["GEO", null],
    flags: {
      png: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_South_Ossetia.svg/320px-Flag_of_South_Ossetia.svg.png",
    },
  },
  {
    name: "Abkhazia",
    nativeName: "Апсны",
    alpha3Code: "GEO",
    region: "Asia / Europe",
    capital: "Sukhumi",
    population: 245000,
    topLevelDomain: [],
    currencies: [
      {
        code: "RUB",
        name: "Russian ruble",
        symbol: "₽",
      },
    ],
    languages: [
      {
        name: "Abkhazian",
        iso639_1: "ab",
        iso639_2: "abk",
        nativeName: "Аҧсуа",
      },
      {
        name: "Russian",
        iso639_1: "ru",
        iso639_2: "rus",
        nativeName: "Русский",
      },
    ],
    timezones: ["UTC+03:00"],
    borders: ["GEO", null],
    flags: {
      png: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Abkhazia.svg/320px-Flag_of_Abkhazia.svg.png",
    },
  },
  {
    name: "Northern Cyprus",
    nativeName: "Kuzey Kıbrıs",
    alpha3Code: "CYP",
    region: "Europe",
    capital: "North Nicosia",
    population: 382836,
    topLevelDomain: [".ct.tr"],
    currencies: [
      {
        code: "TRY",
        name: "Turkish lira",
        symbol: "₺",
      },
    ],
    languages: [
      {
        name: "Turkish",
        iso639_1: "tr",
        iso639_2: "tur",
        nativeName: "Türkçe",
      },
    ],
    timezones: ["UTC+03:00"],
    borders: ["CYP"],
    flags: {
      png: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Flag_of_Northern_Cyprus.svg/320px-Flag_of_Northern_Cyprus.svg.png",
    },
  },
  {
    name: "Transnistria",
    nativeName: "Приднестровье",
    alpha3Code: "MDA",
    region: "Europe",
    capital: "Tiraspol",
    population: 367000,
    topLevelDomain: [],
    currencies: [
      {
        code: "PRB",
        name: "Transnistrian ruble",
        symbol: "р.",
      },
    ],
    languages: [
      {
        name: "Russian",
        iso639_1: "ru",
        iso639_2: "rus",
        nativeName: "Русский",
      },
      {
        name: "Moldavian",
        iso639_1: "mo",
        iso639_2: "mol",
        nativeName: "Moldovenească",
      },
      {
        name: "Ukrainian",
        iso639_1: "uk",
        iso639_2: "ukr",
        nativeName: "Українська",
      },
    ],
    timezones: ["UTC+02:00"],
    borders: [null, "UKR"],
    flags: {
      png: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Transnistria.svg/320px-Flag_of_Transnistria.svg.png",
    },
  },
  {
    name: "Somaliland",
    nativeName: "Soomaaliland",
    alpha3Code: "SOM",
    region: "Africa",
    capital: "Hargeisa",
    population: 5700000,
    topLevelDomain: [],
    currencies: [
      {
        code: "SLS",
        name: "Somaliland shilling",
        symbol: "Sl.Sh.",
      },
    ],
    languages: [
      {
        name: "Somali",
        iso639_1: "so",
        iso639_2: "som",
        nativeName: "Soomaaliga",
      },
      {
        name: "Arabic",
        iso639_1: "ar",
        iso639_2: "ara",
        nativeName: "العربية",
      },
      {
        name: "English",
        iso639_1: "en",
        iso639_2: "eng",
        nativeName: "English",
      },
    ],
    timezones: ["UTC+03:00"],
    borders: ["DJI", "ETH", "SOM"],
    flags: {
      png: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Somaliland.svg/320px-Flag_of_Somaliland.svg.png",
    },
  },
  {
    name: "East Timor",
    nativeName: "Timor Leste",
    alpha3Code: "TLS",
    region: "Asia",
    capital: "Dili",
    population: 1341296,
    topLevelDomain: [".tl"],
    currencies: [
      {
        code: "USD",
        name: "United States dollar",
        symbol: "$",
      },
    ],
    languages: [
      {
        name: "Portuguese",
        iso639_1: "pt",
        iso639_2: "por",
        nativeName: "Português",
      },
      {
        name: "Tetum",
        iso639_1: "",
        iso639_2: "tet",
        nativeName: "Lian Tetun",
      },
    ],
    timezones: ["UTC+09:00"],
    borders: ["IDN"],
    flags: {
      png: "https://flagcdn.com/w320/tl.png",
    },
  },
  {
    name: "Côte d'Ivoire",
    nativeName: "Côte d'Ivoire",
    alpha3Code: "CIV",
    region: "Africa",
    capital: "Yamoussoukro",
    population: 29389150,
    topLevelDomain: [".ci"],
    currencies: [
      {
        code: "XOF",
        name: "West African CFA franc",
        symbol: "CFA",
      },
    ],
    languages: [
      {
        name: "French",
        iso639_1: "fr",
        iso639_2: "fra",
        nativeName: "Français",
      },
    ],
    timezones: ["UTC+00:00"],
    borders: ["BFA", "GHA", "GIN", "LBR", "MLI"],
    flags: {
      png: "https://flagcdn.com/w320/ci.png",
    },
  },
  {
    name: "Eswatini",
    nativeName: "eSwatini",
    alpha3Code: "SWZ",
    region: "Africa",
    capital: "Mbabane",
    population: 1223000,
    topLevelDomain: [".sz"],
    currencies: [
      {
        code: "SZL",
        name: "Swazi lilangeni",
        symbol: "L",
      },
      {
        code: "ZAR",
        name: "South African rand",
        symbol: "R",
      },
    ],
    languages: [
      {
        name: "English",
        iso639_1: "en",
        iso639_2: "eng",
        nativeName: "English",
      },
      {
        name: "Swati",
        iso639_1: "ss",
        iso639_2: "ssw",
        nativeName: "SiSwati",
      },
    ],
    timezones: ["UTC+02:00"],
    borders: ["MOZ", "ZAF"],
    flags: {
      png: "https://flagcdn.com/w320/sz.png",
    },
  },
];

export default missingCountries;
