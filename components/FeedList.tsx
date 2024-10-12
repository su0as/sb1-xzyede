"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type FeedItem = {
  id: number;
  title: string;
  category: string;
  content: string;
};

const mockData: FeedItem[] = [
  { id: 1, title: "New AI breakthrough", category: "content", content: "Researchers have made a significant advancement in AI technology..." },
  { id: 2, title: "Upcoming Hackathon", category: "parties", content: "Join us for a 48-hour coding marathon next month..." },
  { id: 3, title: "Profile: Jane Doe", category: "humans", content: "Meet Jane Doe, a rising star in the tech industry..." },
  { id: 4, title: "Open Source Project Launch", category: "projects", content: "A new open-source project aims to revolutionize data processing..." },
  { id: 5, title: "Grant Opportunity", category: "challenges", content: "Applications are now open for the annual Tech Innovation Grant..." },
];

export default function FeedList({ category }: { category: string }) {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const filteredItems = category === 'all' 
      ? mockData 
      : mockData.filter(item => item.category === category);
    setFeedItems(filteredItems);
  }, [category]);

  if (!mounted) return null;

  return (
    <div className="space-y-4">
      {feedItems.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              {item.title}
              <Badge>{item.category}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{item.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}