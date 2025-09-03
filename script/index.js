const createElements = arr => {
  const htmlElements = arr.map(el => `<span class="btn"> ${el}</span>`);
  return htmlElements.join(' ');
};

const manageSpinner = status => {
  if (status == true) {
    document.getElementById('spinner').classList.remove('hidden');
    document.getElementById('word-container').classList.add('hidden');
  } else {
    document.getElementById('word-container').classList.remove('hidden');
    document.getElementById('spinner').classList.add('hidden');
  }
};

const loadLessons = () => {
  fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(response => response.json()) // Promise of json Data
    .then(data => displayLessons(data.data));
};

const loadLevelWord = id => {
  manageSpinner(true);
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then(response => response.json())
    .then(lessonWords => {
      const allButtons = document.querySelectorAll('.btn-lesson');
      allButtons.forEach(btn => {
        btn.classList.add('btn-outline');
      });

      const clickBtn = document.getElementById(`lesson-btn-${id}`);
      clickBtn.classList.remove('btn-outline');

      displayLevelWord(lessonWords.data);
    });
};

const loadWordDetail = async id => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  displayWordDetails(data.data);
};

const displayWordDetails = words => {
  console.log(words);
  const wordDetailsBox = document.getElementById('word-details-container');
  wordDetailsBox.innerHTML = `
    <div class="">
          <h2 class="text-2xl font-bold">${
            words.word
          } (<i class="fa-solid fa-microphone-lines"></i> : ${
    words.pronunciation
  }) </h2>
        </div>
        <div class="text-lg">
          <h2 class="font-bold">Meaning</h2>
          <p class="font-bangla">${words.meaning}</p>
        </div>
        <div class="text-lg">
          <h2 class=" font-bold">Example</h2>
          <p>${words.sentence}</p>
        </div>
        <div class="space-x-3">
          <h2 class="mb-3 font-bold">Synonym</h2>
          <div>
            ${createElements(words.synonyms)}
          </div>
        </div>
  `;
  document.getElementById('my_modal_5').showModal();
};

const displayLevelWord = lessonWords => {
  // Get The Container
  const wordContainer = document.getElementById('word-container');
  wordContainer.innerHTML = '';
  if (lessonWords.length == 0) {
    wordContainer.innerHTML = `
    
      <div class="col-span-full text-center space-y-8 flex flex-col justify-center items-center">
      <img src="./assets/alert-error.png" alt="">
      <p class="font-bangla text-stone-500 ">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
      <h3 class="font-bangla text-4xl font-semibold">নেক্সট Lesson এ যান</h3>
    </div>
    
    `;
    manageSpinner(false);
    return;
  }

  lessonWords.forEach(word => {
    const wordCard = document.createElement('div');
    wordCard.innerHTML = `
        
    <div class="bg-white rounded-xl shadow-sm px-6 py-10 space-y-6 text-center">
      <h3 class="text-2xl lg:text-3xl font-bold">${
        word.word ? word.word : 'শব্দ পাওয়া যায়নি'
      } (${
      word.pronunciation ? word.pronunciation : 'উচ্চারণ পাওয়া যায়নি'
    })</h3>
      <p class="text-lg font-medium"> -- Meaning -- </p>
      <h3 class="text-2xl lg:text-3xl font-bangla font-bold">"${
        word.meaning ? word.meaning : 'অর্থ পাওয়া যায়নি'
      }"</h3>
      <div class="flex justify-between items-center mt-14">
        <button onclick="loadWordDetail(${
          word.id
        })" class="btn bg-blue-500/10 text-gray-700 text-lg"><i class="fa-solid fa-circle-info"></i></button>
        <button class="btn bg-blue-500/10 text-gray-700 text-lg"><i class="fa-solid fa-volume-high"></i></button>
      </div>
    </div>

      `;

    wordContainer.appendChild(wordCard);
  });

  manageSpinner(false);
};

const displayLessons = lessons => {
  // get the Container & empty
  const levelContainer = document.getElementById('level-container');
  levelContainer.innerHTML = '';
  // get into every lessons
  for (let lesson of lessons) {
    // create Element
    const btnDiv = document.createElement('div');
    btnDiv.innerHTML = `

    <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary btn-lesson">
    <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no} : ${lesson.lessonName} 
    </button>
    
    `;
    levelContainer.appendChild(btnDiv);
  }
};

loadLessons();

document.getElementById('search-btn').addEventListener('click', () => {
  const allButtons = document.querySelectorAll('.btn-lesson');
  allButtons.forEach(btn => {
    btn.classList.add('btn-outline');
  });
  const inputText = document.getElementById('input-text');
  const searchValue = inputText.value.trim().toLowerCase();
  console.log(searchValue);

  fetch('https://openapi.programming-hero.com/api/words/all')
    .then(res => res.json())
    .then(datas => {
      const allWords = datas.data;
      console.log(allWords);

      const filterWords = allWords.filter(word =>
        word.word.toLowerCase().includes(searchValue)
      );

      displayLevelWord(filterWords);
    });
});
