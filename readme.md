# Create NestJS Helm Template

This project is designed to speed up the process of creating a NestJS service and running it locally on Kubernetes.

## Prerequisites

- Node.js
- Docker
- Helm
- Kubernetes (Docker Desktop's Kubernetes is recommended for local development)

## Usage

1. Clone this repository to your local machine.

2. Install the dependencies by running `npm install`.

3. Make sure the scripts `create-service.js` and `add-helm.js` have execute permissions. You can add execute permissions by running `chmod +x create-service.js add-helm.js`.

4. Create a new NestJS service by running `npm run create-service <service-name>`. Replace `<service-name>` with the name of your service.

5. Add Helm to your service by running `npm run add-helm <service-name>`. Replace `<service-name>` with the name of your service.

## Scripts

- `create-service`: This script creates a new NestJS service. It installs the NestJS CLI (if not already installed), creates a new NestJS project, generates the necessary components (module, service, controller), and removes the test files.

- `add-helm`: This script adds Helm to your service. It creates a Dockerfile, builds a Docker image, creates a Helm chart, stops any existing Helm release, and installs the Helm chart.

## How the scripts work

- `create-service`: This script first checks if the NestJS CLI is installed globally. If not, it installs it. Then, it creates a new NestJS project with the provided service name, generates a module, service, and controller for the service, and finally removes any test files.

- `add-helm`: This script first changes the current working directory to the service directory. It then creates a Dockerfile and builds a Docker image. After that, it creates a Helm chart with the necessary files and configurations. If there's an existing Helm release with the same name, it stops it. Finally, it installs the new Helm chart.

## How to customize the scripts

You can customize the scripts to fit your specific requirements. For example, you can modify the Dockerfile, Helm chart templates, or the build process.
```javascript
const main = () => {
    try {
        process.chdir(serviceDir);
        execSync(`kubectl config use-context docker-desktop`, { stdio: 'inherit' });
        createDockerFile();
        createHelmChart();
        buildDockerImage();
        stopHelmRelease()
        helmInstall();
        console.log(`${serviceName} service is up and running.`);
    } catch (error) {
        console.error(`Failed to run service ${serviceName}:`, error);
        process.exit(1);
    }
};
```
## Note

This project is intended for local development and testing. Please review and modify the scripts and configurations according to your production environment and requirements.
