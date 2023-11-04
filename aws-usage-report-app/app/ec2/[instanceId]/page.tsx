



export default function ec2Instance({ params }: { params: { instanceId: string } }) {
    return <div>My Post: {params.instanceId}</div>
  }
  