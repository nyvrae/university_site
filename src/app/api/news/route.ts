import { NextResponse } from 'next/server';
import NewsData from '@/data/news/newsData';

export async function GET() {
    const newsList = NewsData.reverse().map((item, index) => ({
        id: index + 1,
        date: item.date,
        title: item.title,
        image: item.image 
            ? `/news-photos/${Array.isArray(item.image) ? item.image[0] : item.image}`
            : '/logos/footer_logo.png',
    }));

    return NextResponse.json(newsList);
}
