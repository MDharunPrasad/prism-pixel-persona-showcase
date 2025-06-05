
import { useEffect, useRef, useState } from "react";
import { Gamepad2, Trophy, Star, Zap } from "lucide-react";

export const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameover'>('menu');
  const [highScore, setHighScore] = useState(0);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; vx: number; vy: number; life: number; color: string }>>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Enhanced game setup
    canvas.width = 1000;
    canvas.height = 600;
    
    let animationFrame: number;
    let player = { 
      x: 80, 
      y: 300, 
      width: 50, 
      height: 50, 
      velocityY: 0, 
      grounded: false,
      trail: [] as Array<{ x: number; y: number; life: number }>
    };
    let obstacles: Array<{ 
      x: number; 
      y: number; 
      width: number; 
      height: number; 
      type: 'spike' | 'laser' | 'moving';
      color: string;
      rotation: number;
    }> = [];
    let collectibles: Array<{
      x: number;
      y: number;
      width: number;
      height: number;
      collected: boolean;
      rotation: number;
      pulse: number;
    }> = [];
    let backgroundParticles: Array<{
      x: number;
      y: number;
      z: number;
      speed: number;
      color: string;
      size: number;
    }> = [];
    let gameSpeed = 3;
    let frameCount = 0;
    
    const gravity = 0.8;
    const jumpPower = -18;
    
    // Initialize background particles
    for (let i = 0; i < 100; i++) {
      backgroundParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 10 + 1,
        speed: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        size: Math.random() * 3 + 1
      });
    }
    
    // Input handling
    const keys: { [key: string]: boolean } = {};
    
    const handleKeyDown = (e: KeyboardEvent) => {
      keys[e.code] = true;
      if ((e.code === 'Space' || e.code === 'ArrowUp') && gameState === 'playing') {
        e.preventDefault();
        if (player.grounded) {
          player.velocityY = jumpPower;
          player.grounded = false;
          
          // Create jump particles
          for (let i = 0; i < 10; i++) {
            backgroundParticles.push({
              x: player.x + player.width / 2,
              y: player.y + player.height,
              z: 1,
              speed: Math.random() * 5 + 2,
              color: '#00ff88',
              size: Math.random() * 4 + 2
            });
          }
        }
      }
    };
    
    const handleKeyUp = (e: KeyboardEvent) => {
      keys[e.code] = false;
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    const gameLoop = () => {
      if (gameState !== 'playing') return;
      
      // Enhanced background with dynamic gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `hsl(${frameCount * 0.5 % 360}, 80%, 20%)`);
      gradient.addColorStop(0.5, `hsl(${(frameCount * 0.5 + 120) % 360}, 60%, 15%)`);
      gradient.addColorStop(1, `hsl(${(frameCount * 0.5 + 240) % 360}, 40%, 10%)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Animate background particles
      backgroundParticles.forEach((particle, index) => {
        particle.x -= particle.speed;
        particle.y += Math.sin(frameCount * 0.02 + index) * 0.5;
        
        if (particle.x < -10) {
          particle.x = canvas.width + 10;
          particle.y = Math.random() * canvas.height;
        }
        
        // Draw with glow effect
        ctx.save();
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      
      // Update player
      player.velocityY += gravity;
      player.y += player.velocityY;
      
      // Add player trail
      player.trail.unshift({ x: player.x + player.width / 2, y: player.y + player.height / 2, life: 20 });
      if (player.trail.length > 15) player.trail.pop();
      
      // Ground collision
      const groundY = canvas.height - 80;
      if (player.y + player.height >= groundY) {
        player.y = groundY - player.height;
        player.velocityY = 0;
        player.grounded = true;
      }
      
      // Draw enhanced ground
      const groundGradient = ctx.createLinearGradient(0, groundY, 0, canvas.height);
      groundGradient.addColorStop(0, '#2d1b69');
      groundGradient.addColorStop(1, '#1a0d3d');
      ctx.fillStyle = groundGradient;
      ctx.fillRect(0, groundY, canvas.width, canvas.height - groundY);
      
      // Ground glow effect
      ctx.shadowBlur = 30;
      ctx.shadowColor = '#4c1d95';
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(canvas.width, groundY);
      ctx.stroke();
      ctx.shadowBlur = 0;
      
      // Create obstacles with different types
      if (frameCount % 180 === 0) {
        const types = ['spike', 'laser', 'moving'] as const;
        const type = types[Math.floor(Math.random() * types.length)];
        obstacles.push({
          x: canvas.width,
          y: type === 'moving' ? Math.random() * 200 + 200 : groundY - 80,
          width: 30,
          height: 80,
          type,
          color: type === 'spike' ? '#ff4444' : type === 'laser' ? '#ff8800' : '#ff0088',
          rotation: 0
        });
      }
      
      // Create collectibles
      if (frameCount % 300 === 0) {
        collectibles.push({
          x: canvas.width,
          y: Math.random() * 300 + 100,
          width: 25,
          height: 25,
          collected: false,
          rotation: 0,
          pulse: 0
        });
      }
      
      // Update and draw collectibles
      collectibles = collectibles.filter(collectible => {
        if (collectible.collected) return false;
        
        collectible.x -= gameSpeed;
        collectible.rotation += 0.1;
        collectible.pulse += 0.2;
        
        // Collision with player
        if (player.x < collectible.x + collectible.width &&
            player.x + player.width > collectible.x &&
            player.y < collectible.y + collectible.height &&
            player.y + player.height > collectible.y) {
          collectible.collected = true;
          setScore(prev => prev + 50);
          
          // Create collection particles
          for (let i = 0; i < 15; i++) {
            backgroundParticles.push({
              x: collectible.x + collectible.width / 2,
              y: collectible.y + collectible.height / 2,
              z: 1,
              speed: Math.random() * 8 + 3,
              color: '#ffff00',
              size: Math.random() * 6 + 3
            });
          }
          return false;
        }
        
        // Draw collectible with enhanced effects
        ctx.save();
        ctx.translate(collectible.x + collectible.width / 2, collectible.y + collectible.height / 2);
        ctx.rotate(collectible.rotation);
        
        // Pulsing glow
        const pulseSize = Math.sin(collectible.pulse) * 5 + 15;
        ctx.shadowBlur = 25;
        ctx.shadowColor = '#ffff00';
        ctx.fillStyle = '#ffff00';
        ctx.beginPath();
        ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Star shape
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          ctx.lineTo(Math.cos((i * 2 * Math.PI) / 5) * 10, Math.sin((i * 2 * Math.PI) / 5) * 10);
          ctx.lineTo(Math.cos(((i + 0.5) * 2 * Math.PI) / 5) * 5, Math.sin(((i + 0.5) * 2 * Math.PI) / 5) * 5);
        }
        ctx.fill();
        ctx.restore();
        
        return collectible.x + collectible.width > 0;
      });
      
      // Update obstacles
      obstacles = obstacles.filter(obstacle => {
        obstacle.x -= gameSpeed;
        obstacle.rotation += 0.05;
        
        if (obstacle.type === 'moving') {
          obstacle.y += Math.sin(frameCount * 0.05) * 3;
        }
        
        // Enhanced obstacle drawing
        ctx.save();
        ctx.translate(obstacle.x + obstacle.width / 2, obstacle.y + obstacle.height / 2);
        ctx.rotate(obstacle.rotation);
        
        // Glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = obstacle.color;
        
        if (obstacle.type === 'spike') {
          // Draw spike
          ctx.fillStyle = obstacle.color;
          ctx.beginPath();
          ctx.moveTo(0, -obstacle.height / 2);
          ctx.lineTo(-obstacle.width / 2, obstacle.height / 2);
          ctx.lineTo(obstacle.width / 2, obstacle.height / 2);
          ctx.closePath();
          ctx.fill();
        } else if (obstacle.type === 'laser') {
          // Draw laser beam
          ctx.fillStyle = obstacle.color;
          ctx.fillRect(-obstacle.width / 2, -obstacle.height / 2, obstacle.width, obstacle.height);
          
          // Laser particles
          for (let i = 0; i < 3; i++) {
            ctx.fillStyle = `rgba(255, 136, 0, ${Math.random()})`;
            ctx.fillRect(-obstacle.width / 2 - 5, -obstacle.height / 2 + Math.random() * obstacle.height, 5, 2);
          }
        } else {
          // Moving obstacle
          ctx.fillStyle = obstacle.color;
          ctx.beginPath();
          ctx.arc(0, 0, obstacle.width / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
        
        // Collision detection
        if (player.x < obstacle.x + obstacle.width &&
            player.x + player.width > obstacle.x &&
            player.y < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y) {
          if (score > highScore) {
            setHighScore(score);
          }
          setGameState('gameover');
        }
        
        // Score increase
        if (obstacle.x + obstacle.width < player.x && obstacle.x + obstacle.width > player.x - gameSpeed) {
          setScore(prev => prev + 10);
        }
        
        return obstacle.x + obstacle.width > 0;
      });
      
      // Draw player trail
      player.trail.forEach((point, index) => {
        point.life--;
        if (point.life > 0) {
          ctx.save();
          ctx.globalAlpha = point.life / 20;
          ctx.fillStyle = '#00ff88';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#00ff88';
          ctx.beginPath();
          ctx.arc(point.x, point.y, (point.life / 20) * 8, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });
      
      // Draw enhanced player
      ctx.save();
      ctx.translate(player.x + player.width / 2, player.y + player.height / 2);
      ctx.rotate(Math.sin(frameCount * 0.1) * 0.1);
      
      // Player glow
      ctx.shadowBlur = 25;
      ctx.shadowColor = '#00ff88';
      
      // Player body
      const playerGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, player.width / 2);
      playerGradient.addColorStop(0, '#00ff88');
      playerGradient.addColorStop(1, '#006644');
      ctx.fillStyle = playerGradient;
      ctx.fillRect(-player.width / 2, -player.height / 2, player.width, player.height);
      
      // Player face
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(-10, -15, 5, 5); // Left eye
      ctx.fillRect(5, -15, 5, 5);   // Right eye
      ctx.fillRect(-5, -5, 10, 3);  // Mouth
      
      ctx.restore();
      
      // Enhanced UI
      ctx.save();
      ctx.shadowBlur = 0;
      
      // Score
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 28px "Space Grotesk", monospace';
      ctx.fillText(`SCORE: ${score}`, 30, 50);
      
      // High Score
      ctx.fillStyle = '#ffff00';
      ctx.font = 'bold 20px "Space Grotesk", monospace';
      ctx.fillText(`HIGH: ${highScore}`, 30, 80);
      
      // Instructions
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 18px "Space Grotesk", monospace';
      ctx.fillText('SPACE/↑ TO JUMP • COLLECT STARS • AVOID OBSTACLES', 30, canvas.height - 30);
      
      // Speed indicator
      ctx.fillStyle = '#00ff88';
      ctx.font = 'bold 16px "Space Grotesk", monospace';
      ctx.fillText(`SPEED: ${gameSpeed.toFixed(1)}x`, canvas.width - 150, 50);
      
      ctx.restore();
      
      frameCount++;
      gameSpeed += 0.002; // Gradually increase difficulty
      
      animationFrame = requestAnimationFrame(gameLoop);
    };
    
    if (gameState === 'playing') {
      gameLoop();
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [gameState, score, highScore]);
  
  const startGame = () => {
    setScore(0);
    setGameState('playing');
  };
  
  const resetGame = () => {
    setGameState('menu');
    setScore(0);
  };
  
  return (
    <section id="game" className="py-32 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-8 tracking-wide">
          COSMIC RUNNER
        </h2>
        <p className="text-2xl text-white/70 mb-12 font-light">
          Experience this mind-blowing 3D adventure game!
        </p>
        
        <div className="relative bg-gradient-to-br from-black/60 to-purple-900/60 backdrop-blur-2xl rounded-3xl border-2 border-white/20 p-8 shadow-2xl">
          <canvas
            ref={canvasRef}
            className="w-full max-w-5xl mx-auto bg-gradient-to-b from-purple-900 to-indigo-900 rounded-2xl shadow-2xl border-2 border-white/30"
            style={{ imageRendering: 'pixelated' }}
          />
          
          {gameState === 'menu' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/90 backdrop-blur-xl rounded-3xl">
              <div className="text-center space-y-8">
                <div className="flex justify-center mb-6">
                  <Gamepad2 className="w-20 h-20 text-cyan-400 animate-bounce" />
                </div>
                <h3 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-4">
                  COSMIC RUNNER
                </h3>
                <p className="text-white/80 text-xl mb-8 max-w-md mx-auto">
                  Navigate through space obstacles, collect cosmic stars, and achieve the highest score in this epic adventure!
                </p>
                <div className="flex justify-center space-x-6 mb-8">
                  <div className="flex items-center space-x-2 text-emerald-400">
                    <Star className="w-5 h-5" />
                    <span>Collect Stars</span>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <Zap className="w-5 h-5" />
                    <span>Avoid Obstacles</span>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-400">
                    <Trophy className="w-5 h-5" />
                    <span>Beat High Score</span>
                  </div>
                </div>
                {highScore > 0 && (
                  <div className="text-yellow-400 text-xl mb-6">
                    🏆 Best Score: {highScore}
                  </div>
                )}
                <button
                  onClick={startGame}
                  className="px-12 py-6 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-2xl text-white font-bold text-2xl hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 transform-gpu"
                >
                  🚀 START COSMIC ADVENTURE
                </button>
              </div>
            </div>
          )}
          
          {gameState === 'gameover' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/90 backdrop-blur-xl rounded-3xl">
              <div className="text-center space-y-6">
                <h3 className="text-5xl font-black text-red-400 mb-4">MISSION FAILED</h3>
                <div className="text-3xl text-white mb-4">Final Score: <span className="text-cyan-400">{score}</span></div>
                {score > highScore && (
                  <div className="text-2xl text-yellow-400 mb-4 animate-bounce">
                    🎉 NEW HIGH SCORE! 🎉
                  </div>
                )}
                {score >= highScore && (
                  <div className="text-yellow-400 text-xl mb-6">
                    🏆 Current Best: {Math.max(score, highScore)}
                  </div>
                )}
                <button
                  onClick={resetGame}
                  className="px-12 py-6 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-2xl text-white font-bold text-2xl hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-red-500/50 transform-gpu"
                >
                  🔄 TRY AGAIN
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
