## Docker Development
In the `./docker` folder you can use some commands like:
- `docker-compose buid --no-cache`
- `docker-compose up` (__NOTE__: the mapped port of host machine is localhost:3001 (see `docker-compose.yaml` file))
- `docker-compose exec react_project /bin/sh`

## React CLEAN base project Dockerized

This reposotory is based in: https://github.com/pharzan/empty-react-project.git

The purpose of this project is start an aplication in react.
You need to create your own **docker-compose.yaml**  in ./docker folder (example provided), then
only exec `docker-compose up`, in the docker folder path, to start the develop's deployment.
The **docker-compose** file execs, automatically, the **npm start** command that is in package.json 

You can execute other react-script commands that are in the **package.json** file,
just mofdify the command section of the service **react_project** in the **docker-compose.yaml file**:

### `npm start`

Runs the app in the development mode.
The ports are maped in the **docker-compose.yaml file**
(3001:3000) visit `localhost:3001` int the host, to see the app


### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
