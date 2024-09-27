import { NotionRenderer } from 'react-notion-x'
import { NotionAPI } from 'notion-client'
import 'react-notion-x/src/styles.css'

function formatPageId(pageId: string) {
  return `${pageId.slice(0, 8)}-${pageId.slice(8, 12)}-${pageId.slice(12, 16)}-${pageId.slice(16, 20)}-${pageId.slice(20)}`
}


export default async function Home() {
  // const response = await fetch('http://localhost:3000/api/notion-integration')
  // const final_response = await response.json();
  const notion = new NotionAPI()
  const recordMap = await notion.getPage(formatPageId("918f52863c2043ac901e006d7c0ba0e0"))
  console.log(recordMap)

  return (<div>
    {/* Rendering the Notion page content */}
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      darkMode={false}
    />
  </div>);
}
