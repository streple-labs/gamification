export function getRandomQuestions(
  questions: Record<
    number,
    { question: string; options: string[]; answer: number }
  >,
  count: number
) {
  const keys = Object.keys(questions).map(Number);
  const shuffled = keys.sort(() => 0.5 - Math.random());
  const selectedKeys = shuffled.slice(0, count);

  return selectedKeys.map((key) => ({
    id: key,
    ...questions[key],
  }));
}

export const P1L1quizFormQuestions: Record<
  number,
  { question: string; options: string[]; answer: number }
> = {
  1: {
    question: "What were some of the earliest forms of money?",
    options: [
      "Seashells and grain 🌾🐚",
      "Credit cards 💳",
      "Paper banknotes 💵",
      "Bitcoin ₿",
    ],
    answer: 0,
  },
  2: {
    question: "After trading items, what became the next big step in money?",
    options: [
      "Gold ✨",
      "Plastic tokens 🪙",
      "Digital wallets 📱",
      "Shells 🐚",
    ],
    answer: 0,
  },
  3: {
    question: "Who controlled the use of paper money when it first appeared?",
    options: [
      "Local shopkeepers 🏪",
      "Banks 🏦",
      "Blockchain miners ⛏️",
      "Travelers 🌍",
    ],
    answer: 1,
  },
  4: {
    question: "What makes digital money unique compared to paper money?",
    options: [
      "It lives only online 🌐",
      "It’s printed by every country 🏳️",
      "It can’t be exchanged 🔒",
      "It’s only for gamers 🎮",
    ],
    answer: 0,
  },
  5: {
    question: "What does “decentralized ownership” in blockchain mean?",
    options: [
      "One government owns it 🏛️",
      "No single person or group controls it 🌍",
      "It’s only owned by banks 🏦",
      "Everyone gets the same password 🔑",
    ],
    answer: 1,
  },
  6: {
    question: "Why are neo banking and borderless payments exciting?",
    options: [
      "They’re fast, global, and open to everyone 🚀🌎",
      "They only work in one country 🗺️",
      "They’re slower than traditional banks 🐢",
      "They use only paper money 📄",
    ],
    answer: 0,
  },
};
