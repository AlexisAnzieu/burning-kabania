export const artists: Record<string, Artist> = {
  blondie: {
    id: "blondie",
    name: "Blondie",
    genre: "Techno",
    description:
      "Fille des îles chaudes et ensoleillées Blondie plongea dans l'univers de la techno il y a 8 ans, depuis lors elle écume les soirées électroniques montréalaises. Toujours prête pour se trémousser sur un bon beat.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=400&h=400&fit=crop&crop=face",
    socialLinks: {},
  },
  freezer: {
    id: "freezer",
    name: "(fr)eezer",
    genre: "Electronic",
    description:
      "Entré dans le monde électronique depuis une vingtaine d'années, (FR)eezer a tout d'abord débuté sa plongée abyssale en interviewant des artistes pour le compte de webzines parisiens. Il a ensuite cofondé le label de musique versaillais Soundmotion et s'est découvert une passion pour le DJing par envie de partager ses trouvailles aux autres. Une passion chronophage donc, aboutissant à des sets percutants de nouveautés électroniques cosmopolites.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    socialLinks: {
      soundcloud: "https://soundcloud.com/freezerland",
    },
  },
  renaud: {
    id: "renaud",
    name: "Renaud Armstrong",
    genre: "Hypno Techno",
    description: "Grondements hypnotiques, arpèges et techno spirale.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    socialLinks: {
      soundcloud: "https://on.soundcloud.com/bv4ykeYeyJlSo1THV6",
    },
  },
  po: {
    id: "po",
    name: "DJ Fréquence Perdue (P-O)",
    genre: "House Forestière / Techno Boréale",
    description:
      "Origine : Québec (mais son cœur bat au rythme des kickdrums de Miami et Ibiza). Style : House forestière, Techno boréale, Électro rustico-mystique. DJ Fréquence Perdue n'est pas né dans un club… il est né dans une tempête de neige, entre deux bières tièdes et un vieux synthé détraqué d'un sous-sol de Laval. Enfant des grands espaces et des afters qui se terminent quand les oiseaux commencent à chanter, il a rapidement troqué sa hache pour les platines — une bûche c'est bien, mais le groove, c'est sacré! Connu pour faire danser des érables, faire suer des bûcheronnes et bûcherons, faire monter la sève même en hiver, sa musique, c'est un mélange d'instinct animal, de techno viscérale, et de groove venu d'un autre plan astral. En ce weekend, à Kabania, il vient faire trembler les cabanes dans les arbres, il ne mixe pas pour n'importe qui. Il mixe pour l'amour. Pour l'union sacrée. Pour deux êtres qui s'aiment assez pour danser jusqu'au bout de la nuit (ou jusqu'à ce que l'on se fasse sortir par les castors).",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    socialLinks: {},
  },

  will: {
    id: "will",
    name: "Anjers",
    genre: "Deep Underground",
    description: "Deep. Underground. Mystique.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    socialLinks: {
      soundcloud: "https://soundcloud.com/will-anjers/nostos",
    },
  },
  lou: {
    id: "lou",
    name: "Lou",
    genre: "Electronic",
    description: "",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
    socialLinks: {},
  },
  kroma: {
    id: "kroma",
    name: "Kroma",
    genre: "Electronic",
    description:
      "Kroma est né après un anniversaire pas si arrosé, il a d'abord glissé sur les pistes risquées du karaoké avant de dénicher la lumière après une catharsis dans les sous-sols Montréalais. Il s'exprime à travers des mélodies envoûtantes et des kicks groovy qui rythment la foule. Il vous invite dans un voyage sonore intense et rapide, soigneusement adapté à son public. Sa passion pour la musique électronique en tout genre (trance, mental, hypno, indus ainsi que leurs homologues plus hard) se mêle dans une harmonie puissante, animée par un seul but : inciter vos corps à danser jusqu'à l'aube.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    socialLinks: {
      soundcloud: "https://soundcloud.com/kroma_music",
      instagram: "https://www.instagram.com/kromamusic/",
    },
  },
};

interface Artist {
  id: string;
  name: string;
  genre: string;
  description: string;
  image: string;
  socialLinks?: {
    soundcloud?: string;
    instagram?: string;
  };
}

interface ArtistSet {
  artistId: string;
  startTime: string;
  endTime: string;
  duration: string;
}

export const timetable: Record<string, ArtistSet[]> = {
  vendredi: [
    {
      artistId: "lou",
      startTime: "21:30",
      endTime: "23:00",
      duration: "1h30",
    },
    {
      artistId: "kroma",
      startTime: "23:00",
      endTime: "01:00",
      duration: "2h00",
    },
    {
      artistId: "freezer",
      startTime: "01:00",
      endTime: "03:00",
      duration: "2h00",
    },
    {
      artistId: "renaud",
      startTime: "03:00",
      endTime: "05:00",
      duration: "2h00",
    },
  ],
  samedi: [
    { artistId: "po", startTime: "21:30", endTime: "23:00", duration: "1h30" },
    {
      artistId: "blondie",
      startTime: "23:00",
      endTime: "01:00",
      duration: "2h00",
    },
    {
      artistId: "will",
      startTime: "01:00",
      endTime: "03:00",
      duration: "2h00",
    },
  ],
};
