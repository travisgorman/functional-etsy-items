
# Manipulating data sets using functional javascript

repo
https://github.com/travisgorman/functional-etsy-items.git

Create a website based on the mockup provided.
Answer the questions below. You should use the items variable defined in the `items.js` file, and the Array methods `.map()`, `.reduce()`, `.forEach`, and `.filter()` to find the correct answers.
Insert your answers into your website using JavaScript.

## Questions & Answers

### 1. Show me how to calculate the average price of all items.
* The average price is $23.63

item.price


```js

average = function(arr) {
  return reduce( arr, function( a, b ) {
    return a + b;
  }, 0 ) / arr.length;
}

```


#### 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD
* 1970s Coors Banquet Glass Beer Pitcher

* The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug

* Hand Painted Colorful Feather Glass


item.price
item.title

filter / map

#### 3. Which item has a "GBP" currency code? Display it's name and price.
* 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

item.currency_code
item.price
item.title

map / filter


#### 4. Display a list of all items who are made of wood.

* SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.

* Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.

* Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.

* Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.

* Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.


item.material
item.title

filter / map

#### 5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

* Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
    * wall mount bottle opener
    * wedding
    * man cave
    * christmas gift
    * guy gift
    * fathers day
    * home bar
    * beer
    * bar

* The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:

    * glass
    * sandblast cabinet
    * vinyl
    * beer glass
    * pint glass
    * etched pint glass
    * etched glass
    * etched beer glass
    * 16 oz pint
    * beer gift
    * etched harry potter glass
    * the three broomsticks glass
    * personalized harry potter glass

items.materials.length
items.title

filter



#### How many items were made by their sellers?

18 were made by their sellers

item.who_made

map / filter
length


___
___


Write your answers in a separate file from the items.js file included below. Make sure to include both files in your html, and do so in the correct order. Make sure the output matches the answer below each question. Make sure to comment your code as you walk through your though process.


## What to Submit
A link to your repo containing at least:
* main.js
* items.js
* index.html
* main.css
* In the Notes section, include a link to your project, deployed to Surge

___

[Node.appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
[Document.createTextNode()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)
[Array.prototype.reduce()]()
[Array.prototype.map()]()
[Array.prototype.filter()]()
[Array.prototype.forEach()]()
[class notes](https://github.com/TIY-Austin-Front-End-Engineering/notes-summer-2016/tree/master/day-12)

___


`window.addEventListener('hashchange', functionName)`
