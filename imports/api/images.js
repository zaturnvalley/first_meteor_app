import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Images = new Mongo.Collection('images');

if(Meteor.isServer) {
  Meteor.publish('images', function imagesPublication() {
    return Images.find();
  });
}

Meteor.methods({
  'images.insert'(url) {
    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Images.insert({
      url,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username
    })
  },

  'images.remove'(imageId){
    Images.remove(imageId)
}
});