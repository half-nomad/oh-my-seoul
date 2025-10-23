// Oh my Seoul - Traveler Types
// 7 types based on scoring algorithm

export type TravelerType = {
  id: string;
  name: {
    ko: string;
    en: string;
  };
  koreanName: string; // 한글 별명
  description: {
    ko: string;
    en: string;
  };
  image: string; // path to AI illustration (e.g., '/images/types/trendsetter.webp')
  color: string; // hex color for this type
  courseIds: string[]; // references to courses.ts
};

export const travelerTypes: TravelerType[] = [
  {
    id: 'trendsetter',
    name: {
      ko: '서울 트렌드세터',
      en: 'Seoul Trendsetter',
    },
    koreanName: '힙스터 탐험가',
    description: {
      ko: '당신은 항상 트렌드를 선도하며, 서울의 가장 힙한 카페, 최신 레스토랑, 그리고 SNS 인생샷 명소를 주류가 되기 전에 찾아냅니다. 성수동, 연남동 등 떠오르는 동네에서 빛을 발합니다.',
      en: "You're always ahead of the curve, seeking out Seoul's hippest cafes, newest restaurants, and most Instagram-worthy spots before they go mainstream. You thrive in Seongsu-dong, Yeonnam-dong, and other emerging neighborhoods.",
    },
    image: '/images/types/trendsetter.png',
    color: '#37BEB0', // mint-primary
    courseIds: ['trendsetter_1', 'trendsetter_2', 'trendsetter_3'],
  },
  {
    id: 'heritage-explorer',
    name: {
      ko: '문화유산 탐험가',
      en: 'Cultural Heritage Explorer',
    },
    koreanName: '전통 수호자',
    description: {
      ko: '당신은 한국의 5,000년 역사에 매료되어 진정한 전통 문화를 경험하고 싶어합니다. 궁궐, 사찰, 한옥마을, 문화 워크숍이 당신의 열정입니다. 새로움보다 깊이를 추구합니다.',
      en: "You're fascinated by Korea's 5,000-year history and want to experience authentic traditional culture. Palaces, temples, hanok villages, and cultural workshops are your passion. You seek depth over novelty.",
    },
    image: '/images/types/heritage-explorer.png',
    color: '#2C6170', // blue-midnight
    courseIds: ['heritage_1', 'heritage_2', 'heritage_3'],
  },
  {
    id: 'foodie',
    name: {
      ko: '로컬 미식가',
      en: 'Authentic Foodie',
    },
    koreanName: '맛집 헌터',
    description: {
      ko: '당신은 현지인들이 먹는 곳에서 먹습니다. 미슐랭 스타는 당신에게 감동을 주지 못합니다 - 30년간 한 가지 요리를 완벽하게 만들어온 가족 경영 식당을 원합니다. 진짜를 위해 줄을 서고 모든 것을 시도하는 것을 두려워하지 않습니다.',
      en: "You eat where locals eat. Michelin stars don't impress you - you want the family-run restaurant that's been perfecting one dish for 30 years. You'll wait in line for the real deal and aren't afraid to try everything.",
    },
    image: '/images/types/foodie.png',
    color: '#C6B170', // gold-warm
    courseIds: ['foodie_1', 'foodie_2', 'foodie_3'],
  },
  {
    id: 'kculture-fan',
    name: {
      ko: 'K-컬처 슈퍼팬',
      en: 'K-Culture Superfan',
    },
    koreanName: '한류 마니아',
    description: {
      ko: 'K-드라마와 K-팝이 당신을 여기로 데려왔고, 지금 당신은 주인공의 순간을 살고 있습니다. 모든 촬영지를 알고, 블랙핑크처럼 춤추고 싶어하며, 카페에서 최애를 만나는 꿈을 꿉니다.',
      en: "K-dramas and K-pop brought you here, and you're living your main character moment. You know every filming location, want to dance like BLACKPINK, and dream of running into your bias at a cafe.",
    },
    image: '/images/types/kculture-fan.png',
    color: '#9B85FF', // purple-soft
    courseIds: ['kculture_1', 'kculture_2', 'kculture_3'],
  },
  {
    id: 'nature-seeker',
    name: {
      ko: '평화로운 자연 탐험가',
      en: 'Peaceful Nature Seeker',
    },
    koreanName: '힐링 여행자',
    description: {
      ko: '서울에 왔지만 평온한 순간을 갈망합니다. 사찰 체험, 산 하이킹, 강변 카페, 조용한 정원을 찾습니다. 도시 탐험과 자연 속 휴식의 균형을 맞춥니다.',
      en: 'You came to Seoul but crave moments of tranquility. You seek out temple stays, mountain hikes, riverside cafes, and quiet gardens. You balance urban exploration with natural escapes.',
    },
    image: '/images/types/nature-seeker.png',
    color: '#7CB342', // green-nature
    courseIds: ['nature_1', 'nature_2', 'nature_3'],
  },
  {
    id: 'social-butterfly',
    name: {
      ko: '사교적 나비',
      en: 'Social Butterfly',
    },
    koreanName: '파티 피플',
    description: {
      ko: '친구를 사귀고, 새벽까지 춤추고, 서울의 전설적인 밤문화를 경험하러 왔습니다. 홍대 라이브 음악부터 강남 클럽까지, 파티가 어디서 열리는지 알고 항상 초대받습니다.',
      en: "You're here to make friends, dance till dawn, and experience Seoul's legendary nightlife. From Hongdae live music to Gangnam clubs, you know where the party is and you're always invited.",
    },
    image: '/images/types/social-butterfly.png',
    color: '#FF6B6B', // coral-vibrant
    courseIds: ['social_1', 'social_2', 'social_3'],
  },
  {
    id: 'balanced-explorer',
    name: {
      ko: '균형잡힌 탐험가',
      en: 'Balanced Explorer',
    },
    koreanName: '올라운더',
    description: {
      ko: '모든 것을 조금씩 원합니다 - 전통도, 트렌드도, 자연도, 밤문화도. 무엇이든 하고 다양한 경험을 즐길 수 있기 때문에 그룹을 행복하게 만드는 친구입니다.',
      en: "You want a bit of everything - some tradition, some trends, some nature, some nightlife. You're the friend who keeps the group happy because you're up for anything and can enjoy diverse experiences.",
    },
    image: '/images/types/balanced-explorer.png',
    color: '#A4E5E0', // mint-light
    courseIds: ['balanced_1', 'balanced_2', 'balanced_3'],
  },
];

// Helper function to get type by id
export const getTravelerTypeById = (id: string): TravelerType | undefined => {
  return travelerTypes.find((type) => type.id === id);
};
