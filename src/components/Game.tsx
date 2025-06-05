
import { useEffect, useRef, useState } from "react";

export const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameover'>('menu');
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Game setup
    canvas.width = 800;
    canvas.height = 400;
    
    let animationFrame: number;
    let player = { x: 50, y: 200, width: 40, height: 40, velocityY: 0, grounded: false };
    let obstacles: Array<{ x: number; y: number; width: number; height: number }> = [];
    let particles: Array<{ x: number; y: number; velocityX: number; velocityY: number; life: number }> = [];
    let gameSpeed = 2;
    let frameCount = 0;
    
    const gravity = 0.5;
    const jumpPower = -12;
    
    // Input handling
    const keys: { [key: string]: boolean } = {};
    
    const handleKeyDown = (e: KeyboardEvent) => {
      keys[e.code] = true;
      if (e.code === 'Space' && gameState === 'playing') {
        e.preventDefault();
        if (player.grounded) {
          player.velocityY = jumpPower;
          player.grounded = false;
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
      
      // Clear canvas with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#4c1d95');
      gradient.addColorStop(1, '#7c3aed');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update player
      player.velocityY += gravity;
      player.y += player.velocityY;
      
      // Ground collision
      if (player.y + player.height >= canvas.height - 50) {
        player.y = canvas.height - 50 - player.height;
        player.velocityY = 0;
        player.grounded = true;
      }
      
      // Draw ground
      ctx.fillStyle = '#1f2937';
      ctx.fillRect(0, canvas.height - 50, canvas.width, 50);
      
      // Create obstacles
      if (frameCount % 120 === 0) {
        obstacles.push({
          x: canvas.width,
          y: canvas.height - 50 - 60,
          width: 20,
          height: 60
        });
      }
      
      // Update obstacles
      obstacles = obstacles.filter(obstacle => {
        obstacle.x -= gameSpeed;
        
        // Draw obstacle
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        
        // Collision detection
        if (player.x < obstacle.x + obstacle.width &&
            player.x + player.width > obstacle.x &&
            player.y < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y) {
          setGameState('gameover');
        }
        
        // Score increase
        if (obstacle.x + obstacle.width < player.x && obstacle.x + obstacle.width > player.x - gameSpeed) {
          setScore(prev => prev + 10);
        }
        
        return obstacle.x + obstacle.width > 0;
      });
      
      // Draw player
      ctx.fillStyle = '#06b6d4';
      ctx.fillRect(player.x, player.y, player.width, player.height);
      
      // Create particles
      if (frameCount % 5 === 0) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          velocityX: -1 - Math.random() * 2,
          velocityY: Math.random() * 2 - 1,
          life: 60
        });
      }
      
      // Update particles
      particles = particles.filter(particle => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        particle.life--;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.life / 60 * 0.5})`;
        ctx.fillRect(particle.x, particle.y, 2, 2);
        
        return particle.life > 0;
      });
      
      // Draw UI
      ctx.fillStyle = '#ffffff';
      ctx.font = '20px monospace';
      ctx.fillText(`SCORE: ${score}`, 20, 30);
      ctx.fillText('PRESS SPACE TO JUMP', 20, canvas.height - 20);
      
      frameCount++;
      gameSpeed += 0.001; // Gradually increase difficulty
      
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
  }, [gameState, score]);
  
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
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-8 tracking-wide">
          MINI GAME
        </h2>
        <p className="text-2xl text-white/70 mb-12 font-light">
          Take a break and enjoy this retro pixel adventure!
        </p>
        
        <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
          <canvas
            ref={canvasRef}
            className="w-full max-w-2xl mx-auto bg-gradient-to-b from-purple-900 to-purple-700 rounded-xl shadow-2xl"
            style={{ imageRendering: 'pixelated' }}
          />
          
          {gameState === 'menu' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-3xl">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-cyan-400 mb-4">PIXEL RUNNER</h3>
                <p className="text-white/80 mb-8">Use SPACE to jump over obstacles!</p>
                <button
                  onClick={startGame}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl text-white font-bold text-xl hover:scale-110 transition-transform duration-300 shadow-2xl"
                >
                  START GAME
                </button>
              </div>
            </div>
          )}
          
          {gameState === 'gameover' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-3xl">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-red-400 mb-4">GAME OVER</h3>
                <p className="text-2xl text-white mb-4">Final Score: {score}</p>
                <button
                  onClick={resetGame}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white font-bold text-xl hover:scale-110 transition-transform duration-300 shadow-2xl"
                >
                  PLAY AGAIN
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
