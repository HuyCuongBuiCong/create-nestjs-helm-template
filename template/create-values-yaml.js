const fs = require('fs');
const path = require('path');

const createValuesYaml = (helmDir, serviceName) => {
    const valuesYamlContent = `
replicaCount: 1

image:
  repository: ${serviceName}
  tag: latest
  pullPolicy: IfNotPresent

service:
  type: ClusterIP
  port: 80

ingress:
  enabled: false

resources: {}

nodeSelector: {}

tolerations: []

affinity: {}
  `;
    fs.writeFileSync(path.join(helmDir, 'values.yaml'), valuesYamlContent.trim());
};

module.exports = createValuesYaml;
