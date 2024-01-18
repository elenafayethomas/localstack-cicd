#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LocalstackCicdStack } from '../lib/localstack-cicd-stack';
import { BusinessUnitType, Enablement, EnvironmentType } from '@economist/enablement-constructs';

const app = new cdk.App();

new Enablement(app, {
  serviceName: 'some-service',
  environment: EnvironmentType.DEVELOPMENT,
  businessUnit: BusinessUnitType.THE_ECONOMIST_GROUP,
  squad: 'enablement',
});

new LocalstackCicdStack(app, 'LocalstackCicdStack', {

});