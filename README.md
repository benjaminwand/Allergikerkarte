# Allergikerkarte, first thoughts

## motivations
* giving web-development-students real-live-ish projects to make experiences and have something to showcase
* getting menus on restaurant-websites that can be filtered for things like allergens and animal products (and once we are there make restaurant websites look like 2019)

## conceptual thoughts
* building a template/framework/pattern that web-development-trainees can use, as an open source project
* decentralized, each restaurant website that uses it is their own project

## groups of people involved (apart from restaurant customers)
1. people who build the template/framework/pattern
2. people who make restaurant-websites from it
3. restaurant owners, it would be good if they could edit the menu without calling their webmaster

## what would one filter for?
That depends what the restaurant is offering. For someone who is selling ice-cream and all their items are vegetarian already, there is no point in filtering vor ‘vegetarian’. Filter for aspects where some of your dishes has it and others not. Recommended are vegetarian, vegan and some of the most common food allergies/intolerances (dairy, eggs, nuts, peanuts, gluten-containing grains, seafood, soy). Obviously this can be made as complicated as one wishes, what makes sense depends in the profile of the restaurant.

## the ‘maybes’
Some dishes can be made vegetarian. Some dishes can be served without the peanut-topping or without the bread. Some drinks can be made non-alcoholic. Let’s have three possibilities: 
* ’x’-included
* ‘x’-free
* can be made without ‘x’

## next plans
There are considerations about having a hackathon at the Berlin chapter of [codebar](https://codebar.io) to make the template/framework/pattern

## needed/to-do
* an English name
* a logo (what could be a good symbol?) 
* software architecture decisions (how to do it exactly, also see next paragraph)
* a map with
** restaurants that have such a menu on their website (where ever the software comes from, I wouldn’t restrict it to a specific solution)
** restaurants that want such a menu in their website
** professional web-developers and web-developers in training who would like to make restaurant websites where one can filter the menu

## aspects of design decisions
* what can codebar students build and what technologies are coaches around for? (for Berlin: not Ruby)
* can we choose technologies in a way that most restaurants can keep their current web-hosting plan?
* how can we arrange that restaurant owners can edit their menu without calling their webmaster?

## after ‘minimum viable product’
* a backlog of less urgent wishes like in order to help future web developers to practice good practices like
** being able to operate the page with a screenreader
** (please add more things)

## inspirations 
* [https://allergymenu.uk/menu/AAA111]
* [http://restaurantallergens.com/c2c]

## license
permissive

# a note on safety and law
I guess one should add a note that there is no guarantee for people with serious allergies. Whether or not an allergen is in the food is up to the restaurant, and the restaurant and the customer should be careful.
