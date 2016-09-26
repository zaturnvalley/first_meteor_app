import { Template } from 'meteor/templating';

import { Images } from '../../api/images.js'

import './body.html';

Template.body.helpers({
  images() {
    return Images.find({}, {sort: {createdAt: -1}});
  }
});

Template.body.events({
  'submit #new-cat'(event) {
    event.preventDefault();

    const target = event.target;
    const url = target.text.value;

    Images.insert({
      url,
      createdAt: new Date()
    });

    target.text.value = '';
  },
  'submit .update'(event){
    event.preventDefault();

    const targ = event.target;
    const updateUrl = targ.text.value;

    Images.update({
      url
    })
  },
  'delete .delete'(event){
    event.preventDefault();

    const tar = event.target;
    const deleteUrl = tar.text.value;

    Images.remove({
      url
    })
  }
});