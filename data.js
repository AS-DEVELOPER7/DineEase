let categories = {
  categories: [
    {
      idCategory: "1",
      strCategory: "Beef",
      strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
      strCategoryDescription:
        "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]",
    },
    {
      idCategory: "2",
      strCategory: "Chicken",
      strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png",
      strCategoryDescription:
        "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.",
    },
    {
      idCategory: "3",
      strCategory: "Dessert",
      strCategoryThumb: "https://www.themealdb.com/images/category/dessert.png",
      strCategoryDescription:
        "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.",
    },
    {
      idCategory: "4",
      strCategory: "Lamb",
      strCategoryThumb: "https://www.themealdb.com/images/category/lamb.png",
      strCategoryDescription:
        "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.\r\n\r\n",
    },
    {
      idCategory: "5",
      strCategory: "Miscellaneous",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/miscellaneous.png",
      strCategoryDescription:
        "General foods that don't fit into another category",
    },
    {
      idCategory: "6",
      strCategory: "Pasta",
      strCategoryThumb: "https://www.themealdb.com/images/category/pasta.png",
      strCategoryDescription:
        "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.\r\n\r\nAlso commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. As an alternative for those wanting a different taste, or who need to avoid products containing gluten, some pastas can be made using rice flour in place of wheat.[3][4] Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca).",
    },
    {
      idCategory: "7",
      strCategory: "Pork",
      strCategoryThumb: "https://www.themealdb.com/images/category/pork.png",
      strCategoryDescription:
        "Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork.\r\n\r\nPork is the most popular meat in Eastern and Southeastern Asia, and is also very common in the Western world, especially in Central Europe. It is highly prized in Asian cuisines for its fat content and pleasant texture. Consumption of pork is forbidden by Jewish and Muslim dietary law, a taboo that is deeply rooted in tradition, with several suggested possible causes. The sale of pork is limited in Israel and illegal in certain Muslim countries.",
    },
    {
      idCategory: "8",
      strCategory: "Seafood",
      strCategoryThumb: "https://www.themealdb.com/images/category/seafood.png",
      strCategoryDescription:
        'Seafood is any form of sea life regarded as food by humans. Seafood prominently includes fish and shellfish. Shellfish include various species of molluscs, crustaceans, and echinoderms. Historically, sea mammals such as whales and dolphins have been consumed as food, though that happens to a lesser extent in modern times. Edible sea plants, such as some seaweeds and microalgae, are widely eaten as seafood around the world, especially in Asia (see the category of sea vegetables). In North America, although not generally in the United Kingdom, the term "seafood" is extended to fresh water organisms eaten by humans, so all edible aquatic life may be referred to as seafood. For the sake of completeness, this article includes all edible aquatic life.',
    },
    {
      idCategory: "9",
      strCategory: "Side",
      strCategoryThumb: "https://www.themealdb.com/images/category/side.png",
      strCategoryDescription:
        "A side dish, sometimes referred to as a side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal. Side dishes such as salad, potatoes and bread are commonly used with main courses throughout many countries of the western world. New side orders introduced within the past decade[citation needed], such as rice and couscous, have grown to be quite popular throughout Europe, especially at formal occasions (with couscous appearing more commonly at dinner parties with Middle Eastern dishes).",
    },
    {
      idCategory: "10",
      strCategory: "Starter",
      strCategoryThumb: "https://www.themealdb.com/images/category/starter.png",
      strCategoryDescription:
        "An entrée in modern French table service and that of much of the English-speaking world (apart from the United States and parts of Canada) is a dish served before the main course of a meal; it may be the first dish served, or it may follow a soup or other small dish or dishes. In the United States and parts of Canada, an entrée is the main dish or the only dish of a meal.\r\n\r\nHistorically, the entrée was one of the stages of the “Classical Order” of formal French table service of the 18th and 19th centuries. It formed a part of the “first service” of the meal, which consisted of potage, hors d’œuvre, and entrée (including the bouilli and relevé). The “second service” consisted of roast (rôti), salad, and entremets (the entremets sometimes being separated into a “third service” of their own). The final service consisted only of dessert.[3]:3–11 :13–25",
    },
    {
      idCategory: "11",
      strCategory: "Vegan",
      strCategoryThumb: "https://www.themealdb.com/images/category/vegan.png",
      strCategoryDescription:
        "Veganism is both the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals.[b] A follower of either the diet or the philosophy is known as a vegan (pronounced /ˈviːɡən/ VEE-gən). Distinctions are sometimes made between several categories of veganism. Dietary vegans (or strict vegetarians) refrain from consuming animal products, not only meat but also eggs, dairy products and other animal-derived substances.[c] The term ethical vegan is often applied to those who not only follow a vegan diet but extend the philosophy into other areas of their lives, and oppose the use of animals for any purpose.[d] Another term is environmental veganism, which refers to the avoidance of animal products on the premise that the harvesting or industrial farming of animals is environmentally damaging and unsustainable.",
    },
    {
      idCategory: "12",
      strCategory: "Vegetarian",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/vegetarian.png",
      strCategoryDescription:
        "Vegetarianism is the practice of abstaining from the consumption of meat (red meat, poultry, seafood, and the flesh of any other animal), and may also include abstention from by-products of animal slaughter.\r\n\r\nVegetarianism may be adopted for various reasons. Many people object to eating meat out of respect for sentient life. Such ethical motivations have been codified under various religious beliefs, as well as animal rights advocacy. Other motivations for vegetarianism are health-related, political, environmental, cultural, aesthetic, economic, or personal preference. There are variations of the diet as well: an ovo-lacto vegetarian diet includes both eggs and dairy products, an ovo-vegetarian diet includes eggs but not dairy products, and a lacto-vegetarian diet includes dairy products but not eggs. A vegan diet excludes all animal products, including eggs and dairy. Some vegans also avoid other animal products such as beeswax, leather or silk clothing, and goose-fat shoe polish.",
    },
    {
      idCategory: "13",
      strCategory: "Breakfast",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/breakfast.png",
      strCategoryDescription:
        'Breakfast is the first meal of a day. The word in English refers to breaking the fasting period of the previous night. There is a strong likelihood for one or more "typical", or "traditional", breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast.',
    },
    {
      idCategory: "14",
      strCategory: "Goat",
      strCategoryThumb: "https://www.themealdb.com/images/category/goat.png",
      strCategoryDescription:
        "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese.",
    },
  ],
};

export const dessert = {
  meals: [
    {
      strMeal: "Apam balik",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
      price: 107,
    },
    {
      strMeal: "Apple & Blackberry Crumble",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
      price: 150,
    },
    {
      strMeal: "Apple Frangipan Tart",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
      price: 300,
    },
    {
      strMeal: "Bakewell tart",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
      price: 250,
    },
    {
      strMeal: "Banana Pancakes",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",
      price: 300,
    },
    {
      strMeal: "Battenberg Cake",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/ywwrsp1511720277.jpg",
      price: 100,
    },
    {
      strMeal: "BeaverTails",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg",
      price: 100,
    },
    {
      strMeal: "Blackberry Fool",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg",
      price: 120,
    },
    {
      strMeal: "Bread and Butter Pudding",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg",
      price: 170,
    },
    {
      strMeal: "Budino Di Ricotta",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1549542877.jpg",
      price: 200,
    },
    {
      strMeal: "Canadian Butter Tarts",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg",
      price: 50,
    },
    {
      strMeal: "Carrot Cake",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg",
      price: 100,
    },
    {
      strMeal: "Cashew Ghoriba Biscuits",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/t3r3ka1560461972.jpg",
      price: 50,
    },
    {
      strMeal: "Chelsea Buns",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/vqpwrv1511723001.jpg",
      price: 70,
    },
    {
      strMeal: "Chinon Apple Tarts",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/qtqwwu1511792650.jpg",
      price: 200,
    },
    {
      strMeal: "Choc Chip Pecan Pie",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg",
      price: 170,
    },
    {
      strMeal: "Chocolate Avocado Mousse",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/uttuxy1511382180.jpg",
      price: 110,
    },
    {
      strMeal: "Chocolate Caramel Crispy",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1550442508.jpg",
      price: 70,
    },
    {
      strMeal: "Chocolate Gateau",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg",
      price: 80,
    },
    {
      strMeal: "Chocolate Raspberry Brownies",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/yypvst1511386427.jpg",
      price: 107,
    },
    {
      strMeal: "Chocolate Souffle",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/twspvx1511784937.jpg",
      price: 150,
    },
    {
      strMeal: "Christmas cake",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/ldnrm91576791881.jpg",
      price: 250,
    },
    {
      strMeal: "Christmas Pudding Flapjack",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/vvusxs1483907034.jpg",
      price: 100,
    },
    {
      strMeal: "Christmas Pudding Trifle",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/r33cud1576791081.jpg",
      price: 120,
    },
    {
      strMeal: "Classic Christmas pudding",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1d85821576790598.jpg",
      price: 150,
    },
  ],
};

export const starter = {
  meals: [
    {
      strMeal: "Broccoli & Stilton soup",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/tvvxpv1511191952.jpg",
      price: 186,
    },
    {
      strMeal: "Clam chowder",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/rvtvuw1511190488.jpg",
      price: 196,
    },
    {
      strMeal: "Cream Cheese Tart",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg",
      price: 147,
    },
    {
      strMeal: "Creamy Tomato Soup",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg",
      price: 167,
    },
  ],
};
export const side = {
  meals: [
    {
      strMeal: "Boulang\u00e8re Potatoes",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/qywups1511796761.jpg",
      price: 250,
    },
    {
      strMeal: "Brie wrapped in prosciutto & brioche",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/qqpwsy1511796276.jpg",
      price: 300,
    },
    {
      strMeal: "Burek",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg",
      price: 350,
    },
    {
      strMeal: "Corba",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
      price: 200,
    },
    {
      strMeal: "Fennel Dauphinoise",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/ytttsv1511798734.jpg",
      price: 210,
    },
    {
      strMeal: "Feteer Meshaltet",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/9f4z6v1598734293.jpg",
      price: 150,
    },
    {
      strMeal: "French Onion Soup",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/xvrrux1511783685.jpg",
      price: 110,
    },
    {
      strMeal: "Fresh sardines",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/nv5lf31628771380.jpg",
      price: 200,
    },
    {
      strMeal: "Japanese gohan rice",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/kw92t41604181871.jpg",
      price: 150,
    },
    {
      strMeal: "Kumpir",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg",
      price: 120,
    },
    {
      strMeal: "Mushroom soup with buckwheat",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1ngcbf1628770793.jpg",
      price: 150,
    },
    {
      strMeal: "Mustard champ",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/o7p9581608589317.jpg",
      price: 170,
    },
  ],
};
export const veg = {
  meals: [
    {
      strMeal: "Baingan Bharta",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
      price: "52807",
    },
    {
      strMeal: "Chickpea Fajitas",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg",
      price: "52870",
    },
    {
      strMeal: "Dal fry",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
      price: "52785",
    },
    {
      strMeal: "Egg Drop Soup",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1529446137.jpg",
      price: "52955",
    },
    {
      strMeal: "Flamiche",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wssvvs1511785879.jpg",
      price: "52906",
    },
    {
      strMeal: "Ful Medames",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/lvn2d51598732465.jpg",
      price: "53025",
    },
    {
      strMeal: "Gigantes Plaki",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/b79r6f1585566277.jpg",
      price: "53012",
    },
    {
      strMeal: "Kafteji",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg",
      price: "52971",
    },
    {
      strMeal: "Kidney Bean Curry",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg",
      price: "52868",
    },
    {
      strMeal: "Koshari",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg",
      price: "53027",
    },
    {
      strMeal: "Leblebi Soup",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/x2fw9e1560460636.jpg",
      price: "52973",
    },
    {
      strMeal: "Matar Paneer",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg",
      price: "52865",
    },
    {
      strMeal: "Moroccan Carrot Soup",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/jcr46d1614763831.jpg",
      price: "53047",
    },
    {
      strMeal: "Mushroom & Chestnut Rotolo",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/ssyqwr1511451678.jpg",
      price: "52864",
    },
    {
      strMeal: "Proven\u00e7al Omelette Cake",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/qwtrtp1511799242.jpg",
      price: "52921",
    },
    {
      strMeal: "Ratatouille",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wrpwuu1511786491.jpg",
      price: "52908",
    },
    {
      strMeal: "Ribollita",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/xrrwpx1487347049.jpg",
      price: "52811",
    },
    {
      strMeal: "Roasted Eggplant With Tahini, Pine Nuts, and Lentils",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/ysqrus1487425681.jpg",
      price: "52816",
    },
    {
      strMeal: "Shakshuka",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/g373701551450225.jpg",
      price: "52963",
    },
    {
      strMeal: "Smoky Lentil Chili with Squash",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/uwxqwy1483389553.jpg",
      price: "52784",
    },
    {
      strMeal: "Spanish Tortilla",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg",
      price: "52872",
    },
    {
      strMeal: "Spicy Arrabiata Penne",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
      price: "52771",
    },
    {
      strMeal: "Spicy North African Potato Salad",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/urtwux1486983078.jpg",
      price: "52797",
    },
    {
      strMeal: "Spinach & Ricotta Cannelloni",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wspuvp1511303478.jpg",
      price: "52849",
    },
    {
      strMeal: "Squash linguine",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wxswxy1511452625.jpg",
      price: "52866",
    },
    {
      strMeal: "Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/yqwtvu1487426027.jpg",
      price: "52817",
    },
    {
      strMeal: "Summer Pistou",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/rqtxvr1511792990.jpg",
      price: "52911",
    },
    {
      strMeal: "Tahini Lentils",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/vpxyqt1511464175.jpg",
      price: "52869",
    },
    {
      strMeal: "Tamiya",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg",
      price: "53026",
    },
    {
      strMeal: "Vegetarian Casserole",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/vptwyt1511450962.jpg",
      price: "52863",
    },
    {
      strMeal: "Vegetarian Chilli",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wqurxy1511453156.jpg",
      price: "52867",
    },
    {
      strMeal: "Yaki Udon",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wrustq1511475474.jpg",
      price: "52871",
    },
  ],
};
export const mainCourse = {
  meals: [
    {
      strMeal: "Ayam Percik",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
      price: 200,
    },
    {
      strMeal: "Brown Stew Chicken",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg",
      price: 350,
    },
    {
      strMeal: "Chick-Fil-A Sandwich",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
      price: 150,
    },
    {
      strMeal: "Chicken & mushroom Hotpot",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg",
      price: 350,
    },
    {
      strMeal: "Chicken Alfredo Primavera",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
      price: 400,
    },
    {
      strMeal: "Chicken Basquaise",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wruvqv1511880994.jpg",
      price: 200,
    },
    {
      strMeal: "Chicken Congee",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1529446352.jpg",
      price: 150,
    },
    {
      strMeal: "Chicken Couscous",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
      price: 250,
    },
    {
      strMeal: "Chicken Enchilada Casserole",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg",
      price: 350,
    },
    {
      strMeal: "Chicken Fajita Mac and Cheese",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg",
      price: 300,
    },
    {
      strMeal: "Chicken Ham and Leek Pie",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg",
      price: 400,
    },
    {
      strMeal: "Chicken Handi",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
      price: 210,
    },
    {
      strMeal: "Chicken Karaage",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg",
      price: 150,
    },
    {
      strMeal: "Chicken Marengo",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/qpxvuq1511798906.jpg",
      price: 270,
    },
    {
      strMeal: "Chicken Parmentier",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/uwvxpv1511557015.jpg",
      price: 350,
    },
    {
      strMeal: "Chicken Quinoa Greek Salad",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg",
      price: 170,
    },
    {
      strMeal: "Coq au vin",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/qstyvs1505931190.jpg",
      price: 280,
    },
    {
      strMeal: "Crock Pot Chicken Baked Tacos",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/ypxvwv1505333929.jpg",
      price: 350,
    },
    {
      strMeal: "French Onion Chicken with Roasted Carrots & Mashed Potatoes",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/b5ft861583188991.jpg",
      price: 400,
    },
    {
      strMeal: "General Tso's Chicken",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1529444113.jpg",
      price: 300,
    },
    {
      strMeal: "Honey Balsamic Chicken with Crispy Broccoli & Potatoes",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg",
      price: 250,
    },
    {
      strMeal: "Jerk chicken with rice & peas",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/tytyxu1515363282.jpg",
      price: 300,
    },
    {
      strMeal: "Katsu Chicken curry",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg",
      price: 370,
    },
    {
      strMeal: "Kentucky Fried Chicken",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg",
      price: 300,
    },
    {
      strMeal: "Kung Pao Chicken",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1525872624.jpg",
      price: 250,
    },
    {
      strMeal: "Nutty Chicken Curry",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/yxsurp1511304301.jpg",
      price: 250,
    },
    {
      strMeal: "Pad See Ew",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/uuuspp1468263334.jpg",
      price: 200,
    },
    {
      strMeal: "Piri-piri chicken and slaw",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/hglsbl1614346998.jpg",
      price: 300,
    },
    {
      strMeal: "Potato Gratin with Chicken",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/qwrtut1468418027.jpg",
      price: 500,
    },
    {
      strMeal: "Rappie Pie",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg",
      price: 300,
    },
    {
      strMeal: "Ros\u00f3\u0142 (Polish Chicken Soup)",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/lx1kkj1593349302.jpg",
      price: 250,
    },
    {
      strMeal: "Shawarma",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/kcv6hj1598733479.jpg",
      price: 219,
    },
    {
      strMeal: "Tandoori chicken",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
      price: 300,
    },
    {
      strMeal: "Teriyaki Chicken Casserole",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
      price: 340,
    },
    {
      strMeal: "Thai Green Curry",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/sstssx1487349585.jpg",
      price: 290,
    },
  ],
};
