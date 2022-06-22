let buttons = document.querySelectorAll("button");
let buttonValues = [];
let display = document.getElementById("display");
display.focus();
let equalButton = document.getElementById("equal-button");
let resetButton = document.getElementById("reset-button");
let delButton = document.getElementById("del-button");

const showEquals = () => {
  display.value = eval(display.value);
};

for (let button of buttons) {
  button.value !== "" ? buttonValues.push(button) : null;
}

for (let button of buttonValues) {
  button.addEventListener("click", function () {
    display.value += button.value;
    display.focus();
  });
}
equalButton.addEventListener("click", function () {
  showEquals();
  display.focus();
});
display.addEventListener("keydown", function (event) {
  event.keyCode === 13 ? showEquals() : console.log("diferente");
});

delButton.addEventListener("click", function () {
  display.value = display.value.slice(0, -1);
  display.focus();
});

resetButton.addEventListener("click", function () {
  display.value = "";
  display.focus();
});


/*style toggle*/////////////////

let theme = 1;
let themesOptions = document.getElementsByName("theme");

const changeTheme = (theme) => {
  console.log("rodou");
  let body = document.getElementById("body");
  let header = document.getElementById("header");
  let themeOption = document.getElementById("theme-option");
  let radio = document.getElementsByName("theme");
  let display = document.getElementById("display");
  let keypad = document.getElementById("keypad");
  let keys = document.getElementsByClassName("key");
  let equalButton = document.getElementById("equal-button");
  let resetButton = document.getElementById("reset-button");
  let delButton = document.getElementById("del-button");

  switch (theme) {
    case "1":
      body.style = "background-color: var(--background1);";
      header.style = "color: var(--header-text-color1);";
      themeOption.style =
        "background-color: var(--switcher-and-keypad-background1);";

      display.style = "background-color: var(--display-background1); color: var(--header-text-color1);";
      keypad.style =
        "background-color: var(--switcher-and-keypad-background1);";

      for (let key of keys) {
        key.style =
          "border-bottom: 4px solid var(--key--border1);     background-color: var(--key-background1); color: var(--text-color1);";
      }

      equalButton.style =
        "border-bottom: 4px solid var(--equal-border1); background-color:  var(--equal-and-radio-background1); color: var(--equal-button-color1);";
      resetButton.style =
        "border-bottom: 4px solid var(--reset-and-dell-border1);   background-color: var(--reset-and-dell-background1);color: var(--buttons-color1);";
      delButton.style =
        "border-bottom: 4px solid var(--reset-and-dell-border1);background-color: var(--reset-and-dell-background1);color: var(--buttons-color1);";
      break;

    case "2":
      body.style = "background-color: var(--background2);";
      header.style = "color: var(--header-text-color2);";
      themeOption.style =
        "background-color: var(--switcher-and-keypad-background2);";

      display.style = "background-color: var(--display-background2); color: var(--header-text-color2);"
      keypad.style = "background-color: var(--switcher-and-keypad-background2);";

      for (let key of keys) {
        key.style.borderBottom = "4px solid var(--key--border2)";
        key.style.backgroundColor = "var(--key-background2)";
        key.style.color = "var(--text-color2)";

        console.log(key.style);
      }

      equalButton.style =
        "border-bottom: 4px solid var(--equal-border2); background-color:  var(--equal-and-radio-background2); color: var(--equal-button-color2);";
      resetButton.style =
        "border-bottom: 4px solid var(--reset-and-dell-border2);   background-color: var(--reset-and-dell-background2);color: var(--buttons-color2);";
      delButton.style =
        "border-bottom: 4px solid var(--reset-and-dell-border2);background-color: var(--reset-and-dell-background2);color: var(--buttons-color2);";
      break;

    case "3":
      body.style = "background-color: var(--background3);";
      header.style = "color: var(--header-text-color3);";
      themeOption.style =
        "background-color: var(--switcher-and-keypad-background3);";

      display.style = "background-color: var(--display-background3); color: var(--header-text-color3);";
      keypad.style =
        "background-color: var(--switcher-and-keypad-background3);";

      for (let key of keys) {
        key.style.borderBottom = "4px solid var(--key--border3)";
        key.style.backgroundColor = "var(--key-background3)";
        key.style.color = "var(--text-color3)";

        console.log(key.style);
      }
      equalButton.style =
        "border-bottom: 4px solid var(--equal-border3); background-color:  var(--equal-and-radio-background3); color: var(--equal-button-color3);";
      resetButton.style =
        "border-bottom: 4px solid var(--reset-and-dell-border3);   background-color: var(--reset-and-dell-background3);color: var(--buttons-color3);";
      delButton.style =
        "border-bottom: 4px solid var(--reset-and-dell-border3);background-color: var(--reset-and-dell-background3);color: var(--buttons-color3);";
      break;
  }
};

for (let themeOpt of themesOptions) {
  themeOpt.addEventListener("click", function () {
    theme = themeOpt.value;
    changeTheme(theme);
    console.log(theme);
  });
}
