import { ArrowUp, Users } from 'lucide-react';
import Chart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";


export const Dashboard = () => {
   return (
      <article className="grid md:grid-cols-2 gap-4 grid-rows-[auto] auto-rows-[20rem]">
         <ClientCount />
         <StatisticVistHistory />
         <StatisticVistGames />
         <StatisticMonthlyEarning />
         <StatisticAgeClients />
      </article>
   )
}

interface CardGraphProps {
   className?: string,
   children?: React.ReactNode
}

export const CardGraph = ({ className, children }: CardGraphProps) => {
   return (
      <section className={`bg-tertiary-light-200 text-white rounded-lg overflow-hidden ${className}`}>
         {children}
      </section>
   )
}

const ClientCount = () => {
   return (
      <CardGraph className='h-fit flex items-center gap-4 md:col-span-2 p-8 '>
         <div className='bg-secondary-light-100/20 p-4 rounded-lg' title='Clientes'>
            <Users
               className='text-secondary-light-200'
               size={25}
               strokeWidth={3}
            />
         </div>
         <p className='space-y-1'>
            <span className='block font-semibold text-lg text-secondary-light-200'>Total de clientes</span>
            <small className='block font-bold text-3xl text-primary-light-100'>3,782</small>
         </p>
         <p className='self-end ml-auto text-lg bg-success-700 text-success-300 font-bold flex items-center gap-2 px-2 py-1 rounded-lg'>
            <ArrowUp />
            <small>11.01%</small>
         </p>
      </CardGraph>
   )
}

export default function StatisticVistHistory() {
   const options: ApexOptions = {
      legend: {
         show: false,
         position: 'top',
         horizontalAlign: 'left',
      },

      title: {
         text: 'Historial de visitas',
         style: {
            fontSize: '15px',
            color: '#E5B85C',
            fontWeight: 'bold'
         }
      },

      colors: ['#E5B85C', '#D6A657'],

      chart: {
         height: 310,
         type: 'line',
         toolbar: {
            show: false,
         },
      },

      stroke: {
         curve: 'straight',
         width: [2, 2],
      },

      fill: {
         type: 'gradient',
         gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
         },
      },

      markers: {
         size: 0,
         strokeColors: '#E5B85C',
         strokeWidth: 2,
         hover: {
            size: 6,
         },
      },

      grid: {
         borderColor: "#111827",
         xaxis: {
            lines: {
               show: false,
            },
         },
         yaxis: {
            lines: {
               show: true,
            },
         },
      },

      dataLabels: {
         enabled: false,
      },

      tooltip: {
         enabled: true,
         theme: "dark",
         x: {
            format: 'dd MMM yyyy',
         },
      },

      xaxis: {
         type: 'category',
         tickPlacement: 'on',
         categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
         ],
         axisBorder: {
            show: false,
         },
         axisTicks: {
            show: false,
         },
         tooltip: {
            enabled: false,
         },
         labels: {
            style: {
               colors: ['#fffe'],
            }
         },
      },

      yaxis: {
         labels: {
            style: {
               colors: ['#fffe'],
            }
         }
      },
   };

   const series = [
      {
         name: 'Sales',
         data: [180, 350, 950, 705, 780, 1200, 650, 500, 1230, 210, 240],
      },
   ];
   return (
      <CardGraph>
         <Chart
            options={options}
            series={series}
            height={310}
            type="area"
         />
      </CardGraph>
   );
}

const StatisticVistGames = () => {
   const seriesData = [10, 8, 15, 20];
   const total = seriesData.reduce((acc, value) => acc + value, 0); // Suma total

   const options: ApexOptions = {
      title: {
         text: 'Juegos más visitados',
         style: { fontSize: '15px', color: '#E5B85C', fontWeight: 'bold' }
      },
      dataLabels: {
         enabled: true,
         formatter: (value: number) => `${((value / total) * 100).toFixed(1)}%`
      },
      chart: { background: 'transparent', toolbar: { show: false }, foreColor: '#fffe' },
      xaxis: { categories: ['Black Jack', 'Poker', 'Roulette', 'Gates of Olympus'] },
      colors: ['#E5B85C'],
      plotOptions: { bar: { borderRadius: 4 } },
      grid: { borderColor: '#111827' },
      tooltip: { theme: 'dark' }
   };

   const series = [{ name: 'Porcentaje', data: seriesData }];

   return (
      <CardGraph>
         <Chart
            options={options}
            series={series}
            height={'100%'}
            type="bar"
         />
      </CardGraph>
   );
};


const StatisticMonthlyEarning = () => {
   const options = {
      title: {
         text: 'Ganancias Mesuales',
         style: { fontSize: '15px', color: '#E5B85C' },
         fontWeight: 'bold'
      },
      chart: { stacked: true, background: 'transparent', toolbar: { show: false }, foreColor: '#fffe' },
      xaxis: { categories: ['Enero', 'Febrero', 'Marzo', 'Abril'] },
      colors: ['#E5B85C', '#D6A657'],
      plotOptions: { bar: { borderRadius: 4 } },
      grid: { borderColor: '#111827' },
      tooltip: { theme: 'dark' }
   };

   const series = [
      { name: 'Ganancias', data: [4500, 7521, 4523, 14565] },
   ];

   return (
      <CardGraph>
         <Chart options={options} series={series} type="bar" height={'100%'} />
      </CardGraph>
   )
};


const StatisticAgeClients = () => {
   const options = {
      title: {
         text: 'Promedio de edades',
         style: { fontSize: '15px', color: '#E5B85C' },
         fontWeight: 'bold'
      },
      chart: { background: 'transparent', foreColor: '#fffe' },
      labels: ['18-24 años', '25-34 años', '35-44 años', '45-54 años'],
      colors: ['#E5B85C', '#D6A657', '#B58950', '#A47A45'],
      plotOptions: { bar: { borderRadius: 4 } },
      grid: { borderColor: '#111827' },
      tooltip: { theme: 'dark' },
   };

   const series = [30, 20, 25, 25];

   return (
      <CardGraph>
         <Chart options={options} series={series} type="pie" height={'100%'} />
      </CardGraph>
   )
};
