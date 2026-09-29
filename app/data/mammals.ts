export type Mammal = {
  slug: string;
  emoji: string;
  name: string;
  english: string;
  habitat: string;
  diet: string;
  fact: string;
  accent: string;
  image: string;
  // 讓直式照片裁切時保留動物的頭部
  position?: string;
  credit: { author: string; license: string; url: string };
  article: {
    title: string;
    intro: string;
    sections: { heading: string; body: string }[];
    funFact: string;
  };
};

export const mammals: Mammal[] = [
  {
    slug: "lion",
    emoji: "🦁",
    name: "獅子",
    english: "Lion",
    habitat: "非洲草原",
    diet: "肉食",
    fact: "唯一群居的大型貓科動物，吼聲可以傳到 8 公里外！",
    accent: "from-amber-300 to-orange-400",
    image: "/image/lion.jpg",
    credit: { author: "Giles Laurent", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/w/index.php?curid=151312926" },
    article: {
      title: "草原上的萬獸之王：獅子的家族故事",
      intro:
        "金黃色的草原上，一聲低沉的吼叫劃破清晨。那是獅子在宣告：「這裡是我們的家！」獅子是唯一過著群體生活的大型貓科動物，牠們的一家人，就叫做「獅群」。",
      sections: [
        {
          heading: "一個溫暖的大家庭",
          body: "一個獅群通常由好幾隻有血緣關係的母獅、牠們的寶寶，以及一到數隻公獅組成。母獅們會一起照顧小獅子，甚至會幫姊妹的孩子餵奶，就像一個互相扶持的大家庭。",
        },
        {
          heading: "母獅是狩獵高手",
          body: "負責打獵的主要是母獅。牠們會分工合作，有的負責包抄、有的負責埋伏，一起追捕斑馬或羚羊。公獅則負責巡邏地盤、趕走入侵者，保護整個家族的安全。",
        },
        {
          heading: "威風的鬃毛",
          body: "公獅脖子上那圈蓬鬆的鬃毛不只是好看。鬃毛越濃密、顏色越深，通常代表這隻獅子越健康強壯，打架時也能保護脖子不被咬傷。",
        },
        {
          heading: "需要我們一起守護",
          body: "野生獅子的數量在過去幾十年大幅減少，目前被列為「易危」物種。除了非洲，印度的吉爾森林還住著一小群亞洲獅，是牠們在亞洲僅存的家。",
        },
      ],
      funFact: "獅子一天可以睡上將近 20 個小時！牠們把體力都留給打獵和守護家園。",
    },
  },
  {
    slug: "elephant",
    emoji: "🐘",
    name: "大象",
    english: "Elephant",
    habitat: "非洲、亞洲",
    diet: "草食",
    fact: "陸地上最大的動物，長鼻子能聞到好幾公里外的水源。",
    accent: "from-sky-300 to-indigo-400",
    image: "/image/elephant.jpg",
    position: "50% 35%",
    credit: { author: "Muhammad Mahdi Karim", license: "GFDL 1.2", url: "https://commons.wikimedia.org/w/index.php?curid=15925090" },
    article: {
      title: "溫柔的巨人：大象的長鼻子魔法",
      intro:
        "大象是陸地上最大的動物，卻有著一顆溫柔又聰明的心。牠們會照顧受傷的同伴、記得多年前走過的路，還會用長長的鼻子做出各種神奇的事。",
      sections: [
        {
          heading: "三種不同的大象",
          body: "世界上的大象分成三種：體型最大的非洲草原象、住在雨林裡的非洲森林象，以及耳朵比較小的亞洲象。非洲象的大耳朵形狀，看起來就像非洲大陸的地圖呢！",
        },
        {
          heading: "萬能的長鼻子",
          body: "大象的鼻子由數萬條肌肉組成，既能拔起整棵小樹，也能撿起一顆小花生。牠們用鼻子喝水、洗澡、聞味道、打招呼，還會用鼻子輕輕抱住自己的寶寶。",
        },
        {
          heading: "由奶奶帶領的象群",
          body: "象群通常由年紀最大、經驗最豐富的母象帶領，稱為「女族長」。她記得哪裡有水、哪裡有食物，乾旱時會帶著全家走上好長的路，找到生存的希望。",
        },
        {
          heading: "用腳聽見遠方的聲音",
          body: "大象會發出人類聽不見的低頻聲音，這些聲音可以傳到好幾公里外。遠方的同伴甚至能透過腳底感覺地面的震動，收到朋友傳來的訊息。",
        },
      ],
      funFact: "大象媽媽懷孕大約 22 個月才會生下寶寶，是所有陸地動物中懷孕最久的！",
    },
  },
  {
    slug: "giraffe",
    emoji: "🦒",
    name: "長頸鹿",
    english: "Giraffe",
    habitat: "非洲草原",
    diet: "草食",
    fact: "世界上最高的動物，舌頭長達 45 公分，還是藍紫色的！",
    accent: "from-yellow-200 to-amber-400",
    image: "/image/giraffe.jpg",
    position: "50% 20%",
    credit: { author: "Muhammad Mahdi Karim", license: "GFDL 1.2", url: "https://commons.wikimedia.org/w/index.php?curid=16118404" },
    article: {
      title: "抬頭看看天空的朋友：長頸鹿",
      intro:
        "如果你站在非洲草原上抬頭一看，可能會和一雙溫柔的大眼睛對望。長頸鹿是世界上最高的動物，成年的公長頸鹿可以長到大約 5 公尺以上，比兩層樓還高！",
      sections: [
        {
          heading: "長脖子的秘密",
          body: "長頸鹿的脖子雖然很長，但裡面的頸椎骨頭數量和人類一樣，都是 7 節，只是每一節都特別長。長脖子讓牠們能吃到其他動物搆不到的高處樹葉。",
        },
        {
          heading: "神奇的藍紫色舌頭",
          body: "長頸鹿的舌頭大約有 45 公分長，顏色是深藍紫色。牠們最愛吃金合歡樹的葉子，靈活的舌頭可以繞過尖刺，把嫩葉捲進嘴裡。",
        },
        {
          heading: "獨一無二的花紋",
          body: "每隻長頸鹿身上的斑紋都不一樣，就像我們的指紋。這些花紋不只能在樹叢間幫牠們隱藏自己，斑塊下的血管還能幫忙散熱。",
        },
        {
          heading: "一出生就是高個子",
          body: "長頸鹿寶寶出生時，會從大約兩公尺高的地方落到地面，這一跤反而幫助牠開始呼吸。剛出生的小長頸鹿就有大約 1.8 公尺高，一個小時內就能站起來走路。",
        },
      ],
      funFact: "長頸鹿的心臟重達 11 公斤左右，要有強大的力量才能把血液送到高高的頭部。",
    },
  },
  {
    slug: "panda",
    emoji: "🐼",
    name: "大貓熊",
    english: "Giant Panda",
    habitat: "中國山林",
    diet: "竹子為主",
    fact: "每天要花 10 到 16 個小時吃竹子，一天可以吃掉 12 公斤。",
    accent: "from-emerald-200 to-teal-400",
    image: "/image/panda.jpg",
    credit: { author: "J. Patrick Fischer", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/w/index.php?curid=9010137" },
    article: {
      title: "竹林裡的黑白寶貝：大貓熊",
      intro:
        "在中國四川、陝西和甘肅的高山竹林裡，住著圓滾滾的大貓熊。牠們黑白分明的外表人見人愛，每天最重要的事情，就是吃竹子、吃竹子，還有吃竹子！",
      sections: [
        {
          heading: "愛吃竹子的「肉食動物」",
          body: "大貓熊其實屬於食肉目，腸胃構造和肉食動物很像，不太能消化植物。但牠們的食物有 99% 都是竹子，所以只好用「大量吃」來補充營養，一天要吃掉 12 公斤以上。",
        },
        {
          heading: "第六根手指",
          body: "大貓熊的前掌有一塊特別突出的腕骨，被稱為「偽拇指」。它就像第六根手指，讓大貓熊能靈巧地握住竹子，一邊坐著一邊慢慢享用。",
        },
        {
          heading: "小小的寶寶",
          body: "大貓熊寶寶剛出生時只有 100 到 200 公克，大約是媽媽體重的九百分之一，全身粉紅色、幾乎沒有毛。要過好幾週，才會慢慢長出黑白相間的毛皮。",
        },
        {
          heading: "保育的好消息",
          body: "經過多年的保育努力，野生大貓熊的數量逐漸回升。2016 年，牠們的保育等級從「瀕危」下調為「易危」，是保護野生動物成功的好例子。",
        },
      ],
      funFact: "大貓熊每天大約有一半的時間都在吃東西，剩下的時間多半在睡覺！",
    },
  },
  {
    slug: "dolphin",
    emoji: "🐬",
    name: "海豚",
    english: "Dolphin",
    habitat: "海洋",
    diet: "魚類",
    fact: "住在海裡的哺乳類，睡覺時只讓一半的大腦休息。",
    accent: "from-cyan-200 to-blue-400",
    image: "/image/dolphin.jpg",
    credit: { author: "NASA", license: "Public domain", url: "https://commons.wikimedia.org/w/index.php?curid=37679800" },
    article: {
      title: "大海裡的聰明精靈：海豚",
      intro:
        "海豚雖然住在海裡、長得像魚，卻是不折不扣的哺乳類。牠們用肺呼吸、生下寶寶後會餵奶，而且是海洋中最聰明、最愛玩的動物之一。",
      sections: [
        {
          heading: "頭頂上的鼻孔",
          body: "海豚要浮出水面才能呼吸，牠們的鼻孔長在頭頂，叫做「噴氣孔」。游到水面時，只要露出頭頂就能快速換氣，再潛回水中。",
        },
        {
          heading: "用聲音看世界",
          body: "海豚會發出一連串的「喀喀」聲，聲音碰到魚或岩石後反彈回來，海豚就能知道前方有什麼，這就是「回聲定位」。即使在混濁的海水中，也能準確找到獵物。",
        },
        {
          heading: "每隻海豚都有名字",
          body: "科學家發現，瓶鼻海豚會發出獨特的「招牌哨音」，就像自己的名字。同伴們會模仿這個哨音來呼喚牠，讓海豚群在大海中也不會走散。",
        },
        {
          heading: "只睡一半的大腦",
          body: "海豚睡覺時，會讓左右兩邊的大腦輪流休息，另一半則保持清醒，提醒自己浮上水面呼吸，也留意身邊有沒有危險。",
        },
      ],
      funFact: "海豚很喜歡玩耍，會跟著船隻衝浪，還會把海草當成玩具丟來丟去！",
    },
  },
  {
    slug: "koala",
    emoji: "🐨",
    name: "無尾熊",
    english: "Koala",
    habitat: "澳洲森林",
    diet: "尤加利葉",
    fact: "一天可以睡上 20 個小時，是超級愛睏的小瞌睡蟲。",
    accent: "from-slate-200 to-violet-300",
    image: "/image/koala.jpg",
    credit: { author: "Diliff", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/w/index.php?curid=361837" },
    article: {
      title: "樹上的小瞌睡蟲：無尾熊",
      intro:
        "在澳洲的尤加利樹上，常常能看到一團灰色毛球緊緊抱著樹幹打瞌睡。那就是無尾熊！雖然名字裡有「熊」，但牠們其實和袋鼠比較像，是有育兒袋的有袋類動物。",
      sections: [
        {
          heading: "不是熊的「熊」",
          body: "無尾熊是有袋類，寶寶出生時只有一顆豆子那麼大，會爬進媽媽的育兒袋裡喝奶長大，大約六個月後才會探出頭來，接著趴在媽媽背上認識世界。",
        },
        {
          heading: "挑食的美食家",
          body: "無尾熊幾乎只吃尤加利樹的葉子。這種葉子營養很少，還含有對其他動物有毒的成分，無尾熊特別的消化系統卻能慢慢把它分解。",
        },
        {
          heading: "為什麼這麼愛睡？",
          body: "因為尤加利葉提供的能量很少，無尾熊必須盡量節省體力，所以一天要睡 18 到 22 個小時。牠們可不是懶惰，只是很懂得「省電」！",
        },
        {
          heading: "森林家園需要保護",
          body: "森林砍伐和森林大火讓無尾熊失去了許多家園。2022 年起，澳洲昆士蘭、新南威爾斯和首都領地的無尾熊已被列為瀕危物種。",
        },
      ],
      funFact: "無尾熊的指紋和人類非常相似，連專家用顯微鏡看都很難分辨！",
    },
  },
  {
    slug: "platypus",
    emoji: "🦫",
    name: "鴨嘴獸",
    english: "Platypus",
    habitat: "澳洲河流",
    diet: "水生昆蟲、蝦",
    fact: "會生蛋的哺乳類！嘴巴像鴨子，還能感應獵物身上的微弱電流。",
    accent: "from-teal-200 to-amber-400",
    image: "/image/platypus.jpg",
    credit: { author: "Charles J. Sharp", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/w/index.php?curid=143656029" },
    article: {
      title: "大自然的拼貼作品：鴨嘴獸",
      intro:
        "鴨子的嘴、河狸的尾巴、水獺的身體，還有會生蛋的本領！1799 年鴨嘴獸標本第一次送到英國時，科學家還以為是有人把不同動物縫在一起的惡作劇呢。",
      sections: [
        {
          heading: "會生蛋的哺乳類",
          body: "鴨嘴獸屬於「單孔目」，是極少數會生蛋的哺乳類。鴨嘴獸媽媽通常一次生下一到三顆蛋，把蛋抱在懷裡孵化，大約十天後寶寶就會破殼而出。",
        },
        {
          heading: "沒有乳頭也能餵奶",
          body: "鴨嘴獸媽媽沒有乳頭，乳汁會從腹部的皮膚滲出來，寶寶就像舔汗一樣把奶水舔進嘴裡。這是牠們身為哺乳類的重要證明。",
        },
        {
          heading: "閉著眼睛也能打獵",
          body: "鴨嘴獸潛水時會閉上眼睛、耳朵和鼻孔，靠著嘴巴上的感應器，偵測小蟲和蝦子肌肉活動時發出的微弱電流，在黑漆漆的河底也能找到食物。",
        },
        {
          heading: "帶有毒刺的爸爸",
          body: "公鴨嘴獸的後腳上有一根會分泌毒液的刺，是少數有毒的哺乳類。這種毒液不會致命，但會讓人非常疼痛，所以在野外看到牠們，千萬不要伸手去抓喔！",
        },
      ],
      funFact: "鴨嘴獸會先把食物存在臉頰的頰囊裡，浮到水面上時再慢慢享用。",
    },
  },
  {
    slug: "bat",
    emoji: "🦇",
    name: "蝙蝠",
    english: "Bat",
    habitat: "洞穴、樹林",
    diet: "昆蟲、果實",
    fact: "唯一真正會飛的哺乳類，靠回聲在黑夜中找路。",
    accent: "from-purple-300 to-fuchsia-400",
    image: "/image/bat.jpg",
    credit: { author: "U.S. Government", license: "Public domain", url: "https://commons.wikimedia.org/w/index.php?curid=192812" },
    article: {
      title: "夜空中的小守護者：蝙蝠",
      intro:
        "當太陽下山、星星出現，蝙蝠就開始忙碌的夜間工作。牠們是唯一真正會飛的哺乳類，雖然常被誤會成可怕的動物，其實是大自然裡非常重要的好幫手。",
      sections: [
        {
          heading: "用手飛翔",
          body: "蝙蝠的翅膀其實是牠們的「手」！細長的手指骨之間連著一層薄薄的皮膜，張開就成了翅膀。蝙蝠的學名「翼手目」，意思就是「用手當翅膀」。",
        },
        {
          heading: "黑夜中的聲納",
          body: "許多蝙蝠會發出人類聽不到的超音波，再聽回音判斷四周的環境，就算在漆黑的夜裡，也能準確抓到飛行中的小昆蟲。",
        },
        {
          heading: "大自然的好幫手",
          body: "吃昆蟲的蝙蝠一個晚上能吃掉大量的蚊子和害蟲；吃花蜜和果實的蝙蝠則會幫植物傳播花粉和種子，像是香蕉、龍舌蘭和榴槤，都要感謝蝙蝠的幫忙。",
        },
        {
          heading: "龐大的家族",
          body: "全世界的蝙蝠超過 1,400 種，大約佔所有哺乳類的五分之一。台灣也住著三十多種蝙蝠，下次傍晚散步時，抬頭找找看吧！",
        },
      ],
      funFact: "蝙蝠倒掛休息時不用費力，牠們腳上的肌腱會自動鎖住，讓牠們輕鬆地掛著睡覺。",
    },
  },
];

export function getMammal(slug: string) {
  return mammals.find((m) => m.slug === slug);
}
