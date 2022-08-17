// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from '../../lib/connectDb';
import Category from '../../models/Category';

export default async function handler(req, res) {
  const { method } = req;

  await connectDb();

  switch (method) {
    case 'GET':
      try {
        const categories = await Category.find({});
        res.status(200).json({ success: true, data: categories });
      } catch (err) {
        res.status(404).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const newCategory = req.body;
        console.log(newCategory);
        // const categories = await Category.create(req.body, (err, newCategory) => {
        //   if (err) {
        //     console.log(err);
        //   } else {
        //     newCategory.save();
        //   }
        // });
        // res.status(200).json({ success: true, data: categories });
        res.status(201).json({ success: true, data: 'categories' });
      } catch (err) {
        res.status(404).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const { name } = req.body;
        // const categories = await Category.updateOne({}, { $set: { name: name } });
        res.status(200).json({ success: true, data: name });
      } catch (err) {
        res.status(404).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        // const categories = await Category.find({});
        res.status(200).json({ success: true, data: 'Deleted' });
      } catch (err) {
        res.status(404).json({ success: false });
      }
      break;

    default:
      break;
  }
}
