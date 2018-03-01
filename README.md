# CGScope challenges

#### To download

```
$ git clone https://github.com/joecowton/cgscope.git
$ cd cgsope
$ npm install
```

Both tasks were done in Javascript as it's the language I've most familiarity with, in hindsight this perhaps made some aspects of the challenges harder than necessary. For example the file loading caused for Mouse Or Mouse caused particular trouble.

### Running Median

#### To run

```
$ cd median
$ node src/median.js
```

#### To run tests

```
$ npm test
```

Overall was fairly pleased with this one. I'd worked on similar problems while preparing for tech tests last week and a loose familiarity with the task in hand really helped. It's all quite simple but worked in every test example I gave it.

### Mouse or Mouse

#### To run

```
$ cd mouse_or_mouse
$ node src/mouse_or_mouse.js
```

#### To run tests

```
$ npm test
```

Wasted more than hour trying to load data sets for this one, and in the end had to move on otherwise I'd have got nothing done. As a substitute I tested using multiple sentences and line breaks.The current working example is very simplistic, it only searches by one term for each category ('cheese' and 'ball'), but this does work. I ran out of time trying to implement the mapping of a more advanced search criteria by establishing arrays of keywords to use as matchers. Given a bit longer I am fairly confident I could have made it work using that approach. Whether or not this would have been the most efficient method I'm really not sure.
