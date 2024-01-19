#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LocalstackDemoStack } from '../lib/localstack-demo-stack';

const app = new cdk.App();

new LocalstackDemoStack(app, 'LocalstackCicdStack', {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION,
    }
});