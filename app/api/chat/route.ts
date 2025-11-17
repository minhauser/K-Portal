import { NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { OpenAI } from 'openai';
import { prisma } from '@/lib/prisma';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return new Response('Unauthorized', { status: 401 });
    }

    const { message } = await req.json();

    if (!message || typeof message !== 'string') {
      return new Response('Invalid message', { status: 400 });
    }

    // Get user's preferred language from session or default to Korean
    const locale = req.headers.get('x-locale') || 'ko';

    const systemPrompt = locale === 'ko' 
      ? '당신은 한국에서 생활, 일, 공부에 대한 정보를 제공하는 전문 AI 어시스턴트입니다. 정확하고 친절하게 답변해주세요.'
      : locale === 'ru'
      ? 'Вы - профессиональный AI-ассистент, предоставляющий информацию о жизни, работе и учебе в Южной Корее. Отвечайте точно и дружелюбно.'
      : locale === 'uz'
      ? 'Siz Janubiy Koreyada yashash, ishlash va o\'qish haqida ma\'lumot beruvchi professional AI yordamchisisiz. Aniq va do\'stona javob bering.'
      : 'You are a professional AI assistant providing information about life, work, and study in South Korea. Answer accurately and kindly.';

    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const response = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    // Save chat history to database
    await prisma.chatMessage.create({
      data: {
        userId: session.user.id,
        message,
        response,
      },
    });

    return Response.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}

