<div align="center">

  <img src="assets/banner.png" alt="FFmpeg AI Agent Banner" width="100%" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0, 242, 254, 0.3);" />

  <br/><br/>

  <img src="assets/logo.png" alt="FFmpeg AI Agent 3D Logo" width="160" height="160" style="border-radius: 24px; filter: drop-shadow(0 10px 25px rgba(0, 242, 254, 0.5));" />

  # 🎬 FFmpeg AI Agent & Media Engine
  ### 🔮 Autonomous Media Processing Skill for Windows & AI Agents

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

## ⚡ 1. Kích Hoạt 1-Click (Zero Setup)

Tự động cài đặt **Node.js LTS**, **FFmpeg**, tự nạp **`PATH`** và biên dịch dự án:

<table>
<tr>
<th width="50%">🔹 PowerShell (Khuyến nghị)</th>
<th width="50%">🔹 Command Prompt (CMD)</th>
</tr>
<tr>
<td>

```powershell
.\bootstrap.ps1
```

</td>
<td>

```cmd
bootstrap.cmd
```

</td>
</tr>
</table>

---

## 🎯 2. Bảng Tra Cứu Lệnh CLI (Cheat Sheet)

Chạy trực tiếp với `node dist/cli.js <lệnh>`:

| Tác Vụ | Lệnh Thực Thi | Mục Đích |
| :--- | :--- | :--- |
| 🔍 **Thông tin** | `node dist/cli.js info "samples\clip.mp4"` | Xem stream, codec, bitrate, fps |
| 🔄 **Chuyển đổi** | `node dist/cli.js convert "samples\clip.mov" "work\out.mp4" --crf 23` | Nén/chuẩn hóa H.264 & AAC |
| ✂️ **Cắt video** | `node dist/cli.js trim "samples\clip.mp4" "work\trim.mp4" --start 00:00:02 --duration 00:00:05` | Cắt video chính xác mili-giây |
| 🎵 **Tách âm** | `node dist/cli.js extract-audio "samples\clip.mp4" "work\audio.mp3" --bitrate 192k` | Trích xuất audio MP3/AAC |
| 🖼️ **Thumbnail** | `node dist/cli.js thumbnail "samples\clip.mp4" "work\thumb.jpg" --at 00:00:02` | Chụp khung hình tại mốc giây |
| 💬 **Phụ đề** | `node dist/cli.js mux-subs "samples\clip.mp4" "work\sub.mkv" --subtitles "sub.srt"` | Ghép phụ đề rời (Soft Subs) |
| 📦 **Hàng loạt** | `node dist/cli.js batch "batch.example.json"` | Chạy chuỗi tác vụ từ JSON |

---

## 🛡️ 3. Ba Nguyên Tắc Vàng (Guard Rails)

<table>
<tr>
<td width="33%" align="center">
  <h3>🚫 Zero Overwrite</h3>
  <p>Tuyệt đối cấm ghi đè file gốc.<br/><b><code>input !== output</code></b></p>
</td>
<td width="33%" align="center">
  <h3>🔒 Anti-Injection</h3>
  <p>Truyền tham số mảng <b><code>string[]</code></b> qua <code>execFile</code>, triệt tiêu shell injection.</p>
</td>
<td width="33%" align="center">
  <h3>🔄 Smart Fallback</h3>
  <p>Tự động chuyển <b><code>pix_fmt yuv420p</code></b> khi gặp lỗi profile codec.</p>
</td>
</tr>
</table>

---

## 🤖 4. Tích Hợp OpenAI Codex & Google Antigravity

- **File Skill:** `[.agents/skills/ffmpeg-media-agent/SKILL.md](file:///.agents/skills/ffmpeg-media-agent/SKILL.md)`
- **Prompt mẫu kích hoạt:**
  > *"Sử dụng skill ffmpeg-media-agent để kiểm tra video trong thư mục samples, xuất 1 ảnh thumbnail và convert sang MP4 chuẩn hóa vào thư mục work."*

---

## 📁 5. Cấu Trúc Tối Giản

```text
SKILL_FFMPEG_AGENT/
├── ⚡ bootstrap.ps1 / bootstrap.cmd      # Auto-bootstrap môi trường
├── 📂 assets/                            # 3D Banner, Logo & Animated SVGs
├── 📂 .agents/skills/ffmpeg-media-agent/ # Skill definition cho Codex & Antigravity
├── 📂 src/                               # TypeScript Media Engine
├── 📂 samples/                           # Input media mẫu
└── 📂 work/                              # Thư mục chứa output media (đã .gitignore)
```

<div align="center">
  <sub>⚡ Ultra-Fast &bull; 🛡️ Safe &bull; 🤖 AI-Agent Ready</sub>
</div>
