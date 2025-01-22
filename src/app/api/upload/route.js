import  { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from '@/utils/cloudinary';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log("Begins here")
    try {
      const fileStr = req.body.image; // Base64 image string
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: 'ml_default',
      });

      res.status(200).json({ url: uploadResponse.secure_url });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
