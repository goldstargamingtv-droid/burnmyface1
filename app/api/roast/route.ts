import { NextRequest } from 'next/server'

const GROK_API_KEY = process.env.GROK_API_KEY

export async function POST(req: NextRequest) {
  const { image, facts } = await req.json()

  const response = await fetch('https://api.x.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GROK_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'grok-beta',
      messages: [{
        role: 'user',
        content: [
          { type: 'text', text: `Roast this person as brutally and creatively as possible. Be hilarious, no limits, go hard. Extra facts: ${facts || 'none'}` },
          { type: 'image_url', image_url: { url: image } }
        ]
      }],
      max_tokens: 500
    })
  })

  const data = await response.json()
  return Response.json({ roast: data.choices[0].message.content })
}
