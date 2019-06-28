# Dracarys Application

This application Creates, Reads, Updates and Deletes dragon information.

## Technologies

* [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

* [Typescript](https://www.typescriptlang.org/) version 3.4.5.

* [Bootstrap](https://getbootstrap.com/) version 4.3.1. - I have previous experience with version 3, so I have chosen to work with version 4 as it would be easier to learn new features than a whole new framework (like materialize, for example).

* [Font Awesome](http://fontawesome.io) version 4.7.0.

* Sass css extension (.sass) - I have previous experience with less and sass (.scss), but I have chosen .sass to experiment.

* [Bootswatch](https://bootswatch.com/flatly/) Flatly theme.

* Loading Spinner template and style from https://loading.io/css/

## File directory structure

Notes:
* I have grouped dragon components and service under the dragon module as it seemed more organized.
* Login module groups login component and authentication services as it is the main dependent of authentication.
* Footer and Header are group under components so that they would not be lost in the middle of the app directory.
* I have not created a Route directory as I believe the application is not too complex and it would only store the routing model file.
* Components used by all modules are stored under shared directory.
* Theme css has been placed on the assets folder and imported in angular.json

```
app
│   app-routing.model
│   app.component
│   app.module
│
└───dragon
│   │   dragon.model
│   │   dragon.service
│   │   dragon.module
│   │
│   └───dragon-detail.component
│   │
│   └───dragon-edit.component
│   │
│   └───dragon-list.component
│   │
│   └───dragon-new.component
│
└───login
│   │   login.module
│   │   login.component
│   │
│   └───auth
│       │   auth-guard.service
│       │   auth.service
│       │   user.model
│
└───shared
    │   shared.module
    │
    └───alert-messages.component
    │
    └───footer.component
    │
    └───header.component
    │
    └───loading-spinner.component

assets
│   bootswatch.theme
```
