import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { LocalstackDemoStack } from '../../lib/localstack-demo-stack';


test('S3 Bucket Created', () => {
  const app = new App();
  const stack = new LocalstackDemoStack(app, 'demo-stack');
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::S3::Bucket', {
    VersioningConfiguration: {
        Status: 'Enabled'
    }
  });
});
