# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents
-[Overview]
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon



### Links

- Solution URL: (https://github.com/Adebukol/article-preview)
- Live Site URL: (https://adebukol.github.io/article-preview/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Flex
- Positioning
- JavaScript



### What I learned
I was able to learn css positioning better, how to add tooltip and also built more muscle memory with JavaScript DOM Manipulation.
below are the codes i'm proud of mostly

```html
<img class="share-icon mobile" id="mobileShareBtn" onclick="showMobile()" src="images/icon-share.svg" alt="">
          
```
```css
.wrapper .tooltip::before{
  content: "";
  background: hsl(217, 19%, 35%);
  position: absolute;
  height: 15px;
  width: 15px;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%)rotate(45deg);
}
```
```js
function showDiv(){
  if(document.querySelector(".tooltip").style.visibility= "hidden"){
   document.querySelector(".tooltip").style.visibility= "visible"
   shareBtn.style.background= "hsl(217, 19%, 35%)";
   shareBtn.src= "images/icon-sharewhite.svg";
  }
 }
```

### Continued development
I will love to work more on css animations

### Useful resources
I watched a video on tooltip on Youtube but i do not have the link.

## Author

- Website - Adebukola Omowole(in progress)
