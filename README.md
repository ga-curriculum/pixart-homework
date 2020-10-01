[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Pixart 

For this assignment you'll be creating a Javascript painting app. When you're done

Use the starter code and commit each step of the exercise.

<br>

# Prerequisites

* HTML, CSS & JavaScript
* The DOM & DOM Selectors
* Event Listeners & Event Handlers

<br>

# Instructions

1. Fork and clone this repository.
2. Fullfill the listed requirements.
3. Make a pull request to turn your work in.

<br>


# Requirements
## 1. Get color setting working

* When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
* You can use `document.querySelector` (or another document method) to select the element, then add an event listener.

> **HINT:** You will notice that the page refreshes whenever you click the button. You need to prevent this from happening using a method you have not used before. Google "javascript event prevent default".

:red_circle: **Commit.**

## 2. Enable enter key to change color

* The same thing should happen when I press the enter key from inside the input field

:red_circle: **Commit.**

## 3. Make the squares

* Create 20 divs of the "square" class and append them to the body
  * **Hint**: use `.appendChild()`

:red_circle: **Commit.**

## 4. Clicking a square should change its color to green

* Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
  * **Hint**: either add the event listener while creating the squares, or listen for events on the `body` element

:red_circle: **Commit.**

## 5. Clicking a square makes it be the selected color

* Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.

:red_circle: **Commit.**

## 6. Scale it appropriately.

* Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
* Modify your code so that you are creating 8000 divs instead of 20.
* Change the event that changes your box colors from 'click' to 'mouseover'
* Paint a picture!

:red_circle: **Commit.**

<br>

# Hungry for more :interrobang:

## 7. Enable lifting of "brush"/"pen".

Make it so that clicking the canvas "turns off" and "turns on" the paintbrush.  Have there be an indicator that says "Paintbrush on" when it's on and "Paintbrush off" when it's off.  Changing colors should not change whether the paintbrush is off or on.

## 8. Color History

Add a color swatch. You should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.

<br>

## 9. MDN Web Docs (reading)

MDN Web Docs (previously known as MDN — the Mozilla Developer Network) is an evolving learning platform for Web technologies and the software that powers the Web.

They have an amazing article on JavaScript that goes over the topics we cover in class. Go ahead and read it.

[JS tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript).


<br>


## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
