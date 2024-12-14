document.addEventListener("DOMContentLoaded", () => {
  function showContent(section) {
    console.log(`Switching to section: ${section}`); 
    document.querySelectorAll('.content-about').forEach(content => {
      content.classList.remove('active');
    });

    // Show the selected content
    const selectedContent = document.getElementById(section);
    console.log(selectedContent)
    if (selectedContent) {
      selectedContent.classList.add('active');
    } else {
      console.error(`No element found with id: ${section}`);
    }
  }

  // Attach the function globally for button use
  window.showContent = showContent;

  
});
