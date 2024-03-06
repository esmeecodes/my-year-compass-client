const questions = [
  {
    questionNumber: 1,
    questionName: "lastYearInMonths",
    question:
      "1. Go through last year’s calendar week by week. If you see an important event, family gathering, friendly get-together or a significant project, write it down here",
    time: "the past year",
  },
  {
    questionNumber: 2,
    questionName: "pastPersonal",
    question:
      "2. Take a look at the area 'Personal life & family' and ask yourself what the significant events in each of them were.",
    time: "the past year",
  },
  {
    questionNumber: 3,
    questionName: "pastCareer",
    question:
      "3. Think about the topic 'Career' and ask yourself what the significant events in each of them were.",
    time: "the past year",
  },
  {
    questionNumber: 4,
    questionName: "pastFriends",
    question:
      "4. Think about the topic 'Friends & Community' and ask yourself what the significant events in each of them were.",
    time: "the past year",
  },
  {
    questionNumber: 5,
    questionName: "pastHobby",
    question:
      "5. Think about the topic 'Hobby & Creativity' and ask yourself what the significant events in each of them were.",
    time: "the past year",
  },
  {
    questionNumber: 6,
    questionName: "pastHealth",
    question:
      "6. How were you doing on a physical level? Did you eat well, did you move a little?",
    time: "the past year",
  },
  {
    questionNumber: 7,
    questionName: "pastMental",
    question:
      "7. How were you doing on a mental health level? Did you get new insights on yourself?",
    time: "the past year",
  },
  {
    questionNumber: 8,
    questionName: "pastHabits",
    question: "8. Which habits specifically defined you this year?",
    time: "the past year",
  },
  {
    questionNumber: 9,
    questionName: "pastBetterTomorrow",
    question:
      "9. Think about the topic 'a better tomorrow': What did you do this year to leave the world in a better shape than before?",
    time: "the past year",
  },
  {
    questionNumber: 10,
    questionName: "sixSentPast_decision",
    question: "10. The wisest decision I made... ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 11,
    questionName: "sixSentPast_lesson",
    question: "11. The biggest lesson I learned... ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 12,
    questionName: "sixSentPast_risk",
    question: "12. The biggest risk I took... ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 13,
    questionName: "sixSentPast_surprise",
    question: "13. The biggest surprise of the year... ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 14,
    questionName: "sixSentPast_impThing",
    question: "14. The most important thing I did for others... ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 15,
    questionName: "sixSentPast_completed",
    question: "15. The biggest thing I completed... ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 16,
    questionName: "sixQuestPast_proud",
    question: "16. What are you most proud of? ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 17,
    questionName: "sixQuestPast_influencedme",
    question: "17. Who are the three people who influenced you the most? ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 18,
    questionName: "sixQuestPast_influencedbyme",
    question: "18. Who are the three people you influenced the most? ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 19,
    questionName: "sixQuestPast_notaccomplished",
    question: "19. What were you not able to accomplish? ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 20,
    questionName: "sixQuestPast_discovered",
    question: "20. What is the best thing you have discovered about yourself? ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 21,
    questionName: "sixQuestPast_grateful",
    question: "21. What are you most grateful for? ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 22,
    questionName: "theBestMoments",
    question:
      "22. Describe the greatest and most memorable, joyful moments from last year. How did you feel? Who was there with you? What were you doing? What kind of smells, sounds or tastes do you remember? ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 23,
    questionName: "threeBigAcc_list",
    question:
      "23. List your three greatest accomplishments from last year here. ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 24,
    questionName: "threeBigAcc_achieved",
    question: "24. What did you do to achieve these? ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 25,
    questionName: "threeBigChall_list",
    question: "25. List your three biggest challenges from last year here. ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 26,
    questionName: "threeBigChall_overcome",
    question: "26. Who or what helped you overcome these challenges? ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 27,
    questionName: "threeBigChall_learn",
    question:
      "27. What have you learned about yourself by overcoming these challenges? ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 28,
    questionName: "forgiveness",
    question:
      "28. Did anything happen during the past year that still needs to be forgiven? Deeds or words that made you feel bad? Or are you angry with yourself? Write it down here. Do yourself good by forgiving.* ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 29,
    questionName: "lettingGo",
    question:
      "29. Is there anything else you need to say? Is there anything you have to let go of before you can start your next year? Draw or write, then think about it and let it all go. ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 30,
    questionName: "wordsPast",
    question: "30. Choose three words to define your past year. ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 31,
    questionName: "bookPast",
    question:
      "31. A book or a movie was made about your past year. What title would you give it? ",
    timeDesc: "the past year",
    time: "past",
  },
  {
    questionNumber: 32,
    questionName: "goodbyePast",
    question:
      "32. If there is anything else left that you would like to write down, or there is anybody you would like to say goodbye to, do it now. ",
    timeDesc: "the past year",
    time: "past",
  },
];

export default questions;
