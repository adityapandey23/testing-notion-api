import { NotionAPI } from 'notion-client';
import NotionPage from '@/components/NotionPage'; // Import the client component

function formatPageId(pageId: string) {
  return `${pageId.slice(0, 8)}-${pageId.slice(8, 12)}-${pageId.slice(12, 16)}-${pageId.slice(16, 20)}-${pageId.slice(20)}`;
}

export default async function Home() {
  // Server-side data fetching with Notion API
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(formatPageId('918f52863c2043ac901e006d7c0ba0e0'));

  return (
    <div>
      {/* Pass the recordMap to the client component */}
      <NotionPage recordMap={recordMap} />
    </div>
  );
}
