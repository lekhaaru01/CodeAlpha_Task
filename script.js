// 🎯 All images with category and source URL
const imageData = [
  // 🌿 Nature
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", category: "nature" },
  { src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b", category: "nature" },
  { src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9", category: "nature" },
  { src: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa", category: "nature" },
  { src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e", category: "nature" },
  { src: "https://images.unsplash.com/photo-1620435363451-b84b06e6de72?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww", category: "nature" },
  { src: "https://images.unsplash.com/photo-1438109491414-7198515b166b", category: "nature" },
  { src: "https://images.unsplash.com/photo-1433878455169-4698e60005b1", category: "nature" },
  { src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff", category: "nature" },
  { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", category: "nature" },

  // 🏛️ Architecture
  { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww", category: "architecture" },
  { src: "https://plus.unsplash.com/premium_photo-1661963989923-17181d237cef?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2xkJTIwYXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww", category: "architecture" },
  { src: "https://images.unsplash.com/photo-1548013146-72479768bada", category: "architecture" },
  { src: "https://images.unsplash.com/photo-1460627390041-532a28402358", category: "architecture" },
  { src: "https://images.unsplash.com/photo-1521713362244-1b5e5d150b29?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJjaGl0ZWN0dXJhbHxlbnwwfHwwfHx8MA%3D%3D", category: "architecture" },
  { src: "https://plus.unsplash.com/premium_photo-1676188130387-c4a47e2d4e12?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5jaWVudCUyMGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D", category: "architecture" },
  { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb", category: "architecture" },
  { src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJjaGl0ZWN0dXJlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D", category: "architecture" },
  { src: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8", category: "architecture" },
  { src: "https://plus.unsplash.com/premium_photo-1683129807206-8a648874655e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGVtcG9yYXJ5JTIwYXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww", category: "architecture" },

  // 🐾 Animals
  { src: "https://images.unsplash.com/photo-1543852786-1cf6624b9987", category: "animals" },
  { src: "https://images.unsplash.com/photo-1546182990-dffeafbe841d", category: "animals" },
  { src: "https://images.unsplash.com/photo-1560807707-8cc77767d783", category: "animals" },
  { src: "https://images.unsplash.com/photo-1568572933382-74d440642117", category: "animals" },
  { src: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d", category: "animals" },
  { src: "https://plus.unsplash.com/premium_photo-1664299195833-da39fd653a00?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFscyUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D", category: "animals" },
  { src: "https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D", category: "animals" },
  { src: "https://images.unsplash.com/photo-1535930749574-1399327ce78f", category: "animals" },
  { src: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0", category: "animals" },
  { src: "https://images.unsplash.com/photo-1561948955-570b270e7c36", category: "animals" }
];

const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentIndex = 0;
let allCards = [];

// 🔄 Dynamically generate gallery
function loadGallery() {
  gallery.innerHTML = '';
  allCards = [];

  imageData.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.category = item.category;

    const img = document.createElement('img');
    img.src = `${item.src}?w=600&h=400&auto=format&fit=crop`;
    img.alt = `Image ${index + 1}`;

    // Lightbox trigger
    img.addEventListener('click', () => {
      currentIndex = index;
      lightbox.style.display = 'flex';
      lightboxImg.src = item.src;
    });

    card.appendChild(img);
    gallery.appendChild(card);
    allCards.push(card);
  });
}

// 📤 Close Lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// ⏩ Next/Prev buttons
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imageData.length;
  lightboxImg.src = imageData[currentIndex].src;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imageData.length) % imageData.length;
  lightboxImg.src = imageData[currentIndex].src;
});

// 🧮 Filter functionality
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const selected = btn.dataset.filter;

    // Update active class
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    allCards.forEach((card, idx) => {
      const category = card.dataset.category;
      card.style.display = (selected === 'all' || category === selected) ? 'block' : 'none';
    });
  });
});

// 🧷 Load images when page loads
loadGallery();
