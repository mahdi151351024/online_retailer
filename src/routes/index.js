import routes from './routes';

const routeConfiguration = (app) => {
    app.use('/api', routes);
};

export default routeConfiguration;
