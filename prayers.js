/* prayers.js — THE PRAYER DECK. One card per entry. The single source of truth.
   NEW DAILY PRAYER = append one object here. The card renders itself, becomes
   Today's Prayer, and the deck count updates. Nothing else to touch.
   All Scripture: Douay-Rheims 1899 (public domain), verified verbatim at
   biblegateway.com (DRA) before shipping. Never quote from memory. */

const PRAYERS = [
  {
    id: "false-apostles",
    title: "The Prayer Against False Apostles, False Prophets, and False Priests",
    icon: "🛡️",
    tag: "Discernment",
    date: "2026-08-25",
    desc: "For wolves in the pulpit — teachers who preach God's word and bless the sword. A litany of deliverance with its full Scripture spine.",
    parts: [
      { type: "p", text: "In the name of the Father, and of the Son, and of the Holy Ghost. Amen." },
      { type: "p", text: "Lord Jesus Christ, Teacher of teachers, Judge of judges, You warned us Yourself: many will come in Your name and preach Your word, and their works will betray them. Open our eyes. Give us the discernment that sees the wolf under the wool, the angel of light who serves the dark. We ask it not in suspicion of Your Church, but in love of her, for the thief climbs in to steal, kill, and destroy, and You came that we might have life." },
      {
        type: "litany",
        heading: "Litany of Deliverance",
        lines: [
          "From false apostles, who transform themselves into apostles of Christ",
          "From false prophets, who come in the clothing of sheep and are inwardly ravening wolves",
          "From priests who preach Your word and bless the sword, who teach men to trust in armies and not in You",
          "From the spirit that prays for war in the name of peace, and calls the killing of enemies the will of God",
          "For You said: all that take the sword shall perish with the sword. And You said: love your enemies, pray for them that persecute you. From every teacher who inverts Your words to serve the powers of this world",
          "From those who preach a cheap salvation: believe and be saved, nothing more, nothing changed",
          "For the demons believe there is one God, and they believe it well, and they tremble. From a faith that believes without trembling, and trembles without obeying",
          "From those who deny the cleansing fire, who preach that nothing after this life burns away the dross",
          "From those who deny the everlasting fire, who flatter the sinner that hell is a fable",
          "From those who say Lord, Lord, and do not the will of Your Father, who prophesy in Your name and work iniquity",
          "That we may not be counted among those to whom You will say: I never knew you, depart from me",
          "That we may be peacemakers, children of God",
          "That we may pray for the dead, that they may be loosed from their sins"
        ],
        response: "deliver us, Lord."
      },
      { type: "p", text: "Lord God, save us from the faith of demons. Give us the faith that works by charity: faith that feeds the hungry, clothes the naked, forgives the enemy, keeps Your commandments, and fears Your judgment while hoping in Your mercy. We believe in You, and we ask for the works that prove it, for faith without works is dead." },
      { type: "p", text: "Remind us of the four last things: death, judgment, heaven, and hell. Keep us from the flattery of those who soften Your justice to win our ears. Send us teachers who speak Your whole word, the comfort and the warning, the mercy and the fire." },
      { type: "p", text: "And for the priests and pastors who have blessed the sword and taught men to trust in chariots and horses: if they have done it in blindness, open their eyes; if in pride, break their pride. Let Your Church be the bride You died for, not a chaplain to empires." },
      { type: "p", text: "We ask it in the name of Jesus Christ, who is the same yesterday, today, and forever, and who will come again to judge the living and the dead. Amen." },
      {
        type: "spine",
        heading: "Scripture spine — Douay-Rheims 1899, verified at source",
        items: [
          ["Matthew 7:15", "Beware of false prophets, who come to you in the clothing of sheep, but inwardly they are ravening wolves."],
          ["Matthew 7:22-23", "Lord, Lord, have not we prophesied in thy name, and cast out devils in thy name, and done many miracles in thy name? And then will I profess unto them, I never knew you: depart from me, you that work iniquity."],
          ["James 2:19", "Thou believest that there is one God. Thou dost well: the devils also believe and tremble."],
          ["James 2:26", "For even as the body without the spirit is dead; so also faith without works is dead."],
          ["2 Corinthians 11:13-15", "For such false apostles are deceitful workmen, transforming themselves into the apostles of Christ. And no wonder: for Satan himself transformeth himself into an angel of light. Therefore it is no great thing if his ministers be transformed as the ministers of justice, whose end shall be according to their works."],
          ["Matthew 26:52", "Put up again thy sword into its place: for all that take the sword shall perish with the sword."],
          ["Matthew 5:44", "Love your enemies: do good to them that hate you: and pray for them that persecute and calumniate you."],
          ["1 Corinthians 3:15", "If any man's work burn, he shall suffer loss; but he himself shall be saved, yet so as by fire."],
          ["2 Maccabees 12:46", "It is therefore a holy and wholesome thought to pray for the dead, that they may be loosed from sins."],
          ["Matthew 25:41", "Depart from me, you cursed, into everlasting fire which was prepared for the devil and his angels."],
          ["Matthew 25:46", "And these shall go into everlasting punishment: but the just, into life everlasting."],
          ["Revelation 21:8", "But the fearful, and unbelieving, and the abominable, and murderers, and whoremongers, and sorcerers, and idolaters, and all liars, they shall have their portion in the pool burning with fire and brimstone, which is the second death."],
          ["Hebrews 11:6", "But without faith it is impossible to please God. For he that cometh to God, must believe that he is, and is a rewarder to them that seek him."]
        ]
      }
    ]
  },

  {
    id: "protection",
    title: "The Prayer of Protection",
    icon: "🌙",
    tag: "Night Watch",
    date: null,
    desc: "For the night watch — cover against the traps of the enemy and the terror of the night.",
    parts: [
      { type: "p", text: "Heavenly Father, my refuge and fortress, Lord, shield me from all harm." },
      { type: "verse", ref: "Psalm 90:4", text: "He will overshadow thee with his shoulders: and under his wings thou shalt trust." },
      { type: "verse", ref: "Psalm 90:5", text: "His truth shall compass thee with a shield: thou shalt not be afraid of the terror of the night." },
      { type: "p", text: "Protect me from the traps of the enemy and the darkness that surrounds me. Guard my home, my sleep, and the ones I love; let no weapon formed against us prosper." },
      { type: "p", text: "In the name of Jesus, Amen. Cover me in Your precious blood, Lord. Amen." }
    ]
  },

  {
    id: "gratitude",
    title: "The Prayer of Gratitude",
    icon: "🕯️",
    tag: "Thanksgiving",
    date: null,
    desc: "For the practice of thanks in all things, seen and unseen.",
    parts: [
      { type: "p", text: "Gracious God, Lord of all blessings." },
      { type: "verse", ref: "1 Thessalonians 5:18", text: "In all things give thanks; for this is the will of God in Christ Jesus concerning you all." },
      { type: "p", text: "Thank You for all You have provided, even the unseen things. Thank You for the bread, the roof, the breath, and the mercy that outlasts my failures." },
      { type: "p", text: "With a grateful heart, Amen. Forever thankful, Amen." }
    ]
  },

  {
    id: "healing",
    title: "The Prayer of Healing",
    icon: "🕊️",
    tag: "Healing",
    date: null,
    desc: "For body, soul, and spirit — the scar that closes, the wound that heals.",
    parts: [
      { type: "p", text: "Divine Healer, Merciful God." },
      { type: "verse", ref: "Jeremiah 30:17", text: "For I will close up thy scar, and will heal thee of thy wounds, saith the Lord." },
      { type: "verse", ref: "Isaiah 53:5", text: "But he was wounded for our iniquities, he was bruised for our sins: the chastisement of our peace was upon him, and by his bruises we are healed." },
      { type: "p", text: "Heal my body, soul, and spirit. Restore what has been broken. Let Your hand close every scar and silence every ache that keeps me from You." },
      { type: "p", text: "By Your stripes I am healed. Amen. Bring peace to my body and spirit. Amen." }
    ]
  },

  {
    id: "warfare",
    title: "The Prayer of Spiritual Warfare",
    icon: "⚔️",
    tag: "Warfare",
    date: null,
    desc: "For the fight that is not against flesh and blood — stand against the deceits of the devil.",
    parts: [
      { type: "p", text: "Mighty Warrior King, God of Angel Armies." },
      { type: "verse", ref: "Ephesians 6:11", text: "Put you on the armour of God, that you may be able to stand against the deceits of the devil." },
      { type: "verse", ref: "Ephesians 6:12", text: "For our wrestling is not against flesh and blood; but against principalities and power, against the rulers of the world of this darkness, against the spirits of wickedness in the high places." },
      { type: "p", text: "I rebuke every dark force that comes against me. I declare victory in Jesus' name. Arm me with truth, righteousness, faith, and the word of God; let me stand when the day is evil." },
      { type: "p", text: "The battle is Yours, Lord. Amen. I stand firm in faith and fire. Amen." }
    ]
  },

  {
    id: "guidance",
    title: "The Prayer of Guidance",
    icon: "🧭",
    tag: "Guidance",
    date: null,
    desc: "For the path — confidence in the Lord, not in my own prudence.",
    parts: [
      { type: "p", text: "Wise and Loving Father, My Shepherd and Light." },
      { type: "verse", ref: "Proverbs 3:5", text: "Have confidence in the Lord with all thy heart, and lean not upon thy own prudence." },
      { type: "verse", ref: "Proverbs 3:6", text: "In all thy ways think on him, and he will direct thy steps." },
      { type: "verse", ref: "Psalm 118:105", text: "Thy word is a lamp to my feet, and a light to my paths." },
      { type: "p", text: "Show me the path to take today. Let Your Spirit lead me in truth. When the road forks and I cannot see, make my next step sure." },
      { type: "p", text: "I trust Your direction. Amen. Guide my steps, Lord. Amen." }
    ]
  }
];

/* Order: newest dated first, then founding deck. */
function deckOrder() {
  return PRAYERS.slice().sort(function (a, b) {
    if (a.date && b.date) return a.date < b.date ? 1 : -1;
    if (a.date) return -1;
    if (b.date) return 1;
    return 0;
  });
}

function todayEntry() {
  var ordered = deckOrder();
  for (var i = 0; i < ordered.length; i++) {
    if (ordered[i].date) return ordered[i];
  }
  return ordered[0];
}
