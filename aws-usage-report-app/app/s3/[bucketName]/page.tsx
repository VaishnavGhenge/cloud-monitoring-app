"use client";

import { listS3Buckets } from "@/aws/s3"; 
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from "chart.js";

export default function Page({ params }: { params: { bucketName: string } }) {
    const bucketName = params.bucketName;
    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const fetchMetrics = async () => {
            // Fetch S3 bucket metrics data
            // Adjust the function and parameters based on your actual implementation
            listS3Buckets()
                .then((data) => console.log(data))
                .catch((err) => console.log(err));
        };

        fetchMetrics();
    }, [bucketName]);

    useEffect(() => {
        if (chartRef.current) {
            // Access the underlying div element
            const ctx = chartRef.current.getContext("2d");
            let myChart: Chart | null = null;

            if (ctx) {
                Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);
                // Create  Chart.js chart
                myChart = new Chart(ctx, {
                    type: "line",
                    data: {
                        labels: [
                            "Red",
                            "Blue",
                            "Yellow",
                            "Green",
                            "Purple",
                            "Orange",
                        ],
                        datasets: [
                            {
                                label: "# of Objects",
                                data: [12, 19, 3, 5, 2, 3], // Replace with actual S3 bucket metrics data
                                backgroundColor: [
                                    "rgba(255, 99, 132, 0.2)",
                                    "rgba(54, 162, 235, 0.2)",
                                    "rgba(255, 206, 86, 0.2)",
                                    "rgba(75, 192, 192, 0.2)",
                                    "rgba(153, 102, 255, 0.2)",
                                    "rgba(255, 159, 64, 0.2)",
                                ],
                                borderColor: [
                                    "rgba(255, 99, 132, 1)",
                                    "rgba(54, 162, 235, 1)",
                                    "rgba(255, 206, 86, 1)",
                                    "rgba(75, 192, 192, 1)",
                                    "rgba(153, 102, 255, 1)",
                                    "rgba(255, 159, 64, 1)",
                                ],
                                borderWidth: 1,
                            },
                        ],
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                        },
                    },
                });
            }

            // Cleanup on component unmount
            return () => {
                if (myChart) {
                    myChart.destroy();
                }
            };
        }
    }, []);

    return (
        <div>
            <div className='flex justify-start items-center'>
                <a href='/s3' className='underline'>
                    S3
                </a>
                <ChevronRightIcon className='h-5 w-5 inline-block mx-2' />
                <span>{params.bucketName}</span>
            </div>

            <hr className='my-2' />

            <div className='mt-4'>
                <p>
                    This page shows the S3 bucket with name {params.bucketName}.
                </p>
                <canvas ref={chartRef}></canvas>
            </div>
        </div>
    );
}
