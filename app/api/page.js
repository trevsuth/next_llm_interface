import { connectToDatabase } from '../../components/mongodb';

export default async function handler(req, res) {
   console.log('found saveChat')
    if (req.method === 'POST') {
    try {
      const db = await connectToDatabase();
      const chatHistory = db.collection('chat_history');
      
      await chatHistory.insertOne({ text: req.body.text });
      res.status(200).json({ message: 'Text saved' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
