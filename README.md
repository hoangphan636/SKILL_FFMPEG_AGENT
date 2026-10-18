# Apex Studio Enterprise FFmpeg Media Agent & 60+ Engine Suite (Windows)

Project FFmpeg AI Agent Skill dùng chung cho **Codex** và **Antigravity**, chạy trên Windows với TypeScript/Node.js, được trang bị **60+ tính năng & 64 hiệu ứng chuyên sâu chuẩn công nghiệp** giúp AI Agent tự động xử lý mọi tác vụ media, streaming, AI vision tracking và hậu kỳ điện ảnh.

## 📁 Cấu Trúc Dự Án

```text
SKILL_FFMPEG_AGENT/
├── README.md                                  # Hướng dẫn chi tiết
├── bootstrap.cmd                              # Tự động nạp PATH, cài Node/FFmpeg, build với 1 click
├── package.json                               # Dependencies & scripts
├── tsconfig.json                              # TypeScript ES2022 / NodeNext
├── batch.example.json                         # Mẫu batch manifest
├── batch_effects.json                         # Mẫu batch hiệu ứng
├── .agents/
│   └── skills/
│       └── ffmpeg-media-agent/
│           └── SKILL.md                       # Định nghĩa Skill 60+ tính năng cho Codex & Antigravity
├── src/
│   ├── types.ts                               # Zod schemas & types
│   ├── validator.ts                           # Rào chắn an toàn, chống ghi đè
│   ├── inspector.ts                           # Thăm dò ffprobe metadata
│   ├── executor.ts                            # FFmpeg spawn engine & retry fallback
│   ├── batch.ts                               # Bộ thực thi xử lý hàng loạt
│   ├── doctor.ts                              # Kiểm tra môi trường Node.js & FFmpeg
│   ├── cli.ts                                 # CLI hợp nhất toàn bộ 60+ tính năng
│   ├── index.ts                               # Module exports
│   ├── cinema/
│   │   ├── studio.ts                          # HLS, HDR Tone-mapping, Scene detect, Vocals split...
│   │   └── index.ts                           # Exports cinema studio
│   ├── advanced/
│   │   ├── engine.ts                          # Nén dung lượng, EBU R128, Smart Crop, Watermark...
│   │   └── index.ts                           # Exports advanced engine
│   ├── effects/
│   │   ├── schema.ts                          # Schema effect
│   │   ├── registry.ts                        # 64 hiệu ứng cấu hình sẵn
│   │   ├── extended.ts                        # Danh mục hiệu ứng mở rộng
│   │   ├── cinema.ts                          # Danh mục hiệu ứng điện ảnh Hollywood
│   │   ├── engine.ts                          # EffectEngine thực thi filter graph
│   │   └── index.ts                           # Exports effects
│   └── tracking/
│       ├── types.ts                           # Schema tọa độ tracking khuôn mặt
│       ├── tracker.ts                         # Trích xuất và nội suy biểu thức overlay
│       └── index.ts                           # Exports tracking
├── tests/
│   └── validation.test.ts                     # Unit tests Vitest
├── samples/                                   # File media mẫu đầu vào & AR sticker assets
└── work/                                      # Thư mục đích chứa output
```

## ⚡ Khởi Động Tự Động 1 Chạm (Auto-Bootstrap)

Mọi AI Agent chỉ cần chạy:
```cmd
cmd.exe /c bootstrap.cmd
```

---

## 🚀 60+ Tính Năng Nâng Cao Hàng Đầu Thị Trường

### 1. Đóng gói luồng HLS Adaptive Streaming (`package-hls`)
```powershell
node dist/cli.js package-hls "samples\demo_video.mp4" "work\hls_stream" --segment-duration 3
```

### 2. Phát hiện chuyển cảnh tự động bằng AI (`detect-scenes`)
```powershell
node dist/cli.js detect-scenes "samples\demo_video.mp4" --threshold 0.35
```

### 3. Tạo bảng phân cảnh Storyboard Grid (`contact-sheet`)
```powershell
node dist/cli.js contact-sheet "samples\demo_video.mp4" "work\storyboard.jpg" --cols 4 --rows 3
```

### 4. Tách riêng lời thoại Vocals & Nhạc nền BGM (`isolate-vocals`)
```powershell
node dist/cli.js isolate-vocals "samples\demo_video.mp4" "work\vocals.mp3" "work\bgm.mp3"
```

### 5. Căn chỉnh tỷ lệ khung hình phát sóng Letterbox/Pillarbox (`conform-aspect`)
```powershell
node dist/cli.js conform-aspect "samples\demo_video.mp4" "work\square_1x1.mp4" --ratio 1:1
```

### 6. Nén video theo dung lượng chính xác (Target-Size Compressor)
```powershell
node dist/cli.js compress-target-size "samples\demo_video.mp4" "work\target_15mb.mp4" --size-mb 15
```

### 7. Tự dò tìm GPU tăng tốc phần cứng (Hardware Acceleration)
```powershell
node dist/cli.js detect-hw
# -> Quét cuda, vaapi, dxva2, qsv, d3d11va, d3d12va, amf
```

### 8. Chuẩn hóa âm lượng EBU R128 (-16 LUFS)
```powershell
node dist/cli.js normalize-audio "samples\demo_video.mp4" "work\lufs_normalized.mp4" --target -16
```

### 9. Đốt phụ đề cứng vĩnh viễn (Hardcoded Subtitles Burn-in)
```powershell
node dist/cli.js burn-subtitles "samples\demo_video.mp4" "samples\demo_captions.srt" "work\burned_subs.mp4"
```

### 10. Cắt thông minh sang 9:16 dọc (TikTok / Shorts / Reels)
```powershell
node dist/cli.js smart-crop-916 "samples\demo_video.mp4" "work\tiktok_916.mp4"
```

### 11. Tạo ảnh động GIF tối ưu màu 2-pass (Lanczos PaletteGen)
```powershell
node dist/cli.js create-gif "samples\demo_video.mp4" "work\output.gif" --fps 15 --width 480 --duration 00:00:03
```

### 12. Tạo video sóng âm thanh Visualizer
```powershell
node dist/cli.js visualizer "work\demo_audio.mp3" "work\visualizer.mp4" --mode waves
```

### 13. Đóng dấu Watermark / Logo thương hiệu
```powershell
node dist/cli.js watermark "samples\demo_video.mp4" "samples\ar_sticker_ears.png" "work\watermarked.mp4" --position bottom-right --opacity 0.85
```

### 14. Tự động kiểm định chất lượng (QC Black Frame & Silence Detector)
```powershell
node dist/cli.js detect-qc "samples\demo_video.mp4"
```

### 15. Nối ghép video không mất chất lượng (Lossless Fast Concat)
```powershell
node dist/cli.js concat "work\merged.mp4" "clip1.mp4" "clip2.mp4"
```

### 16. AI Face Tracking & AR Bridge
- Trích xuất dữ liệu di chuyển khuôn mặt ra file JSON:
  ```powershell
  node dist/cli.js track-face "samples\demo_video.mp4" "work\face_track.json"
  ```
- Gắn AR Sticker bám dính chuyển động đầu thời gian thực:
  ```powershell
  node dist/cli.js apply-effect ar_3d_headwear_sticker "samples\demo_video.mp4" "work\ar_headwear.mp4" --track "work\face_track.json"
  ```

---

## 🎨 Kho 64 Hiệu Ứng Điện Ảnh Hollywood

Tra cứu danh sách:
```powershell
node dist/cli.js effects
```

Áp dụng hiệu ứng:
```powershell
# Kodak 500T Halation đỏ rực quầng sáng điện ảnh
node dist/cli.js apply-effect film_halation_red "samples\demo_video.mp4" "work\halation.mp4"

# Hitchcock Vertigo Dolly Zoom
node dist/cli.js apply-effect vertigo_dolly_zoom "samples\demo_video.mp4" "work\vertigo.mp4"

# Âm thanh 8D Spatial Binaural xoay vòng 360 độ quanh đầu
node dist/cli.js apply-effect audio_8d_spatial_orbit "samples\demo_video.mp4" "work\8d_audio.mp4"

# Màu Hollywood Teal & Orange
node dist/cli.js apply-effect cinematic_teal_orange "samples\demo_video.mp4" "work\teal_orange.mp4"
```
