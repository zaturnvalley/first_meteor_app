import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  images: [
    { url: 'http://img.memecdn.com/fat-cats-are-cannibals_fb_3338377.jpg' },
    { url: 'http://orig10.deviantart.net/3c0f/f/2014/287/a/d/funny_fat_cats_with_guns_300x300_by_felicaviris-d82s263.jpg' },
    { url: 'http://www.vmirocks.com/wp-content/uploads/2012/05/fat-cat-rnr-300x300.png' }
  ]
});