// Fallback recipes used when API has no data or is unavailable.
const fallbackRecipes = [
  {
    id: 1,
    title: "Pasta Primavera",
    category: "Main Course",
    description:
      "A fresh and vibrant medley of seasonal vegetables tossed with al dente pasta in a light, zesty lemon-parmesan sauce.",
    time: "25 mins",
    servings: "4",
    difficulty: "Easy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4i2Hh3JFFakH1QQmfXk6OY_OUIaKCJyGtcw&s",
    ingredients: [
      "12 oz Spaghetti or Linguine",
      "2 cups Broccoli florets",
      "1 Carrot, julienned",
      "1 Bell pepper, sliced",
      "2 cloves Garlic, minced",
      "1/4 cup Olive oil",
      "1/2 cup Grated Parmesan",
      "Juice of 1 Lemon",
      "Fresh Basil for garnish",
    ],
    instructions: [
      "Bring a large pot of salted water to a boil. Cook pasta according to package directions.",
      "In a large skillet, heat olive oil over medium heat. Add garlic and vegetables.",
      "Sauté vegetables for 5-7 minutes until tender-crisp.",
      "Toss the cooked pasta with the vegetables, lemon juice, and parmesan cheese.",
      "Garnish with fresh basil and serve immediately.",
    ],
    featured: true,
    trending: true,
  },
  {
    id: 2,
    title: "Spicy Mexican Tacos",
    category: "Main Course",
    description:
      "Authentic street-style tacos featuring perfectly seasoned meat, fresh cilantro, radishes, and a kick of spicy salsa.",
    time: "30 mins",
    servings: "3",
    difficulty: "Intermediate",
    image: "https://addisonmagazine.com/wp-content/uploads/2020/12/iStock-1204399211-scaled.jpg",
    ingredients: [
      "1 lb Ground Beef or Steak strips",
      "12 Small corn tortillas",
      "1/2 White onion, finely diced",
      "1/2 cup Fresh cilantro, chopped",
      "4 Radishes, thinly sliced",
      "2 Limes, cut into wedges",
      "1 tbsp Taco seasoning",
      "Salsa roja for serving",
    ],
    instructions: [
      "Cook the meat in a skillet with taco seasoning until browned and fully cooked.",
      "Warm the tortillas in a separate dry skillet or over an open flame.",
      "Place a generous spoonful of meat onto each tortilla.",
      "Top with onions, cilantro, and radish slices.",
      "Serve with lime wedges and salsa on the side.",
    ],
    featured: true,
    trending: false,
  },
  {
    id: 3,
    title: "Golden Cauliflower Curry",
    category: "Vegetarian",
    description:
      "A warming and aromatic coconut-based curry filled with tender cauliflower florets and exotic spices.",
    time: "40 mins",
    servings: "4",
    difficulty: "Intermediate",
    image: "https://www.feastingathome.com/wp-content/uploads/2026/02/Turmeric-Cauliflower-Chickpeas-6.jpg",
    ingredients: [
      "1 Head of Cauliflower, cut into florets",
      "1 can (14oz) Coconut milk",
      "1 Onion, diced",
      "2 tbsp Curry powder",
      "1 tsp Turmeric",
      "1 tbsp Ginger-garlic paste",
      "1 cup Vegetable broth",
      "Fresh cilantro for garnish",
    ],
    instructions: [
      "Sauté onions in a large pot until translucent. Add ginger-garlic paste and spices.",
      "Add cauliflower florets and stir until coated in spices.",
      "Pour in coconut milk and vegetable broth. Bring to a simmer.",
      "Cook for 20-25 minutes until cauliflower is tender.",
      "Serve hot over basmati rice, garnished with cilantro.",
    ],
    featured: true,
    trending: true,
  },
  {
    id: 4,
    title: "Classic Chocolate Fondue",
    category: "Dessert",
    description:
      "Indulgent melted chocolate served with a variety of fresh fruits and marshmallows for a perfect celebration.",
    time: "15 mins",
    servings: "6",
    difficulty: "Easy",
    image: "https://www.simplyrecipes.com/thmb/yCfCB83veZjqm_Q0J7T2zgV6et8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chocolate-Fondue-Recipe-Lead-Shot-6a-SERP-48a91a6838b6456597b5de8e464f80b8.jpg",
    ingredients: [
      "10 oz Dark semi-sweet chocolate",
      "1 cup Heavy cream",
      "1 tsp Vanilla extract",
      "Assorted fruits (strawberries, bananas, apples)",
      "Marshmallows",
    ],
    instructions: [
      "Chop the chocolate into small pieces and place in a glass bowl.",
      "Heat the cream in a small saucepan until just beginning to simmer.",
      "Pour hot cream over the chocolate and let sit for 5 minutes.",
      "Stir until smooth and glossy. Mix in vanilla extract.",
      "Transfer to a fondue pot or serve immediately with dipping items.",
    ],
    featured: false,
    trending: true,
  },
  {
    id: 5,
    title: "Sri Lankan Chicken Curry (Kukul Mas)",
    category: "Main Course",
    description: "A rich and spicy traditional Sri Lankan chicken curry simmered in coconut milk and roasted curry powder.",
    time: "45 mins",
    servings: "4",
    difficulty: "Intermediate",
    image: "https://www.harighotra.co.uk/images/recipes/hero/kukul_maas_hero.png",
    ingredients: [
      "1 kg Chicken, cut into pieces",
      "2 tbsp Roasted Sri Lankan Curry Powder",
      "1 tbsp Chili powder",
      "1/2 tsp Turmeric",
      "1 Onion, sliced",
      "3 cloves Garlic & 1 inch Ginger, minced",
      "Curry leaves and Pandan leave (Rampe)",
      "1 cup Coconut milk",
      "Salt to taste"
    ],
    instructions: [
      "Marinate the chicken with curry powder, chili powder, turmeric, and salt.",
      "Heat oil in a pan, add onions, ginger, garlic, curry leaves, and pandan. Sauté until fragrant.",
      "Add the marinated chicken and cook until lightly browned.",
      "Pour in the coconut milk and simmer on low heat for 30 minutes until chicken is tender.",
      "Serve hot with rice or roti."
    ],
    featured: true,
    trending: true,
  },
  {
    id: 6,
    title: "Spicy Kottu Roti",
    category: "Main Course",
    description: "A popular Sri Lankan street food made with chopped flatbread, vegetables, egg, and meat curries.",
    time: "30 mins",
    servings: "2",
    difficulty: "Intermediate",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYFC_orpBMpyo8iPfKR9E345IuazesTl1HiFlDSORYoAL73krPiFQHQluJukltxXEK-CPwxYl2h1fxZQCr0cC0kZeU1WChRGdSw61z3JeU-Bm1mRqx3UWrlVskSjsIVjJI_TNyWWl8XogFFnr8IiC6uogJNzCiy6MKZoYM3uGQBtAVpWxZ1EKwW2OdI6I/s16000/IMG_7473.HEIC",
    ingredients: [
      "4 Godamba rotis (or parathas), chopped",
      "1 cup Cabbage & Carrots, shredded",
      "1/2 Onion, sliced",
      "2 Eggs",
      "1 cup leftover Chicken or Meat Curry with gravy",
      "2 Green chilies, chopped",
      "1 tbsp Oil"
    ],
    instructions: [
      "Heat oil in a large griddle or wok. Sauté onions and green chilies.",
      "Add the shredded vegetables and stir-fry for 2-3 minutes.",
      "Push veggies to the side and scramble the eggs in the center.",
      "Add the chopped roti and mix everything vigorously.",
      "Pour in the curry gravy and mix well until heated through. Serve immediately."
    ],
    featured: true,
    trending: false,
  },
  {
    id: 7,
    title: "Sri Lankan Dhal Curry (Parippu)",
    category: "Vegetarian",
    description: "A creamy, comforting lentil curry cooked with coconut milk, aromatic spices, and curry leaves.",
    time: "20 mins",
    servings: "4",
    difficulty: "Easy",
    image: "https://images.pexels.com/photos/6363499/pexels-photo-6363499.jpeg",
    ingredients: [
      "1 cup Red lentils (Masoor Dhal), washed",
      "1/4 tsp Turmeric powder",
      "1/2 tsp Unroasted Curry Powder",
      "1/2 Onion, sliced",
      "2 cloves Garlic, sliced",
      "Sprig of curry leaves",
      "1/2 cup Thick coconut milk",
      "Salt to taste"
    ],
    instructions: [
      "Place washed dhal in a pot with turmeric, curry powder, onions, garlic, and curry leaves.",
      "Add enough water to just cover the dhal and boil until tender and water is absorbed.",
      "Reduce heat, stir in the coconut milk and salt.",
      "Simmer for another 2-3 minutes without letting it boil vigorously. Serve with rice or bread."
    ],
    featured: false,
    trending: true,
  },
  {
    id: 8,
    title: "Kurakkan Pittu",
    category: "Main Course",
    description: "A healthy and traditional Sri Lankan dish made of finger millet (kurakkan) flour and coconut, typically steamed in a bamboo cylinder.",
    time: "40 mins",
    servings: "4",
    difficulty: "Intermediate",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtX1zPoizUK1MGAPdaGwplgylBdaEtTLO0g&s",
    ingredients: [
      "2 cups Kurakkan (finger millet) flour",
      "1 cup Freshly grated coconut",
      "Salt to taste",
      "Warm water as needed"
    ],
    instructions: [
      "Dry roast the kurakkan flour lightly and let it cool.",
      "Mix the roasted flour with grated coconut and a pinch of salt.",
      "Sprinkle small amounts of water and mix gently until it forms tiny crumb-like balls.",
      "Layer the mixture gently in a Pittu bambuwa (steaming cylinder).",
      "Steam over boiling water for 10-15 minutes until steam escapes thoroughly from the top."
    ],
    featured: true,
    trending: true,
  },
  {
    id: 9,
    title: "Ambul Thiyal (Sour Fish Curry)",
    category: "Main Course",
    description: "A signature Sri Lankan dry fish curry prepared with tuna, goraka (Garcinia cambogia), and peppery spices to preserve the fish.",
    time: "50 mins",
    servings: "4",
    difficulty: "Hard",
    image: "https://theperfectcurry.com/wp-content/uploads/2022/10/PXL_20221004_141950841.PORTRAIT.jpg",
    ingredients: [
      "500g Tuna fish, cut into cubes",
      "3 tbsp Goraka paste (Garcinia cambogia)",
      "2 tbsp Black pepper powder",
      "1 tbsp Roasted curry powder",
      "Curry leaves and Rampe (pandan leaves)",
      "Salt to taste",
      "1/2 cup Water"
    ],
    instructions: [
      "Wash the fish cubes thoroughly and pat dry.",
      "Mix goraka paste, black pepper, roasted curry powder, and salt with a little water to form a thick paste.",
      "Coat the fish cubes generously with the spice paste.",
      "Arrange the fish carefully in a clay pot lining the bottom with curry leaves and pandan.",
      "Add a little water, cover, and cook on very low heat until the water evaporates and the fish turns dark and dry."
    ],
    featured: true,
    trending: false,
  },
  {
    id: 10,
    title: "Wambatu Moju (Eggplant Pickle)",
    category: "Vegetarian",
    description: "A sweet, sour, and mildly spicy deep-fried eggplant pickle that acts as a classic flavor-booster in Sri Lankan meals.",
    time: "35 mins",
    servings: "6",
    difficulty: "Intermediate",
    image: "https://rakskitchen.net/wp-content/uploads/2021/12/brinjal-moju-feat-500x500.jpg",
    ingredients: [
      "500g Eggplant (Brinjal), cut into thin strips",
      "1/2 cup Red onions or shallots",
      "5 Green chilies, slit",
      "2 tbsp Vinegar",
      "2 tbsp Sugar",
      "1 tsp Mustard seeds, ground",
      "Oil for deep frying",
      "Salt and turmeric"
    ],
    instructions: [
      "Toss the eggplant strips with salt, turmeric, and deep fry until golden brown. Drain excess oil.",
      "Lightly fry the onions and green chilies.",
      "In a bowl, mix ground mustard, vinegar, sugar, and salt to create the pickle base.",
      "Gently fold in the fried eggplant, onions, and chilies into the mustard-vinegar mixture.",
      "Let it sit for at least an hour before serving to let the flavors meld together."
    ],
    featured: false,
    trending: true,
  },
  {
    id: 11,
    title: "Kola Kenda (Herbal Porridge)",
    category: "Appetizer",
    description: "A nutritious, traditional morning herbal porridge made from indigenous green leaves, red rice, and coconut milk.",
    time: "25 mins",
    servings: "3",
    difficulty: "Easy",
    image: "https://cdn.lakpura.com/images/LK94008714-03-E.JPG",
    ingredients: [
      "1 cup Handunugoda/Gotukola or Mukunuwenna leaves (Herbal greens)",
      "1/2 cup Cooked red rice",
      "1 cup Thin coconut milk",
      "1/2 cup Thick coconut milk",
      "2 cloves Garlic, chopped",
      "Salt to taste",
      "Jaggery (to serve alongside)"
    ],
    instructions: [
      "Blend the herbal green leaves with a little water and strain the extract to get the green juice.",
      "In a pot, add the cooked red rice, thin coconut milk, and garlic, and simmer until mushy.",
      "Pour in the strained green herbal extract and the thick coconut milk.",
      "Cook for another 2-3 minutes on low heat. Do not let it boil vigorously after adding the greens to retain nutrients.",
      "Serve warm with a piece of jaggery on the side."
    ],
    featured: true,
    trending: true,
  },
  {
    id: 12,
    title: "Kiri Kos (Creamy Jackfruit Curry)",
    category: "Vegan",
    description: "Thick coconut milk ekka hadana me curry eka godak creamy and tasty. Jackfruit is often called the 'Rice Tree' of Sri Lanka.",
    time: "45 mins",
    servings: "5",
    difficulty: "Intermediate",
    image: "https://akkiskitchen.com/wp-content/uploads/2013/10/img_5957.jpg",
    ingredients: [
      "500g Mature Jackfruit (Kos), cut into cubes",
      "1 cup Thick coconut milk",
      "1.5 cups Thin coconut milk",
      "3 Green chilies, slit",
      "1 Onion, sliced",
      "1/2 tsp Turmeric powder",
      "Curry leaves and Pandan leaves (Rampe)"
    ],
    instructions: [
      "Boil the jackfruit cubes with turmeric, green chilies, onions, curry leaves, and thin coconut milk.",
      "Once the jackfruit is tender and the liquid has reduced, gently mash some of the pieces for a creamier texture.",
      "Add the thick coconut milk and salt to taste.",
      "Simmer for another 5 minutes on low heat without letting it boil rapidly.",
      "Serve warm with rice."
    ],
    featured: true,
    trending: true,
  },
  {
    id: 13,
    title: "Kaju Maluwa (Cashew Curry)",
    category: "Vegan",
    description: "Meeka poddak luxury vegan option ekak. Raw cashews use karala hadanne. Special occasions walata niyamai.",
    time: "40 mins",
    servings: "4",
    difficulty: "Intermediate",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RnPScKqhbwpj_ac1q6R_TFwZdRYZp6GDJA&s",
    ingredients: [
      "250g Raw Cashew Nuts (soaked in water overnight)",
      "1 cup Thick coconut milk",
      "1/2 Onion, chopped",
      "2 cloves Garlic, sliced",
      "1 tsp Unroasted curry powder",
      "1/2 tsp Turmeric",
      "Curry leaves"
    ],
    instructions: [
      "Drain the soaked cashews and rinse well.",
      "In a pot, combine cashews, turmeric, curry powder, onions, garlic, and curry leaves.",
      "Add a little water and cook until the cashews are tender but still have a slight bite.",
      "Add the thick coconut milk and salt.",
      "Simmer gently for about 5-7 minutes until the gravy thickens. Serve hot."
    ],
    featured: true,
    trending: true,
  },
  {
    id: 14,
    title: "Ala Theldala (Devilled Potatoes)",
    category: "Vegan",
    description: "Spicy kema walata kamathi ayata. Ala, lunu saha miris ekka roast karala ganna meka ona deyak ekka match wenawa.",
    time: "25 mins",
    servings: "4",
    difficulty: "Easy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX7UonXbHbEOQzbh2huY2nBb0SvH1MC44Wew&s",
    ingredients: [
      "500g Potatoes, boiled and cut into cubes",
      "1 large Onion, sliced",
      "2 tbsp Crushed red chili pieces",
      "1 tsp Mustard seeds",
      "Curry leaves",
      "2 tbsp Cooking oil",
      "Salt to taste"
    ],
    instructions: [
      "Heat oil in a pan and temper the mustard seeds until they pop.",
      "Add the sliced onions and curry leaves, and sauté until the onions turn golden brown.",
      "Stir in the crushed red chilies and salt.",
      "Add the boiled potato cubes and mix well, ensuring they are evenly coated with the spicy mixture.",
      "Cook for another 3-4 minutes until slightly crispy."
    ],
    featured: false,
    trending: true,
  },
  {
    id: 15,
    title: "Wattakka Kiri Hodi (Pumpkin Curry)",
    category: "Vegan",
    description: "Sweet and creamy taste ekak thiyena healthy dish ekak.",
    time: "30 mins",
    servings: "5",
    difficulty: "Easy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSQ_FuOFgoPUxB-QwieaiSXPyTAPQiC-R-jg&s",
    ingredients: [
      "500g Pumpkin, cut into large cubes",
      "1/2 cup Thick coconut milk",
      "1/2 Onion, sliced",
      "1 tsp Mustard seeds (ground into a paste)",
      "1/2 tsp Turmeric",
      "Curry leaves",
      "Salt to taste"
    ],
    instructions: [
      "Place pumpkin cubes, onions, curry leaves, turmeric, and salt in a pot with a little water.",
      "Cook until the pumpkin is tender but still holds its shape.",
      "Stir in the thick coconut milk and the ground mustard paste.",
      "Let it simmer gently for 2-3 minutes. Avoid heavy stirring to prevent mashing the pumpkin.",
      "Remove from heat and serve with rice."
    ],
    featured: true,
    trending: false,
  },
  {
    id: 16,
    title: "Del Curry (Breadfruit Curry)",
    category: "Vegan",
    description: "Breadfruit kiyanneth meat texture ekatama thiyena, coconut milk dala hadana maru curry ekak.",
    time: "35 mins",
    servings: "4",
    difficulty: "Intermediate",
    image: "https://rasakama.wordpress.com/wp-content/uploads/2015/08/img_9835.jpg",
    ingredients: [
      "1 Breadfruit, peeled and cut into cubes",
      "1 cup Thick coconut milk",
      "1 tsp Roasted curry powder",
      "1/2 tsp Turmeric",
      "1 Onion, sliced",
      "1 piece Cinnamon stick",
      "Curry leaves and Rampe"
    ],
    instructions: [
      "Boil the breadfruit cubes in water with turmeric, onions, cinnamon, and curry leaves.",
      "Cook until the breadfruit is soft (it will have a texture similar to meat or potatoes).",
      "Add the roasted curry powder, salt, and thick coconut milk.",
      "Simmer for 5-8 minutes until the gravy naturally thickens.",
      "Serve hot."
    ],
    featured: true,
    trending: true,
  },
  {
    id: 17,
    title: "Kiribath (Sri Lankan Milk Rice)",
    category: "Main Course",
    description: "The ultimate traditional Sri Lankan dish for any celebration. Creamy white rice cooked in rich coconut milk and cut into diamond shapes.",
    time: "45 mins",
    servings: "6",
    difficulty: "Easy",
    image: "https://www.mylankanfoodjournal.com/wp-content/uploads/2021/02/D075EAF8-9720-44E5-AADF-968C5CA9C85E.jpeg",
    ingredients: [
      "2 cups Short-grain white rice or Kekulu rice",
      "3 cups Water",
      "1.5 cups Thick coconut milk",
      "1.5 tsp Salt (or to taste)"
    ],
    instructions: [
      "Wash the rice thoroughly and place it in a pot with water.",
      "Boil the rice until the water is fully absorbed and the rice is soft and fully cooked.",
      "Mix the salt with the thick coconut milk and pour it into the cooked rice.",
      "Stir well and let it simmer on low heat until the rich milk is completely absorbed.",
      "Spread the creamy rice evenly onto a flat dish, flatten it with a piece of banana leaf or spatula, and cut into diamond shapes."
    ],
    featured: true,
    trending: true,
  },
  {
    id: 18,
    title: "Watalappam",
    category: "Dessert",
    description: "A rich, steamed coconut custard sweetened with Kithul jaggery and beautifully spiced with cardamom and nutmeg.",
    time: "60 mins",
    servings: "6",
    difficulty: "Intermediate",
    image: "https://www.grandchancellor.lk/wp-content/uploads/2021/11/010-450x450.jpg",
    ingredients: [
      "500g Kithul Jaggery, grated",
      "6 Eggs",
      "1 cup Thick coconut milk",
      "1/2 tsp Cardamom powder",
      "1/4 tsp Nutmeg powder",
      "1/2 cup Cashew nuts, chopped",
      "A pinch of salt"
    ],
    instructions: [
      "Melt the grated jaggery with a little water in a pan over low heat until it becomes a thick syrup. Let it cool.",
      "In a bowl, beat the eggs well. Add the cooled jaggery syrup to the eggs and mix thoroughly.",
      "Stir in the thick coconut milk, cardamom, nutmeg, and a pinch of salt.",
      "Strain the mixture into a buttered heat-proof bowl to ensure it's smooth. Sprinkle chopped cashews on top.",
      "Cover with foil and steam for 45-60 minutes until a toothpick inserted comes out clean. Serve chilled."
    ],
    featured: true,
    trending: true,
  },
  {
    id: 19,
    title: "Kokis",
    category: "Dessert",
    description: "A crispy, deep-fried Sri Lankan sweetmeat made from rice flour and coconut milk, specially prepared during the Sinhala and Tamil New Year.",
    time: "30 mins",
    servings: "10",
    difficulty: "Hard",
    image: "https://images.aws.nestle.recipes/original/18c78175066f7a36a4b2de3ab2d98c2e_kokis-recipe.jpg",
    ingredients: [
      "2 cups Rice flour",
      "1 cup Thick coconut milk",
      "1 Egg",
      "1 tsp Turmeric powder (for color)",
      "1/2 tsp Salt",
      "Oil for deep frying"
    ],
    instructions: [
      "Sift the rice flour into a bowl. Add turmeric and salt.",
      "Beat the egg and add it to the flour. Gradually stir in the coconut milk to form a smooth, thick batter.",
      "Heat oil in a deep frying pan. Dip the Kokis mold into the hot oil for a minute to heat it up.",
      "Dip the hot mold into the batter (do not submerge it completely). Return the mold to the hot oil.",
      "Shake gently until the Kokis separates from the mold. Fry until golden and crispy."
    ],
    featured: false,
    trending: true,
  },
  {
    id: 20,
    title: "Kalu Dodol",
    category: "Dessert",
    description: "A dark, sticky, and incredibly rich sweet made with rice flour, thick coconut milk, and jaggery, slow-cooked to perfection.",
    time: "120 mins",
    servings: "10",
    difficulty: "Hard",
    image: "https://i.pinimg.com/736x/70/2b/48/702b485bca794363e02876087cb2b9a1.jpg",
    ingredients: [
      "500g Rice flour",
      "1 kg Kithul or Coconut Jaggery",
      "4 cups Thick coconut milk",
      "4 cups Thin coconut milk",
      "1 cup Cashew nuts, chopped",
      "1/2 tsp Cardamom powder"
    ],
    instructions: [
      "In a large heavy-bottomed pan, mix the rice flour and thin coconut milk until there are no lumps.",
      "Add the scraped jaggery and place over medium heat, stirring continuously.",
      "As the mixture begins to thicken, gradually add the thick coconut milk.",
      "Cook for about 2 hours while stirring constantly as the oil starts to separate from the coconut milk and the dodol darkens.",
      "When it forms a thick, non-sticky mass, stir in cashews and cardamom. Transfer to a tray, flatten, and let it cool completely before slicing."
    ],
    featured: true,
    trending: false,
  }
];

// App State and Controller
const app = {
  currentPage: "home",
  recipes: [...fallbackRecipes],
  currentUser: null,
  avatarOptions: [
    "https://api.dicebear.com/7.x/adventurer/svg?seed=chef",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=spice",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=olive",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=basil",
  ],

  async init() {
    this.cacheDOM();
    this.bindEvents();
    await this.loadRecipesFromServer();
    await this.loadSession();
    this.renderAll();
    this.navigateToInitialPage();
    this.initSlider();
  },

  navigateToInitialPage() {
    const hash = window.location.hash.replace("#", "").trim();
    if (!hash) return;

    const targetPage = document.getElementById(hash);
    if (targetPage && targetPage.classList.contains("page-view")) {
      this.navigateTo(hash);
    }
  },

  resolveImagePath(image) {
    const fallback =
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop";

    if (!image || typeof image !== "string") return fallback;
    if (image.startsWith("http://") || image.startsWith("https://")) {
      return image;
    }

    const cleaned = image.startsWith("/") ? image.slice(1) : image;
    const normalized = cleaned.startsWith("images/")
      ? cleaned
      : `images/${cleaned}`;

    return `/RecipeRealm/${normalized}`;
  },

  async loadRecipesFromServer() {
    try {
      const response = await fetch("api.php?action=recipes", {
        method: "GET",
      });

      if (!response.ok) {
        return;
      }

      const payload = await response.json();
      if (
        payload &&
        payload.ok &&
        Array.isArray(payload.recipes) &&
        payload.recipes.length > 0
      ) {
        const serverRecipes = payload.recipes;
        const hasFeatured = serverRecipes.some((recipe) => recipe.featured);
        const hasTrending = serverRecipes.some((recipe) => recipe.trending);

        this.recipes = serverRecipes;

        if (!hasFeatured || !hasTrending) {
          const fallbackExtras = fallbackRecipes.filter((recipe) => {
            if (recipe.featured && !hasFeatured) return true;
            if (recipe.trending && !hasTrending) return true;
            return false;
          });

          this.recipes = [...this.recipes, ...fallbackExtras];
        }
      }
    } catch (error) {
      console.warn("Recipe API unavailable. Using local fallback data.", error);
    }
  },

  cacheDOM() {
    this.pages = document.querySelectorAll(".page-view");
    this.navLinks = document.querySelectorAll(
      ".nav-link, .login-btn[data-page]",
    );
    this.featuredGrid = document.getElementById("featured-grid");
    this.trendingGrid = document.getElementById("trending-grid");
    this.discoveryGrid = document.getElementById("discovery-grid");
    this.detailsContainer = document.getElementById("details-container");
    this.myRecipesGrid = document.getElementById("my-recipes-grid");

    // Form & Filters
    this.recipeForm = document.getElementById("recipe-form");
    this.searchInput = document.getElementById("recipe-search");
    this.filterBtns = document.querySelectorAll(".filter-btn");
    this.loginForm = document.getElementById("login-form");
    this.registerForm = document.getElementById("register-form");
    this.showRegisterBtn = document.getElementById("show-register");
    this.showLoginBtn = document.getElementById("show-login");
    this.loginButton = document.getElementById("login-button");
    this.authStatus = document.getElementById("auth-status");
    this.profileName = document.getElementById("profile-name");
    this.profileNameInput = document.getElementById("profile-name-input");
    this.profileEditWrap = document.getElementById("profile-edit");
    this.profileEditToggle = document.getElementById("profile-edit-toggle");
    this.profileCancelBtn = document.getElementById("profile-cancel");
    this.profileAvatar = document.getElementById("profile-avatar");
    this.profileRole = document.getElementById("profile-role");
    this.profileLocation = document.getElementById("profile-location");
    this.profileBio = document.getElementById("profile-bio");
    this.profileAddress = document.getElementById("profile-address");
    this.profileBioInput = document.getElementById("profile-bio-input");
    this.profileAvatarOptions = document.getElementById(
      "profile-avatar-options",
    );
    this.profileSaveBtn = document.getElementById("profile-save");
    this.recentViewedList = document.getElementById("recent-viewed-list");
  },

  bindEvents() {
    // Navigation
    this.navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        if (link === this.loginButton && this.currentUser) {
          e.preventDefault();
          this.handleLogout();
          return;
        }

        const pageId = link.getAttribute("data-page");
        if (pageId) {
          e.preventDefault();
          this.navigateTo(pageId);
          return;
        }

        const href = link.getAttribute("href") || "";
        if (href && href !== "#") {
          return;
        }

        e.preventDefault();
      });
    });

    // Search Real-time
    if (this.searchInput) {
      this.searchInput.addEventListener("input", (e) => {
        this.filterRecipes(e.target.value, this.getActiveCategory());
      });
    }

    // Category Filters
    this.filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.filterRecipes(
          this.searchInput.value,
          btn.getAttribute("data-category"),
        );
      });
    });

    // Recipe Submission
    if (this.recipeForm) {
      this.recipeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleRecipeSubmit();
      });
    }

    // Contact Logic
    this.contactForm = document.getElementById("contact-form");
    if (this.contactForm) {
      this.contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleContactSubmit();
      });
    }
    // Login Logic
    if (this.loginForm) {
      this.loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleLoginSubmit();
      });
    }

    if (this.registerForm) {
      this.registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleRegisterSubmit();
      });
    }

    if (this.showRegisterBtn) {
      this.showRegisterBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.toggleAuthForms("register");
      });
    }

    if (this.showLoginBtn) {
      this.showLoginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.toggleAuthForms("login");
      });
    }

    if (this.profileEditToggle) {
      this.profileEditToggle.addEventListener("click", () => {
        this.toggleProfileEdit(true);
      });
    }

    if (this.profileCancelBtn) {
      this.profileCancelBtn.addEventListener("click", () => {
        this.toggleProfileEdit(false);
      });
    }

    if (this.profileSaveBtn) {
      this.profileSaveBtn.addEventListener("click", () => {
        this.handleProfileSave();
      });
    }
  },

  toggleAuthForms(mode) {
    if (!this.loginForm || !this.registerForm) return;

    const showLogin = mode === "login";
    this.loginForm.style.display = showLogin ? "block" : "none";
    this.registerForm.style.display = showLogin ? "none" : "block";
  },

  updateAuthUI() {
    if (this.loginButton) {
      this.loginButton.textContent = this.currentUser ? "Logout" : "Login";
    }

    if (this.authStatus) {
      this.authStatus.textContent = this.currentUser
        ? `Logged in as ${this.currentUser.username}`
        : "";
    }

    if (this.profileName) {
      this.profileName.textContent = this.currentUser
        ? this.currentUser.username
        : "Guest";
    }

    if (this.profileNameInput) {
      this.profileNameInput.value = this.currentUser
        ? this.currentUser.username
        : "";
    }

    if (this.profileAvatar) {
      this.profileAvatar.src = this.currentUser?.avatar
        ? this.currentUser.avatar
        : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop";
    }

    if (this.profileRole) {
      this.profileRole.textContent = this.currentUser?.role || "Home Cook";
    }

    if (this.profileLocation) {
      this.profileLocation.textContent = this.currentUser?.address ||
        "Location not set";
    }

    if (this.profileBio) {
      this.profileBio.textContent = this.currentUser?.bio ||
        "Add a short bio to personalize your profile.";
    }

    if (this.profileAddress) {
      this.profileAddress.value = this.currentUser?.address || "";
    }

    if (this.profileBioInput) {
      this.profileBioInput.value = this.currentUser?.bio || "";
    }

    this.renderAvatarOptions();

    if (this.profileEditToggle && this.profileEditWrap) {
      const canEdit = Boolean(this.currentUser);
      this.profileEditToggle.style.display = canEdit ? "inline-flex" : "none";
      this.profileEditWrap.style.display = "none";
    }
  },

  renderAvatarOptions() {
    if (!this.profileAvatarOptions) return;
    const current = this.currentUser?.avatar || "";

    this.profileAvatarOptions.innerHTML = "";
    this.avatarOptions.forEach((url, index) => {
      const label = document.createElement("label");
      label.style.display = "flex";
      label.style.alignItems = "center";
      label.style.gap = "8px";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "profile-avatar";
      input.value = url;
      input.checked = current === url || (!current && index === 0);

      const img = document.createElement("img");
      img.src = url;
      img.alt = "Avatar";
      img.style.width = "48px";
      img.style.height = "48px";
      img.style.borderRadius = "50%";
      img.style.border = "1px solid #eee";

      label.appendChild(input);
      label.appendChild(img);
      this.profileAvatarOptions.appendChild(label);
    });
  },

  toggleProfileEdit(show) {
    if (!this.profileEditWrap) return;
    this.profileEditWrap.style.display = show ? "block" : "none";
    if (this.profileEditToggle) {
      this.profileEditToggle.style.display = show ? "none" : "inline-flex";
    }
  },

  async handleProfileSave() {
    if (!this.currentUser) {
      alert("Please login to edit your profile.");
      return;
    }

    const username = this.profileNameInput?.value.trim() ||
      this.currentUser.username;
    const address = this.profileAddress?.value.trim() || "";
    const bio = this.profileBioInput?.value.trim() || "";
    const avatar = this.profileAvatarOptions
      ? this.profileAvatarOptions.querySelector("input[name='profile-avatar']:checked")
          ?.value
      : "";

    if (!username) {
      alert("Please enter a valid name.");
      return;
    }

    try {
      const response = await fetch("api.php?action=update_profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, address, bio, avatar }),
      });

      const payload = await response.json();
      if (!response.ok || !payload.ok || !payload.user) {
        throw new Error(payload.error || "Profile update failed.");
      }

      this.currentUser = payload.user;
      this.updateAuthUI();
      this.toggleProfileEdit(false);
      alert("Profile updated successfully.");
    } catch (error) {
      alert(`Profile update failed: ${error.message}`);
    }
  },

  async loadSession() {
    try {
      const response = await fetch("api.php?action=session", {
        method: "GET",
      });

      if (!response.ok) {
        return;
      }

      const payload = await response.json();
      if (payload && payload.ok && payload.user) {
        this.currentUser = payload.user;
      }

      this.updateAuthUI();
    } catch (error) {
      console.warn("Session check failed.", error);
    }
  },

  navigateTo(pageId) {
    if (!pageId) return;

    this.currentPage = pageId;
    this.pages.forEach((page) => {
      page.classList.remove("active");
      if (page.id === pageId) {
        page.classList.add("active");
      }
    });

    // Update Nav Active State
    this.navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("data-page") === pageId) {
        link.classList.add("active");
      }
    });

    if (window.location.pathname.toLowerCase().includes("index.php")) {
      window.location.hash = pageId;
    }

    window.scrollTo(0, 0);
    this.renderPage(pageId);
  },

  renderPage(pageId) {
    if (pageId === "home") this.renderHome();
    if (pageId === "discovery") this.renderDiscovery();
    if (pageId === "profile") this.renderProfile();
  },

  renderAll() {
    this.renderHome();
    this.renderDiscovery();
  },

  createRecipeCard(recipe, isMine = false) {
    const safeImage = this.resolveImagePath(recipe.image);
    const fallbackImage =
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop";

    const card = document.createElement("div");
    card.className = "recipe-card";
    
    // Deletion button logic
    const deleteBtnHtml = isMine ? `<button class="btn" style="background:#e74c3c; width:35px; min-width:35px; padding:0; margin-left:8px;" onclick="app.deleteRecipe(${recipe.id})"><i class="fas fa-trash"></i></button>` : "";

    card.innerHTML = `
            <div class="card-img">
                <img src="${safeImage}" alt="${recipe.title}" onerror="this.onerror=null;this.src='${fallbackImage}'">
                <span class="card-badge">${recipe.category}</span>
            </div>
            <div class="card-content">
                <h3>${recipe.title}</h3>
                <p>${recipe.description || "A delicious dish you must try."}</p>
                <div class="card-footer" style="display:flex; justify-content:space-between; align-items:center;">
                    <div class="card-time">
                        <i class="far fa-clock"></i> ${recipe.time}
                    </div>
                    <div style="display:flex;">
                        <button class="btn view-btn" onclick="app.showDetails(${recipe.id})">View Recipe</button>
                        ${deleteBtnHtml}
                    </div>
                </div>
            </div>
        `;
    return card;
  },

  renderHome() {
    this.featuredGrid.innerHTML = "";
    this.trendingGrid.innerHTML = "";

    this.recipes
      .filter((r) => r.featured)
      .forEach((recipe) => {
        this.featuredGrid.appendChild(this.createRecipeCard(recipe));
      });

    this.recipes
      .filter((r) => r.trending)
      .forEach((recipe) => {
        this.trendingGrid.appendChild(this.createRecipeCard(recipe));
      });
  },

  renderDiscovery(data = this.recipes) {
    this.discoveryGrid.innerHTML = "";
    if (data.length === 0) {
      this.discoveryGrid.innerHTML =
        '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No recipes found matching your search.</p>';
      return;
    }
    data.forEach((recipe) => {
      this.discoveryGrid.appendChild(this.createRecipeCard(recipe));
    });
  },

  filterRecipes(query, category) {
    let filtered = this.recipes;

    if (category && category !== "all") {
      filtered = filtered.filter((r) =>
        r.category.toLowerCase().includes(category.toLowerCase()),
      );
    }

    if (query) {
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(query.toLowerCase()) ||
          r.category.toLowerCase().includes(query.toLowerCase()),
      );
    }

    this.renderDiscovery(filtered);
  },

  getActiveCategory() {
    const activeBtn = document.querySelector(".filter-btn.active");
    return activeBtn ? activeBtn.getAttribute("data-category") : "all";
  },

  showDetails(id) {
    const recipe = this.recipes.find((r) => r.id === id);
    if (!recipe) return;

    const safeImage = this.resolveImagePath(recipe.image);
    const fallbackImage =
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop";

    this.addRecentlyViewed(recipe);

    this.detailsContainer.innerHTML = `
            <div class="details-hero">
                <img src="${safeImage}" alt="${recipe.title}" onerror="this.onerror=null;this.src='${fallbackImage}'">
            </div>
            <div class="details-content">
                <h1 style="font-size: 3rem; margin-bottom: 20px;">${recipe.title}</h1>
                
                <div class="meta-box">
                    <div class="meta-item">
                        <span>PREP TIME</span>
                        <strong>${recipe.time}</strong>
                    </div>
                    <div class="meta-item">
                        <span>SERVINGS</span>
                        <strong>${recipe.servings} People</strong>
                    </div>
                    <div class="meta-item">
                        <span>DIFFICULTY</span>
                        <strong>${recipe.difficulty}</strong>
                    </div>
                </div>

                <div class="details-split">
                    <div class="ingredients-col">
                        <h3>Ingredients</h3>
                        <ul class="ingredients-list">
                            ${recipe.ingredients.map((ing) => `<li>${ing}</li>`).join("")}
                        </ul>
                    </div>
                    <div class="instructions-col">
                        <h3>Instructions</h3>
                        <ol class="instructions-list">
                            ${recipe.instructions
                              .map(
                                (step, i) => `
                                <li>
                                    <span class="step-num">${i + 1}</span>
                                    ${step}
                                </li>
                            `,
                              )
                              .join("")}
                        </ol>
                    </div>
                </div>
            </div>
        `;

    this.navigateTo("recipe-details");
  },

  addRecentlyViewed(recipe) {
    const stored = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
    const filtered = stored.filter((item) => item.id !== recipe.id);
    const entry = {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      time: recipe.time,
    };
    const updated = [entry, ...filtered].slice(0, 6);
    localStorage.setItem("recentlyViewed", JSON.stringify(updated));
    this.renderRecentlyViewed();
  },

  renderRecentlyViewed() {
    if (!this.recentViewedList) return;

    const items = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
    this.recentViewedList.innerHTML = "";

    if (items.length === 0) {
      this.recentViewedList.innerHTML =
        '<li style="opacity: 0.7;">No recent recipes yet.</li>';
      return;
    }

    items.forEach((item) => {
      const safeImage = this.resolveImagePath(item.image);
      const fallbackImage =
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop";

      const li = document.createElement("li");
      li.style.minWidth = "180px";
      li.style.background = "#fff";
      li.style.borderRadius = "12px";
      li.style.boxShadow = "0 6px 18px rgba(0,0,0,0.08)";
      li.style.padding = "10px";
      li.innerHTML = `
        <img src="${safeImage}" alt="${item.title}" onerror="this.onerror=null;this.src='${fallbackImage}'" style="width: 100%; height: 110px; object-fit: cover; border-radius: 10px;">
        <div style="margin-top: 8px; font-weight: 600;">${item.title}</div>
        <div style="font-size: 0.85rem; color: #636e72; margin-top: 4px;">
          <i class="far fa-clock"></i> ${item.time}
        </div>
      `;
      this.recentViewedList.appendChild(li);
    });
  },

  async handleRecipeSubmit() {
    const title = document.getElementById("recipe-title").value;
    const category = document.getElementById("recipe-category").value;
    const image = document.getElementById("recipe-image")?.value || "";
    const ingredients = document
      .getElementById("recipe-ingredients")
      .value.split(",")
      .map((i) => i.trim());
    const instructions = document
      .getElementById("recipe-instructions")
      .value.split("\n")
      .filter((s) => s.trim());
    const email = document.getElementById("recipe-email").value;

    // Validation (simple check already done by 'required' in HTML, but added here for logic)
    if (!title || !category || ingredients.length === 0 || !email) {
      alert("Please fill in all fields correctly.");
      return;
    }

    try {
      const response = await fetch("api.php?action=add_recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          category,
          image,
          ingredients,
          instructions,
          email,
        }),
      });

      const payload = await response.json();
      if (!response.ok || !payload.ok || !payload.recipe) {
        throw new Error(payload.error || "Failed to submit recipe.");
      }

      this.recipes.unshift(payload.recipe);
      alert("Success! Your recipe has been submitted to the Realm.");
      console.log("New Recipe Submitted:", payload.recipe);

      this.recipeForm.reset();
      this.navigateTo("discovery");
    } catch (error) {
      alert(
        `Recipe submit failed: ${error.message}. Please ensure WAMP MySQL is running.`,
      );
    }
  },

  async handleContactSubmit() {
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const messageBody = document.getElementById("contact-body").value.trim();
    const msgDiv = document.getElementById("contact-message");

    if (!name || !email || !messageBody) {
      msgDiv.innerHTML = `<p style="color:red; background: #ffe6e6; padding: 10px; border-radius: 5px;">All fields are required.</p>`;
      return;
    }

    try {
      const response = await fetch("contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: messageBody }),
      });

      const payload = await response.json();
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Failed to send message.");
      }

      msgDiv.innerHTML = `<p style="color:green; background: #e6ffe6; padding: 10px; border-radius: 5px;">${payload.message}</p>`;
      document.getElementById("contact-form").reset();
    } catch (e) {
      msgDiv.innerHTML = `<p style="color:red; background: #ffe6e6; padding: 10px; border-radius: 5px;">${e.message || "An error occurred."}</p>`;
    }
  },

  async handleLoginSubmit() {
    const identifier = document.getElementById("login-user").value.trim();
    const password = document.getElementById("login-pass").value;

    if (!identifier || !password) {
      alert("Please enter your username/email and password.");
      return;
    }

    try {
      const response = await fetch("auth/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }),
      });

      const payload = await response.json();
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Login failed.");
      }

      this.currentUser = payload.user;
      this.updateAuthUI();
      alert(`Login successful! Welcome back, ${payload.user.username}.`);
      this.loginForm.reset();
      this.navigateTo("home");
    } catch (error) {
      alert(`Login failed: ${error.message}`);
    }
  },

  async handleRegisterSubmit() {
    const username = document.getElementById("register-username").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-pass").value;

    if (!username || !email || !password) {
      alert("Please fill all account fields.");
      return;
    }

    try {
      const response = await fetch("auth/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const payload = await response.json();
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Account creation failed.");
      }

      alert("Account created successfully. You can now login.");
      this.registerForm.reset();
      this.toggleAuthForms("login");
    } catch (error) {
      alert(`Account creation failed: ${error.message}`);
    }
  },

  async handleLogout() {
    try {
      const response = await fetch("auth/logout.php", {
        method: "POST",
      });

      if (!response.ok) {
        return;
      }

      const payload = await response.json();
      if (payload && payload.ok) {
        this.currentUser = null;
        this.updateAuthUI();
        alert("Logged out successfully.");
        this.navigateTo("home");
      }
    } catch (error) {
      alert("Logout failed. Please try again.");
    }
  },

  async loadMyRecipes() {
    if (!this.myRecipesGrid) return;

    if (!this.currentUser) {
      this.myRecipesGrid.innerHTML =
        '<p style="grid-column: 1/-1;">Please login to see your recipes.</p>';
      return;
    }

    try {
      const response = await fetch("api.php?action=my_recipes", {
        method: "GET",
      });

      const payload = await response.json();
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Failed to load recipes.");
      }

      const data = Array.isArray(payload.recipes) ? payload.recipes : [];
      this.myRecipesGrid.innerHTML = "";

      if (data.length === 0) {
        this.myRecipesGrid.innerHTML =
          '<p style="grid-column: 1/-1;">You have not added any recipes yet.</p>';
        return;
      }

      data.forEach((recipe) => {
        this.myRecipesGrid.appendChild(this.createRecipeCard(recipe, true));
      });
    } catch (error) {
      this.myRecipesGrid.innerHTML =
        '<p style="grid-column: 1/-1;">Unable to load your recipes right now.</p>';
    }
  },

  async deleteRecipe(id) {
    if (!confirm("Are you sure you want to delete this recipe?")) return;
    try {
      const response = await fetch("api.php?action=delete_recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id })
      });
      const payload = await response.json();
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Failed to delete recipe");
      }
      alert("Recipe deleted successfully!");
      await this.loadRecipesFromServer();
      this.renderAll();
      this.loadMyRecipes();
    } catch (err) {
      alert("Failed to delete recipe: " + err.message);
    }
  },

  renderProfile() {
    this.updateAuthUI();
    this.loadMyRecipes();
    this.renderRecentlyViewed();
  },

  initSlider() {
    const slider = document.getElementById("hero-slider");
    const dots = document.querySelectorAll(".dot");
    const slidesData = [
      {
        title: "Welcome to Recipe Realm",
        p: "Step in a World of Flavors and discover your next favorite meal.",
        img: "images/recipe_realm_hero_1772531686443.png",
      },
      {
        title: "Fresh Spring Pasta",
        p: "Light, zesty, and filled with seasonal greens.",
        img: "images/pasta_primavera_recipe_1772531900140.png",
      },
      {
        title: "Authentic Street Tacos",
        p: "Bring the taste of Mexico directly to your kitchen.",
        img: "images/spicy_tacos_1772531723048.png",
      },
    ];

    let currentSlide = 0;

    const renderSlide = (index) => {
      const data = slidesData[index];
      const image = this.resolveImagePath(data.img);
      const fallbackImage =
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop";
      slider.innerHTML = `
                <div class="slide" style="background-image: url('${image}'); width: 100%;" onerror="this.style.backgroundImage='url(${fallbackImage})'">
                    <div class="hero-content">
                        <h1 style="animation: fadeInUp 0.8s ease;">${data.title}</h1>
                        <p style="animation: fadeInUp 1s ease;">${data.p}</p>
                        <button class="btn login-btn" onclick="app.navigateTo('discovery')">Explore Recipes</button>
                    </div>
                </div>
            `;

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    };

    // Auto slide
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slidesData.length;
      renderSlide(currentSlide);
    }, 5000);

    // Dot clicks
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        currentSlide = i;
        renderSlide(currentSlide);
      });
    });

    renderSlide(0);
  },
};

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  app.init().catch((error) => {
    console.error("App initialization failed:", error);
  });

  // Mobile Nav Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.style.display =
      navLinks.style.display === "flex" ? "none" : "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "80px";
    navLinks.style.left = "0";
    navLinks.style.width = "100%";
    navLinks.style.background = "white";
    navLinks.style.padding = "20px";
    navLinks.style.boxShadow = "0 10px 10px rgba(0,0,0,0.1)";
  });
});
