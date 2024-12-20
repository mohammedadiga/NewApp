import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ 
    region: process.env.AWS_REGION,
    endpoint: process.env.DYNAMODB_ENDPOINT,
});
const dynamodb = DynamoDBDocumentClient.from(client);

export default dynamodb;
