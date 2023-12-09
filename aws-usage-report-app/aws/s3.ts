
import { apiUrl } from "@/config";

export interface IS3Bucket {
    Name: string;
    CreationDate: string;
    Owner: {
      DisplayName: string;
      ID: string;
    };
}

interface S3ApiResponse {
    Buckets?: {
      Name: string;
      CreationDate?: string;
      Owner?: {
        DisplayName?: string;
        ID?: string;
      };
    }[];
  }
  
  export const listS3Buckets = async (): Promise<IS3Bucket[]> => {
    try {
      const response = await fetch(`${apiUrl}/s3`);
      const data: S3ApiResponse = await response.json();
  
      const bucketDetails: IS3Bucket[] = data.Buckets?.map(bucket => ({
        Name: bucket.Name,
        CreationDate: bucket.CreationDate || '',
        Owner: {
          DisplayName: bucket.Owner?.DisplayName || '',
          ID: bucket.Owner?.ID || '',
        },
      })) || [];
  
      return bucketDetails;
    } catch (error) {
      console.error('Error listing S3 buckets:', error);
      throw error; // Handle the error as needed
    }
  };
  