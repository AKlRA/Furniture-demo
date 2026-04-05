import { useState, useRef, useEffect, useCallback } from 'react';
import { products } from '../data/products';
import './ARVisualizer.css';

export default function ARVisualizer() {
  const [activeTab, setActiveTab] = useState('3d');
  const [selectedModel, setSelectedModel] = useState(0);
  const [roomState, setRoomState] = useState({
    img: null, furnImg: null, x: 150, y: 180, scale: 1
  });
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const draggingRef = useRef(false);
  const roomStateRef = useRef(roomState);
  const modelViewerRef = useRef(null);

  useEffect(() => {
    roomStateRef.current = roomState;
  }, [roomState]);

  const picks = products.slice(0, 6);
  const currentPick = picks[selectedModel] || picks[0];

  const drawRoom = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rs = roomStateRef.current;
    canvas.width = canvas.offsetWidth || 400;
    canvas.height = 300;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (rs.img) {
      ctx.drawImage(rs.img, 0, 0, canvas.width, canvas.height);
    } else {
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, '#2a1f16');
      grad.addColorStop(1, '#1a1410');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(201,169,110,0.12)';
      ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(245,240,232,0.18)';
      ctx.font = '12px Space Grotesk, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Upload a room photo to preview furniture placement', canvas.width / 2, canvas.height / 2 - 20);
    }
    if (rs.furnImg) {
      const w = 120 * rs.scale;
      const h = w * (rs.furnImg.height / rs.furnImg.width);
      ctx.drawImage(rs.furnImg, rs.x - w / 2, rs.y - h / 2, w, h);
      ctx.strokeStyle = 'rgba(201,169,110,0.5)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 3]);
      ctx.strokeRect(rs.x - w / 2 - 2, rs.y - h / 2 - 2, w + 4, h + 4);
      ctx.setLineDash([]);
    }
  }, []);

  useEffect(() => {
    drawRoom();
  }, [roomState, drawRoom]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = (e.clientX - rect.left) * (canvas.width / rect.width);
      const my = (e.clientY - rect.top) * (canvas.height / rect.height);
      const rs = roomStateRef.current;
      const w = 120 * rs.scale;
      if (Math.abs(mx - rs.x) < w / 2 + 10 && Math.abs(my - rs.y) < 50) {
        draggingRef.current = true;
      }
    };
    const handleMouseMove = (e) => {
      if (!draggingRef.current) return;
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) * (canvas.width / rect.width);
      const ny = (e.clientY - rect.top) * (canvas.height / rect.height);
      setRoomState((prev) => ({ ...prev, x: nx, y: ny }));
    };
    const handleMouseUp = () => { draggingRef.current = false; };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('touchstart', (e) => { e.preventDefault(); draggingRef.current = true; });
    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (!draggingRef.current) return;
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const nx = (touch.clientX - rect.left) * (canvas.width / rect.width);
      const ny = (touch.clientY - rect.top) * (canvas.height / rect.height);
      setRoomState((prev) => ({ ...prev, x: nx, y: ny }));
    });
    canvas.addEventListener('touchend', () => { draggingRef.current = false; });

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const loadRoomPhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => setRoomState((prev) => ({ ...prev, img }));
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };

  const selectRoomFurn = (src) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => setRoomState((prev) => ({ ...prev, furnImg: img }));
    img.src = src;
  };

  const moveFurniture = (dir) => {
    setRoomState((prev) => ({
      ...prev,
      x: dir === 'left' ? Math.max(30, prev.x - 20) : Math.min(370, prev.x + 20)
    }));
  };

  const resizeFurniture = (dir) => {
    setRoomState((prev) => ({
      ...prev,
      scale: dir === 'up' ? Math.min(3, prev.scale + 0.2) : Math.max(0.3, prev.scale - 0.2)
    }));
  };

  const clearRoom = () => {
    setRoomState({ img: null, furnImg: null, x: 150, y: 180, scale: 1 });
  };

  return (
    <section className="ar-section" id="ar-section">
      <div className="ar-inner">
        <div className="ar-content fade-up">
          <span className="section-tag">Spatial Preview</span>
          <h2 className="section-title">
            See It In <em>Your Space</em>
          </h2>
          <div className="section-line"></div>
          <p className="ar-desc">
            Before you buy, experience our furniture exactly where it will live.
            View photorealistic 3D models, or upload a photo of your room and drag furniture into it.
          </p>
          <div className="ar-features">
            <div className="ar-feature">
              <div className="ar-feature-icon">⬡</div>
              <div className="ar-feature-text">
                <strong>Interactive 3D Model</strong>
                <span>Rotate, zoom and inspect every angle of the piece</span>
              </div>
            </div>
            <div className="ar-feature">
              <div className="ar-feature-icon">📷</div>
              <div className="ar-feature-text">
                <strong>Room Photo Overlay</strong>
                <span>Upload your room photo, place and resize the furniture</span>
              </div>
            </div>
            <div className="ar-feature">
              <div className="ar-feature-icon">📱</div>
              <div className="ar-feature-text">
                <strong>Native AR on Mobile</strong>
                <span>View in real-world AR on iOS and Android</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ar-demo fade-up">
          <div className="ar-tabs">
            <button
              className={`ar-tab ${activeTab === '3d' ? 'active' : ''}`}
              onClick={() => setActiveTab('3d')}
            >
              3D Model
            </button>
            <button
              className={`ar-tab ${activeTab === 'room' ? 'active' : ''}`}
              onClick={() => setActiveTab('room')}
            >
              Room Visualizer
            </button>
          </div>

          {/* 3D Panel */}
          <div className={`ar-panel ${activeTab === '3d' ? 'active' : ''}`}>
            <p className="ar-panel-label">Interactive — drag to rotate</p>
            <div className="ar-model-info">
              <span className="ar-model-name">{currentPick.name}</span>
              <span className="ar-model-dims">{currentPick.specs?.Dimensions || ''}</span>
            </div>
            <model-viewer
              ref={modelViewerRef}
              src={currentPick.model}
              alt={`${currentPick.name} 3D Model`}
              camera-controls
              auto-rotate
              auto-rotate-delay="1000"
              rotation-per-second="20deg"
              shadow-intensity="1.2"
              shadow-softness="0.8"
              exposure="1.1"
              environment-image="neutral"
              camera-orbit={currentPick.cameraOrbit || "45deg 65deg 2.5m"}
              min-camera-orbit="auto auto auto"
              max-camera-orbit="auto auto 10m"
              interaction-prompt="auto"
              interaction-prompt-threshold="3000"
              style={{
                background: 'transparent',
                width: '100%',
                height: '380px',
              }}
              ar
              ar-modes="webxr scene-viewer quick-look"
              ar-scale="fixed"
              ar-placement="floor"
            >
              <button
                slot="ar-button"
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  padding: '0.6rem 1.2rem',
                  background: 'var(--gold)',
                  color: 'var(--charcoal)',
                  border: 'none',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                }}
              >
                📱 View in AR
              </button>
            </model-viewer>
            <div className="furniture-picker">
              {picks.map((p, i) => (
                <div
                  key={p.id}
                  className={`furn-pick ${i === selectedModel ? 'selected' : ''}`}
                  onClick={() => setSelectedModel(i)}
                  title={p.name}
                >
                  <img src={p.img} alt={p.name} crossOrigin="anonymous" />
                  <div className="furn-pick-label">{p.name.split(' ').slice(0, 2).join(' ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Room Panel */}
          <div className={`ar-panel ${activeTab === 'room' ? 'active' : ''}`}>
            <div className="upload-zone" onClick={() => fileInputRef.current?.click()}>
              <div className="icon">🏠</div>
              <p>
                Click to upload a room photo<br />
                <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>
                  JPG, PNG — your photo stays private
                </span>
              </p>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={loadRoomPhoto}
              style={{ display: 'none' }}
            />
            <div className="room-canvas-wrap">
              <canvas ref={canvasRef} width="400" height="300" />
            </div>
            <div className="canvas-toolbar">
              <button onClick={() => moveFurniture('left')}>← Move</button>
              <button onClick={() => moveFurniture('right')}>Move →</button>
              <button onClick={() => resizeFurniture('up')}>+ Size</button>
              <button onClick={() => resizeFurniture('down')}>− Size</button>
              <button onClick={clearRoom}>Reset</button>
            </div>
            <div className="furniture-picker">
              {picks.map((p) => (
                <div
                  key={p.id}
                  className="furn-pick"
                  onClick={() => selectRoomFurn(p.img)}
                  title={p.name}
                >
                  <img src={p.img} alt={p.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
