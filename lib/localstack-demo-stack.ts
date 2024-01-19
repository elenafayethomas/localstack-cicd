import * as cdk from 'aws-cdk-lib';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import * as path from 'path';

export class LocalstackDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // for demo purposes, we have a lambda function write to an S3 bucket
    // demonstrating deploying and running resources in a local cloud

    const bucket = new Bucket(this, 'output-bucket', {
      bucketName: 'output-bucket',
      versioned: true,
    });

    const writerFunction = new Function(this, 'writer-lambda', {
      runtime: Runtime.PYTHON_3_11,
      handler: 'handler.handler',
      code: Code.fromAsset(path.join(__dirname, 'lambda-source')),
      environment: {
        'WRITE_BUCKET': bucket.bucketName,
      }
    });

    writerFunction.addToRolePolicy(
      new PolicyStatement({
        actions: [
          "s3:Put*",
        ],
        resources: [
          bucket.bucketArn,
          `${bucket.bucketArn}/*`,
        ]
      })
    )
  }
}
