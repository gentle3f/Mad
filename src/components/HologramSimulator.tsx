import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Sparkles, ContactShadows, Grid } from '@react-three/drei';
import * as THREE from 'three';
import { Power, Settings2, RefreshCw, Upload, X } from 'lucide-react';

function CustomImage({ url, opacity }: { url: string; opacity: number }) {
  const texture = useLoader(THREE.TextureLoader, url);
  const aspect = texture.image ? texture.image.width / texture.image.height : 1;
  
  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh position={[0, 0, 0.4]} scale={2.5}>
        <planeGeometry args={[aspect, 1]} />
        <meshBasicMaterial 
          map={texture} 
          transparent 
          opacity={opacity * 0.9} 
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

function FanBlades({ speed }: { speed: number }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z -= speed * delta;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 4 Blades - Made lighter to be visible */}
      <mesh position={[0, 0, -0.1]}>
        <boxGeometry args={[0.1, 4.5, 0.02]} />
        <meshStandardMaterial color="#444" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0, -0.1]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.1, 4.5, 0.02]} />
        <meshStandardMaterial color="#444" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* LED Strips on blades */}
      <mesh position={[0, 0, -0.09]}>
        <boxGeometry args={[0.02, 4.4, 0.01]} />
        <meshBasicMaterial color="#111" />
      </mesh>
      <mesh position={[0, 0, -0.09]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.02, 4.4, 0.01]} />
        <meshBasicMaterial color="#111" />
      </mesh>

      {/* Center hub */}
      <mesh position={[0, 0, -0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.15, 32]} />
        <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Hub highlight */}
      <mesh position={[0, 0, -0.02]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.16, 32]} />
        <meshStandardMaterial color="#666" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

function HologramObject({ speed, modelType, color, uploadedImage }: { speed: number; modelType: string; color: string; uploadedImage: string | null }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  // Visibility based on speed (fan needs to be fast enough to show hologram)
  const opacity = Math.min(1, Math.max(0, (speed - 10) / 15));
  const isVisible = opacity > 0.01;

  // Add a slight flicker effect when not fully up to speed
  const flicker = speed > 10 && speed < 24 ? Math.random() * 0.5 + 0.5 : 1;
  const finalOpacity = opacity * flicker;

  return (
    <group>
      {isVisible && (
        <>
          {modelType === 'custom' && uploadedImage ? (
            <Suspense fallback={null}>
              <CustomImage url={uploadedImage} opacity={finalOpacity} />
            </Suspense>
          ) : (
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
              <mesh ref={meshRef} position={[0, 0, 0.3]} scale={1.2}>
                {modelType === 'torus' && <torusKnotGeometry args={[0.7, 0.2, 128, 32]} />}
                {modelType === 'cube' && <boxGeometry args={[1.2, 1.2, 1.2]} />}
                {modelType === 'sphere' && <icosahedronGeometry args={[1, 2]} />}
                
                <meshStandardMaterial 
                  color={color} 
                  emissive={color}
                  emissiveIntensity={2}
                  transparent
                  opacity={finalOpacity * 0.8}
                  wireframe={modelType !== 'sphere'}
                  wireframeLinewidth={2}
                />
              </mesh>
              
              <Sparkles 
                count={150} 
                scale={3} 
                size={2} 
                speed={0.4} 
                opacity={finalOpacity} 
                color={color} 
              />
            </Float>
          )}
        </>
      )}
    </group>
  );
}

function Scene({ isOn, modelType, color, uploadedImage, onSpeedChange }: { isOn: boolean; modelType: string; color: string; uploadedImage: string | null; onSpeedChange: (speed: number) => void }) {
  const [speed, setSpeed] = useState(0);

  // Animate speed
  useFrame((state, delta) => {
    const targetSpeed = isOn ? 30 : 0;
    // Accelerate slower than decelerate
    const lerpFactor = isOn ? delta * 1.5 : delta * 3;
    const newSpeed = THREE.MathUtils.lerp(speed, targetSpeed, lerpFactor);
    setSpeed(newSpeed);
    
    // Report speed back to UI occasionally to avoid too many re-renders
    if (Math.abs(newSpeed - speed) > 0.1) {
      onSpeedChange(newSpeed);
    }
  });

  return (
    <>
      {/* Increased lighting to make the fan visible */}
      <ambientLight intensity={1.5} />
      <pointLight position={[5, 5, 5]} intensity={3} />
      <spotLight position={[0, 0, 5]} intensity={4} color={color} angle={0.8} penumbra={1} />
      
      <FanBlades speed={speed} />
      <HologramObject speed={speed} modelType={modelType} color={color} uploadedImage={uploadedImage} />
      
      {/* Wall behind the fan - lighter dark gray to contrast with black fan */}
      <mesh position={[0, 0, -1.5]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </mesh>
      
      {/* Grid to give depth and context */}
      <Grid position={[0, 0, -1.4]} args={[20, 20]} cellColor="#333" sectionColor="#444" fadeDistance={15} />
      
      <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2} far={4} color={color} />
      
      <OrbitControls 
        enableZoom={false} 
        autoRotate={false} 
        maxPolarAngle={Math.PI / 2 + 0.2}
        minPolarAngle={Math.PI / 2 - 0.2}
        maxAzimuthAngle={0.5}
        minAzimuthAngle={-0.5}
      />
      <Environment preset="city" />
    </>
  );
}

export default function HologramSimulator() {
  const [isOn, setIsOn] = useState(false);
  const [speed, setSpeed] = useState(0);
  const [modelType, setModelType] = useState('torus');
  const [color, setColor] = useState('#00ffcc');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const rpm = Math.round(speed * 30); // Rough conversion to RPM for display

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedImage(url);
      setModelType('custom');
      setIsOn(true); // Auto turn on to see the effect
    }
  };

  const clearImage = () => {
    setUploadedImage(null);
    if (modelType === 'custom') setModelType('torus');
  };

  return (
    <div className="w-full bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden flex flex-col lg:flex-row shadow-2xl">
      {/* 3D Canvas Area */}
      <div className="relative h-[400px] lg:h-[600px] flex-1 bg-black cursor-move">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <Scene 
            isOn={isOn} 
            modelType={modelType} 
            color={color} 
            uploadedImage={uploadedImage}
            onSpeedChange={setSpeed} 
          />
        </Canvas>
        
        {/* Status Overlay */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-2 border ${isOn ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-red-500/20 text-red-400 border-red-500/30'}`}>
            <div className={`w-2 h-2 rounded-full ${isOn ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
            {isOn ? '系統運作中' : '系統待機'}
          </div>
          <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/70 text-xs font-mono">
            轉速: {rpm.toString().padStart(4, '0')} RPM
          </div>
        </div>
        
        <div className="absolute bottom-4 right-4 text-white/30 text-xs flex items-center gap-1 bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm">
          <RefreshCw size={12} /> 拖曳以旋轉視角
        </div>
      </div>
      
      {/* Control Panel */}
      <div className="w-full lg:w-80 bg-[#111] border-l border-white/5 p-6 flex flex-col gap-8">
        <div>
          <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-1">
            <Settings2 size={20} className="text-pink-500" />
            模擬器控制台
          </h3>
          <p className="text-gray-400 text-sm">設定 3D 全息風扇參數。</p>
        </div>
        
        {/* Power Button */}
        <div className="flex flex-col items-center justify-center p-6 bg-black/30 rounded-xl border border-white/5">
          <button 
            onClick={() => setIsOn(!isOn)}
            className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
              isOn 
                ? 'bg-gradient-to-br from-red-500 to-red-700 shadow-red-500/20 border-2 border-red-400/50' 
                : 'bg-gradient-to-br from-green-500 to-green-700 shadow-green-500/20 border-2 border-green-400/50'
            }`}
          >
            <Power size={32} className={`text-white ${isOn ? 'animate-pulse' : ''}`} />
          </button>
          <span className="text-white/70 font-medium mt-4 tracking-widest text-sm">
            {isOn ? '關閉電源' : '啟動電源'}
          </span>
        </div>
        
        {/* Model Selection */}
        <div className="space-y-3">
          <label className="text-gray-400 text-sm font-medium uppercase tracking-wider">全息模型</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'torus', name: '圓環' },
              { id: 'cube', name: '方塊' },
              { id: 'sphere', name: '球體' }
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setModelType(type.id)}
                className={`py-2 px-1 rounded-lg text-xs font-medium transition-colors border ${
                  modelType === type.id 
                    ? 'bg-purple-500/20 text-purple-300 border-purple-500/50' 
                    : 'bg-black/40 text-gray-400 border-white/5 hover:bg-white/5'
                }`}
              >
                {type.name}
              </button>
            ))}
            {uploadedImage && (
              <button
                onClick={() => setModelType('custom')}
                className={`col-span-3 py-2 px-1 rounded-lg text-xs font-medium transition-colors border ${
                  modelType === 'custom' 
                    ? 'bg-purple-500/20 text-purple-300 border-purple-500/50' 
                    : 'bg-black/40 text-gray-400 border-white/5 hover:bg-white/5'
                }`}
              >
                自訂上傳
              </button>
            )}
          </div>
        </div>

        {/* Custom Image Upload */}
        <div className="space-y-3">
          <label className="text-gray-400 text-sm font-medium uppercase tracking-wider flex justify-between items-center">
            <span>自訂圖片</span>
            <span className="text-[10px] text-gray-500 normal-case">黑色背景效果最佳</span>
          </label>
          {uploadedImage ? (
            <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-2">
              <div className="flex items-center gap-3 overflow-hidden">
                <img src={uploadedImage} alt="Uploaded" className="w-10 h-10 object-cover rounded bg-black border border-white/10" />
                <span className="text-xs text-gray-300 truncate">圖片已載入</span>
              </div>
              <button onClick={clearImage} className="p-2 hover:bg-white/10 rounded-md text-gray-400 hover:text-white transition-colors" title="移除圖片">
                <X size={16} />
              </button>
            </div>
          ) : (
            <label className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 border-dashed rounded-lg cursor-pointer transition-colors text-sm text-gray-300">
              <Upload size={16} />
              <span>上傳圖片</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </label>
          )}
        </div>
        
        {/* Color Selection */}
        <div className="space-y-3">
          <label className="text-gray-400 text-sm font-medium uppercase tracking-wider">環境燈光</label>
          <div className="flex gap-3">
            {[
              { name: '青色', hex: '#00ffcc' },
              { name: '粉紅', hex: '#ff00ff' },
              { name: '紫色', hex: '#8a2be2' },
              { name: '金色', hex: '#ffd700' },
              { name: '紅色', hex: '#ff3333' }
            ].map((c) => (
              <button
                key={c.hex}
                onClick={() => setColor(c.hex)}
                className={`w-8 h-8 rounded-full transition-transform ${color === c.hex ? 'scale-125 ring-2 ring-white/50 ring-offset-2 ring-offset-[#111]' : 'hover:scale-110'}`}
                style={{ backgroundColor: c.hex, boxShadow: color === c.hex ? `0 0 10px ${c.hex}` : 'none' }}
                title={c.name}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-auto pt-6 border-t border-white/5">
          <p className="text-xs text-gray-500 leading-relaxed">
            這是一個即時 3D 模擬。在現實中，風扇以高速旋轉（高達 800 RPM）產生視覺暫留，使 LED 燈看起來像懸浮在半空中的實體 3D 物件。
          </p>
        </div>
      </div>
    </div>
  );
}
