import { Template } from 'meteor/templating';

import { Images } from '../../api/images.js'

import './body.html';

Template.body.helpers({
  images() {
    return Images.find({});
  }
});