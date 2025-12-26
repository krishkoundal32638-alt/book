let pages = document.querySelectorAll(".page");
let currentPage = 0;

// Hide all pages
pages.forEach(page => page.style.display = "none");

// Show first page
pages[currentPage].style.display = "block";

function nextPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].style.display = "none";
    currentPage++;
    pages[currentPage].style.display = "block";
  }
}

function prevPage() {
  if (currentPage > 0) {
    pages[currentPage].style.display = "none";
    currentPage--;
    pages[currentPage].style.display = "block";
  }
}
