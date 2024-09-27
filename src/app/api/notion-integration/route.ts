import { Client } from '@notionhq/client';
import { NotionAPI } from 'notion-client';

const client = new Client({ auth: process.env.NOTION_API_KEY });
const db_id = process.env.NOTION_DATABASE_ID
const notion = new NotionAPI();

export const getPageBlocks = async (block_id: string ) => {
    const res = await client.blocks.children.list({
        block_id: block_id,
        page_size: 50,
    })
    return res
}

export async function GET() {
    // // Info about database
    // const response = await client.databases.query({
    //     database_id: db_id as string,
    // })
    // return Response.json({
    //     "data": response,
    // })

    // // This will give the information about the page properties
    // const pageId = '918f52863c2043ac901e006d7c0ba0e0';
    // const response = await client.pages.retrieve({
    //     page_id: pageId
    // })

    // return Response.json({
    //     "Data" : response
    // })

    // (async () => {
    //     const blockId = '59833787-2cf9-4fdf-8782-e53db20768a5';
    //     const response = await client.blocks.children.list({
    //         block_id: blockId,
    //         page_size: 50,
    //     });
    //     return Response.json({
    //         "Data":response
    //     })
    // })();

    // // Returned page blocks
    const block_id = '918f52863c2043ac901e006d7c0ba0e0'
    const response = await getPageBlocks(block_id);
    return Response.json({
        "Data" : response
    })

    // const recordMap = await notion.getPage("59833787-2cf9-4fdf-8782-e53db20768a5")
    // return {
    //     props: {
    //         recordMap
    //     }
    // }
}

// ID
// 918f52863c2043ac901e006d7c0ba0e0