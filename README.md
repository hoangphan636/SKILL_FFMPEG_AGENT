<div align="center">

  <img src="assets/banner.png" alt="FFmpeg AI Agent Banner" width="100%" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0, 242, 254, 0.3);" />

  <br/><br/>

  <img src="assets/logo.png" alt="FFmpeg AI Agent 3D Logo" width="160" height="160" style="border-radius: 24px; filter: drop-shadow(0 10px 25px rgba(0, 242, 254, 0.5));" />

  # 🎬 Apex Studio Enterprise FFmpeg Media Agent
  ### 🔮 60+ Engine Suite & 64 Cinema Effects for Windows & AI Agents

  <p align="center">
    <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-20%2B_LTS-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.6_ES2022-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://ffmpeg.org/"><img src="https://img.shields.io/badge/FFmpeg-9.0.1_Gyan-007808?style=for-the-badge&logo=ffmpeg&logoColor=white" alt="FFmpeg" /></a>
    <a href="https://vitest.dev/"><img src="https://img.shields.io/badge/Vitest-Passing-FCC72B?style=for-the-badge&logo=vitest&logoColor=black" alt="Vitest" /></a>
    <a href="https://github.com/"><img src="https://img.shields.io/badge/Windows-11%20%7C%2010%20Native-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="Windows" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-blueviolet?style=for-the-badge" alt="License" /></a>
  </p>

  <img src="assets/audio-visualizer.svg" alt="Animated Visualizer" width="100%" />

  <br/>

  <img src="assets/terminal-animation.svg" alt="Interactive CLI Terminal" width="100%" />

</div>

---

## ⚡ 1. Khởi Động 1 Chạm (Auto-Bootstrap)

Tự động nạp `PATH`, cài Node.js LTS, FFmpeg 9.0.1 và biên dịch dự án:

<table>
<tr>
<th width="50%">🔹 Command Prompt (Khuyến nghị CMD)</th>
<th width="50%">🔹 PowerShell</th>
</tr>
<tr>
<td>

```cmd
cmd.exe /c bootstrap.cmd
```

</td>
<td>

```powershell
.\bootstrap.ps1
```

</td>
</tr>
</table>

---

## 📁 Cấu Trúc Dự Án

```text
SKILL_FFMPEG_AGENT/
├── README.md                                  # Hướng dẫn chi tiết
├── bootstrap.cmd                              # Tự động nạp PATH, cài Node/FFmpeg, build với 1 click
├── bootstrap.ps1                              # Auto-bootstrap PowerShell
├── package.json                               # Dependencies & scripts
├── tsconfig.json                              # TypeScript ES2022 / NodeNext
├── batch.example.json                         # Mẫu batch manifest
├── batch_effects.json                         # Mẫu batch hiệu ứng
├── assets/                                    # 3D Banner, Logo, Animated Visualizer & Terminal
├── .agents/skills/ffmpeg-media-agent/SKILL.md # Định nghĩa Skill 60+ tính năng cho Codex & Antigravity
├── src/
│   ├── types.ts                               # Zod schemas & types
│   ├── validator.ts                           # Rào chắn an toàn, chống ghi đè
│   ├── inspector.ts                           # Thăm dò ffprobe metadata
│   ├── executor.ts                            # FFmpeg spawn engine & retry fallback
│   ├── batch.ts                               # Bộ thực thi xử lý hàng loạt
│   ├── doctor.ts                              # Kiểm tra môi trường Node.js & FFmpeg
│   ├── cli.ts                                 # CLI hợp nhất toàn bộ 60+ tính năng
│   ├── index.ts                               # Module exports
│   ├── cinema/studio.ts                       # HLS, HDR Tone-mapping, Scene detect, Vocals split...
│   ├── advanced/engine.ts                     # Nén dung lượng, EBU R128, Smart Crop, Watermark...
│   ├── effects/                               # 64 hiệu ứng điện ảnh Hollywood
│   └── tracking/                              # AI Vision Face Tracking & AR Bridge
├── tests/validation.test.ts                   # Unit tests Vitest
├── samples/                                   # File media mẫu đầu vào & AR sticker assets
└── work/                                      # Thư mục đích chứa output (đã .gitignore)
```

---

## 🚀 60+ Tính Năng Nâng Cao Chuẩn Studio

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

### 5. Căn chỉnh tỷ lệ khung hình Letterbox/Pillarbox (`conform-aspect`)
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

Tra cứu danh sách 64 hiệu ứng:
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

---

## 🛡️ Rào Chắn An Toàn (Guard Rails)

<table>
<tr>
<td width="33%" align="center">
  <h3>🚫 Zero Overwrite</h3>
  <p>Chống ghi đè file gốc tuyệt đối.<br/><b><code>input !== output</code></b></p>
</td>
<td width="33%" align="center">
  <h3>🔒 Anti-Injection</h3>
  <p>Truyền tham số dạng mảng rời rạc qua <code>execFile</code>.</p>
</td>
<td width="33%" align="center">
  <h3>🔄 Smart Fallback</h3>
  <p>Tự động chuyển <b><code>pix_fmt yuv420p</code></b> khi lỗi Profile.</p>
</td>
</tr>
</table>

---

## 🤖 Kích Hoạt Trong Codex & Antigravity

- Skill được khai báo chuẩn hóa tại:
  `[.agents/skills/ffmpeg-media-agent/SKILL.md](file:///.agents/skills/ffmpeg-media-agent/SKILL.md)`
- Agent sẽ tự động nhận diện và nạp skill khi người dùng yêu cầu xử lý video/audio/effects.

<div align="center">
  <sub>⚡ Ultra-Fast &bull; 🛡️ Safe &bull; 🤖 AI-Agent Ready &bull; 64 Hollywood Effects</sub>
</div>
