import mongoose from 'mongoose';

// Replace 'your_connection_string_here' with your actual MongoDB connection string
const uri = 'mongodb+srv://akash:akash123@cluster0.qskzc7r.mongodb.net/';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

export default db;