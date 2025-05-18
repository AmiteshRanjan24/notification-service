require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Notification = require('./models/Notification');

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB Error:', err));

app.post('/notifications', async (req, res) => {
    const { user_id, type, message } = req.body;
    if (!user_id || !type || !message) {
        return res.status(400).json({ error: 'Missing fields' });
    }

    try {
        const notification = new Notification({ user_id, type, message });
        await notification.save();
        res.status(201).json({ success: true, notification });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/users/:id/notifications', async (req, res) => {
    try {
        const notifications = await Notification.find({ user_id: req.params.id });
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
