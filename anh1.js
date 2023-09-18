
var images = [
  "coc1.jpg",
  "coc5.jpg",
"coc3.jpg"
  
];


var currentIndex = 0; 
/*var imageElement = document.getElementById("image");
var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");
prevButton.addEventListener("click", function() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  imageElement.src = images[currentIndex];
});

nextButton.addEventListener("click", function() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  imageElement.src = images[currentIndex];
});*/
var intervalTime = 5000

// Lấy phần tử hình ảnh
var imageElement = document.getElementById("image");

// Hàm chuyển tiếp tự động
function autoSlide() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  imageElement.src = images[currentIndex];
}

// Gọi hàm chuyển tiếp tự động theo khoảng thời gian đã định
setInterval(autoSlide, intervalTime);
