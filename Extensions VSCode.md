Extensions VSCode :

- eslint

- prettier

Installer eslint en global :

npm install -g eslint



npm install -D husky lint-staged eslint-config-prettier eslint-plugin-prettier



fichier .eslinrc.json

"extends":

airbnb en premier



ajouter

"rules": { "react-jsx-no-bind" : [1, { "allowArrowFunctions": true}] }



créer fichier

.prettierrc



{

"singleQuote" : true,

"trailingComma": "es5"

}



package.json

"scripts":

"lint": "./node_modules/.bin/eslint --ignore-path .gitignore ." 



créer nouvelle clé

"husky": {
	"hooks": {"pre-commit" : "lint-staged"}
},

"lint-staged":{
	"*.{js,jsx}": ["./node_modules/.bin/eslint --max-warnings=0"]

}