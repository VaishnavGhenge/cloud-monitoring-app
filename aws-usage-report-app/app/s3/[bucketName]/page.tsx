



export default function s3Bucket({ params }: { params: {  bucketName : string } }) {
    return <div>My Post: {params.bucketName}</div>
  }