/*
const greetingWithName = document.getElementById('main-lessons');
const newGreeting = document.createElement('div');
newGreeting.classList.add('alert alert-success');
newGreeting.innerHTML = `<span>Welcome, ${name}</span>`;

greetingWithName.appendChild(newGreeting);
*/

function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-EN'; // English
  window.speechSynthesis.speak(utterance);
}

const lessonBtn = document.getElementById('main-lessons');
lessonBtn.addEventListener('click', function (e) {
  console.log(e.target);
  if (e.target.innerText === 'Lesson - 1') {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

    fetch('https://openapi.programming-hero.com/api/level/1/')
      .then(response => response.json())
      .then(lessons => {
        const data = lessons.data;
        console.log(data);
        data.forEach(lesson => {
          const createCard = document.createElement('div');
          cardContainer.classList.add(
            'grid',
            'grid-cols-1',
            'md:grid-cols-2',
            'lg:grid-cols-3',
            'gap-6'
          );
          createCard.innerHTML = `
        <div class="bg-white p-6 text-black rounded-xl">
        <div class="space-y-4 ">
        <h4 class="text-3xl font-bold text-sky-600">${
          lesson.word || 'Now Word'
        }</h4>
        <p class="text-xl font-semibold">Meaning/ Pronounciation</p>
        <h3 class="text-2xl font-bold text-blue-800">"${
          lesson.meaning || 'অর্থ পাওয়া যায় নি'
        }"</h3>
      </div>
      <div class="flex justify-between mt-16 text-2xl text-gray-700">
        <i class="ri-information-2-fill bg-blue-500/10 p-2 rounded-md"></i>
        <i class="ri-volume-up-fill bg-blue-500/10 p-2 rounded-md" onclick="pronounceWord('${
          lesson.word
        }')"></i>
      </div>
      </div>  
    `;
          cardContainer.appendChild(createCard);
        });
      });
  }
  if (e.target.innerText === 'Lesson - 2') {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

    fetch('https://openapi.programming-hero.com/api/level/2/')
      .then(response => response.json())
      .then(lessons => {
        const data = lessons.data;
        console.log(data);
        data.forEach(lesson => {
          const createCard = document.createElement('div');
          cardContainer.classList.add(
            'grid',
            'grid-cols-1',
            'md:grid-cols-2',
            'lg:grid-cols-3',
            'gap-6'
          );
          createCard.innerHTML = `
        <div class="bg-white p-6 text-black rounded-xl">
        <div class="space-y-4 ">
        <h4 class="text-3xl font-bold text-sky-600">${
          lesson.word || 'Now Word'
        }</h4>
        <p class="text-xl font-semibold">Meaning/ Pronounciation</p>
        <h3 class="text-2xl font-bold text-blue-800">"${
          lesson.meaning || 'অর্থ পাওয়া যায় নি'
        }"</h3>
      </div>
      <div class="flex justify-between mt-16 text-2xl text-gray-700">
        <i class="ri-information-2-fill bg-blue-500/10 p-2 rounded-md"></i>
        <i class="ri-volume-up-fill bg-blue-500/10 p-2 rounded-md" onclick="pronounceWord('${
          lesson.word
        }')"></i>
      </div>
      </div>  
    `;
          cardContainer.appendChild(createCard);
        });
      });
  }
  if (e.target.innerText === 'Lesson - 3') {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

    fetch('https://openapi.programming-hero.com/api/level/3/')
      .then(response => response.json())
      .then(lessons => {
        const data = lessons.data;
        console.log(data);
        data.forEach(lesson => {
          const createCard = document.createElement('div');
          cardContainer.classList.add(
            'grid',
            'grid-cols-1',
            'md:grid-cols-2',
            'lg:grid-cols-3',
            'gap-6'
          );
          createCard.innerHTML = `
        <div class="bg-white p-6 text-black rounded-xl">
        <div class="space-y-4 ">
        <h4 class="text-3xl font-bold text-sky-600">${
          lesson.word || 'Now Word'
        }</h4>
        <p class="text-xl font-semibold">Meaning/ Pronounciation</p>
        <h3 class="text-2xl font-bold text-blue-800">"${
          lesson.meaning || 'অর্থ পাওয়া যায় নি'
        }"</h3>
      </div>
      <div class="flex justify-between mt-16 text-2xl text-gray-700">
        <i class="ri-information-2-fill bg-blue-500/10 p-2 rounded-md"></i>
        <i class="ri-volume-up-fill bg-blue-500/10 p-2 rounded-md" onclick="pronounceWord('${
          lesson.word
        }')"></i>
      </div>
      </div>  
    `;
          cardContainer.appendChild(createCard);
        });
      });
  }
  if (e.target.innerText === 'Lesson - 4') {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    const createCard = document.createElement('div');
    createCard.classList.add(
      'flex',
      'flex-col',
      'justify-center',
      'items-center'
    );
    createCard.innerHTML = `
          <img src="./assets/alert-error.png" class="my-6"/>
        <p>এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h3 class="text-4xl font-semibold mt-6">নেক্সট Lesson এ যান</h3>
    `;
    cardContainer.appendChild(createCard);
  }
  if (e.target.innerText === 'Lesson - 5') {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

    fetch('https://openapi.programming-hero.com/api/level/5/')
      .then(response => response.json())
      .then(lessons => {
        const data = lessons.data;
        console.log(data);
        data.forEach(lesson => {
          const createCard = document.createElement('div');
          cardContainer.classList.add(
            'grid',
            'grid-cols-1',
            'md:grid-cols-2',
            'lg:grid-cols-3',
            'gap-6'
          );
          createCard.innerHTML = `
        <div class="bg-white p-6 text-black rounded-xl">
        <div class="space-y-4 ">
        <h4 class="text-3xl font-bold text-sky-600">${
          lesson.word || 'Now Word'
        }</h4>
        <p class="text-xl font-semibold">Meaning/ Pronounciation</p>
        <h3 class="text-2xl font-bold text-blue-800">"${
          lesson.meaning || 'অর্থ পাওয়া যায় নি'
        }"</h3>
      </div>
      <div class="flex justify-between mt-16 text-2xl text-gray-700">
        <i class="ri-information-2-fill bg-blue-500/10 p-2 rounded-md"></i>
        <i class="ri-volume-up-fill bg-blue-500/10 p-2 rounded-md" onclick="pronounceWord('${
          lesson.word
        }')"></i>
      </div>
      </div>  
    `;
          cardContainer.appendChild(createCard);
        });
      });
  }
  if (e.target.innerText === 'Lesson - 6') {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

    fetch('https://openapi.programming-hero.com/api/level/6/')
      .then(response => response.json())
      .then(lessons => {
        const data = lessons.data;
        console.log(data);
        data.forEach(lesson => {
          const createCard = document.createElement('div');
          cardContainer.classList.add(
            'grid',
            'grid-cols-1',
            'md:grid-cols-2',
            'lg:grid-cols-3',
            'gap-6'
          );
          createCard.innerHTML = `
        <div class="bg-white p-6 text-black rounded-xl">
        <div class="space-y-4 ">
        <h4 class="text-3xl font-bold text-sky-600">${
          lesson.word || 'Now Word'
        }</h4>
        <p class="text-xl font-semibold">Meaning/ Pronounciation</p>
        <h3 class="text-2xl font-bold text-blue-800">"${
          lesson.meaning || 'অর্থ পাওয়া যায় নি'
        }"</h3>
      </div>
      <div class="flex justify-between mt-16 text-2xl text-gray-700">
        <i class="ri-information-2-fill bg-blue-500/10 p-2 rounded-md"></i>
        <i class="ri-volume-up-fill bg-blue-500/10 p-2 rounded-md" onclick="pronounceWord('${
          lesson.word
        }')"></i>
      </div>
      </div>  
    `;
          cardContainer.appendChild(createCard);
        });
      });
  }
  if (e.target.innerText === 'Lesson - 7') {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    const createCard = document.createElement('div');
    createCard.classList.add(
      'flex',
      'flex-col',
      'justify-center',
      'items-center'
    );
    createCard.innerHTML = `
          <img src="./assets/alert-error.png" class="my-6"/>
        <p>এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h3 class="text-4xl font-semibold mt-6">নেক্সট Lesson এ যান</h3>
    `;
    cardContainer.appendChild(createCard);
  }
});
