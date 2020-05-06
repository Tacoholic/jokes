## Jokes App 

The Jokes app allows users to enjoy a laugh or two at the click of a button.  Once the user sumbit's their name in the opening portal, they will have the opportunity to select jokes from 4 different categories:
#### - Programming jokes
#### - Sports Jokes
#### - Dad Jokes
#### - Spanish Jokes

For this project, instead of having the user just click on one button like most random joke generator apps, I wanted them to be able to select from a variety of categories. In doing so, it would allow me to fetch jokes from a Rest API as I did with the categories of Dad Jokes(fetch) and Programming Jokes (XMLHttpRequest). For Spanish Jokes and Sports Jokes, since I could not find a reliable API, I created two local json files and was able to pull the data and then randomize each joke at the click of a button. 


## Getting Started
Installing

`git clone https://github.com/pnb90/jokes.git`

cd into "jokes" and run

`npm install`

This will install the necessary elements to begin the app. After that process is completed, you can then enter

`npm start`

This command will start the app on localhost:3000/, where it is ready to use! Enjoy!


If you wish to see the live demo, here you go:  http://tacoholic.github.io/jokes/

## Testing
Testing was done with Cypress. It turned out to be a pleasant experience working with Cypress. It also fell more in line with my beliefs towards testing. In the end, I was able to achieve what I wanted which was begin with unit testing and work my way up all the way to end-to-end testing.  As a result of this one of the things I was able to achieve, as silly as it sounds, was I ended up fixing the classNames for several things HTML elements.  Tests were not running correctly as a result, so I had to stop and look over everything. 

## Goals
#### Pull jokes from 4 different apis, using fetch, XMLHttpRequest and axios.
I was only able to use two methods because there weren't any Spanish and Sports jokes apis out there for me to use axios.  

#### Tackle css from scratch and include some sort of animation

#### I was able to complete my understanding of the challenge I gave myself, which was create an app from scratch, with no video or article tutorial.


## Challenges
Not only did I built this app to learn more about React and Front-End development, but I also did it because I love testing and wish to dive more into this field. Plus, it would give me the opportunity to use Cypress, which I have heard great things about at the JavaScript meetups I would attend.

When using the XMRHttpRequest to pull jokes for the category of Programming Jokes, I came up with a minor setback; I initially thought that the API was returning an array, but it wasn't. It was returning an object, which is why I was not ablw to map through it - because there was no array to map through. As a result, everytime I Was fetching a joke, I was overwriting each joke with an object. As a result, in my API call, I ended up adding the fetched joke to the state array, instead of over writing it. 

I pushed myself to not rely on Bootstrap or other premade components because I wanted everything on this app to be organic. 




