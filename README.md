# k6_io_demo
You should have installed **npm** for running npm scripts. https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#os-x-or-windows-node-installers 

## k6.io
### 1. Install k6
Instructions - https://k6.io/docs/getting-started/installation/

K6 Installation troubleshooter - https://k6.io/docs/getting-started/installation/troubleshooting/

## Docker
### 1. Install Docker https://docs.docker.com/engine/install/

    Docker Desktop for Linux https://docs.docker.com/desktop/linux/install/

    Docker Desktop for Mac (macOS)	https://docs.docker.com/desktop/mac/install/

    Docker Desktop for Windows https://docs.docker.com/desktop/windows/install/

### 2. Start influxdb and grafana docker containers
    docker-compose up -d influxdb grafana
### 3. Check running containers
    docker ps
### 4. Local grafana url: http://localhost:3000 credentials: admin/admin
### 5. Local influxDb url: http://localhost:8086
### 6. Script execution command
    npm run k6:script ./scripts/[path]

## Podman
### 1. Install Podman https://podman-desktop.io/docs/installation/macos-install
Cli version:
    Brew: https://docs.brew.sh/Installation
    brew install podman-desktop
    brew install podman
### 2. Configure Podman
    podman machine init
    podman machine start
### 3. Start influxdb and grafana docker containers
    Open example project directory and run:
        podman compose --file docker-compose.yml up --detach
### 4. Check running containers
    podman ps
### 5. Local grafana url: http://localhost:3000 credentials: admin/admin
### 6. Local influxDb url: http://localhost:8086
### 7. Script execution command
    npm run k6:script ./scripts/[path]



