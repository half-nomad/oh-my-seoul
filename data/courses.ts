// Oh my Seoul - Recommended Courses
// 타입별 3개씩 총 21개 코스 (MVP: 간단한 더미 데이터, 추후 상세화)

export type Course = {
  id: string;
  name: {
    ko: string;
    en: string;
  };
  address: {
    ko: string;
    en: string;
  };
  description: {
    ko: string;
    en: string;
  };
  category: 'cafe' | 'restaurant' | 'culture' | 'shopping' | 'nature' | 'nightlife';
};

export const courses: Course[] = [
  // Trendsetter 코스 (3개)
  {
    id: 'trendsetter_1',
    name: {
      ko: '성수동 카페거리',
      en: 'Seongsu-dong Cafe Street',
    },
    address: {
      ko: '서울 성동구 성수동',
      en: 'Seongsu-dong, Seongdong-gu, Seoul',
    },
    description: {
      ko: '산업지구에서 변신한 힙한 카페와 복합문화공간',
      en: 'Trendy cafes and cultural spaces in a transformed industrial area',
    },
    category: 'cafe',
  },
  {
    id: 'trendsetter_2',
    name: {
      ko: '한남동 디자이너 부티크',
      en: 'Hannam-dong Designer Boutiques',
    },
    address: {
      ko: '서울 용산구 한남동',
      en: 'Hannam-dong, Yongsan-gu, Seoul',
    },
    description: {
      ko: '럭셔리 브랜드와 로컬 디자이너 편집숍',
      en: 'Luxury brands and local designer select shops',
    },
    category: 'shopping',
  },
  {
    id: 'trendsetter_3',
    name: {
      ko: '압구정 로데오거리',
      en: 'Apgujeong Rodeo Street',
    },
    address: {
      ko: '서울 강남구 신사동',
      en: 'Sinsa-dong, Gangnam-gu, Seoul',
    },
    description: {
      ko: '명품 플래그십 스토어와 트렌디한 패션 거리',
      en: 'Luxury flagship stores and trendy fashion street',
    },
    category: 'shopping',
  },

  // Heritage Explorer 코스 (3개)
  {
    id: 'heritage_1',
    name: {
      ko: '경복궁',
      en: 'Gyeongbokgung Palace',
    },
    address: {
      ko: '서울 종로구 사직로 161',
      en: '161 Sajik-ro, Jongno-gu, Seoul',
    },
    description: {
      ko: '조선왕조 제일의 법궁, 왕궁 수문장 교대식 관람',
      en: "Main royal palace of Joseon Dynasty, guard changing ceremony",
    },
    category: 'culture',
  },
  {
    id: 'heritage_2',
    name: {
      ko: '북촌 한옥마을',
      en: 'Bukchon Hanok Village',
    },
    address: {
      ko: '서울 종로구 북촌로',
      en: 'Bukchon-ro, Jongno-gu, Seoul',
    },
    description: {
      ko: '600년 역사의 전통 한옥 주거지역, 한복 체험',
      en: '600-year-old traditional hanok residential area, hanbok experience',
    },
    category: 'culture',
  },
  {
    id: 'heritage_3',
    name: {
      ko: '인사동 전통문화거리',
      en: 'Insadong Traditional Culture Street',
    },
    address: {
      ko: '서울 종로구 인사동길',
      en: 'Insadong-gil, Jongno-gu, Seoul',
    },
    description: {
      ko: '전통 공예품, 차집, 갤러리가 모인 문화 거리',
      en: 'Cultural street with traditional crafts, tea houses, and galleries',
    },
    category: 'culture',
  },

  // Foodie 코스 (3개)
  {
    id: 'foodie_1',
    name: {
      ko: '광장시장',
      en: 'Gwangjang Market',
    },
    address: {
      ko: '서울 종로구 창경궁로 88',
      en: '88 Changgyeonggung-ro, Jongno-gu, Seoul',
    },
    description: {
      ko: '100년 전통 재래시장, 빈대떡·마약김밥 등 길거리음식 천국',
      en: '100-year-old traditional market, street food paradise',
    },
    category: 'restaurant',
  },
  {
    id: 'foodie_2',
    name: {
      ko: '마포 고기골목',
      en: 'Mapo Korean BBQ Alley',
    },
    address: {
      ko: '서울 마포구 마포동',
      en: 'Mapo-dong, Mapo-gu, Seoul',
    },
    description: {
      ko: '현지인이 사랑하는 진짜 한국식 고기집 밀집지역',
      en: 'Authentic Korean BBQ district loved by locals',
    },
    category: 'restaurant',
  },
  {
    id: 'foodie_3',
    name: {
      ko: '을지로 포장마차 골목',
      en: 'Euljiro Pojangmacha Alley',
    },
    address: {
      ko: '서울 중구 을지로',
      en: 'Euljiro, Jung-gu, Seoul',
    },
    description: {
      ko: '레트로 감성의 골목 술집과 포장마차 거리',
      en: 'Retro alley bars and pojangmacha (street food tents)',
    },
    category: 'restaurant',
  },

  // K-Culture Superfan 코스 (3개)
  {
    id: 'kculture_1',
    name: {
      ko: '강남 K-팝 명소',
      en: 'Gangnam K-pop Spots',
    },
    address: {
      ko: '서울 강남구 청담동·신사동',
      en: 'Cheongdam-dong & Sinsa-dong, Gangnam-gu, Seoul',
    },
    description: {
      ko: 'SM, JYP, HYBE 등 연예기획사와 아이돌 맛집',
      en: 'Entertainment agencies (SM, JYP, HYBE) and idol hotspots',
    },
    category: 'culture',
  },
  {
    id: 'kculture_2',
    name: {
      ko: '홍대 K-팝 댄스 스튜디오',
      en: 'Hongdae K-pop Dance Studio',
    },
    address: {
      ko: '서울 마포구 홍대입구',
      en: 'Hongdae area, Mapo-gu, Seoul',
    },
    description: {
      ko: '1Million, Just Jerk 등 유명 댄스 스튜디오 수업',
      en: 'Famous dance studios like 1Million, Just Jerk classes',
    },
    category: 'culture',
  },
  {
    id: 'kculture_3',
    name: {
      ko: '명동 K-뷰티 거리',
      en: 'Myeongdong K-beauty Street',
    },
    address: {
      ko: '서울 중구 명동길',
      en: 'Myeongdong-gil, Jung-gu, Seoul',
    },
    description: {
      ko: '올리브영, 이니스프리 등 K-뷰티 브랜드 쇼핑 천국',
      en: 'K-beauty shopping paradise with Olive Young, Innisfree, etc.',
    },
    category: 'shopping',
  },

  // Nature Seeker 코스 (3개)
  {
    id: 'nature_1',
    name: {
      ko: '북한산 등산',
      en: 'Bukhansan Mountain Hiking',
    },
    address: {
      ko: '서울 강북구·은평구',
      en: 'Gangbuk-gu & Eunpyeong-gu, Seoul',
    },
    description: {
      ko: '서울 도심 속 국립공원, 백운대·인수봉 등산 코스',
      en: 'National park in Seoul, trails to Baegundae Peak',
    },
    category: 'nature',
  },
  {
    id: 'nature_2',
    name: {
      ko: '서울숲',
      en: 'Seoul Forest',
    },
    address: {
      ko: '서울 성동구 뚝섬로 273',
      en: '273 Ttukseom-ro, Seongdong-gu, Seoul',
    },
    description: {
      ko: '도심 속 대형 공원, 사슴과 산책로, 카페 밀집',
      en: 'Large urban park with deer, walking trails, and cafes',
    },
    category: 'nature',
  },
  {
    id: 'nature_3',
    name: {
      ko: '봉은사',
      en: 'Bongeunsa Temple',
    },
    address: {
      ko: '서울 강남구 봉은사로 531',
      en: '531 Bongeunsa-ro, Gangnam-gu, Seoul',
    },
    description: {
      ko: '강남 한복판의 천년 고찰, 템플스테이 프로그램',
      en: '1,000-year-old temple in Gangnam, temple stay programs',
    },
    category: 'culture',
  },

  // Social Butterfly 코스 (3개)
  {
    id: 'social_1',
    name: {
      ko: '홍대 클럽거리',
      en: 'Hongdae Club Street',
    },
    address: {
      ko: '서울 마포구 홍익로',
      en: 'Hongik-ro, Mapo-gu, Seoul',
    },
    description: {
      ko: '라이브 음악, 인디 클럽, 펍 크롤 천국',
      en: 'Live music venues, indie clubs, and pub crawl paradise',
    },
    category: 'nightlife',
  },
  {
    id: 'social_2',
    name: {
      ko: '강남 클럽 옥타곤',
      en: 'Club Octagon Gangnam',
    },
    address: {
      ko: '서울 강남구 논현동',
      en: 'Nonhyeon-dong, Gangnam-gu, Seoul',
    },
    description: {
      ko: '세계 10대 클럽, EDM 명소, 국제적 분위기',
      en: 'World Top 10 club, EDM venue, international vibe',
    },
    category: 'nightlife',
  },
  {
    id: 'social_3',
    name: {
      ko: '이태원 루프탑 바',
      en: 'Itaewon Rooftop Bars',
    },
    address: {
      ko: '서울 용산구 이태원동',
      en: 'Itaewon-dong, Yongsan-gu, Seoul',
    },
    description: {
      ko: '서울 야경을 보며 즐기는 칵테일 바 거리',
      en: 'Cocktail bars with Seoul night views',
    },
    category: 'nightlife',
  },

  // Balanced Explorer 코스 (3개)
  {
    id: 'balanced_1',
    name: {
      ko: '가로수길',
      en: 'Garosu-gil',
    },
    address: {
      ko: '서울 강남구 신사동',
      en: 'Sinsa-dong, Gangnam-gu, Seoul',
    },
    description: {
      ko: '트렌디한 카페·식당·부티크가 어우러진 거리',
      en: 'Tree-lined street with trendy cafes, restaurants, and boutiques',
    },
    category: 'cafe',
  },
  {
    id: 'balanced_2',
    name: {
      ko: '한강공원',
      en: 'Han River Park',
    },
    address: {
      ko: '서울 한강변 (여의도·반포·뚝섬)',
      en: 'Han River (Yeouido, Banpo, Ttukseom)',
    },
    description: {
      ko: '자전거, 피크닉, 치맥, 분수쇼 등 다양한 즐길거리',
      en: 'Biking, picnic, chicken & beer, fountain show',
    },
    category: 'nature',
  },
  {
    id: 'balanced_3',
    name: {
      ko: '이태원 세계음식거리',
      en: 'Itaewon World Food Street',
    },
    address: {
      ko: '서울 용산구 이태원로',
      en: 'Itaewon-ro, Yongsan-gu, Seoul',
    },
    description: {
      ko: '한식부터 중동·유럽 요리까지 다양한 국제 음식',
      en: 'International cuisine from Korean to Middle Eastern & European',
    },
    category: 'restaurant',
  },
];

// Helper function to get course by id
export const getCourseById = (id: string): Course | undefined => {
  return courses.find((course) => course.id === id);
};

// Helper function to get courses by ids
export const getCoursesByIds = (ids: string[]): Course[] => {
  return ids.map((id) => getCourseById(id)).filter((course): course is Course => course !== undefined);
};
