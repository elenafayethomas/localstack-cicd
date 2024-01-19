#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LocalstackDemoStack } from '../lib/localstack-demo-stack';

const app = new cdk.App();

new LocalstackDemoStack(app, 'LocalstackCicdStack', {
    env: {
        account: '000000000000',
        region: 'us-east-1',
    }
});