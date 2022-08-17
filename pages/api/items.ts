// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from '../../lib/connectDb';
import Item from '../../models/Item';

export default async function handler(req, res) {
  const { method } = req;

  await connectDb();

  switch (method) {
    case 'GET':
      try {
        const categories = await Item.find({});
        res.status(200).json({ success: true, data: categories });
      } catch (err) {
        res.status(404).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const newItem = req.body;
        const categories = await Item.create(newItem);
        res.status(201).json({ success: true, data: categories });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const { oldName, newName } = req.body;
        const categories = await Item.findOneAndUpdate({ name: oldName }, { $set: { name: newName } });
        res.status(200).json({ success: true, data: newName });
      } catch (err) {
        res.status(404).json({ success: false, error: err });
      }
      break;
    case 'DELETE':
      try {
        const { target } = req.body;
        const categories = await Item.deleteOne({ name: target });
        res.status(200).json({ success: true, data: categories });
      } catch (err) {
        res.status(404).json({ success: false });
      }
      break;

    default:
      break;
  }
}
