import {
  PutCommand,
  ScanCommandOutput,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";
import { dbClient } from "../lib/dynamodb";
import { randomUUID } from "crypto";

export type IScanCommandOutput<T> = Omit<ScanCommandOutput, "Items"> & {
  Items?: T;
};

export async function getAll() {
  const ids = (await dbClient.send(
    new ScanCommand({
      TableName: process.env.DATABASE_NAME,
    })
  )) as IScanCommandOutput<{ id: string[] }>;

  return ids.Items;
}

export async function create() {
  await dbClient.send(
    new PutCommand({
      TableName: process.env.DATABASE_NAME,
      Item: {
        id: randomUUID(),
      },
    })
  );
}
