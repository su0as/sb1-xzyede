import FeedList from '@/components/FeedList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Cracked AF</h1>
      <p className="text-xl text-muted-foreground">To be absolutely insane (really good) in a certain activity.</p>
      
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">ALL</TabsTrigger>
          <TabsTrigger value="humans">HUMANS</TabsTrigger>
          <TabsTrigger value="content">CONTENT</TabsTrigger>
          <TabsTrigger value="projects">PROJECTS</TabsTrigger>
          <TabsTrigger value="challenges">CHALLENGES & GRANTS</TabsTrigger>
          <TabsTrigger value="parties">PARTIES & EVENTS</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <FeedList category="all" />
        </TabsContent>
        <TabsContent value="humans">
          <FeedList category="humans" />
        </TabsContent>
        <TabsContent value="content">
          <FeedList category="content" />
        </TabsContent>
        <TabsContent value="projects">
          <FeedList category="projects" />
        </TabsContent>
        <TabsContent value="challenges">
          <FeedList category="challenges" />
        </TabsContent>
        <TabsContent value="parties">
          <FeedList category="parties" />
        </TabsContent>
      </Tabs>
    </div>
  );
}