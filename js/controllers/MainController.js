app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
     {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomato, olive olive.',
      price: 4.95
    }
  ];

  $scope.mains = [
    {
      name: "Pizza",
      description: " Veggi Paradise ",
      price: 4.90
    },
     {
      name: "Biryani",
      description: " non-Veg Paradise ",
      price: 4.90
    },
  ];

  $scope.extras =[
    
    {
      name: "veg salad",
      description: " Veggi Paradise ",
      price: 4.90
    },
     {
      name: "non veg salad",
      description: " non-Veg Paradise ",
      price: 4.90
    },
    
  ]

}]);
