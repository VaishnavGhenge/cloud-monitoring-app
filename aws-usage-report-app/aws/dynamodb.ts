import { apiUrl } from "@/config";
  
export const describeInstances = async (): Promise<string[]> => {
    const response =  await fetch(`${apiUrl}/dynamodb`);
    const data = await response.json();
    
    return data.TableNames ?? [];
}