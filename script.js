let recipes = [
  'Lasagne',
  'Stir Fry',
  'Tuna Salad',
  'Chilli',
  'Curry',
  'Pasta',
  'BBQ',
  'Get a Takeaway',
  'Pizza',
  'Steak',
  'Burgers',
];

function newRecipe() {
  let randomRecipe = Math.floor(Math.random() * recipes.length);
  document.getElementById('recipe').innerHTML = recipes[randomRecipe];
}

function navLine() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  sections.forEach((section) => {
    section.addEventListener('mouseenter', function () {
      const id = this.getAttribute('id');
      const navActive = document.querySelector(`a[href="#${id}"]`);
      navLinks.forEach((link) => link.classList.remove('active'));
      navActive.classList.add('active');
    });
  });
}

navLine();
