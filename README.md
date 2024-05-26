# thomasfamilyblog-2024-2025git

Created with [Create React App](https://github.com/facebook/create-react-app).

## Usage

### Local

```shell
# development server
$ npm start
```

### Raspberry Pi

To run on a Raspberry Pi, a local server, you should run:

```shell
# builds the optimised website and runs 'serve'
$ npm run serve:localhost &>log-output.log &
# to run on a specific port:
$ npm run serve:localhost -- -l <port> &>log-output.log &
$ npm run serve:localhost -- -l 4000 &>log-output.log &
```

Then, to stop this subprocess:

```shell
# find all processes with the word 'node' in them
$ ps aux | grep node
elena       2075  3.9  0.6 5025952 56576 tty1    Sl   17:09   0:00 node /home/elena/Documents/repositories/thomasfamilyblog-2024-2025git/node_modules/.bin/serve -s build
elena       2308  0.0  0.0   6240  1536 pts/0    S+   17:09   0:00 grep --color=auto node

# then kill the website process
$ kill -9 2075
```

## To Do

- Hosting:
    - Buy a domain name
    - Get a TLS certificate
    - Allow the Raspberry Pi to be connected to from the internet

- Logging:
    - Identify suitable logging and metrics tool
    - Setup logging and metrics tool: potentially [Grafana](https://grafana.com/docs/grafana/latest/setup-grafana/installation/debian/)

- CDN:
    - Identify suitable CDN provider
    - Setup CDN provider to sit in front of the domain
    - Write code to deploy a domain and setup caching and security
