'use client'
import { useState, useEffect } from "react";
import { listS3Buckets, IS3Bucket } from "@/aws/s3";
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { useRouter } from "next/navigation";

const S3Buckets = () => {
  const router = useRouter();

  const [buckets, setBuckets] = useState<IS3Bucket[]>([]);

  useEffect(() => {
    // Fetch data and update buckets using listS3Buckets function
    const fetchData = async () => {
      const data = await listS3Buckets();
      setBuckets(data);
    };
    fetchData();
  }, []);

  const onBucketRowClick = (bucketName: string) => {
    router.push(`/s3/${bucketName}`);
  };

  const s3BucketsList = buckets.map((bucket) => (
    <TableRow key={bucket.Name} onClick={() => onBucketRowClick(bucket.Name)} className='hover:cursor-pointer'>
      <TableCell>{bucket.Name}</TableCell>
      <TableCell>{bucket.CreationDate}</TableCell>
      <TableCell>{bucket.Owner?.DisplayName}</TableCell>
      {/* Add more cells for additional bucket details */}
    </TableRow>
  ));

  return (
    <div>
      <h1>S3 Buckets Dashboard</h1>
      <Table className='mt-4'>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Creation Date</TableHead>
            <TableHead>Owner</TableHead>
            {/* Add more headers for additional bucket details */}
          </TableRow>
        </TableHeader>
        <TableBody>{s3BucketsList}</TableBody>
      </Table>
    </div>
  );
};

export default S3Buckets;
