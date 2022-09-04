## [mastercard-backbank-node-cloud-run](https://github.com/NickCarducci/mastercard-backbank-node-cloud-run)

`git push --set-upstream origin maintenance --force`

[cloud run (api gateway, load balance) service](https://cloud.google.com/api-gateway/docs/creating-api-config)

`gcloud config list project`

`gcloud config set project vaumoney`

`gcloud api-gateway api-configs create backbank --api=backbank --openapi-spec=swagger.yaml --project=vaumoney --backend-auth-service-account=vaumoney@appspot.gserviceaccount.com`

[IAM service accounts](https://cloud.google.com/api-gateway/docs/configure-dev-env#enabling_required_services) required for api gateway configs for vaumoney@appspot.gserviceaccount.com	

[swagger.yaml](https://editor.swagger.io/)

### [custom domain](https://cloud.google.com/api-gateway/docs/using-custom-domains)

> Cloud run (custom domain): "None of the URLs above are directly accessible because this service only allows authenticated invocations." and swagger.yaml (API gateway) uses such domain (or Assigned by Cloud Run https://backbank-_.a.run.app) as host