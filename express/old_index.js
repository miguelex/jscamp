app.use((req, res, next) => {
    const timeString = new Date().toLocaleTimeString();
    console.log(`[${timeString}] ${req.method} ${req.url}`);
    next();
});

// const previousHomeMiddleware = (req, res, next) => {
//     console.log('Previous home middleware');
//     next();
// }

app.get('/', (req, res) => {
    return res.send('<h1>Hello World!</h1>');
});

app.get('/health', (req, res) => {
    return res.json({
        status: 'OK',
        uptime: process.uptime(),
    });
});



app.get('/a{b}cd', (req, res) => {
    return res.send('Matched /a{b}cd');
});

// comodin

app.get('/b*bb', (req, res) => {
    return res.send('Matched /b*bb');
});

