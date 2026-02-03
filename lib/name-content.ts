/**
 * Rich name content for baby names SEO and user value
 * Provides detailed information about popular baby names
 */

export interface NameEducationContent {
  history: string
  personality: string
  famousPeople: string[]
  nicknames: string[]
  similarNames: string[]
  culturalSignificance: string
}

// Detailed content for popular names
const nameContent: Record<string, NameEducationContent> = {
  "olivia": {
    history: "Olivia was first used as a name by William Shakespeare in his play 'Twelfth Night' around 1602. Derived from the Latin word 'oliva' meaning olive, it has associations with peace, as the olive branch is a symbol of peace. The name gained steady popularity throughout the 20th century and has been one of the top names in English-speaking countries since the early 2000s.",
    personality: "Those named Olivia are often described as creative, compassionate, and natural leaders. The name evokes images of elegance and sophistication while remaining approachable. Olivias tend to be articulate communicators who value harmony in their relationships.",
    famousPeople: [
      "Olivia Newton-John - Grammy-winning singer and actress",
      "Olivia Wilde - Actress and filmmaker",
      "Olivia Colman - Academy Award-winning actress",
      "Olivia Rodrigo - Grammy-winning pop star",
      "Olivia Munn - Actress and television personality"
    ],
    nicknames: ["Liv", "Livvy", "Livy", "Olive", "Via", "Ollie"],
    similarNames: ["Olive", "Livia", "Alivia", "Oliver", "Ophelia", "Viola"],
    culturalSignificance: "The olive tree holds deep significance in Mediterranean cultures, symbolizing peace, wisdom, and victory. In Greek mythology, the goddess Athena gave the olive tree to Athens, making it a symbol of divine blessing. The name Olivia carries these connotations of peace and prosperity."
  },

  "liam": {
    history: "Liam originated as an Irish short form of William (Uilliam in Irish), which comes from the Germanic name Wilhelm meaning 'resolute protector' or 'strong-willed warrior.' While common in Ireland for centuries, Liam began its rise to prominence in the United States in the 1990s and has been the number one boys' name in America for multiple years.",
    personality: "Liams are often characterized as confident, determined, and protective. The name's meaning of 'strong-willed warrior' reflects qualities of leadership and courage. Those with this name are frequently seen as reliable and devoted to those they care about.",
    famousPeople: [
      "Liam Neeson - Irish actor known for dramatic and action roles",
      "Liam Hemsworth - Australian actor",
      "Liam Payne - Singer and former One Direction member",
      "Liam Gallagher - Rock musician from Oasis",
      "Prince William (Liam) - Duke of Cambridge"
    ],
    nicknames: ["Lee", "Li"],
    similarNames: ["William", "Levi", "Leo", "Luke", "Luca", "Logan"],
    culturalSignificance: "In Irish culture, the name carries the legacy of Irish kings and warriors. The name gained global recognition through influential figures in entertainment and continues to represent a bridge between traditional Irish heritage and modern naming trends."
  },

  "emma": {
    history: "Emma has Germanic origins, derived from the word 'ermen' meaning 'whole' or 'universal.' It was popular among medieval royalty, including Emma of Normandy who was Queen of England in the 11th century. The name experienced a revival in the late 19th century, partly due to Jane Austen's novel 'Emma,' and has maintained consistent popularity ever since.",
    personality: "Emmas are typically described as warm, intelligent, and artistic. The name suggests someone who is both grounded and imaginative, with strong organizational skills balanced by creativity. Emmas often make excellent friends and are known for their loyalty and genuine nature.",
    famousPeople: [
      "Emma Watson - British actress and activist",
      "Emma Stone - Academy Award-winning actress",
      "Emma Thompson - Award-winning actress and screenwriter",
      "Emma Roberts - Actress",
      "Emma Chamberlain - Media personality and content creator"
    ],
    nicknames: ["Em", "Emmy", "Emmie", "Ems"],
    similarNames: ["Emily", "Emilia", "Ella", "Emmeline", "Gemma", "Amelie"],
    culturalSignificance: "Emma has literary significance as the title character of Jane Austen's beloved 1815 novel, which helped popularize the name. The name represents both classic elegance and modern approachability, making it timeless across generations."
  },

  "noah": {
    history: "Noah comes from the Hebrew name Noach, meaning 'rest' or 'comfort.' In the Bible, Noah is the hero of the great flood narrative who built an ark to save his family and pairs of animals. The name has been used consistently throughout Jewish and Christian history but saw a significant surge in popularity in English-speaking countries starting in the 1990s.",
    personality: "Noahs are often perceived as calm, wise, and compassionate. The biblical association with the ark builder suggests qualities of patience, preparation, and responsibility. Those named Noah are frequently seen as peacemakers who bring stability to those around them.",
    famousPeople: [
      "Noah Schnapp - Actor known for Stranger Things",
      "Noah Centineo - Actor",
      "Noah Wyle - Actor known for ER",
      "Noah Webster - Creator of Webster's Dictionary",
      "Noah Baumbach - Filmmaker and screenwriter"
    ],
    nicknames: ["No", "Noey", "Noahy"],
    similarNames: ["Nolan", "Jonah", "Elijah", "Micah", "Judah", "Josiah"],
    culturalSignificance: "In Judeo-Christian tradition, Noah represents righteousness and divine favor. The story of Noah's Ark is one of the most recognized narratives worldwide, symbolizing hope, renewal, and the covenant between humanity and the divine."
  },

  "charlotte": {
    history: "Charlotte is the French feminine form of Charles, derived from the Germanic name Karl meaning 'free man.' The name gained royal associations through Charlotte of Mecklenburg-Strelitz, wife of King George III. It has experienced renewed popularity in the 21st century, partly influenced by the birth of Princess Charlotte of Cambridge in 2015.",
    personality: "Charlottes are often described as feminine yet strong, elegant yet down-to-earth. The name suggests sophistication and intelligence combined with warmth and approachability. Those named Charlotte often display both classic grace and modern independence.",
    famousPeople: [
      "Charlotte Bronte - Celebrated Victorian novelist",
      "Princess Charlotte of Cambridge - British royal",
      "Charlotte Gainsbourg - French-British actress and singer",
      "Charlotte Church - Welsh singer",
      "Charlotte Rampling - British actress"
    ],
    nicknames: ["Charlie", "Lottie", "Char", "Carly", "Lola"],
    similarNames: ["Caroline", "Charlene", "Scarlett", "Violet", "Penelope", "Eleanor"],
    culturalSignificance: "Charlotte has strong literary connections, most notably through Charlotte Bronte and her masterwork 'Jane Eyre.' The name represents the feminine form of Charles, connecting it to a lineage of kings and emperors throughout European history."
  },

  "sophia": {
    history: "Sophia comes directly from the Greek word for 'wisdom.' It has been used since ancient times and was particularly popular among European royalty, including multiple queens and empresses named Sophia. The name has ancient philosophical significance, as Sophia represents the concept of divine wisdom in various religious and philosophical traditions.",
    personality: "Sophias are typically characterized as intelligent, graceful, and deeply intuitive. The name's meaning of wisdom suggests someone who is thoughtful, philosophical, and insightful. Sophias often display natural elegance combined with intellectual curiosity.",
    famousPeople: [
      "Sophia Loren - Legendary Italian actress",
      "Sophia Bush - American actress and activist",
      "Sofia Vergara - Colombian-American actress",
      "Sophie Turner - British actress",
      "Sofia Coppola - Director and screenwriter"
    ],
    nicknames: ["Sophie", "Sofie", "Fia", "Soph", "Phia"],
    similarNames: ["Sofia", "Sophie", "Josephine", "Sylvia", "Sabrina", "Serena"],
    culturalSignificance: "In Greek philosophy and early Christianity, Sophia represented the personification of wisdom. The name connects to the famous Hagia Sophia in Istanbul and carries connotations of divine knowledge and spiritual insight."
  },

  "james": {
    history: "James derives from the Hebrew name Jacob (Ya'akov), meaning 'supplanter.' It entered English through the Late Latin Jacomus, which became James. The name has been borne by six Scottish kings and two English kings, making it one of the most royal names in British history. It has remained consistently popular for centuries.",
    personality: "Those named James are often seen as reliable, traditional, and strong. The name suggests classic masculinity combined with intelligence and integrity. James typically implies someone who is both a leader and a gentleman, dependable in any situation.",
    famousPeople: [
      "James Dean - Iconic American actor",
      "LeBron James - Basketball legend",
      "James Bond - Fictional British spy (literary and film)",
      "James Madison - Fourth U.S. President",
      "James Brown - 'Godfather of Soul'"
    ],
    nicknames: ["Jim", "Jimmy", "Jamie", "Jay", "Jameson"],
    similarNames: ["Jacob", "Jack", "Jackson", "Jason", "Jeremy", "John"],
    culturalSignificance: "James has profound religious significance as the name of two apostles in the New Testament. The King James Bible, commissioned by King James I, is one of the most influential English texts. The name represents steadfastness and honorable tradition."
  },

  "isabella": {
    history: "Isabella is the Latinate form of Elizabeth, meaning 'devoted to God' in Hebrew. It was extremely popular among medieval European royalty, with notable bearers including Isabella I of Castile, who funded Christopher Columbus's voyages. The name has seen a remarkable revival in the 21st century, becoming one of the most popular girls' names.",
    personality: "Isabellas are often described as beautiful, intelligent, and spirited. The name evokes images of romance and royalty while suggesting someone with strong convictions. Those named Isabella often display creativity and passion combined with inner strength.",
    famousPeople: [
      "Isabella Rossellini - Italian-American actress and model",
      "Isabella I of Castile - Spanish queen who funded Columbus",
      "Bella Hadid - International supermodel (Isabella)",
      "Isabella Blow - British fashion editor",
      "Isabelle Huppert - French actress"
    ],
    nicknames: ["Bella", "Izzy", "Belle", "Isa", "Izzie", "Sabella"],
    similarNames: ["Elizabeth", "Arabella", "Gabriella", "Annabella", "Isabelle", "Mirabella"],
    culturalSignificance: "Isabella carries royal Spanish heritage through Queen Isabella I, who played a pivotal role in world history. The name gained modern pop culture significance through the Twilight series character Bella Swan, whose full name is Isabella."
  },

  "alexander": {
    history: "Alexander comes from the Greek Alexandros, meaning 'defender of the people' or 'defender of mankind.' The name achieved legendary status through Alexander the Great, the Macedonian king who created one of history's largest empires. It has been popular throughout Western and Eastern cultures for over two millennia.",
    personality: "Alexanders are typically seen as strong, ambitious, and natural leaders. The name suggests someone destined for greatness, with the courage and intelligence to achieve remarkable things. Those named Alexander often display confidence and a protective nature.",
    famousPeople: [
      "Alexander the Great - Macedonian king and conqueror",
      "Alexander Hamilton - Founding Father",
      "Alexander Graham Bell - Telephone inventor",
      "Alexander McQueen - Fashion designer",
      "Alex Rodriguez - Baseball star"
    ],
    nicknames: ["Alex", "Xander", "Lex", "Zander", "Al", "Sasha"],
    similarNames: ["Alexandra", "Alejandro", "Alessandro", "Alexis", "Andrew", "Adrian"],
    culturalSignificance: "Alexander the Great's influence made this name spread across the ancient world, from Egypt to India. The name has been borne by popes, tsars, kings, and countless influential figures throughout history, representing achievement and leadership."
  },

  "mia": {
    history: "Mia has multiple origins - it's a Scandinavian short form of Maria, meaning 'beloved' or 'mine,' and can also be connected to the Italian and Spanish word for 'mine.' The name gained international popularity in the late 20th century and has become a top choice for parents seeking a short, elegant name with global appeal.",
    personality: "Mias are often characterized as sweet, energetic, and creative. Despite its brevity, the name carries warmth and affection in its meaning. Those named Mia often display artistic inclinations and have magnetic, friendly personalities.",
    famousPeople: [
      "Mia Farrow - Acclaimed actress",
      "Mia Hamm - Soccer legend",
      "Mia Wasikowska - Australian actress",
      "M.I.A. - British musician (Mathangi 'Maya' Arulpragasam)",
      "Mia Thermopolis - Fictional princess from The Princess Diaries"
    ],
    nicknames: ["Mi", "Mimi"],
    similarNames: ["Maya", "Mila", "Mya", "Maria", "Amelia", "Aria"],
    culturalSignificance: "Mia's connection to Maria gives it religious significance as a form of the Virgin Mary's name. In Italian, 'mia' means 'mine,' adding an endearing quality. The name represents modern international naming trends while maintaining classic roots."
  },

  "william": {
    history: "William derives from the Germanic Wilhelm, combining 'wil' (will, desire) and 'helm' (helmet, protection), meaning 'resolute protector.' It arrived in England with William the Conqueror in 1066 and has since been one of the most consistently popular English names, borne by kings, presidents, and countless influential figures.",
    personality: "Williams are typically perceived as dignified, reliable, and strong-willed. The name suggests natural leadership combined with a sense of duty and honor. Those named William often display both traditional values and adaptability to modern times.",
    famousPeople: [
      "William Shakespeare - Legendary playwright",
      "Prince William - Duke of Cambridge",
      "William 'Bill' Gates - Microsoft co-founder",
      "William Faulkner - Nobel Prize-winning author",
      "Will Smith - Actor and entertainer"
    ],
    nicknames: ["Will", "Bill", "Billy", "Liam", "Willy", "Willie"],
    similarNames: ["Liam", "Willem", "Wilhelm", "Wilson", "Walter", "Warren"],
    culturalSignificance: "William the Conqueror's victory at the Battle of Hastings made this the name of English royalty. Four U.S. presidents named William demonstrate its continuing association with leadership. Shakespeare further cemented the name's cultural importance."
  },

  "ava": {
    history: "Ava has multiple possible origins - it may derive from the Germanic element 'aval' meaning 'desired,' the Latin 'avis' meaning 'bird,' or be a variation of Eve meaning 'life.' The name was borne by a 9th-century Frankish saint but gained modern popularity largely through Hollywood legend Ava Gardner in the mid-20th century.",
    personality: "Avas are often described as captivating, confident, and charismatic. The name suggests natural beauty combined with strength of character. Those named Ava often display a magnetic presence and creative spirit.",
    famousPeople: [
      "Ava Gardner - Hollywood Golden Age actress",
      "Ava DuVernay - Award-winning filmmaker",
      "Ava Max - Pop singer",
      "Ava Phillippe - Celebrity child and model",
      "Ava Helen Pauling - Human rights activist"
    ],
    nicknames: ["Ave", "Avie"],
    similarNames: ["Eva", "Ada", "Ivy", "Ella", "Emma", "Aria"],
    culturalSignificance: "Ava Gardner's legendary beauty and talent helped establish this name as synonymous with glamour and allure. The name's connection to Eve ('life') and possible meaning of 'bird' give it associations with freedom and vitality."
  },

  "benjamin": {
    history: "Benjamin comes from the Hebrew Binyamin, meaning 'son of the right hand' or 'son of the south.' In the Bible, Benjamin was the youngest son of Jacob and Rachel, making the name associated with being beloved and favored. It has been consistently popular in English-speaking countries for centuries.",
    personality: "Benjamins are typically seen as intelligent, creative, and dependable. The name suggests someone who is both scholarly and practical, capable of great achievement while remaining grounded. Those named Benjamin often display wit, warmth, and reliability.",
    famousPeople: [
      "Benjamin Franklin - Founding Father and polymath",
      "Benjamin Disraeli - British Prime Minister",
      "Ben Affleck - Actor and filmmaker",
      "Ben Stiller - Actor and comedian",
      "Benjamin Netanyahu - Israeli Prime Minister"
    ],
    nicknames: ["Ben", "Benny", "Benji", "Benjie"],
    similarNames: ["Samuel", "Nathaniel", "Jonathan", "Sebastian", "Daniel", "Alexander"],
    culturalSignificance: "The biblical Benjamin was specially beloved by his father Jacob, giving the name connotations of being cherished. Benjamin Franklin's legacy as a Founding Father, inventor, and philosopher has made the name synonymous with American ingenuity and wisdom."
  },

  "harper": {
    history: "Harper originated as an English occupational surname for someone who plays the harp. It began transitioning to a given name in the 20th century and surged in popularity after author Harper Lee (of 'To Kill a Mockingbird' fame). Once predominantly used for boys, it has become primarily a girls' name in recent decades.",
    personality: "Harpers are often characterized as artistic, literary, and independent. The name suggests someone with creative talents and a unique perspective. Those named Harper often display intelligence, sensitivity, and a love of storytelling or music.",
    famousPeople: [
      "Harper Lee - Author of 'To Kill a Mockingbird'",
      "Harper Beckham - Celebrity child",
      "Harper Seven - Victoria and David Beckham's daughter",
      "Harper Simon - Musician",
      "Stephen Harper - Former Canadian Prime Minister"
    ],
    nicknames: ["Harp", "Harpy", "Harpie"],
    similarNames: ["Piper", "Sawyer", "Parker", "Avery", "Riley", "Quinn"],
    culturalSignificance: "The harp is a symbol of Ireland and has associations with divine music in many cultures. Harper Lee's literary masterpiece gave the name intellectual and artistic credibility. The Beckhams naming their daughter Harper helped popularize it globally."
  },

  "luna": {
    history: "Luna is the Latin word for 'moon' and was the name of the Roman goddess of the moon. While it has ancient origins, Luna became fashionable as a given name only in recent decades, influenced by pop culture including Harry Potter character Luna Lovegood. It represents a trend toward celestial and nature-inspired names.",
    personality: "Lunas are often described as dreamy, creative, and mysteriously charming. The name evokes images of moonlit nights and suggests someone with depth and imagination. Those named Luna often display artistic sensibilities and an otherworldly quality.",
    famousPeople: [
      "Luna Lovegood - Beloved Harry Potter character",
      "Luna Blaise - Actress",
      "Sailor Moon (Luna) - Anime character",
      "Chrissy Teigen's daughter Luna Simone",
      "Luna the whale - Famous orca"
    ],
    nicknames: ["Lu", "Lulu", "Lunita"],
    similarNames: ["Stella", "Aurora", "Selene", "Nova", "Celeste", "Lyra"],
    culturalSignificance: "In Roman mythology, Luna was the divine personification of the moon, driving her chariot across the night sky. The moon holds significance across virtually all cultures as a symbol of femininity, cycles, and mystery. Luna represents the modern trend of celestial names."
  },

  "henry": {
    history: "Henry comes from the Germanic Heimirich, meaning 'ruler of the home' or 'home ruler.' It became associated with English royalty through eight kings named Henry, most famously Henry VIII. The name has maintained steady popularity for centuries and has seen a notable resurgence in the 21st century.",
    personality: "Henrys are typically perceived as classic, dependable, and distinguished. The name suggests someone with natural authority and traditional values, yet approachable and warm. Those named Henry often display leadership qualities combined with kindness.",
    famousPeople: [
      "Henry VIII - Tudor King of England",
      "Henry Ford - Automobile pioneer",
      "Henry Cavill - Actor",
      "Prince Harry (Henry) - Duke of Sussex",
      "Henry David Thoreau - Author and philosopher"
    ],
    nicknames: ["Harry", "Hank", "Hal", "Hen", "Ry"],
    similarNames: ["William", "Charles", "George", "Edward", "Arthur", "Theodore"],
    culturalSignificance: "Eight English kings named Henry shaped centuries of history, from Henry II's legal reforms to Henry VIII's break with Rome. The name represents noble English heritage while remaining accessible and modern."
  },

  "elijah": {
    history: "Elijah comes from the Hebrew Eliyahu, meaning 'my God is Yahweh.' In the Bible, Elijah was one of the greatest prophets who performed miracles and was taken to heaven in a chariot of fire. The name has been used in Jewish tradition for centuries and has become increasingly popular among all backgrounds in recent decades.",
    personality: "Elijahs are often characterized as spiritual, passionate, and principled. The name suggests someone with strong convictions and the courage to stand up for their beliefs. Those named Elijah often display intensity, wisdom, and charisma.",
    famousPeople: [
      "Elijah Wood - Actor known for Lord of the Rings",
      "Elijah McCoy - Inventor and engineer",
      "Elijah Muhammad - Nation of Islam leader",
      "Elijah Cummings - U.S. Congressman",
      "Elijah Burke - Professional wrestler"
    ],
    nicknames: ["Eli", "Lijah", "Ellie", "Lige"],
    similarNames: ["Isaiah", "Ezra", "Noah", "Gabriel", "Josiah", "Malachi"],
    culturalSignificance: "In Jewish tradition, Elijah is expected to return before the Messiah, and a cup is left for him at every Passover seder. The prophet Elijah represents unwavering faith and miraculous power, making this a name of deep spiritual significance."
  },

  "emily": {
    history: "Emily derives from the Latin Aemilia, the feminine form of the Roman family name Aemilius, which may mean 'rival' or 'industrious.' The name has been popular in English-speaking countries since the 18th century, partly due to poet Emily Dickinson and the Bronte sisters' novel 'Wuthering Heights' featuring Emily Bronte.",
    personality: "Emilys are typically described as intelligent, creative, and gentle. The name suggests someone who is both industrious and artistic, with a sensitive and thoughtful nature. Those named Emily often display literary or artistic talents and deep emotional intelligence.",
    famousPeople: [
      "Emily Dickinson - Renowned American poet",
      "Emily Bronte - Author of 'Wuthering Heights'",
      "Emily Blunt - British actress",
      "Emily Ratajkowski - Model and actress",
      "Emily Watson - British actress"
    ],
    nicknames: ["Em", "Emmy", "Emmie", "Millie", "Milly"],
    similarNames: ["Emma", "Amelia", "Emilia", "Lily", "Evelyn", "Ella"],
    culturalSignificance: "Emily Dickinson and Emily Bronte represent the name's literary heritage. The name dominated baby name charts in the 1990s and 2000s, representing a generation of girls while maintaining its timeless elegance."
  },

  "michael": {
    history: "Michael comes from the Hebrew Mikha'el, meaning 'who is like God?' - a rhetorical question implying no one. In religious tradition, Michael is an archangel and leader of heaven's armies. The name has been consistently among the most popular boys' names in Western countries for decades, particularly dominant from the 1950s through the 1990s.",
    personality: "Michaels are often perceived as strong, protective, and noble. The archangel association suggests someone who is a defender and leader. Those named Michael often display courage, integrity, and a sense of justice.",
    famousPeople: [
      "Michael Jackson - 'King of Pop'",
      "Michael Jordan - Basketball legend",
      "Michael B. Jordan - Actor",
      "Michael Phelps - Olympic swimmer",
      "Michelangelo - Renaissance artist"
    ],
    nicknames: ["Mike", "Mikey", "Mickey", "Mick", "Micky"],
    similarNames: ["Matthew", "Daniel", "David", "Gabriel", "Raphael", "Nicholas"],
    culturalSignificance: "The Archangel Michael appears in Jewish, Christian, and Islamic traditions as a powerful protector. The name's meaning as a rhetorical question about God reflects deep theological significance. Throughout history, the name has represented strength and righteousness."
  },

  "aria": {
    history: "Aria has multiple origins - it's the Italian word for 'air' or 'song' (particularly a solo in opera), and can also derive from the Hebrew or'/'light' or the Sanskrit meaning 'noble.' The name gained significant popularity in the 21st century, partly influenced by Game of Thrones character Arya Stark.",
    personality: "Arias are often characterized as melodic, graceful, and spirited. The musical connection suggests someone with artistic sensibilities and natural elegance. Those named Aria often display creativity, independence, and a distinctive presence.",
    famousPeople: [
      "Arya Stark - Game of Thrones character",
      "Aria Montgomery - Pretty Little Liars character",
      "Aria Giovanni - Model",
      "Aria Tesolin - Canadian singer",
      "Aria Amazon Lodge - Famous eco-lodge"
    ],
    nicknames: ["Ari", "Ria", "Ary"],
    similarNames: ["Arya", "Isla", "Ava", "Luna", "Mia", "Aurora"],
    culturalSignificance: "In opera, an aria is a self-contained piece for one voice, representing the height of musical expression. The name connects to Italian musical heritage and the beauty of vocal arts. Its multiple possible origins give it rich, multicultural appeal."
  }
}

// Default content for names not specifically defined
const defaultContent: NameEducationContent = {
  history: "This name has a rich history spanning multiple cultures and time periods. Names carry the weight of tradition while continuously evolving in meaning and popularity across generations.",
  personality: "Names often carry associations with certain personality traits based on their meaning, famous bearers, and cultural context. The qualities associated with a name can vary across different cultures and time periods.",
  famousPeople: [
    "Many notable individuals throughout history have shared this name",
    "Famous bearers help shape the public perception of names",
    "Contemporary celebrities and historical figures influence naming trends"
  ],
  nicknames: [],
  similarNames: [],
  culturalSignificance: "Names hold deep cultural significance, connecting individuals to their heritage, family traditions, and broader cultural identity. The meaning and associations of a name can influence how it's perceived across different societies."
}

/**
 * Get rich content for a baby name
 */
export function getNameContent(slug: string): NameEducationContent {
  return nameContent[slug.toLowerCase()] || defaultContent
}

/**
 * Get list of names with custom content
 */
export function getNamesWithContent(): string[] {
  return Object.keys(nameContent)
}
