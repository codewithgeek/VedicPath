import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CALENDAR_EVENTS } from '../constants';

const CalendarWidget: React.FC = () => {
  const d3Container = useRef<SVGSVGElement>(null);

  // Recharts Data
  const chartData = [
    { name: 'Jan', ceremonies: 45 },
    { name: 'Feb', ceremonies: 60 },
    { name: 'Mar', ceremonies: 35 },
    { name: 'Apr', ceremonies: 80 },
    { name: 'May', ceremonies: 95 },
    { name: 'Jun', ceremonies: 70 },
  ];

  // D3 Visualization: Auspicious Time Gauge
  useEffect(() => {
    if (d3Container.current) {
      const svg = d3.select(d3Container.current);
      svg.selectAll("*").remove(); // Clear previous

      const width = 300;
      const height = 300;
      const radius = Math.min(width, height) / 2;

      const g = svg.append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

      // Outer Circle
      g.append("circle")
        .attr("r", radius - 10)
        .style("fill", "#fff8f1")
        .style("stroke", "#DAA520")
        .style("stroke-width", "4px");

      // Time Segments (Simulating Muhurat periods)
      const pie = d3.pie().value(1).sort(null);
      // Create 8 segments (Prahars)
      const data = d3.range(8); 
      
      const arc = d3.arc<any>()
        .innerRadius(radius - 60)
        .outerRadius(radius - 10)
        .padAngle(0.02);

      g.selectAll("path")
        .data(pie(data.map(() => 1))) // Equal segments
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", (d, i) => {
          // Highlight auspicious segments (e.g., morning and evening)
          return (i === 1 || i === 2 || i === 5) ? "#ef5e07" : "#ffdab0"; 
        })
        .attr("opacity", 0.8);

      // Center Text
      g.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "-0.5em")
        .text("Current Prahar")
        .style("font-family", "Cinzel")
        .style("font-size", "14px")
        .style("fill", "#800000");
      
      g.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "1em")
        .text("Shubh")
        .style("font-family", "Cinzel")
        .style("font-size", "24px")
        .style("font-weight", "bold")
        .style("fill", "#ef5e07");

    }
  }, []);

  return (
    <div className="py-16 bg-saffron-50">
       <div className="max-w-7xl mx-auto px-4 md:px-10">
         <h2 className="text-4xl font-display text-maroon-900 text-center mb-12">Vedic Calendar & Insights</h2>
         
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Event List */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-maroon-800">
              <h3 className="text-xl font-bold font-display text-gray-800 mb-6 flex items-center">
                 <span className="text-2xl mr-2">📅</span> Upcoming Festivals
              </h3>
              <ul className="space-y-4">
                {CALENDAR_EVENTS.map((event, idx) => (
                  <li key={idx} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0">
                    <div>
                      <p className="font-bold text-maroon-800">{event.title}</p>
                      <p className="text-xs text-gray-500">{event.time || 'All Day'}</p>
                    </div>
                    <div className="text-right">
                       <span className="block text-sm font-semibold bg-saffron-100 text-saffron-800 px-2 py-1 rounded">
                         {new Date(event.date).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}
                       </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* D3 Gauge */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-gold-500 flex flex-col items-center">
               <h3 className="text-xl font-bold font-display text-gray-800 mb-2">Today's Muhurat Status</h3>
               <p className="text-sm text-gray-500 mb-4 text-center">Visualizing auspicious time segments (Prahars)</p>
               <svg ref={d3Container} width={300} height={300} className="mx-auto"></svg>
            </div>

            {/* Recharts Stats */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-saffron-500">
               <h3 className="text-xl font-bold font-display text-gray-800 mb-2">Ritual Demand</h3>
               <p className="text-sm text-gray-500 mb-6">Seasonal trend of wedding & puja bookings</p>
               <div className="h-64">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={chartData}>
                      <XAxis dataKey="name" tick={{fontSize: 12}} />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{backgroundColor: '#800000', color: '#fff', borderRadius: '4px', border: 'none'}}
                        itemStyle={{color: '#fff'}}
                      />
                      <Bar dataKey="ceremonies" radius={[4, 4, 0, 0]}>
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#ef5e07' : '#DAA520'} />
                        ))}
                      </Bar>
                   </BarChart>
                 </ResponsiveContainer>
               </div>
            </div>
         </div>
       </div>
    </div>
  );
};

export default CalendarWidget;