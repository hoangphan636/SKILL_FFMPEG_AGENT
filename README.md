# Titan Enterprise FFmpeg Media Agent & 90+ Engine Suite (Windows)

Project FFmpeg AI Agent Skill dùng chung cho **Codex** và **Antigravity**, chạy trên Windows với TypeScript/Node.js, được trang bị **90+ tính năng & 84 hiệu ứng điện ảnh Hollywood** giúp AI Agent tự động xử lý toàn diện các tác vụ media, đo kiểm chất lượng VMAF/SSIM, chống rung, phát trực tuyến HLS, AI Vision Face Tracking và hậu kỳ chuyên nghiệp.

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
│           └── SKILL.md                       # Định nghĩa Skill 90+ tính năng cho Codex & Antigravity
├── src/
│   ├── types.ts                               # Zod schemas & types
│   ├── validator.ts                           # Rào chắn an toàn, chống ghi đè
│   ├── inspector.ts                           # Thăm dò ffprobe metadata
│   ├── executor.ts                            # FFmpeg spawn engine & retry fallback
│   ├── batch.ts                               # Bộ thực thi xử lý hàng loạt
│   ├── doctor.ts                              # Kiểm tra môi trường Node.js & FFmpeg
│   ├── cli.ts                                 # CLI hợp nhất toàn bộ 90+ tính năng
│   ├── index.ts                               # Module exports
│   ├── titan/
│   │   ├── suite.ts                           # Timecode burn, Deshake, SSIM/PSNR, De-esser, Spritesheet...
│   │   └── index.ts                           # Exports titan suite
│   ├── cinema/
│   │   ├── studio.ts                          # HLS, HDR Tone-mapping, Scene detect, Vocals split...
│   │   └── index.ts                           # Exports cinema studio
│   ├── advanced/
│   │   ├── engine.ts                          # Nén dung lượng, EBU R128, Smart Crop, Watermark...
│   │   └── index.ts                           # Exports advanced engine
│   ├── effects/
│   │   ├── schema.ts                          # Schema effect
│   │   ├── registry.ts                        # 84 hiệu ứng cấu hình sẵn
│   │   ├── extended.ts                        # Danh mục hiệu ứng mở rộng
│   │   ├── cinema.ts                          # Danh mục hiệu ứng điện ảnh Hollywood
│   │   ├── titan.ts                           # Danh mục hiệu ứng Titan (Matrix, Tilt-shift, Noir...)
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

## 🚀 90+ Tính Năng Chuẩn Doanh Nghiệp (Titan Enterprise Suite)

### 1. In Timecode SMPTE / LTC chuyên dụng (`burn-timecode`)
```powershell
node dist/cli.js burn-timecode "samples\demo_video.mp4" "work\timecode.mp4" --timecode "01:00:00:00"
```

### 2. Chống rung video Deshake (`stabilize`)
```powershell
node dist/cli.js stabilize "samples\demo_video.mp4" "work\stabilized.mp4"
```

### 3. Đánh giá chất lượng cảm thụ VMAF / SSIM / PSNR (`benchmark-quality`)
```powershell
node dist/cli.js benchmark-quality "samples\demo_video.mp4" "work\demo_converted.mp4"
```

### 4. Thanh tiêu đề Lower-Third hoạt họa (`animated-lower-third`)
```powershell
node dist/cli.js animated-lower-third "samples\demo_video.mp4" "Hoang Apex" "Lead Systems Architect" "work\intro.mp4"
```

### 5. Bộ giới hạn Brickwall Limiter chống vỡ âm (`limit-audio`)
```powershell
node dist/cli.js limit-audio "samples\demo_video.mp4" "work\limited_audio.mp4"
```

### 6. Khử siêu dữ liệu nhạy cảm Exif/GPS (`sanitize`)
```powershell
node dist/cli.js sanitize "samples\demo_video.mp4" "work\sanitized.mp4"
```

### 7. Tạo Sprite Sheet xem trước khi tua VTT (`spritesheet`)
```powershell
node dist/cli.js spritesheet "samples\demo_video.mp4" "work\spritesheet.png" --interval 1
```

### 8. Chuyển video dọc sang 16:9 với nền mờ động (`pillarbox-blur`)
```powershell
node dist/cli.js pillarbox-blur "samples\demo_video.mp4" "work\pillarbox_blur.mp4"
```

### 9. Lọc xì và khử ồn giọng nói (`clean-speech`)
```powershell
node dist/cli.js clean-speech "samples\demo_video.mp4" "work\cleaned_speech.mp4"
```

### 10. Đóng gói luồng phát HLS Adaptive Streaming (`package-hls`)
```powershell
node dist/cli.js package-hls "samples\demo_video.mp4" "work\hls_stream" --segment-duration 3
```

### 11. Tách giọng hát Vocals & Nhạc nền BGM (`isolate-vocals`)
```powershell
node dist/cli.js isolate-vocals "samples\demo_video.mp4" "work\vocals.mp3" "work\bgm.mp3"
```

### 12. Phát hiện chuyển cảnh AI (`detect-scenes`)
```powershell
node dist/cli.js detect-scenes "samples\demo_video.mp4" --threshold 0.35
```

### 13. Nén video theo dung lượng chính xác (Target-Size Compressor)
```powershell
node dist/cli.js compress-target-size "samples\demo_video.mp4" "work\target_15mb.mp4" --size-mb 15
```

### 14. Chuẩn hóa âm lượng EBU R128 (-16 LUFS)
```powershell
node dist/cli.js normalize-audio "samples\demo_video.mp4" "work\lufs_normalized.mp4" --target -16
```

### 15. Đốt phụ đề cứng vĩnh viễn (Hardcoded Subtitles Burn-in)
```powershell
node dist/cli.js burn-subtitles "samples\demo_video.mp4" "samples\demo_captions.srt" "work\burned_subs.mp4"
```

### 16. Cắt thông minh sang 9:16 dọc (TikTok / Shorts / Reels)
```powershell
node dist/cli.js smart-crop-916 "samples\demo_video.mp4" "work\tiktok_916.mp4"
```

### 17. AI Face Tracking & AR Bridge
- Trích xuất dữ liệu di chuyển khuôn mặt ra file JSON:
  ```powershell
  node dist/cli.js track-face "samples\demo_video.mp4" "work\face_track.json"
  ```
- Gắn AR Sticker bám dính chuyển động đầu thời gian thực:
  ```powershell
  node dist/cli.js apply-effect ar_3d_headwear_sticker "samples\demo_video.mp4" "work\ar_headwear.mp4" --track "work\face_track.json"
  ```

---

## 🎨 Kho 84 Hiệu Ứng Điện Ảnh Hollywood

Tra cứu danh sách:
```powershell
node dist/cli.js effects
```

Áp dụng hiệu ứng:
```powershell
# Matrix Cyber Green Dystopia
node dist/cli.js apply-effect matrix_code_rain_green "samples\demo_video.mp4" "work\matrix.mp4"

# Tilt-Shift Miniature Model World (Thành phố đồ chơi)
node dist/cli.js apply-effect tilt_shift_miniature "samples\demo_video.mp4" "work\miniature.mp4"

# Wong Kar-Wai 12fps Step-Printing Smear (Vương Gia Vệ)
node dist/cli.js apply-effect wong_kar_wai_slow_shutter "samples\demo_video.mp4" "work\wong_kar_wai.mp4"

# Kodak 500T Halation đỏ rực quầng sáng điện ảnh
node dist/cli.js apply-effect film_halation_red "samples\demo_video.mp4" "work\halation.mp4"

# Hitchcock Vertigo Dolly Zoom
node dist/cli.js apply-effect vertigo_dolly_zoom "samples\demo_video.mp4" "work\vertigo.mp4"

# Âm thanh 8D Spatial Binaural xoay vòng 360 độ quanh đầu
node dist/cli.js apply-effect audio_8d_spatial_orbit "samples\demo_video.mp4" "work\8d_audio.mp4"
```
