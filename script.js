function selectLanguage(element) {
  // Remove 'selected' class and checkmark from all language options
  const languageOptions = document.querySelectorAll('.dropdown-content a');
  languageOptions.forEach(option => {
    option.classList.remove('selected');
    option.querySelector('.checkmark').style.display = 'none';
  });

  // Add 'selected' class and display checkmark for the clicked language option
  element.classList.add('selected');
  element.querySelector('.checkmark').style.display = 'inline-block';
}
