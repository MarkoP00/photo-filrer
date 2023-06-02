const btns = document.querySelectorAll('.buttons button');
const imgs = document.querySelectorAll('.images img');

//Adding a click event to all buttons
for(let i = 0;i < btns.length;i++){
    btns[i].addEventListener('click',filterImg);
}
//Setting active button on click
function setActiveBtn(e){
    //Removing active class from all buttons
    btns.forEach(btn => {
        btn.classList.remove('btn-clicked');
    });
    //add active class
    e.target.classList.add("btn-clicked");
}
// Filter images
function filterImg(e) {
    setActiveBtn(e);
    // Loop through all images
    imgs.forEach(img => {
      img.classList.remove('img-shrink');
      img.classList.add('img-expanded');
      // Get data from data attributes
      // Get image type data
      const imgType = parseInt(img.dataset.btn); // Update to dataset.btn
      // Get button type data
      const btnType = parseInt(e.target.dataset.btn);
      /* If the image type and the type of the clicked button
      are not the same */
      if (imgType !== btnType && btnType !== 0) { // Update comparison condition
        img.classList.remove('img-expanded');
        img.classList.add("img-shrink");
      }
    });
  }

//Set click event for the "All" button
btns[0].addEventListener('click', (e) => {
    setActiveBtn(e);
    imgs.forEach(img => {
        img.classList.remove('img-shrink');
        img.classList.add("img-expand")
    })
})

