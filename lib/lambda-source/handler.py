import boto3
import logging
import os

s3_client = boto3.client("s3")


def write_file(path: str):
    """
    Write file to bucket at the specified path

    Keyword arguments:
    path -- the path within the bucket to write to
    """
    s3_client.put_object(
        Bucket=os.environ.get("WRITE_BUCKET"),
        Body="I am a text file :)",
        Key=path,
    )


def handler(event, context):
    """
    Write file to bucket
    """
    logging.info(f"event: {event}")
    logging.info("start writing file...")
    write_file("tmp.txt")
    logging.info("writing done")
