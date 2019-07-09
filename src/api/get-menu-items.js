export default function getMenuItems(type) {
  const breakfast = [
    {
      id: 1,
      name: "THE FULL ALCHEMIST",
      price: 15,
      cash: "$",
      ingridients:
        "Bacon, 2 eggs, sausage, mushrooms, tomato, crispy hash brown bites, Bury black pudding, baked beans & buttered sourdough toast"
    },
    {
      id: 2,
      name: "STEAK & EGGS",
      price: 15,
      cash: "$",
      ingridients: "5oz sirloin with 2 fried eggs"
    },
    {
      id: 3,
      name: "THE AMERICAN",
      price: 10,
      cash: "$",
      ingridients: "Waffles with eggs, bacon, maple syrup & butter"
    },
    {
      id: 4,
      name: "HALLOUMI & AVOCADO MUFFIN",
      price: 7,
      cash: "$",
      ingridients: "Poached eggs, tomato salsa & sweet chilli"
    }
  ];

  const lunch = [
    {
      id: 5,
      name: "INSALATA DELLA CASA",
      price: 10,
      cash: "$",
      ingridients:
        "house salad with chopped greens, cucumbers, tomatoes, bacon, crispy pasta, parmigiana dressing"
    },
    {
      id: 6,
      name: "CAPRESE SALAD",
      price: 11,
      cash: "$",
      ingridients: "tomatoes, fresh mozzarella, basil, balsamic glaze"
    },
    {
      id: 7,
      name: "MEDITERRANEAN VEGETABLE SALAD",
      price: 15,
      cash: "$",
      ingridients:
        "grilled vegetables, tomatoes, orzo, farro, sweet garlic vinaigrette, pine nuts, balsamic glaze"
    },
    {
      id: 8,
      name: "LASAGNE",
      price: 20,
      cash: "$",
      ingridients: "signature meat sauce, alfredo, ricotta, mozzarella"
    }
  ];

  const snaks = [
    {
      id: 9,
      name: "TIRAMISU",
      price: 10,
      cash: "$",
      ingridients: "lady fingers, coffee liqueur, mascarpone, cocoa"
    },
    {
      id: 10,
      name: "WARM CHOCOLATE CAKE",
      price: 11,
      cash: "$",
      ingridients: "molten chocolate cake, anglaise, vanilla bean gelato"
    },
    {
      id: 11,
      name: "CREME BRULEE",
      price: 15,
      cash: "$",
      ingridients: "cooked creamy custard, vanilla bean, caramelized sugar"
    },
    {
      id: 12,
      name: "CARAMEL MASCARPONE CHEESECAKE",
      price: 40,
      cash: "$",
      ingridients: "mascarpone cream, anglaise, caramel drizzle"
    }
  ];

  const pizza = [
    {
      id: 13,
      name: "MARGHERITAU",
      price: 10,
      cash: "$",
      ingridients: "vine-ripened tomatoes, fresh mozzarella, the freshest basil"
    },
    {
      id: 14,
      name: "PEPPERONI",
      price: 11,
      cash: "$",
      ingridients: "pepperoni, fresh mozzarella, oregano "
    },
    {
      id: 15,
      name: "CHICKEN + SPINACH",
      price: 15,
      cash: "$",
      ingridients:
        "tender chicken, creamy spinach, fresh mozzarella, green onions "
    },
    {
      id: 16,
      name: "HAWAIIAN PIZZA",
      price: 25,
      cash: "$",
      ingridients: "Topped with bacon, ham and pineapple"
    }
  ];

  const soups = [
    {
      id: 17,
      name: "LOBSTER BISQUE",
      price: 100,
      cash: "$",
      ingridients:
        "a creamy blend of succulent maine lobster, sweet cream with a touch of sherry "
    },
    {
      id: 18,
      name: "POZOLE SOUP",
      price: 11,
      cash: "$",
      ingridients: "Corn hominy, pork, cabbage and raddish"
    },
    {
      id: 19,
      name: "LOADED POTATO",
      price: 15,
      cash: "$",
      ingridients: "A creamy chowder of potatoes, chives, bacon and sour cream"
    },
    {
      id: 20,
      name: "CHICEN TORTILLA",
      price: 40,
      cash: "$",
      ingridients:
        "A rich chicken broth loaded with chicken and vegetables and seasoned with a touch of Ancho chilies, corn masa and cilantro"
    }
  ];

  const dinner = [
    {
      id: 21,
      name: "CALAMARI",
      price: 120,
      cash: "$",
      ingridients: "crispy wild-caught calamari, fresh arrabiatta, lemon aioli"
    },
    {
      id: 22,
      name: "PASTA BRAVO (CHICKEN RIGATONI)",
      price: 11,
      cash: "$",
      ingridients:
        "tender grilled chicken, rigatoni, mushrooms, roasted red pepper cream sauce"
    },
    {
      id: 23,
      name: "EGGPLANT PARMIGIANA",
      price: 15,
      cash: "$",
      ingridients:
        "breaded eggplant, marinara, fresh mozzarella, capellini pomodoro"
    },
    {
      id: 24,
      name: "VEAL PARMIGIANA",
      price: 40,
      cash: "$",
      ingridients:
        "crispy lightly-breaded veal, marinara, fresh mozzarella, capellini pomodoro"
    }
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (type) {
        case "breakfast":
          resolve(breakfast);
          break;
        case "lunch":
          resolve(lunch);
          break;
        case "snaks":
          resolve(snaks);
          break;
        case "pizza":
          resolve(pizza);
          break;
        case "soups":
          resolve(soups);
          break;
        case "dinner":
          resolve(dinner);
          break;
        default:
          reject(new Error("Укажите тип"));
          break;
      }
    }, 800);
  });
}
