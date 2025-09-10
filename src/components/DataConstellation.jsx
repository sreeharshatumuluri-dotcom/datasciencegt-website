import React, { useEffect, useRef } from 'react';

const DataConstellation = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let time = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();

    // Industry data clusters
    const industries = [
      {
        name: 'Finance',
        color: '#22c55e',
        x: 0.2,
        y: 0.3,
        z: 0.5,
        nodes: 12,
        size: 3
      },
      {
        name: 'Healthcare',
        color: '#3b82f6',
        x: 0.7,
        y: 0.4,
        z: 0.3,
        nodes: 10,
        size: 2.5
      },
      {
        name: 'Entertainment',
        color: '#8b5cf6',
        x: 0.5,
        y: 0.2,
        z: 0.8,
        nodes: 8,
        size: 2
      },
      {
        name: 'Retail',
        color: '#f59e0b',
        x: 0.3,
        y: 0.7,
        z: 0.6,
        nodes: 9,
        size: 2.2
      },
      {
        name: 'Insurance',
        color: '#06b6d4',
        x: 0.8,
        y: 0.6,
        z: 0.4,
        nodes: 7,
        size: 1.8
      },
      {
        name: 'Telecom',
        color: '#ef4444',
        x: 0.4,
        y: 0.5,
        z: 0.2,
        nodes: 6,
        size: 1.5
      }
    ];

    // Create constellation nodes
    const constellationNodes = [];
    industries.forEach((industry, industryIndex) => {
      for (let i = 0; i < industry.nodes; i++) {
        const angle = (i / industry.nodes) * Math.PI * 2;
        const radius = 50 + Math.random() * 30;
        const node = {
          id: `${industryIndex}-${i}`,
          industry: industryIndex,
          x: industry.x * canvas.width + Math.cos(angle) * radius,
          y: industry.y * canvas.height + Math.sin(angle) * radius,
          z: industry.z + (Math.random() - 0.5) * 0.3,
          baseX: industry.x * canvas.width + Math.cos(angle) * radius,
          baseY: industry.y * canvas.height + Math.sin(angle) * radius,
          baseZ: industry.z + (Math.random() - 0.5) * 0.3,
          size: industry.size + Math.random() * 1,
          color: industry.color,
          opacity: 0.7 + Math.random() * 0.3,
          pulsePhase: Math.random() * Math.PI * 2,
          orbitSpeed: 0.001 + Math.random() * 0.002
        };
        constellationNodes.push(node);
      }
    });

    // Connection streams
    const connections = [];
    for (let i = 0; i < constellationNodes.length; i++) {
      for (let j = i + 1; j < constellationNodes.length; j++) {
        const node1 = constellationNodes[i];
        const node2 = constellationNodes[j];
        const distance = Math.sqrt(
          Math.pow(node1.x - node2.x, 2) + 
          Math.pow(node1.y - node2.y, 2) + 
          Math.pow(node1.z - node2.z, 2) * 100
        );
        
        if (distance < 150) {
          connections.push({
            from: i,
            to: j,
            strength: (150 - distance) / 150,
            flowPhase: Math.random() * Math.PI * 2,
            flowSpeed: 0.02 + Math.random() * 0.03
          });
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      // Update node positions with orbital motion
      constellationNodes.forEach((node, index) => {
        node.pulsePhase += 0.02;
        
        // Orbital motion around cluster center
        const orbitAngle = time * node.orbitSpeed;
        const orbitRadius = 20;
        node.x = node.baseX + Math.cos(orbitAngle) * orbitRadius;
        node.y = node.baseY + Math.sin(orbitAngle) * orbitRadius;
        
        // Z-axis floating
        node.z = node.baseZ + Math.sin(time * 0.5 + index) * 0.1;
        
        // Mouse interaction
        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          const force = (100 - distance) / 100;
          node.x += dx * force * 0.1;
          node.y += dy * force * 0.1;
        }
      });

      // Draw connections with flowing particles
      connections.forEach(connection => {
        const node1 = constellationNodes[connection.from];
        const node2 = constellationNodes[connection.to];
        
        // Update flow phase
        connection.flowPhase += connection.flowSpeed;
        
        // Draw connection line
        ctx.save();
        ctx.globalAlpha = connection.strength * 0.3;
        ctx.strokeStyle = node1.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(node1.x, node1.y);
        ctx.lineTo(node2.x, node2.y);
        ctx.stroke();
        
        // Draw flowing particle
        const flowProgress = (Math.sin(connection.flowPhase) + 1) / 2;
        const particleX = node1.x + (node2.x - node1.x) * flowProgress;
        const particleY = node1.y + (node2.y - node1.y) * flowProgress;
        
        ctx.globalAlpha = connection.strength * 0.8;
        ctx.fillStyle = node1.color;
        ctx.beginPath();
        ctx.arc(particleX, particleY, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw constellation nodes
      constellationNodes.forEach(node => {
        ctx.save();
        
        // Calculate 3D perspective
        const perspective = 1 + node.z * 0.5;
        const displaySize = node.size * perspective;
        
        // Pulsing effect
        const pulse = 1 + Math.sin(node.pulsePhase) * 0.2;
        const finalSize = displaySize * pulse;
        
        // Outer glow
        ctx.globalAlpha = node.opacity * 0.3;
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, finalSize * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner core
        ctx.globalAlpha = node.opacity;
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, finalSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Center dot
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(node.x, node.y, finalSize * 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse tracking
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
        style={{ background: 'transparent' }}
      />
      
      {/* Industry Legend */}
      <div className="absolute top-4 left-4 space-y-2">
        <div className="text-xs text-gray-400 font-mono">INDUSTRY CLUSTERS</div>
        {[
          { name: 'Finance', color: '#22c55e' },
          { name: 'Healthcare', color: '#3b82f6' },
          { name: 'Entertainment', color: '#8b5cf6' },
          { name: 'Retail', color: '#f59e0b' },
          { name: 'Insurance', color: '#06b6d4' },
          { name: 'Telecom', color: '#ef4444' }
        ].map((industry, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: industry.color }}
            ></div>
            <span className="text-xs text-gray-300">{industry.name}</span>
          </div>
        ))}
      </div>
      
      {/* Interaction Hint */}
      <div className="absolute bottom-4 right-4">
        <div className="text-xs text-gray-500 font-mono">
          Hover to interact
        </div>
      </div>
    </div>
  );
};

export default DataConstellation;