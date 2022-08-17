import { Schema, model, models } from 'mongoose';

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  totalCount: {
    type: Number,
    required: true,
    default: 10,
  },
});

const Item = models.Item || model('Item', ItemSchema);

export default Item;
