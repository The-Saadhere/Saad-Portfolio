import { ImageResponse } from 'next/og'

export const alt = 'Saad Kamal Shaikh, Full Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#09090b',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', fontSize: 96, fontWeight: 800, letterSpacing: -2 }}>
          <span>Saad Kamal Shaikh</span>
          <span style={{ color: '#3B82F6' }}>.</span>
        </div>
        <div style={{ display: 'flex', fontSize: 40, color: '#b4b4b8', marginTop: 16 }}>
          Full-stack developer · Next.js, TypeScript, MongoDB
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#3B82F6', marginTop: 40 }}>
          Karachi · Available for freelance
        </div>
      </div>
    ),
    size
  )
}