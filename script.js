// Questions object containing 50 anime quiz questions
const questions = [
    {
      id: 1,
      question: "What is the name of the main protagonist in Naruto?",
      options: [
        "Sasuke Uchiha",
        "Naruto Uzumaki",
        "Sakura Haruno",
        "Kakashi Hatake"
      ]
    },
    {
      id: 2,
      question: "In Dragon Ball Z, what is Goku's Saiyan name?",
      options: [
        "Bardock",
        "Vegeta",
        "Raditz",
        "Kakarot"
      ]
    },
    {
      id: 3,
      question: "Who is the captain of the Straw Hat Pirates in One Piece?",
      options: [
        "Roronoa Zoro",
        "Nami",
        "Monkey D. Luffy",
        "Usopp"
      ]
    },
    {
      id: 4,
      question: "What is the primary weapon of Inuyasha?",
      options: [
        "Tetsusaiga",
        "Shuriken",
        "Katana",
        "Bow and Arrow"
      ]
    },
    {
      id: 5,
      question: "In Attack on Titan, who is the main character?",
      options: [
        "Eren Yeager",
        "Levi Ackerman",
        "Mikasa Ackerman",
        "Armin Arlert"
      ]
    },
    {
      id: 6,
      question: "Which anime features a notebook that can kill anyone whose name is written in it?",
      options: [
        "Bleach",
        "Death Note",
        "Code Geass",
        "Tokyo Ghoul"
      ]
    },
    {
      id: 7,
      question: "Who is known as the 'Fullmetal Alchemist'?",
      options: [
        "Alphonse Elric",
        "Roy Mustang",
        "Edward Elric",
        "Winry Rockbell"
      ]
    },
    {
      id: 8,
      question: "In My Hero Academia, what is the name of Deku's mentor?",
      options: [
        "Endeavor",
        "All Might",
        "Aizawa",
        "Gran Torino"
      ]
    },
    {
      id: 9,
      question: "Which anime revolves around a high school that battles with unique culinary skills?",
      options: [
        "Fruits Basket",
        "Shokugeki no Soma",
        "Toriko",
        "Yakitate!! Japan"
      ]
    },
    {
      id: 10,
      question: "In Fairy Tail, who is the dragon slayer of fire?",
      options: [
        "Natsu Dragneel",
        "Gray Fullbuster",
        "Erza Scarlet",
        "Gajeel Redfox"
      ]
    },
    {
      id: 11,
      question: "What is the name of the energy attack used by Goku?",
      options: [
        "Spirit Bomb",
        "Kamehameha",
        "Galick Gun",
        "Special Beam Cannon"
      ]
    },
    {
      id: 12,
      question: "In Hunter x Hunter, what is Gon’s primary weapon?",
      options: [
        "Sword",
        "Fishing Rod",
        "Bow",
        "Dagger"
      ]
    },
    {
      id: 13,
      question: "Which anime features a character named Light Yagami?",
      options: [
        "Bleach",
        "Death Note",
        "Code Geass",
        "Steins;Gate"
      ]
    },
    {
      id: 14,
      question: "What is the goal of Ash Ketchum in Pokémon?",
      options: [
        "Become a Pokémon Breeder",
        "Catch All Pokémon",
        "Become a Pokémon Master",
        "Open a Pokémon Gym"
      ]
    },
    {
      id: 15,
      question: "In Demon Slayer, what is the name of Tanjiro's sister?",
      options: [
        "Nezuko",
        "Mitsuri",
        "Shinobu",
        "Kanao"
      ]
    },
    {
      id: 16,
      question: "Which anime is set in the hidden village of Konohagakure?",
      options: [
        "Bleach",
        "Naruto",
        "One Piece",
        "Dragon Ball"
      ]
    },
    {
      id: 17,
      question: "Who is the main character in Cowboy Bebop?",
      options: [
        "Jet Black",
        "Spike Spiegel",
        "Faye Valentine",
        "Edward"
      ]
    },
    {
      id: 18,
      question: "In Sword Art Online, what is the name of the first VRMMORPG?",
      options: [
        "Gun Gale Online",
        "Alfheim Online",
        "Sword Art Online",
        "Underworld"
      ]
    },
    {
      id: 19,
      question: "What is the name of the lead character in Spirited Away?",
      options: [
        "Haku",
        "Chihiro",
        "Yubaba",
        "Zeniba"
      ]
    },
    {
      id: 20,
      question: "Which anime features a deadly game where players must survive on an island?",
      options: [
        "No Game No Life",
        "Btooom!",
        "Sword Art Online",
        "Darwin's Game"
      ]
    },
    {
      id: 21,
      question: "In Bleach, who is the Soul Reaper that gives Ichigo his powers?",
      options: [
        "Renji Abarai",
        "Rukia Kuchiki",
        "Byakuya Kuchiki",
        "Uryu Ishida"
      ]
    },
    {
      id: 22,
      question: "What is the name of Edward Elric’s brother in Fullmetal Alchemist?",
      options: [
        "Roy Mustang",
        "Maes Hughes",
        "Alphonse Elric",
        "Hohenheim"
      ]
    },
    {
      id: 23,
      question: "In Tokyo Ghoul, what kind of creature is Kaneki?",
      options: [
        "Ghoul",
        "Human",
        "Vampire",
        "Shinigami"
      ]
    },
    {
      id: 24,
      question: "Which anime features characters who pilot giant mechs called EVA units?",
      options: [
        "Code Geass",
        "Neon Genesis Evangelion",
        "Gundam",
        "Darling in the Franxx"
      ]
    },
    {
      id: 25,
      question: "In Black Clover, what is Asta’s primary weapon?",
      options: [
        "Sword",
        "Bow",
        "Magic Wand",
        "Dagger"
      ]
    },
    {
      id: 26,
      question: "In One Punch Man, what is Saitama’s training routine?",
      options: [
        "100 push-ups, 100 sit-ups, 10km running",
        "500 push-ups, 500 sit-ups, 50km running",
        "Weightlifting and Swimming",
        "High-Intensity Cardio"
      ]
    },
    {
      id: 27,
      question: "Which anime features a cursed finger consumed by the protagonist?",
      options: [
        "Noragami",
        "Jujutsu Kaisen",
        "Blue Exorcist",
        "Devilman Crybaby"
      ]
    },
    {
      id: 28,
      question: "In Haikyuu!!, what is Hinata’s position in volleyball?",
      options: [
        "Setter",
        "Libero",
        "Middle Blocker",
        "Wing Spiker"
      ]
    },
    {
      id: 29,
      question: "Which anime features the Phantom Thieves of Hearts?",
      options: [
        "Re:Zero",
        "Persona 5: The Animation",
        "Erased",
        "Noragami"
      ]
    },
    {
      id: 30,
      question: "What is the name of the guild in Fairy Tail?",
      options: [
        "Saber Tooth",
        "Fairy Tail",
        "Blue Pegasus",
        "Phantom Lord"
      ]
    },
    {
      id: 31,
      question: "In Steins;Gate, what is the name of the time machine?",
      options: [
        "PhoneWave",
        "Time Leap Machine",
        "DeLorean",
        "Chrono Diver"
      ]
    },
    {
      id: 32,
      question: "What is the title of the king of monsters in Godzilla?",
      options: [
        "King Ghidorah",
        "Mechagodzilla",
        "Godzilla",
        "Gigan"
      ]
    },
    {
      id: 33,
      question: "Who is Guts’ primary antagonist in Berserk?",
      options: [
        "Griffith",
        "Casca",
        "Zodd",
        "Farnese"
      ]
    },
    {
      id: 34,
      question: "What is the specialty of Levi in Attack on Titan?",
      options: [
        "Leadership",
        "Hand-to-Hand Combat",
        "Agility and Swordsmanship",
        "Scouting"
      ]
    },
    {
      id: 35,
      question: "In Gurren Lagann, what is Simon’s signature weapon?",
      options: [
        "Drill",
        "Gun",
        "Sword",
        "Shield"
      ]
    },
    {
      id: 36,
      question: "In Akame ga Kill!, what are the unique weapons called?",
      options: [
        "Sacred Tools",
        "Imperial Arms",
        "Legendary Artifacts",
        "Cursed Weapons"
      ]
    },
    {
      id: 37,
      question: "Which anime features a detective named Conan?",
      options: [
        "Case Closed",
        "Death Note",
        "Detective Conan",
        "Tokyo Revengers"
      ]
    },
    {
      id: 38,
      question: "What is the main theme of Anohana?",
      options: [
        "Loss and Friendship",
        "Time Travel",
        "Fighting Spirits",
        "High School Romance"
      ]
    },
    {
      id: 39,
      question: "In Yu-Gi-Oh!, what is the main card used by Yugi?",
      options: [
        "Blue-Eyes White Dragon",
        "Dark Magician",
        "Red-Eyes Black Dragon",
        "Exodia"
      ]
    },
    {
      id: 40,
      question: "Which anime features a butler with demonic powers?",
      options: [
        "Black Butler",
        "Hellsing",
        "Noragami",
        "Fate/Zero"
      ]
    },
    {
      id: 41,
      question: "In Psycho-Pass, what device measures a person’s crime potential?",
      options: [
        "Dominion Gauge",
        "Psycho-Meter",
        "Cymatic Scan",
        "Dominators"
      ]
    },
    {
      id: 42,
      question: "Which anime revolves around gambling and high stakes?",
      options: [
        "One Outs",
        "Kakegurui",
        "Death Parade",
        "Kaiji"
      ]
    },
    {
      id: 43,
      question: "What is the name of the main character in Code Geass?",
      options: [
        "Suzaku Kururugi",
        "C.C.",
        "Lelouch Lamperouge",
        "Rivalz Cardemonde"
      ]
    },
    {
      id: 44,
      question: "Which anime features the Seven Deadly Sins?",
      options: [
        "Fullmetal Alchemist",
        "The Seven Deadly Sins",
        "Bleach",
        "D.Gray-man"
      ]
    },
    {
      id: 45,
      question: "In Re:Zero, what is Subaru’s ability?",
      options: [
        "Return by Death",
        "Super Strength",
        "Time Manipulation",
        "Healing"
      ]
    },
    {
      id: 46,
      question: "In Vinland Saga, what is Thorfinn’s quest?",
      options: [
        "Find Treasure",
        "Defeat Askeladd",
        "Explore New Lands",
        "Conquer England"
      ]
    },
    {
      id: 47,
      question: "In Trigun, what is Vash’s nickname?",
      options: [
        "Humanoid Typhoon",
        "Red Devil",
        "Gunman of the West",
        "Silver Bullet"
      ]
    },
    {
      id: 48,
      question: "What kind of creatures are featured in Beastars?",
      options: [
        "Humanoid Aliens",
        "Anthropomorphic Animals",
        "Mythical Monsters",
        "Talking Robots"
      ]
    },
    {
      id: 49,
      question: "In Parasyte, what part of Shinichi’s body does Migi inhabit?",
      options: [
        "Head",
        "Right Hand",
        "Left Hand",
        "Leg"
      ]
    },
    {
      id: 50,
      question: "Which anime features an alien teacher and a class of students trying to assassinate him?",
      options: [
        "Assassination Classroom",
        "Kill la Kill",
        "Gantz",
        "Daily Lives of High School Boys"
      ]
    }
  ];
  
  // Answers object mapping question IDs to correct options
  const answers = {
    1: "Naruto Uzumaki",
    2: "Kakarot",
    3: "Monkey D. Luffy",
    4: "Tetsusaiga",
    5: "Eren Yeager",
    6: "Death Note",
    7: "Edward Elric",
    8: "All Might",
    9: "Shokugeki no Soma",
    10: "Natsu Dragneel",
    11: "Kamehameha",
    12: "Fishing Rod",
    13: "Death Note",
    14: "Become a Pokémon Master",
    15: "Nezuko",
    16: "Naruto",
    17: "Spike Spiegel",
    18: "Sword Art Online",
    19: "Chihiro",
    20: "Btooom!",
    21: "Rukia Kuchiki",
    22: "Alphonse Elric",
    23: "Ghoul",
    24: "Neon Genesis Evangelion",
    25: "Sword",
    26: "100 push-ups, 100 sit-ups, 10km running",
    27: "Jujutsu Kaisen",
    28: "Middle Blocker",
    29: "Persona 5: The Animation",
    30: "Fairy Tail",
    31: "PhoneWave",
    32: "Godzilla",
    33: "Griffith",
    34: "Agility and Swordsmanship",
    35: "Drill",
    36: "Imperial Arms",
    37: "Case Closed",
    38: "Loss and Friendship",
    39: "Dark Magician",
    40: "Black Butler",
    41: "Dominators",
    42: "Kakegurui",
    43: "Lelouch Lamperouge",
    44: "The Seven Deadly Sins",
  45: "Return by Death",
  46: "Defeat Askeladd",
  47: "Humanoid Typhoon",
  48: "Anthropomorphic Animals",
  49: "Right Hand",
  50: "Assassination Classroom"
  };


  const container = document.querySelector(".container");
  const questionDiv = document.querySelectorAll(".question");


  //Dynamic Question Generation
  const uniqueQuestion = [];
  let i = 0;
  while(i < 5)
  {
    const randomNumber = Math.floor(Math.random()*51);
    
    //To search a element in an array use includes() method
    if(!uniqueQuestion.includes(randomNumber))
    {
        uniqueQuestion.push(randomNumber);
         //Destructing of questions Object
        const {id , question , options} = questions[randomNumber];
        // console.log(id,question,options);
            
                questionDiv[i].innerHTML = `<p>Q.${i+1} ${question}</p>`;
                for(let j = 0;j < 4;j++)
                {
                    questionDiv[i].innerHTML += `<label>
                        <input type="radio" name="${id}" value="${options[j]}"> ${options[j]}
                    </label><br>`;
              
                }

                //incrementing i only when we have a unique question.
                i++;
    }
   
  }

//   Adding on click event on the questions and Validating answers and diplaying the results
  const form = document.querySelector("form");

  form.addEventListener('submit',(event)=>{

        event.preventDefault();
        //api to get formData
        const data = new FormData(form);
        console.log(data.entries());

        let result = 0;

        for(let [key,value] of data.entries())
        {
            console.log(key,value);
            if(value === answers[key])
                result++;
        }

        const output = document.getElementById("result");
        output.innerHTML = `You got ${result} out of 5 correct`;
  });



