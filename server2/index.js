const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Đây là Server 2');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server 2 chạy ở cổng ${PORT}`);
});
