# localstack-cicd
Deploying resources via AWS CDK to [LocalStack](https://www.localstack.cloud/) run in a pipeline.

## TODO
1. Setup localstack CLI: DONE
2. Build CDK locally with localstack to make sure it can be done: DONE
3. Try pinging endpoint or similar with localstack to see how tests would work: DONE
4. Execute lambda and check output in S3: DONE
5. Write CircleCI config to deploy CDK with localstack in the pipeline
6. Work out how to do this in a way that you would write tests. Example: terratest

### Docs
- Setup: https://docs.localstack.cloud/getting-started/installation/
- CircleCI: https://docs.localstack.cloud/user-guide/ci/circle-ci/
- Local S3: https://docs.localstack.cloud/user-guide/aws/s3/

Note:
Using cdklocal locally (e.g. within the node_modules of your repo instead of globally installed) does not work at the moment for some setups, so make sure you install both `aws-cdk` and `aws-cdk-local with` the -g flag.
