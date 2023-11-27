"use client";

import { getMemoryUtilization } from "@/aws/ec2";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from "chart.js";
import moment from 'moment'

export default function Page({ params }: { params: { instanceId: string } }) {
    const instanceId = params.instanceId;
    const chartRef = useRef<HTMLCanvasElement>(null);
    const [cpuUtilizationData, setCPUUtilizatopnData] = useState<any>({Datapoints: []})

    useEffect(() => {
        const fetchMetrics = async () => {
            const startTime = new Date(Date.now() - 3600000);
            const endTime = new Date();
            getMemoryUtilization(
                instanceId,
                startTime.toISOString(),
                endTime.toISOString()
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setCPUUtilizatopnData(data);
                })
                .catch((err) => console.log(err));
        };

        fetchMetrics();
    }, [instanceId]);

    useEffect(() => {
        if (chartRef.current) {
            // Access the underlying div element
            const ctx = chartRef.current.getContext("2d");
            let myChart: Chart | null = null;

            if(ctx) {
                Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);
                // Create your Chart.js chart
                myChart = new Chart(ctx, {
                    type: "line",
                    data: {
                        labels: cpuUtilizationData.Datapoints.map((dataPoint: {Timestamp: string, Average: number, Unit: string}) => {
                            return (moment(dataPoint.Timestamp).format('LT'))
                        }),
                        datasets: [{
                            label: 'Average Percentage',
                            data: cpuUtilizationData.Datapoints.map((dataPoint: {Timestamp: string, Average: number, Unit: string}) => {
                                return (dataPoint.Average);
                            }),
                            borderColor: 'blue',
                            borderWidth: 2,
                            fill: false
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                ticks: {
                                    callback: value => value + '%' // Add '%' to y-axis labels
                                },
                            },
                        },
                        // TODO: Fix point label
                        plugins: {
                            tooltip: {
                              callbacks: {
                                label: (context) => {
                                    const label = context.dataset.label || '';
                                    const value = context.parsed.y + '%';
                                    return `${label}: ${value}`;
                                }
                              }
                            }
                        }
                    },
                });
            }

            // Cleanup on component unmount
            return () => {
                if(myChart) {
                    myChart.destroy();
                }
            };
        }
    }, [cpuUtilizationData]);

    return (
        <div>
            <div className='flex justify-start items-center'>
                <a href='/ec2' className='underline'>
                    EC2
                </a>
                <ChevronRightIcon className='h-5 w-5 inline-block mx-2' />
                <span>{params.instanceId}</span>
            </div>

            <hr className='my-2' />

            <div className='mt-4'>
                <div className='flex items-center justify-center"'>
                    <div className='overflow-hidden w-1/2'>
                        <div className='bg-slate-900 text-slate-300 py-1 px-2 text-center mb-4 rounded-lg'>CPU Utilization</div>
                        <canvas ref={chartRef}></canvas>
                    </div>
                </div>
            </div>
        </div>
    );
}
