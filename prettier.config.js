module.exports = {
	semi: true, //chcemy mieć średniki
	singleQuote: false, //chcemy mieć cudzysłowy podwójne
	trailingComma: "all", //chcemy mieć przecinki na końcu
	printWidth: 70, //chcemy mieć 70 znaków w linii
	useTabs: true, //chcemy mieć tabulatory, zamiast spacji
	plugins: ["prettier-plugin-tailwindcss"], //sortowanie klas Tailwind'a
	tailwindConfig: "./tailwind.config.ts", //lokalizacja pliku Tailwind'a
};
