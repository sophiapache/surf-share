import * as cdk from "aws-cdk-lib";
import { AttributeType, Table, BillingMode } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    new Table(this, "Table", {
      tableName: "rentalsTable",
      partitionKey: {
        name: "id",
        type: AttributeType.STRING,
      },
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      billingMode: BillingMode.PAY_PER_REQUEST,
    });
  }
}
