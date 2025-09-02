let currentLessons = [];
function createLessonCard(lesson) {
  const createCard = document.createElement('div');
  createCard.classList.add('bg-white', 'p-6', 'text-black', 'rounded-xl');
  createCard.innerHTML = `
    <div class="space-y-4">
      <h4 class="text-3xl font-bold text-sky-600">${
        lesson.word || 'No Word'
      }</h4>
      <p class="text-xl font-semibold">Meaning/ Pronunciation</p>
      <h3 class="text-2xl font-bold text-blue-800">"${
        lesson.meaning || 'অর্থ পাওয়া যায় নি'
      }"</h3>
    </div>
    <div class="flex justify-between mt-16 text-2xl text-gray-700">
      <i class="ri-information-2-fill bg-blue-500/10 p-2 rounded-md cursor-pointer"></i>
      <i class="ri-volume-up-fill bg-blue-500/10 p-2 rounded-md cursor-pointer" onclick="pronounceWord('${
        lesson.word
      }')"></i>
    </div>
  `;
  return createCard;
}

function loadLessonData(level) {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  cardContainer.className = ''; // Reset classes

  fetch(`https://openapi.programming-hero.com/api/level/${level}/`)
    .then(response => response.json())
    .then(lessons => {
      const data = lessons.data;
      currentLessons = data;

      if (!data || data.length === 0) {
        cardContainer.innerHTML = `
          <div class="flex flex-col justify-center items-center text-center">
            <img src="./assets/alert-error.png" class="my-6"/>
            <p>এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h3 class="text-4xl font-semibold mt-6">নেক্সট Lesson এ যান</h3>
          </div>
        `;
        return;
      }

      cardContainer.classList.add(
        'grid',
        'grid-cols-1',
        'md:grid-cols-2',
        'lg:grid-cols-3',
        'gap-6',
        'bg-zinc-50',
        'p-6',
        'lg:p-8',
        'w-full',
        'text-center',
        'rounded-3xl'
      );

      data.forEach(lesson => {
        const card = createLessonCard(lesson);
        cardContainer.appendChild(card);
      });
    });
}

const lessonBtn = document.getElementById('main-lessons');

lessonBtn.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    document.querySelectorAll('#main-lessons button').forEach(btn => {
      btn.classList.remove('btn-active');
    });
    e.target.classList.add('btn-active');

    const lessonText = e.target.innerText.trim(); // e.g., "Lesson - 3"
    const match = lessonText.match(/Lesson - (\d+)/);
    if (match) {
      const lessonNumber = match[1];

      if (lessonNumber === '4' || lessonNumber === '7') {
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = `
          <div class="flex flex-col justify-center items-center text-center">
            <img src="./assets/alert-error.png" class="my-6"/>
            <p>এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h3 class="text-4xl font-semibold mt-6">নেক্সট Lesson এ যান</h3>
          </div>
        `;
      } else {
        loadLessonData(lessonNumber);
      }
    }
  }
});

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('ri-information-2-fill')) {
    const card = e.target.closest('.bg-white');
    const word = card.querySelector('h4').textContent;

    // API থেকে লোড করা ডেটা থেকে word দিয়ে lessonData খুঁজে বের করা
    const lessonData = currentLessons.find(lesson => lesson.word === word);

    const modal = document.getElementById('infoModal');
    const modalContent = document.getElementById('modal-content');

    // এখানে lessonData থেকে pronunciation নেওয়া হয়েছে
    modalContent.innerHTML = `
      <div class="border-1 border-blue-200/30 p-4 bg-white">
        <h3 class="text-4xl font-bold mb-4">
          ${lessonData?.word || word} :
          <span class="text-xl font-normal text-gray-500 ml-4"> 
            ${lessonData?.pronunciation ? `(${lessonData.pronunciation})` : ''}
          </span>
        </h3>

        <h5 class=" text-2xl my-4 font-semibold">Meaning</h5>
        <p>${lessonData?.meaning || 'N/A'}</p>

        <h5 class=" text-2xl my-4 font-semibold">Examples</h5>
        <p>No Examples</p>

        <p class="mt-4">সমার্থক শব্দ</p>
        <div class="mt-2">
          <button class="btn bg-blue-200/30">${
            lessonData?.word || word
          }</button>
          <button class="btn bg-blue-200/30">${
            lessonData?.meaning || 'N/A'
          }</button>
          <button class="btn bg-blue-200/30">${
            lessonData?.word || word
          }</button>
        </div>
      </div>
    `;

    modal.showModal();
  }
});
