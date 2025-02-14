'use client'

import React, { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import FeedCard from './FeedCard'

import { NewsItem } from '@/types/newsItem'

const ITEMS_PER_PAGE = 10

const ArrowLeft = ({ className }: { className: string }) => (
    <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            className={className}
            d="M0.292893 7.2929C-0.0976311 7.68342 -0.097631 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928934C7.68054 0.538409 7.04738 0.53841 6.65685 0.928934L0.292893 7.2929ZM26 7L1 7L1 9L26 9L26 7Z"
        />
    </svg>
)

const ArrowRight = ({ className }: { className: string }) => (
    <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            className={className}
            d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM0 9H25V7H0V9Z"
        />
    </svg>
)


const PaginationButton = ({
    onClick,
    disabled,
    direction
}: {
    onClick?: () => void
    disabled: boolean
    direction: 'prev' | 'next'
}) => {
    const text = direction === 'prev' ? 'Предыдущая' : 'Следующая'
    const className = `flex items-center gap-2 ${disabled ? 'text-gray' : 'text-black'}`

    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {direction === 'prev' && <ArrowLeft className={disabled ? 'fill-gray' : 'fill-black'} />}
            <span>{text}</span>
            {direction === 'next' && <ArrowRight className={disabled ? 'fill-gray' : 'fill-black'} />}
        </button>
    )
}

const Feed = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [newsList, setNewsList] = useState<NewsItem[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const currentPage = parseInt(searchParams.get('page') || '1', 10)
    const [startIndex, endIndex] = [(currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE]

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true)
                setError(null)
                const res = await fetch('/api/news')
                if (!res.ok) throw new Error(`Ошибка загрузки данных: ${res.status}`)
                const data = await res.json()
                setNewsList(data)
            } catch (error) {
                console.error('Ошибка при загрузке новостей:', error)
                setError('Не удалось загрузить новости')
            } finally {
                setIsLoading(false)
            }
        }
        fetchNews()
    }, [])

    const handlePageChange = (page: number) => {
        router.push(`/news?page=${page}#section-news`)
    }

    if (isLoading) return <div>Загрузка...</div>
    if (error) return <div>Ошибка: {error}</div>
    if (newsList.length === 0) return <div>Новости не найдены</div>

    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <section id="section-news" className="news-feed">
                <div className="news-feed__wrapper wrapper--my">
                    <h2 className="flex items-center uppercase font-semibold">
                        <span className="wwtitle--bold">Лента новостей</span>
                        <span className="upper-arrow">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 22.5L6.25 20.75L18.25 8.75H7.5V6.25H22.5V21.25H20V10.5L8 22.5Z"
                                    className="fill-black fill-opacity-1;" />
                            </svg>
                        </span>
                    </h2>

                    <div className="news-feed__block-news grid grid-cols-1 lg:grid-cols-2 gap-x-[75px] mt-[25px] gap-y-[80px]">
                        {newsList.slice(startIndex, endIndex).map((news) => (
                            <FeedCard key={news.id} news={news} />
                        ))}
                    </div>

                    <div className="pagination flex justify-between items-center mt-[60px]">
                        <PaginationButton
                            direction="prev"
                            disabled={currentPage <= 1}
                            onClick={currentPage > 1 ? () => handlePageChange(currentPage - 1) : undefined}
                        />
                        <PaginationButton
                            direction="next"
                            disabled={endIndex >= newsList.length}
                            onClick={endIndex < newsList.length ? () => handlePageChange(currentPage + 1) : undefined}
                        />
                    </div>
                </div>
            </section>
        </Suspense>
    )
}

export default Feed

