import app from './app';
import connect from './db';
import routeConfiguration from './src/routes';
import config from './src/config';
import './src/models/data-models';
import sequelize from './src/config/sequelize';

const PORT = config.APP_PORT || 3001;


app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: `Server running on port ${PORT}`,
        apiUrl: `${config.APP_URL}/api`,
    });
});

routeConfiguration(app);


connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log('Database connected');
            console.log(`Server running on port ${PORT}`);
            sequelize.sync({ alter: true });
        });
    })
    .catch((err) => {
        console.log(err);
    });
