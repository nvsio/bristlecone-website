"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

export default function AmbientConsole() {
  const [enabled, setEnabled] = useState(false);
  const [volume, setVolume] = useState(0.18);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const nodesRef = useRef<{ o: OscillatorNode; g: GainNode }[]>([]);

  useEffect(() => {
    return () => {
      nodesRef.current.forEach(({ o, g }) => {
        try { o.stop(); } catch {}
        o.disconnect(); g.disconnect();
      });
      nodesRef.current = [];
      if (ctxRef.current) ctxRef.current.close();
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      if (gainRef.current) gainRef.current.gain.linearRampToValueAtTime(0, (ctxRef.current as AudioContext).currentTime + 0.6);
      setTimeout(() => {
        nodesRef.current.forEach(({ o, g }) => { try { o.stop(); } catch {}; o.disconnect(); g.disconnect(); });
        nodesRef.current = [];
      }, 650);
      return;
    }

    const AudioContextCtor = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextCtor) return;
    const ctx = new AudioContextCtor();
    ctxRef.current = ctx;
    const master = ctx.createGain();
    master.connect(ctx.destination);
    gainRef.current = master;

    const partials = [
      { f: 132.0, a: 0.24 },
      { f: 198.0, a: 0.18 },
      { f: 261.6, a: 0.10 },
      { f: 311.1, a: 0.08 },
    ];

    partials.forEach(({ f, a }) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      // Slow random drift
      const drift = (t: number) => f + Math.sin(t * 0.07 + f) * 0.8 + (Math.random() - 0.5) * 0.12;
      let start = ctx.currentTime;
      const update = () => {
        const now = ctx.currentTime;
        const freq = drift(now - start);
        o.frequency.setValueAtTime(freq, now);
        if (ctx.state !== "closed" && nodesRef.current.length) requestAnimationFrame(update);
      };
      update();

      o.connect(g);
      g.connect(master);
      g.gain.value = a * volume;
      o.start();
      nodesRef.current.push({ o, g });
    });

    master.gain.setValueAtTime(0, ctx.currentTime);
    master.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.8);
  }, [enabled]);

  useEffect(() => {
    if (!gainRef.current) return;
    gainRef.current.gain.linearRampToValueAtTime(volume, (ctxRef.current as AudioContext).currentTime + 0.2);
  }, [volume]);

  return (
    <div className="pointer-events-auto mx-auto mt-2 flex w-fit items-center gap-3 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 shadow-sm backdrop-blur">
      <button
        className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[12px] text-neutral-700 transition-colors hover:bg-white"
        onClick={() => setEnabled((v) => !v)}
        aria-pressed={enabled}
      >
        {enabled ? "pause ambient" : "play ambient"}
      </button>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        aria-label="volume"
        className="h-2 w-24 cursor-pointer accent-black/50"
      />
    </div>
  );
}
