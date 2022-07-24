import React, { useState } from 'react';
import ReactECharts, { GraphChart } from 'echarts-for-react';
import graph from '../assets/graph.json'

graph.nodes.forEach(function (node) {
  node.label = {
    show: node.symbolSize > 30
  };
});

export default function Relationship() {
  const [node, setNode] = useState(graph.nodes[0]);
  
  const option = {
    title: {
      text: 'Impactopia Network',
      subtext: 'Default layout',
      top: 'bottom',
      left: 'right'
    },
    tooltip: {},
    legend: [
      {
        // selectedMode: 'single',
        data: graph.categories.map(function (a) {
          return a.name;
        })
      }
    ],
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        name: 'Impactopia Network',
        type: 'graph',
        layout: 'none',
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        label: {
          position: 'right',
          formatter: '{b}'
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3
        },
        emphasis: {
          focus: 'adjacency',
          lineStyle: {
            width: 10
          }
        }
      }
    ]
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
    }}>
      <div style={{
        width: '80%',
        minHeight: '80vh',
        background: '#efefef',
        padding: '20px',
        marginLeft: '20px',
        borderRadius: '20px',
      }}>
        <ReactECharts
          option={option}
          style={{ minHeight: '80vh', zIndex: 10, }}
          onEvents={{
            click: (params) => {
              if (params.dataType == 'node') {
                console.log('node', params);
                setNode(params);
              }
            }
          }}
        />
      </div>
      <div style={{
        width: 200,
        marginLeft: '20px',
        padding: '20px',
        background: '#282c34',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        height: 'auto'
        // flex: 1,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            overflow: 'hidden',
          }}>
            <img  style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
            }} src="http://localhost:3000/static/media/avatar.f68677f1.png" />
          </div>
          <div style={{
            fontSize: '14px',
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '8px',
            alignItems: 'start',
          }}>
            <div>{node.name}</div>
            <div style={{
              marginTop: '5px',
            }}>{node.value}</div>
          </div>
        </div>
        <div style={{
          marginTop: 16,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gridGap: '10px',
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            overflow: 'hidden',
            background: '#666',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
          }}>
            Badge
          </div>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            overflow: 'hidden',
            background: '#666',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
          }}>
            Badge
          </div>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            overflow: 'hidden',
            background: '#666',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
          }}>
            Badge
          </div>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            overflow: 'hidden',
            background: '#666',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
          }}>
            Badge
          </div>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            overflow: 'hidden',
            background: '#666',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
          }}>
            Badge
          </div>
        </div>
        <div style={{
          marginTop: 16,
          borderRadius: '20px',
          background: '#666',
          fontSize: '14px',
          padding: '8px',
          // alignSelf: 'end',
        }}>View Detail</div>
      </div>
    </div>
  )
}

