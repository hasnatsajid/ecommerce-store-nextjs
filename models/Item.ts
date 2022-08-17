import { Schema, model } from 'mongoose';

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Item = model('Item', ItemSchema);

export default Item;
