import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  return res.json({ status: 'All Good' });
});

app.listen(8000, () => console.log(`Server is running on PORT: ${8000}`));
