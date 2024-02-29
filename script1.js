 // Function to load stored checkbox states from local storage
function loadCheckboxStates() {
    for (let i = 1; i <= 500; i++) {
        const checkbox = document.getElementById(`anime${i}`);
        const checkboxState = localStorage.getItem(`anime${i}`);
        if (checkboxState === 'true') {
            checkbox.checked = true;
            checkbox.parentElement.classList.add('checked');
            moveWatchedAnime(checkbox.parentElement);
        }
    }
}

// Function to handle checkbox state changes and store them in local storage
function handleCheckboxChange(event) {
    const checkbox = event.target;
    const checkboxId = checkbox.id;
    const checkboxState = checkbox.checked;
    localStorage.setItem(checkboxId, checkboxState);

    // Add or remove 'checked' class based on checkbox state
    if (checkboxState) {
        checkbox.parentElement.classList.add('checked');
        moveWatchedAnime(checkbox.parentElement);
    } else {
        checkbox.parentElement.classList.remove('checked');
        moveUnwatchedAnime(checkbox.parentElement);
    }
}

// Move the watched anime item to the watched section
function moveWatchedAnime(animeItem) {
    document.getElementById('watchedList').appendChild(animeItem);
}

// Move the unwatched anime item back to the to-watch section
function moveUnwatchedAnime(animeItem) {
    document.getElementById('toWatchList').appendChild(animeItem);
}

// Add event listeners for checkbox changes
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', handleCheckboxChange);
});

// Load checkbox states when the page is loaded
loadCheckboxStates();

// Search and filter anime list based on user input
function searchAnime() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const animeList = document.getElementById('toWatchList');
    const checkboxes = animeList.querySelectorAll('.anime-item');

    checkboxes.forEach(checkbox => {
        const animeName = checkbox.textContent.toLowerCase();
        if (animeName.includes(searchInput)) {
            checkbox.style.display = 'block';
        } else {
            checkbox.style.display = 'none';
        }
    });
}

// Save anime list to local storage
function saveAnimeList() {
    for (let i = 1; i <= 500; i++) {
        const checkbox = document.getElementById(`anime${i}`);
        const checkboxState = checkbox.checked;
        localStorage.setItem(`anime${i}`, checkboxState);
    }
}

// Delete a specific anime from the list
function deleteAnime(animeName) {
    const checkboxes = document.querySelectorAll('.anime-item input');
    checkboxes.forEach(checkbox => {
        if (checkbox.value.toLowerCase() === animeName.toLowerCase()) {
            checkbox.parentElement.remove();
            saveAnimeList(); // Save the updated list after deletion
        }
    });
}


function addAnime(){
   const input = document.getElementById('newAnimeInput')
}


function counter(){
    const toWatchNum = (document.getElementById('toWatchList')).children.length + 1;  
    const watchedNum = (document.getElementById('watchedList')).children.length ;
    const toWatchleft = toWatchNum - watchedNum;
    document.getElementById('totalToWatch').value = toWatchleft;
    document.getElementById('totalWatchedList').value = watchedNum;

}
counter();
// Add this to your existing JavaScript file
document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Adjust the threshold as needed
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
function showTab(tabId) {
    // Hide all tabs
    document.getElementById('toWatchList').style.display = 'none';
    document.getElementById('watchedList').style.display = 'none';

    // Show the selected tab
    document.getElementById(tabId).style.display = 'block';
}
showTab();